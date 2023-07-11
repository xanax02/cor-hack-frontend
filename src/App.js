import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root'


// routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [

    ]
  }
])



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
