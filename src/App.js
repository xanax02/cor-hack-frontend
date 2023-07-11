import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root'
import Signin from './pages/Signin';


// routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [

    ]
  },
  {
    path: '/signin',
    element: <Signin />
  }
])



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
