import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Edit from "./components/Edit";
import Item from "./components/Item";
import BackButton from "./components/back-button";
import "./index.css";
import { useState, useEffect } from "react";
import Restaurant from "./components/Restaurant";
import Star from "./components/Star";
import {useLocation} from 'react-router-dom';

export default function BasicGrid() {
  const location = useLocation()
  console.log(location.state.order)
  const d = location.state.order;

  return (
    <Grid container direction="column">
      <Grid container>
        <div className="fixed">
          <button className="fixedhead">&ensp;</button>
        </div>
        <Grid xs={2}>
          <BackButton />
        </Grid>
        <Grid xs={10}></Grid>
      </Grid>

      <Grid container>
        <Grid xs={12}>
          <br />
          <br />
          <br />
          <br />
          <Restaurant></Restaurant>
        </Grid>
        <Grid xs={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="-10 -1 40 40"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </Grid>
        <Grid xs={10} className={"star"}>
          <Star />
        </Grid>
      </Grid>
      <Grid container>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid container>
        <Grid xs={12}>
          <Edit />
        </Grid>
      </Grid>
    </Grid>
  );
}
