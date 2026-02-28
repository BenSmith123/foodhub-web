import { useParams } from 'react-router-dom'
import type { Restaurant } from '../types/restaurant'
import { getDealTimeRange } from '../utils/helpers'
import { fallbackImageSrcUrl } from '../utils/config'
import styles from './RestaurantDetail.module.css'

// TODO - refactor to pass a single restaurant instead of all restaurants
interface RestaurantDetailProps {
  restaurants: Restaurant[]
}

export function RestaurantDetail({ restaurants }: RestaurantDetailProps) {
  const { id } = useParams()
  const restaurant = restaurants.find((r) => r.objectId === id)

  if (!restaurant) return <div>Restaurant not found</div> // TODO -replace with "sorry" page and go back button

  const { name, address1, suburb, cuisines, imageLink, open, close, deals } = restaurant
  const sortedDeals = [...deals].sort((a, b) => b.discount - a.discount) // TODO - memoize

  return (
    <div>
      <img
        src={imageLink}
        alt=""
        aria-hidden
        fetchPriority="high"
        className={styles.image}
        onError={(e) => {
          e.currentTarget.src = fallbackImageSrcUrl
        }}
      />
      <div className={styles.body}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.cuisines}>{cuisines.join(' • ')}</p>

        <hr />

        <div className={styles.section}>
          <p className={styles.sectionValue}>
            🕘 Hours: {open} - {close}
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionValue}>
            📍Location: {address1}, {suburb}
            {/* TODO - "x km away" */}
          </p>
        </div>

        <hr />

        {/* TODO - move this into seperate component (DealsList?) */}
        <div className={styles.deals}>
          {sortedDeals.map((deal) => (
            <div key={deal.objectId} className={styles.deal}>
              <div>
                <p className={styles.dealDiscount}>⚡️{deal.discount}% off</p>
                <p className={styles.dealMeta}>{getDealTimeRange(deal)}</p>
                <p className={styles.dealMeta}>{deal.qtyLeft} left</p>
              </div>
              <button className={styles.redeemButton}>Redeem</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
