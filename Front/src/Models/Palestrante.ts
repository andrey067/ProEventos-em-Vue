import { Evento } from "./Eventos/Evento";
import { RedeSocial } from "./redeSocial";

export interface Palestrante {
  id: number ;
  nome: string ;
  miniCurriculo: string ;
  imagemURL: string ;
  telefone: string ;
  email: string ;
  redesSociais: RedeSocial[];
  palestrantesEventos: Evento[];
}
