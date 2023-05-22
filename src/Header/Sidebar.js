import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import './Sidebar.css'
export default function Sidebar() {

    const country = [
        { code: "PL", name: 'Poland' },
        { code: "US", name: 'United States' },
        { code: "GB", name: 'Great Britain' },
        { code: "CZ", name: 'Chech Republic' },
        { code: "AR", name: 'Argentina' },
    ]

    return (
        <>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-false`} aria-labelledby={`offcanvasNavbarLabel-expand-false`} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                        Choose country: 
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        {country.map((country, index) => (

                            <Nav.Link className='countryNameLink' as={Link} to={`/country/${country.code}`} key={index}>
                                <div className='row'>
                                    <div className='col-3'>
                                        <img src={`https://flagsapi.com/${country.code}/flat/64.png`} className="flag" alt={`Flag of ${country.code}`}/>
                                    </div>
                                    <div className='col'>
                                        <h3 className='countryName'>{country.name}</h3>
                                    </div>
                                </div>
                            </Nav.Link>

                        ))}
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>
    )
}
