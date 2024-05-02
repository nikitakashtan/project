import React from 'react';
import { motion } from 'framer-motion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function FullInformationCard({ candidate, onClose }) {
    const cardStyle = {
        marginBottom: '20px',
        marginTop: '20px',
        height: '300px'
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Начальные стили (невидимость и уменьшение масштаба)
      animate={{ opacity: 1, scale: 1 }} // Стили при анимации (плавное появление и возврат к нормальному масштабу)
      exit={{ opacity: 0, scale: 0.8 }} // Стили при исчезновении (плавное исчезновение и уменьшение масштаба)
      transition={{ duration: 0.3 }} // Длительность анимации
    >
      <Card style={cardStyle} className="bg-dark text-white">
        <Card.Img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614408020_23-p-biznes-fon-temnii-31.jpg" alt="Card image" style={imageStyle}/>
        <Card.ImgOverlay>
          <Card.Title>{candidate.name}</Card.Title>
          <Card.Text>
            Email: {candidate.email}
            </Card.Text>
            <Card.Text>
              Телефон: {candidate.phone}
            </Card.Text>
            <Card.Text>
            Ссылка на Zoom: {candidate.zoom}
            </Card.Text>
            <Card.Text>
            Ссылка на Skype: {candidate.skype}
            </Card.Text>
            <Card.Text>
            Ссылка на HeadHunder: {candidate.hh}
            </Card.Text>
            <Card.Text>
            Этап собеседования: {candidate.Stage ? candidate.Stage.name : ''}
            </Card.Text>
            <Button variant="dark" style={buttonStyle} onClick={onClose}>Закрыть</Button>
        </Card.ImgOverlay>
      </Card>
    </motion.div>
);
}
