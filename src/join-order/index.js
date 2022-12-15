import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Fliter from "./components/Fliter";
import Item from "./components/Item";
import "./index.css";
import { useState, useEffect } from "react";
import BackButton from "./components/back-button";

export default function BasicGrid() {
  return (
    <Grid container direction="column">
      <Grid container>
        <div className="fixed">
          <button className="fixedhead">&ensp;</button>
        </div>
        <Grid xs={2}>
          <BackButton />
        </Grid>
        <Grid xs={7}></Grid>
        <Grid xs={3}>
          <br />
          <div className="fixed">
            <Fliter />
          </div>
        </Grid>
      </Grid>

      <Grid container direction="column">
        <Grid xs={12}>
          <br />
          <br />
          <br />
        </Grid>
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
    </Grid>
  );
}
/*
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="-2 -2 16 16">
    <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
</svg>
*/
/*
<Box sx={{ flexGrow: 1 , backgroundColor:'#8E8E8E'}}>
</Box>
*/
