export const pageLimit = 5

export const filtersMap: { filterLabel: string; filter: { value: string; direction: 'ASC' | 'DESC' } }[] = [
  { filterLabel: 'По популярности', filter: { value: 'rating', direction: 'DESC' } },
  { filterLabel: 'По цене', filter: { value: 'price', direction: 'ASC' } },
]

export const filterByProperties: string[] = ['Неделя', 'Месяц', 'Выходной', 'Будний']
