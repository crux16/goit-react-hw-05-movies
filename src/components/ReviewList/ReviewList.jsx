import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchMovieReviews } from "../../services/themoviedb-api";
import { ReviewListItem } from "./ReviewListItem/ReviewListItem";

const ReviewList = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetchMovieReviews(movieId);
                setReviews(response);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [movieId]);

    return (
        <>
            {reviews.length === 0 ? (
                <div>We have no reviews available for this movie.</div>
            ) : (<ul style={{listStyle:'none'}}>{reviews.map(({ id, author, content }) => (<ReviewListItem key={id} author={author} content={content} />
            ))}
            </ul>
            )}
        </>
    );

};

export default ReviewList;