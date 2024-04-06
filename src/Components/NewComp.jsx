import React from 'react'

const NewComp = ({newCount}) => {

    console.log('new component render',{newCount})
  return (
    <div>
      <h1>New Component</h1>
    </div>
  )
}

export default React.memo(NewComp) 
