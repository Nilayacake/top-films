import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

import './App.css';
import apiKey from './apiKey';

import FilmCard from './components/FilmCard';
import FilmDialog from './components/FilmDialog';

class App extends Component {
  state = { films: [], selectedFilm: null, searchText: '' };

  selectFilm = film => this.setState({ selectedFilm: film });
  clearFilm = () => this.setState({ selectedFilm: null });

  searchTextChanged = e => this.setState({ searchText: e.target.value });

  search = async e => {
    e.preventDefault();
    const { searchText } = this.state;

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`
    )
    const json = await response.json();
    this.setState({ films: json.results });
  }

  async componentDidMount() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
    )
    const json = await response.json();
    this.setState({ films: json.results });
  }
  render() {
    const { films, selectedFilm, searchText } = this.state;

    return (
      <div>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Typography variant="h2" color="inherit" className="title">
              Top Rated Films
          </Typography>
            <form onSubmit={this.search}>
              <Input
                type="search"
                placeholder="Search"
                value={searchText}
                onChange={this.searchTextChanged}
              />
              <button type="submit"></button>
            </form>
          </Toolbar>
        </AppBar>
        <div className="App">
          {films.map(film => <FilmCard key={film.id} film={film} selectFilm={this.selectFilm} />)}
        </div>
        <FilmDialog film={selectedFilm} handleClose={this.clearFilm} />
      </div>
    );
  }
}

export default (App);