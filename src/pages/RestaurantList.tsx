import type { Restaurant } from '../types/restaurant'
import { RestaurantListItem } from '../components/RestaurantListItem'
import styles from './RestaurantList.module.css'

interface RestaurantListProps {
  restaurants: Restaurant[]
}

export function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <div className={styles.list}>
      {restaurants.map((restaurant) => (
        <RestaurantListItem key={restaurant.objectId} restaurant={restaurant} />
      ))}
    </div>
  )
}
