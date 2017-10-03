import { ADD_REMINDER } from '../constans.js';

const reminder = (action)=>{
    const reminder = {
        text: action.text,
        id: Math.random
    }
    return reminder;
}

const reminders = (state=[], action)=>{
    let reminders = null;

    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            return reminder;
        default:
            return state;
    }// end of switch statment
} // end of reminders

export default reminders;

