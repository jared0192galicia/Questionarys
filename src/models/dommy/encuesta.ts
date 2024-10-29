const data = {
  id: 'encuesta-12345',
  title: 'Encuesta de Satisfacción del Usuario',
  description:
    'Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad. Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.',
  author: 'Equipo de Experiencia de Usuario',
  created: '2024-10-18',
  startDate: '2024-10-18',
  limitDate: '2024-11-01',
  image: '/usercard.png',
  public: true,
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
      response: ['Neutral'],
      min: 1,
      max: 3,
      required: false
    },
    {
      type: 'true_false',
      question: '¿Recomendarías nuestro servicio a un amigo?',
      response: true,
      required: true
    },
    {
      type: 'short_answer',
      question: '¿Qué mejorarías en nuestro servicio?',
      response: 'Nada',
      required: true
    },
    {
      type: 'long_answer',
      question: 'Por favor, proporciona comentarios adicionales:',
      required: false
    },
    {
      type: 'multiple_choice',
      question: '¿Cuál es tu producto favorito?',
      options: ['Producto A', 'Producto B', 'Producto C', 'Producto D'],
      response: 'Producto A',
      required: false
    },
    {
      type: 'short_answer',
      question: '¿Cuál es tu nombre?',
      response: 'Jared',
      required: true
    },
    {
      type: 'multiple_choice',
      question: '¿Cómo nos conociste?',
      options: ['Publicidad', 'Recomendación', 'Redes Sociales', 'Otro'],
      response: 'Otro',
      required: false
    }
  ],
  agradecimiento: '¡Gracias por tu tiempo y tus responses!'
};

export const allData = [
  {
    id: 'encuesta-12341',
    title: 'Encuesta de Satisfacción del Usuario',
    description:
      'Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad. Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.',
    author: 'Equipo de Experiencia de Usuario',
    created: '2024-10-18',
    startDate: '2024-10-18',
    limitDate: '2024-11-01',
    image: '/usercard.png',
    public: false,
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
        response: ['Neutral'],
        min: 1,
        max: 3,
        required: false
      },
      {
        type: 'true_false',
        question: '¿Recomendarías nuestro servicio a un amigo?',
        response: true,
        required: true
      },
      {
        type: 'short_answer',
        question: '¿Qué mejorarías en nuestro servicio?',
        response: 'Nada',
        required: true
      },
      {
        type: 'long_answer',
        question: 'Por favor, proporciona comentarios adicionales:',
        required: false
      },
      {
        type: 'multiple_choice',
        question: '¿Cuál es tu producto favorito?',
        options: ['Producto A', 'Producto B', 'Producto C', 'Producto D'],
        response: 'Producto A',
        required: false
      },
      {
        type: 'short_answer',
        question: '¿Cuál es tu nombre?',
        response: 'Jared',
        required: true
      },
      {
        type: 'multiple_choice',
        question: '¿Cómo nos conociste?',
        options: ['Publicidad', 'Recomendación', 'Redes Sociales', 'Otro'],
        response: 'Otro',
        required: false
      }
    ],
    agradecimiento: '¡Gracias por tu tiempo y tus responses!'
  },
  {
    id: 'encuesta-12342',
    title: 'Encuesta de Satisfacción del Usuario',
    description:
      'Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad. Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.',
    author: 'Equipo de Experiencia de Usuario',
    created: '2024-10-18',
    startDate: '2024-10-18',
    limitDate: '2024-11-01',
    image: '/usercard.png',
    public: true,
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
        response: ['Neutral'],
        min: 1,
        max: 3,
        required: false
      },
      {
        type: 'true_false',
        question: '¿Recomendarías nuestro servicio a un amigo?',
        response: true,
        required: true
      },
      {
        type: 'short_answer',
        question: '¿Qué mejorarías en nuestro servicio?',
        response: 'Nada',
        required: true
      },
      {
        type: 'long_answer',
        question: 'Por favor, proporciona comentarios adicionales:',
        required: false
      },
      {
        type: 'multiple_choice',
        question: '¿Cuál es tu producto favorito?',
        options: ['Producto A', 'Producto B', 'Producto C', 'Producto D'],
        response: 'Producto A',
        required: false
      },
      {
        type: 'short_answer',
        question: '¿Cuál es tu nombre?',
        response: 'Jared',
        required: true
      },
      {
        type: 'multiple_choice',
        question: '¿Cómo nos conociste?',
        options: ['Publicidad', 'Recomendación', 'Redes Sociales', 'Otro'],
        response: 'Otro',
        required: false
      }
    ],
    agradecimiento: '¡Gracias por tu tiempo y tus responses!'
  },
  {
    id: 'encuesta-12343',
    title: 'Encuesta de Satisfacción del Usuario',
    description:
      'Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad. Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.Esta encuesta tiene como objetivo recopilar información sobre la experiencia del usuario en nuestra plataforma. Por favor, responde con sinceridad.',
    author: 'Equipo de Experiencia de Usuario',
    created: '2024-10-18',
    startDate: '2024-10-18',
    limitDate: '2024-11-01',
    image: '/usercard.png',
    public: true,
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
        response: ['Neutral'],
        min: 1,
        max: 3,
        required: false
      },
      {
        type: 'true_false',
        question: '¿Recomendarías nuestro servicio a un amigo?',
        response: true,
        required: true
      },
      {
        type: 'short_answer',
        question: '¿Qué mejorarías en nuestro servicio?',
        response: 'Nada',
        required: true
      },
      {
        type: 'long_answer',
        question: 'Por favor, proporciona comentarios adicionales:',
        required: false
      },
      {
        type: 'multiple_choice',
        question: '¿Cuál es tu producto favorito?',
        options: ['Producto A', 'Producto B', 'Producto C', 'Producto D'],
        response: 'Producto A',
        required: false
      },
      {
        type: 'short_answer',
        question: '¿Cuál es tu nombre?',
        response: 'Jared',
        required: true
      },
      {
        type: 'multiple_choice',
        question: '¿Cómo nos conociste?',
        options: ['Publicidad', 'Recomendación', 'Redes Sociales', 'Otro'],
        response: 'Otro',
        required: false
      }
    ],
    agradecimiento: '¡Gracias por tu tiempo y tus responses!'
  }
];

export default data;
