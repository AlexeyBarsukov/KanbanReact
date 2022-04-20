import { useState } from 'react';
import { Button, CloseButton, Collapse } from 'react-bootstrap';
import './Styles.css'

function ContainerCard() {
  const [close, setClose] = useState<boolean>(false)
  return (
    <>
      <Collapse in={close}>
        <div>

          <div className='AddCardComment' >
            <input
              onBlur={() => setClose(false)}
              className='AddCardCommentInput'
              placeholder='Введите название карточки'
            />
          </div>

          <div>
            <Button variant="primary" style={{ margin: '10px' }}>Добавить карточку2</Button>
            <CloseButton onClick={() => setClose(!close)} />
          </div>
        </div>
      </Collapse>

      <Collapse in={!close}>
        <div className="AddCard"
          onClick={() => setClose(!close)}
        >
          + Добавить карточку
        </div>
      </Collapse>
    </>
  )
}

export default ContainerCard;