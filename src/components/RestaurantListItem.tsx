import { Link } from 'react-router-dom'
import type { Restaurant } from '../types/restaurant'
import { getHighestDiscount } from '../utils/helpers'
import { fallbackImageSrcUrl } from '../utils/config'

interface RestaurantListItemProps {
  restaurant: Restaurant
}

export function RestaurantListItem({ restaurant }: RestaurantListItemProps) {
  const { objectId, name, address1, suburb, cuisines, imageLink, deals } = restaurant
  const highestDiscount = getHighestDiscount(deals) // TODO - memoize? is it worth it?

  return (
    <Link to={`/restaurants/${objectId}`}>
      {/* NOTE - aria-hidden as this as the image isnt relevent to the page info  */}
      <img
        src={imageLink}
        alt=""
        aria-hidden
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = fallbackImageSrcUrl
        }} // TODO - replace this fallback image with something more useful
      />
      <h2>{name}</h2>
      <p>
        {address1}, {suburb}
      </p>
      <p>{cuisines.join(', ')}</p>
      <p>{highestDiscount}% off</p>
    </Link>
  )
}
