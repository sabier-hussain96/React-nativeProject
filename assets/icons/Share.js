import Svg, { Path,Circle } from 'react-native-svg'
import React from 'react'

const Share = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-share-2"
      viewBox="0 0 24 24"
    >
      <Circle cx="18" cy="5" r="3"></Circle>
      <Circle cx="6" cy="12" r="3"></Circle>
      <Circle cx="18" cy="19" r="3"></Circle>
      <Path d="M8.59 13.51L15.42 17.49"></Path>
      <Path d="M15.41 6.51L8.59 10.49"></Path>
    </Svg>
  )
}

export default Share