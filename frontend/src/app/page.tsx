"use client";

import { useState } from "react";

const deportesData = [
  { id: 0, nombre: "Todos", emoji: "🏟️" },
  { id: 1, nombre: "Fútbol", emoji: "⚽" },
  { id: 2, nombre: "Baloncesto", emoji: "🏀" },
  { id: 3, nombre: "Tenis", emoji: "🎾" },
  { id: 4, nombre: "Voleibol", emoji: "🏐" },
  { id: 5, nombre: "Natación", emoji: "🏊" },
  { id: 6, nombre: "Béisbol", emoji: "⚾" },
];

const coloresDeporte: Record<number, string> = {
  1: "#22c55e", 2: "#f97316", 3: "#eab308",
  4: "#a855f7", 5: "#0ea5e9", 6: "#ef4444",
};

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

type Horario = { id: number; dia: string; horaInicio: string; horaFin: string; disponible: boolean };
type Cancha = {
  id: number; nombre: string; descripcion: string; ubicacion: string;
  capacidad: number; deporteId: number; deporte: string;
  emoji: string; color: string; horarios: Horario[];
};
type HistorialReserva = { canchaId: number; horarioId: number };
type Vista = "canchas" | "detalle" | "reservar" | "confirmacion" | "cancelar" | "agregar";

const canchasIniciales: Cancha[] = [
  {
    id: 1, nombre: "Cancha Central Fútbol",
    descripcion: "Cancha de grama sintética de última generación, iluminación LED.",
    ubicacion: "Zona Norte — Bloque A", capacidad: 22,
    deporteId: 1, deporte: "Fútbol", emoji: "⚽", color: "#22c55e",
    horarios: [
      { id: 1, dia: "Lunes", horaInicio: "07:00", horaFin: "08:00", disponible: true },
      { id: 2, dia: "Lunes", horaInicio: "08:00", horaFin: "09:00", disponible: false },
      { id: 3, dia: "Martes", horaInicio: "07:00", horaFin: "08:00", disponible: true },
      { id: 4, dia: "Miércoles", horaInicio: "16:00", horaFin: "17:00", disponible: true },
    ],
  },
  {
    id: 2, nombre: "Cancha de Baloncesto Sur",
    descripcion: "Piso de madera pulida, tableros profesionales NBA standard.",
    ubicacion: "Zona Sur — Bloque C", capacidad: 10,
    deporteId: 2, deporte: "Baloncesto", emoji: "🏀", color: "#f97316",
    horarios: [
      { id: 5, dia: "Lunes", horaInicio: "10:00", horaFin: "11:00", disponible: true },
      { id: 6, dia: "Martes", horaInicio: "14:00", horaFin: "15:00", disponible: true },
      { id: 7, dia: "Jueves", horaInicio: "09:00", horaFin: "10:00", disponible: false },
    ],
  },
  {
    id: 3, nombre: "Cancha de Tenis Este",
    descripcion: "Superficie de arcilla, red reglamentaria, zona de descanso.",
    ubicacion: "Zona Este — Bloque B", capacidad: 4,
    deporteId: 3, deporte: "Tenis", emoji: "🎾", color: "#eab308",
    horarios: [
      { id: 8, dia: "Miércoles", horaInicio: "08:00", horaFin: "09:00", disponible: true },
      { id: 9, dia: "Viernes", horaInicio: "10:00", horaFin: "11:00", disponible: true },
    ],
  },
  {
    id: 4, nombre: "Cancha Voleibol Playa",
    descripcion: "Arena fina importada, zona techada, duchas disponibles.",
    ubicacion: "Zona Oeste — Área Recreativa", capacidad: 12,
    deporteId: 4, deporte: "Voleibol", emoji: "🏐", color: "#a855f7",
    horarios: [
      { id: 10, dia: "Sábado", horaInicio: "09:00", horaFin: "10:00", disponible: true },
      { id: 11, dia: "Domingo", horaInicio: "10:00", horaFin: "11:00", disponible: true },
    ],
  },
];

let nextId = 100;

