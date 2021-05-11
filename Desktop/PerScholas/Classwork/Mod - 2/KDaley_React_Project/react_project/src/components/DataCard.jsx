import React, { Component } from 'react';
import './CSS/DataCard.css'

class DataCard extends Component {
    render() {
        let listItem = this.props.updatedLogList
        return (
            

                <div className="cardBody">
                
                       <b> Food Log </b>
                
                    
                    <p className="card"><b>Breakfast:</b> {listItem.breakfast.description} at {listItem.breakfast.time} <b>Calories:</b> {listItem.breakfast.calories}</p>

                    <p className="card"> <b>Lunch: </b> {listItem.lunch.description} at {listItem.lunch.time} <b>Calories:</b> {listItem.lunch.calories}</p>

                    <p className="card"> <b>Dinner: </b> {listItem.dinner.description} at {listItem.dinner.time} <b>Calories:</b> {listItem.dinner.calories}</p>

                    <p className="card"> <b>AM Snack: </b> {listItem.snack1.description} at {listItem.snack1.time} <b>Calories:</b> {listItem.snack1.calories}</p>

                    <p className="card"> <b>PM Snack: </b> {listItem.snack2.description} at {listItem.snack2.time} <b>Calories:</b> {listItem.snack2.calories}</p>

                    <h3 className="totalCalories">Total Calories: {listItem.totalCalories}</h3>

                </div>
            
        );
    }
}

export default DataCard;