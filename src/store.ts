import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface AppState {
  isButtonOn: boolean;
  number: number;
}

const initialState: AppState = {
  isButtonOn: false,
  number: 0,
};

enum ActionType {
  TOGGLE_BUTTON = 'TOGGLE_BUTTON',
  INCREMENT_NUMBER = 'INCREMENT_NUMBER',
}

interface ToggleButtonAction {
  type: ActionType.TOGGLE_BUTTON;
}

interface IncrementNumberAction {
  type: ActionType.INCREMENT_NUMBER;
  payload: number;
}

type Action = ToggleButtonAction | IncrementNumberAction;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['isButtonOn']
}

const appReducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case ActionType.TOGGLE_BUTTON:
      return {
        ...state,
        isButtonOn: !state.isButtonOn,
      };
    case ActionType.INCREMENT_NUMBER:
      return {
        ...state,
        number: action.payload,
      };
    default:
      return state;
  }
}

const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
