import React, { useContext, useState } from "react";
import data from "../utils/Data";
import store from '../utils/Data'
import storeApi from "../utils/storeApi";

// @ts-ignore
function TitleOne({ title, listId, cards }) {
  const [open, setOpen] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(title);
  // @ts-ignore
  const { updateListTitle } = useContext(storeApi);
  console.log(newTitle)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ('card1') {
      setNewTitle(e.target.value)
      updateListTitle(newTitle, listId)
      localStorage.setItem('nameCard', newTitle)
    } else {
      console.log('ошибка')
    }
  };


  return (
    <div>
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
            {/* {title} */}
            {localStorage.getItem('nameCard') ? localStorage.getItem('nameCard') : ''}
          </span>
        </div>
      )}
    </div>
  )
};

export default TitleOne;