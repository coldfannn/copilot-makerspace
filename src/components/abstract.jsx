import React from "react"

export const Abstract = (props) => {
  const ballStyles = {
    ...props.ballStyles,
    backgroundImage: `url(${ props.ballUrl })`
  }
  return (
    <div className='abstract'>
      { props.title && <p className='title'>{ props.title }</p> }
      { props.description && <p className='description'>{ props.description }</p> }
      { props.note && <p className='description'>{ props.note }</p> }
      <span style={ ballStyles }/>
    </div>
  )
}
