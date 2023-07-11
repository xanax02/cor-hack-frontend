import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root'
import Signin from './pages/Signin';
import Create from './pages/Create';


// routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: []
  },
  {
    path: '/signin',
    element: <Signin />
  },
  {
    path: '/create',
    element: <Create />
  }
])



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
