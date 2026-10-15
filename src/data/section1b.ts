import { unit } from './build'

// Section 1 (A1) — units 7–12. Latin American Spanish: "ustedes" for plural you, no "vosotros".
export default [
  unit(1, {
    id: 'u07-ar-verbs',
    title: 'Everyday verbs',
    emoji: '🗣️',
    description: 'Speak, work, study and buy with regular -ar verbs.',
    lessons: [
      {
        title: 'I speak, you speak',
        tip: `Most verbs end in **-ar**. Drop the -ar and add an ending:
- **hablo**: I speak
- **hablas**: you speak
- **habla**: he / she speaks, you (formal) speak
Like comer, **hablo** means both "I speak" and "I'm speaking".`,
        items: [
          'hablar | to speak | to talk',
          'hablo | I speak | I talk;I\'m speaking;I am speaking;I\'m talking;I am talking',
          'hablas | you speak | you talk;you are speaking;you\'re speaking;you are talking;you\'re talking',
          'trabajar | to work',
          'el español | Spanish | the Spanish language',
          'el inglés | English | the English language',
          'Hablo español. | I speak Spanish. | I\'m speaking Spanish;I am speaking Spanish',
          '¿Hablas inglés? | Do you speak English? | Are you speaking English;Can you speak English',
          'Mi papá trabaja en un hotel. | My dad works in a hotel. | My dad works at a hotel;My father works in a hotel;My father works at a hotel;My dad is working at a hotel;My dad\'s working at a hotel',
          'Ella habla con su amiga. | She talks with her friend. | She talks to her friend;She is talking with her friend;She\'s talking with her friend;She is talking to her friend;She\'s talking to her friend;She speaks with her friend;She speaks to her friend',
        ],
      },
      {
        title: 'We study, they need',
        tip: `Plural -ar endings:
- nosotros **-amos**: estudi**amos** = we study
- ellos / ellas / ustedes **-an**: estudi**an** = they study, you all study`,
        items: [
          'estudiar | to study',
          'necesitar | to need',
          'mucho | a lot | much;lots;very much',
          'estudiamos | we study | we\'re studying;we are studying',
          'necesitan | they need | you all need;you need',
          'Estudiamos español. | We study Spanish. | We\'re studying Spanish;We are studying Spanish',
          'Necesito un café. | I need a coffee. | I need coffee;I need one coffee',
          'Necesitamos agua. | We need water. | We need some water',
          'Ellos trabajan mucho. | They work a lot. | They work hard;They\'re working a lot;They are working a lot',
          '¿Ustedes estudian en casa? | Do you study at home? | Do you all study at home;Are you studying at home;Are you all studying at home',
        ],
      },
      {
        title: 'Buy & listen',
        tip: `**escuchar** already includes "to": **Escucho música** = I listen **to** music. No extra word needed.`,
        items: [
          'comprar | to buy',
          'escuchar | to listen | to listen to;to hear',
          'la música | the music | music',
          'la tienda | the store | the shop',
          'Escucho música. | I listen to music. | I\'m listening to music;I am listening to music',
          'Compro pan en la tienda. | I buy bread at the store. | I buy bread in the store;I\'m buying bread at the store;I am buying bread at the store;I buy bread at the shop;I\'m buying bread at the shop',
          '¿Qué compras? | What are you buying? | What do you buy',
          'Mi hermana escucha la radio. | My sister listens to the radio. | My sister is listening to the radio;My sister\'s listening to the radio',
          'Ellos compran una casa. | They are buying a house. | They buy a house;They\'re buying a house',
        ],
      },
      {
        title: 'Walk, arrive, take',
        tip: `- **caminar**: to walk
- **llegar**: to arrive (**llegar a** = to arrive at)
- **mirar**: to look at, to watch
- **tomar**: to take, and also to drink: **tomar café**`,
        items: [
          'caminar | to walk',
          'llegar | to arrive | to get to;to get there',
          'mirar | to look at | to watch;to look',
          'tomar | to take | to drink;to have',
          'Camino al parque. | I walk to the park. | I\'m walking to the park;I am walking to the park',
          'Llego a las ocho. | I arrive at eight. | I get there at eight;I arrive at eight o\'clock;I get there at eight o\'clock;I\'m arriving at eight;I am arriving at eight',
          'Tomamos café en la mañana. | We drink coffee in the morning. | We have coffee in the morning;We\'re drinking coffee in the morning;We are drinking coffee in the morning;We take coffee in the morning | Tomamos café por la mañana.',
          '¿Miras la televisión? | Do you watch TV? | Do you watch television;Are you watching TV;Are you watching television;Are you watching the TV | ¿Ves la televisión?',
          'Ella toma el autobús. | She takes the bus. | She is taking the bus;She\'s taking the bus',
          'El maestro llega tarde. | The teacher arrives late. | The teacher is arriving late;The teacher\'s arriving late;The teacher gets there late;The teacher is late',
        ],
      },
      {
        title: 'Putting it together',
        tip: `The full pattern, with **hablar**:
- yo **hablo** · tú **hablas** · él / ella / usted **habla**
- nosotros **hablamos** · ellos / ellas / ustedes **hablan**
Put **no** before the verb to make it negative: **No trabajo**.`,
        items: [
          'el mesero | the waiter | the server',
          'ustedes hablan | you all speak | you speak;you all talk;you talk',
          'nosotros caminamos | we walk | we\'re walking;we are walking',
          '¿Dónde trabajas? | Where do you work?',
          'Trabajo en un restaurante. | I work in a restaurant. | I work at a restaurant',
          'No trabajo los sábados. | I don\'t work on Saturdays. | I do not work on Saturdays;I don\'t work Saturdays;I do not work Saturdays',
          'Ustedes llegan mañana. | You arrive tomorrow. | You all arrive tomorrow;You\'re arriving tomorrow;You are arriving tomorrow;You all are arriving tomorrow',
          'Mi abuela camina en el parque. | My grandma walks in the park. | My grandmother walks in the park;My grandma is walking in the park;My grandmother is walking in the park;My grandma\'s walking in the park',
          'Hablamos con el mesero. | We talk to the waiter. | We talk with the waiter;We speak with the waiter;We speak to the waiter;We\'re talking to the waiter;We are talking to the waiter;We\'re talking with the waiter;We are talking with the waiter',
        ],
      },
    ],
    story: {
      title: 'Un día normal',
      lines: [
        'Daniel: Hola, me llamo Daniel. Trabajo en un hotel. | Hi, my name is Daniel. I work in a hotel.',
        'Daniel: Llego al trabajo a las ocho. | I arrive at work at eight.',
        'Daniel: Hablo inglés y español con los turistas. | I speak English and Spanish with the tourists.',
        'Daniel: En la tarde, camino al parque. | In the afternoon, I walk to the park.',
        'Daniel: Escucho música y tomo un café. | I listen to music and have a coffee.',
        'Daniel: Los sábados, estudio con mi amiga Paula. | On Saturdays, I study with my friend Paula.',
      ],
      questions: [
        { q: 'Where does Daniel work?', options: ['In a hotel', 'In a school', 'In a store'], answer: 0 },
        { q: 'What languages does he speak at work?', options: ['English and Spanish', 'Only Spanish', 'Only English'], answer: 0 },
        { q: 'What does he do in the park?', options: ['Listens to music and has a coffee', 'Studies with Paula', 'Works'], answer: 0 },
      ],
    },
  }),

  unit(1, {
    id: 'u08-er-ir-verbs',
    title: 'More verbs',
    emoji: '📖',
    description: 'Read, learn, live and write with -er and -ir verbs.',
    lessons: [
      {
        title: 'Eat, drink, read',
        tip: `**-er** verbs use these endings:
- **-o**, **-es**, **-e**: leo, lees, lee
- **-emos**, **-en**: leemos, leen
You already know **como** and **bebo**!`,
        items: [
          'leer | to read',
          'leo | I read | I\'m reading;I am reading',
          'lees | you read | you are reading;you\'re reading',
          'el libro | the book',
          'el periódico | the newspaper | the paper',
          'Leo un libro. | I am reading a book. | I read a book;I\'m reading a book',
          '¿Qué lees? | What are you reading? | What do you read',
          'Comemos en el restaurante. | We eat at the restaurant. | We eat in the restaurant;We\'re eating at the restaurant;We are eating at the restaurant;We\'re eating in the restaurant;We are eating in the restaurant',
          'Ellos beben leche. | They drink milk. | They are drinking milk;They\'re drinking milk',
          'Mi papá lee el periódico. | My dad reads the newspaper. | My dad is reading the newspaper;My dad\'s reading the newspaper;My father reads the newspaper;My father is reading the newspaper;My dad reads the paper',
        ],
      },
      {
        title: 'Learn & understand',
        tip: `**aprender** (to learn) and **comprender** (to understand) are regular -er verbs.
You'll also hear **No entiendo** = I don't understand. It means the same as **No comprendo**.`,
        items: [
          'aprender | to learn',
          'comprender | to understand',
          'aprendo | I learn | I\'m learning;I am learning',
          'comprendo | I understand',
          'la palabra | the word',
          'Aprendo español. | I am learning Spanish. | I\'m learning Spanish;I learn Spanish',
          '¿Comprendes? | Do you understand? | You understand',
          'No comprendo. | I don\'t understand. | I do not understand | No entiendo.',
          'Mi amigo aprende inglés. | My friend is learning English. | My friend learns English;My friend\'s learning English',
          'Los niños aprenden mucho. | The children learn a lot. | The kids learn a lot;The children are learning a lot;The kids are learning a lot',
        ],
      },
      {
        title: 'Live & write',
        tip: `**-ir** verbs are almost the same as -er verbs:
- **vivo**, **vives**, **vive**, **viven**
Only "we" is different: **vivimos** (not -emos).
**Vivo en…** = I live in…`,
        items: [
          'vivir | to live',
          'escribir | to write',
          'vivo | I live',
          'la carta | the letter',
          'Vivo en México. | I live in Mexico.',
          '¿Dónde vives? | Where do you live?',
          'Mis abuelos viven lejos. | My grandparents live far away. | My grandparents live far',
          'Escribo una carta. | I am writing a letter. | I write a letter;I\'m writing a letter',
          'Ella escribe en español. | She writes in Spanish. | She is writing in Spanish;She\'s writing in Spanish',
          'Vivimos en la ciudad. | We live in the city.',
        ],
      },
      {
        title: 'Open & receive',
        tip: `**abrir** (to open) and **recibir** (to receive, to get) follow the -ir pattern:
- abro, abres, abre, abrimos, abren
- recibo, recibes, recibe, recibimos, reciben`,
        items: [
          'abrir | to open',
          'recibir | to receive | to get',
          'la puerta | the door',
          'la ventana | the window',
          'el regalo | the gift | the present',
          'Abro la ventana. | I open the window. | I\'m opening the window;I am opening the window',
          '¿Abres la puerta, por favor? | Can you open the door, please? | Could you open the door, please;Will you open the door, please;Do you open the door, please;Open the door, please',
          'La tienda abre a las nueve. | The store opens at nine. | The shop opens at nine;The store opens at nine o\'clock;The shop opens at nine o\'clock',
          'Recibo muchos regalos. | I receive a lot of gifts. | I get a lot of gifts;I get many gifts;I receive many gifts;I get lots of gifts;I get a lot of presents;I receive many presents;I get lots of presents',
          'Ella recibe una carta. | She receives a letter. | She gets a letter;She is getting a letter;She\'s getting a letter;She is receiving a letter;She\'s receiving a letter',
        ],
      },
      {
        title: 'We and they',
        tip: `Compare "we":
- -ar: habl**amos**
- -er: com**emos**
- -ir: viv**imos**
"They" and "you all" end in **-an** (-ar) or **-en** (-er and -ir).`,
        items: [
          'comemos | we eat | we\'re eating;we are eating',
          'vivimos | we live',
          'escriben | they write | you all write;they are writing;they\'re writing',
          'la computadora | the computer',
          'Ustedes leen mucho. | You read a lot. | You all read a lot',
          '¿Ustedes viven aquí? | Do you live here? | Do you all live here',
          'Abrimos el restaurante a las doce. | We open the restaurant at twelve. | We open the restaurant at twelve o\'clock;We open the restaurant at noon',
          'Mis hermanos beben mucha agua. | My brothers drink a lot of water. | My siblings drink a lot of water;My brothers drink lots of water;My siblings drink lots of water;My brothers and sisters drink a lot of water',
          'Escribimos en la computadora. | We write on the computer. | We\'re writing on the computer;We are writing on the computer;We write with the computer | Escribimos con la computadora.',
          'Mis hijos aprenden a leer. | My children are learning to read. | My kids are learning to read;My children learn to read;My kids learn to read;My sons are learning to read',
        ],
      },
    ],
    story: {
      title: 'Vivo en Lima',
      lines: [
        'Sara: Hola, me llamo Sara. Vivo en Lima con mi familia. | Hi, my name is Sara. I live in Lima with my family.',
        'Sara: Soy estudiante. Aprendo inglés en la escuela. | I am a student. I learn English at school.',
        'Sara: En la mañana, como pan y bebo café con leche. | In the morning, I eat bread and drink coffee with milk.',
        'Sara: Mi abuela vive lejos, en Cusco. | My grandma lives far away, in Cusco.',
        'Sara: Los domingos, le escribo una carta a mi abuela. | On Sundays, I write a letter to my grandma.',
        'Sara: Ella lee mis cartas con su café. | She reads my letters with her coffee.',
      ],
      questions: [
        { q: 'Where does Sara live?', options: ['Lima', 'Cusco', 'Mexico'], answer: 0 },
        { q: 'What does she learn at school?', options: ['English', 'Spanish', 'Music'], answer: 0 },
        { q: 'What does Sara do on Sundays?', options: ['Writes a letter to her grandma', 'Reads the newspaper', 'Eats at a restaurant'], answer: 0 },
      ],
    },
  }),

  unit(1, {
    id: 'u09-describing',
    title: 'Describing',
    emoji: '✨',
    description: 'Describe people and things, and say how you feel.',
    lessons: [
      {
        title: 'Big & small',
        tip: `Adjectives usually go **after** the noun and match it:
- **un libro nuevo** · **una casa nueva**
- plural adds **-s**: **libros nuevos**
Adjectives ending in **-e** don't change for gender: **grande**.`,
        items: [
          'grande | big | large',
          'pequeño | small | little',
          'bonito | pretty | beautiful;nice;lovely',
          'nuevo | new',
          'viejo | old',
          'el carro | the car | car | el auto;el coche',
          'una casa grande | a big house | a large house',
          'un libro nuevo | a new book',
          'La ciudad es bonita. | The city is pretty. | The city is beautiful;The city is nice;The city is lovely',
          'Mi carro es viejo. | My car is old. | My car\'s old | Mi auto es viejo.',
        ],
      },
      {
        title: 'Expensive & cheap',
        tip: `**muy** = very. It goes before the adjective: **muy caro** = very expensive.
Remember to match plurals: **Las manzanas son baratas**.`,
        items: [
          'caro | expensive',
          'barato | cheap | inexpensive',
          'alto | tall | high',
          'bajo | short | low',
          'muy | very',
          'El café es muy caro. | The coffee is very expensive. | Coffee is very expensive;The coffee\'s very expensive',
          'Los libros son baratos. | The books are cheap. | The books are inexpensive',
          'Mi hermano es alto. | My brother is tall. | My brother\'s tall',
          'Mi abuela es muy baja. | My grandma is very short. | My grandmother is very short;My grandma\'s very short',
          'Las manzanas son muy baratas. | The apples are very cheap. | Apples are very cheap;The apples are really cheap',
        ],
      },
      {
        title: 'How do you feel?',
        tip: `Use **estar** for feelings and states that can change:
- **Estoy cansado** = I'm tired (right now)
- estoy · estás · está · **estamos** · **están**
A woman says **cansada**, **enferma**, **contenta**, **ocupada**.`,
        items: [
          'cansado | tired',
          'feliz | happy',
          'enfermo | sick | ill',
          'contento | happy | glad;pleased;content',
          'ocupado | busy',
          'Estoy cansado. | I am tired. | I\'m tired | Estoy cansada.',
          '¿Estás enfermo? | Are you sick? | Are you ill | ¿Estás enferma?',
          'Mi mamá está muy ocupada. | My mom is very busy. | My mother is very busy;My mom\'s very busy',
          'Estamos contentos. | We are happy. | We\'re happy;We are glad;We\'re glad;We are pleased | Estamos contentas.',
          'Los niños están felices. | The children are happy. | The kids are happy',
        ],
      },
      {
        title: 'Ser or estar?',
        tip: `- **ser**: what someone or something is like: **Ana es alta**.
- **estar**: how they are right now: **Ana está cansada**.
**¿Cómo es?** = What is it like? · **¿Cómo está?** = How is he/she?`,
        items: [
          'pero | but',
          'Ana es alta, pero está cansada. | Ana is tall, but she is tired. | Ana is tall, but she\'s tired;Ana is tall but she is tired;Ana is tall but she\'s tired',
          'Hoy estoy muy feliz. | Today I am very happy. | I am very happy today;I\'m very happy today;Today I\'m very happy',
          'El hotel es nuevo y bonito. | The hotel is new and pretty. | The hotel is new and beautiful;The hotel is new and nice',
          'Mi papá está enfermo hoy. | My dad is sick today. | My father is sick today;My dad is ill today;My father is ill today;My dad\'s sick today',
          '¿Cómo es tu casa? | What is your house like? | What\'s your house like;What is your home like;What\'s your home like',
          'Mi casa es pequeña. | My house is small. | My home is small;My house is little',
          '¿Cómo está tu abuelo? | How is your grandfather? | How\'s your grandfather;How is your grandpa;How\'s your grandpa',
          'Está bien, gracias. | He is fine, thank you. | He\'s fine, thanks;He is fine, thanks;He\'s fine, thank you;He is well, thank you;He\'s well, thanks;She is fine, thank you;She\'s fine, thanks',
          'Ustedes están muy ocupados. | You are very busy. | You all are very busy;You\'re very busy',
        ],
      },
    ],
    story: {
      title: 'Un carro nuevo',
      lines: [
        'Lucía: Hola, Pedro. ¿Cómo estás? | Hi, Pedro. How are you?',
        'Pedro: Estoy cansado. Trabajo mucho. | I am tired. I work a lot.',
        'Lucía: ¿Y tu mamá? ¿Está bien? | And your mom? Is she okay?',
        'Pedro: No, está enferma hoy. | No, she is sick today.',
        'Lucía: Lo siento. | I\'m sorry.',
        'Pedro: Pero mi hermano está muy feliz. ¡Tiene un carro nuevo! | But my brother is very happy. He has a new car!',
        'Lucía: ¿Un carro nuevo? ¿Es caro? | A new car? Is it expensive?',
        'Pedro: No, es pequeño y barato. | No, it is small and cheap.',
      ],
      questions: [
        { q: 'How is Pedro?', options: ['Tired', 'Very happy', 'Sick'], answer: 0 },
        { q: 'Who is sick?', options: ["Pedro's mom", "Pedro's brother", 'Lucía'], answer: 0 },
        { q: 'What is the new car like?', options: ['Small and cheap', 'Big and expensive', 'Old and pretty'], answer: 0 },
      ],
    },
  }),

  unit(1, {
    id: 'u10-colors-clothes',
    title: 'Colors & clothes',
    emoji: '👕',
    description: 'Name colors, talk about clothes, and say what you\'re wearing.',
    lessons: [
      {
        title: 'Colors',
        tip: `Colors are adjectives: they go after the noun and match it.
- **rojo** → **roja**, **rojos**, **rojas**
- Colors ending in **-e** or a consonant only change for plural: **verde** → **verdes**, **azul** → **azules**`,
        items: [
          'rojo | red',
          'azul | blue',
          'verde | green',
          'amarillo | yellow',
          'negro | black',
          'blanco | white',
          'el color | the color | the colour;color',
          'una manzana roja | a red apple',
          'El carro es azul. | The car is blue. | The car\'s blue | El auto es azul.',
          'La casa es blanca. | The house is white. | The home is white',
        ],
      },
      {
        title: 'Clothes',
        tip: `With a plural noun, the color is plural too: **zapatos negros** = black shoes.
**los pantalones** is plural in Spanish, just like "pants" in English.`,
        items: [
          'la camisa | the shirt',
          'los pantalones | the pants | the trousers',
          'el vestido | the dress',
          'los zapatos | the shoes',
          'la falda | the skirt',
          'la chaqueta | the jacket | the coat | la chamarra',
          'Quiero una camisa blanca. | I want a white shirt.',
          'Los zapatos son negros. | The shoes are black.',
          'Mi vestido es verde. | My dress is green.',
          'Necesito pantalones nuevos. | I need new pants. | I need new trousers;I need some new pants',
        ],
      },
      {
        title: 'What color is it?',
        tip: `**¿De qué color es…?** = What color is…? (literally "Of what color is…?")
For plural things: **¿De qué color son…?**`,
        items: [
          '¿De qué color es? | What color is it? | What colour is it',
          'gris | gray | grey',
          'rosado | pink | | rosa',
          'morado | purple',
          'marrón | brown | | café',
          '¿De qué color es tu carro? | What color is your car? | What colour is your car | ¿De qué color es tu auto?',
          'Es rojo. | It is red. | It\'s red',
          '¿De qué color son los zapatos? | What color are the shoes? | What colour are the shoes',
          'Son azules. | They are blue. | They\'re blue',
          'La falda es morada. | The skirt is purple.',
        ],
      },
      {
        title: 'What are you wearing?',
        tip: `**llevar** = to wear (it also means "to carry"). It's a regular -ar verb:
- llevo · llevas · lleva · llevamos · llevan
**Llevo una camisa azul** = I'm wearing a blue shirt.`,
        items: [
          'llevar | to wear | to carry',
          'llevo | I wear | I\'m wearing;I am wearing',
          'la ropa | the clothes | clothes;clothing',
          'el sombrero | the hat',
          '¿Qué llevas hoy? | What are you wearing today? | What do you wear today',
          'Llevo una camisa azul. | I am wearing a blue shirt. | I\'m wearing a blue shirt;I wear a blue shirt',
          'Ella lleva un vestido rojo. | She is wearing a red dress. | She\'s wearing a red dress;She wears a red dress',
          'Él lleva pantalones negros. | He is wearing black pants. | He\'s wearing black pants;He wears black pants;He is wearing black trousers;He\'s wearing black trousers',
          'Mi abuelo lleva un sombrero. | My grandpa is wearing a hat. | My grandpa\'s wearing a hat;My grandfather is wearing a hat;My grandpa wears a hat;My grandfather wears a hat',
          'Llevamos zapatos blancos. | We are wearing white shoes. | We\'re wearing white shoes;We wear white shoes',
        ],
      },
      {
        title: 'Shopping for clothes',
        tip: `- **¿Cuánto cuesta?** = How much is it? (one thing)
- **¿Cuánto cuestan?** = How much are they?
Use **usted** with shop staff: **¿Tiene…?** = Do you have…?`,
        items: [
          '¿Cuánto cuesta? | How much does it cost? | How much is it',
          'la talla | the size',
          'los dólares | the dollars | dollars',
          '¿Cuánto cuesta la chaqueta? | How much is the jacket? | How much does the jacket cost | ¿Cuánto cuesta la chamarra?',
          'Cuesta veinte dólares. | It costs twenty dollars. | It is twenty dollars;It\'s twenty dollars',
          'La camisa es muy cara. | The shirt is very expensive. | The shirt\'s very expensive',
          'Los pantalones son baratos. | The pants are cheap. | The trousers are cheap;The pants are inexpensive',
          'Compro un vestido amarillo. | I am buying a yellow dress. | I\'m buying a yellow dress;I buy a yellow dress',
          '¿Tiene una talla más grande? | Do you have a bigger size? | Do you have a larger size;Do you have it in a bigger size;Do you have it in a larger size',
        ],
      },
    ],
    story: {
      title: 'En la tienda de ropa',
      lines: [
        'Vendedora: Buenas tardes. ¿Qué necesita? | Good afternoon. What do you need?',
        'Andrés: Necesito una camisa para el trabajo. | I need a shirt for work.',
        'Vendedora: ¿De qué color? | What color?',
        'Andrés: Blanca o azul, por favor. | White or blue, please.',
        'Vendedora: Esta camisa azul es muy bonita. | This blue shirt is very nice.',
        'Andrés: Sí, me gusta. ¿Cuánto cuesta? | Yes, I like it. How much does it cost?',
        'Vendedora: Cuesta quince dólares. | It costs fifteen dollars.',
        'Andrés: ¡Qué barata! La llevo. | So cheap! I\'ll take it.',
      ],
      questions: [
        { q: 'What does Andrés need?', options: ['A shirt for work', 'Black shoes', 'A red dress'], answer: 0 },
        { q: 'What color is the shirt he buys?', options: ['Blue', 'Red', 'Black'], answer: 0 },
        { q: 'How much does it cost?', options: ['Fifteen dollars', 'Twenty dollars', 'Five dollars'], answer: 0 },
      ],
    },
  }),

  unit(1, {
    id: 'u11-home',
    title: 'At home',
    emoji: '🏠',
    description: 'Rooms, furniture, "hay", and where things are.',
    lessons: [
      {
        title: 'Rooms',
        tip: `**hay** = there is / there are. It never changes:
- **Hay un baño** = There is one bathroom
- **Hay tres dormitorios** = There are three bedrooms
- **¿Hay…?** = Is there…? / Are there…?`,
        items: [
          'la cocina | the kitchen',
          'el dormitorio | the bedroom | | el cuarto;la habitación;la recámara',
          'la sala | the living room',
          'el jardín | the garden | the yard',
          'el apartamento | the apartment | the flat | el departamento',
          'hay | there is | there are',
          'Hay tres dormitorios. | There are three bedrooms. | | Hay tres cuartos.;Hay tres habitaciones.',
          '¿Hay un baño aquí? | Is there a bathroom here? | Is there a restroom here',
          'Mi casa tiene una cocina grande. | My house has a big kitchen. | My house has a large kitchen;My home has a big kitchen;My home has a large kitchen',
          'Hay un jardín muy bonito. | There is a very pretty garden. | There\'s a very pretty garden;There is a very nice garden;There\'s a very nice garden;There is a very beautiful garden;There\'s a very beautiful garden;There is a very pretty yard;There\'s a very nice yard',
        ],
      },
      {
        title: 'Furniture',
        tip: `**No hay** = there isn't / there aren't.
After **no hay**, you usually drop **un/una**: **No hay mesa** = There's no table.`,
        items: [
          'la mesa | the table',
          'la silla | the chair',
          'la cama | the bed',
          'el sofá | the sofa | the couch',
          'la lámpara | the lamp',
          'el refrigerador | the refrigerator | the fridge | la nevera;el refri',
          'Hay una cama en el dormitorio. | There is a bed in the bedroom. | There\'s a bed in the bedroom | Hay una cama en el cuarto.;Hay una cama en la habitación.',
          '¿Hay sillas en la cocina? | Are there chairs in the kitchen? | Are there any chairs in the kitchen',
          'El sofá es nuevo. | The sofa is new. | The couch is new;The sofa\'s new',
          'No hay mesa en la sala. | There is no table in the living room. | There isn\'t a table in the living room;There\'s no table in the living room',
        ],
      },
      {
        title: 'Where is it?',
        tip: `Location uses **estar**, plus a place word:
- **en**: in, on · **sobre**: on (top of)
- **debajo de**: under · **al lado de**: next to
**de + el** contracts to **del**: **al lado del sofá**.`,
        items: [
          'en | in | on;at',
          'sobre | on | on top of;over',
          'debajo de | under | underneath;below',
          'al lado de | next to | beside',
          'el gato | the cat',
          'El libro está sobre la mesa. | The book is on the table. | The book is on top of the table;The book\'s on the table | El libro está en la mesa.',
          'El gato está debajo de la cama. | The cat is under the bed. | The cat\'s under the bed;The cat is underneath the bed',
          'La lámpara está al lado del sofá. | The lamp is next to the sofa. | The lamp is next to the couch;The lamp is beside the sofa;The lamp is beside the couch;The lamp\'s next to the sofa',
          'La leche está en el refrigerador. | The milk is in the refrigerator. | The milk is in the fridge;The milk\'s in the fridge | La leche está en la nevera.',
          '¿Dónde está mi celular? | Where is my cell phone? | Where\'s my cell phone;Where is my phone;Where\'s my phone;Where is my cellphone;Where\'s my cellphone',
        ],
      },
      {
        title: 'My room',
        tip: `For plural things, use **están**: **Los zapatos están debajo de la cama**.`,
        items: [
          'el cuarto | the room | the bedroom | la habitación',
          'el celular | the cell phone | the phone;the cellphone;the mobile phone',
          'la televisión | the television | the TV',
          'el espejo | the mirror',
          'la pared | the wall',
          'Mi celular está al lado de la computadora. | My phone is next to the computer. | My cell phone is next to the computer;My cellphone is next to the computer;My phone\'s next to the computer;My phone is beside the computer',
          'Hay un espejo en la pared. | There is a mirror on the wall. | There\'s a mirror on the wall',
          'Los zapatos están debajo de la cama. | The shoes are under the bed. | The shoes are underneath the bed',
          'La televisión está en la sala. | The television is in the living room. | The TV is in the living room;The TV\'s in the living room',
          'Mi cuarto es pequeño, pero bonito. | My room is small, but nice. | My room is small but nice;My room is small, but pretty;My room is small but pretty;My bedroom is small, but nice;My bedroom is small but nice;My bedroom is small but pretty | Mi dormitorio es pequeño, pero bonito.',
        ],
      },
    ],
    story: {
      title: 'Mi apartamento nuevo',
      lines: [
        'Elena: ¡Hola, Marta! Este es mi apartamento nuevo. | Hi, Marta! This is my new apartment.',
        'Marta: ¡Qué bonito! ¿Cuántos dormitorios hay? | How pretty! How many bedrooms are there?',
        'Elena: Hay dos dormitorios y un baño. | There are two bedrooms and one bathroom.',
        'Marta: ¿Y la cocina? | And the kitchen?',
        'Elena: La cocina es pequeña, pero hay una mesa y cuatro sillas. | The kitchen is small, but there is a table and four chairs.',
        'Marta: ¿Dónde está tu gato? | Where is your cat?',
        'Elena: Está debajo del sofá, en la sala. | It is under the sofa, in the living room.',
      ],
      questions: [
        { q: 'How many bedrooms are there?', options: ['Two', 'One', 'Three'], answer: 0 },
        { q: 'What is the kitchen like?', options: ['Small', 'Big', 'Very expensive'], answer: 0 },
        { q: 'Where is the cat?', options: ['Under the sofa', 'On the bed', 'In the kitchen'], answer: 0 },
      ],
    },
  }),

  unit(1, {
    id: 'u12-weather',
    title: 'Weather & seasons',
    emoji: '☀️',
    description: 'Talk about the weather, the seasons and the months.',
    lessons: [
      {
        title: 'Hot & cold',
        tip: `Weather often uses **hace** (literally "it makes"):
- **hace calor** = it's hot · **hace frío** = it's cold
Use **mucho**, not muy: **hace mucho calor** = it's very hot.
For people, use tener: **Tengo frío** = I'm cold.`,
        items: [
          '¿Qué tiempo hace? | What is the weather like? | What\'s the weather like;How is the weather;How\'s the weather',
          'hace calor | it is hot | it\'s hot',
          'hace frío | it is cold | it\'s cold',
          'hace sol | it is sunny | it\'s sunny',
          'hace viento | it is windy | it\'s windy',
          'hace buen tiempo | the weather is nice | the weather is good;the weather\'s nice;it\'s nice out;it is nice out;it\'s nice weather',
          'Hoy hace mucho calor. | It is very hot today. | It\'s very hot today;Today it is very hot;Today it\'s very hot;It\'s really hot today',
          'Hace frío en la mañana. | It is cold in the morning. | It\'s cold in the morning;In the morning it is cold;In the morning it\'s cold | Hace frío por la mañana.',
          'Tengo frío. | I am cold. | I\'m cold',
        ],
      },
      {
        title: 'Rain & snow',
        tip: `- **llueve** = it rains, it's raining · **la lluvia** = the rain
- **nieva** = it snows, it's snowing · **la nieve** = the snow
- **está nublado** = it's cloudy (a state, so **estar**)`,
        items: [
          'llueve | it rains | it is raining;it\'s raining',
          'nieva | it snows | it is snowing;it\'s snowing',
          'está nublado | it is cloudy | it\'s cloudy',
          'la lluvia | the rain | rain',
          'la nieve | the snow | snow',
          'Hoy llueve mucho. | It is raining a lot today. | It\'s raining a lot today;It rains a lot today;Today it is raining a lot;Today it\'s raining a lot;It\'s raining hard today',
          '¿Nieva en tu ciudad? | Does it snow in your city? | Is it snowing in your city',
          'No llueve hoy. | It is not raining today. | It isn\'t raining today;It\'s not raining today;It doesn\'t rain today | Hoy no llueve.',
          'Está nublado y hace frío. | It is cloudy and cold. | It\'s cloudy and cold;It is cloudy and it is cold;It\'s cloudy and it\'s cold',
          'Necesito un paraguas. | I need an umbrella.',
        ],
      },
      {
        title: 'Seasons',
        tip: `**en** + season = in that season: **en verano** = in summer.
South of the equator, the seasons are reversed: in Argentina and Chile, **diciembre** is summer!`,
        items: [
          'la primavera | spring | the spring',
          'el verano | summer | the summer',
          'el otoño | fall | autumn;the fall;the autumn',
          'el invierno | winter | the winter',
          'la estación | the season',
          'En verano hace mucho calor. | In summer it is very hot. | In summer it\'s very hot;In the summer it is very hot;In the summer it\'s very hot;It is very hot in summer;It\'s very hot in summer;It\'s very hot in the summer;It is very hot in the summer',
          'En invierno nieva. | It snows in winter. | It snows in the winter;In winter it snows;In the winter it snows',
          'Me gusta la primavera. | I like spring. | I like the spring',
          '¿Te gusta el otoño? | Do you like fall? | Do you like autumn;Do you like the fall;Do you like the autumn',
        ],
      },
      {
        title: 'January to June',
        tip: `Months are **not** capitalized in Spanish.
- **en enero** = in January
- Dates: **el cinco de mayo** = May fifth (literally "the five of May")`,
        items: [
          'enero | January',
          'febrero | February',
          'marzo | March',
          'abril | April',
          'mayo | May',
          'junio | June',
          'el mes | the month',
          'Mi cumpleaños es en abril. | My birthday is in April. | My birthday\'s in April',
          'Hace frío en enero. | It is cold in January. | It\'s cold in January;In January it is cold;In January it\'s cold',
          'Hoy es el cinco de mayo. | Today is May fifth. | Today is the fifth of May;Today is May 5th;Today is May 5;It\'s May fifth today;It is May fifth today',
        ],
      },
      {
        title: 'July to December',
        tip: `**¿Cuándo?** = When?
**¿Cuándo es tu cumpleaños?** = When is your birthday?
You'll also see **setiembre** for September in some countries.`,
        items: [
          'julio | July',
          'agosto | August',
          'septiembre | September | | setiembre',
          'octubre | October',
          'noviembre | November',
          'diciembre | December',
          '¿Qué fecha es hoy? | What is the date today? | What\'s the date today;What is today\'s date;What\'s today\'s date',
          '¿Cuándo es tu cumpleaños? | When is your birthday? | When\'s your birthday',
          'Mi cumpleaños es el diez de julio. | My birthday is July tenth. | My birthday is on July tenth;My birthday is the tenth of July;My birthday is on the tenth of July;My birthday is July 10th;My birthday is July 10;My birthday is on July 10th',
          'En diciembre llueve mucho. | It rains a lot in December. | In December it rains a lot',
        ],
      },
    ],
    story: {
      title: '¿Qué tiempo hace?',
      lines: [
        'Paula: Hola, Diego. ¿Qué tiempo hace en Buenos Aires? | Hi, Diego. What is the weather like in Buenos Aires?',
        'Diego: Hace frío. ¡Es julio, es invierno aquí! | It\'s cold. It\'s July, it\'s winter here!',
        'Paula: Aquí en México hace calor y llueve mucho. | Here in Mexico it\'s hot and it rains a lot.',
        'Diego: ¿Llueve? ¿Necesitas un paraguas? | It\'s raining? Do you need an umbrella?',
        'Paula: Sí, y llevo una chaqueta amarilla. | Yes, and I\'m wearing a yellow jacket.',
        'Diego: Aquí está nublado, pero no nieva. | Here it\'s cloudy, but it\'s not snowing.',
        'Paula: ¡Qué bonito! Me gusta el frío. | How nice! I like the cold.',
      ],
      questions: [
        { q: 'What season is it in Buenos Aires?', options: ['Winter', 'Summer', 'Spring'], answer: 0 },
        { q: 'What is the weather like in Mexico?', options: ['Hot and rainy', 'Cold and snowy', 'Cloudy and windy'], answer: 0 },
        { q: 'What is Paula wearing?', options: ['A yellow jacket', 'A red dress', 'A black hat'], answer: 0 },
      ],
    },
  }),
]
