const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_POST":
            return {
                ...state,
                query: action.payload
            }
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((curElem) =>
                curElem.objectID !== action.payload)
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }
    };
    return {
        state
    };
};

export default reducer;