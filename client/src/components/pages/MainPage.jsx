import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import OneCandidatePage from '../ui/OneCandidatePage';
import axiosInstance from '../../axiosInstance';
import FullInformationCard from '../ui/FullInformationCard';

export default function HomePage() {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    axiosInstance('/candidates').then((res) => {
      setCandidates(res.data);
    });
  }, []);

  return (
    <Row>
      {candidates.map((candidate) => (
        
          <Row>
          
              <OneCandidatePage candidate={candidate} />
      
       
              {/* <FullInformationCard candidate={candidate} /> */}
    
          </Row>
 
      ))}
    </Row>
  );
}
