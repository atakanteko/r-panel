import { IMenuState } from 'features/menu/menuSlices';
import { IStepperFormState } from 'features/stepper/stepperSlices';
import { IOverridableThemeItems } from 'types/theme/theme-types';

export interface IStore {
  menu: IMenuState;
  global: Partial<IOverridableThemeItems>;
  stepperForm: IStepperFormState;
}
