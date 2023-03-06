import * as React from "react"

const SVG_Hospital = (props) => (
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
    <path d="M7.003 28.013h18a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3h-1V6.99a3 3 0 0 0-3-3h-10c-1.656 0-3 1.344-3 3V8h-1a3 3 0 0 0-3 3v14.013a3 3 0 0 0 3 3Zm17-18.013v16.013h1a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-1Zm-4.006 16.013h2.006V6.99a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v19.023h1.994v-5.001a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v5.001ZM8.003 10h-1a1 1 0 0 0-1 1v14.013a1.003 1.003 0 0 0 1 1h1V10Zm9.994 16.013h-4v-5.001a1.003 1.003 0 0 1 1-1h2a1 1 0 0 1 1 1v5.001Z" />
    <path d="M14.999 10h-1.008a1 1 0 0 0 0 2h1.005l-.002 1.005a1 1 0 0 0 2 .003L16.996 12h1.007a1 1 0 0 0 0-2h-1.004L17 8.995a1 1 0 0 0-2-.003L14.999 10Z" />
  </svg>
)

export default SVG_Hospital