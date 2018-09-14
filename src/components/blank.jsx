import React from "react"

export const Blank = (props) => {
  const styles = {
    height: props.height
  }
  return (
    <div className='blank' style={ styles } />
  )
}