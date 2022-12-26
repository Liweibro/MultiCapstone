import { Grid } from "@mui/material";
import Price from "./Price";
import Meal from "./Meal";
import Star from "./Star";

const Item = ({}) => {
  return (
    <button className="meal_button">
      <Grid container>
        <Grid container>
          <Grid xs={9} className={"meal_name"}>
            <Meal />
          </Grid>
          <Grid xs={3} className={"price"}>
            {" "}
            <br />
            <Price />
          </Grid>
        </Grid>
        <Grid xs={12}></Grid>------------------
        <br />
        ----------
      </Grid>
    </button>
  );
};

export default Item;
