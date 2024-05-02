import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import OneCandidatePage from '../ui/OneCandidatePage';
import axiosInstance from '../../axiosInstance';


export default function  InvitationPage() {
    const [candidates, setCandidates] = useState([]);
  
    useEffect(() => {
      axiosInstance('/candidates').then((res) => {
        setCandidates(res.data);
      });
    }, []);
  
  
  
    return (
      <Row>
        {candidates.map((candidate) => {
          if (candidate.Stage.name === 'Отправлено письмо-приглашение') {
            return (
              <Row key={candidate.id}>
                <Col xs={12}>
                  <OneCandidatePage candidate={candidate} />
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
  
