import React from 'react'
import Home from './pages/Home'
import Produtcs from './pages/Produtcs'
import About from './pages/About'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { jobsLoader } from './pages/Jobs'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'
import Error from './components/Error'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Produtcs />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<ContactLayout />} >
          {/* nested routes */}
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>
        <Route path='jobs' element={<JobsLayout/>} errorElement={<Error/>}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route path=':id' element={<JobDetails />} loader={jobDetailsLoader} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={(router)} />
  )
}

export default App