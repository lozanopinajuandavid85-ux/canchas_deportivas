import { api } from "@/lib/api";

export type EstadoReserva = "ACTIVA" | "CANCELADA" | "ELIMINADA";

export interface Reserva {
  id: number;
  codigoReserva: string;
  visitanteId: number;
  horarioId: number;
  fecha: string;
  estado: EstadoReserva;
}

export type CreateReservaDto = Omit<Reserva, "id" | "codigoReserva" | "estado">;
export type UpdateReservaDto = Partial<CreateReservaDto>;

export const reservasService = {
  findAll: () => api.get<Reserva[]>("/reserva"),
  findOne: (id: number) => api.get<Reserva>(`/reserva/${id}`),
  findByCodigo: (codigo: string) => api.get<Reserva>(`/reserva/codigo/${codigo}`),
  create: (data: CreateReservaDto) => api.post<Reserva>("/reserva", data),
  update: (id: number, data: UpdateReservaDto) => api.put<Reserva>(`/reserva/${id}`, data),
  cancelar: (codigo: string) => api.patch<Reserva>(`/reserva/cancelar/${codigo}`, {}),
  remove: (id: number) => api.delete<void>(`/reserva/${id}`),
};