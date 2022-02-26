import actions from "./actions";

const initState  =  {
  id:[]
};

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.UPDATE_CART: {
            return {
                ...state,
               id:action.cart
            };
        }
        default: return state;
    }
}

export default CartReducer;