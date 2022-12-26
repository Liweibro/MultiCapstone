import { Grid } from "@mui/material";
import Tag from "./Tag";
import Time from "./Time";
import Npeople from "./Npeople";
import Address from "./Address";
import Image from "react-bootstrap/Image";


const Item = ({}) => {
  return (
    <button className="join_button">
      <Grid container>
        <Grid container>
          <Grid xs={2} className="group_image">
            <Image
                src=
                "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                roundedCircle width="40"
            />
          </Grid>
          <Grid xs={10} className={"group_name"}>
            多媒吃飯糰
          </Grid>
          <Time></Time>
          <Npeople></Npeople>
          <Address></Address>
          <Grid container>
            <Tag></Tag>
            <Tag></Tag>
            <Tag></Tag>
            <Tag></Tag>
            <Tag></Tag>
          </Grid>
        </Grid>
      </Grid>
    </button>
  );
};

export default Item;
