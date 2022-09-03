enum Category {
  Espresso,
  Coffee,
  Milk,
  Water,
  Iced,
  Soda,
  Food,
  Snack,
  Dessert,
  Promo,
  Extra
}

type Item = {
  title: string,
  category: number,
  price: number[],
  size?: string[],
  flavors?: string[],
  color?: string,
}

export const syrups = [
  'irlandesa',
  'caramelo',
  'almendras',
  'rompope'
]

const frutal = [
  'frutos rojos',
  'mora azul',
  'manzana verde'
]

const powder = [
  'capuccino',
  'chai',
  'matcha',
  'fresas',
  'chocolate',
  'galleta'
]

const items: Item[] = [
  {
    title: 'del día',
    category: Category.Espresso,
    price: [18]
  },
  {
    title: 'espresso',
    category: Category.Espresso,
    price: [28]
  },
  {
    title: 'americano',
    category: Category.Espresso,
    price: [32]
  },
  {
    title: 'cappuccino',
    category: Category.Coffee,
    price: [40, 46],
    flavors: syrups
  },
  {
    title: 'latte',
    category: Category.Coffee,
    price: [42, 48],
    flavors: syrups
  },
  {
    title: 'moka',
    category: Category.Coffee,
    price: [44, 50]
  },
  {
    title: 'chai',
    category: Category.Milk,
    price: [48, 54],
    flavors: ['chai', 'matcha', 'horchata']
  },
  {
    title: 'chocolate',
    category: Category.Milk,
    price: [38, 44]
  },
  {
    title: 'té',
    category: Category.Water,
    price: [25],
    flavors: ['jamaica', 'menta', 'manzana', 'anis', 'limón', 'manzanilla']
  },
  {
    title: 'tisana',
    category: Category.Water,
    price: [40, 46],
    flavors: ['moras', 'frutos rojos', 'verde']
  },
  {
    title: 'frappé',
    category: Category.Iced,
    price: [58],
    flavors: powder
  },
  {
    title: 'soda italiana',
    category: Category.Iced,
    price: [40],
    flavors: frutal
  },
  {
    title: 'pizza',
    category: Category.Food,
    price: [22, 120],
    flavors: ['pepperoni', 'hawaiiana', 'salami']
  },
  {
    title: 'sándwich',
    category: Category.Food,
    price: [32],
    flavors: ['jamón', 'atún']
  },
  {
    title: 'noodles',
    category: Category.Food,
    price: [25]
  },
  {
    title: 'crepas',
    category: Category.Dessert,
    price: [48],
    flavors: ['dulce', 'salada']
  },
  {
    title: 'churro',
    category: Category.Dessert,
    price: [12, 22]
  },
  {
    title: 'fresas con crema',
    category: Category.Dessert,
    price: [40]
  },
  {
    title: 'panque',
    category: Category.Dessert,
    price: [28, 34],
  },
  {
    title: 'pan',
    category: Category.Dessert,
    price: [18, 35]
  },
  {
    title: 'extra',
    category: Category.Extra,
    price: [8, 12, 16, 20],
  },
  {
    title: 'cubrebocas',
    category: Category.Extra,
    price: [20, 120]
  },
  {
    title: 'refresco',
    category: Category.Soda,
    price: [22],
    flavors: ['coca-cola', 'sabor', 'jugo']
  },
  {
    title: 'agua',
    category: Category.Soda,
    price: [18]
  },
  // {
  //   title: 'extra',
  //   category: Category.Promo,
  //   price: [16, 12, 8],
  //   flavors: ['espresso', 'ingrediente', 'topping']
  // },
  {
    title: 'promociones',
    category: Category.Promo,
    price: [0],
    flavors: []
  }
]

const setColors = () => {
  items.map(item => {
    let object = {}
    if (item.price.length > 1) object = { ...object, size: ['chico', 'grande'] }

    switch (item.category) {
      case 0: // Espresso
        object = { color: 'bg-orange-400 hover:bg-orange-500' }
        break
      case 1: // Coffee
        object = { color: 'bg-amber-400 hover:bg-amber-500' }
        break
      case 2: // Milk,
        object = { color: 'bg-yellow-300 hover:bg-yellow-400' }
        break
      case 3: // Water
        object = { color: 'bg-rose-400 hover:bg-rose-500' }
        break
      case 4: // Iced
        object = { color: 'bg-cyan-400 hover:bg-cyan-500' }
        break
      case 5: // Soda
        object = { color: 'bg-violet-300 hover:bg-violet-400' }
        break
      case 6: // Food
        object = { color: 'bg-green-400 hover:bg-green-500' }
        break
      case 7: // Snack
        object = { color: 'bg-teal-300 hover:bg-teal-400' }
        break
      case 8: // Dessert
        object = { color: 'bg-lime-400 hover:bg-lime-500' }
        break
      case 9: // Promo
        object = { color: 'bg-red-400 hover:bg-red-500' }
        break
      case 10: // Extra
        object = { color: 'bg-slate-400 hover:bg-slate-500' }
        break
      default:
        object = { color: 'bg-gray-300 hover:bg-gray-400' }
        break
    }
    Object.assign(item, object)
  })
}

const loadPromos = () => { }

export const getItems = (): Item[] => {
  setColors()
  return items
}
