import React from 'react';

import { Button, Col, Form, Input, Modal, Row } from 'antd';
import { isStepperFormModalOpen } from 'features/stepper/stepperSelectors';
import { StepperActions } from 'features/stepper/stepperSlices';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';

import BackButton from './back-button';
import NextButton from './next-button';
import StepperHeader from './stepper-header';

export interface IMultiStepFormModalContextType {
  currentStep: number;
  form: any;
  getAnyFieldTouchedInfo: () => void;
}

export const MultiStepFormModalContext =
  React.createContext<IMultiStepFormModalContextType | null>(null);

function MultiStepModalProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const [isTouched, setIsTouched] = React.useState<boolean>(false);
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const [form] = Form.useForm();

  const stepperFormModalStatus = useAppSelector(isStepperFormModalOpen);

  const getAnyFieldTouchedInfo = () => {
    setIsTouched(true);
  };

  const memoizedSettings = React.useMemo(
    () => ({
      currentStep,
      form,
      getAnyFieldTouchedInfo,
    }),
    [currentStep, form, getAnyFieldTouchedInfo]
  );

  const onFinish = (values: any) => {
    // console.log(values);
    setCurrentStep((prev) => prev + 1);
  };

  const onValuesChange = (_: any, allValues: any) => {
    // const isFormValid = initialFormModel.every(
    //   (field) => allValues[field] !== undefined && allValues[field] !== ''
    // );
    // setFormError(!isFormValid);
  };

  return (
    <MultiStepFormModalContext.Provider value={memoizedSettings}>
      <Modal
        className="r-panel-stepper-modal"
        title={<StepperHeader currentStep={currentStep} />}
        centered
        // open={stepperFormModalStatus}
        open
        // onOk={() => setOpen(false)}
        onCancel={() => dispatch(StepperActions.closeStepperModal())}
        width="70%"
        // cancelText={<BackButton />}
        // okText={<NextButton />}
      >
        <Form
          onValuesChange={onValuesChange}
          onFinish={onFinish}
          form={form}
          className="r-panel-base-form"
          layout="vertical"
        >
          {children}
          <Row>
            <Col lg={12}>
              <Button
                htmlType="button"
                disabled={currentStep === 0}
                onClick={() => setCurrentStep((prev) => prev - 1)}
              >
                Previous
              </Button>
            </Col>
            <Col lg={12}>
              <Button htmlType="submit">Next</Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </MultiStepFormModalContext.Provider>
  );
}

export default MultiStepModalProvider;
