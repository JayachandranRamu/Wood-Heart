/* eslint-disable react-refresh/only-export-components */
import {
    Step,
    // StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Box
  } from '@chakra-ui/react'


  const steps = [
    { title: 'Cart', description: 'Cart Page' },
    { title: 'Checkout', description: 'Checkout' },
    { title: 'Order', description: 'Order' },
  ]
  

  
  export const UserSteps =()=> {
    const { activeStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  
    return (
      <Stepper size='lg' color="#ffb128" index={activeStep} width={'700px'} >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              {/* <StepDescription>{step.description}</StepDescription> */}
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }
  
 