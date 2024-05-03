
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FullInformationCard from './FullInformationCard';
import axiosInstance from '../../axiosInstance'; 

export default function OneCandidatePage({ candidate, user }) {
  const [showFullInfo, setShowFullInfo] = useState(false);
  const [currentCandidate, setCurrentCandidate] = useState(candidate);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const cardStyle = {
    width: '25rem',
    marginBottom: '20px',
    height: '450px',
    position: 'relative',
    flex: '1 1 auto',
  };

  const buttonStyle = {
    position: 'absolute',
    bottom: '20px', 
    left: '50%',
    transform: 'translateX(-50%)',
    height: '40px',
    width: '90%',
    borderRadius: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const textStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333',
    marginBottom: '10px',
  };

  const formGroupStyle = {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  };

  const formControlStyle = {
    height: '50px',
    width: '250px',
    marginRight: '10px',
  };

  const formButtonStyle = {
    height: '50px',
    width: '110px',
    backgroundColor: '#5a5a5a',
    border: 'none',
    color: '#ffffff',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const commentStyle = {
    background: '#e9e9e9',
    borderRadius: '5px',
  };

  const handleToggleFullInfo = () => {
    setShowFullInfo(!showFullInfo);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmitComment = async () => {
    try {
      const response = await axiosInstance.post(`/comments/${currentCandidate.id}`, { name: commentText });
      setComments([...comments, response.data]);
      setCommentText('');
    } catch (error) {
      console.error('Ошибка при добавлении комментария:', error);
    }
  };

  useEffect(() => {
    const loadComments = async () => {
      const response = await axiosInstance.get(`/comments/${currentCandidate.id}`);
      setComments(response.data);
    };
    loadComments();
  }, [currentCandidate.id]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', paddingRight: showFullInfo? '10px' : '0' }}>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title style={{ marginBottom: '20px' }}>{currentCandidate.name}</Card.Title>
            <Card.Text style={textStyle}><strong>Email:</strong>  {currentCandidate.email}</Card.Text>
            <Card.Text style={textStyle}><strong>Телефон:</strong>  {currentCandidate.phone}</Card.Text>
            <Card.Text style={textStyle}><strong>Опыт работы:</strong> {currentCandidate.experience}</Card.Text>
           
            <Card.Title style={{ marginBottom: '20px' }}>Комментарии</Card.Title>
            {comments.map((comment, index) => (
              <div key={comment.id} style={commentStyle}>
                <p style={textStyle}>{index + 1}. <strong>{comment.name}</strong></p>
              </div>
            ))}

            {user && (
              <Form.Group controlId="commentForm" style={formGroupStyle}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Введите ваш комментарий"
                  value={commentText}
                  onChange={handleCommentChange}
                  style={formControlStyle}
                />
                <Button variant="dark" style={formButtonStyle} onClick={handleSubmitComment}>
                  Отправить
                </Button>
              </Form.Group>
            )}

            <Button 
              variant="dark" 
              style={buttonStyle} 
              onClick={handleToggleFullInfo}
            >
              {showFullInfo? "Скрыть информацию" : "Подробная информация"}
            </Button>
          </Card.Body>
        </Card>
      </div>
      <AnimatePresence>
        {showFullInfo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }} 
            transition={{ duration: 0.3 }} 
          >
            <FullInformationCard
              candidate={currentCandidate}
              onClose={() => setShowFullInfo(false)}
              updateCandidate={setCurrentCandidate}
              user={user}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
