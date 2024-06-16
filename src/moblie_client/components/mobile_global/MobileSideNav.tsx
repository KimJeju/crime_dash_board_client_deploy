import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()(() => {
    return {
      root: {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        paddingBottom : "0.5vh",
      },
    };
  });

export function MobileSideNav(){

    const { classes } = useStyles();

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container className={classes.root}>
          <Navbar.Brand href="#home">국내 범죄통계</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">경찰청데이터</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}