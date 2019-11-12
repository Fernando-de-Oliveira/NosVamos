export interface Etapa {
  id_etapa?: number,
  nome_etapa: string,
  order_in: number
  id_end_origem: number,
  id_end_destino: number,
}
