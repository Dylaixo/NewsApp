import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import '../Content/news.css'
import Card from 'react-bootstrap/Card';

export default function PopupNews(props) {
  const { title, description, url, author } = props.article;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const readMore = {
    PL: 'Czytaj więcej ...',
    US: 'Read more ...',
    GB: 'Read more ...',
    CZ: 'Přečtěte si více ...',
    AR: "Leer más ..."
  };
  const { countryCode } = useParams();
  return (
    <>
      <Link className='slabLink' onClick={handleShow}>
        <Card.Text>
          {description != null ? description.slice(0,100) + " ..." : null}
        </Card.Text>
        <p className='more'>
          {readMore[countryCode]}
        </p>
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {author != null? <h5>Author: {author}</h5> : null}
          <p>{description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
}
