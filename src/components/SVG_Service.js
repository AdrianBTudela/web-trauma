import * as React from "react"

const SVG_Service = (props) => (
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
    <path d="M15 16.993h-2.007a1.001 1.001 0 0 0 0 2H15V21a1 1 0 0 0 2 0v-2.007h2.007a1.001 1.001 0 0 0 0-2H17v-2.006a1 1 0 0 0-2 0v2.006Z" />
    <path d="M11 6H5c-.796 0-1.559.316-2.121.879A2.996 2.996 0 0 0 2 9v14c0 .796.316 1.559.879 2.121A2.996 2.996 0 0 0 5 26h21.988a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H21V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1Zm16.988 6v11a1.002 1.002 0 0 1-1 1H5a.997.997 0 0 1-1-1V12h23.988Zm0-2H4V9a.997.997 0 0 1 1-1h21.988a1 1 0 0 1 1 1v1ZM19 6V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Z" />
  </svg>
)

export default SVG_Service