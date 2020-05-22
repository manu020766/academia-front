import { Alumno } from './alumno'

export enum TiposCurso {
    inem = 'Inem',
    forem = 'Forem',
    propio = 'Propio',
    externo = 'Externo',
    empresa = 'Empresa'
}

export enum PlataformaCurso {
    online = 'Online',
    presencial = 'Presencial',
    semiPresencial = 'Semi-presencial',
    video = 'Vídeo'
}

export enum Nivel {
    basico = 'Básico',
    intermedio = 'Intermedio',
    avanzado = 'Avanzado'
}

export interface Gastos {
    nombre: number
    importe: number
}

export enum diasValidos {
    lunes = 'Lunes',
    martes = 'Martes',
    miercoles = 'Miercoles',
    jueves = 'Jueves',
    viernes = 'Viernes',
    sabado = 'Sábado',
    domingo ='Domingo'
}

export interface Horario {
    dia: diasValidos,
    hora_entrada: string,
    hora_salida: string,
}

export interface HorasImpartidas {
    fecha: Date
    horas: number
    profesorId: number
}

export interface Profesor {
    profesorId: number
}

export interface Curso {
    nombre: string
    tipo_curso: TiposCurso
    plataforma_curso: PlataformaCurso
    nivel: Nivel
    ingreso_por_alumno: number
    numero_minimo_alumnos: number
    fecha_comienzo: Date
    duracion_horas: number
    duracion_dias: number
    duracion_semanas: number
    curso_terminado: boolean
    gastos: Gastos[]
    horario: Horario[]
    horas_impartidas: HorasImpartidas[]
    profesores: Profesor[]
    alumnos: Alumno[]
}