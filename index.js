const redux = require("redux");
const createStore = redux.createStore

const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux store",
  };
}

// (prevState, action) => newState (Reducer)

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer)
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updating the state: ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();