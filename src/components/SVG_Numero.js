import * as React from "react"

const SVG_Numero= (props) => (
    <svg
    width={100}
    height={100}
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
    <path d="M24 5a3 3 0 0 0-3-3H11a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5Zm-2 16.994V27a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-5.006h12ZM10 8v11.994h12V8H10Zm12-2H10V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1Z" />
    <path d="M15.003 25.994H17a1 1 0 0 0 0-2h-1.997a1 1 0 0 0 0 2ZM15 13h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-2a1 1 0 0 0-2 0v2Z" />
  </svg>
)

export default SVG_Numero