import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../Reducer/data-reducer";

export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

const initialArg = {
    videoList:[],
    likedVideos:[],
    playlist:[
      {
        name:"Watch Later",
        videos: []
      }
    ],
    toastMsg: "",
    searchValue:""
  };
  
  export const DataProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(dataReducer,initialArg);
  
    return (
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    );
  };