// DO NOT DELETE
import * as React from 'react'
import DogImage from './DogImage'

function Description(props){
  return(
    <div className="Wrap">
      <span className="message">
        {props.desc}
      </span>
      <DogImage url="https://images.dog.ceo/breeds/bulldog-boston/n02096585_772.jpg" />
    </div>
  )
}

export default Description;