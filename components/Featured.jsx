import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import HoverRating from '../components/HoverRating';
import TextDetails from './TextDetails';
import Reviews from './Reviews';
import Accordions from './Accordions';
export default function Featured({ product }) {
  const [reviews, setReviews] = useState([product.reviews]);
  const [details,setDetails] = useState(product.details);
   
  useEffect(() => {
    setReviews(product.reviews);
    setDetails(product.details);
  }, [product]);

  return (
    <React.Fragment>
      <div className={styles.displayWrapper}>
        <div key={product.id} className={styles.displayMain} id="featured">
          <div className={styles.displayContainer}>
            <div className={styles.imageWrapper}>
              <img src={product.image[0].url} alt={`Preview of ${product.name}`} />
            </div>
            <div className={styles.textwrapper}>
              <h3>{product.name}</h3>
              <HoverRating readOnly={false} />
              <p className={styles.mainDescription}>{product.description}</p>
              <p>${product.price}</p>
              <p>
                <button
                  className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image[0].url}
                  data-item-name={product.name}
                  data-item-url="/"
                  data-item-price={product.price}
                >
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
          <div className={styles.displayAdditional}>
            <Accordions
              details={details}
              
              reviews={reviews}
              
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
