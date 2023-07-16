import React from 'react';

import { useMultiStepModalStepper } from 'hooks/useuseMultiStepModalContext';

const ContactDetailsComponent = React.lazy(
  () => import('components/pages/multi-step-form/steps/contact-details')
);
const OurServicesComponent = React.lazy(
  () => import('components/pages/multi-step-form/steps/our-services')
);
const ProjectBudgetComponent = React.lazy(
  () => import('components/pages/multi-step-form/steps/project-budget')
);

function Steps() {
  const ctx = useMultiStepModalStepper();

  const displayComponent = () => {
    switch (ctx.currentStep) {
      case 0:
        return <ContactDetailsComponent />;
      case 1:
        return <OurServicesComponent />;
      case 2:
        return <ProjectBudgetComponent />;
      default:
        return <ContactDetailsComponent />;
    }
  };

  return displayComponent();
}

export default Steps;
