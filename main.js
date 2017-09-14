
// Actions
const CHANGE_BG_COLOR = "CHANGE_BG_COLOR";

// The store's initial state
const INITIAL_STATE = {backgroundColor: 'purple'};

// Reducer will be subscribed to listen for any actions on the store
// and should return a new state to be published to the state queue
function bgApp(state, action) {
  switch (action.type){
    case CHANGE_BG_COLOR:
      return {
        backgroundColor: action.backgroundColor
      }
    default:
      return state;
  }
}

// Subscribe reducers to store when the store is created
let store = Redux.createStore(bgApp, INITIAL_STATE);

// Subscribe to state changes
var manageBackground = function() {
  console.log("changing background color");
  console.log('get state', store.getState());
  document.bgColor = store.getState().backgroundColor;
};

store.subscribe(manageBackground);

// Publish Event Message (action)
document.getElementById('change-color').addEventListener('click', function(){
  store.dispatch({type: CHANGE_BG_COLOR, backgroundColor: "green"});
});

// Kickoff a background change
manageBackground();
