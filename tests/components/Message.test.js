import React from 'react';
import ReactDOM from 'react-dom';
import Message from '../../src/components/Message';

const message = 'hello world.';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<Message message={message}/>, 
  	div
  );
});