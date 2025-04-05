import { useEffect, useState } from 'react';
import { AddToListItem } from '../../components/AddToListItem/AddToListItem';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { FilterBy } from '../../components/FilterBy/FilterBy';
import { FilterSelect } from '../../components/FilterSelect/FilterSelect';
import { GenresList } from '../../components/GenresList/GenresList';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { TopList } from '../../components/TopList/TopList';
import { TEXTS } from '../../constants/content';
import styles from './Movies.module.css';
import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";

const sortingOptions = [
    {
        id: 'title',
        name: {
            PL: 'Tytuł',
            EN: 'Title',
        },
    },
    {
        id: 'release_date',
        name: {
            PL: 'Data wydania',
            EN: 'Release date',
        },
    },
    {
        id: 'vote_average',
        name: {
            PL: 'Ocena',
            EN: 'Rating',
        },
    },
    {
        id: 'popularity',
        name: {
            PL: 'Popularność',
            EN: 'Popularity',
        },
    },
];

const genres = [
	{
		id: 28,
		name: {
            PL: 'Akcja',
            EN: 'Action',
        },
	},
	{
		id: 12,
		name: {
            PL: 'Przygodowy',
            EN: 'Adventure',
        },
	},
	{
		id: 16,
		name: {
            PL: 'Animacja',
            EN: 'Animation',
        },
	},
	{
		id: 35,
		name: {
            PL: 'Komedia',
            EN: 'Comedy',
        },
	},
	{
		id: 80,
		name: {
            PL: 'Dramat kryminalny',
            EN: 'Crime',
        }
	},
	{
		id: 99,
		name: {
            PL: 'Dokumentalny',
            EN: 'Documentary',
        }
	},
	{
		id: 18,
		name: {
            PL: 'Dramat',
            EN: 'Drama',
        }
	},
	{
		id: 10751,
		name: {
            PL: 'Familijny',
            EN: 'Family',
        }
	},
	{
		id: 14,
		name: {
            PL: 'Fantasy',
            EN: 'Fantasy',
        }
	},
	{
		id: 36,
		name: {
            PL: 'Historia',
            EN: 'History',
        }
	},
	{
		id: 27,
		name: {
            PL: 'Horror',
            EN: 'Horror',
        }
	},
	{
		id: 10402,
		name: {
            PL: 'Muzyczny',
            EN: 'Music',
        }
	},
	{
		id: 9648,
		name: {
            PL: 'Tajemnica',
            EN: 'Mystery',
        }
	},
	{
		id: 10749,
		name: {
            PL: 'Romans',
            EN: 'Romance',
        }
	},
	{
		id: 878,
		name: {
            PL: 'Sci-Fi',
            EN: 'Science Fiction',
        }
	},
	{
		id: 10770,
		name: {
            PL: 'Telewizyjny film',
            EN: 'TV Movie',
        }
	},
	{
		id: 53,
		name: {
            PL: 'Thriller',
            EN: 'Thriller',
        }
	},
	{
		id: 10752,
		name: {
            PL: 'Wojenny',
            EN: 'War',
        }
	},
	{
		id: 37,
		name: {
            PL: 'Western',
            EN: 'Western',
        }
	},
];

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
    { "adult": false, "backdrop_path": "/xZm5YUNY3PlYD1Q4k7X8zd2V4AK.jpg", "genre_ids": [28, 35], "id": 993710, "original_language": "en", "original_title": "Back in Action", "overview": "Piętnaście lat po porzuceniu pracy w CIA i założeniu rodziny para elitarnych agentów wraca do groźnego świata szpiegów, gdy ich tożsamość wychodzi na jaw.", "popularity": 1552.041, "poster_path": "/tG8sZg9bygKt0yIZposylj1Eb45.jpg", "release_date": "2025-01-15", "title": "Znowu w akcji", "video": false, "vote_average": 6.63, "vote_count": 833, "videos": [] },
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

export function Movies() {
    const [ language ] = useContext(LanguageContext);
    const [filteredMovies, setFilteredMovies] = useState(firstFourMovies);
    const [filters, setFilters] = useState([]);

    const years = [... new Set(firstFourMovies.map(movie => movie.release_date.split('-')[0]))].map((year, index) => ({ id: year, name: {[language]: year} }));

    const setFilter = (filter) => {
        setFilters(prevFilters => {
            const updatedFilters = prevFilters.filter(prevFilter => prevFilter.key !== filter.key);
            if (filter.value && filter.value.length > 0) {
                updatedFilters.push(filter);
            }
            return updatedFilters;
        });
    };

    useEffect(() => {
        let movies = firstFourMovies;
        filters.forEach(filter => {
            switch (filter.key) {
                case 'genres':
                    movies = movies.filter(movie => movie.genre_ids.some(genre => filter.value.includes(genre)));
                    break;
                case 'year':
                    movies = movies.filter(movie => filter.value.includes(movie.release_date.split('-')[0]));
                    break;
                default:
                    break;
            }
        });
        setFilteredMovies(movies);
    }, [filters]);

    const sortMovies = (option) => {
        switch (option.value) {
            case 'title':
                setFilteredMovies([...filteredMovies].sort((a, b) => a.title.localeCompare(b.title)));
                break;
            case 'release_date':
                setFilteredMovies([...filteredMovies].sort((a, b) => b.release_date.localeCompare(a.release_date)));
                break;
            case 'vote_average':
                setFilteredMovies([...filteredMovies].sort((a, b) => b.vote_average - a.vote_average));
                break;
            case 'popularity':
                setFilteredMovies([...filteredMovies].sort((a, b) => b.popularity - a.popularity));
                break;
            default:
                break;
        }
    };

	return (
		<div className='wrapper'>
			<div className={styles.movies}>
                <PageHeader>{TEXTS[language].movies}</PageHeader>
                <Breadcrumbs/>
                <div className={styles.content}>
                    <div className={styles.sideContent}>
                        <GenresList genres={genres}/>
                        <FilterBy header={TEXTS[language].movies_by_year} elements={years} name='year' setter={setFilter}/>
                        <TopList movies={firstFourMovies}/>
                    </div>
                    <div className={styles.mainContent}>
                        <div className={styles.mainContentTop}>
                            <p className={styles.resultsInfo}>{TEXTS[language].showing} {filteredMovies.length} {TEXTS[language].of} {filteredMovies.length} {TEXTS[language].results}</p>
                            <div className={styles.filters}>
                                <FilterSelect elements={genres} setter={setFilter} name='genres' label={TEXTS[language].genres} type='search' />
                                <FilterSelect elements={years} setter={setFilter} name='year' label={TEXTS[language].year} />
                                <FilterSelect elements={sortingOptions} setter={sortMovies} label={TEXTS[language].sort_by} type='sort' />
                            </div>
                        </div>
                        <div className={styles.mainContentList}>
                            {filteredMovies.map((movie, index) => (
                                <AddToListItem key={index} movie={movie}/>
                            ))}
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
}
