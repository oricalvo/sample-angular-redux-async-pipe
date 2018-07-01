import {createStore} from 'redux';
import {AppState} from './appState';
import {map} from 'rxjs/internal/operators';
import {from, Observable} from 'rxjs';

const initialState: AppState = {
  counter: 0,
};

function reducer(state: AppState, action): AppState {
  if(action.type == "INC"){
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if(action.type == "DEC"){
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  return state;
}

export const store = createStore(reducer, initialState);


function getState$(store) {
  return new Observable(function (observer) {
    // emit the current state as first value:
    observer.next(store.getState());
    const unsubscribe = store.subscribe(function () {
      // emit on every new state changes
      observer.next(store.getState());
    });
    // let's return the function that will be called
    // when the Observable is unsubscribed
    return unsubscribe;
  });
}

export const state$: Observable<AppState> = <any>getState$(store);
