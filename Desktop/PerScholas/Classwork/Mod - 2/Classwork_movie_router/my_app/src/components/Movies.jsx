import React, { Component } from 'react';
import MoviesData from "./MoviesData";
import axios from 'axios';

class Movies extends Component {
    state={
        movieSearch: { 
            movies: '',
            
        },
        isLoaded: false,
        movieData: {},
    }

// componentDidMount() {


// }    

handleChangeMovies= (event) => {
    let movieLog = this.state.movieSearch
    let inputName = event.target.name
    let userInput = event.target.value
    movieLog[inputName] = userInput
    this.setState({movieSearch: movieLog})

}

handleSubmit=(event) => {
    //  567189-without-remorse
    event.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie/?query=${this.state.movieSearch.movies}&api_key=545397f587521c97698c1e414ee0a43a`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                    movieData: result.results[0]      
                });
                console.log(this.state.movieData)
            },
        )
}


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Enter Movie Search Here"
                        type="text"
                        name="movies"
                        value={this.state.movieSearch.movies}
                        onChange={this.handleChangeMovies}
                    />
                <button type="submit">Search</button>
                </form>
                <MoviesData
                title={this.state.movieData.title}
                overview={this.state.movieData.overview}
                releaseDate={this.state.movieData.release_date}
                />
             
            </div>
        );
    }
}

export default Movies;