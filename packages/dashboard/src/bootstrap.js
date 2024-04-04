import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory,createBrowserHistory } from 'history';
import App from './App';
import Home from './components/Home';
const mount = (el) => {
  // const app = createApp(Dashboard);
  // app.mount(el);
  ReactDOM.render(<Home/>,el);
};

///dev
// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };

