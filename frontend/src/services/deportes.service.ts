import { api } from "@/lib/api";

export interface Deporte {
  id: number;
  nombre: string;
  descripcion?: string;
}

export type CreateDeporteDto = Omit<Deporte, "id">;
export type UpdateDeporteDto = Partial<CreateDeporteDto>;

export const deportesService = {
  findAll: () => api.get<Deporte[]>("/deporte"),
  findOne: (id: number) => api.get<Deporte>(`/deporte/${id}`),
  create: (data: CreateDeporteDto) => api.post<Deporte>("/deporte", data),
  update: (id: number, data: UpdateDeporteDto) => api.put<Deporte>(`/deporte/${id}`, data),
  remove: (id: number) => api.delete<void>(`/deporte/${id}`),
};