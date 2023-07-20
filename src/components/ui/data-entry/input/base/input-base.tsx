import React from 'react';

import { Form, Input, Typography } from 'antd';
import SvgGenerator from 'components/ui/svg-generator';
import { useMultiStepModalStepper } from 'hooks/useuseMultiStepModalContext';

type Validator = (
  rule: RuleObject,
  value: any,
  callback: (error?: string) => void
) => Promise<void | any> | void;

export type RuleObject = AggregationRule;
interface ValidatorRule {
  warningOnly?: boolean;
  message?: string | React.ReactElement;
  validator: Validator;
}

export interface BaseRule {
  warningOnly?: boolean;
  len?: number;
  max?: number;
  message?: string | React.ReactElement;
  min?: number;
  pattern?: RegExp;
  required?: boolean;
}

type AggregationRule = BaseRule & Partial<ValidatorRule>;

type Rule = RuleObject;

export type InputBaseProps = {
  form: any;
  label: string;
  rules: Rule[];
  name: string;
  prefixType?: 'userIcon' | 'emailIcon' | 'phoneIcon' | 'companyIcon';
  inputType: 'text' | 'number';
  normalizerFunc?: (...args: any[]) => any;
};

function InputBase({
  form,
  label,
  name,
  rules,
  prefixType,
  inputType,
  normalizerFunc,
}: InputBaseProps) {
  const [ruleList, setRuleList] = React.useState(rules);
  console.log('debug-issue', ruleList);

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
      <Form.Item name={name} normalize={normalizerFunc} rules={[...ruleList]}>
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
