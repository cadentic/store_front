import React from 'react';

export default ({rating}) => {
  const stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<i className="fa fa-star" key={i}></i>);
  }

  return (
    <div className="star">
      {stars}
      {rating - Math.floor(rating) > 0 && <i className="fa fa-star-half-empty"></i>}
      {rating <= 4 && <i className="fa fa-star-o"></i>}
    </div>
  );
};
