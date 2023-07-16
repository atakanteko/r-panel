import React from 'react';

import { Col, Row, Typography } from 'antd';
import InputBase from 'components/ui/data-entry/input/base/input-base';
import { useMultiStepModalStepper } from 'hooks/useuseMultiStepModalContext';

function ContactDetails() {
  const ctx = useMultiStepModalStepper();

  return (
    <section className="form-p">
      <Row>
        <Typography.Title level={3}>Contact Details</Typography.Title>
      </Row>
      <Row gutter={16}>
        <Col lg={12} md={24} sm={24} xs={24}>
          <InputBase
            form={ctx.form}
            label="Name"
            inputType="text"
            name="contactName"
            prefixType="userIcon"
            rules={[
              {
                message: 'This field is required',
                required: true,
                max: 255,
              },
            ]}
          />
        </Col>
        <Col lg={12} md={24} sm={24} xs={24}>
          <InputBase
            form={ctx.form}
            label="Email"
            inputType="text"
            name="contactEmail"
            prefixType="emailIcon"
            rules={[
              {
                message: 'This field is required',
                required: true,
                max: 255,
              },
            ]}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} md={24} sm={24} xs={24}>
          <InputBase
            form={ctx.form}
            label="Phone Number"
            inputType="text"
            name="contactPhoneNumber"
            prefixType="phoneIcon"
            rules={[
              {
                message: 'This field is required',
                required: true,
                max: 255,
              },
            ]}
          />
        </Col>
        <Col lg={12} md={24} sm={24} xs={24}>
          <InputBase
            form={ctx.form}
            label="Company"
            inputType="text"
            name="contactCompany"
            prefixType="companyIcon"
            rules={[
              {
                message: 'This field is required',
                required: true,
                max: 255,
              },
            ]}
          />
        </Col>
      </Row>
    </section>
  );
}

export default ContactDetails;
