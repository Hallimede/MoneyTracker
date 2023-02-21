import { ADD_RECORD } from '../constants/actionTypes';

const initialState: RecordsState = {
    records: []
}

const recordsReducer = (state: RecordsState = initialState, action: RecordsAction): RecordsState => {
    switch (action.type) {
        case ADD_RECORD:
            return { ...state, records: state.records.concat(action.records) };

        default:
            return state;
    }
}

export default recordsReducer;