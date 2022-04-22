import { useEffect, useState } from "react";
import { Button, Card, CloseButton, Collapse } from "react-bootstrap";
import '../AddNewCard/Styles.css'
// @ts-ignore
function Card1() {
  // title
  const [open, setOpen] = useState<boolean>(false);
  // @ts-ignore
  const [newTitle, setNewTitle] = useState<string>(localStorage.getItem('nameCard') ? localStorage.getItem('nameCard') : 'Todo');
  // @ts-ignore
  console.log(newTitle)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setNewTitle(e.target.value)

  }
  useEffect(() => {
    console.log('отправил пустоту')
    localStorage.setItem('nameCard', newTitle)
  }, [newTitle])

  // containerCard

  const [close, setClose] = useState<boolean>(false);
  const [title, setTitle] = useState('');
  console.log('title:', title)
  // @ts-ignore
  const [cards, setCards] = useState(() => JSON.parse(localStorage.getItem('title')) || [])
  // @ts-ignore

  useEffect(() => {
    localStorage.setItem('title', JSON.stringify(cards))

  }, [cards])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }
  const handleBtnConfirm = () => {
    if (title === '') {
    } else if (title !== 'Todo') {
      // @ts-ignore
      setCards((prev) => [...prev, { id: Date.now(), title }])
      setTitle('')
      setClose(!close)
    }
  }

  const handleBlur = () => {
    setClose(close)
  }

  return (
    <>
      <Card className="MainCard">
        {open ? (<div>
          <input
            className="DataInput"
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            placeholder='Изменить название'
          />
        </div>) : (
          <div>
            <span
              style={{ padding: '10px' }}
              onClick={() => setOpen(!open)}>
              {localStorage.getItem('nameCard') ? localStorage.getItem('nameCard') : 'Todo'}
            </span>
          </div>
        )}

        {/* // @ts-ignore */}
        {cards.length > 0 && cards.map((item: any) => (
          // @ts-ignore
          <div key={item.id} className="CardTitle">{item.title}</div>
        ))}



        {/* 2 часть */}
        <Collapse in={close}>
          <div>

            <div className='AddCardComment' >
              <input
                // @ts-ignore
                onChange={handleChange}
                onBlur={handleBlur}
                className='AddCardCommentInput'
                placeholder='Введите название карточки'
                value={title}
              />
            </div>

            <div>
              <Button onClick={handleBtnConfirm} variant="primary" style={{ margin: '10px' }}>Добавить карточку</Button>
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
      </Card>

    </>
  )
};

export default Card1;