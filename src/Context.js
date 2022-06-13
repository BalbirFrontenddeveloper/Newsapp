import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {

  const initialstate = {
    isLoading: true,
    query: "",
    page: 0,
    nbPages: 0,
    hits: []
  }

  const API_URL = 'https://hn.algolia.com/api/v1/search?';

  const [state, dispatch] = useReducer(reducer, initialstate);

  const searchApi = async (url) => {
    dispatch({
        type: "SET_LOADING"
    })
    try {const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    dispatch({
      type: "GET_STORIES",
      payload: {
        hits: data.hits,
        nbPages: data.nbPages
      }
    })} catch (error) {
      <div>
        console.log(error);
      </div>
    };
  };

  const removepost = (postID) => {
    dispatch({
        type: "REMOVE_POST",
        payload: postID
    })
  }

  const searchpost = (searchID) => {
    dispatch({
        type: "SEARCH_POST",
        payload: searchID
    })
  }

  useEffect(() => {
    searchApi(`${API_URL}query=${state.query}`);
  },[state.query]);

  return (
    <ApiContext.Provider value={{...state, removepost, searchpost}}>
      { children }
    </ApiContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(ApiContext)
}

export { ApiContext, ApiProvider, useGlobalContext };