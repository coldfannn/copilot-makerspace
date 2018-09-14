import React from "react"

export const Divider = (props) => {
  const styles = {
    width: props.width
  }
  return (
    <div className='divider' style={ styles } />
  )
}