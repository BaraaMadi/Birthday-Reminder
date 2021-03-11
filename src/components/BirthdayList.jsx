import React, { useState } from "react";
import List from "./List";
import "../index.css";
import { data } from "../data";

const BirthdayList = () => {
  const [namesList, setNamesList] = useState(data);
  const isDone = (id) => {
    setNamesList((prevNamesList) => {
      let newPartyList = namesList.filter((party) => party.id !== id);
      return newPartyList;
    });
  };
  return (
    <section className='names-list'>
      <h3>{namesList.length} Birthdays Party For this Year 2021</h3>
      <PrintList namesList={namesList} isDone={isDone}></PrintList>
      <button className='btn' onClick={() => setNamesList([])}>
        Clear All
      </button>
    </section>
  );
};
export default BirthdayList;

const PrintList = ({ namesList, isDone }) => {
  return namesList.map((list) => (
    <List key={list.id} list={list} isDone={isDone}></List>
  ));
};
