import { HStack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { useEffect, useState } from "react";
import Button from "../Button";
import Title from "../Title";

interface IStepperProps {
  steps: {
    title: string,
    content: React.ReactNode,
  }[];
  max?: number;
}

const Stepper: React.FC<IStepperProps> = ({ steps, max }) => {
  const maxSteps = max ? max : steps.length - 1;

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => console.log('max:', maxSteps, 'active:', activeStep), [maxSteps, activeStep])

  return (
    <Tabs
      onChange={(index) => setActiveStep(index)}
      index={activeStep}
      variant='solid-rounded'
    >
      <TabList>
        {[...Array(maxSteps + 1).keys()].map((_, i) => (
          <Tab>{i + 1}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {steps.map((step) => (
          <TabPanel>
            <Title text={step.title} p={0} size='lg' textAlign='left' />
            {step.content}
          </TabPanel>
        ))}
      </TabPanels>
      
      <HStack mt={5}>
        <Button
          p={0}
          text={<BsArrowLeftShort size='100%' />}
          disabled={!(activeStep > 0)}
          onClick={() => setActiveStep(activeStep - 1)}
        />
        <Button
          p={0}
          text={<BsArrowRightShort size='100%' />}
          disabled={!(activeStep < maxSteps)}
          onClick={() => setActiveStep(activeStep + 1)}
        />
      </HStack>
    </Tabs>
  );
}

export default Stepper;