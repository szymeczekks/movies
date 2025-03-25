import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./styles/theme.css";
import "./styles/global.css";
import { MainPage } from './views/MainPage/MainPage.jsx';
import { Layout } from './components/Layout/Layout.jsx';
import { mainPageLoader } from './api/MainPageLoader.js';
import { movieLoader } from './api/MovieLoader.js';
import { Movie } from './views/Movie/Movie.jsx';
import { Movies } from './views/Movies/Movies.jsx';
import { moviesLoader } from './api/MoviesLoader.js';
import { Categories } from './views/Categories/Categories.jsx';
import { categoryLoader } from './api/CategoriesLoader.js';
import { Blog } from './views/Blog/Blog.jsx';
import { blogLoader } from './api/BlogLoader.js';
import { addReviewAction } from './api/AddReviewAction.js';

const router = createBrowserRouter([
  {
    path: "/add-review",
    action: addReviewAction,
    element: null
  },
  {
    element: <Layout/>,
    path: "",
    children: [
      {
        path: "/",
        loader: mainPageLoader,
        element: <MainPage/>,
      },
      {
        path: "/movie/:id",
        loader: movieLoader,
        element: <Movie/>,
      },
      {
        path: "/movies",
        loader: moviesLoader,
        element: <Movies/>,
      },
      {
        path: "/movies/:category",
        loader: categoryLoader,
        element: <Categories/>,
      },
      {
        path: "/blog",
        loader: blogLoader,
        element: <Blog/>,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
