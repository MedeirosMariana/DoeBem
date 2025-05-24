import { v4 as uuidv4 } from 'uuid'

/**
 * Gera um UUID (Universally Unique Identifier) v4 em letras maiúsculas.
 *
 * @param define se os hífens devem ser removidos do UUID.
 * @returns UUID gerado, com ou sem hífens, dependendo do parâmetro.
 */
export const generateUUID = (removeHyphen: boolean = false) => uuidv4().toUpperCase().replace(removeHyphen ? /-/g : '', '')
