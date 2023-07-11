import React from 'react'

const Main = (props) => {
  return (
    <div className="bg-[#1E272D] h-[calc(100vh-110px)] flex-grow mx-5 mt-5 rounded-md">
      {props.children}
    </div>
  )
}

export default Main