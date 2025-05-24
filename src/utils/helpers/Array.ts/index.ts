/**
 * Atualiza um item no array baseado em uma condição.
 *
 * @param array - O array original.
 * @param findItem - Função para localizar o item a ser atualizado.
 * @param predicateUpdate - Função que define a atualização do item.
 * @returns Um novo array com o item atualizado.
 */
export const updateItemByFindArray = <T>(array: T[] | undefined, findItem: (item: T, itemIndex: number) => boolean, predicateUpdate: (item: T) => T): T[] => {
  if (!array) return []

  return array
    .map((item, itemIndex) => findItem(item, itemIndex)
      ? predicateUpdate(item)
      : item
    )
}

/**
 * Adiciona um item ao final de um array.
 *
 * @param array - O array original.
 * @param item - O item a ser adicionado.
 * @returns Um novo array com o item adicionado.
 */
export const appendArray = <T>(array: T[] | undefined, item: T): T[] =>
  !array
    ? []
    : [...array, item]

/**
 * Insere um item se não existir ou atualiza se já existir no array.
 *
 * @param array - O array original.
 * @param predicateSelection - Função para encontrar o item no array.
 * @param predicateUpdate - Função que define a atualização do item.
 * @param itemForAdd - O item a ser adicionado se não existir.
 * @returns O novo array com o item atualizado ou inserido.
 */

export const insertOrUpdateItemIfExistsArray = <T>(
  array: T[] | undefined,
  predicateSelection: (item: T) => boolean,
  predicateUpdate: (item: T) => T,
  itemForAdd: T
): T[] => {
  if (!array) return []

  const itemExists = array.some(predicateSelection)
  return itemExists
    ? updateItemByFindArray(array, predicateSelection, predicateUpdate)
    : appendArray(array, itemForAdd)
}