import type { Deal } from '../types/restaurant'

export const getHighestDiscount = (deals: Deal[]): number =>
  Math.max(...deals.map((d) => d.discount))

export const getBestDeal = (deals: Deal[]): Deal => {
  let best = deals[0]
  for (const deal of deals) {
    if (deal.discount > best.discount) best = deal
  }
  return best
}

export const getDealTimeRange = ({ open, close, start, end }: Deal): string => {
  if (open && close) return `${open} - ${close}`
  if (start && end) return `${start} - ${end}`
  return 'Anytime today'
}
