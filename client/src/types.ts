export interface list {
  listoflist: string[]
}

export const ADD_LIST = 'ADD_LIST'
export const REMOVE_LIST = 'REMOVE_LIST'

interface AddListAction {
  type: typeof ADD_LIST
  payload:string
}

interface RemoveListAction {
  type: typeof REMOVE_LIST
  payload:string

}

export type ListActionTypes = AddListAction | RemoveListAction