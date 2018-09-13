import React from "react"

export const Image = (props) => {
  const styles = {
    ...props.styles,
    backgroundImage: `url(${ props.url })`
  }
  return (
    <section className={ props.className } style={ styles } />
  )
}