// AI: I used the json example of the API response data to create these types

export interface Restaurant {
  objectId: string
  name: string
  address1: string
  suburb: string
  cuisines: string[]
  imageLink: string
  open: string // TODO - date format?
  close: string // TODO - date format?
  deals: Deal[]
}

export interface Deal {
  objectId: string
  discount: string // I assume this is always a percentage - might be worth renaming 'discountPercent'
  dineIn: string // this should be boolean
  lightning: string // same here ^
  open?: string
  close?: string
  start?: string
  end?: string
  qtyLeft: string // this should be a number
}
