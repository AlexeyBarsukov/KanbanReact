import { useEffect, useState, useRef, createRef } from "react";
import React from 'react';
import { Card } from "react-bootstrap";
import TitleOne from "./Title";
import MyCard from "./MyCard";
import ContainerCard from "./AddNewCard/ContainerCard";
import store from '../utils/store';
// import AddNewCard from "./AddNewCard/AddNewCard";

// @ts-ignore
function Columns({ list }) {
  return (
    <>
      <Card
        style={{ width: '300px', background: '#ebecf0' }}
      >
        {/* ИЗУЧИТЬ ВНИМАТЕЛЬНо */}
        {/* @ts-ignore */}
        <TitleOne title={list.title} />
        {/* <MyCard /> */}
        {/* @ts-ignore */}
        {list.cards.map((card) => (
          <MyCard key={card.id} card={card} />
        ))}
        <ContainerCard />
        {/* <AddNewCard /> */}
      </Card>

    </>
  )
}

export default Columns;