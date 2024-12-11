import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from './pages/Home';
// import PostPage, { loader as postLoader } from './pages/Post';
import RootLayout from './pages/Root';

// const BlogPage = () => import("./pages/Blog"); // returns a promise. Rather than a function returning a JSX code
const BlogPage = lazy(() => import("./pages/Blog"));
const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RootLayout />
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          { 
            index: true, 
            element: <Suspense fallback={<p>blog page is loading...</p>}>
              <BlogPage />
            </Suspense>,
            loader: () => import('./pages/Blog').then(module => module.loader()) 
          },
          { 
            path: ':id', 
            element: <Suspense fallback={<p>post page is loading...</p>}>
              <PostPage />
            </Suspense>,            
            loader: (meta) => import('./pages/Post').then(module => module.loader(meta)) 
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
