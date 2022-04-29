export const initialState = {
    term: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "term":
            return {
                ...state,
                term: action.item,
            };
        default:
            return {
                ...state,
                term: state.term,
            };
    }
};

export default reducer;