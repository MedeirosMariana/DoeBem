/**
 * Tipo que representa uma função de atualização para um campo específico de um item identificado por GUID.
 *
 * @template TData Tipo do dado que será atualizado.
 * @param guid Identificador único do item.
 * @param key Chave do campo que será atualizado.
 * @returns Uma função que recebe o novo valor para o campo e atualiza o estado.
 */
export type IZustandStoreSetDataByKey<TData> = (guid: string, key: keyof TData) => (value: TData[keyof TData]) => void

/**
 * Tipo que representa uma função de atualização parcial do estado.
 *
 * @template TData Tipo do dado que será atualizado.
 * @param partial Objeto parcial com os campos a serem atualizados ou uma função que recebe o estado atual e retorna a atualização parcial.
 */
export type IZustandStoreSetData<TData> = (partial: Partial<TData> | ((state: TData) => Partial<TData>)) => void

/**
 * Tipo que representa uma função de ação para manipular um item no estado.
 *
 * @template TData Tipo do dado que será manipulado.
 * @param data Dados completos que serão utilizados pela ação.
 */
export type IZustandStoreActionType<TData> = (data: TData) => void
