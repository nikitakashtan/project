import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../axiosInstance';

export default function FullInformationCard({ candidate }) {
    const [editing, setEditing] = useState(false);
    const [updatedCandidate, setUpdatedCandidate] = useState({});
    const [currentCandidate, setCurrentCandidate] = useState(candidate); // Новое состояние для основного кандидата

    const cardStyle = {
        marginBottom: '20px',
        marginTop: '20px',
        height: '300px',
        width: '700px'
    };

    const imageStyle = {
        height: '100%', 
        objectFit: 'cover' 
    };

    const buttonStyle = {
        position: 'absolute',
        bottom: '20px',
        right: '20px' 
    };

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            const formData = new FormData();
            for (const key in updatedCandidate) {
                formData.append(key, updatedCandidate[key]);
            }
            await axiosInstance.put(`/candidates/${currentCandidate.id}`, formData); // Используем текущего кандидата для отправки запроса
            // Обновляем основного кандидата
            setCurrentCandidate(updatedCandidate);
            setEditing(false);
        } catch (error) {
            console.error('Ошибка при сохранении данных:', error);
            // Обработка ошибки сохранения данных
        }
    };

    const handleInputChange = (e) => {
        setUpdatedCandidate({
            ...updatedCandidate,
            [e.target.name]: e.target.value
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
        >
            <Card style={cardStyle} className="bg-dark text-white">
                <Card.Img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614408020_23-p-biznes-fon-temnii-31.jpg" alt="Card image" style={imageStyle}/>
                <Card.ImgOverlay>
                    <Card.Title>Имя: {editing ? <input type="text" name="name" value={updatedCandidate.name || currentCandidate.name} onChange={handleInputChange} /> : currentCandidate.name}</Card.Title>
                    <Card.Text>Email: {editing ? <input type="text" name="email" value={updatedCandidate.email || currentCandidate.email} onChange={handleInputChange} /> : currentCandidate.email}</Card.Text>
                    <Card.Text>Телефон: {editing ? <input type="text" name="phone" value={updatedCandidate.phone || currentCandidate.phone} onChange={handleInputChange} /> : currentCandidate.phone}</Card.Text>
                    <Card.Text>Ссылка на Zoom: {editing ? <input type="text" name="zoom" value={updatedCandidate.zoom || currentCandidate.zoom} onChange={handleInputChange} /> : (currentCandidate.zoom !== null ? currentCandidate.zoom : "Нет")}</Card.Text>
                    <Card.Text>Ссылка на Skype: {editing ? <input type="text" name="skype" value={updatedCandidate.skype || currentCandidate.skype} onChange={handleInputChange} /> : (currentCandidate.skype !== null ? currentCandidate.skype : "Нет")}</Card.Text>
                    <Card.Text>Ссылка на HeadHunter: {editing ? <input type="text" name="hh" value={updatedCandidate.hh || currentCandidate.hh} onChange={handleInputChange} /> : (currentCandidate.hh !== null ? currentCandidate.hh : "Нет")}</Card.Text>
                    <Card.Text>
    Этап собеседования: {editing ? <input type="text" name="stage" value={updatedCandidate.stage?.name || ''} onChange={handleInputChange} /> : (currentCandidate.Stage ? currentCandidate.Stage.name : '')}
</Card.Text>
                    <Button variant="outline-success" style={buttonStyle} onClick={editing ? handleSaveClick : handleEditClick}>{editing ? 'Сохранить' : 'Изменить информацию'}</Button>
                </Card.ImgOverlay>
            </Card>
        </motion.div>
    );
}
