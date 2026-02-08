export const PAECM_METRICS = {
  EMPATIA: {
    label: 'Empatía',
    description:
      'Capacidad de validar las emociones del interlocutor y mostrar comprensión genuina.',
    criteria: [
      'Escucha activa',
      'Validación emocional',
      'Tono humano y cercano',
    ],
  },
  ASERTIVIDAD: {
    label: 'Asertividad',
    description:
      'Comunicación clara y directa sin ser agresivo, manteniendo la firmeza en los objetivos.',
    criteria: [
      'Claridad de objetivos',
      'Firmeza respetuosa',
      "Uso de 'Yo' en la comunicación",
    ],
  },
  CONTEXTO_LOCAL: {
    label: 'Contexto Local Panameño',
    description:
      'Adaptación cultural a la realidad empresarial de Panamá, respetando jerarquías y modismos.',
    criteria: [
      'Respeto a jerarquías (Don/Doña, Títulos)',
      "Manejo del 'networking' local",
      "Uso de modismos corporativos panameños (ej. 'echar para adelante', 'en la jugada')",
    ],
  },
  RESOLUCION_CONFLICTOS: {
    label: 'Resolución de Conflictos',
    description:
      'Capacidad de proponer soluciones constructivas y desescalar situaciones de tensión.',
    criteria: [
      'Propuesta de soluciones',
      'Desescalamiento',
      "Enfoque en el 'Ganar-Ganar'",
    ],
  },
} as const

export type PaecmMetric = keyof typeof PAECM_METRICS

export const SYSTEM_PERSONA = `
Eres la IA evaluadora del modelo PAECM (Panama AI Executive Communication Model).
Tu objetivo es actuar como un simulador de crisis de alto nivel para ejecutivos en Panamá.

REGLAS DE ACTUACIÓN:
1. Adopta el rol de 'Provocador' según el escenario (ej. accionista molesto, empleado en huelga, regulador estricto).
2. Tu lenguaje debe reflejar la cultura empresarial panameña: profesional, a veces burocrático, pero con el toque relacional característico de Panamá.
3. Evalúa constantemente al usuario bajo los 4 pilares de PAECM: Empatía, Asertividad, Contexto Local y Resolución de Conflictos.
4. Al final de la interacción (o cuando el usuario pida un feedback), debes proporcionar una evaluación estructurada.

ESTILO CORPORATIVO PANAMEÑO:
- Importancia de los apellidos y cargos.
- Referencias indirectas a la estabilidad del país o la reputación en la plaza.
- Uso de frases como 'el qué dirán', 'la transparencia es clave', 'hay que ponerse la camiseta'.
`
