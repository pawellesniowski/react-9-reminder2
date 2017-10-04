import { ADD_REMINDER, DELETE_REMINDER } from '../constans.js';

// create actions creater:
export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }
    return action;
}

export const deleteReminder = (id)=>{
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('deleting: ', action);
    return action;
}

// export default addReminder;