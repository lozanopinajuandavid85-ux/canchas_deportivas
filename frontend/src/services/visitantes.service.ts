import { api } from "@/lib/api";

export interface Visitante {
  id: number;
  nombres: string;
  apellidos: string;
  correo: string;
  telefono?: string;
}

export type CreateVisitanteDto = Omit<Visitante, "id">;
export type UpdateVisitanteDto = Partial<CreateVisitanteDto>;

export const visitantesService = {
  findAll: () => api.get<Visitante[]>("/visitante"),
  findOne: (id: number) => api.get<Visitante>(`/visitante/${id}`),
  create: (data: CreateVisitanteDto) => api.post<Visitante>("/visitante", data),
  update: (id: number, data: UpdateVisitanteDto) => api.put<Visitante>(`/visitante/${id}`, data),
  remove: (id: number) => api.delete<void>(`/visitante/${id}`),
};