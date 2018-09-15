import React from "react"

export const Abstract = (props) => {
  const ballStyles = {
    ...props.ballStyles,
    backgroundImage: `url(${ props.ballUrl })`
  }
  const title = props.title && (
    <div className='title'>
      <p>
        { props.title }
        <span style={ ballStyles }/>
      </p>
    </div>
  )
  return (
    <div className='abstract'>
      { title }
      { props.description && <p className='description'>{ props.description }</p> }
      { props.note && <p className='description'>{ props.note }</p> }
    </div>
  )
}
