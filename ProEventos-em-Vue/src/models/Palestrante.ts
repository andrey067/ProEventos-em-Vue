import { Palestrante_Evento } from "./Palestrante_Evento"
import { RedeSocial } from "./RedeSocial"

export interface Palestrante {
    id: number
    nome: string
    miniCurriculo: string
    imagemURL: string
    telefone: string
    email: string
    redeSociais: Array<RedeSocial>
    palestrantesEventos: Array<Palestrante_Evento>
}