import ContinueButton from '../components/continue-button'
import { QuestionContainer, Testimonial, Wrapper } from '../components/styled-components'

export default function WelcomePage() {
  const moveNextStep = () => {

  }
  return (
    <Wrapper>
      <QuestionContainer>
        Today's refinance rates are as low as APR*!
      </QuestionContainer>
      <ContinueButton onClick={moveNextStep} />
      <Testimonial>
        <div className="left-border" />
        <div className="testimonial">
          "Not only did we get a better interest rate, but also a 25-year loan
          instead of the 30-year, saving us more than $30,000.00." -Susie G.
        </div>
        <div className="right-border" />
      </Testimonial>
    </Wrapper>
  )
}
