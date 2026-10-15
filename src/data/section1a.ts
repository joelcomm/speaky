import { unit } from './build'

// Section 1 (A1) — units 1–6. Latin American Spanish: "ustedes" for plural you, no "vosotros".
export default [
  unit(1, {
    id: 'u01-greetings',
    title: 'Greetings',
    emoji: '👋',
    description: 'Say hello, goodbye, please and thank you.',
    lessons: [
      {
        title: 'Hello!',
        tip: `Spanish greetings change with the time of day.
- **buenos días**: morning (until about noon)
- **buenas tardes**: afternoon and early evening
- **buenas noches**: night, both "good evening" and "good night"
Questions and exclamations start with an upside-down mark: **¿…?** and **¡…!**`,
        items: [
          'hola | hello | hi',
          'adiós | goodbye | bye',
          'buenos días | good morning',
          'buenas tardes | good afternoon | good evening',
          'buenas noches | good night | good evening',
          'Hola, buenos días. | Hello, good morning. | Hi, good morning',
          'Adiós, buenas noches. | Goodbye, good night. | Bye, good night',
        ],
      },
      {
        title: 'Please & thank you',
        items: [
          'gracias | thank you | thanks',
          'por favor | please',
          'de nada | you are welcome | you\'re welcome',
          'sí | yes',
          'no | no',
          'muchas gracias | thank you very much | thanks a lot;many thanks',
          'Sí, por favor. | Yes, please.',
          'No, gracias, adiós. | No, thank you, goodbye. | No, thanks, bye;No thanks, bye;No, thank you, bye',
        ],
      },
      {
        title: "What's your name?",
        tip: `**Me llamo…** literally means "I call myself…" and is the most common way to give your name.
- **¿Cómo te llamas?** What's your name? (casual)
- **Mucho gusto** = nice to meet you`,
        items: [
          'me llamo | my name is | I am called',
          '¿Cómo te llamas? | What is your name? | What\'s your name',
          'Me llamo Ana. | My name is Ana. | I am Ana;I\'m Ana',
          'Hola, me llamo Carlos. | Hello, my name is Carlos. | Hi, my name is Carlos;Hi, I\'m Carlos;Hello, I\'m Carlos;Hello, I am Carlos',
          'mucho gusto | nice to meet you | pleased to meet you',
          '¿Y tú? | And you? | and you',
          'Mucho gusto, Ana. | Nice to meet you, Ana. | Pleased to meet you, Ana',
        ],
      },
      {
        title: 'How are you?',
        tip: `Spanish has two ways to say "you":
- **tú**: friends, family, kids, people your age
- **usted**: polite, for strangers, elders, at work
**¿Cómo estás?** is casual; **¿Cómo está usted?** is polite.`,
        items: [
          '¿Cómo estás? | How are you? | how are you doing',
          'bien | well | fine;good',
          'mal | bad | badly;not well',
          'muy bien | very well | very good',
          'más o menos | so-so | more or less',
          'Estoy bien, gracias. | I am fine, thank you. | I\'m fine, thanks;I am well, thank you;I\'m good, thanks;I am good, thank you;I\'m fine, thank you;I am fine, thanks',
          '¿Y usted? | And you? | and you (formal)',
          'hasta luego | see you later | bye',
        ],
      },
    ],
    story: {
      title: 'Hola, Ana',
      lines: [
        'Carlos: Hola, buenos días. | Hello, good morning.',
        'Ana: Buenos días. ¿Cómo te llamas? | Good morning. What is your name?',
        'Carlos: Me llamo Carlos. ¿Y tú? | My name is Carlos. And you?',
        'Ana: Me llamo Ana. Mucho gusto. | My name is Ana. Nice to meet you.',
        'Carlos: Mucho gusto, Ana. ¿Cómo estás? | Nice to meet you, Ana. How are you?',
        'Ana: Muy bien, gracias. ¿Y tú? | Very well, thanks. And you?',
        'Carlos: Más o menos. | So-so.',
        'Ana: ¡Hasta luego, Carlos! | See you later, Carlos!',
      ],
      questions: [
        { q: "What is the man's name?", options: ['Carlos', 'Ana', 'Luis'], answer: 0 },
        { q: 'How is Ana?', options: ['Very well', 'Bad', 'So-so'], answer: 0 },
        { q: 'What time of day is it?', options: ['Morning', 'Night', 'Afternoon'], answer: 0 },
      ],
    },
  }),

  unit(1, {
    id: 'u02-people',
    title: 'People',
    emoji: '🧑‍🤝‍🧑',
    description: 'I, you, he, she — and the verb "to be" (ser).',
    lessons: [
      {
        title: 'I am, you are',
        tip: `**ser** = to be (for who or what someone is).
- yo **soy**: I am
- tú **eres**: you are
- él / ella / usted **es**: he / she is, you (formal) are
Spanish often drops the pronoun: **Soy Ana** = I'm Ana.`,
        items: [
          'yo | I',
          'tú | you',
          'soy | I am | I\'m',
          'eres | you are | you\'re',
          'Yo soy Ana. | I am Ana. | I\'m Ana',
          'Tú eres Carlos. | You are Carlos. | You\'re Carlos',
          '¿Eres Carlos? | Are you Carlos?',
          'Sí, soy Carlos. | Yes, I am Carlos. | Yes, I\'m Carlos',
        ],
      },
      {
        title: 'Man, woman, child',
        tip: `Every noun is **masculine** or **feminine**.
- **el** / **un**: masculine (the / a)
- **la** / **una**: feminine (the / a)
Words ending in **-o** are usually masculine; **-a** usually feminine.`,
        items: [
          'el hombre | the man',
          'la mujer | the woman',
          'el niño | the boy | the child;the kid',
          'la niña | the girl',
          'él | he',
          'ella | she',
          'un hombre | a man',
          'una mujer | a woman',
          'Soy un hombre. | I am a man. | I\'m a man',
          'Ella es una niña. | She is a girl. | She\'s a girl',
        ],
      },
      {
        title: 'Friends & teachers',
        tip: `With **ser**, jobs and roles drop the "a":
**Soy estudiante** = I'm a student.
**usted** is polite "you" and uses the same verb form as él/ella: **usted es**.`,
        items: [
          'el amigo | the friend | the (male) friend',
          'la amiga | the friend | the (female) friend',
          'el estudiante | the student',
          'la maestra | the teacher | the (female) teacher',
          'el maestro | the teacher | the (male) teacher',
          'usted | you | you (formal)',
          'Él es mi amigo. | He is my friend. | He\'s my friend',
          'Ella es maestra. | She is a teacher. | She\'s a teacher',
          'Soy estudiante. | I am a student. | I\'m a student',
          '¿Usted es maestro? | Are you a teacher?',
        ],
      },
      {
        title: 'We and they',
        tip: `Plural "to be":
- nosotros **somos**: we are
- ellos / ellas / ustedes **son**: they are, you all are
In Latin America, **ustedes** is the only plural "you", whether formal or casual.
A mixed group of men and women uses the masculine: **amigos**, **ellos**.`,
        items: [
          'nosotros | we',
          'ellos | they | they (masculine)',
          'ellas | they | they (feminine)',
          'ustedes | you all | you (plural)',
          'somos | we are | we\'re',
          'son | they are | you all are;they\'re',
          'Somos amigos. | We are friends. | We\'re friends',
          'Ellos son estudiantes. | They are students. | They\'re students',
          'Ustedes son maestros. | You are teachers. | You all are teachers;You\'re teachers',
        ],
      },
    ],
    story: {
      title: 'El primer día',
      lines: [
        'Maestra: Buenos días. Soy la maestra Rosa. | Good morning. I am the teacher, Rosa.',
        'Pedro: Buenos días. Me llamo Pedro. Soy estudiante. | Good morning. My name is Pedro. I am a student.',
        'Maestra: Mucho gusto, Pedro. ¿Y ella? | Nice to meet you, Pedro. And her?',
        'Pedro: Ella es Lucía. Es mi amiga. | She is Lucía. She is my friend.',
        'Lucía: Hola. Somos estudiantes nuevos. | Hi. We are new students.',
        'Maestra: ¡Bienvenidos! | Welcome!',
      ],
      questions: [
        { q: 'Who is Rosa?', options: ['The teacher', 'A student', "Pedro's sister"], answer: 0 },
        { q: 'Who is Lucía?', options: ["Pedro's friend", 'The teacher', "Pedro's mother"], answer: 0 },
        { q: 'What are Pedro and Lucía?', options: ['New students', 'Teachers', 'Brothers'], answer: 0 },
      ],
    },
  }),

  unit(1, {
    id: 'u03-food',
    title: 'Food & drink',
    emoji: '🍎',
    description: 'Order food and say what you eat and drink.',
    lessons: [
      {
        title: 'Water & bread',
        tip: `**el agua** is actually feminine. It takes **el** only because it starts with a stressed "a" sound, which makes it easier to say.`,
        items: [
          'el agua | the water | water',
          'el pan | the bread | bread',
          'la leche | the milk | milk',
          'el café | the coffee | coffee',
          'la manzana | the apple',
          'el arroz | the rice | rice',
          'Agua, por favor. | Water, please.',
          'Un café, por favor. | A coffee, please. | Coffee, please;One coffee, please',
        ],
      },
      {
        title: 'I want',
        tip: `**querer** = to want
- **quiero**: I want
- **quieres**: you want
- **quiere**: he / she wants, you (formal) want
Make it negative by putting **no** in front: **No quiero**.`,
        items: [
          'quiero | I want',
          'quieres | you want',
          'quiere | he wants | she wants;you want',
          'Quiero agua. | I want water. | I want some water',
          'Quiero un café. | I want a coffee. | I want coffee;I want one coffee',
          '¿Quieres pan? | Do you want bread? | Do you want some bread;Want some bread',
          'No quiero leche. | I do not want milk. | I don\'t want milk;I don\'t want any milk',
          'Ella quiere una manzana. | She wants an apple.',
        ],
      },
      {
        title: 'Eat & drink',
        tip: `The Spanish present tense covers both "I eat" and "I am eating".
- **como**: I eat · **comes**: you eat · **come**: he/she eats
- **bebo**: I drink · **bebes**: you drink · **bebe**: he/she drinks
- **comemos**: we eat`,
        items: [
          'como | I eat | I\'m eating;I am eating',
          'bebo | I drink | I\'m drinking;I am drinking',
          'comes | you eat | you are eating',
          'bebes | you drink | you are drinking',
          'el pollo | the chicken | chicken',
          'Como pan. | I eat bread. | I\'m eating bread;I am eating bread',
          'Bebo agua. | I drink water. | I\'m drinking water;I am drinking water',
          '¿Qué comes? | What do you eat? | What are you eating',
          'Ella bebe café. | She drinks coffee. | She is drinking coffee;She\'s drinking coffee',
          'Comemos arroz con pollo. | We eat rice with chicken. | We are eating rice with chicken;We\'re eating rice with chicken;We eat chicken and rice',
        ],
      },
      {
        title: 'Meals',
        tip: `**Me gusta** = I like (literally "it pleases me").
- **Me gusta el café** = I like coffee
- **¿Te gusta…?** = Do you like…?
Spanish keeps "the" when talking about things in general: **el café**.`,
        items: [
          'el desayuno | the breakfast | breakfast',
          'el almuerzo | the lunch | lunch',
          'la cena | the dinner | dinner;supper',
          'la comida | the food | food;the meal',
          'delicioso | delicious',
          'Me gusta el café. | I like coffee. | I like the coffee',
          '¿Te gusta la leche? | Do you like milk? | Do you like the milk',
          'La comida es deliciosa. | The food is delicious.',
        ],
      },
    ],
    story: {
      title: 'En el café',
      lines: [
        'Mesero: Buenas tardes. ¿Qué quiere? | Good afternoon. What would you like?',
        'Sofía: Un café, por favor. | A coffee, please.',
        'Mesero: ¿Con leche? | With milk?',
        'Sofía: Sí, con leche. Y pan, por favor. | Yes, with milk. And bread, please.',
        'Mesero: Aquí está. | Here you go.',
        'Sofía: Gracias. ¡El pan es delicioso! | Thanks. The bread is delicious!',
      ],
      questions: [
        { q: 'What does Sofía order?', options: ['Coffee with milk and bread', 'Water and rice', 'Chicken'], answer: 0 },
        { q: 'How is the bread?', options: ['Delicious', 'Bad', 'So-so'], answer: 0 },
      ],
    },
  }),

  unit(1, {
    id: 'u04-family',
    title: 'Family',
    emoji: '👨‍👩‍👧',
    description: 'Talk about your family with "tener" and "my".',
    lessons: [
      {
        title: 'Mom & dad',
        items: [
          'la madre | the mother',
          'el padre | the father',
          'la mamá | mom | mother;mum;the mom',
          'el papá | dad | father;the dad',
          'la familia | the family',
          'mi | my',
          'Mi madre es maestra. | My mother is a teacher. | My mom is a teacher',
          'Él es mi papá. | He is my dad. | He\'s my dad;He is my father;He\'s my father',
        ],
      },
      {
        title: 'Brothers & sisters',
        tip: `**tener** = to have
- **tengo**: I have · **tienes**: you have · **tiene**: he/she has
**los hermanos** can mean "the brothers" or "brothers and sisters" (siblings).`,
        items: [
          'el hermano | the brother',
          'la hermana | the sister',
          'los hermanos | the siblings | the brothers;the brothers and sisters',
          'tengo | I have',
          'tienes | you have',
          'Tengo un hermano. | I have a brother. | I have one brother',
          'Tengo dos hermanas. | I have two sisters.',
          '¿Tienes hermanos? | Do you have siblings? | Do you have brothers and sisters;Do you have brothers',
        ],
      },
      {
        title: 'Sons & daughters',
        tip: `**tu** = your (casual) · **su** = his, her, their, or your (formal).
**se llama** = his/her name is.`,
        items: [
          'el hijo | the son',
          'la hija | the daughter',
          'los hijos | the children | the sons;the kids',
          'el bebé | the baby',
          'tu | your',
          'su | his | her;their;your',
          '¿Cómo se llama tu hijo? | What is your son\'s name? | What\'s your son\'s name',
          'Su hijo se llama Mateo. | Her son\'s name is Mateo. | His son\'s name is Mateo;Her son is called Mateo;His son is called Mateo;Their son\'s name is Mateo',
          'Ella tiene un bebé. | She has a baby.',
        ],
      },
      {
        title: 'Grandparents & more',
        tip: `For plural nouns, **mi** becomes **mis** and **tu** becomes **tus**: **mis abuelos** = my grandparents.`,
        items: [
          'el abuelo | the grandfather | grandfather;grandpa;the grandpa',
          'la abuela | the grandmother | grandmother;grandma;the grandma',
          'los abuelos | the grandparents | grandparents',
          'el tío | the uncle',
          'la tía | the aunt',
          'el primo | the cousin | the (male) cousin',
          'mis | my | my (plural)',
          'Mis abuelos son de México. | My grandparents are from Mexico.',
          'Mi tía tiene tres hijos. | My aunt has three children. | My aunt has three kids;My aunt has three sons',
        ],
      },
    ],
    story: {
      title: 'La familia de Mateo',
      lines: [
        'Mateo: Hola, me llamo Mateo. Esta es mi familia. | Hi, my name is Mateo. This is my family.',
        'Mateo: Mi papá se llama Jorge. Es maestro. | My dad\'s name is Jorge. He is a teacher.',
        'Mateo: Mi mamá se llama Elena. | My mom\'s name is Elena.',
        'Mateo: Tengo una hermana. Se llama Valeria. | I have a sister. Her name is Valeria.',
        'Mateo: Mis abuelos son de México. | My grandparents are from Mexico.',
        'Mateo: ¡Me gusta mi familia! | I like my family!',
      ],
      questions: [
        { q: "What does Mateo's father do?", options: ['He is a teacher', 'He is a student', 'He is a waiter'], answer: 0 },
        { q: 'How many sisters does Mateo have?', options: ['One', 'Two', 'Three'], answer: 0 },
        { q: 'Where are his grandparents from?', options: ['Mexico', 'Spain', 'Colombia'], answer: 0 },
      ],
    },
  }),

  unit(1, {
    id: 'u05-numbers',
    title: 'Numbers & time',
    emoji: '🔢',
    description: 'Count to twenty, tell the time, name the days.',
    lessons: [
      {
        title: 'One to five',
        tip: `**uno** becomes **un** before a masculine noun (**un café**) and **una** before a feminine one (**una manzana**).`,
        items: [
          'uno | one',
          'dos | two',
          'tres | three',
          'cuatro | four',
          'cinco | five',
          'Tengo cinco manzanas. | I have five apples.',
          'Quiero dos cafés. | I want two coffees.',
        ],
      },
      {
        title: 'Six to ten',
        tip: `For age, Spanish uses **tener** (to have), not "to be":
**Tengo diez años** = I am ten years old (literally "I have ten years").`,
        items: [
          'seis | six',
          'siete | seven',
          'ocho | eight',
          'nueve | nine',
          'diez | ten',
          '¿Cuántos años tienes? | How old are you?',
          'Tengo diez años. | I am ten years old. | I\'m ten years old;I am ten;I\'m ten',
        ],
      },
      {
        title: 'Eleven to twenty',
        items: [
          'once | eleven',
          'doce | twelve',
          'quince | fifteen',
          'veinte | twenty',
          'el número | the number',
          '¿Cuál es tu número? | What is your number? | What\'s your number',
          'Mi hermano tiene doce años. | My brother is twelve years old. | My brother is twelve',
        ],
      },
      {
        title: 'What time is it?',
        tip: `- **Es la una**: it's one o'clock (singular, because one hour)
- **Son las dos / tres…**: it's two / three…
- **y media**: half past
**mañana** means "tomorrow", and **la mañana** means "the morning".`,
        items: [
          '¿Qué hora es? | What time is it?',
          'Es la una. | It is one o\'clock. | It\'s one o\'clock;It is one;It\'s one',
          'Son las dos. | It is two o\'clock. | It\'s two o\'clock;It is two;It\'s two',
          'Son las tres y media. | It is half past three. | It\'s half past three;It\'s three thirty;It is three thirty',
          'hoy | today',
          'mañana | tomorrow',
          'ayer | yesterday',
          'la hora | the hour | the time',
        ],
      },
      {
        title: 'Days of the week',
        tip: `Days are not capitalized in Spanish. **el lunes** means "on Monday", and **los lunes** means "on Mondays".`,
        items: [
          'el lunes | Monday | on Monday',
          'el martes | Tuesday | on Tuesday',
          'el miércoles | Wednesday | on Wednesday',
          'el jueves | Thursday | on Thursday',
          'el viernes | Friday | on Friday',
          'el sábado | Saturday | on Saturday',
          'el domingo | Sunday | on Sunday',
          'Hoy es lunes. | Today is Monday. | It\'s Monday today',
          'Mañana es sábado. | Tomorrow is Saturday.',
        ],
      },
    ],
    story: {
      title: '¿Qué hora es?',
      lines: [
        'Luis: Perdón, ¿qué hora es? | Excuse me, what time is it?',
        'Marta: Son las ocho. | It is eight o\'clock.',
        'Luis: ¡Las ocho! Tengo clase a las ocho. | Eight! I have class at eight.',
        'Marta: Hoy es sábado, Luis. | Today is Saturday, Luis.',
        'Luis: ¿Sábado? ¡Ah, gracias! No tengo clase hoy. | Saturday? Oh, thanks! I don\'t have class today.',
        'Marta: ¡Buen fin de semana! | Have a good weekend!',
      ],
      questions: [
        { q: 'What time is it?', options: ['Eight', 'Two', 'Ten'], answer: 0 },
        { q: 'What day is it?', options: ['Saturday', 'Monday', 'Friday'], answer: 0 },
        { q: 'Does Luis have class today?', options: ['No', 'Yes, at eight', 'Yes, at ten'], answer: 0 },
      ],
    },
  }),

  unit(1, {
    id: 'u06-places',
    title: 'Places',
    emoji: '🏙️',
    description: 'Say where things are with "estar" and where you\'re going with "ir".',
    lessons: [
      {
        title: 'Around town',
        tip: `For **location**, use **estar**, not ser.
- **estoy**: I am · **estás**: you are · **está**: he/she/it is
**Estoy en casa** = I'm at home.`,
        items: [
          'la casa | the house | the home',
          'la escuela | the school',
          'el trabajo | work | the work;the job',
          'la ciudad | the city',
          'el parque | the park',
          'el restaurante | the restaurant',
          'en casa | at home',
          'Estoy en casa. | I am at home. | I\'m at home',
          '¿Dónde estás? | Where are you?',
        ],
      },
      {
        title: 'Where is…?',
        items: [
          '¿Dónde está? | Where is it? | Where is he;Where is she;Where is',
          'el baño | the bathroom | the restroom',
          '¿Dónde está el baño? | Where is the bathroom? | Where\'s the bathroom;Where is the restroom',
          'aquí | here',
          'allí | there',
          'Está allí. | It is there. | It\'s there;It\'s over there;It is over there',
          'cerca | near | close;nearby',
          'lejos | far | far away',
          'El parque está cerca. | The park is near. | The park is close;The park is nearby',
        ],
      },
      {
        title: 'Directions',
        items: [
          'a la derecha | to the right | on the right',
          'a la izquierda | to the left | on the left',
          'derecho | straight ahead | straight',
          'la calle | the street',
          'el hotel | the hotel',
          'El baño está a la derecha. | The bathroom is on the right. | The bathroom is to the right',
          'El hotel está en esta calle. | The hotel is on this street.',
          'Siga derecho. | Go straight ahead. | Keep going straight;Go straight',
        ],
      },
      {
        title: 'Going places',
        tip: `**ir** = to go
- **voy**: I go · **vas**: you go · **va**: he/she goes · **vamos**: we go
**a + el** always contracts to **al**: **Voy al parque**.`,
        items: [
          'voy | I go | I\'m going;I am going',
          'vas | you go | you are going',
          'va | he goes | she goes;he is going;she is going',
          'al | to the',
          'Voy a la escuela. | I go to school. | I\'m going to school;I am going to school;I go to the school',
          '¿Adónde vas? | Where are you going? | Where do you go',
          'Vamos al parque. | We are going to the park. | We\'re going to the park;We go to the park;Let\'s go to the park',
          'Ella va al trabajo. | She goes to work. | She is going to work;She\'s going to work',
        ],
      },
    ],
    story: {
      title: '¿Dónde está el hotel?',
      lines: [
        'Turista: Perdón, ¿dónde está el hotel Sol? | Excuse me, where is the Hotel Sol?',
        'Señora: Está en esta calle. | It is on this street.',
        'Turista: ¿Está cerca? | Is it close?',
        'Señora: Sí, está muy cerca. A la derecha. | Yes, it is very close. On the right.',
        'Turista: ¡Muchas gracias! | Thank you very much!',
        'Señora: De nada. ¡Adiós! | You\'re welcome. Goodbye!',
      ],
      questions: [
        { q: 'What is the tourist looking for?', options: ['A hotel', 'A bathroom', 'A park'], answer: 0 },
        { q: 'Is it far?', options: ["No, it's very close", "Yes, it's far", "It's on another street"], answer: 0 },
        { q: 'Which side is it on?', options: ['The right', 'The left', 'Straight ahead'], answer: 0 },
      ],
    },
  }),
]
