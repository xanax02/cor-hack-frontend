import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootMain from './pages/RootMain'
import Signin from './pages/Signin';
import Create from './pages/Create';


// routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootMain />,
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
