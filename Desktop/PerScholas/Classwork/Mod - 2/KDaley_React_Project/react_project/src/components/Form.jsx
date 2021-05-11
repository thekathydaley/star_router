import React, { Component } from 'react';
import './CSS/Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            breakfast: {
                time: '',
                calories: '',
                description: ''
            },
            lunch: {
                time: '',
                calories: '',
                description: ''
            },
            dinner: {
                time: '',
                calories: '',
                description: ''
            },
            snack1: {
                time: '',
                calories: '',
                description: ''
            },
            snack2: {
                time: '',
                calories: '',
                description: ''
            },
            totalCalories: 0
        }
    }

    handleBreakfastChange = (event) => {
        // updated log is a variable create to copy current data in state
        const updatedlog = { ...this.state.breakfast }
        // giving a name - from the input tag below - to a variable that contains our event target
        const inputName = event.target.name
        console.log(`${inputName}`)
        // giving a value - from the input tag below -  to a variable that contains our event target
        const userInput = event.target.value
        /*console logs the current user input (what the user types into the box) */
        console.log(userInput)
        //changes the updated log at the specified var (inputName) to the userInput
        updatedlog[inputName] = userInput
        //setting the state for the specified state key (from the state info above)
        this.setState({ breakfast: updatedlog })
    }
    
    handleLunchChange = (event) => {
        const updatedlog = {...this.state.lunch}
        const inputName = event.target.name
        console.log(`${inputName}`)
        const userInput = event.target.value
        console.log(userInput)
        updatedlog[inputName] = userInput
        this.setState({ lunch: updatedlog})
    }
    handleDinnerChange = (event) => {
        const updatedlog = {...this.state.dinner}
        const inputName = event.target.name
        console.log(`${inputName}`)
        const userInput = event.target.value
        console.log(userInput)
        updatedlog[inputName] = userInput
        this.setState({ dinner: updatedlog})
    }
    handleSnackChange = (event) => {
        const updatedlog = {...this.state.snack1}
        const inputName = event.target.name
        console.log(`${inputName}`)
        const userInput = event.target.value
        console.log(userInput)
        updatedlog[inputName] = userInput
        this.setState({ snack1: updatedlog})
    }
    handleSnack2Change = (event) => {
        const updatedlog = {...this.state.snack2}
        const inputName = event.target.name
        console.log(`${inputName}`)
        const userInput = event.target.value
        console.log(userInput)
        updatedlog[inputName] = userInput
        this.setState({ snack2: updatedlog})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let bc = parseFloat(this.state.breakfast.calories,10)
        let lc = parseFloat(this.state.lunch.calories,10) 
        let dc = parseFloat(this.state.dinner.calories,10)
        let sc1 = parseFloat(this.state.snack1.calories,10)
        let sc2=  parseFloat(this.state.snack2.calories,10)

        let updatedMealCount ={
            breakfast:this.state.breakfast,
            lunch: this.state.lunch,
            dinner: this.state.dinner,
            snack1: this.state.snack1,
            snack2: this.state.snack2,
            //This is where it adds the total calories from my inputs
            totalCalories: bc+lc+dc+sc1+sc2

           
            
        }
        this.props.addItemsToLog(updatedMealCount)
        // console.log(this.props)

    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>


                    <div className="breakfastForm">
                        <h2 >Breakfast </h2>
                        <label>Time:</label>
                        <input // this is an example of an input tag where we can get event-target-name/value
                            placeholder="Meal Time"
                            type="text"
                            name="time" // this is the name that the above comments are referring to 
                            // sets value to be the State user name.
                            value={this.state.breakfast.time}
                            // when value is changed it runs handle change
                            onChange={this.handleBreakfastChange}
                        />
                        <label>Description:</label>
                        <input 
                            placeholder="Enter Description Here"
                            type="text"
                            name="description" 
                            value={this.state.breakfast.description}
                            onChange={this.handleBreakfastChange}
                        />
                           <label>Calories:</label>
                        <input 
                            placeholder="Enter Calories Here"
                            type="number"
                            name="calories" 
                            value={this.state.breakfast.calories}
                            onChange={this.handleBreakfastChange}
                        />
                    </div>

                    <div className="lunchForm">
                    <h2 >Lunch</h2>
                        <label>Time:</label>
                        <input 
                            placeholder="Meal Time"
                            type="text"
                            name="time"
                            value={this.state.lunch.time}
                            onChange={this.handleLunchChange}
                        />
                        <label>Description:</label>
                        <input 
                            placeholder="Enter Description Here"
                            type="text"
                            name="description" 
                            value={this.state.lunch.description}
                            onChange={this.handleLunchChange}
                        />
                           <label>Calories:</label>
                        <input 
                            placeholder="Enter Calories Here"
                            type="number"
                            name="calories" 
                            value={this.state.lunch.calories}
                            onChange={this.handleLunchChange}
                        />

                    </div>

                    <div className="dinnerForm">
                    <h2 >Dinner</h2>
                        <label>Time:</label>
                        <input 
                            placeholder="Meal Time"
                            type="text"
                            name="time"
                            value={this.state.dinner.time}
                            onChange={this.handleDinnerChange}
                        />
                        <label>Description:</label>
                        <input 
                            placeholder="Enter Description Here"
                            type="text"
                            name="description" 
                            value={this.state.dinner.description}
                            onChange={this.handleDinnerChange}
                        />
                           <label>Calories:</label>
                        <input 
                            placeholder="Enter Calories Here"
                            type="number"
                            name="calories" 
                            value={this.state.dinner.calories}
                            onChange={this.handleDinnerChange}
                        />
                    </div>
                    
                    <div className="snackForm">
                    <h2 >AM Snack</h2>
                        <label>Time:</label>
                        <input 
                            placeholder="Meal Time"
                            type="text"
                            name="time"
                            value={this.state.snack1.time}
                            onChange={this.handleSnackChange}
                        />
                        <label>Description:</label>
                        <input 
                            placeholder="Enter Description Here"
                            type="text"
                            name="description" 
                            value={this.state.snack1.description}
                            onChange={this.handleSnackChange}
                        />
                           <label>Calories:</label>
                        <input 
                            placeholder="Enter Calories Here"
                            type="number"
                            name="calories" 
                            value={this.state.snack1.calories}
                            onChange={this.handleSnackChange}
                        />
                    </div>
                    
                    <div className="snackForm2">
                    <h2 >PM Snack</h2>
                        <label>Time:</label>
                        <input 
                            placeholder="Meal Time"
                            type="text"
                            name="time" 
                            value={this.state.snack2.time}
                            onChange={this.handleSnack2Change}
                        />
                        <label>Description:</label>
                        <input 
                            placeholder="Enter Description Here"
                            type="text"
                            name="description" 
                            value={this.state.snack2.description}
                            onChange={this.handleSnack2Change}
                        />
                           <label>Calories:</label>
                        <input 
                            placeholder="Enter Calories Here"
                            type="number"
                            name="calories" 
                            value={this.state.snack2.calories}
                            onChange={this.handleSnack2Change}
                        />
                    </div>



                    {/* activates the handle Submit */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;





/*
{
    Breakfast: {
        time:
        calories:
        description:
    }
      Lunch: {
        time:
        calories:
        description:
    }
      Dinner: {
        time:
        calories:
        description:
    }
      Snack: {
        time:
        calories:
        description:
    }
      Snack2: {
        time:
        calories:
        description:
    }
    totalCalories:


}

*/


// handleChange = (event) => {
//     // updated log is a variable create to copy current data in state
//     const updatedlog = { ...this.state.log }
//     // giving a name - from the input tag below - to a variable that contains our event target
//     const inputName = event.target.name
//     console.log(`${inputName}`)
//     // giving a value - from the input tag below -  to a variable that contains our event target
//     const userInput = event.target.value
//     /*console logs the current user input (what the user types into the box) */
//     console.log(userInput)
//     //changes the updated log at the specified var (inputName) to the userInput
//     updatedlog[inputName] = userInput
//     //setting the state for the specified state key (from the state info above)
//     this.setState({ log: updatedlog })
// }