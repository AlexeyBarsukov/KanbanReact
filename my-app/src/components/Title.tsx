import React, { useState } from "react";


// @ts-ignore
function TitleOne({ title }) {
  const [open, setOpen] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  console.log(newTitle)
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
    localStorage.setItem('input1', newTitle)

  };


  return (
    <div>
      {open ? (<div>
        <input
          style={{ outline: 'none', backgroundColor: 'transparent', border: "0px solid", padding: '10px' }}
          onChange={handleOnChange}
          autoFocus
          value={title}
          placeholder='Изменить название'
        />
      </div>) : (
        <div>
          <span
            style={{ padding: '10px' }}
            onClick={() => setOpen(!open)}>
            {title}
            {/* {localStorage.getItem('input1') ? localStorage.getItem('input1') : 'TODO'} */}
          </span>
        </div>
      )}
    </div>
  )
};

export default TitleOne;