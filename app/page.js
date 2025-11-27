"use client"

import React, { useState } from 'react'

const page = () => {
  const[value,setValue] = useState(1);

  return (
    <div>
      <h1> value is incremented : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='px-4 py-2 bg-green-600'>ADD</button>
    </div>
  )
}

export default page
