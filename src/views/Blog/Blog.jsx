import styles from './Blog.module.css';
import EXCLUSIVE from '../../assets/exclusive-video-1.jpg';
import { BlogItem } from '../../components/BlogItem/BlogItem';
import { Search } from '../../components/Search/Search';
import { TopPosts } from '../../components/TopPosts/TopPosts';
import { GenresList } from '../../components/GenresList/GenresList';

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
        title: 'The best movies of 2022 The best movies of 2022',
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

const categories = blogItems.reduce((acc, post) => {
    post.categories.forEach(category => {
        if (!acc.includes(category)) {
            acc.push(category);
        }
    });
    return acc;
}, []).map(category => {
    return {
        id: Math.random(),
        name: category,
    }
});

console.log(categories);

export function Blog() {
    return (
        <div className='wrapper'>
            <div className={styles.blog}>
                <div className={styles.mainContent}>
                    {blogItems.map((post, index) => (
                        <BlogItem key={index} post={post} />
                    ))}
                </div>
                <div className={styles.sideContent}>
                    <div className={styles.sticky}>
                        <Search/>
                        <TopPosts posts={blogItems}/>
                        <GenresList genres={categories}/>
                    </div>
                </div>
            </div>
        </div>
    );
}