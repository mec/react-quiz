import React from 'react';
import Multi from './multi';
import Check from './check';
import Short from './short';
import Long from './long';

const Question = ({question, onValueChange}) => {
  switch (question.type) {
    case 'text':
      return (
        <fieldset>
          <label>{question.title}</label>
          <Short value={question.value} uid={question.uid} onValueChange={onValueChange}/>
        </fieldset>
      );
    case 'check':
      return (
          <fieldset>
            <legend>{question.title}</legend>
            <Check question={question} />
          </fieldset>
      );
    case 'multi':
      return (
          <fieldset>
            <legend>{question.title}</legend>
            <Multi question={question}/>
          </fieldset>
      );
    case 'long':
      return (
          <fieldset>
            <label>{question.title}</label>
            <Long value={question.value} uid={question.uid} onValueChange={onValueChange}/>
          </fieldset>
      );
    default:
      return (
        <div>
          <label>{question.title}</label>
          <p>Unrecognised question type.</p>
        </div>
      );
  }
};

export default Question;
