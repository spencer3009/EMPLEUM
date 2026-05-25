/**
 * Hardcoded job listings for the scaffold.
 *
 * Salaries reflect the real Peruvian entry-level / mid-level market
 * (S/ 1,200 a S/ 2,500). Realistic ranges for practicantes, asistentes
 * y auxiliares — los puestos más comunes en el mercado laboral peruano.
 *
 * Reemplazar este archivo por `await db.query(...)` o un fetch a /api/jobs
 * cuando esté conectada la base de datos real.
 */

export type Modality = "Remoto" | "Híbrido" | "Presencial";
export type JobType = "Tiempo completo" | "Medio tiempo" | "Prácticas";

export interface FeaturedJob {
  slug: string;
  title: string;
  company: string;
  location: string;
  modality: Modality;
  jobType: JobType;
  salaryMin: number;
  salaryMax: number;
  postedDays: number;
  tags: readonly string[];
  verified: boolean;
  isFresh?: boolean;
  isFeatured?: boolean;
  isUrgent?: boolean;
  description: string;
  responsibilities?: readonly string[];
  requirements?: readonly string[];
  benefits?: readonly string[];
}

// ──────────────────────────────────────────────────────────────
// Plantillas de bullets para roles similares
// ──────────────────────────────────────────────────────────────

const TPL_PRAC_RRHH = {
  responsibilities: [
    "Apoyo en los procesos de reclutamiento y selección de personal.",
    "Filtro de CVs y coordinación de entrevistas con jefaturas.",
    "Mantenimiento de la base de datos de candidatos.",
    "Apoyo en onboarding y clima laboral.",
  ],
  requirements: [
    "Estudiante de últimos ciclos de Psicología, Administración o Recursos Humanos.",
    "Manejo intermedio de Office (Excel, Word).",
    "Buena comunicación oral y escrita.",
    "Disponibilidad inmediata.",
  ],
  benefits: [
    "Subvención puntual cada fin de mes.",
    "Capacitación constante en el área.",
    "EPS desde el primer mes.",
    "Posibilidad real de quedarse al terminar las prácticas.",
  ],
} as const;

const TPL_ASISTENTE_ADMIN = {
  responsibilities: [
    "Gestión de documentación física y digital del área.",
    "Atención telefónica y de correos electrónicos.",
    "Apoyo en facturación, cobranza y archivo.",
    "Coordinación de agendas y reuniones internas.",
  ],
  requirements: [
    "Egresado/a o bachiller en Administración, Contabilidad o afines.",
    "Manejo intermedio de Excel y Office.",
    "Buena ortografía y redacción.",
    "1 año de experiencia mínimo en posiciones similares.",
  ],
  benefits: [
    "Sueldo en planilla con todos los beneficios de ley.",
    "EPS y vida ley.",
    "Capacitaciones internas.",
    "Buen ambiente laboral.",
  ],
} as const;

const TPL_AUX_ALMACEN = {
  responsibilities: [
    "Recepción, verificación y almacenamiento de mercadería.",
    "Control de inventario físico y en sistema (Kardex / SAP).",
    "Preparación de pedidos para despacho.",
    "Mantener el orden y limpieza del almacén.",
  ],
  requirements: [
    "Secundaria completa, técnico en Logística deseable.",
    "Experiencia mínima de 6 meses en almacén o despacho.",
    "Conocimientos básicos de Excel.",
    "Disponibilidad para turnos rotativos.",
  ],
  benefits: [
    "Sueldo en planilla con beneficios de ley.",
    "Refrigerio diario subsidiado.",
    "Movilidad cubierta para turnos nocturnos.",
    "Línea de carrera dentro de la empresa.",
  ],
} as const;

const TPL_ATENCION_CLIENTE = {
  responsibilities: [
    "Atención presencial a usuarios y resolución de consultas.",
    "Registro de incidencias y reclamos en el sistema interno.",
    "Apoyo en procesos administrativos del área.",
    "Cumplir con los protocolos de calidad de atención.",
  ],
  requirements: [
    "Secundaria completa o estudios técnicos en curso.",
    "Experiencia mínima de 3 meses en atención al cliente.",
    "Vocación de servicio y buen trato.",
    "Disponibilidad para trabajar fines de semana en horario rotativo.",
  ],
  benefits: [
    "Sueldo en planilla con beneficios de ley.",
    "Bono por desempeño mensual.",
    "Descuento de colaborador en productos.",
    "Línea de carrera y promociones internas.",
  ],
} as const;

