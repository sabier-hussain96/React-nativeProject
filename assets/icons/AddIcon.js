import React from 'react'
import Svg, { Path } from 'react-native-svg'

const AddIcon = (props) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    stroke={props.stroke}
    strokeWidth={2}
    strokeLinecap="round"
    viewBox="0 0 24 24"
    strokeLinejoin="round"
    className="feather feather-plus"
    {...props}
  >
    <Path d="M12 5v14M5 12h14" />
  </Svg>
)

}

export default AddIcon