import { createContext, useContext, useReducer } from "react";

const FavoriteStateContext = createContext();
const FavoriteDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    case "CLEAR_FAVORITES":
      return [];
    case "REMOVE_FAVORITE":
      return state.filter((item) => item.slug !== action.payload.slug);
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <FavoriteDispatchContext.Provider value={dispatch}>
      <FavoriteStateContext.Provider value={state}>
        {children}
      </FavoriteStateContext.Provider>
    </FavoriteDispatchContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteStateContext);
export const useDispatchFavorite = () => useContext(FavoriteDispatchContext);