const TPL_CAJERO = {
  responsibilities: [
    "Atención al cliente en caja, manejo de efectivo y tarjetas.",
    "Cuadre diario de caja y arqueos.",
    "Manejo del sistema POS de la tienda.",
    "Cumplir con los protocolos de seguridad y atención.",
  ],
  requirements: [
    "Secundaria completa.",
    "Experiencia mínima de 6 meses como cajero/a en retail.",
    "Honestidad y responsabilidad comprobables.",
    "Disponibilidad para turnos rotativos.",
  ],
  benefits: [
    "Sueldo en planilla con beneficios de ley.",
    "Comisiones mensuales por desempeño.",
    "Descuento de colaborador.",
    "EPS y vida ley.",
  ],
} as const;

const TPL_PRAC_GENERICO = {
  responsibilities: [
    "Apoyo en las tareas operativas del área asignada.",
    "Elaboración de reportes y seguimiento de indicadores.",
    "Coordinación con otras áreas para flujos cruzados.",
    "Participación activa en proyectos del equipo.",
  ],
  requirements: [
    "Estudiante de últimos ciclos de la carrera relacionada.",
    "Manejo intermedio de Office.",
    "Capacidad de aprendizaje rápido y proactividad.",
    "Disponibilidad inmediata.",
  ],
  benefits: [
    "Subvención puntual.",
    "Capacitación constante.",
    "EPS desde el primer mes.",
    "Posibilidad real de contratación al finalizar.",
  ],
} as const;

// ──────────────────────────────────────────────────────────────
// 40 publicaciones reales del mercado peruano
// ──────────────────────────────────────────────────────────────

