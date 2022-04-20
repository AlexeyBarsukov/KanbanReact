import React, { useState } from 'react';
import './App.css';
import ChangeName from './components/ChangeName';
import Columns from './components/Columns';
import PopUp from './components/PopUp';
// import Title from './components/Title';
import store from './utils/store'


// @ts-ignore
function App() {
  const [data, setData] = useState(store);
  return (
    <>
      <PopUp />
      <ChangeName />
      {data.listIds.map((listId) => {
        // @ts-ignore
        const list = data.lists[listId]
        return <Columns list={list} key={listId} />

      })}

      {/* <Title /> */}

    </>
  );
}

export default App;
