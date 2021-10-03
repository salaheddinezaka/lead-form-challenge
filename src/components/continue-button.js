import React from 'react'
import { ButtonGradient } from './styled-components'

export default function ContinueButton({
  onClick,
  isContinue = true,
  text = 'Continue'
}) {
  return (
    <ButtonGradient continue={isContinue} onClick={onClick}>
      {text + ' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="58.6"
        height="20.2"
        viewBox="0 0 58.6 20.2"
      >
        <g transform="translate(-714 -459.4)">
          <line className="b" x2="55" transform="translate(715.5 469.5)" />
          <line
            className="b"
            x2="6"
            y2="8"
            transform="translate(764.5 461.5)"
          />
          <line
            className="b"
            y1="8"
            x2="6"
            transform="translate(764.5 469.5)"
          />
        </g>
      </svg>
    </ButtonGradient>
  )
}
