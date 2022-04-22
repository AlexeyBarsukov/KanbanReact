import { useContext, useState } from 'react';
import { Button, CloseButton, Collapse } from 'react-bootstrap';
import storeAPI from '../../utils/storeApi';
import './Styles.css';

// @ts-ignore
function ContainerCard({ listId, type }) {
  const [close, setClose] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  // @ts-ignore
  const { addMoreCard, addMoreList } = useContext(storeAPI);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }
  const handleBtnConfirm = () => {
    if (type === 'card') {
      addMoreCard(title, listId);
      localStorage.setItem('title', title)
      setTitle('')
      setClose(!close)
    } else {
      addMoreList(title)
      setTitle('')
      setClose(!close)
    }
  }

  const handleBlur = () => {
    setClose(close)
  }

  return (
    <>
      <Collapse in={close}>
        <div>

          <div className='AddCardComment' >
            <input
              // @ts-ignore
              listId={listId}
              type={type}
              onChange={handleOnChange}
              onBlur={handleBlur}
              className='AddCardCommentInput'
              placeholder={type === 'card' ? 'Введите название карточки' : 'Введите название колонки'}
              value={title}
            />
          </div>

          <div>
            <Button onClick={handleBtnConfirm} variant="primary" style={{ margin: '10px' }}>{type === 'card' ? 'Добавить в список' : 'Добавить новую карточку'}</Button>
            <CloseButton onClick={() => setClose(!close)} />
          </div>
        </div>
      </Collapse>

      <Collapse in={!close}>
        <div className="AddCard"
          onClick={() => setClose(!close)}
        >
          Добавить карточку1
        </div>
      </Collapse>
    </>
  )
}

export default ContainerCard;
