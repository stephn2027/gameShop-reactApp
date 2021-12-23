import React, { useState, useEffect, useRef } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import logo from '../public/images/gameShopLogo.png';

import { Navbar, Container } from 'react-bootstrap';
export default function Nav() {
  const [total, setTotal] = useState(0);
  const totalRef = useRef();
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        variant="light"
        bg="light"
        fixed="top"
        style={{
          zIndex: 1,
          backgroundColor: '#079de6',
          background: 'radial-gradient(circle at 50% 50%,#c8d9e2, #e3ecf1)',
        }}
      >
        <Container>
          <Navbar.Brand href="#">
            <Image
              src={logo}
              alt="gameshop logo"
              width={200}
              height={60}
              priority
            />
          </Navbar.Brand>
          <a
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: 'none', color: 'var(--orange)' }}
          >
            <span className="snipcart-summary">visit cart &nbsp; </span>
            <FaShoppingCart />

            <strong className="sr-only">Cart</strong>
            <span ref={totalRef} className="snipcart-total-price">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(total)}
            </span>
          </a>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
