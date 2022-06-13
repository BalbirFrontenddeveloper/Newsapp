const reducer = (state, action) => {
    switch (action.type) {
        case "NEXT_PAGE":
            let pageInc = state.page + 1;
            if(pageInc >= state.nbPages){
                pageInc = 0;
            }
            return {
                ...state,
                page : pageInc
            }
        case "PREV_PAGE":
            let pageDec = state.page - 1;
            if(pageDec <= 0){
                pageDec = 0;
            } 
            return {
                ...state,
                page: pageDec,
            };
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