import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { time } from '../actions';
import './Footer.css';
export default function Navigation(props) {
  const dispatch = useDispatch();
  const changeTime = useSelector(state => state.time);
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(time());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);
  return (
    <>
      <footer className='row '>
        <p className='col-6 time'>Time: {changeTime.toLocaleString()}</p>
         {props.articleCount === "0" ? null : <p className='col-6 articles'>Articles: {props.articleCount}</p>}
      </footer>
    </>
  );
}
