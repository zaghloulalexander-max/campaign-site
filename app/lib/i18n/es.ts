// ============================================================================
// SPANISH DICTIONARY
// ============================================================================
// TODO: Professional translation needed. Do not use machine translation.
// ============================================================================

import type { Dictionary } from './en';

const es: Dictionary = {
  hero: {
    office: 'para Comisionado\ndel Condado',
  },

  about: {
    photoAlt: 'Foto del Candidato',
    paragraphs: [
      '[Traducción pendiente]',
      '[Traducción pendiente]',
      '[Traducción pendiente]',
    ],
  },

  issues: {
    question: '¿Qué hace un comisionado del condado de Multnomah?',
    questionHref: '/issues/county-commissioner',
    answer: '[Traducción pendiente]',
    heading: 'Temas',
    leadIn: '[Traducción pendiente]',
    leadInBody: '[Traducción pendiente]',
    framework: [],
    items: [
      {
        title: 'Personas sin hogar y salud conductual',
        body: '[Traducción pendiente]',
        href: '/issues/homelessness',
      },
      {
        title: 'Vivienda y costo de vida',
        body: '[Traducción pendiente]',
        href: '/issues/housing',
      },
      {
        title: 'Seguridad pública',
        body: '[Traducción pendiente]',
        href: '/issues/public-safety',
      },
    ],
    keepReading: 'Seguir leyendo',
  },

  endorsements: [
    {
      id: 'endorser-1',
      name: 'Name One',
      title: 'Title / Organization',
      quote: '[Traducción pendiente]',
    },
    {
      id: 'endorser-2',
      name: 'Name Two',
      title: 'Title / Organization',
      quote: '[Traducción pendiente]',
    },
    {
      id: 'endorser-3',
      name: 'Name Three',
      title: 'Title / Organization',
      quote: '[Traducción pendiente]',
    },
  ],

  donate: {
    heading: 'Su contribución va directamente a llegar a los votantes en todo el condado.',
    button: 'Donar',
    disclaimer: 'Las contribuciones no son deducibles de impuestos. Se aplican las leyes de financiamiento de campañas de Oregon.',
  },

  signup: {
    heading: '[Traducción pendiente]',
    headingBody: '[Traducción pendiente]',
    button: 'Recordarme',
    title: 'Mantenerse Informado',
    emailPlaceholder: 'Correo electrónico',
    zipPlaceholder: 'Código postal',
    submit: 'Unirse',
    thankYou: 'Gracias',
    thankYouMessage: 'Nos pondremos en contacto cuando sea importante.',
    volunteerLink: '¿Quiere hacer más? Sea voluntario',
    closeLabel: 'Cerrar',
    formLabel: 'Registro de correo electrónico',
    errors: {
      invalidEmail: 'Correo electrónico inválido',
      invalidZip: 'Código postal inválido',
    },
  },

  volunteerModal: {
    title: 'Voluntario',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    zip: 'Código postal',
    submit: 'Enviar',
    thankYou: 'Gracias',
    thankYouMessage: 'Nos pondremos en contacto pronto.',
    closeLabel: 'Cerrar',
    formLabel: 'Registro de voluntarios',
    errors: {
      required: 'Obligatorio',
      invalidEmail: 'Correo electrónico inválido',
      invalidZip: 'Código postal inválido',
    },
  },

  cookie: {
    message: 'Este sitio utiliza cookies para funcionalidad básica.',
    privacyLink: 'Política de Privacidad',
    dismissLabel: 'Cerrar aviso de cookies',
    regionLabel: 'Aviso de cookies',
  },

  header: {
    homeLabel: 'inicio',
    district: 'para el Distrito 2',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
  },

  footer: {
    issuesLabel: 'Temas',
    involvedLabel: 'Participe',
    volunteerLink: 'Voluntario',
    internshipsLink: 'Pasantías',
    donateLink: 'Donar',
    privacyLink: 'Política de Privacidad',
    contactLink: 'Contacto',
  },

  notFound: {
    code: '404',
    title: 'Página no encontrada',
    message: 'La página que busca no existe.',
    backHome: 'Volver al inicio',
  },
} satisfies Dictionary;

export default es;