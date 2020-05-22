import { Curso } from './Curso'

export interface Alumno {
    id: number
    nombre: string
    apellidos: string
    dni: string
    email: string
    telefono: string
    cp: string
    poblacion: string
    foto: string
    activo: boolean
    cursos?: Curso[]
}
