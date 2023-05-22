import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AiOutlineUnorderedList, AiFillAppstore } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { change } from '../actions'
import {Link} from 'react-router-dom'
import Sidebar from './Sidebar';
import './Navigation.css'
import Popup from '../Popup/Popup';
export default function Navigaiton() {
    const changeIcone = useSelector(state => state.change);
    const dispatch = useDispatch();

    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 pt-0 sticky-top navbar">
                    <Container fluid>
                        <Navbar.Brand >{changeIcone ?
                            <AiFillAppstore size={40} onClick={() => dispatch(change())}></AiFillAppstore> :
                            <AiOutlineUnorderedList size={40} onClick={() => dispatch(change())}></AiOutlineUnorderedList>}
                            <Popup></Popup>
                        </Navbar.Brand>
                        <Nav.Link as={Link} to="/"><h2 className='brandName'>GnNews</h2></Nav.Link>
                        <Sidebar/>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}