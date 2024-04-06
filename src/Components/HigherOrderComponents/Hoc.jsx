import React from 'react'
import ClickCounterWithoutHoc from './ClickCounterWithoutHoc'
import HoverCountWithoutHoc from './HoverCountWithoutHoc'

import ClickCounterWithHoc from './ClickCounterWithHoc'
import HoverCounterWithHoc from './HoverCounterWithHoc'

const Hoc = () => {
  return (
    <div>
      <h1>Without HOC</h1>
      <ClickCounterWithoutHoc/>
      <hr />
      <HoverCountWithoutHoc/>

      <h1>With HOC</h1>
      <ClickCounterWithHoc/>
      <hr />
      <HoverCounterWithHoc/>
    </div>
  )
}

export default Hoc

/* ------------Syntex----------- */
// const EnhancedComponent=higherOrederComponent(OriginalComponent);

/* ------------Example------------- */
// const Batman=withBatSuit(BruceWayne)
