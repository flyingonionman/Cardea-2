import {
    list,
    ADD_LIST,
    REMOVE_LIST,
    ListActionTypes
} from '../types'

const initialState:list = {
    listoflist: [""]
};

export function ListReducer(
    state = initialState,
    action : ListActionTypes
) {
    switch (action.type) {
        case ADD_LIST:
            return {
                listoflist : [...state.listoflist, action.payload]
            };
        case REMOVE_LIST:
            return {
                listoflist : [...state.listoflist.filter(e=> !(e===action.payload))]
            };        
        
        default: return state;
    }
}