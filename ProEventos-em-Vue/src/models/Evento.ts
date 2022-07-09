import { Lote } from "./Lote"
import { Palestrante_Evento } from "./Palestrante_Evento"
import { RedeSocial } from "./RedeSocial"

export interface Evento {
    id: number
    local: string
    dataEvento: Date
    tema: string
    qtdPessoas: number
    imagemURL: string
    telefone: string
    email: string
    lotes: Array<Lote>
    redeSociais: Array<RedeSocial>
    palestrantesEventos: Array<Palestrante_Evento>
}