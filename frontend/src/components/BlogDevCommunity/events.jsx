import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Blog1 from "../BlogDevCommunity/images/Blog1.jpg";
import Blog2 from "../BlogDevCommunity/images/Blog2.jpg";
import { IconButton } from "@mui/material";
import Fingerprint from "@mui/icons-material/Fingerprint";

function Events(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      {/* <CardActionArea component="a" href="#"> */}
        <Card sx={{ margin: "4px", display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.type}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.url}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              {post.location}
            </Typography>
            
            <IconButton aria-label="fingerprint" color="secondary" sx={{fontSize:"15px"}}>
              <Fingerprint />
              Get Your Tickets
            </IconButton>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 200,
              display: { xs: "none", sm: "block" },
              backgroundImage: `url(${post.images[0].url || Blog1})`,
              backgroundSize: "cover",
            }}

            // image={post.image}
            // alt={post.imageLabel}
          />
        </Card>
      {/* </CardActionArea> */}
    </Grid>
  );
}

Events.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Events;
