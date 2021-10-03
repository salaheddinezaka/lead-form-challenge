import { LeadTypes } from './reducer'

export const valueChanged = (key, value) => {
  return {
    type: LeadTypes.valueChanged,
    payload: { key, value }
  }
}

export const addNewError = (key, message) => {
  return {
    type: LeadTypes.addError,
    payload: { key, message }
  }
}

export const moveNextStep = () => {
  return {
    type: LeadTypes.nextStep
  }
}

export const moveBackStep = () => {
  return {
    type: LeadTypes.backStep
  }
}
