import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import OneCandidatePage from '../ui/OneCandidatePage';
import axiosInstance from '../../axiosInstance';
import FullInformationCard from '../ui/FullInformationCard';

export default function HomePage({user}) {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    axiosInstance('/candidates').then((res) => {
      const sortedCandidates = res.data.sort((a, b) => b.id - a.id);
      setCandidates(sortedCandidates);
    });
  }, []);

  return (
    <Row>
      {candidates.map((candidate) => (
          <Row>
              <OneCandidatePage candidate={candidate} user={user} />
          </Row>
      ))}
    </Row>
  );
}
