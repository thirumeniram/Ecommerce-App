const Rating = ({ rating }) => {
   
    const renderRatingStars = () => {
      let stars = [];
   
      for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(
          <span key={`star-full-${i}`} className="text-yellow-400">
            ★
          </span>
        );
      }
      if (rating % 1 !== 0) {
        stars.push(
          <span key="star-half" className="text-yellow-400">
            ☆
          </span>
        );
      }
      
      for (let i = Math.ceil(rating); i < 5; i++) {
        stars.push(
          <span key={`star-empty-${i}`} className="text-gray-300">
            ☆
          </span>
        );
      }
      return stars;
    };
  
    return (
      <div className="flex items-center mt-2.5 mb-5">
        {renderRatingStars()}
        <span className="text-sm text-gray-500 ml-2">({rating})</span>
       
      </div>
    );
  };
  
  export default Rating;
  