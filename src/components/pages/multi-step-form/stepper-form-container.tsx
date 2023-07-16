import React from 'react';

import { Form, Row } from 'antd';
import { useMultiStepModalStepper } from 'hooks/useuseMultiStepModalContext';

import Steps from './steps/steps';

function StepperFormContainer() {
  return (
    <Row>
      <Steps />
    </Row>
  );
}

export default StepperFormContainer;
