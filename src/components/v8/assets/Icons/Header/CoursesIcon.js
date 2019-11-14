import * as React from 'react'

export const CoursesIcon = () => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" width={42} height={45}>
    <defs>
      <circle id="a" cx="20.664" cy="20.459" r="20.459" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#CCE5FF" transform="translate(0 3)" xlinkHref="#a" />
      <g transform="translate(0 14)">
        <path
          stroke="#60798E"
          strokeLinecap="square"
          strokeWidth={2}
          d="M8 21.5h11m5 0h10"
        />
        <circle
          cx="5.5"
          cy="21.5"
          r="2.5"
          fill="#60798E"
          stroke="#60798E"
          strokeWidth={2}
        />
        <circle cx="21.5" cy="21.5" r="2.5" stroke="#60798E" strokeWidth={2} />
        <circle cx="37.5" cy="21.5" r="2.5" stroke="#60798E" strokeWidth={2} />
        <path
          fill="#0189FF"
          d="M2 0h15a2 2 0 0 1 2 2v7H0V2a2 2 0 0 1 2-2zm23 0h15a2 2 0 0 1 2 2v7H23V2a2 2 0 0 1 2-2z"
        />
        <path
          stroke="#60798E"
          strokeWidth={2}
          d="M1 9v5a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V9H1zm23 0v5a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V9H24z"
        />
      </g>
    </g>
  </svg>
)
