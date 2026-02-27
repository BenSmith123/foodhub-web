import './App.css'
import { Route, Routes } from 'react-router-dom'
import { RestaurantDetail } from './pages/RestaurantDetail'
import { RestaurantList } from './pages/RestaurantList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<RestaurantList />} />
      <Route path="/restaurants/:id" element={<RestaurantDetail />} />
      {/* TODO - fallback route */}
    </Routes>
  )
}

export default App
