import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const CastList = lazy(() => import("./CastList/CastList"));
const ReviewList = lazy(() => import("./ReviewList/ReviewList"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}
      >
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewList />} />
        </Route>
      
        <Route path="*" element={<Navigate to="/" />} />

      </Route>
    </Routes>
  );
};

export default App;

















// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
