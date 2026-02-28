import type { Restaurant } from '../types/restaurant'

interface RestaurantDetailProps {
  restaurants: Restaurant[]
}

export function RestaurantDetail({ restaurants }: RestaurantDetailProps) {
  return <div>Restaurant Detail</div>
}
