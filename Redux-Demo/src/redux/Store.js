import {createStore} from 'redux';

// initial value of state is 0. action type comes from App.jsx.
const reducer=(state=0,action)=>{
	switch (action.type) {
		case 'inc': return state+1;
		case 'dec': return state-1;
		default: return state;
	}
}
export const store = createStore(reducer);