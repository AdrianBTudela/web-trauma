import * as React from "react"

const SVG_Ubicacion = (props) => (
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
    <path d="M15.392 24.804a1 1 0 0 0 1.174 0s3.007-2.178 5.412-5.403c1.665-2.233 3.021-4.961 3.021-7.811 0-5.315-3.463-9.596-9.02-9.596-5.557 0-9.021 4.281-9.021 9.596 0 2.85 1.357 5.578 3.022 7.811 2.405 3.225 5.412 5.403 5.412 5.403Zm.587-2.076c-.932-.754-2.806-2.391-4.396-4.523-1.415-1.897-2.625-4.193-2.625-6.615 0-4.174 2.657-7.596 7.021-7.596s7.02 3.422 7.02 7.596c0 2.422-1.209 4.718-2.624 6.615-1.59 2.132-3.464 3.769-4.396 4.523Z" />
    <path d="M22.502 23.412c.803.46 1.382.955 1.382 1.582 0 .591-.525 1.064-1.254 1.507-1.518.921-3.973 1.493-6.734 1.493s-5.216-.572-6.733-1.493c-.73-.443-1.254-.916-1.254-1.507 0-.266.128-.512.325-.747.288-.347.713-.656 1.235-.934a1 1 0 1 0-.939-1.765c-1.708.909-2.621 2.17-2.621 3.446 0 1.177.762 2.334 2.216 3.217 1.754 1.065 4.58 1.783 7.771 1.783 3.192 0 6.017-.718 7.771-1.783 1.454-.883 2.217-2.04 2.217-3.217 0-1.22-.826-2.422-2.387-3.317a1 1 0 0 0-.995 1.735ZM14.999 9.994h-2a1.001 1.001 0 0 0 0 2h2l-.001 2a1 1 0 0 0 2 0l.001-2h2a1 1 0 0 0 0-2h-2v-2a1 1 0 1 0-2 0v2Z" />
  </svg>
)

export default SVG_Ubicacion