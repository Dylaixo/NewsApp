import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import './news.css'
import Card from 'react-bootstrap/Card';
import PopupNews from '../Popup/PopupNews';
export default function NewsList(props) {
  const readMore = {
    PL: 'Czytaj więcej ...',
    US: 'Read more ...',
    GB: 'Read more ...',
    CZ: 'Přečtěte si více ...',
    AR: "Leer más ..."
  };
  const { countryCode } = useParams();
  const [news, setNews] = useState([]);
  const noImg = "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=ca65edda0c9c42f79f6d5277bac7ddf7`)
      .then(response => {
        setNews(response.data.articles);
        props.onArticleCount(response.data.totalResults);
      })
      .catch(error => {
        console.log(error);
      });
  }, [countryCode]);

  return (
    <>
    <div className='row mt-5 mb-5'>
      {news.map((article, index) => (
      <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
        <Card key={index}>
          <Card.Body >
            <Card.Title>{article.title}</Card.Title>
            <Card.Img variant="bottom" src={article.urlToImage == null ? noImg : article.urlToImage} />
            <PopupNews article={article} />
          </Card.Body>
          <Card.Footer className="text-muted">Posted at:  {article.publishedAt.slice(0,10)}</Card.Footer>
        </Card>
        </div>
      ))}

    </div>
    </>
  );
}
