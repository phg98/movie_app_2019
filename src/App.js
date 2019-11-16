import React from 'react';
import PropTypes from 'prop-types'

const foodILike = [
  {
    name: "kimchi",
    image: "https://woochonfood.com/wp-content/uploads/2019/05/%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98-Napa-Cabbage-Kimchi.jpg",
    rating: 3    
  },
  {
    name: "ramen",
    image: "http://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg",
    rating: 4
  },
  {
    name: "kimbap",
    image: "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG",
    rating: 2.3
  },
]

function Food({name, picture, rating}) {
  return <div>
    <h1>I Love {name}</h1>
    <h3>{rating}/5</h3>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.name} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
