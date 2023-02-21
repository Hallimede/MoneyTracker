import { createStore, Store } from "redux";
import recordsReducer from '../reducers/reducer'

// const store = createStore(recordsReducer);

const store: Store<RecordsState, RecordsAction> = createStore(recordsReducer);

export default store;