import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgFadersHorizontal = ({color, size}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
    >
      <Path fill="none" d="M0 0H256V256H0z" />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={size}
        d="M136 172L40 172"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={size}
        d="M216 172L168 172"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={size}
        d="M72 84L40 84"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={size}
        d="M216 84L104 84"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={size}
        d="M104 60L104 108"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={size}
        d="M168 196L168 148"
      />
    </Svg>
  )
}

export default SvgFadersHorizontal
