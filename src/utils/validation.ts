import { z } from 'zod'

export const stringToBoolean = z.string().transform((value) => value === 'true')
