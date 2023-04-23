import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={42}
    fill="none"
    {...props}
  >
    <rect width={43.404} height={41.379} fill="#333" rx={20.689} />
    <path stroke="#fff" strokeWidth={4.151} d="M15.467 25.002 32.201 8.269" />
    <path
      stroke="url(#a)"
      strokeWidth={4.151}
      d="M13.279 11.446 30.012 28.18"
    />
    <path stroke="url(#b)" strokeWidth={4.936} d="m11.523 15.363 2.024 2.125" />
    <path stroke="url(#c)" strokeWidth={4.936} d="M23.976 27.816 26 29.941" />
    <defs>
      <linearGradient
        id="a"
        x1={11.463}
        x2={8.533}
        y1={13.274}
        y2={18.122}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2C69D1" />
        <stop offset={0.932} stopColor="#0ABCF9" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={9.375}
        x2={10.138}
        y1={17.411}
        y2={19.919}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2C69D1" />
        <stop offset={0.932} stopColor="#0ABCF9" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={21.828}
        x2={22.59}
        y1={29.864}
        y2={32.372}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2C69D1" />
        <stop offset={0.932} stopColor="#0ABCF9" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
