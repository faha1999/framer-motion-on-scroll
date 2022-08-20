import React from 'react';
import { CardData } from '../Data/CardData';

export const Card = () => {
  return (
    <>
      {CardData.map((data) => (
        <div className="wrapper" key={data.h2}>
          <div className="card">
            <div className="img">{data.image}</div>
            <h2>{data.h2}</h2>
            <p>{data.p}</p>
          </div>
        </div>
      ))}
    </>
  );
};
