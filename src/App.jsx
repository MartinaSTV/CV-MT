import {RouterProvider, createBrowserRouter }from 'react-router-dom'
import './App.scss'
import Error from './Views/Error'
import Home from './Views/Home.jsx/Home'
import Work from './Views/Work.jsx/Work'
import Education from './Views/Education.jsx/Education'
import Contact from './Views/Contact/Contacts'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: < Home/>,
      errorElement: <Error />
    },
    {
      path: '/Work',
      element: < Work/>,
      errorElement: <Error />
    },
    {
      path: '/Education',
      element: < Education/>,
      errorElement: <Error />
    },
    {
      path: '/Contact',
      element: < Contact/>,
      errorElement: <Error />
    },

  ])

  return (
    <div className='App'>
      <RouterProvider router = { router }/>
    </div>
  )
}

export default App
