import { useLoaderData } from 'react-router-dom';
import { HeroCarousel } from '../../components/HeroCarousel/HeroCarousel';
import { TEXTS } from '../../constants/content';
import { ListSection } from '../../components/ListSection/ListSection';
import { MoviePreviewItem } from '../../components/MoviePreviewItem/MoviePreviewItem';
import { AddToListItem } from '../../components/AddToListItem/AddToListItem';
import { AddToListDescriptionItem } from '../../components/AddToListDescriptionItem/AddToListDescriptionItem';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { IMAGES } from '../../constants/api';
import EXCLUSIVE from '../../assets/exclusive-video-1.jpg';
import JACK from '../../assets/jack.jpg';
import { HeroDescription } from '../../components/HeroDescription/HeroDescription';
import { ThumbnailCarousel } from '../../components/ThumbnailCarousel/ThumbnailCarousel';
import { VideoOnClick } from '../../components/VideoOnClick/VideoOnClick';
import { ExclusiveListItem } from '../../components/ExclusiveListItem/ExclusiveListItem';
import { ArtistsListItem } from '../../components/ArtistsListItem/ArtistsListItem';
import { BlogListItem } from '../../components/BlogListItem/BlogListItem';
import { LanguageContext } from '../../context/LanguageContext';
import { useContext } from 'react';

const exclusiveItems = [
    {
        id: 1,
        title: 'The best movies of 2021',
        image: EXCLUSIVE,
        views: 10000,
        date: '2021-01-01',
    },
    {
        id: 2,
        title: 'The best movies of 2021',
        image: EXCLUSIVE,
        views: 1280,
        date: '2024-05-01',
    },
    {
        id: 3,
        title: 'The best movies of 2021',
        image: EXCLUSIVE,
        views: 1000,
        date: '2023-01-01',
    },
];

const artists = [
    {
        id: 1,
        name: 'Jack Pearson',
        image: JACK,
    },
    {
        id: 2,
        name: 'Jack Pearson',
        image: JACK,
    },
    {
        id: 3,
        name: 'Jack Pearson',
        image: JACK,
    },
    {
        id: 4,
        name: 'Jack Pearson',
        image: JACK,
    },
    {
        id: 5,
        name: 'Jack Pearson',
        image: JACK,
    },
    {
        id: 6,
        name: 'Jack Pearson',
        image: JACK,
    },
    {
        id: 7,
        name: 'Jack Pearson',
        image: JACK,
    },
    {
        id: 8,
        name: 'Jack Pearson',
        image: JACK,
    },
    {
        id: 9,
        name: 'Jack Pearson',
        image: JACK,
    },
    {
        id: 10,
        name: 'Jack Pearson',
        image: JACK,
    },
];

const blogItems = [
    {
        id: 1,
        title: 'The best movies of 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc tincidunt aliquam. Nullam nec nunc nec nunc tincidunt aliquam. Nullam nec nunc nec nunc tincidunt aliquam.',
        author: 'John Doe',
        categories: ['Movies', 'Entertainment'],
        image: EXCLUSIVE,
        date: '2021-01-01',
    },
    {
        id: 2,
        title: 'The best movies of 2022',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'John Doe',
        categories: ['Movies', 'Entertainment'],
        image: EXCLUSIVE,
        date: '2021-01-01',
    },
    {
        id: 3,
        title: 'The best movies of 2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc tincidunt aliquam. Nullam nec nunc nec nunc tincidunt aliquam. Nullam nec nunc nec nunc tincidunt aliquam.',
        author: 'John Doe',
        categories: ['Movies', 'Entertainment'],
        image: EXCLUSIVE,
        date: '2021-01-01',
    },
]


export function MainPage() {
    const [language] = useContext(LanguageContext);
    const movies = useLoaderData();
    const firstFourMovies = movies.slice(0, 4);

    return <>
        <HeroCarousel movies={firstFourMovies}/>
        <ListSection title={TEXTS[language].trending_movies}>
            {firstFourMovies.map((movie) => <MoviePreviewItem key={movie.id} movie={movie} />)}
            {firstFourMovies.map((movie) => <MoviePreviewItem key={movie.id} movie={movie} />)}
            {firstFourMovies.map((movie) => <MoviePreviewItem key={movie.id} movie={movie} />)}
        </ListSection>
        <ListSection title={TEXTS[language].new_release}>
            {firstFourMovies.map((movie) => <AddToListItem key={movie.id} movie={movie} />)}
            {firstFourMovies.map((movie) => <AddToListItem key={movie.id} movie={movie} />)}
            {firstFourMovies.map((movie) => <AddToListItem key={movie.id} movie={movie} />)}
        </ListSection>
        <HeroSection background={`${IMAGES.secure_base_url}original/${firstFourMovies[0].backdrop_path}`}>
            <HeroDescription movie={firstFourMovies[0]} />
            <ThumbnailCarousel>
            {Object.values(firstFourMovies[0].videos).map((video) => <VideoOnClick key={video.id} video={video} />)}
            </ThumbnailCarousel>
        </HeroSection>
        <ListSection title={TEXTS[language].deal_of_the_week}>
            {firstFourMovies.map((movie) => <AddToListDescriptionItem key={movie.id} movie={movie} />)}
            {firstFourMovies.map((movie) => <AddToListDescriptionItem key={movie.id} movie={movie} />)}
            {firstFourMovies.map((movie) => <AddToListDescriptionItem key={movie.id} movie={movie} />)}
        </ListSection>
        <ListSection 
        slidesPerView={3} 
        breakpoints={{
            0: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            }
        }} 
        title={TEXTS[language].exclusive_videos} 
        subtitle={TEXTS[language].exclusive_videos_subtitle}>
            {exclusiveItems.map((blog) => <ExclusiveListItem key={blog.id} blog={blog} />)}
        </ListSection>
        <ListSection 
        title={TEXTS[language].top_artists}
        slidesPerView={8}
        breakpoints={{
            0: {
                slidesPerView: 2
            },
            500: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 6
            },
            1200: {
                slidesPerView: 8
            }
        }}>
            {artists.map((artist) => <ArtistsListItem key={artist.id} artist={artist} />)}
        </ListSection>
        <ListSection 
        slidesPerView={3} 
        breakpoints={{
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }} 
        title={TEXTS[language].top_news}>
            {blogItems.map((blog) => <BlogListItem key={blog.id} blog={blog} />)}
        </ListSection>
    </>
}