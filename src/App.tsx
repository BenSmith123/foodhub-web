import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { RestaurantDetail } from './pages/RestaurantDetail'
import { RestaurantList } from './pages/RestaurantList'
import { restaurantsApiEndpoint } from './utils/config'
import type { Restaurant } from './types/restaurant'

function App() {
  // TODO - replace this with state management/hook
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const { data } = await axios.get<{ restaurants: Restaurant[] }>(restaurantsApiEndpoint)
        setRestaurants(data.restaurants)
      } catch (error) {
        console.error(error)
        setError('Failed to load restaurants')
      } finally {
        setLoading(false)
      }
    }

    void fetchRestaurants()
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={<RestaurantList restaurants={restaurants} loading={loading} error={error} />}
      />
      <Route
        path="/restaurants/:id"
        element={<RestaurantDetail restaurants={restaurants} loading={loading} />}
      />
      {/* TODO - fallback route */}
    </Routes>
  )
}

export default App
