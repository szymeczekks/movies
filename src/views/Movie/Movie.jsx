import { Link, useLoaderData } from 'react-router-dom';
import styles from './Movie.module.css';
import { MoviePoster } from '../../components/MoviePoster/MoviePoster';
import EYE_ICON from '../../assets/eye.svg';
import COMMENT_ICON from '../../assets/comment.svg';
import { ReactSVG } from 'react-svg';
import { TEXTS } from '../../constants/content';
import React from 'react';
import { VideoMeta } from '../../components/VideoMeta/VideoMeta';
import { VideoBadge } from '../../components/VideoBadge/VideoBadge';
import { getYear } from '../../functions/dateToAgo';
import { ListSection } from '../../components/ListSection/ListSection';
import { AddToListDescriptionItem } from '../../components/AddToListDescriptionItem/AddToListDescriptionItem';
import { LanguageContext } from "../../context/languageContext";
import { useContext } from "react";
import { Stars } from '../../components/Stars/Stars';
import { ReviewsWrapper } from '../../components/ReviewsWrapper/ReviewsWrapper';

export function Movie() {
    const [ language ] = useContext(LanguageContext);
    const movie = useLoaderData();
    const firstFourMovies = [
        {
            "adult": false,
            "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
            "genre_ids": [28, 878, 35, 10751],
            "id": 939243,
            "original_language": "en",
            "original_title": "Sonic the Hedgehog 3",
            "overview": "Sonic, Knuckles i Tails ponownie łączą siły przeciwko potężnemu nowemu przeciwnikowi, Shadowowi. Shadow to tajemniczy złoczyńca z mocami niepodobnymi do niczego, z czym mieli do czynienia wcześniej. Drużyna Sonica musi szukać nieprawdopodobnego sojuszu w nadziei na powstrzymanie złoczyńcy i ochronę planety.",
            "popularity": 4014.717,
            "poster_path": "/EPpxA0e1c6XXOzPVKI1QhVTLpE.jpg",
            "release_date": "2024-12-19",
            "title": "Sonic 3. Szybki jak błyskawica",
            "video": false,
            "vote_average": 7.778,
            "vote_count": 1613,
            "videos": [
                { "iso_639_1": "pl", "iso_3166_1": "PL", "name": "Keanu Reeves jako Shadow w wersji oryginalnej", "key": "yA93mFlfHRk", "site": "YouTube", "size": 1080, "type": "Featurette", "official": false, "published_at": "2024-12-09T14:14:50.000Z", "id": "675705d1f31dc8ce88fd9f26" },
                { "iso_639_1": "pl", "iso_3166_1": "PL", "name": "Nowy zwiastun", "key": "Up8d3yWiStc", "site": "YouTube", "size": 1080, "type": "Trailer", "official": false, "published_at": "2024-11-25T14:04:31.000Z", "id": "67448877c24765fa2f2dea37" },
                { "iso_639_1": "pl", "iso_3166_1": "PL", "name": "Pierwszy zwiastun", "key": "RhZviHtsi3o", "site": "YouTube", "size": 1080, "type": "Trailer", "official": false, "published_at": "2024-08-27T13:04:02.000Z", "id": "66cdeb0d6dc6c5bff84ff549" }
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/v9Du2HC3hlknAvGlWhquRbeifwW.jpg",
            "genre_ids": [28, 12, 53],
            "id": 539972,
            "original_language": "en",
            "original_title": "Kraven the Hunter",
            "overview": "\"Kraven the Hunter\" to opowieść o tym, jak i dlaczego powstał jeden z najbardziej kultowych złoczyńców Marvela.",
            "popularity": 2300.197,
            "poster_path": "/mGN4E5i4F8dMnUZi2DewP5RcYlU.jpg",
            "release_date": "2024-12-11",
            "title": "Kraven Łowca",
            "video": false,
            "vote_average": 6.609,
            "vote_count": 1104,
            "videos": [
                { "iso_639_1": "pl", "iso_3166_1": "PL", "name": "Bohater dobry czy zły?", "key": "PLxk8O0MHKI", "site": "YouTube", "size": 1080, "type": "Featurette", "official": false, "published_at": "2024-12-10T11:55:21.000Z", "id": "675844d98842b711121ad018" },
                { "iso_639_1": "pl", "iso_3166_1": "PL", "name": "Nowy, mocny zwiastun!", "key": "HBxGGpIWNDs", "site": "YouTube", "size": 1080, "type": "Trailer", "official": false, "published_at": "2024-08-14T09:02:38.000Z", "id": "675845c2637463229eafcdfd" },
                { "iso_639_1": "pl", "iso_3166_1": "PL", "name": "Zwiastun", "key": "BImxIh0Ie40", "site": "YouTube", "size": 1080, "type": "Trailer", "official": false, "published_at": "2023-06-21T07:16:39.000Z", "id": "64a5ea7407faa2010105f983" }
            ]
        },
        {
            "adult": false,
            "backdrop_path": "/zo8CIjJ2nfNOevqNajwMRO6Hwka.jpg",
            "genre_ids": [16, 12, 10751, 35],
            "id": 1241982,
            "original_language": "en",
            "original_title": "Moana 2",
            "overview": "Po otrzymaniu nieoczekiwanego zaproszenia od przodków Moana wyrusza w podróż, która zabierze ją na niebezpieczne wody położone na skraju mórz wysp Pacyfiku. Tam przeżyje przygody, jakich nigdy wcześniej nie doświadczyła.",
            "popularity": 1851.971,
            "poster_path": "/wOqX2GzhFvqCXYpTQZCNtMtnLZq.jpg",
            "release_date": "2024-11-21",
            "title": "Vaiana 2",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 1352,
            "videos": [
                { "iso_639_1": "pl", "iso_3166_1": "PL", "name": "Zwiastun #3 [dubbing]", "key": "eXrRsSMbyRc", "site": "YouTube", "size": 1080, "type": "Trailer", "official": true, "published_at": "2024-10-09T13:06:10.000Z", "id": "67068f08a88614d6b08afac7" },
                { "iso_639_1": "pl", "iso_3166_1": "PL", "name": "Zwiastun #2 [dubbing]", "key": "ZEhU7zg-y4o", "site": "YouTube", "size": 1080, "type": "Trailer", "official": true, "published_at": "2024-08-10T06:46:59.000Z", "id": "66b78aed7f880eccc99ee05c" },
                { "iso_639_1": "pl", "iso_3166_1": "PL", "name": "Zwiastun #1 [dubbing]", "key": "8K6xEoL3vTI", "site": "YouTube", "size": 1080, "type": "Trailer", "official": true, "published_at": "2024-05-30T12:24:57.000Z", "id": "66587dff1d04f3b44d2d29e9" }
            ]
        },
        { "adult": false, "backdrop_path": "/xZm5YUNY3PlYD1Q4k7X8zd2V4AK.jpg", "genre_ids": [28, 35], "id": 993710, "original_language": "en", "original_title": "Back in Action", "overview": "Piętnaście lat po porzuceniu pracy w CIA i założeniu rodziny para elitarnych agentów wraca do groźnego świata szpiegów, gdy ich tożsamość wychodzi na jaw.", "popularity": 1552.041, "poster_path": "/tG8sZg9bygKt0yIZposylj1Eb45.jpg", "release_date": "2025-01-15", "title": "Znowu w akcji", "video": false, "vote_average": 6.63, "vote_count": 833, "videos": [] }
    ];

    console.log(movie);

    return (
        <div className="wrapper">
            <div className={styles.video}>
                {movie.videos[0] ? <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${movie.videos[0].key}`}
                    title={movie.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe> :
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                }
            </div>
            <div className={styles.layout}>
                <MoviePoster movie={movie}/>
                <div className={styles.info}>
                    <h1>{movie.title}</h1>
                    <div>

                        <div className={styles.meta}>
                            <div className={styles.rating}>
                                <Stars key={movie.id} rating={`${(6 * movie.vote_average * 10) / 100}/6`} type="view"/>
                            </div>
                            <p className={styles.vote_average}>{movie.vote_average.toFixed(1)}</p>
                            <div>
                                <ReactSVG src={EYE_ICON}/>
                                <p>{movie.vote_count} {TEXTS[language].views}</p>
                            </div>
                            <div>
                                <ReactSVG src={COMMENT_ICON}/>
                                <p>{movie.reviews.length}</p>
                            </div>
                        </div>
                        <VideoMeta>
                            <p>{getYear(movie.release_date)}</p>
                            <p>{movie.runtime} min</p>
                            <VideoBadge>
                                {movie.adult ? 'TV-MA' : 'TV-14'}
                            </VideoBadge>
                        </VideoMeta>
                        <VideoMeta>
                            {movie.genres.map(genre => <Link key={genre.id}>{genre.name}</Link>)}
                        </VideoMeta>
                    </div>
                    <p className={styles.overview}>{movie.overview}</p>
                    <div className={styles.list}>
                        <p>{TEXTS[language].production_companies}:</p>
                        {movie.production_companies.map( company => <Link key={company.id}>{company.name}</Link>)}
                    </div>
                    <hr />
                    <ListSection title={TEXTS[language].recommended_for_you}>
                        {firstFourMovies.map((movie) => <AddToListDescriptionItem key={movie.id} movie={movie} />)}
                        {firstFourMovies.map((movie) => <AddToListDescriptionItem key={movie.id} movie={movie} />)}
                        {firstFourMovies.map((movie) => <AddToListDescriptionItem key={movie.id} movie={movie} />)}
                    </ListSection>
                    <ReviewsWrapper reviews={movie.reviews} userData={movie.userData}/>
                </div>
            </div>
        </div>
    );
}