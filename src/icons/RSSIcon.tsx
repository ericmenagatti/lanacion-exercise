import { FC } from 'react';
import { SvgIconProps } from '@material-ui/core';

const RSSIcon: FC<SvgIconProps> = ({ width = 24, height = 24 }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3C12.941 3 21 11.059 21 21H18C18 12.716 11.284 6 3 6V3ZM3 10C9.075 10 14 14.925 14 21H11C11 16.5817 7.41828 13 3 13V10ZM3 17C5.20914 17 7 18.7909 7 21H3V17Z"
      fill="#272727"
    />
  </svg>
);

export default RSSIcon;