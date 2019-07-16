// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component{
    constructor(){
       super()

       this.state={
         timesClicked: 0,
       }
    }
    
    handleClick = () => {
        this.setState(prevState => ({
          timesClicked: prevState.timesClicked+1
        }))
      }
    


    render(){
        return(
            <div>
              <p>{this.state.timesClicked}</p>
              <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}
