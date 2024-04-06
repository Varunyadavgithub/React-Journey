import React from 'react'
import withCounter from './withCounter'

const ClickCounterWithHoc = (props) => {
  return (
    <div>
      <button onClick={props.incrementCount}>Clicked {props.count}</button>
    </div>
  )
}

export default withCounter(ClickCounterWithHoc)
