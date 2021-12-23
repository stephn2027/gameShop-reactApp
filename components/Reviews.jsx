import React from 'react';
import ReviewRating from './ReviewRating';
import { Card } from 'react-bootstrap';
import container from '../styles/Container.module.css';
export default function Reviews({ comment, val, reviewtext, user }) {
  return (
    <React.Fragment>
      <Card className={container.reviewcard_container}>
        <Card.Body className={container.reviewcard_body}>
          <Card.Title>{comment}</Card.Title>
          <ReviewRating val={val} />
          <Card.Subtitle className="mb-2 text-muted">{user}</Card.Subtitle>
          <Card.Text>{reviewtext}</Card.Text>
          
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
