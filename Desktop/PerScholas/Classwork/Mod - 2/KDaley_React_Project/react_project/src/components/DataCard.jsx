import React, { Component } from 'react';
import './CSS/DataCard.css'

class DataCard extends Component {
    render() {
        let listItem = this.props.updatedLogList
        return (
            

                <div className="cardBody">
                    <h2>
                        Food Log
                </h2>
                    
                    <p className="card">Breakfast: ate {listItem.breakfast.description} food at {listItem.breakfast.time} calories: {listItem.breakfast.calories}</p>

                    <p className="card">Lunch: ate {listItem.lunch.description} food at {listItem.lunch.time} calories: {listItem.lunch.calories}</p>

                    <p className="card">Dinner: ate {listItem.dinner.description} food at {listItem.dinner.time} calories: {listItem.dinner.calories}</p>

                    <p className="card">AM Snack: ate {listItem.snack1.description} food at {listItem.snack1.time} calories: {listItem.snack1.calories}</p>

                    <p className="card">PM Snack: ate {listItem.snack2.description} food at {listItem.snack2.time} calories: {listItem.snack2.calories}</p>

                    <h3 className="totalCalories">Total Calories: {listItem.totalCalories}</h3>

                </div>
            
        );
    }
}

export default DataCard;