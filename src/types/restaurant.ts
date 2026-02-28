// AI: I used the json example of the API response data to create these types

export interface Restaurant {
  objectId: string
  name: string
  address1: string
  suburb: string
  cuisines: string[]
  imageLink: string
  open: string
  close: string
  deals: Deal[]
}

export interface Deal {
  objectId: string
  discount: number
  dineIn: boolean
  lightning: boolean
  open?: string
  close?: string
  start?: string
  end?: string
  qtyLeft: number
}
