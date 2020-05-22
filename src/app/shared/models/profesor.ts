export interface RedesSociales {
    id: string
    nombre: string
}

export enum ConocimientosNivel {
    basico = 'Basico',
    intermedio = 'Intermedio',
    avanzado = 'Avanzado'
}

export interface Conocimientos {
    tema: string
    nivel: ConocimientosNivel
}

export interface Titulo {
    centro: string
    titulacion: string
    anio: string
}

export interface Experiencia {
    empresa: string
    funcion: string
    anios: string
}

export interface Profesor {
    nombre: string
    apellidos: string
    dni: string
    foto: string
    genero: string
    edad: number
    direccion: string
    codigo_postal: string
    poblacion: string
    pais: string
    email: string
    telefono: string
    idioma: string
    disponible: boolean
    redes_sociales: RedesSociales[]
    conocimientos: ConocimientosNivel[]
    titulo: Titulo[]
    experiencia: Experiencia[]
}
