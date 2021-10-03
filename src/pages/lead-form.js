import { useLeadFormUtils } from '../utils/useLeadFormUtils'

export const LeadForm = () => {
  const { getCurrentComponent } = useLeadFormUtils()
  return <>{getCurrentComponent()}</>
}
