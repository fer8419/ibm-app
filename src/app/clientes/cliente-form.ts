import { Tarjeta } from '../tarjetas/tarjeta-form';

export class Cliente {
    codigo: number;
    nombre: string;
    direccion: string;
    ciudad: string;
    telefono: number;
    tarjetas: Tarjeta[];
}