import React, { Component } from 'react';

class ActorsData extends Component {
    render() {
        let data = this.props 
        return (
            <div className="dataBoxActor">
                {console.log("====================")}
                {console.log(data)}
                {console.log("====================")}
                <h1>Actor Name: {data.aname}</h1>
                {data.knownFor ?
                // if there is an input then it loops through the data and stops
//  when it gets done with inputs and returns the updated DataCard with the log list
//using map and that is specifically for an array
//.map goes through an array and it performs a function on each item in the array 
//.map EX: array.map((required parameter variableName,optional parameter: iterator,optional parameter original array)=>{ some function.})
// the map function will rename each item in the array whatever variable name you passed into the function to make the items easier to call
                data.knownFor.map((movie,i) => {
                    console.log("in the loop")
                    return(
                        <div key={i}>
                            <h2>Popular Movie with Artist: {movie.title}</h2>
                            
                        </div>
                    )
                })
                
                :    
                <h1> No Actor Data </h1>
                }
            </div>
        );
    }
}

export default ActorsData;