import { useMemo } from 'react'
import type { Restaurant } from '../types/restaurant'
import { RestaurantListItem } from '../components/RestaurantListItem'
import { sortByBestDeal } from '../utils/helpers'
import styles from './RestaurantList.module.css'

interface RestaurantListProps {
  restaurants: Restaurant[]
}

export function RestaurantList({ restaurants }: RestaurantListProps) {
  const sortedRestaurants = useMemo(() => sortByBestDeal(restaurants), [restaurants])

  return (
    <div className={styles.list}>
      {sortedRestaurants.map((restaurant) => (
        <RestaurantListItem key={restaurant.objectId} restaurant={restaurant} />
      ))}
    </div>
  )
}
