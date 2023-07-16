import React from 'react';

import {
  IMultiStepFormModalContextType,
  MultiStepFormModalContext,
} from 'components/pages/multi-step-form/multi-step-modal-provider';

export const useMultiStepModalStepper = (): IMultiStepFormModalContextType =>
  React.useContext(MultiStepFormModalContext) as IMultiStepFormModalContextType;
