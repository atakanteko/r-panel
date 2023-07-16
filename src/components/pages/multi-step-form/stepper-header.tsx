import React from 'react';

import { Steps } from 'antd';
import { useMultiStepModalStepper } from 'hooks/useuseMultiStepModalContext';

type StepperHeaderType = {
  currentStep: number;
};
function StepperHeader({ currentStep }: StepperHeaderType) {
  // const [current, setCurrent] = React.useState(0);

  return (
    <Steps
      className="r-panel-stepper-header"
      current={currentStep}
      // onChange={onChange}
      labelPlacement="vertical"
      items={[
        {
          title: 'Contact Details',
        },
        {
          title: 'Our Services',
        },
        {
          title: 'Project Budget',
        },
      ]}
    />
  );
}

export default StepperHeader;
