import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './header.css';
import Lotuuus from '../../img/Lotuuus.svg';


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className='container-fluid'>
            <div className='container'>
                <Navbar expand="lg" className='nav_style sp-0'>
                    <NavbarBrand href="/">
                        <img alt="logo" src={Lotuuus} style={ {height:'50px'} } /> <span>Lotus Health</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} aria-label="Toggle navigation" />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink href="">Sobre Nós</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Cadastro</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </header>
    );
}

export default Header;
