import React from 'react';

import { Button, Col, Row, Typography } from 'antd';
import MultiStepModalProvider from 'components/pages/multi-step-form/multi-step-modal-provider';
import StepperFormContainer from 'components/pages/multi-step-form/stepper-form-container';
import { StepperActions } from 'features/stepper/stepperSlices';
import { useAppDispatch } from 'hooks/useStore';

function MultiStepForm() {
  const dispatch = useAppDispatch();

  return (
    <section className="r-panel-multi-step-form">
      <Row>
        <Col>
          <div className="explanation">
            <Typography.Title level={1}>
              Multi-step Ant Design Form Flow
            </Typography.Title>
            <Typography.Text>
              This is how you can create multi-step form with Ant Design
            </Typography.Text>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            size="large"
            htmlType="button"
            onClick={() => dispatch(StepperActions.openStepperModal())}
          >
            Multi-step Form
          </Button>
          <MultiStepModalProvider>
            <StepperFormContainer />
          </MultiStepModalProvider>
        </Col>
      </Row>
    </section>
  );
}

export default MultiStepForm;
