import { useEffect, useState, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../services/themoviedb-api";
// import { HiChevronLeft } from "react-icons/hi";
import { HiOutlineLogin } from "react-icons/hi";
import { HiEye } from "react-icons/hi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        (async () => {
            try {
                const movie = await fetchMovieDetails(movieId);
                setMovieDetails(movie);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [movieId]);

    if (!movieDetails) {
        return <Loader />;
    }

    return (
        <>
            <Link to={backLinkHref}>
                <Button 
                text="Go back"  
                position="left"
                >
                    {/* <HiChevronLeft/> */}
                    <HiOutlineLogin size='100%' />
                </Button>
            </Link>

            <div className={css.movieDetailsContainer}>
                <img
                    className={css.image}
                    src={movieDetails.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                        : `https://fakeimg.pl/600x400?text=No+Image+Available`}
                    alt={movieDetails.title} />
                
                <div className={css.movieDetailsWrap}>
                    <h1>{movieDetails.title}</h1>
                    <h4>User score: {Math.round(movieDetails.vote_average * 10)}%</h4>
                    <h2>Genres</h2>
                    <p>{movieDetails.genres.map(genre => (<span key={genre.id}> {genre.name}</span>))}</p>

                </div>
            </div>
            
            <hr />
            <h3>Additional information</h3>
            <ul className={css.list}>
                <li>
                <Link to="cast">
                    <Button 
                    text="Cast" 
                    position="right"
                    >
                        <HiOutlinePhotograph />
                    </Button>
                </Link>
                </li>
                <li>
                <Link to="reviews">
                    <Button text="Reviews" 
                    position="right"
                    >
                        <HiEye />
                    </Button>
                </Link>
                </li>
            </ul>
            <hr />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default MovieDetailsPage;