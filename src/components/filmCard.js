import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './FilmCard.css';

class FilmCard extends React.Component {
  selectFilm = () => {
    const { film, selectFilm } = this.props;
    selectFilm(film);
  }
  render() {
    const { film } = this.props;

    //return (<div>{film.title}</div>)

    return (
      <Card className="film-card">
        <CardActionArea onClick={this.selectFilm}>
          <CardMedia
            className="film-image"
            image={`http://image.tmdb.org/t/p/w300${film.backdrop_path}`}
            title={film.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {film.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {film.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default FilmCard;