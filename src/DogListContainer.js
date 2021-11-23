// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState()
  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json)
      .then(data => setBreeds.message);
  },[])
}

