import Svg, { Path,Circle } from 'react-native-svg'
import React from 'react'

const FeedIcon = (props) => {
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
      className="feather feather-rss"
      viewBox="0 0 24 24"
    >
      <Path d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16"></Path>
      <Circle cx="5" cy="19" r="1"></Circle>
    </Svg>
  )
}

export default FeedIcon