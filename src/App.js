import React, {useRef} from "react";
import './App.css';
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import {Container, Nav, Navbar} from "react-bootstrap";

function App() {
    let location = useLocation()
    return (
        <div className={"body"}>
            <Navbar expand="sm"
                    className="bg-body-tertiary mb-3 sticky-nav"
                    variant={"light"}
                    fixed={"top"}>
                <Container fluid>
                    <Navbar.Brand><Link to={"/"} state={location}>Home</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" navbarScroll>
                            <Link to={"/blog"} state={location}>Blog</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/blog"} element={<Blog/>}/>
            </Routes>
            {location.pathname}
        </div>
    );
}

export default App;
