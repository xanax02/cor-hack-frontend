import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// routes
const router = createBrowserRouter([
  {
    path: '/',
    element: '',
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
