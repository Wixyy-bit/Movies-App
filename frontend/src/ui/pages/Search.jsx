import { useState, useEffect } from "react"
import { useDebounce } from "../../hooks/useDebounce"
import MovieCard from "../components/MovieCard"
import "../styles/search.css"

const API_KEY = "c58f21dbd250fe5ca73f83736cfb274d"

function Search() {

    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const debouncedQuery = useDebounce(query, 500)

    useEffect(() => {

        if (!debouncedQuery) return

        async function fetchResults() {

            const res = await fetch(
                `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${debouncedQuery}`
            )

            const data = await res.json()

            setResults(data.results)

        }

        fetchResults()

    }, [debouncedQuery])

    return (

        <div className="search-page">

            <div className="search-container">

                <div className="search-bar">

                    <span className="search-icon">🔍</span>

                    <input
                        type="text"
                        placeholder="Search movies, tv shows, actors..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                </div>

            </div>

            <div className="movie-grid">
                {results.map(movie => (
                    <MovieCard key={movie.movieId} movie={movie} />
                ))}

            </div>

        </div>

    )

}

export default Search