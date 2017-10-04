import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addReminder, deleteReminder } from '../actions'; 

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }

    }

    //helper methods:
    addReminder(){
        this.props.addReminder(this.state.text);
    }
    deleteReminder(id){
        this.props.deleteReminder(id);
    }

    renderReminders(){
        const { reminders } = this.props;
        return (
            <ul>
                {
                    reminders.map(reminder=>{
                        return(
                            <li key={reminder.id}>
                                <div>{reminder.text}</div>
                                <div className="delete_button"
                                    onClick={()=>{this.deleteReminder(reminder.id)}}>X</div>
                            </li>

                        );
                    })
                }
            </ul>
        )
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

                    { this.renderReminders() }
                </form>
            </div>
        );
    };
};

function mapStateToProps(state){
    console.log("state: ", state);
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);