export const FEATURED_JOBS: readonly FeaturedJob[] = [
  // 1 — Destacado
  {
    slug: "asistente-de-gerencia-industrias-pacifico",
    title: "Asistente de Gerencia",
    company: "Industrias Pacífico",
    location: "San Isidro, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 2000,
    salaryMax: 2500,
    postedDays: 1,
    tags: ["Office", "Inglés intermedio", "Agenda ejecutiva"],
    verified: true,
    isFeatured: true,
    isFresh: true,
    description:
      "Industrias Pacífico, empresa líder en el sector industrial peruano, busca un asistente de gerencia para apoyar a la dirección general en gestión de agenda, coordinación interna y elaboración de reportes ejecutivos.",
    responsibilities: [
      "Gestionar la agenda y reuniones del gerente general.",
      "Elaborar reportes ejecutivos y presentaciones para directorio.",
      "Coordinar viajes y eventos corporativos.",
      "Atender llamadas y filtrar comunicaciones externas.",
    ],
    requirements: [
      "Egresado/a en Administración, Secretariado Ejecutivo o afines.",
      "Más de 2 años de experiencia como asistente o secretaria.",
      "Inglés intermedio (lectura y conversación básica).",
      "Manejo avanzado de Office (Excel, Word, PowerPoint).",
    ],
    benefits: [
      "Sueldo en planilla con todos los beneficios de ley.",
      "EPS familiar cubierto al 70%.",
      "Bonos anuales por desempeño.",
      "Oportunidad de crecimiento profesional.",
    ],
  },
  // 2 — Urge
  {
    slug: "practicante-rrhh-ciren-sac",
    title: "Practicante Profesional de Recursos Humanos",
    company: "Ciren S.A.C.",
    location: "Miraflores, Lima",
    modality: "Presencial",
    jobType: "Prácticas",
    salaryMin: 1200,
    salaryMax: 1500,
    postedDays: 1,
    tags: ["Reclutamiento", "Onboarding", "Office"],
    verified: true,
    isFresh: true,
    isUrgent: true,
    description:
      "Ciren S.A.C. busca un practicante profesional para sumarse al equipo de Recursos Humanos. Vas a apoyar en todo el ciclo de reclutamiento, desde la publicación de vacantes hasta el onboarding.",
    ...TPL_PRAC_RRHH,
  },
  // 3
  {
    slug: "practicante-psicologia-delfosti",
    title: "Practicante Pre Profesional de Psicología",
    company: "Delfosti",
    location: "Miraflores, Lima",
    modality: "Presencial",
    jobType: "Prácticas",
    salaryMin: 1200,
    salaryMax: 1300,
    postedDays: 2,
    tags: ["Evaluaciones", "Reportes", "Office"],
    verified: true,
    description:
      "Delfosti busca un practicante de Psicología para apoyar al área de Gestión Humana en evaluaciones, reportes y procesos de selección. Excelente oportunidad para iniciar tu carrera profesional.",
    ...TPL_PRAC_RRHH,
  },
  // 4
  {
    slug: "practicante-rrhh-talentonova-360",
    title: "PRACTICANTE DE RRHH",
    company: "TalentoNova 360 S.A.C.",
    location: "Villa El Salvador, Lima",
    modality: "Presencial",
    jobType: "Prácticas",
    salaryMin: 1200,
    salaryMax: 1400,
    postedDays: 3,
    tags: ["Reclutamiento", "Selección", "Headhunting"],
    verified: true,
    description:
      "Consultora especializada en headhunting busca practicante de RRHH para apoyar en la búsqueda de talento técnico y profesional. Ideal para alguien que quiera especializarse en selección.",
    ...TPL_PRAC_RRHH,
  },
  // 5
  {
    slug: "practicante-part-time-reclutamiento-grupo-gara",
    title: "Practicante Part Time de Reclutamiento y Selección de Personal",
    company: "Grupo Gara S.A.C",
    location: "Ciudad de Dios, San Juan de Miraflores, Lima",
    modality: "Presencial",
    jobType: "Medio tiempo",
    salaryMin: 1200,
    salaryMax: 1500,
    postedDays: 4,
    tags: ["Reclutamiento", "Atención al usuario"],
    verified: true,
    description:
      "Grupo Gara busca un practicante part-time para apoyar el proceso de reclutamiento masivo. Horario flexible compatible con estudios.",
    ...TPL_PRAC_RRHH,
  },
  // 6
  {
    slug: "asistente-administrativo-confidencial",
    title: "Asistente de Administración de Personal",
    company: "Confidencial",
    location: "Surquillo, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1500,
    salaryMax: 1700,
    postedDays: 2,
    tags: ["Planillas", "Office", "Atención al colaborador"],
    verified: true,
    isUrgent: true,
    description:
      "Importante empresa del sector retail busca asistente de administración de personal para apoyar en gestión de planillas, beneficios y atención a colaboradores.",
    ...TPL_ASISTENTE_ADMIN,
  },
  // 7
  {
    slug: "auxiliar-rrhh-recurso-humano-peru",
    title: "Auxiliar de RRHH",
    company: "Recurso Humano Perú",
    location: "Cercado de Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1300,
    salaryMax: 1600,
    postedDays: 5,
    tags: ["Planillas", "Asistencia", "Office"],
    verified: true,
    description:
      "Buscamos auxiliar de RRHH con experiencia mínima de 6 meses en planillas y control de asistencia. Ambiente estable y con línea de carrera clara.",
    ...TPL_ASISTENTE_ADMIN,
  },
  // 8
  {
    slug: "asistente-de-reclutamiento-talento-nova",
    title: "Asistente de Reclutamiento y Selección",
    company: "Talento Nova",
    location: "Lince, Lima",
    modality: "Híbrido",
    jobType: "Tiempo completo",
    salaryMin: 1600,
    salaryMax: 2000,
    postedDays: 3,
    tags: ["Reclutamiento masivo", "Indeed", "LinkedIn"],
    verified: true,
    description:
      "Consultora de selección busca asistente con experiencia comprobada en reclutamiento masivo y posiciones operativas. Manejo de portales (Indeed, LinkedIn, Bumeran).",
    responsibilities: [
      "Gestionar publicaciones de vacantes en portales de empleo.",
      "Realizar el filtro inicial de candidatos y entrevistas telefónicas.",
      "Coordinar entrevistas con clientes y hiring managers.",
      "Reportar indicadores semanales del pipeline de selección.",
    ],
    requirements: [
      "Egresado/a o bachiller en Psicología, Administración o RRHH.",
      "Mínimo 1 año de experiencia en reclutamiento masivo.",
      "Manejo avanzado de Excel y portales de empleo.",
      "Capacidad para trabajar bajo presión y por objetivos.",
    ],
    benefits: [
      "Sueldo en planilla con beneficios de ley.",
      "Bonos por meta de cierres mensuales.",
      "1 día de home office por semana.",
      "Capacitaciones en metodologías de selección.",
    ],
  },
  // 9
  {
    slug: "asistente-contable-grupo-aurora",
    title: "Asistente Contable",
    company: "Grupo Aurora",
    location: "Lince, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1800,
    salaryMax: 2200,
    postedDays: 7,
    tags: ["Concar", "SUNAT", "Excel avanzado"],
    verified: true,
    description:
      "Estudio contable busca asistente con experiencia en Concar para apoyar declaraciones mensuales, conciliaciones bancarias y libros electrónicos.",
    responsibilities: [
      "Registro contable de operaciones diarias en Concar.",
      "Conciliaciones bancarias y de cuentas por pagar/cobrar.",
      "Apoyo en declaraciones mensuales (PDT, PLE).",
      "Archivo y custodia de documentación contable.",
    ],
    requirements: [
      "Egresado/a o bachiller de Contabilidad.",
      "Mínimo 1 año de experiencia en estudio contable.",
      "Manejo de Concar (excluyente) y Excel avanzado.",
      "Conocimientos de tributación peruana actualizada.",
    ],
    benefits: [
      "Sueldo en planilla.",
      "EPS al 50%.",
      "Capacitación continua en SUNAT.",
      "Buen clima laboral y horario fijo.",
    ],
  },
  // 10
  {
    slug: "asistente-marketing-digital-pubblica",
    title: "Asistente de Marketing Digital",
    company: "Pubblica Studio",
    location: "Magdalena del Mar, Lima",
    modality: "Híbrido",
    jobType: "Tiempo completo",
    salaryMin: 1800,
    salaryMax: 2300,
    postedDays: 1,
    tags: ["Meta Ads", "Google Ads", "Analytics"],
    verified: true,
    isFresh: true,
    description:
      "Agencia digital busca asistente de marketing para gestionar campañas en Meta Ads y Google Ads para clientes del rubro retail y educativo.",
    responsibilities: [
      "Crear y optimizar campañas pagadas en Meta Ads y Google Ads.",
      "Hacer reportes semanales de desempeño por cliente.",
      "Coordinar con el equipo de contenido las piezas creativas.",
      "Investigar tendencias y proponer optimizaciones.",
    ],
    requirements: [
      "Egresado/a en Marketing, Publicidad o Comunicaciones.",
      "Mínimo 1 año gestionando campañas pagadas en redes.",
      "Certificación oficial en Meta Blueprint o Google Ads (deseable).",
      "Inglés básico para investigación.",
    ],
    benefits: [
      "Esquema híbrido (3 días remoto, 2 presenciales).",
      "Sueldo en planilla con beneficios de ley.",
      "Capacitaciones pagadas en marketing digital.",
      "Bonos trimestrales por resultados de clientes.",
    ],
  },
  // 11
  {
    slug: "asistente-recepcion-hotel-boutique",
    title: "Asistente de Recepción",
    company: "Hotel Boutique Lima",
    location: "Miraflores, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1500,
    salaryMax: 1800,
    postedDays: 4,
    tags: ["Inglés intermedio", "Atención al huésped", "Opera PMS"],
    verified: true,
    description:
      "Hotel boutique 4 estrellas en Miraflores busca asistente de recepción para check-in/check-out, manejo de reservas y atención a huéspedes internacionales.",
    ...TPL_ATENCION_CLIENTE,
  },
  // 12
  {
    slug: "asistente-logistica-distriperu",
    title: "Asistente de Logística",
    company: "DistriPerú S.A.",
    location: "Callao",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1700,
    salaryMax: 2000,
    postedDays: 6,
    tags: ["SAP", "Inventarios", "Despacho"],
    verified: true,
    description:
      "Empresa distribuidora del Callao busca asistente de logística para coordinar despachos, manejar inventario en SAP y supervisar al equipo de almacén.",
    ...TPL_AUX_ALMACEN,
  },
  // 13
  {
    slug: "asistente-comex-importadora-continental",
    title: "Asistente de Comercio Exterior",
    company: "Importadora Continental",
    location: "San Isidro, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 2000,
    salaryMax: 2400,
    postedDays: 2,
    tags: ["DUA", "Aduanas", "Inglés intermedio"],
    verified: true,
    description:
      "Importadora busca asistente de comercio exterior con conocimiento en documentación aduanera (DUA, BL, packing list) y trato con agentes de aduana.",
    responsibilities: [
      "Coordinar con agentes de aduana las nacionalizaciones.",
      "Revisar y validar documentación de importación (DUA, BL, facturas).",
      "Hacer seguimiento de cargas en tránsito.",
      "Reportar costos y tiempos de cada operación.",
    ],
    requirements: [
      "Egresado/a en Comercio Internacional o Administración.",
      "Mínimo 1 año en posiciones similares (excluyente).",
      "Conocimiento de Incoterms y regímenes aduaneros.",
      "Inglés intermedio (excluyente).",
    ],
    benefits: [
      "Sueldo en planilla y beneficios de ley.",
      "EPS para titular y carga.",
      "Capacitaciones en SUNAT-Aduanas.",
      "Crecimiento a Coordinador en 18-24 meses.",
    ],
  },
  // 14
  {
    slug: "asistente-de-compras-megaplaza",
    title: "Asistente de Compras",
    company: "MegaPlaza Centro Comercial",
    location: "Independencia, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1800,
    salaryMax: 2200,
    postedDays: 8,
    tags: ["Cotizaciones", "Negociación", "Excel"],
    verified: true,
    description:
      "Centro comercial busca asistente de compras para gestionar cotizaciones, negociar con proveedores y mantener el catálogo de productos.",
    ...TPL_ASISTENTE_ADMIN,
  },
  // 15
  {
    slug: "asistente-operaciones-fastdelivery",
    title: "Asistente de Operaciones",
    company: "FastDelivery PE",
    location: "Surquillo, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1800,
    salaryMax: 2200,
    postedDays: 1,
    tags: ["Last mile", "KPIs", "Excel"],
    verified: true,
    isFresh: true,
    description:
      "Empresa de delivery last-mile busca asistente para coordinar la operación diaria, monitorear KPIs de motorizados y reportar incidencias.",
    ...TPL_ASISTENTE_ADMIN,
  },
  // 16
  {
    slug: "asistente-ventas-tienda-cosmos",
    title: "Asistente de Ventas",
    company: "Tienda Cosmos",
    location: "Cercado de Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1500,
    salaryMax: 1900,
    postedDays: 3,
    tags: ["Venta directa", "Atención al cliente", "Comisiones"],
    verified: true,
    description:
      "Tienda de electrodomésticos en el centro de Lima busca asistente de ventas con experiencia en venta directa. Sueldo base + comisiones competitivas.",
    ...TPL_CAJERO,
  },
  // 17
  {
    slug: "asistente-psicologia-estimulacion-temprana",
    title: "Asistente de Psicología y Estimulación Temprana",
    company: "Centro Pediátrico Crecer",
    location: "San Borja, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1500,
    salaryMax: 1800,
    postedDays: 5,
    tags: ["Niños 0-5 años", "Reportes", "Trabajo en equipo"],
    verified: true,
    description:
      "Centro especializado en desarrollo infantil busca asistente para apoyar a psicólogas en sesiones de estimulación temprana con niños de 0 a 5 años.",
    responsibilities: [
      "Apoyar en sesiones individuales y grupales de estimulación.",
      "Llevar registros de evolución de cada niño.",
      "Coordinar con padres de familia los avances.",
      "Mantener materiales y consultorios en orden.",
    ],
    requirements: [
      "Bachiller en Psicología, Educación Inicial o Terapia Ocupacional.",
      "Experiencia mínima de 6 meses con niños pequeños.",
      "Buena paciencia y vocación de servicio.",
      "Disponibilidad de lunes a sábado por la mañana.",
    ],
    benefits: [
      "Sueldo en planilla con beneficios de ley.",
      "Capacitación constante en métodos de estimulación.",
      "Buen clima laboral en equipo multidisciplinario.",
      "Descuento en talleres para familiares.",
    ],
  },
  // 18
  {
    slug: "asistente-social-fundacion-manos-unidas",
    title: "Asistente Social",
    company: "Fundación Manos Unidas",
    location: "Comas, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1500,
    salaryMax: 1700,
    postedDays: 9,
    tags: ["Comunidad", "Trabajo social", "Visitas domiciliarias"],
    verified: true,
    description:
      "ONG enfocada en niñez vulnerable busca asistente social para visitas domiciliarias, evaluación de casos y coordinación con familias beneficiarias.",
    ...TPL_PRAC_GENERICO,
  },
  // 19
  {
    slug: "asistente-eventos-joinnus",
    title: "Asistente de Eventos",
    company: "Joinnus",
    location: "Remoto · Perú",
    modality: "Remoto",
    jobType: "Tiempo completo",
    salaryMin: 1800,
    salaryMax: 2300,
    postedDays: 2,
    tags: ["Producción de eventos", "Coordinación", "CRM"],
    verified: true,
    description:
      "Joinnus, la plataforma de eventos más grande del Perú, busca asistente para apoyar la producción de eventos masivos. 100% remoto desde cualquier ciudad del Perú.",
    responsibilities: [
      "Coordinar logística con organizadores de eventos.",
      "Gestionar la publicación de eventos en la plataforma.",
      "Hacer seguimiento a ventas y aforo de cada evento.",
      "Brindar soporte post-evento a organizadores.",
    ],
    requirements: [
      "Bachiller en Administración, Comunicaciones o afines.",
      "Mínimo 1 año coordinando eventos (presencial o digital).",
      "Manejo de CRMs y Excel intermedio.",
      "Conexión a internet estable (rol 100% remoto).",
    ],
    benefits: [
      "100% remoto con flexibilidad horaria.",
      "Sueldo en planilla con beneficios de ley.",
      "Acceso gratis a eventos premium de Joinnus.",
      "Capacitación con presupuesto anual.",
    ],
  },
  // 20
  {
    slug: "auxiliar-administrativo-universidad-norte",
    title: "Auxiliar Administrativo",
    company: "Universidad Privada del Norte",
    location: "Los Olivos, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1400,
    salaryMax: 1700,
    postedDays: 6,
    tags: ["Atención a alumnos", "Office", "Trámites"],
    verified: true,
    description:
      "Universidad privada busca auxiliar administrativo para atención a alumnos, trámites académicos y apoyo en procesos de matrícula.",
    ...TPL_ASISTENTE_ADMIN,
  },
  // 21
  {
    slug: "auxiliar-almacen-sodimac",
    title: "Auxiliar de Almacén",
    company: "Sodimac Perú",
    location: "Atocongo, San Juan de Miraflores",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1500,
    salaryMax: 1800,
    postedDays: 1,
    tags: ["Inventarios", "Despacho", "Trabajo en altura"],
    verified: true,
    isFresh: true,
    description:
      "Sodimac, líder en mejoramiento del hogar, busca auxiliares de almacén para sus tiendas en Lima. Capacitación pagada incluida.",
    ...TPL_AUX_ALMACEN,
  },
  // 22
  {
    slug: "auxiliar-contable-estudio-andina",
    title: "Auxiliar Contable",
    company: "Estudio Contable Andina",
    location: "Miraflores, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1300,
    salaryMax: 1600,
    postedDays: 11,
    tags: ["Concar", "PLE", "Excel"],
    verified: true,
    description:
      "Estudio contable busca auxiliar para apoyar en registros contables, conciliaciones y archivo. Buena oportunidad para iniciar carrera en contabilidad.",
    ...TPL_ASISTENTE_ADMIN,
  },
  // 23
  {
    slug: "auxiliar-despacho-wong",
    title: "Auxiliar de Despacho",
    company: "Wong Plaza",
    location: "La Molina, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1300,
    salaryMax: 1600,
    postedDays: 4,
    tags: ["Despacho a domicilio", "POS", "Atención"],
    verified: true,
    description:
      "Cadena de supermercados busca auxiliares de despacho para gestionar pedidos online y entregas a domicilio. Turnos rotativos.",
    ...TPL_AUX_ALMACEN,
  },
  // 24
  {
    slug: "auxiliar-produccion-industrias-andinas",
    title: "Auxiliar de Producción",
    company: "Industrias Andinas",
    location: "Lurín, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1400,
    salaryMax: 1700,
    postedDays: 7,
    tags: ["Línea de producción", "Calidad", "EPP"],
    verified: true,
    description:
      "Planta industrial en Lurín busca auxiliares de producción para línea de envasado. Capacitación pagada y transporte cubierto.",
    ...TPL_AUX_ALMACEN,
  },
  // 25
  {
    slug: "auxiliar-caja-bcp",
    title: "Auxiliar de Caja",
    company: "Banco de Crédito BCP",
    location: "Múltiples sedes · Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1500,
    salaryMax: 1800,
    postedDays: 2,
    tags: ["Atención al cliente", "Manejo de efectivo", "Banca"],
    verified: true,
    description:
      "BCP, el banco más grande del Perú, abre vacantes para auxiliares de caja en distintas sedes de Lima. Línea de carrera definida.",
    ...TPL_CAJERO,
  },
  // 26
  {
    slug: "atencion-usuario-multiservicios",
    title: "Atención al Usuario - Presencial Full Time Lince/SJM/Los Olivos",
    company: "Multiservicios Perú",
    location: "Lince, SJM, Los Olivos · Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1500,
    salaryMax: 1800,
    postedDays: 1,
    tags: ["Atención al cliente", "Sistema interno", "Reclamos"],
    verified: true,
    isFresh: true,
    isUrgent: true,
    description:
      "Empresa de servicios busca representantes de atención al usuario para sus 3 sedes en Lima Norte y Sur. Horario full time, sueldo fijo + bonos.",
    ...TPL_ATENCION_CLIENTE,
  },
  // 27
  {
    slug: "asesor-telefonico-bilingue-konecta",
    title: "Asesor Telefónico Bilingüe (Español-Inglés)",
    company: "Konecta Perú",
    location: "San Isidro, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1800,
    salaryMax: 2500,
    postedDays: 3,
    tags: ["Inglés avanzado", "Call center", "Soporte"],
    verified: true,
    description:
      "Konecta Perú busca asesores bilingües (español-inglés) para atención al cliente de empresas extranjeras. Sueldo top del mercado de call centers.",
    responsibilities: [
      "Atender llamadas entrantes en inglés y español.",
      "Resolver consultas y reclamos siguiendo protocolos.",
      "Registrar tickets en el sistema CRM.",
      "Cumplir métricas de calidad y tiempo de atención.",
    ],
    requirements: [
      "Inglés avanzado (B2-C1) — excluyente.",
      "Secundaria completa.",
      "Experiencia en call center deseable, no excluyente.",
      "Disponibilidad para turnos diurnos o nocturnos.",
    ],
    benefits: [
      "Sueldo en planilla con todos los beneficios de ley.",
      "Bono por desempeño mensual hasta S/ 500.",
      "Capacitación inicial pagada (15 días).",
      "Línea de carrera a Team Leader en 12-18 meses.",
    ],
  },
  // 28
  {
    slug: "atencion-cliente-saga-falabella",
    title: "Atención al Cliente Presencial",
    company: "Saga Falabella",
    location: "Real Plaza Salaverry, Jesús María",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1400,
    salaryMax: 1700,
    postedDays: 5,
    tags: ["Retail", "Atención al cliente", "POS"],
    verified: true,
    description:
      "Saga Falabella busca asesores de atención al cliente para tienda en Real Plaza Salaverry. Capacitación pagada y descuento de colaborador.",
    ...TPL_ATENCION_CLIENTE,
  },
  // 29
  {
    slug: "asesor-de-servicios-movistar",
    title: "Asesor de Servicios",
    company: "Movistar Perú",
    location: "Múltiples sedes · Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1500,
    salaryMax: 1900,
    postedDays: 2,
    tags: ["Telecomunicaciones", "Ventas cruzadas", "CRM"],
    verified: true,
    description:
      "Movistar busca asesores de servicios para sus tiendas oficiales. Sueldo fijo + comisiones por ventas adicionales. Capacitación de 2 semanas pagada.",
    ...TPL_ATENCION_CLIENTE,
  },
  // 30
  {
    slug: "cajero-tottus-plaza-norte",
    title: "Cajero/a",
    company: "Tottus Hipermercados",
    location: "Plaza Norte, Independencia",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1300,
    salaryMax: 1550,
    postedDays: 1,
    tags: ["Caja", "Atención al cliente", "Retail"],
    verified: true,
    isFresh: true,
    description:
      "Tottus, hipermercados del grupo Falabella, busca cajeros/as para su tienda en Plaza Norte. Horarios rotativos, capacitación pagada.",
    ...TPL_CAJERO,
  },
  // 31
  {
    slug: "community-manager-jr-brand-lab",
    title: "Community Manager Junior",
    company: "Brand Lab Perú",
    location: "San Isidro, Lima",
    modality: "Híbrido",
    jobType: "Tiempo completo",
    salaryMin: 2000,
    salaryMax: 2500,
    postedDays: 4,
    tags: ["Instagram", "TikTok", "Meta Business"],
    verified: true,
    description:
      "Agencia de marketing busca community manager junior para gestionar redes sociales de 3 marcas del rubro consumo masivo. Esquema híbrido 3+2.",
    responsibilities: [
      "Planificar y publicar contenido diario en Instagram, TikTok y Facebook.",
      "Responder DMs y comentarios en menos de 4 horas.",
      "Coordinar con diseño y producción audiovisual.",
      "Reportar métricas semanales al account manager.",
    ],
    requirements: [
      "Egresado/a en Comunicaciones, Marketing o Publicidad.",
      "Mínimo 6 meses gestionando redes de marcas.",
      "Excelente redacción en español (peruanismo natural).",
      "Manejo de Meta Business Suite, TikTok Studio y Canva.",
    ],
    benefits: [
      "Esquema híbrido (3 días remoto, 2 oficina).",
      "Sueldo en planilla con beneficios de ley.",
      "Capacitaciones pagadas (certificaciones Meta).",
      "Bonos trimestrales por desempeño del equipo.",
    ],
  },
  // 32
  {
    slug: "asistente-redes-sociales-rappi",
    title: "Asistente de Redes Sociales",
    company: "Rappi",
    location: "Surquillo, Lima",
    modality: "Híbrido",
    jobType: "Tiempo completo",
    salaryMin: 2200,
    salaryMax: 2500,
    postedDays: 6,
    tags: ["Redes Sociales", "Redacción", "Anuncios Meta"],
    verified: true,
    description:
      "Rappi Perú busca un asistente para gestionar la presencia de la marca en redes sociales (Instagram, TikTok, Facebook). Trabajo híbrido en Surquillo.",
    responsibilities: [
      "Planificar y publicar contenido diario en redes sociales.",
      "Responder mensajes y comentarios en menos de 4 horas.",
      "Coordinar con diseño la creación de piezas gráficas.",
      "Reportar métricas semanales de engagement y crecimiento.",
    ],
    requirements: [
      "Más de 1 año gestionando redes sociales de marcas.",
      "Redacción excelente en español (uso natural del peruanismo).",
      "Manejo de Meta Business, Hootsuite y Canva.",
      "Disponibilidad híbrida (3 días en oficina Surquillo).",
    ],
    benefits: [
      "Vales de comida mensuales Rappi.",
      "Días libres por cumpleaños.",
      "Plan de carrera a Coordinador en 18 meses.",
      "Equipo joven y energético.",
    ],
  },
  // 33
  {
    slug: "practicante-marketing-yape",
    title: "Practicante de Marketing",
    company: "Yape",
    location: "San Isidro, Lima",
    modality: "Híbrido",
    jobType: "Prácticas",
    salaryMin: 1500,
    salaryMax: 1500,
    postedDays: 1,
    tags: ["Growth", "Análisis", "Excel"],
    verified: true,
    isFresh: true,
    description:
      "Yape, la billetera digital más usada del Perú, busca un practicante de marketing para apoyar al equipo de growth en análisis de campañas y experimentos.",
    ...TPL_PRAC_GENERICO,
  },
  // 34
  {
    slug: "practicante-contabilidad-estudio-vargas",
    title: "Practicante de Contabilidad",
    company: "Estudio Vargas Asociados",
    location: "La Victoria, Lima",
    modality: "Presencial",
    jobType: "Prácticas",
    salaryMin: 1200,
    salaryMax: 1400,
    postedDays: 8,
    tags: ["Concar", "Excel", "SUNAT"],
    verified: true,
    description:
      "Estudio contable mediano busca practicante de Contabilidad para apoyar en registros, declaraciones y atención a clientes. Mentoría directa del socio.",
    ...TPL_PRAC_GENERICO,
  },
  // 35
  {
    slug: "practicante-administracion-hyrium",
    title: "Practicante de Administración",
    company: "Hyrium SAC",
    location: "Surquillo, Lima",
    modality: "Presencial",
    jobType: "Prácticas",
    salaryMin: 1200,
    salaryMax: 1500,
    postedDays: 3,
    tags: ["Office", "Atención", "Reportes"],
    verified: true,
    description:
      "Empresa de servicios busca practicante de Administración para apoyo transversal: archivo, atención telefónica y reportes para gerencia.",
    ...TPL_PRAC_GENERICO,
  },
  // 36
  {
    slug: "practicante-comunicaciones-andina-visual",
    title: "Practicante de Comunicaciones",
    company: "Andina Visual",
    location: "San Borja, Lima",
    modality: "Presencial",
    jobType: "Prácticas",
    salaryMin: 1200,
    salaryMax: 1300,
    postedDays: 5,
    tags: ["Redacción", "Audiovisual", "Eventos"],
    verified: true,
    description:
      "Productora audiovisual busca practicante de Comunicaciones para apoyar en producción de eventos, redacción de notas de prensa y manejo de redes.",
    ...TPL_PRAC_GENERICO,
  },
  // 37
  {
    slug: "practicante-logistica-andes",
    title: "Practicante de Logística",
    company: "Andes Distribución",
    location: "Callao",
    modality: "Presencial",
    jobType: "Prácticas",
    salaryMin: 1200,
    salaryMax: 1400,
    postedDays: 6,
    tags: ["SAP", "Inventarios", "Excel"],
    verified: true,
    description:
      "Distribuidora del Callao busca practicante de Logística para apoyar al equipo de operaciones en control de inventarios y coordinación con almacén.",
    ...TPL_PRAC_GENERICO,
  },
  // 38
  {
    slug: "practicante-diseno-grafico-brandit",
    title: "Practicante de Diseño Gráfico",
    company: "Brandit Studio",
    location: "Surco, Lima",
    modality: "Híbrido",
    jobType: "Prácticas",
    salaryMin: 1200,
    salaryMax: 1400,
    postedDays: 2,
    tags: ["Figma", "Illustrator", "Photoshop"],
    verified: true,
    description:
      "Estudio de diseño busca practicante de diseño gráfico para apoyar en piezas de redes sociales y branding para clientes de retail y educación.",
    ...TPL_PRAC_GENERICO,
  },
  // 39
  {
    slug: "auxiliar-limpieza-industrial-jansa",
    title: "Auxiliar de Limpieza Industrial",
    company: "JANSA S.A.C.",
    location: "Ate, Lima",
    modality: "Presencial",
    jobType: "Tiempo completo",
    salaryMin: 1400,
    salaryMax: 1650,
    postedDays: 4,
    tags: ["Limpieza industrial", "EPP", "Trabajo en equipo"],
    verified: true,
    description:
      "Empresa de servicios de limpieza industrial busca auxiliares para planta de cliente en Ate. Capacitación pagada, EPPs cubiertos.",
    ...TPL_AUX_ALMACEN,
  },
  // 40
  {
    slug: "practicante-analisis-datos-culqi",
    title: "Practicante de Análisis de Datos",
    company: "Culqi",
    location: "Miraflores, Lima",
    modality: "Presencial",
    jobType: "Prácticas",
    salaryMin: 1300,
    salaryMax: 1500,
    postedDays: 1,
    tags: ["SQL", "Excel", "Power BI"],
    verified: true,
    isFresh: true,
    description:
      "Culqi, la fintech peruana que procesa pagos digitales para miles de empresas, busca un practicante para sumarse al equipo de Data. Aprenderás análisis de datos en un contexto real con mentoría directa del Head of Data.",
    responsibilities: [
      "Construir reportes en Power BI para producto y operaciones.",
      "Hacer consultas SQL sobre la base de transacciones.",
      "Apoyar al equipo de data en limpieza y validación.",
      "Presentar hallazgos semanales al equipo.",
    ],
    requirements: [
      "Estudiante de últimos ciclos de Ingeniería, Estadística o afines.",
      "Conocimientos sólidos de SQL y Excel avanzado.",
      "Inglés básico (lectura técnica).",
      "Disponibilidad 30 horas semanales presencial en Miraflores.",
    ],
    benefits: [
      "Subvención por encima del promedio del mercado.",
      "Mentoría uno a uno con el Head of Data.",
      "Posibilidad real de quedarse al terminar prácticas.",
      "EPS desde el primer día.",
    ],
  },
];
