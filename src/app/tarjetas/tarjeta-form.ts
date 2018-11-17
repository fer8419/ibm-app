import { Cliente } from '../clientes/cliente-form';

export class Tarjeta {
    codigo: number;
    numero: string;
    ccv: number;
    tipo: string;
    cliente: Cliente = new Cliente();    
}