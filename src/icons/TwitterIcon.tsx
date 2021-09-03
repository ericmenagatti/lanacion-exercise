import { FC } from 'react';
import { SvgIconProps } from '@material-ui/core';

const TwitterIcon: FC<SvgIconProps> = ({ width = 24, height = 24 }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.162 5.65601C21.3985 5.9937 20.589 6.21548 19.76 6.31401C20.6337 5.79144 21.2877 4.96902 21.6 4.00001C20.78 4.48801 19.881 4.83001 18.944 5.01501C17.6498 3.63033 15.5863 3.2891 13.9153 4.18346C12.2442 5.07782 11.3836 6.98415 11.818 8.82901C8.45501 8.66045 5.32174 7.072 3.19799 4.45901C2.82628 5.09746 2.63095 5.82323 2.63199 6.56201C2.63199 8.01201 3.36999 9.29301 4.49199 10.043C3.828 10.0221 3.17862 9.84279 2.59799 9.52001V9.57201C2.5984 11.563 4.00151 13.2781 5.95299 13.673C5.33661 13.84 4.6903 13.8647 4.06299 13.745C4.61012 15.4492 6.18044 16.6168 7.96999 16.65C6.21793 18.026 3.99073 18.6491 1.77899 18.382C3.69069 19.6114 5.91609 20.2641 8.18899 20.262C15.882 20.262 20.089 13.889 20.089 8.36201C20.089 8.18201 20.084 8.00001 20.076 7.82201C20.8949 7.23017 21.6016 6.49703 22.163 5.65701L22.162 5.65601Z"
      fill="#272727"
    />
  </svg>
);

export default TwitterIcon;