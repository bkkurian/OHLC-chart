const sidebarReducer = (state = {
    stocks: ["MSFT", "AAPL", "FB"]
}, action) => {
    switch (action.type) {
         case "SET_STOCK_NAME_FULFILLED":
            state = {
                ...state,
                selectedStock: action.payload
            };
            break;
         }
    return state;
};

export default sidebarReducer;