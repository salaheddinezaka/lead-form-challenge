import WelcomePage from '../pages/welcome'
import { useLeadContext } from '../state/context'

export const useLeadFormUtils = () => {
  const {
    state: { currentStep },
    dispatch
  } = useLeadContext()

  const addError = (key, message) => dispatch(addNewError(key, message))
  const nextStep = () => dispatch(moveNextStep())
  const backStep = () => dispatch(moveBackStep())
  const changeValue = (key, value) => dispatch(valueChanged(key, value))

  const getCurrentComponent = () => {
    switch (currentStep) {
      case 0:
        return <WelcomePage />
      default:
    }
  }

  return { getCurrentComponent, nextStep, changeValue, addError, backStep }
}
