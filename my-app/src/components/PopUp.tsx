import { findAllByDisplayValue } from '@testing-library/dom';
import { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function PopUp() {
  const [message, setMessage] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<string>('');


  function saveChanges() {
    if (data === '') {
      setShow(true);
      setMessage('Невозможно сохранить имя')
    }
    else if (data.length < 4) {
      setMessage('Ваше имя слишком короткое')
    }
    else {
      setShow(false);
      localStorage.setItem('data', data);
      window.location.reload();
    }
  }


  useEffect(() => {
    if (localStorage.getItem('data') !== null) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Введите данные</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Ваше ФИО:</Form.Label>
              <div style={{ color: 'red' }}>{message}</div>
              <Form.Control type="text" placeholder="Например: Иванов Иван" onChange={(event) => setData(event.target.value)} />
              <Form.Text className="text-muted">
                Ваши данные надёжно защищены.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={saveChanges}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUp;