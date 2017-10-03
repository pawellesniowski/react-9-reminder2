import { ADD_REMINDER } from '../constans.js';

// create actions creater:
export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }
    return action;
}

// export default addReminder;