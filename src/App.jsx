import './App.css'
import Provider from './AuthProvider'
import ProtectedExample from './ProtectedExample'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import LoginForm from './LoginForm'
import Nav from './Nav'
function App () {
  return (
    <Provider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<ProtectedExample />} exact path='/' />
            <Route element={<ProtectedExample />} exact path='' />
          </Route>
          <Route element={<LoginForm />} exact path='/login' />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
