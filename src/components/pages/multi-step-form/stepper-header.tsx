import { Divider, Steps } from 'antd';
import { MultiStepFormModel } from 'assets/model/multi-step-form-model';

type StepperHeaderType = {
  currentStep: number;
};
function StepperHeader({ currentStep }: StepperHeaderType) {
  return (
    <>
      <Steps
        className="r-panel-stepper-header"
        current={currentStep}
        // onChange={onChange}
        labelPlacement="vertical"
        items={MultiStepFormModel.contactDetailsFormStepperItems}
      />
      <Divider />
    </>
  );
}

export default StepperHeader;
