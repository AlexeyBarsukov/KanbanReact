import { useEffect, useState } from "react";
import { Button, Card, CloseButton, Collapse } from "react-bootstrap";
import '../AddNewCard/Styles.css'

function Card4() {
  // title
  const [open4, setOpen4] = useState<boolean>(false);
  const [newTitle4, setNewTitle4] = useState(localStorage.getItem('nameCard4') ? localStorage.getItem('nameCard4') : 'Done');

  const handleOnChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle4(e.target.value)

  }
  useEffect(() => {
    // @ts-ignore
    localStorage.setItem('nameCard4', newTitle4);
  }, [newTitle4])

  // containerCard

  const [close4, setClose4] = useState<boolean>(false);
  const [title4, setTitle4] = useState('');
  // @ts-ignore
  const [cards4, setCards4] = useState(() => JSON.parse(localStorage.getItem('title4')) || [])
  // @ts-ignore

  useEffect(() => {
    localStorage.setItem('title4', JSON.stringify(cards4))

  }, [cards4])


  const handleChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle4(e.target.value);
  }
  const handleBtnConfirm4 = () => {
    if (title4 === '') {
    } else if (title4 !== 'Todo') {
      // @ts-ignore
      setCards4((prev) => [...prev, { id: Date.now(), title4 }])
      setTitle4('')
      setClose4(!close4)
    }
  }

  const handleBlur4 = () => {
    setClose4(close4)
  }

  return (
    <>
      <Card className="MainCard">
        {open4 ? (<div>
          <input
            className="DataInput"
            onChange={handleOnChange4}
            autoFocus
            // @ts-ignore
            value={newTitle4}
            placeholder='Изменить название'
          />
        </div>) : (
          <div>
            <span
              style={{ padding: '10px' }}
              onClick={() => setOpen4(!open4)}>
              {localStorage.getItem('nameCard4') ? localStorage.getItem('nameCard4') : 'Done'}
            </span>
          </div>
        )}


        {/* // @ts-ignore */}
        {cards4.length > 0 && cards4.map((item: any) => (
          // @ts-ignore
          <div key={item.id} className="CardTitle">{item.title4} </div>
        ))}


        {/* 2 часть */}
        <Collapse in={close4}>
          <div>

            <div className='AddCardComment' >
              <input
                // @ts-ignore
                onChange={handleChange4}
                onBlur={handleBlur4}
                className='AddCardCommentInput'
                placeholder='Введите название карточки'
                value={title4}
              />
            </div>

            <div>
              <Button onClick={handleBtnConfirm4} variant="primary" style={{ margin: '10px' }}>Добавить карточку</Button>
              <CloseButton onClick={() => setClose4(!close4)} />
            </div>
          </div>
        </Collapse>

        <Collapse in={!close4}>
          <div className="AddCard"
            onClick={() => setClose4(!close4)}
          >
            + Добавить карточку
          </div>
        </Collapse>
      </Card>
    </>
  )
};

export default Card4;