import StarRatings from 'react-star-ratings';

const Ratings = ({ rating = 3.4 }) => {
    return (
        <StarRatings
            rating={rating}
            starRatedColor="#e8ca09"
            numberOfStars={5}
            isSelectable={false}
            starDimension={"20px"}
            starSpacing={"2px"}
        />
    );
};

export default Ratings;