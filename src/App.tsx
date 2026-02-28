import './App.css'
import { useEffect, useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { RestaurantDetail } from './pages/RestaurantDetail'
import { RestaurantList } from './pages/RestaurantList'
import { restaurantsApiEndpoint } from './utils/config'
import type { Restaurant } from './types/restaurant'
import { restaurantsResponseSchema } from './utils/schema'

function App() {
  // TODO - replace this with state management/hook
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data } = await axios.get(restaurantsApiEndpoint) // axios always returns { data }
        const parsed = restaurantsResponseSchema.parse(data)
        setRestaurants(parsed.restaurants)
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
      <Route path="/" element={<RestaurantList restaurants={restaurants} />} />
      <Route path="/restaurants/:id" element={<RestaurantDetail restaurants={restaurants} />} />
      {/* TODO - fallback route */}
    </Routes>
  )
}

export default App
