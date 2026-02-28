import { useMemo, useState } from 'react'
import type { Restaurant } from '../types/restaurant'
import { RestaurantListItem } from '../components/RestaurantListItem'
import { SearchBar } from '../components/SearchBar'
import { sortByBestDeal, filterRestaurantsByQuery } from '../utils/helpers'
import styles from './RestaurantList.module.css'

interface RestaurantListProps {
  restaurants: Restaurant[]
}

export function RestaurantList({ restaurants }: RestaurantListProps) {
  const [query, setQuery] = useState('')

  // note - heaps of logic here and is rendered a lot - def requires memoization
  const restaurantsSorted = useMemo(
    () => sortByBestDeal(filterRestaurantsByQuery(restaurants, query)),
    [restaurants, query],
  )

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} />
      <div className={styles.list}>
        {restaurantsSorted.map((restaurant) => (
          <RestaurantListItem key={restaurant.objectId} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}
