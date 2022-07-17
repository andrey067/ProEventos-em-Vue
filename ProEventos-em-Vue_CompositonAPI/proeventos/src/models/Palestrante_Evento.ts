import { Evento } from "./Evento"
import { Palestrante } from "./Palestrante"

export interface Palestrante_Evento {
    id: number
    palestranteId: number
    palestrante: Palestrante
    eventoId: number
    evento: Evento
}