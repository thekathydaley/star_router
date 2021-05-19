import React, { Component } from 'react';
import ActorsData from "./ActorsData";

class Actors extends Component {
    state={
        actorSearch: {
            actor:''

        },
        isLoaded: false,
        actorData: {},
    }
handleChangeActor= (event) => {
    let actorLog = this.state.actorSearch
    let inputActorName = event.target.name
    let userActorInput = event.target.value
    actorLog[inputActorName] = userActorInput
    this.setState({actorSearch: actorLog})
}

handleSubmitActor=(event) => {
    event.preventDefault()
    
    fetch(`https://api.themoviedb.org/3/search/person/?query=${this.state.actorSearch.actor}&api_key=545397f587521c97698c1e414ee0a43a`)
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({
                isLoaded:true,
                actorData: result.results[0]
            });
            console.log(this.state.actorData)
            
        }
    )
}

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmitActor}>
            <input
                        placeholder="Enter Actor Search Here"
                        type="text"
                        name="actor"
                        value={this.state.actorSearch.actor}
                        onChange={this.handleChangeActor}
                    />
            <button type="submit">Search</button>
            </form>
            <ActorsData
            aname={this.state.actorData.name}
            knownFor={this.state.actorData.known_for}
            />
            {/* name 
            known_for */}
        </div>
        );
    }
}
export default Actors;