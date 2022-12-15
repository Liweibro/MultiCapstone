import { Grid } from "@mui/material";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const Item = ({}) => {
  return (
    <Link to="/myorderdata">
      <button className="group_button">
        <Grid container>
          <Grid container>
            <Grid xs={3}>
              <div>
                <Image
                  src=
                  "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                  roundedCircle width="70"
                />
              </div>
            </Grid>
            <Grid xs={7} className={"mygroup_name"}>
              多媒吃飯糰
            </Grid>
          </Grid>
        </Grid>
      </button>
    </Link>
  );
};

export default Item;
