// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react'

function DogImage(props){
  const [url, setDogUrl] = useState(props.url);
  const handleClick = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => setDogUrl(data.message));
  }

  return(
    <span className="item">
      <img className="image" src={url} />
      <button className="btn btn--blue" onClick={handleClick}>
        更新
      </button>
    </span>
  )
}

export default DogImage;