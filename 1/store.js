import omit from "lodash/omit";
import { legacy_createStore as createStore } from "redux";

// BEGIN (write your solution here)
export default (initialState = {}) => {
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case "TASK_ADD":
                return { ...state, [action.payload.task.id]: action.payload.task };
                case "TASK_REMOVE":
                    return omit(state, action.payload.id);
        }
        return state;
    };
    return createStore(reducer);
};
// END
