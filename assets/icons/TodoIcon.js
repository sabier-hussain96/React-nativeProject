import Svg, { Path } from 'react-native-svg'
import React from 'react'

const TodoIcon = (props) => {
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
      className="feather feather-file-minus"
      viewBox="0 0 24 24"
    >
      <Path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></Path>
      <Path d="M14 2L14 8 20 8"></Path>
      <Path d="M9 15L15 15"></Path>
    </Svg>
  )
}

export default TodoIcon