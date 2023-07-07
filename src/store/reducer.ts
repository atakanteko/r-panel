import menuSlices from 'features/menu/menuSlices';
import { AnyAction, CombinedState, Reducer, combineReducers } from 'redux';
import { IStore } from 'types/store/store-types';

const appReducer: Reducer<CombinedState<IStore>> = combineReducers({
  menu: menuSlices,
});

const reducer = (
  state: CombinedState<IStore> | undefined,
  action: AnyAction
) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof reducer>;
export default reducer;
