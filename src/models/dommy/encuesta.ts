const data = {
  id: 'encuesta-12345',
  titulo: 'Encuesta de Satisfacción del Usuario',
  descripcion:
    'Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad. Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.',
  creador: 'Equipo de Experiencia de Usuario',
  fecha_creacion: '2024-10-18',
  fecha_limite: '2024-11-01',
  image: '/usercard.png',
  preguntas: [
    {
      tipo: 'multiple_choice',
      pregunta: '¿Qué tan satisfecho estás con nuestro servicio?',
      opciones: [
        'Muy satisfecho',
        'Satisfecho',
        'Neutral',
        'Insatisfecho',
        'Muy insatisfecho'
      ]
    },
    {
      tipo: 'true_false',
      pregunta: '¿Recomendarías nuestro servicio a un amigo?',
      opciones: ['Verdadero', 'Falso']
    },
    {
      tipo: 'short_answer',
      pregunta: '¿Qué mejorarías en nuestro servicio?',
      respuesta: ''
    },
    {
      tipo: 'long_answer',
      pregunta: 'Por favor, proporciona comentarios adicionales:',
      respuesta: ''
    },
    {
      tipo: 'multiple_choice',
      pregunta: '¿Cuál es tu producto favorito?',
      opciones: ['Producto A', 'Producto B', 'Producto C', 'Producto D']
    },
    {
      tipo: 'short_answer',
      pregunta: '¿Cuál es tu nombre?',
      respuesta: ''
    },
    {
      tipo: 'multiple_choice',
      pregunta: '¿Cómo nos conociste?',
      opciones: ['Publicidad', 'Recomendación', 'Redes Sociales', 'Otro']
    }
  ],
  agradecimiento: '¡Gracias por tu tiempo y tus respuestas!'
};

export default data;
