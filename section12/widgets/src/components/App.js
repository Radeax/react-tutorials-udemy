import React, { useState } from 'react';
import Accordion from './Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const App = () => {
  const [state, setState] = useState({
    activeIndex: 1,
  });

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
