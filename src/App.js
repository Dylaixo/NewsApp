import './App.css';
import './fonts.css'
import Navigaiton from './Header/Navigation';
import Footer from './Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Content/MainPage';
import { useSelector } from 'react-redux'
import NewsSlabs from './Content/NewsSlabs';
import React, { useState } from 'react'
import NewsList from './Content/NewsList';
import Container from 'react-bootstrap/esm/Container';
import './App.css'
function App() {
  const [articleCount, setArticleCount] = useState(0);
  function handleArticleCount(count) {
    setArticleCount(count);
  }
  const changeDisplaying = useSelector(state => state.change);
  return (
    <>
    <div className='root'>
    <div className='content'>
      <Container fluid >


        <Router>
          <Navigaiton></Navigaiton>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/country/:countryCode" element={changeDisplaying ? <NewsList onArticleCount={handleArticleCount} /> : <NewsSlabs onArticleCount={handleArticleCount} />} />
          </Routes>
          <Footer articleCount={articleCount} />
        </Router>


      </Container>
      </div>
      </div>
    </>
  );
}

export default App;
