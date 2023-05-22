import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './news.css';

export default function News(props) {
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
  const readMore = {
    PL: 'Czytaj więcej ...',
    US: 'Read more ...',
    GB: 'Read more ...',
    CZ: 'Přečtěte si více ...',
    AR: "Leer más ..."
  };

  return (
    <>
      {news.map((article, index) => (
        <div key={index} className="row mt-4 mb-5">
          <div className='col-lg-2 col-md-1 col-sm-0'></div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
            <img style={{ width: "100%" }} src={article.urlToImage == null ? noImg : article.urlToImage} alt="brak zdjęcia"></img>
          </div>
          <div className='col-lg-5 col-md-6 col-sm-8 col-xs-12'>
          <p className='postedDate'>Posted at:  {article.publishedAt.slice(0, 10)}</p>
            <h5 className='list'>{article.title}</h5>

            <p className='postedDate'>From: {article.source.name}</p>

            <p className='listDesc'>{article.description}</p>
            <Link className="listLink" to={article.url} target="_blank">{readMore[countryCode]}</Link>
          </div>
          <div className='col-lg-2 col-md-1 col-sm-0'></div>
          <hr className='divide'></hr>
        </div>
      ))}

    </>
  );
}
