import { z } from 'zod'
import { stringToBoolean } from './validation'

// AI: I generated this schema validation based on the types in /src/types/restaurant.ts
// (after I added comments identifying potential data inconsistencies)

const dealSchema = z.object({
  objectId: z.string(),
  discount: z.string().transform(Number), // this should be discountPercentage
  dineIn: stringToBoolean,
  lightning: stringToBoolean,
  open: z.string().optional(),
  close: z.string().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  qtyLeft: z.string().transform(Number), // this should be quantityLeft
})

const restaurantSchema = z.object({
  objectId: z.string(), // should be restaurantId or maybe just id? should be required?
  name: z.string(),
  address1: z.string(),
  suburb: z.string(),
  cuisines: z.array(z.string()),
  imageLink: z.string(),
  open: z.string(),
  close: z.string(),
  deals: z.array(dealSchema),
}) // TODO - re-shape this (transform) - see comments

export const restaurantsResponseSchema = z.object({
  restaurants: z.array(restaurantSchema),
})
