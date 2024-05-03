import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../axiosInstance';

export default function FullInformationCard({ candidate, updateCandidate, user }) {
    const [editing, setEditing] = useState(false);
    const [updatedCandidate, setUpdatedCandidate] = useState(candidate);
    const [stages, setStages] = useState([]);

    useEffect(() => {
        axiosInstance.get('/stages')
            .then(response => {
                setStages(response.data);
            })
            .catch(error => {
                console.error('Ошибка при загрузке этапов с сервера:', error);
            });
    }, []);


    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            const formData = new FormData();
            for (const key in updatedCandidate) {
                formData.append(key, updatedCandidate[key]);
            }
            const response = await axiosInstance.put(`/candidates/${candidate.id}`, formData);
            setUpdatedCandidate(response.data);
            const updatedStage = stages.find(stage => stage.id === response.data.stage_id);
            setUpdatedCandidate(prevState => ({
               ...prevState,
                stage_name: updatedStage ? updatedStage.name : '',
                stage_id: response.data.stage_id 
            }));
    
            updateCandidate(response.data);
    
            setEditing(false);
        } catch (error) {
            console.error('Ошибка при сохранении данных:', error);
        }
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedCandidate({
            ...updatedCandidate,
            [name]: value
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="bg-dark text-white mb-5" style={{ width: '700px', height: '300px' }}>
                <Card.Img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614408020_23-p-biznes-fon-temnii-31.jpg" alt="Card image" style={{ height: '100%', objectFit: 'cover' }} />
                <Card.ImgOverlay>
                    <Card.Title>Имя: {editing ? <input type="text" name="name" value={updatedCandidate.name || ''} onChange={handleInputChange} /> : candidate.name}</Card.Title>
                    <Card.Text>Email: {editing ? <input type="text" name="email" value={updatedCandidate.email || ''} onChange={handleInputChange} /> : candidate.email}</Card.Text>
                    <Card.Text>Телефон: {editing ? <input type="text" name="phone" value={updatedCandidate.phone || ''} onChange={handleInputChange} /> : candidate.phone}</Card.Text>
                    <Card.Text>Ссылка на Zoom: {editing ? <input type="text" name="zoom" value={updatedCandidate.zoom || ''} onChange={handleInputChange} /> : (updatedCandidate.zoom !== null && updatedCandidate.zoom !== '' ? updatedCandidate.zoom : "Нет" )}</Card.Text>
                    <Card.Text>Ссылка на Skype: {editing ? <input type="text" name="skype" value={updatedCandidate.skype || ''} onChange={handleInputChange} /> : (updatedCandidate.skype !== null && updatedCandidate.skype !== '' ? updatedCandidate.skype : "Нет")}</Card.Text>
                    <Card.Text>Ссылка на HeadHunter: {editing ? <input type="text" name="hh" value={updatedCandidate.hh || ''} onChange={handleInputChange} /> : (updatedCandidate.hh !== null && updatedCandidate.hh !== '' ? updatedCandidate.hh : "Нет")}</Card.Text>

                    <Card.Text>Этап собеседования: {editing ?
                        <Form.Select name="stage_id" value={updatedCandidate.stage_id || ''} onChange={handleInputChange} style={{ cursor: 'pointer' }}>
                            <option disabled>Выберите этап подбора</option>
                            {stages.map(stage => (
                                <option key={stage.id} value={stage.id}>{stage.name}</option>
                            ))}
                        </Form.Select>
                        : stages.find(stage => stage.id === updatedCandidate.stage_id)?.name || ''}
                    </Card.Text>
                    {user && <Button variant="outline-success" style={{ position: 'absolute', bottom: '20px', right: '20px' }} onClick={editing ? handleSaveClick : handleEditClick}>{editing ? 'Сохранить' : 'Изменить информацию'}</Button>}
                </Card.ImgOverlay>
            </Card>
        </motion.div>
    );
}
