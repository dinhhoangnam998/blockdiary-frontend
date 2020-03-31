import React from 'react';
import Footer from './comps/foot/Footer';
import Main from './comps/main/Main';
import Header from './comps/head/Header';

function App() {
  return (
    <>
      <div className="container" style={{maxWidth: 786}}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      </div>
    </>
  );
}
export default App;
