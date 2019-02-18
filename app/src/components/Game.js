import React, { Component } from "react";
import Navbar from "./Navbar";
//import Card from "./Card"
import CardContainer from "./CardContainer"
//control the game functionality and wraps all the components

class Game extends Component {
    state = {
        current: 0,
        best: 0,
        //card array should be an array on key value pairs
        //and we need a method to shuffle them
        cardArray: [[1,"https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png"], [2,"https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg"], [3,"https://upload.wikimedia.org/wikipedia/en/7/7e/Jim-halpert.jpg"], [4,"https://upload.wikimedia.org/wikipedia/en/6/67/Pam_Beesley.jpg"],[5,"https://upload.wikimedia.org/wikipedia/en/0/0b/Angela_Martin.jpg"],[6,"https://upload.wikimedia.org/wikipedia/en/8/84/Andy_Bernard_photoshot.jpg"],[7,"https://upload.wikimedia.org/wikipedia/en/1/18/Toby_Flenderson_promo_picture.jpg"],[8,"https://upload.wikimedia.org/wikipedia/en/6/60/Office-1200-baumgartner1.jpg"],[9,"https://upload.wikimedia.org/wikipedia/en/2/23/Stanley_Hudson.jpg"],[10,"https://upload.wikimedia.org/wikipedia/en/6/6f/Meredith_Palmer.jpg"],[11,"https://upload.wikimedia.org/wikipedia/en/6/69/Kelly_Kapoor.jpg"],[12,"https://upload.wikimedia.org/wikipedia/en/f/ff/Phyllis_Lapin-Vance.jpg"]],
        //add the corresponding id to the clicked array
        //everytime that a component is clicked
        clickedArray: []
    };

    // takes action when we click a card
    handleOnClick = (event) => {
        event.preventDefault();
        const id = parseInt(event.target.id)
        //you lose if you already clicked one of the cards
        if (this.state.clickedArray.includes(id)) {
            this.youLose()
        }
        else {
            //if we haven't already clicked this elemnt we add it
            //to the list and increase the score
            this.state.clickedArray.push(id)
            const current = (this.state.current + 1)
            this.setState({ current: current })
            this.shufflePage()
        }
        console.log(this.state.clickedArray)

    }
    //function for when you lose
    //we should reset everything except for best which is set
    //to the current score
    youLose = () => {
        alert("You lose!")
        const tempCurrent = this.state.current
        this.setState({
            current: 0,
            clickedArray: [],
            best: tempCurrent
        })
        this.shufflePage()
    }
    //shuffle should switch the order of the cards around
    shufflePage = () => {
        //clone the cardArray
        const newCardArray = Array.from(this.state.cardArray)
        //shuffling algorith taken from stack overflow
        for (let i = newCardArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newCardArray[i], newCardArray[j]] = [newCardArray[j], newCardArray[i]];
        }
        this.setState({cardArray:newCardArray})
    }
    //on load we should immeditaley shuffle the page
    componentDidMount(){
        this.shufflePage()
    }
    render() {
        return <React.Fragment>
            {/* create the navbar */}
            <Navbar current={this.state.current}
                best={this.state.best} />
            {/* create the card conatiner*/}
            <CardContainer cardArray={this.state.cardArray}
                handleOnClick={this.handleOnClick} />
        </React.Fragment>
    }
}

export default Game;