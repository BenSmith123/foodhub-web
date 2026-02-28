import type { Restaurant } from '../types/restaurant'

interface RestaurantListProps {
  restaurants: Restaurant[]
}

export function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <div>
      Restaurant List
      <div>{JSON.stringify(restaurants)}</div>
    </div>
  )
}
