import React, {createContext} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Store from "./store/store";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



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
      </Context.Provider>
  </BrowserRouter>);

