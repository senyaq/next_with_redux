import React, { Fragment } from 'react'

export default function Button(props) {
  const { name, onClick } = props
  return (
    <Fragment>
      <button onClick={onClick}>{name}</button>

      <style jsx>{`
        button {
          background-color: white;
          color: black;
          padding: 10px;
          border: 2px solid #4caf50; /* Green */
        }
        ,
        button:hover {
          cursor: pointer;
          background-color: #4caf50; /* Green */
          color: white;
        }
      `}</style>
    </Fragment>
  )
}
