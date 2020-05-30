import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap/";
import logo from "../../logo.svg";
import "./NavBar.css";

export default function NavBar(props) {
  let searchRef = React.createRef();

  const HandleSubmit = (event) => {
    event.preventDefault();
    props.SearchData(searchRef.current.value);
  };

  return (
    <Navbar bg="dark" mb="2" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        React Bootstrap
      </Navbar.Brand>
    
       
       
         <Form inline onSubmit={(event) => HandleSubmit(event)}>
        <FormControl
          ref={searchRef}
          type="text"
          placeholder="Search Movie" 
          className=" mr-sm-2"
        />
        <Button type="submit">Search</Button>
      </Form>
     
     
     
    </Navbar>
  );
}
