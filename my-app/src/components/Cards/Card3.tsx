import { useEffect, useState } from "react";
import { Button, Card, CloseButton, Collapse } from "react-bootstrap";
import '../AddNewCard/Styles.css'
// @ts-ignore
function Card3() {
  // title
  const [open3, setOpen3] = useState<boolean>(false);
  // @ts-ignore
  const [newTitle3, setNewTitle3] = useState<string>(localStorage.getItem('nameCard3') ? localStorage.getItem('nameCard3') : 'Testing');
  // @ts-ignore

  const handleOnChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setNewTitle3(e.target.value)

  }
  useEffect(() => {
    localStorage.setItem('nameCard3', newTitle3)
  }, [newTitle3])

  // containerCard

  const [close3, setClose3] = useState<boolean>(false);
  const [title3, setTitle3] = useState('');
  // @ts-ignore
  const [cards3, setCards3] = useState(() => JSON.parse(localStorage.getItem('title3')) || [])
  // @ts-ignore

  useEffect(() => {
    localStorage.setItem('title3', JSON.stringify(cards3))

  }, [cards3])


  const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle3(e.target.value);
  }
  const handleBtnConfirm3 = () => {
    if (title3 === '') {
    } else if (title3 !== 'Todo') {
      // @ts-ignore
      setCards3((prev) => [...prev, { id: Date.now(), title3 }])
      setTitle3('')
      setClose3(!close3)
    }
  }

  const handleBlur3 = () => {
    setClose3(close3)
  }

  return (
    <>
      <Card className="MainCard">
        {open3 ? (<div>
          <input
            className="DataInput"
            onChange={handleOnChange3}
            autoFocus
            value={newTitle3}
            placeholder='Изменить название'
          />
        </div>) : (
          <div>
            <span
              style={{ padding: '10px' }}
              onClick={() => setOpen3(!open3)}>
              {localStorage.getItem('nameCard3') ? localStorage.getItem('nameCard3') : 'Testing'}
            </span>
          </div>
        )}

        {/* // @ts-ignore */}
        {cards3.length > 0 && cards3.map((item: any) => (
          // @ts-ignore
          <div key={item.id} className="CardTitle">{item.title3}</div>
        ))}



        {/* 2 часть */}
        <Collapse in={close3}>
          <div>

            <div className='AddCardComment' >
              <input
                // @ts-ignore
                onChange={handleChange3}
                onBlur={handleBlur3}
                className='AddCardCommentInput'
                placeholder='Введите название карточки'
                value={title3}
              />
            </div>

            <div>
              <Button onClick={handleBtnConfirm3} variant="primary" style={{ margin: '10px' }}>Добавить карточку</Button>
              <CloseButton onClick={() => setClose3(!close3)} />
            </div>
          </div>
        </Collapse>

        <Collapse in={!close3}>
          <div className="AddCard"
            onClick={() => setClose3(!close3)}
          >
            + Добавить карточку
          </div>
        </Collapse>
      </Card>

    </>
  )
};

export default Card3;