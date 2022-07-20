import React from 'react'

const SvgDeleteRecord = ({size}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 384 384"
      style={{
        enableBackground: "new 0 0 512 512",
      }}
      xmlSpace="preserve"
      className="hovered-paths"
    >
      <g xmlns="http://www.w3.org/2000/svg">
        <path
          d="M64 341.333C64 364.907 83.093 384 106.667 384h170.667C300.907 384 320 364.907 320 341.333v-256H64v256zM266.667 21.333 245.333 0H138.667l-21.334 21.333H42.667V64h298.666V21.333z"
          data-original="#000000"
          className="hovered-path"
        />
      </g>
    </svg>
  );
}

export default SvgDeleteRecord