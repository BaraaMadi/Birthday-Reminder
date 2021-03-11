import React from "react";

const List = ({ list, isDone }) => {
  return (
    <div className='card'>
      <img src={list.image} alt={list.name} />
      <div className='details'>
        <h4>{list.name}</h4>
        <span>{list.age} years</span>
      </div>
      <input type='checkbox' onClick={() => isDone(list.id)} />
    </div>
  );
};

export default List;
