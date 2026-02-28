import { z } from 'zod'

// AI: I generated this schema validation based on the types in /src/types/restaurant.ts
// (after I added comments identifying potential data inconsistencies)

const dealSchema = z.object({
  objectId: z.string(),
  discount: z.string().transform(Number),
  dineIn: z.string().transform((v) => v === 'true'),
  lightning: z.string().transform((v) => v === 'true'),
  open: z.string().optional(),
  close: z.string().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  qtyLeft: z.string().transform(Number),
})

const restaurantSchema = z.object({
  objectId: z.string(),
  name: z.string(),
  address1: z.string(),
  suburb: z.string(),
  cuisines: z.array(z.string()),
  imageLink: z.string(),
  open: z.string(),
  close: z.string(),
  deals: z.array(dealSchema),
})

export const restaurantsResponseSchema = z.object({
  restaurants: z.array(restaurantSchema),
})
