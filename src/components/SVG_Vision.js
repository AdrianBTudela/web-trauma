import * as React from "react"

const SVG_Vision = (props) => (
    <svg
    width={150}
    height={150}
    viewBox="0 0 32 32"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M25.912 5c0-.796-.316-1.559-.879-2.121A2.996 2.996 0 0 0 22.912 2H9.081a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h13.831c.796 0 1.559-.316 2.121-.879A2.996 2.996 0 0 0 25.912 27V5Zm-2 0v22a.997.997 0 0 1-1 1H9.081a1 1 0 0 1-1-1V5a1.002 1.002 0 0 1 1-1h13.831a1 1 0 0 1 1 1Z" />
    <path d="M14.995 8h-.998a1 1 0 0 0 0 2h1.002l.002 1.002a1 1 0 0 0 2-.004L16.999 10h.998a1.001 1.001 0 0 0 0-2h-1.002l-.003-1.002a1 1 0 0 0-2 .004l.003.998ZM14.992 17h6.016a1 1 0 0 0 0-2h-6.016a1 1 0 0 0 0 2ZM14.992 21h6.016a1 1 0 0 0 0-2h-6.016a1 1 0 0 0 0 2ZM14.985 24.994H21a1 1 0 0 0 0-2h-6.015a1 1 0 0 0 0 2Z" />
    <circle cx={10.998} cy={15.958} r={1} />
    <circle cx={10.998} cy={19.976} r={1} />
    <circle cx={10.998} cy={23.994} r={1} />
  </svg>
)

export default SVG_Vision