import React from 'react';

import { Col, Row, Typography } from 'antd';
import InputBase from 'components/ui/data-entry/input/base/input-base';
import { StringHelper } from 'helpers/string-helper';
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
                message: 'Name field is required',
                required: true,
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
                message: 'Email field is required',
                required: true,
              },
              {
                validator: (_, value) => {
                  if (StringHelper.isEmailValid(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Invalid email address'));
                },
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
                message: 'Phone field is required',
                required: true,
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
                message: 'Company field is required',
                required: true,
              },
            ]}
          />
        </Col>
      </Row>
    </section>
  );
}

export default ContactDetails;
