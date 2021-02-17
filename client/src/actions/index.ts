import { list, ADD_LIST,REMOVE_LIST,ListActionTypes } from '../types'

export const addlist = (newitem: string): ListActionTypes => {
    return {
      type: ADD_LIST,
      payload: newitem
    };
  };


export const removelist = (newitem: string): ListActionTypes => {
  return {
    type: REMOVE_LIST,
    payload: newitem
  };
};