export default function Home() {
  const [canchas, setCanchas] = useState<Cancha[]>(canchasIniciales);
  const [vista, setVista] = useState<Vista>("canchas");
  const [filtroDeporte, setFiltroDeporte] = useState(0);
  const [canchaSeleccionada, setCanchaSeleccionada] = useState<Cancha | null>(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState<number | null>(null);
  const [codigoConfirmacion, setCodigoConfirmacion] = useState("");
  const [codigoCancelar, setCodigoCancelar] = useState("");
  const [mensajeCancelar, setMensajeCancelar] = useState("");
  const [form, setForm] = useState({ nombres: "", apellidos: "", correo: "", telefono: "" });
  const [historial, setHistorial] = useState<Record<string, HistorialReserva>>({});

  // Formulario nueva cancha
  const [nuevaCancha, setNuevaCancha] = useState({
    nombre: "", descripcion: "", ubicacion: "", capacidad: "", deporteId: 1,
  });
  const [nuevosHorarios, setNuevosHorarios] = useState<{ dia: string; horaInicio: string; horaFin: string }[]>([
    { dia: "Lunes", horaInicio: "08:00", horaFin: "09:00" },
  ]);
  const [errorAgregar, setErrorAgregar] = useState("");

  // Stats dinámicos
  const canchasConHorarios = canchas.filter((c) => c.horarios.some((h) => h.disponible));
  const deportesActivos = new Set(canchasConHorarios.map((c) => c.deporteId)).size;

  const canchasFiltradas = (filtroDeporte === 0 ? canchas : canchas.filter((c) => c.deporteId === filtroDeporte))
    .map((c) => ({ ...c, estado: c.horarios.some((h) => h.disponible) }));

  function verDetalle(cancha: Cancha) {
    const actualizada = canchas.find((c) => c.id === cancha.id)!;
    setCanchaSeleccionada(actualizada);
    setHorarioSeleccionado(null);
    setVista("detalle");
  }

  function confirmarReserva() {
    const codigo = "RES-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setCodigoConfirmacion(codigo);
    setHistorial((prev) => ({ ...prev, [codigo]: { canchaId: canchaSeleccionada!.id, horarioId: horarioSeleccionado! } }));
    setCanchas((prev) =>
      prev.map((c) =>
        c.id === canchaSeleccionada?.id
          ? { ...c, horarios: c.horarios.map((h) => h.id === horarioSeleccionado ? { ...h, disponible: false } : h) }
          : c
      )
    );
    setVista("confirmacion");
    setForm({ nombres: "", apellidos: "", correo: "", telefono: "" });
  }

  function cancelarReserva() {
    const codigo = codigoCancelar.trim().toUpperCase();
    const reserva = historial[codigo];
    if (!reserva) { setMensajeCancelar("❌ Código no encontrado. Verifica e intenta de nuevo."); return; }
    setCanchas((prev) =>
      prev.map((c) =>
        c.id === reserva.canchaId
          ? { ...c, horarios: c.horarios.map((h) => h.id === reserva.horarioId ? { ...h, disponible: true } : h) }
          : c
      )
    );
    setHistorial((prev) => { const n = { ...prev }; delete n[codigo]; return n; });
    setMensajeCancelar(`✅ Reserva ${codigo} cancelada. El horario ya está disponible nuevamente.`);
    setCodigoCancelar("");
  }

  function agregarHorario() {
    setNuevosHorarios((prev) => [...prev, { dia: "Lunes", horaInicio: "08:00", horaFin: "09:00" }]);
  }

  function quitarHorario(i: number) {
    setNuevosHorarios((prev) => prev.filter((_, idx) => idx !== i));
  }

  function actualizarHorario(i: number, campo: string, valor: string) {
    setNuevosHorarios((prev) => prev.map((h, idx) => idx === i ? { ...h, [campo]: valor } : h));
  }

  function guardarCancha() {
    if (!nuevaCancha.nombre || !nuevaCancha.ubicacion || !nuevaCancha.capacidad) {
      setErrorAgregar("Completa todos los campos obligatorios."); return;
    }
    if (nuevosHorarios.length === 0) {
      setErrorAgregar("Agrega al menos un horario."); return;
    }
    const dep = deportesData.find((d) => d.id === nuevaCancha.deporteId)!;
    const cancha: Cancha = {
      id: ++nextId,
      nombre: nuevaCancha.nombre,
      descripcion: nuevaCancha.descripcion || "Sin descripción.",
      ubicacion: nuevaCancha.ubicacion,
      capacidad: parseInt(nuevaCancha.capacidad),
      deporteId: nuevaCancha.deporteId,
      deporte: dep.nombre,
      emoji: dep.emoji,
      color: coloresDeporte[dep.id] || "#6b6b80",
      horarios: nuevosHorarios.map((h, i) => ({ id: nextId * 10 + i, ...h, disponible: true })),
    };
    setCanchas((prev) => [...prev, cancha]);
    setNuevaCancha({ nombre: "", descripcion: "", ubicacion: "", capacidad: "", deporteId: 1 });
    setNuevosHorarios([{ dia: "Lunes", horaInicio: "08:00", horaFin: "09:00" }]);
    setErrorAgregar("");
    setVista("canchas");
  }

  function resetear() {
    setVista("canchas");
    setCanchaSeleccionada(null);
    setHorarioSeleccionado(null);
    setCodigoCancelar("");
    setCodigoConfirmacion("");
    setMensajeCancelar("");
    setErrorAgregar("");
  }

  const canchaActualizada = canchas.find((c) => c.id === canchaSeleccionada?.id) ?? null;
  const horarioElegido = canchaActualizada?.horarios.find((h) => h.id === horarioSeleccionado);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0a0a0f; --surface: #13131a; --surface2: #1c1c27;
          --border: rgba(255,255,255,0.07); --text: #f0f0f5;
          --muted: #6b6b80; --accent: #00e5a0; --danger: #ef4444;
        }
        body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; }
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(10,10,15,0.85); backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 0 2rem; height: 64px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.6rem;
          background: linear-gradient(135deg, #00e5a0, #0070f3);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; cursor: pointer;
        }
        .nav-links { display: flex; gap: 0.5rem; }
        .nav-btn { background: none; border: none; color: var(--muted); font-family: 'DM Sans', sans-serif; font-size: 0.9rem; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; }
        .nav-btn:hover { color: var(--text); background: var(--surface2); }
        .nav-cta { background: var(--accent); color: #000; border: none; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 0.85rem; padding: 0.5rem 1.2rem; border-radius: 8px; cursor: pointer; }
        .hero { padding: 140px 2rem 80px; text-align: center; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 800px; height: 500px; background: radial-gradient(ellipse, rgba(0,229,160,0.08) 0%, transparent 70%); pointer-events: none; }
        .hero-tag { display: inline-block; border: 1px solid rgba(0,229,160,0.3); color: var(--accent); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.35rem 1rem; border-radius: 100px; margin-bottom: 1.5rem; background: rgba(0,229,160,0.05); }
        .hero h1 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(3.5rem, 10vw, 7rem); line-height: 0.95; margin-bottom: 1.5rem; }
        .hero h1 span { color: var(--accent); }
        .hero p { color: var(--muted); font-size: 1.1rem; max-width: 480px; margin: 0 auto 2.5rem; line-height: 1.7; }
        .hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .btn-primary { background: var(--accent); color: #000; border: none; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 0.95rem; padding: 0.85rem 2rem; border-radius: 10px; cursor: pointer; transition: all 0.2s; }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }
        .btn-ghost { background: none; color: var(--text); border: 1px solid var(--border); font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.95rem; padding: 0.85rem 2rem; border-radius: 10px; cursor: pointer; }
        .btn-ghost:hover { background: var(--surface); }
        .btn-sm { background: var(--surface2); color: var(--text); border: 1px solid var(--border); font-family: 'DM Sans', sans-serif; font-size: 0.8rem; padding: 0.4rem 0.9rem; border-radius: 8px; cursor: pointer; }
        .btn-sm:hover { border-color: var(--accent); color: var(--accent); }
        .btn-danger-sm { background: rgba(239,68,68,0.1); color: var(--danger); border: 1px solid rgba(239,68,68,0.2); font-family: 'DM Sans', sans-serif; font-size: 0.8rem; padding: 0.4rem 0.9rem; border-radius: 8px; cursor: pointer; }
        .stats { display: flex; justify-content: center; flex-wrap: wrap; padding: 0 2rem 5rem; }
        .stat { text-align: center; padding: 1.5rem 3rem; border-right: 1px solid var(--border); }
        .stat:last-child { border-right: none; }
        .stat-num { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; color: var(--accent); }
        .stat-label { color: var(--muted); font-size: 0.85rem; }
        .section { padding: 0 2rem 6rem; max-width: 1200px; margin: 0 auto; }
        .section-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; }
        .section-title { font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; }
        .filtros { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .filtro-btn { background: var(--surface); border: 1px solid var(--border); color: var(--muted); font-family: 'DM Sans', sans-serif; font-size: 0.85rem; padding: 0.5rem 1.1rem; border-radius: 100px; cursor: pointer; transition: all 0.2s; }
        .filtro-btn.active { background: var(--accent); color: #000; border-color: var(--accent); font-weight: 700; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; }
        .card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; cursor: pointer; transition: all 0.25s; }
        .card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.12); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .card-top { padding: 1.8rem 1.8rem 1.2rem; position: relative; }
        .card-emoji { width: 52px; height: 52px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; margin-bottom: 1rem; }
        .card-badge { position: absolute; top: 1.5rem; right: 1.5rem; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.3rem 0.7rem; border-radius: 100px; }
        .badge-activa { background: rgba(0,229,160,0.12); color: var(--accent); }
        .badge-inactiva { background: rgba(239,68,68,0.12); color: var(--danger); }
        .card h3 { font-size: 1.15rem; font-weight: 600; margin-bottom: 0.4rem; }
        .card p { color: var(--muted); font-size: 0.875rem; line-height: 1.55; }
        .card-footer { padding: 1rem 1.8rem 1.5rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .card-meta { color: var(--muted); font-size: 0.8rem; line-height: 1.7; }
        .card-link { color: var(--accent); font-size: 0.85rem; font-weight: 600; }
        .detalle-container { max-width: 800px; margin: 0 auto; padding: 100px 2rem 4rem; }
        .back-btn { background: none; border: none; color: var(--muted); font-family: 'DM Sans', sans-serif; font-size: 0.9rem; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem; padding: 0; }
        .back-btn:hover { color: var(--text); }
        .detalle-header { display: flex; gap: 1.5rem; align-items: flex-start; margin-bottom: 2rem; flex-wrap: wrap; }
        .detalle-emoji { width: 72px; height: 72px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; flex-shrink: 0; }
        .detalle-info h1 { font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; margin-bottom: 0.5rem; }
        .detalle-info p { color: var(--muted); line-height: 1.6; }
        .detalle-meta { display: flex; gap: 1rem; margin-top: 0.8rem; flex-wrap: wrap; }
        .meta-chip { display: flex; align-items: center; gap: 0.4rem; background: var(--surface2); border-radius: 8px; padding: 0.4rem 0.8rem; font-size: 0.8rem; color: var(--muted); }
        .horarios-titulo { font-family: 'Bebas Neue', sans-serif; font-size: 1.6rem; margin-bottom: 1rem; }
        .horarios-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 0.75rem; margin-bottom: 2rem; }
        .horario-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; cursor: pointer; transition: all 0.2s; }
        .horario-card:hover:not(.ocupado) { border-color: var(--accent); }
        .horario-card.selected { border-color: var(--accent); background: rgba(0,229,160,0.06); }
        .horario-card.ocupado { opacity: 0.4; cursor: not-allowed; }
        .horario-dia { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); margin-bottom: 0.3rem; }
        .horario-hora { font-family: 'Bebas Neue', sans-serif; font-size: 1.3rem; }
        .horario-status { font-size: 0.72rem; margin-top: 0.4rem; }
        .disponible { color: var(--accent); }
        .ocupado-text { color: var(--danger); }
        .form-container { max-width: 540px; margin: 0 auto; padding: 100px 2rem 4rem; }
        .agregar-container { max-width: 620px; margin: 0 auto; padding: 100px 2rem 4rem; }
        .form-title { font-family: 'Bebas Neue', sans-serif; font-size: 2.2rem; margin-bottom: 0.5rem; }
        .form-sub { color: var(--muted); font-size: 0.9rem; margin-bottom: 2rem; line-height: 1.6; }
        .resumen-box { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1.2rem 1.5rem; margin-bottom: 2rem; }
        .resumen-row { display: flex; justify-content: space-between; padding: 0.4rem 0; font-size: 0.875rem; }
        .resumen-row span:first-child { color: var(--muted); }
        .form-group { margin-bottom: 1.2rem; }
        .form-label { display: block; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.5rem; }
        .form-input { width: 100%; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; color: var(--text); font-family: 'DM Sans', sans-serif; font-size: 0.95rem; padding: 0.8rem 1rem; outline: none; transition: border-color 0.2s; }
        .form-input:focus { border-color: var(--accent); }
        .form-select { width: 100%; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; color: var(--text); font-family: 'DM Sans', sans-serif; font-size: 0.95rem; padding: 0.8rem 1rem; outline: none; cursor: pointer; }
        .form-select:focus { border-color: var(--accent); }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 0.75rem; align-items: end; }
        .horario-row { background: var(--surface2); border: 1px solid var(--border); border-radius: 10px; padding: 1rem; margin-bottom: 0.75rem; }
        .seccion-titulo { font-family: 'Bebas Neue', sans-serif; font-size: 1.3rem; margin: 1.5rem 0 1rem; color: var(--accent); }
        .confirm-container { max-width: 480px; margin: 0 auto; padding: 100px 2rem 4rem; text-align: center; }
        .confirm-icon { width: 80px; height: 80px; border-radius: 50%; background: rgba(0,229,160,0.1); border: 2px solid var(--accent); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 2rem; }
        .confirm-title { font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; margin-bottom: 0.5rem; }
        .confirm-sub { color: var(--muted); line-height: 1.6; margin-bottom: 2rem; }
        .codigo-box { background: var(--surface); border: 1px solid rgba(0,229,160,0.3); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; }
        .codigo-label { color: var(--muted); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.5rem; }
        .codigo-valor { font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; color: var(--accent); letter-spacing: 0.08em; }
        .codigo-hint { color: var(--muted); font-size: 0.8rem; margin-top: 0.5rem; }
        .cancelar-container { max-width: 480px; margin: 0 auto; padding: 100px 2rem 4rem; }
        .mensaje-ok { background: rgba(0,229,160,0.08); border: 1px solid rgba(0,229,160,0.3); border-radius: 10px; padding: 1rem 1.2rem; color: var(--accent); font-size: 0.9rem; margin-bottom: 1.2rem; }
        .mensaje-error { background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.3); border-radius: 10px; padding: 1rem 1.2rem; color: var(--danger); font-size: 0.9rem; margin-bottom: 1.2rem; }
        footer { border-top: 1px solid var(--border); padding: 2rem; text-align: center; color: var(--muted); font-size: 0.85rem; }
        @media (max-width: 600px) {
          .hero h1 { font-size: 3rem; }
          .stat { padding: 1rem 1.5rem; }
          .form-row { grid-template-columns: 1fr; }
          .form-row-3 { grid-template-columns: 1fr 1fr; }
          .nav-links { display: none; }
        }
      `}</style>

      <nav className="nav">
        <div className="nav-logo" onClick={resetear}>SPORTFIELD</div>
        <div className="nav-links">
          <button className="nav-btn" onClick={resetear}>Canchas</button>
          <button className="nav-btn" onClick={() => setVista("agregar")}>+ Agregar cancha</button>
          <button className="nav-btn" onClick={() => setVista("cancelar")}>Cancelar Reserva</button>
        </div>
        <button className="nav-cta" onClick={() => { resetear(); setTimeout(() => document.getElementById("canchas-section")?.scrollIntoView({ behavior: "smooth" }), 100); }}>
          Reservar ahora
        </button>
      </nav>

      {/* CANCHAS */}
      {vista === "canchas" && (
        <>
          <section className="hero">
            <div className="hero-tag">⚡ Reservas en tiempo real</div>
            <h1>TU CANCHA,<br /><span>TU MOMENTO</span></h1>
            <p>Encuentra y reserva canchas deportivas disponibles en segundos. Sin filas, sin llamadas.</p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => document.getElementById("canchas-section")?.scrollIntoView({ behavior: "smooth" })}>
                Ver canchas disponibles →
              </button>
              <button className="btn-ghost" onClick={() => setVista("cancelar")}>Cancelar reserva</button>
            </div>
          </section>

          <div className="stats">
            <div className="stat">
              <div className="stat-num">{canchasConHorarios.length}</div>
              <div className="stat-label">Canchas activas</div>
            </div>
            <div className="stat">
              <div className="stat-num">{deportesActivos}</div>
              <div className="stat-label">Deportes disponibles</div>
            </div>
            <div className="stat">
              <div className="stat-num">24/7</div>
              <div className="stat-label">Reservas online</div>
            </div>
            <div className="stat">
              <div className="stat-num">100%</div>
              <div className="stat-label">Sin intermediarios</div>
            </div>
          </div>

          <section className="section" id="canchas-section">
            <div className="section-header">
              <h2 className="section-title">Canchas Disponibles</h2>
              <div className="filtros">
                {deportesData.map((d) => (
                  <button key={d.id} className={`filtro-btn${filtroDeporte === d.id ? " active" : ""}`} onClick={() => setFiltroDeporte(d.id)}>
                    {d.emoji} {d.nombre}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid">
              {canchasFiltradas.map((cancha) => (
                <div className="card" key={cancha.id} onClick={() => verDetalle(cancha)}>
                  <div className="card-top">
                    <div className="card-emoji" style={{ background: cancha.color + "18" }}>{cancha.emoji}</div>
                    <span className={`card-badge ${cancha.estado ? "badge-activa" : "badge-inactiva"}`}>
                      {cancha.estado ? "Disponible" : "Sin horarios"}
                    </span>
                    <h3>{cancha.nombre}</h3>
                    <p>{cancha.descripcion}</p>
                  </div>
                  <div className="card-footer">
                    <div className="card-meta">📍 {cancha.ubicacion}<br />👥 Cap. {cancha.capacidad} personas</div>
                    <span className="card-link">Ver horarios →</span>
                  </div>
                </div>
              ))}
            </div>
            {canchasFiltradas.length === 0 && (
              <div style={{ textAlign: "center", padding: "4rem", color: "var(--muted)" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
                <p>No hay canchas para ese deporte.</p>
              </div>
            )}
          </section>
        </>
      )}

      {/* DETALLE */}
      {vista === "detalle" && canchaActualizada && (
        <div className="detalle-container">
          <button className="back-btn" onClick={resetear}>← Volver a canchas</button>
          <div className="detalle-header">
            <div className="detalle-emoji" style={{ background: canchaActualizada.color + "18" }}>{canchaActualizada.emoji}</div>
            <div className="detalle-info">
              <h1>{canchaActualizada.nombre}</h1>
              <p>{canchaActualizada.descripcion}</p>
              <div className="detalle-meta">
                <span className="meta-chip">📍 {canchaActualizada.ubicacion}</span>
                <span className="meta-chip">👥 Cap. {canchaActualizada.capacidad}</span>
                <span className="meta-chip">🏅 {canchaActualizada.deporte}</span>
              </div>
            </div>
          </div>
          <h2 className="horarios-titulo">Horarios Disponibles</h2>
          <div className="horarios-grid">
            {canchaActualizada.horarios.map((h) => (
              <div key={h.id} className={`horario-card${!h.disponible ? " ocupado" : ""}${horarioSeleccionado === h.id ? " selected" : ""}`} onClick={() => h.disponible && setHorarioSeleccionado(h.id)}>
                <div className="horario-dia">{h.dia}</div>
                <div className="horario-hora">{h.horaInicio} — {h.horaFin}</div>
                <div className={`horario-status ${h.disponible ? "disponible" : "ocupado-text"}`}>
                  {h.disponible ? "✓ Disponible" : "✗ Ocupado"}
                </div>
              </div>
            ))}
          </div>
          <button
            className="btn-primary"
            style={{ width: "100%", opacity: horarioSeleccionado ? 1 : 0.4, cursor: horarioSeleccionado ? "pointer" : "not-allowed" }}
            onClick={() => horarioSeleccionado && setVista("reservar")}
          >
            {horarioSeleccionado ? "Continuar con la reserva →" : "Selecciona un horario para continuar"}
          </button>
        </div>
      )}

      {/* RESERVAR */}
      {vista === "reservar" && canchaActualizada && horarioElegido && (
        <div className="form-container">
          <button className="back-btn" onClick={() => setVista("detalle")}>← Volver</button>
          <h1 className="form-title">Completar Reserva</h1>
          <p className="form-sub">Ingresa tus datos para confirmar la reserva.</p>
          <div className="resumen-box">
            <div className="resumen-row"><span>Cancha</span><span>{canchaActualizada.nombre}</span></div>
            <div className="resumen-row"><span>Día</span><span>{horarioElegido.dia}</span></div>
            <div className="resumen-row"><span>Horario</span><span>{horarioElegido.horaInicio} — {horarioElegido.horaFin}</span></div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Nombres</label>
              <input className="form-input" placeholder="Juan" value={form.nombres} onChange={e => setForm({ ...form, nombres: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Apellidos</label>
              <input className="form-input" placeholder="Pérez" value={form.apellidos} onChange={e => setForm({ ...form, apellidos: e.target.value })} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Correo electrónico</label>
            <input className="form-input" type="email" placeholder="correo@ejemplo.com" value={form.correo} onChange={e => setForm({ ...form, correo: e.target.value })} />
          </div>
          <div className="form-group">
            <label className="form-label">Teléfono (opcional)</label>
            <input className="form-input" placeholder="+57 300 000 0000" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} />
          </div>
          <button
            className="btn-primary"
            style={{ width: "100%", marginTop: "0.5rem", opacity: (form.nombres && form.apellidos && form.correo) ? 1 : 0.4 }}
            onClick={() => (form.nombres && form.apellidos && form.correo) && confirmarReserva()}
          >
            Confirmar reserva →
          </button>
        </div>
      )}

      {/* CONFIRMACION */}
      {vista === "confirmacion" && (
        <div className="confirm-container">
          <div className="confirm-icon">✓</div>
          <h1 className="confirm-title">¡Reserva Confirmada!</h1>
          <p className="confirm-sub">Tu reserva fue realizada correctamente. Guarda tu código para cancelar si lo necesitas.</p>
          <div className="codigo-box">
            <div className="codigo-label">Tu código de reserva</div>
            <div className="codigo-valor">{codigoConfirmacion}</div>
            <div className="codigo-hint">Guárdalo — lo necesitarás para cancelar</div>
          </div>
          {canchaActualizada && horarioElegido && (
            <div className="resumen-box" style={{ marginBottom: "2rem", textAlign: "left" }}>
              <div className="resumen-row"><span>Cancha</span><span>{canchaActualizada.nombre}</span></div>
              <div className="resumen-row"><span>Día</span><span>{horarioElegido.dia}</span></div>
              <div className="resumen-row"><span>Horario</span><span>{horarioElegido.horaInicio} — {horarioElegido.horaFin}</span></div>
            </div>
          )}
          <button className="btn-primary" style={{ width: "100%" }} onClick={resetear}>Volver al inicio</button>
        </div>
      )}

      {/* CANCELAR */}
      {vista === "cancelar" && (
        <div className="cancelar-container">
          <button className="back-btn" onClick={resetear}>← Volver</button>
          <h1 className="form-title">Cancelar Reserva</h1>
          <p className="form-sub">Ingresa tu código de reserva para cancelarla y liberar el horario.</p>
          {mensajeCancelar && (
            <div className={mensajeCancelar.startsWith("✅") ? "mensaje-ok" : "mensaje-error"}>{mensajeCancelar}</div>
          )}
          <div className="form-group">
            <label className="form-label">Código de reserva</label>
            <input className="form-input" placeholder="Ej: RES-ABC123" value={codigoCancelar}
              onChange={e => { setCodigoCancelar(e.target.value.toUpperCase()); setMensajeCancelar(""); }}
              style={{ letterSpacing: "0.05em", fontSize: "1.1rem" }} />
          </div>
          <button className="btn-primary" style={{ width: "100%", background: "var(--danger)", marginBottom: "1rem", opacity: codigoCancelar ? 1 : 0.4 }}
            onClick={() => codigoCancelar && cancelarReserva()}>
            Cancelar reserva
          </button>
          <button className="btn-ghost" style={{ width: "100%" }} onClick={resetear}>Volver sin cancelar</button>
        </div>
      )}

      {/* AGREGAR CANCHA */}
      {vista === "agregar" && (
        <div className="agregar-container">
          <button className="back-btn" onClick={resetear}>← Volver</button>
          <h1 className="form-title">Agregar Nueva Cancha</h1>
          <p className="form-sub">Completa la información para registrar una nueva cancha en el sistema.</p>

          {errorAgregar && <div className="mensaje-error">{errorAgregar}</div>}

          <div className="form-group">
            <label className="form-label">Nombre de la cancha *</label>
            <input className="form-input" placeholder="Ej: Cancha Norte Fútbol" value={nuevaCancha.nombre}
              onChange={e => setNuevaCancha({ ...nuevaCancha, nombre: e.target.value })} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Deporte *</label>
              <select className="form-select" value={nuevaCancha.deporteId}
                onChange={e => setNuevaCancha({ ...nuevaCancha, deporteId: parseInt(e.target.value) })}>
                {deportesData.filter(d => d.id !== 0).map(d => (
                  <option key={d.id} value={d.id}>{d.emoji} {d.nombre}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Capacidad (personas) *</label>
              <input className="form-input" type="number" placeholder="Ej: 22" value={nuevaCancha.capacidad}
                onChange={e => setNuevaCancha({ ...nuevaCancha, capacidad: e.target.value })} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Ubicación *</label>
            <input className="form-input" placeholder="Ej: Zona Norte — Bloque A" value={nuevaCancha.ubicacion}
              onChange={e => setNuevaCancha({ ...nuevaCancha, ubicacion: e.target.value })} />
          </div>

          <div className="form-group">
            <label className="form-label">Descripción</label>
            <input className="form-input" placeholder="Ej: Grama sintética, iluminación LED..." value={nuevaCancha.descripcion}
              onChange={e => setNuevaCancha({ ...nuevaCancha, descripcion: e.target.value })} />
          </div>

          <div className="seccion-titulo">Horarios</div>

          {nuevosHorarios.map((h, i) => (
            <div className="horario-row" key={i}>
              <div className="form-row-3">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Día</label>
                  <select className="form-select" value={h.dia} onChange={e => actualizarHorario(i, "dia", e.target.value)}>
                    {diasSemana.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Hora inicio</label>
                  <input className="form-input" type="time" value={h.horaInicio} onChange={e => actualizarHorario(i, "horaInicio", e.target.value)} />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Hora fin</label>
                  <input className="form-input" type="time" value={h.horaFin} onChange={e => actualizarHorario(i, "horaFin", e.target.value)} />
                </div>
                {nuevosHorarios.length > 1 && (
                  <button className="btn-danger-sm" onClick={() => quitarHorario(i)} style={{ marginTop: "1.5rem" }}>✕</button>
                )}
              </div>
            </div>
          ))}

          <button className="btn-sm" style={{ marginBottom: "2rem" }} onClick={agregarHorario}>+ Agregar otro horario</button>

          <button className="btn-primary" style={{ width: "100%" }} onClick={guardarCancha}>
            Guardar cancha →
          </button>
        </div>
      )}

      <footer>
        <p>© 2025 SportField — Sistema de Gestión de Canchas Deportivas</p>
      </footer>
    </>
  );
}