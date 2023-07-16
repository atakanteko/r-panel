import { IStore } from 'types/store/store-types';

export const isStepperFormModalOpen = (state: IStore) =>
  state.stepperForm.isStepperModalOpen;
