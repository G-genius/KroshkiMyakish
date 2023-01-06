import React, {createContext} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Store from "./store/store";
import Form from "./components/Form";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

interface State {
    store: Store
}

const store = new Store()

export const Context = createContext({
    store
})

root.render(
  <BrowserRouter basename={baseUrl}>
      <Context.Provider value={{
          store
      }}>
          <App />
          <Form/>
      </Context.Provider>,
  </BrowserRouter>);

