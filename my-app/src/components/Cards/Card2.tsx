import { useEffect, useState } from "react";
import { Button, Card, CloseButton, Collapse } from "react-bootstrap";
import '../AddNewCard/Styles.css'
// @ts-ignore
function Card2() {
  // title
  const [open2, setOpen2] = useState<boolean>(false);
  // @ts-ignore
  const [newTitle2, setNewTitle2] = useState<string>(localStorage.getItem('nameCard2') ? localStorage.getItem('nameCard2') : 'In Progress');
  // @ts-ignore

  const handleOnChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setNewTitle2(e.target.value)

  }
  useEffect(() => {
    localStorage.setItem('nameCard2', newTitle2)
  }, [newTitle2])

  // containerCard

  const [close2, setClose2] = useState<boolean>(false);
  const [title2, setTitle2] = useState('');
  // @ts-ignore
  const [cards2, setCards2] = useState(() => JSON.parse(localStorage.getItem('title2')) || [])
  // @ts-ignore

  useEffect(() => {
    localStorage.setItem('title2', JSON.stringify(cards2))

  }, [cards2])


  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle2(e.target.value);
  }
  const handleBtnConfirm2 = () => {
    if (title2 === '') {
    } else if (title2 !== 'Todo') {
      // @ts-ignore
      setCards2((prev) => [...prev, { id: Date.now(), title2 }])
      setTitle2('')
      setClose2(!close2)
    }
  }

  const handleBlur2 = () => {
    setClose2(close2)
  }

  return (
    <>
      <Card className="MainCard">
        {open2 ? (<div>
          <input
            className="DataInput"
            onChange={handleOnChange2}
            autoFocus
            value={newTitle2}
            placeholder='Изменить название'
          />
        </div>) : (
          <div>
            <span
              style={{ padding: '10px' }}
              onClick={() => setOpen2(!open2)}>
              {localStorage.getItem('nameCard2') ? localStorage.getItem('nameCard2') : 'In progress'}
            </span>
          </div>
        )}

        {/* // @ts-ignore */}
        {cards2.length > 0 && cards2.map((item: any) => (
          // @ts-ignore
          <div key={item.id} className="CardTitle">{item.title2}</div>
        ))}



        {/* 2 часть */}
        <Collapse in={close2}>
          <div>

            <div className='AddCardComment' >
              <input
                // @ts-ignore
                onChange={handleChange2}
                onBlur={handleBlur2}
                className='AddCardCommentInput'
                placeholder='Введите название карточки'
                value={title2}
              />
            </div>

            <div>
              <Button onClick={handleBtnConfirm2} variant="primary" style={{ margin: '10px' }}>Добавить карточку</Button>
              <CloseButton onClick={() => setClose2(!close2)} />
            </div>
          </div>
        </Collapse>

        <Collapse in={!close2}>
          <div className="AddCard"
            onClick={() => setClose2(!close2)}
          >
            + Добавить карточку
          </div>
        </Collapse>
      </Card>

    </>
  )
};

export default Card2;