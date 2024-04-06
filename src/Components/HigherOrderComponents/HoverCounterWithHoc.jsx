import React from 'react'
import withCounter from './withCounter'

const HoverCounterWithHoc = (props) => {
  return (
    <div>
      <button onMouseOver={props.incrementCount}>Hover {props.count}</button>
    </div>
  )
}

export default withCounter(HoverCounterWithHoc)
