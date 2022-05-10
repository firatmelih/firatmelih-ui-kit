import React from 'react';
import ReactDOM from 'react-dom/client';
import PHome from './components/Page/PHome'
import ONavigation from "./components/Organism/ONavigation/ONavigation";
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
          <ONavigation/>
          <PHome />
  </React.StrictMode>
)
