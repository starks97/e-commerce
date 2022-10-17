import { DataProps } from './DataContext'
import {DataState} from './DataProvider'


type DataActionType = 
| {type: '[Data] - Create a data_user'; payload: DataProps}
| {type: '[Data] - LoadData from DB', payload: DataProps}
| {type: '[Data] - Update Data in DB', payload: DataProps}


export const DataReducer = (state: DataState, action: DataActionType) => {
    switch (action.type) {
        case '[Data] - Create a data_user':
            return {
                ...state,
                data: action.payload
            }

        case '[Data] - LoadData from DB':
            return {
              ...state,
              data: action.payload,
            };

        case '[Data] - Update Data in DB':
            return {
                ...state,
                data: action.payload
            }

        default:
            return state
    }
}