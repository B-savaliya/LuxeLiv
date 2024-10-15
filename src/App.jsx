import { RouterProvider } from 'react-router-dom';
import router from './routes/index';
import './app.scss'
import React from 'react';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
