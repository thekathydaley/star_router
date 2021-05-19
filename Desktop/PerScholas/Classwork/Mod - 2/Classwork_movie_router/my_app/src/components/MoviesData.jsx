import React, { Component } from 'react';

class MoviesData extends Component {
    
    render() {
       let data = this.props
        
        return (
            <div className="dataBox">
                <h1>Title:{data.title}</h1>
                <h2>Plot: {data.overview}</h2>
                <p>Release Date: {data.releaseDate}</p>
            </div>
        );
    }
}

export default MoviesData;