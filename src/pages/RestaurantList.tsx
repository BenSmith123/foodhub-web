import type { Restaurant } from '../types/restaurant'
import { RestaurantListItem } from '../components/RestaurantListItem'

interface RestaurantListProps {
  restaurants: Restaurant[]
}

export function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantListItem key={restaurant.objectId} restaurant={restaurant} />
      ))}
    </div>
  )
}
