import { omit } from 'lodash'

export const initialState = {
  currentStep: 0,
  errors: {}
}

export const LeadTypes = {
  valueChanged: 'valueChanged',
  nextStep: 'nextStep',
  backStep: 'backStep',
  addError: 'addError',
  removeError: 'removeError'
}

export const LeadReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LeadTypes.valueChanged: {
      const updatedErrors = omit(state.errors, [payload.key])
      return {
        ...state,
        [payload.key]: payload.value,
        errors: updatedErrors
      }
    }
    case LeadTypes.nextStep:
      return {
        ...state,
        currentStep: state.currentStep + 1
      }
    case LeadTypes.backStep: {
      if (state.currentStep === 0) return state
      return {
        ...state,
        currentStep: state.currentStep - 1
      }
    }
    case LeadTypes.addError: {
      return {
        ...state,
        errors: { ...state.errors, [payload.key]: payload.message }
      }
    }

    default:
      return state
  }
}
