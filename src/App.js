import React from 'react';
import Footer from './comps/foot/Footer';
import Main from './comps/main/Main';
import Header from './comps/head/Header';
import { useEffect } from 'react'
import { fetchInitState } from './redux/diaryS'
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitState())
  }, [])
  return (
    <>
      <div className="container my-3" style={{ maxWidth: 786 }}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;
