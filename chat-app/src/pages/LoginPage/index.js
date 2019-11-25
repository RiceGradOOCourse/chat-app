import { Navbar, Jumbotron, Button, Form, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import styles from './Login.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export default () => {
    return (
        <section className={styles.content}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Region</Form.Label>
            <Form.Control as="select">
              <option>South Aferica</option>
              <option>Acian</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
            <Form.Label>University</Form.Label>
            <Form.Control as="select">
              <option>Rice University</option>
              <option>USC</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </section>
    )
}