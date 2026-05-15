import { api } from "@/lib/api";

export interface Horario {
  id: number;
  canchaId: number;
  diaSemana: string;
  horaInicio: string;
  horaFin: string;
  disponible: boolean;
}

export type CreateHorarioDto = Omit<Horario, "id">;
export type UpdateHorarioDto = Partial<CreateHorarioDto>;

export const horariosService = {
  findAll: () => api.get<Horario[]>("/horario"),
  findOne: (id: number) => api.get<Horario>(`/horario/${id}`),
  findByCancha: (canchaId: number) => api.get<Horario[]>(`/horario?canchaId=${canchaId}`),
  create: (data: CreateHorarioDto) => api.post<Horario>("/horario", data),
  update: (id: number, data: UpdateHorarioDto) => api.put<Horario>(`/horario/${id}`, data),
  remove: (id: number) => api.delete<void>(`/horario/${id}`),
};