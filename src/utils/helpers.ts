import type { Deal } from '../types/restaurant'

export const getHighestDiscount = (deals: Deal[]): number =>
  Math.max(...deals.map((d) => d.discount))
