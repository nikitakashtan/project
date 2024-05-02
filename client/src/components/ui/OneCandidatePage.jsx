import React, { useState } from 'react';
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

  const handleShowFullInfo = () => {
    setShowFullInfo(true);
  };

  const handleCloseFullInfo = () => {
    setShowFullInfo(false);
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
            <Button variant="dark" style={buttonStyle} onClick={handleShowFullInfo}>Подробная информация</Button>
          </Card.Body>
        </Card>
      </div>
      {showFullInfo && <FullInformationCard candidate={candidate} onClose={handleCloseFullInfo} />}
    </div>
  );
}
