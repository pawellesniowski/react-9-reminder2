import { ADD_REMINDER, DELETE_REMINDER } from '../constans.js';

const reminder = (action)=>{
    const reminder = {
        text: action.text,
        id: Math.random()
    }
    return reminder;
}

const removeById = (state = [], id)=>{
    const reminders = state.filter(reminder=>{
        return reminder.id !== id;
    });
    return reminders;
}

const reminders = (state=[], action)=>{
    let reminders = null;
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            return reminders;
        case DELETE_REMINDER:
            reminders =  removeById(state, action.id);
            return reminders;
        default:
            return state;
    }// end of switch statment
    
} // end of reminders

export default reminders;

