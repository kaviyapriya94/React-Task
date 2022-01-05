import actions from "./actions";

const initState  =  {
  count:0,
};

const countReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.UPDATE_COUNT: {
            return {
                ...state,
               count:action.payload
            };
        }
        default: return state;
    }
}

export default countReducer;