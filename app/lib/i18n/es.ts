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

  issues: [
    {
      title: 'Personas sin Hogar y Servicios',
      body: '[Traducción pendiente]',
    },
    {
      title: 'Seguridad Pública',
      body: '[Traducción pendiente]',
    },
    {
      title: 'Vivienda y Asequibilidad',
      body: '[Traducción pendiente]',
    },
    {
      title: 'Responsabilidad Fiscal',
      body: '[Traducción pendiente]',
    },
    {
      title: 'Salud Mental',
      body: '[Traducción pendiente]',
    },
    {
      title: 'Operaciones del Condado',
      body: '[Traducción pendiente]',
    },
  ],

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

  volunteer: {
    heading: 'Si cree que el condado puede funcionar mejor, nos gustaría su ayuda.',
    button: 'Voluntario',
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