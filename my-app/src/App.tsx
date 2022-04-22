import React, { useState } from 'react';
import './App.css';
import ChangeName from './components/ChangeName';
// import Columns from './components/Columns/Columns';
import PopUp from './components/PopUp';
// import Title from './components/Title';
import Card1 from './components/Cards/Card1';
import Card2 from './components/Cards/Card2';
import Card3 from './components/Cards/Card3';
import Card4 from './components/Cards/Card4';


// @ts-ignore
function App() {
  // // @ts-ignore
  // const [data, setData] = useState(store);
  // // @ts-ignore
  // const addMoreCard = (title, listId) => {
  //   const newCardId = uuid();
  //   const newCard = {
  //     id: newCardId,
  //     title,
  //   };
  //   // @ts-ignore
  //   const list = data.lists[listId];
  //   // @ts-ignore
  //   list.cards = [...list.cards, newCard];

  //   const newState = {
  //     ...data,
  //     lists: {
  //       // @ts-ignore 
  //       ...data.lists,
  //       // @ts-ignore
  //       [listId]: list,
  //     },
  //   };
  //   setData(newState);
  // }
  // // @ts-ignore
  // const updateListTitle = (title, listId) => {
  //   // @ts-ignore
  //   const list = data.lists[listId];
  //   list.title = title;

  //   const newState = {
  //     ...data,
  //     lists: {
  //       ...data.lists,
  //       [listId]: list
  //     }
  //   }
  //   setData(newState)
  // }

  // // @ts-ignore 
  // const addMoreList = (title) => {
  //   const newListId = uuid();
  //   const newList = {
  //     id: newListId,
  //     title,
  //     cards: [],
  //   };
  //   const newState = {
  //     listIds: [...data.listIds, newListId],
  //     lists: {
  //       ...data.lists,
  //       [newListId]: newList
  //     }
  //   }
  //   setData(newState);



  // }

  // const dataComponent = Data.map((data) => {
  //   return (
  //     <Cards1
  //       key={data.id}
  //       title={data.title}
  //       id={data.id}
  //     />
  //   )
  // })

  return (
    <>
      {/* @ts-ignore */}
      {/* <StoreAPI.Provider value={{ addMoreCard, addMoreList, updateListTitle }}> */}

      <PopUp />
      <ChangeName />
      {/* 
          {data.listIds.map((listId) => {
            // @ts-ignore
            const list = data.lists[listId]
            return <Columns list={list} key={listId} />
          })}
          <ContainerCard
            type="list"
            listId={null} />
        </div> */}
      {/* {dataComponent} */}
      {/* <Columns /> */}
      <div className="Cards">
        <div><Card1 /></div>
        <div><Card2 /></div>
        <div><Card3 /></div>
        <div><Card4 /></div>
      </div>
    </>
  );
}

export default App;
