import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootMain from './pages/RootMain'
import Auth from './pages/Auth';
import Console from './pages/Console';
import Project from './pages/Project';
import CreateApp from './pages/CreateApp';


// routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootMain />,
    children: [
      { 
        path: 'app/:id/',
        element: '',
      }
    ]
  },
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/console',
    element: <Console />
  },
  {
    path: '/new/project',
    element: <Project />
  },
  {
    path: '/new/app',
    element: <CreateApp />
  }
])



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
