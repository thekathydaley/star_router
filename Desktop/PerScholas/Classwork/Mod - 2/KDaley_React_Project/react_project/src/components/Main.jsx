import React, { Component } from 'react';
import Header from "./Header";
import Form from "./Form"
import DataCard from './DataCard';
import './CSS/Main.css'

//Calorie counter:
//Make input for type of date, time, food name, calories
//make submit button
//make a field totaling  all of the fields that shows a total for the day



class Main extends Component {
    constructor() {
        super()
        this.state = {
            updatedLogList: []
        }
    }
    //adding an object from my log form - this function name is something I make up
    addItemsToLog = (logEntry) => { //logEntry is another var I create to pass props 
        //copyOfLogList copies the orig state (another word I create)
        let copyOfLogList = this.state.updatedLogList //<---this is from state on line 16
        copyOfLogList.push(logEntry) //this is where I changed my copy of list
        this.setState({
            updatedLogList: copyOfLogList //this is where you put the updated list back into state
        })

        console.log(this.state)

    }


    render() {
        return (
            <div className="container">
                <Header />

                {/* added our addItemsToLog as a prop */}
                <Form
                    addItemsToLog={this.addItemsToLog}
                />

{/* Will only return in there is an input */}
                <div className="gridTwo">
                {this.state.updatedLogList.length > 0 ?
// if there is an input then it loops through the data and stops
//  when it gets done with inputs and returns the updated DataCard with the log list
//using map and that is specifically for an array
                    this.state.updatedLogList.map((i,a)=>{
                        return( <DataCard
                            key={a}
                            updatedLogList={i} />)
                   
                    })

                    :
                    <h1> No Entry Added</h1>

                }
                </div>
            </div>
        );
    }
}

export default Main;