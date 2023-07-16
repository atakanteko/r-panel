import globalSlices from 'features/global/globalSlices';
import menuSlices from 'features/menu/menuSlices';
import stepperSlices from 'features/stepper/stepperSlices';
import { AnyAction, CombinedState, Reducer, combineReducers } from 'redux';
import { IStore } from 'types/store/store-types';

const appReducer: Reducer<CombinedState<IStore>> = combineReducers({
  menu: menuSlices,
  global: globalSlices,
  stepperForm: stepperSlices,
});

const reducer = (
  state: CombinedState<IStore> | undefined,
  action: AnyAction
) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof reducer>;
export default reducer;
