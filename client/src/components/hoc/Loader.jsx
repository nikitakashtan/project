import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function Loader({ isLoading, children }) {
  if (isLoading) {
    return (
      <Spinner animation="border" role="status" style={{ width: '200px', height: '200px' }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return children;
}
