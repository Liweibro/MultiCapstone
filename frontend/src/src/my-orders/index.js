import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "./components/Item";
import "./index.css";
import BackButton from "./components/back-button";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Image from "react-bootstrap/Image";
//import "bootstrap-icons/font/bootstrap-icons.css"
import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

export default function BasicGrid() {
  return (
    <Grid container direction={"column"}>
      <Grid container className="top_nav">
        <div className="fixed">
          <button className="fixedtest">&ensp;</button>
        </div>
        <Grid xs={2}>
          <BackButton></BackButton>
        </Grid>
        <Grid xs={10}></Grid>
        <Grid xs={12}>
          <br />
          <br />
          
          
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <div className="fixed">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-1" value={1}>
                <div className="headtest">未送出</div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>

        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <div className="fixed">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-2" value={2}>
                <div className="headtest">已送出</div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>

        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <div className="fixed">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-3" value={3}>
                <div className="headtest">已完成</div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <br />
        <br />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Grid>

      <Navbar bg="dark" variant="dark" fixed="bottom">
          <Nav>
            
            <Nav.Link href="#search">
              <div className="bnav_item"><i class="bi bi-search"></i></div>
              <div className="bnav_word">Search</div> 
            </Nav.Link>

            <Link to='/joinorder'>
            <Nav.Link href="#together">
              <div><i class="bi bi-card-list"></i></div>
              <div className="bnav_word">Together</div>
            </Nav.Link>
            </Link>

            <Link to={'/'}>
            <Nav.Link href="#home">
              <div><i class="bi bi-house"></i></div>
              <div className="bnav_word">Home</div>
            </Nav.Link>
            </Link>

            <Link to="/myorder">
            <Nav.Link href="#order">
              <div><i class="bi bi-bag"></i></div>
              <div className="bnav_word">Order</div>
            </Nav.Link>
            </Link>

            <Link to ='/profile'>
            <Nav.Link href="#account">
              <div><i class="bi bi-person"></i></div>
              <div className="bnav_word">Account</div>
            </Nav.Link>
            </Link>
          </Nav>
        
      </Navbar>

      
      <br />
      <br />
      <br />
    </Grid>
  );
}
/*
<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-arrow-bar-left"
                        viewBox="-2 -2 16 16"
                    >
                    <path
                    fill-rule="evenodd"
                    d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"
                    />
                    </svg>
                    */

/*
<Grid xs={4} display="flex" justifyContent="center" alignItems="center">
    <button className="head" style={{ fontSize: 21 }}>未送出</button>
</Grid>
*/
/*
<div className="fixed">
          <button className="fixedtest">&ensp;</button>
        </div>
        <Grid xs={4}>
          <button className="head">&ensp;未送出&ensp;</button>
        </Grid>
        <Grid xs={4}>
          <button className="head">&ensp;已送出&ensp;</button>
        </Grid>
        <Grid xs={4}>
          <button className="head">&ensp;已完成&ensp;</button>
        </Grid>
        */
