const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "ICE_CREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux store",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Second redux store",
  };
}

// (prevState, action) => newState (Reducer)

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 10
}

const cakeReducer = (state = initialCakeState, action) => {
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

const icecreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer
});

const store = createStore(rootReducer);
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updating the state: ", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
