export interface Item {
  title: string,
  category: number,
  color: string,
  price: number[],
  size?: string[],
  flavors?: string[],
}

export interface TicketItem {
  amount: number,
  title: string,
  flavor?: string,
  price: number,
}