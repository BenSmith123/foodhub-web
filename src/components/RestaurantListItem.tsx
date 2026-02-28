import { Link } from 'react-router-dom'
import type { Restaurant } from '../types/restaurant'
import { getBestDeal } from '../utils/helpers'
import { fallbackImageSrcUrl } from '../utils/config'
import { DealLabel } from './DealLabel'
import styles from './RestaurantListItem.module.css'

interface RestaurantListItemProps {
  restaurant: Restaurant
}

export function RestaurantListItem({ restaurant }: RestaurantListItemProps) {
  const { objectId, name, address1, suburb, imageLink, deals } = restaurant
  const bestDeal = getBestDeal(deals)

  return (
    <Link to={`/restaurants/${objectId}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        {/* NOTE - aria-hidden as this as the image isnt relevent to the page info  */}
        <img
          src={imageLink}
          alt=""
          aria-hidden
          loading="lazy"
          className={styles.image}
          onError={(e) => {
            e.currentTarget.src = fallbackImageSrcUrl // TODO - replace this fallback image with something more useful
          }}
        />
        <DealLabel deal={bestDeal} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.subtitle}>
          {address1}, {suburb}
        </p>
        <p className={styles.subtitle}>Dine in · Takeaway · Order online</p>
      </div>
    </Link>
  )
}
