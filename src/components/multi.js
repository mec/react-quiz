import React from 'react';

const Multi = ({question}) => {
  const responses = question.responses.map((response, index) =>
    <label htmlFor={response.uid} key={index}>
      <input type="radio" id={response.uid} name={question.uid}/>
      {response.title}
    </label>
  );
  return (
    responses
  );
};

export default Multi;