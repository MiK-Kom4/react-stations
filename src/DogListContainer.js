// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react'

export const DogListContainer = (props) => {
  const [breeds, setBreeds] = useState()
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json)
      .then(data => setBreeds.message);
  },[])

  return (
    <div>
      <h2></h2>
    </div>
  )

}

