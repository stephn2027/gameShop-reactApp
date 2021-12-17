import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Reviews from './Reviews';
import TextDetails from './TextDetails';
import { uuid } from 'uuidv4';
import container from '../styles/Container.module.css';
export default function Accordions({ reviews, details }) {
  const gameDetails = details[0].productDetails[0].html;
  const features = details[0].features;

  return (
    <React.Fragment>
      <Accordion defaultActiveKey={false} flush className={container.accordion}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>More Details</Accordion.Header>
          <Accordion.Body>
            <TextDetails title="About this game:" info={gameDetails} />
            <h2>Features:</h2>

            {features.map((feature) => {
              return (
                <ul key={uuid()}>
                  <li>{feature.feature}</li>
                </ul>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Reviews</Accordion.Header>
          <Accordion.Body>
            {reviews.map((review) => (
              <Reviews
                key={uuid()}
                val={review.rating}
                comment={review.comment}
                user={review.user}
                reviewtext={review.review}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </React.Fragment>
  );
}
