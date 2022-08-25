import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Blog1 from "../BlogDevCommunity/images/Blog1.jpg"


function FeaturedPost(props) {
  const { post } = props;

  return (
    
    <Grid item xs={12} md={6} >
        <Card sx={{ margin:"4px", display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>

          </CardContent>
          <CardMedia
           
            component="img"
            sx={{ width: 200, display: { xs: 'none', sm: 'block' } , backgroundImage: `url(${post.image || Blog1})`, backgroundSize: "cover",
            }}
            
            // image={post.image}
            // alt={post.imageLabel}
          />
        </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
