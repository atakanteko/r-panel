import { createSlice } from '@reduxjs/toolkit';

export interface IStepperFormState {
  isStepperModalOpen: boolean;
}

const initialState: IStepperFormState = {
  isStepperModalOpen: false,
};

const StepperForm = createSlice({
  name: 'StepperForm',
  initialState,
  reducers: {
    openStepperModal(state) {
      state.isStepperModalOpen = true;
    },
    closeStepperModal(state) {
      state.isStepperModalOpen = false;
    },
  },
});

export const StepperActions = StepperForm.actions;

export default StepperForm.reducer;
