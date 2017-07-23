import {FETCH_APOD} from '../actions/index';

export default function(state = [], action){

  switch (action.type){
    case FETCH_APOD:
      return [action.payload.data]
  }
  return state;
}
