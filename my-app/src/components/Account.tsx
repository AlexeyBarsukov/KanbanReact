import { Button, Container, Navbar } from "react-bootstrap";

function Account() {
  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const getData = localStorage.getItem('data');


  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">{getData}</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="secondary" onClick={clearStorage}>Изменить имя</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Account;