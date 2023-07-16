import React from 'react';

function Card(props) {
  const content = props.data.map((prop) => {
    return (
      <div key={prop.name}>
        <h3 key={prop.name}>{prop.name}</h3>
      </div>
    );
  });
  return <div>{content}</div>;
}

export default Card;
