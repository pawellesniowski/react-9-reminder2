import React, { Component } from 'react';
import addReminder from '../actions/index.js'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }

    }


    addReminder(){
        console.log("this.props from addReminder: ", this.props);
    }


    render(){
        return(
            <div className="App">
                <div className="app_title">Title</div>
                <form>
                    <input 
                        placeholder="Thing to do..."
                        onChange={event=>{
                                this.setState({
                                    text: event.target.value
                                });
                        }}
                        value={this.state.text}
                        onKeyPress={e=>{
                            if(e.key === "Enter") {
                                e.preventDefault();
                                this.addReminder()
                                };
                        }}
                    />
                    <button 
                        type="button"
                        onClick={()=>this.addReminder()}
                    >
                        Add reminder
                    </button>
                </form>
            </div>
        );
    };
};

export default App;