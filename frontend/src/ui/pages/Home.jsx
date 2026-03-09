import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import MovieCard from "../components/MovieCard"
import SkeletonCard from "../components/SkeletonCard"
import MovieRow from "../components/MovieRow"

import { useFavorites } from "../../hooks/useFavorites"

const API_KEY = "c58f21dbd250fe5ca73f83736cfb274d"

function Home() {

    const navigate = useNavigate()

    const { addFavorite, removeFavorite, isFavorite, fetchFavorites } = useFavorites()

    const [movies, setMovies] = useState([])
    const [hero, setHero] = useState(null)

    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchFavorites()
    }, [])

    useEffect(() => {
        fetchMovies()
    }, [page])

    async function fetchMovies() {

        if (loading) return

        setLoading(true)

        const res = await fetch(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`
        )

        const data = await res.json()

        if (!hero && data.results.length > 0) {

            const randomMovie =
                data.results[Math.floor(Math.random() * data.results.length)]

            setHero(randomMovie)

        }

        setMovies(prev => [...prev, ...data.results])

        setLoading(false)

    }

    useEffect(() => {

        const handleScroll = () => {

            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 500
            ) {
                setPage(prev => prev + 1)
            }

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (

        <div className="main">

            {/* HERO BANNER */}

            {hero && (

                <div
                    className="hero"
                    style={{
                        backgroundImage:
                            `url(https://image.tmdb.org/t/p/original${hero.backdrop_path})`
                    }}
                >

                    <div className="hero-content">

                        <h1>{hero.title}</h1>

                        <p>{hero.overview}</p>

                        <div className="hero-buttons">

                            <button
                                onClick={() => navigate(`/movie/${hero.id}`)}
                            >
                                ▶ Play Trailer
                            </button>

                            {isFavorite(hero.id) ? (

                                <button
                                    onClick={() => removeFavorite(hero.id)}
                                >
                                    ❌ Remove Favorite
                                </button>

                            ) : (

                                <button
                                    onClick={() => addFavorite(hero)}
                                >
                                    ❤️ Add Favorite
                                </button>

                            )}

                        </div>

                    </div>

                </div>

            )}
            <MovieRow
                title="Trending"
                endpoint="/trending/movie/week"
            />

            <MovieRow
                title="Popular"
                endpoint="/movie/popular"
            />

            <MovieRow
                title="Top Rated"
                endpoint="/movie/top_rated"
            />

            <MovieRow
                title="Upcoming"
                endpoint="/movie/upcoming"
            />

            {/* MOVIE GRID */}

            
            <h2 id="explore">Explore All </h2>
            <div className="movie-grid">

                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}

                {loading &&
                    Array(8).fill(0).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))
                }

            </div>

        </div>

    )

}

export default Home