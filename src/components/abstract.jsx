import React from "react"

export const Abstract = (props) => {
  const ballStyles = {
    ...props.ballStyles,
    backgroundImage: `url(${ props.ballUrl })`
  }
  return (
    <div>
      <p>{ props.title }</p>
      <p>{ props.description }</p>
      <span style={ ballStyles }/>
    </div>
  )
}
