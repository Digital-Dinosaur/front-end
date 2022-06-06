import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import LogOut from '../Auth/LogOut';
import { useSelector } from 'react-redux';

function Navigator() {
  const auth = useSelector((state) => {
    return state.auth;
  });

  return (
    <div id="navbar" data-testid="nav">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Infinite Landscape</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="create">Create a Room</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
          </Nav>
        </Container>
        {auth.signedIn ? (
          <LogOut />
        ) : (
          <>
            <Button href="signin" color="primary">
              Login
            </Button>
            <Button href="signup" color="primary">
              Sign Up
            </Button>
          </>
        )}
      </Navbar>
    </div>
  );
}

export default Navigator;
