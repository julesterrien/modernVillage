import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Layout from './Layout';
import NewCardModal from './NewCardModal';
import AddCardButton from './AddCardButton';
import Content from './Content';

import './App.css';

function App() {
  return (
    <div className="App">
      <NewCardModal />
      <Header />
      <div className="page">
        <Layout>
          <Sidebar />
          <Content />
        </Layout>
      </div>
      <AddCardButton />
    </div>
  );
};

export default App;
