import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import OneCandidatePage from '../ui/OneCandidatePage';
import axiosInstance from '../../axiosInstance';
export default function JobPage({user}) {
    const [candidates, setCandidates] = useState([]);
  
    useEffect(() => {
      fetchData();
      document.addEventListener('candidate-updated', fetchData);
    }, []);
    
    const fetchData = () => {
      axiosInstance('/candidates').then((res) => {
        setCandidates(res.data);
        
      });
    };
  
  
    return (
      <Row>
        {candidates.map((candidate) => {
          if (candidate.Stage.name === 'Принял оффер и вышел на работу') {
            return (
              <Row key={candidate.id}>
                <Col xs={12}>
                  <OneCandidatePage candidate={candidate} user={user}/>
                </Col>
              </Row>
            );
          } else {
            return null;
          }
        })}
      </Row>
    );
  }
  