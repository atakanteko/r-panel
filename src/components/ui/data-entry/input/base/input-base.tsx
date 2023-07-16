import React from 'react';

import { Form, Input, Typography } from 'antd';
import SvgGenerator from 'components/ui/svg-generator';
import { useMultiStepModalStepper } from 'hooks/useuseMultiStepModalContext';

export interface BaseRule {
  warningOnly?: boolean;
  len?: number;
  max?: number;
  message?: string | React.ReactElement;
  min?: number;
  pattern?: RegExp;
  required?: boolean;
}

export type InputBaseProps = {
  form: any;
  label: string;
  rules: BaseRule[];
  name: string;
  prefixType?: 'userIcon' | 'emailIcon' | 'phoneIcon' | 'companyIcon';
  inputType: 'text' | 'number';
};

function InputBase({
  form,
  label,
  name,
  rules,
  prefixType,
  inputType,
}: InputBaseProps) {
  const inputWatcher = Form.useWatch(name, form);
  const ctx = useMultiStepModalStepper();

  React.useEffect(() => {
    if (inputWatcher !== undefined) {
      ctx.getAnyFieldTouchedInfo();
    }
  }, [inputWatcher]);

  return (
    <Form.Item className="r-panel-base-input">
      <div className="r-panel-input-header">
        <div className="info">
          <Typography.Title level={5} className="input-label">
            {label}
          </Typography.Title>
        </div>
      </div>
      <Form.Item name={name} rules={rules}>
        <Input
          type={inputType}
          size="large"
          prefix={prefixType && <SvgGenerator svgType={prefixType} />}
        />
      </Form.Item>
    </Form.Item>
  );
}

export default InputBase;
