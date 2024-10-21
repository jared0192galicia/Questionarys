const data = {
  id: 'encuesta-12345',
  titulo: 'Encuesta de Satisfacción del Usuario',
  descripcion:
    'Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad. Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.',
  creador: 'Equipo de Experiencia de Usuario',
  fecha_creacion: '2024-10-18',
  fecha_limite: '2024-11-01',
  image: '/usercard.png',
  questions: [
    {
      type: 'multiple_choice',
      question: '¿Qué tan satisfecho estás con nuestro servicio?',
      options: [
        'Muy satisfecho',
        'Satisfecho',
        'Neutral',
        'Insatisfecho',
        'Muy insatisfecho'
      ],
      max: 10,
      min: 1
    },
    {
      type: 'true_false',
      question: '¿Recomendarías nuestro servicio a un amigo?',
      response: true
    },
    {
      type: 'short_answer',
      question: '¿Qué mejorarías en nuestro servicio?',
      response: ''
    },
    {
      type: 'long_answer',
      question: 'Por favor, proporciona comentarios adicionales:',
      response: ''
    },
    {
      type: 'multiple_choice',
      question: '¿Cuál es tu producto favorito?',
      options: ['Producto A', 'Producto B', 'Producto C', 'Producto D']
    },
    {
      type: 'short_answer',
      question: '¿Cuál es tu nombre?',
      response: ''
    },
    {
      type: 'multiple_choice',
      question: '¿Cómo nos conociste?',
      options: ['Publicidad', 'Recomendación', 'Redes Sociales', 'Otro']
    }
  ],
  agradecimiento: '¡Gracias por tu tiempo y tus responses!'
};

export default data;
