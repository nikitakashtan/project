import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Импортируем AnimatePresence
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FullInformationCard from './FullInformationCard';

export default function OneCandidatePage({ candidate }) {
  const [showFullInfo, setShowFullInfo] = useState(false);

  const cardStyle = {
    width: '20rem',
    marginBottom: '20px',
    marginTop: '20px',
    height: '300px',
    position: 'relative',
    flex: '1 1 auto',
  };

  const buttonStyle = {
    position: 'absolute',
    bottom: '20px', 
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const handleToggleFullInfo = () => {
    setShowFullInfo(!showFullInfo);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', paddingRight: showFullInfo ? '10px' : '0' }}>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title style={{ marginBottom: '20px' }}> {candidate.name}</Card.Title>
            <Card.Text>Email: {candidate.email}</Card.Text>
            <Card.Text>Телефон: {candidate.phone}</Card.Text>
            <Card.Text>Опыт работы: {candidate.experience}</Card.Text>
              <Button 
                variant="dark" 
                style={buttonStyle} 
                onClick={handleToggleFullInfo}
              >
                {showFullInfo ? "Скрыть информацию" : "Подробная информация"}
              </Button>

          </Card.Body>
        </Card>
      </div>
      <AnimatePresence>
        {showFullInfo && ( // Добавляем AnimatePresence
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }} 
            transition={{ duration: 0.3 }} 
          >
            <FullInformationCard candidate={candidate} onClose={() => setShowFullInfo(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
