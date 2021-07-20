import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SplashIcon = props => {
  return (
    <Svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.25 14.667V7.333a1.833 1.833 0 00-.917-1.586l-6.416-3.666a1.833 1.833 0 00-1.834 0L3.667 5.747a1.833 1.833 0 00-.917 1.586v7.334a1.834 1.834 0 00.917 1.586l6.416 3.666a1.834 1.834 0 001.834 0l6.416-3.666a1.834 1.834 0 00.917-1.586z"
        stroke="#748CAD"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="product-icon_svg__stoke-only"
      />
      <Path
        d="M2.998 6.38L11 11.01l8.003-4.63M11 20.24V11"
        stroke="#748CAD"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SplashIcon;
