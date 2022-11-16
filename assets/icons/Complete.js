import Svg, { Path } from 'react-native-svg'
import React from 'react'


const Complete = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={34}
      fill="none"
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="feather feather-check"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M20 6L9 17 4 12"></Path>
    </Svg>
  )
}

export default Complete