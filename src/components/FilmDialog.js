import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardMedia from '@material-ui/core/CardMedia';

import './FilmDialog.css';

export default class FilmDialog extends React.Component {
  render() {
    const { film, handleClose } = this.props;
    let title = null;
    let content = null;

    if (film) {
      title = <DialogTitle id="form-dialog-title">{film.title}</DialogTitle>;

      content = (
        <DialogContent>
          <DialogContentText>{film.overview}</DialogContentText>
          <CardMedia
            className="film-detail-image"
            image={`http://image.tmdb.org/t/p/w342${film.poster_path}`}
            title={film.title}
          />
          <TextField
            label="Released on"
            disabled
            value={film.release_date}
            fullWidth
          />
          <TextField
            label="Popularity"
            disabled
            value={film.popularity}
            fullWidth
          />
          <TextField
            label="Vote average"
            disabled
            value={film.vote_average}
            fullWidth
          />
          <TextField
            label="Vote count"
            disabled
            value={film.vote_count}
            fullWidth
          />
        </DialogContent>
      );
    }
    return (
      <Dialog
        open={!!film}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {title}
        {content}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
            </Button>
        </DialogActions>
      </Dialog>
    );
  }
}