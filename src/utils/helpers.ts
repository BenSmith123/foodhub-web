import type { Deal, Restaurant } from '../types/restaurant'

// NOTE - this is a good candidate for testing first, very logic heavy

export const getHighestDiscount = (deals: Deal[]): number =>
  Math.max(...deals.map((d) => d.discount))

export const getBestDeal = (deals: Deal[]): Deal => {
  let best = deals[0]
  for (const deal of deals) {
    if (deal.discount > best.discount) best = deal
  }
  return best
}

export const sortByBestDeal = (restaurants: Restaurant[]): Restaurant[] =>
  [...restaurants].sort((a, b) => getBestDeal(b.deals).discount - getBestDeal(a.deals).discount)

export const filterRestaurantsByQuery = (
  restaurants: Restaurant[],
  query: string,
): Restaurant[] => {
  if (!query) return restaurants
  if (query.length < 3) return restaurants

  const queryLower = query.toLowerCase()

  // TODO - potential room for improvement - are there fields someone may want to search by?
  return restaurants.filter(({ name, cuisines }) => {
    const matchesName = name.toLowerCase().includes(queryLower)
    const matchesCuisine = cuisines.some((cuisine) => cuisine.toLowerCase().includes(queryLower))
    return matchesName || matchesCuisine
  })
}

export const getDealTimeRange = ({ open, close, start, end }: Deal): string => {
  if (open && close) return `${open} - ${close}`
  if (start && end) return `${start} - ${end}`
  return 'Anytime today'
}
