import StarRatings from "react-star-ratings/build/star-ratings";

export default function Stars({ratingNum}) {


        return (
            <StarRatings
                rating={ratingNum/2}
                starRatedColor="red"
                numberOfStars={5}
                name='rating'
            />
        );
}