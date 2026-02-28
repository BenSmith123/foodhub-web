import type { Deal } from '../types/restaurant'
import { getDealTimeRange } from '../utils/helpers'
import styles from './DealLabel.module.css'

interface DealLabelProps {
  deal: Deal
}

export function DealLabel({ deal }: DealLabelProps) {
  return (
    <div className={styles.label}>
      <p>{deal.discount}% off</p>
      <p>{getDealTimeRange(deal)}</p>
    </div>
  )
}
