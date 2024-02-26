import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';

const reactElem = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click to visit google',
};

// ptoperties should not have login as the logic

function MyApp() {
  return <div>My basic vite App</div>;
}

const AnotherElem = (
  <a href='https://google.com' target='_blank'>
    Click to go to google{' '}
  </a>
);

const actualReactElem = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render( <App /> );
