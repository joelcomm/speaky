import { unit } from './build'

// Section 2 (A2) — units 13–22. Latin American Spanish: "ustedes" for plural you, no "vosotros".
export default [
  unit(2, {
    id: 'u13-hobbies',
    title: 'Likes & hobbies',
    emoji: '⚽',
    description: 'Say what you and others like with "gustar" and "encantar".',
    lessons: [
      {
        title: 'I like it',
        tip: `**gustar** means "to please". The thing you like is the subject.
- **me gusta**: I like · **te gusta**: you like
- **le gusta**: he / she likes, you (formal) like
Add **a él / a ella** to make it clear who: **A ella le gusta bailar**.
Before an action, use the infinitive: **Me gusta leer**.`,
        items: [
          'me gusta | I like | I like it',
          'te gusta | you like | you like it',
          'le gusta | he likes | she likes;you like;he likes it;she likes it',
          'la música | music | the music',
          'bailar | to dance | dance;dancing',
          'Me gusta la música. | I like music. | I like the music',
          '¿Te gusta el fútbol? | Do you like soccer? | Do you like football',
          'A ella le gusta bailar. | She likes to dance. | She likes dancing | Le gusta bailar',
          'A él le gusta leer. | He likes to read. | He likes reading | Le gusta leer',
          'No me gusta cocinar. | I do not like to cook. | I don\'t like to cook;I don\'t like cooking;I do not like cooking',
        ],
      },
      {
        title: 'We like, they like',
        tip: `- **nos gusta**: we like
- **les gusta**: they like, you all like
Use **gustan** when the thing you like is plural:
- **Me gusta el perro** · **Me gustan los perros**`,
        items: [
          'nos gusta | we like | we like it',
          'les gusta | they like | you all like;they like it',
          'me gustan | I like | I like them;I like (plural)',
          'el cine | the movies | the cinema;the movie theater',
          'la película | the movie | the film',
          'Me gustan los perros. | I like dogs. | I like the dogs',
          'Nos gusta la playa. | We like the beach.',
          'A ellos les gustan los libros. | They like books. | They like the books | Les gustan los libros',
          '¿A ustedes les gusta el cine? | Do you all like the movies? | Do you like the movies;Do you all like movies;Do you like movies;Do you like the cinema | ¿Les gusta el cine?',
          '¿Te gustan las películas de terror? | Do you like horror movies? | Do you like horror films;Do you like scary movies',
        ],
      },
      {
        title: 'Sports',
        tip: `"To play" a sport is **jugar a**: **jugar al fútbol**.
In much of Latin America people also drop the **a**: **jugar fútbol**.`,
        items: [
          'el deporte | the sport | sport',
          'el fútbol | soccer | football',
          'el béisbol | baseball',
          'el equipo | the team',
          'nadar | to swim | swim;swimming',
          'correr | to run | run;running',
          'Me gusta jugar al fútbol. | I like to play soccer. | I like playing soccer;I like to play football;I like playing football | Me gusta jugar fútbol',
          '¿Qué deporte te gusta? | What sport do you like? | Which sport do you like',
          'Mi hermano nada en la piscina. | My brother swims in the pool. | My brother is swimming in the pool;My brother swims in the swimming pool | Mi hermano nada en la alberca',
          'Corremos en el parque los sábados. | We run in the park on Saturdays. | We run in the park every Saturday',
        ],
      },
      {
        title: 'I love it',
        tip: `**encantar** works just like gustar, but stronger:
- **Me encanta la pizza** = I love pizza
- **Nos encantan los gatos** = we love cats
Agree or disagree with **a mí también** (me too), **a mí tampoco** (me neither), **a mí no** (not me).`,
        items: [
          'me encanta | I love | I love it;I really like',
          'cantar | to sing | sing;singing',
          'la guitarra | the guitar | guitar',
          'Me encanta la pizza. | I love pizza. | I really like pizza',
          'Nos encantan los gatos. | We love cats. | We really like cats',
          'Le encanta cantar. | She loves to sing. | He loves to sing;She loves singing;He loves singing;You love to sing',
          'Me encanta tocar la guitarra. | I love to play the guitar. | I love playing the guitar;I love playing guitar;I love to play guitar',
          'A mí también. | Me too. | Me as well;So do I',
          'A mí tampoco. | Me neither. | Neither do I;Me either',
          'A mí no. | Not me. | I don\'t',
        ],
      },
      {
        title: 'Free time',
        items: [
          'el tiempo libre | free time | the free time;spare time',
          'el fin de semana | the weekend | weekend',
          'los videojuegos | video games | the video games;videogames',
          'pintar | to paint | paint;painting',
          'escuchar música | to listen to music | listen to music;listening to music',
          '¿Qué te gusta hacer? | What do you like to do? | What do you like doing',
          'En mi tiempo libre, leo libros. | In my free time, I read books. | In my free time I read books;In my spare time I read books;In my spare time, I read books',
          'Los fines de semana veo películas. | On weekends I watch movies. | On the weekends I watch movies;I watch movies on weekends;On weekends I watch films;On weekends, I watch movies',
          'A mis padres les gusta caminar. | My parents like to walk. | My parents like walking;My parents like to go for walks',
          'A mi hermana le gustan los videojuegos. | My sister likes video games. | My sister likes videogames',
        ],
      },
    ],
    story: {
      title: '¿Qué te gusta hacer?',
      lines: [
        'Diego: Camila, ¿qué te gusta hacer en tu tiempo libre? | Camila, what do you like to do in your free time?',
        'Camila: Me encanta bailar. ¿Y a ti? | I love to dance. And you?',
        'Diego: A mí no me gusta bailar. Me gusta jugar al fútbol. | I don\'t like dancing. I like playing soccer.',
        'Camila: ¿Juegas con un equipo? | Do you play with a team?',
        'Diego: Sí, jugamos los sábados en el parque. | Yes, we play on Saturdays in the park.',
        'Camila: ¡Qué bien! A mi hermano también le gusta el fútbol. | How nice! My brother also likes soccer.',
        'Diego: ¿Le gusta jugar? ¡Necesitamos un jugador! | Does he like to play? We need a player!',
        'Camila: Sí, le encanta. ¡Voy a hablar con él! | Yes, he loves it. I\'m going to talk to him!',
      ],
      questions: [
        { q: 'What does Camila love to do?', options: ['Dance', 'Play soccer', 'Sing'], answer: 0 },
        { q: "When does Diego's team play?", options: ['On Saturdays', 'On Sundays', 'On Fridays'], answer: 0 },
        { q: 'Who else likes soccer?', options: ["Camila's brother", 'Camila', "Diego's sister"], answer: 0 },
      ],
    },
  }),

  unit(2, {
    id: 'u14-routine',
    title: 'Daily routine',
    emoji: '⏰',
    description: 'Describe your day with reflexive verbs like "levantarse".',
    lessons: [
      {
        title: 'I get up',
        tip: `Reflexive verbs describe things you do to yourself. They come with a little pronoun:
- **me** levanto: I get up
- **te** levantas: you get up
- **se** levanta: he / she gets up
- **nos** levantamos: we get up
- **se** levantan: they / you all get up`,
        items: [
          'me levanto | I get up | I\'m getting up;I am getting up',
          'te levantas | you get up | you are getting up',
          'se levanta | he gets up | she gets up;you get up',
          'temprano | early',
          'tarde | late',
          'Me levanto a las siete. | I get up at seven. | I get up at seven o\'clock',
          '¿A qué hora te levantas? | What time do you get up? | At what time do you get up',
          'Mi papá se levanta temprano. | My dad gets up early. | My father gets up early',
          'Nos levantamos tarde los domingos. | We get up late on Sundays.',
        ],
      },
      {
        title: 'Washing up',
        tip: `With body parts, Spanish uses **el / la / los / las**, not "my":
**Me lavo las manos** = I wash my hands.
In much of Latin America, **bañarse** is used for showering too.`,
        items: [
          'me ducho | I shower | I take a shower;I\'m showering;I am showering;I\'m taking a shower;I am taking a shower',
          'se baña | he bathes | she bathes;he takes a bath;she takes a bath;he showers;she showers',
          'el jabón | the soap | soap',
          'la toalla | the towel',
          'el espejo | the mirror',
          'Me ducho por la mañana. | I shower in the morning. | I take a shower in the morning | Me ducho en la mañana',
          '¿Te duchas por la noche? | Do you shower at night? | Do you take a shower at night | ¿Te duchas en la noche?',
          'Me lavo las manos. | I wash my hands. | I am washing my hands;I\'m washing my hands',
          'Me cepillo los dientes. | I brush my teeth. | I am brushing my teeth;I\'m brushing my teeth | Me lavo los dientes',
          'Ella se lava la cara. | She washes her face. | She is washing her face;She\'s washing her face',
        ],
      },
      {
        title: 'Getting dressed',
        tip: `**vestirse** (to get dressed) changes **e → i**:
- me **visto** · te **vistes** · se **viste**
**ponerse** = to put on: **me pongo** (irregular "yo" form).`,
        items: [
          'me visto | I get dressed | I\'m getting dressed;I am getting dressed;I dress',
          'se viste | he gets dressed | she gets dressed;you get dressed',
          'me pongo | I put on | I\'m putting on;I am putting on',
          'me peino | I comb my hair | I brush my hair;I do my hair',
          'Me visto rápido. | I get dressed quickly. | I get dressed fast;I dress quickly',
          'Me pongo los zapatos. | I put on my shoes. | I put my shoes on;I\'m putting on my shoes;I am putting on my shoes',
          'Ella se pone un vestido rojo. | She puts on a red dress. | She is putting on a red dress;She\'s putting on a red dress',
          'Mi hermano se viste en su cuarto. | My brother gets dressed in his room. | My brother is getting dressed in his room;My brother gets dressed in his bedroom | Mi hermano se viste en su habitación;Mi hermano se viste en su recámara',
          'Me peino frente al espejo. | I comb my hair in front of the mirror. | I brush my hair in front of the mirror;I do my hair in front of the mirror',
        ],
      },
      {
        title: 'Bedtime',
        tip: `Some reflexive verbs change their stem:
- despertarse → me **despierto** (I wake up)
- acostarse → me **acuesto** (I go to bed)
You'll learn the full pattern in Unit 20.`,
        items: [
          'me despierto | I wake up | I\'m waking up;I am waking up',
          'me acuesto | I go to bed | I\'m going to bed;I am going to bed',
          'la cama | the bed',
          'cansado | tired',
          'Me despierto a las seis. | I wake up at six. | I wake up at six o\'clock',
          'Me acuesto a las once. | I go to bed at eleven. | I go to bed at eleven o\'clock',
          '¿A qué hora te acuestas? | What time do you go to bed? | At what time do you go to bed',
          'Los niños se acuestan a las ocho. | The children go to bed at eight. | The kids go to bed at eight;The children go to bed at eight o\'clock',
          'Estoy cansada, así que me acuesto. | I am tired, so I am going to bed. | I\'m tired, so I\'m going to bed;I am tired, so I go to bed;I\'m tired, so I go to bed;I am tired so I am going to bed',
          'Me despierto, pero no me levanto. | I wake up, but I do not get up. | I wake up but I don\'t get up;I wake up, but I don\'t get up;I wake up but I do not get up',
        ],
      },
      {
        title: 'Every day',
        tip: `- **todos los días**: every day
- **siempre**: always · **nunca**: never · **a veces**: sometimes
- **primero… después…**: first… then…
After **antes de** (before) and **después de** (after), use the infinitive: **antes de dormir**.`,
        items: [
          'todos los días | every day | each day',
          'siempre | always',
          'nunca | never',
          'a veces | sometimes',
          'después | after | afterwards;then;later',
          'Siempre me levanto temprano. | I always get up early.',
          'Nunca desayuno. | I never eat breakfast. | I never have breakfast',
          'Primero me ducho y después me visto. | First I shower and then I get dressed. | First I shower, then I get dressed;First I take a shower and then I get dressed;First I shower and after that I get dressed;First I shower and then I dress',
          'A veces me acuesto muy tarde. | Sometimes I go to bed very late.',
          'Me cepillo los dientes antes de dormir. | I brush my teeth before sleeping. | I brush my teeth before bed;I brush my teeth before going to sleep;I brush my teeth before I sleep;I brush my teeth before I go to sleep;I brush my teeth before going to bed',
        ],
      },
    ],
    story: {
      title: 'Mi día',
      lines: [
        'Andrés: Me despierto a las seis todos los días. | I wake up at six every day.',
        'Andrés: Pero no me levanto hasta las seis y media. | But I don\'t get up until six thirty.',
        'Andrés: Primero me ducho y me cepillo los dientes. | First I shower and brush my teeth.',
        'Andrés: Después me visto y desayuno café con pan. | Then I get dressed and have coffee and bread for breakfast.',
        'Andrés: Voy al trabajo a las ocho. | I go to work at eight.',
        'Andrés: Por la noche, ceno con mi familia. | At night, I have dinner with my family.',
        'Andrés: Siempre me acuesto a las diez. ¡Estoy muy cansado! | I always go to bed at ten. I am very tired!',
      ],
      questions: [
        { q: 'What time does Andrés get up?', options: ['Six thirty', 'Six', 'Eight'], answer: 0 },
        { q: 'What does he have for breakfast?', options: ['Coffee and bread', 'Rice and chicken', 'Nothing'], answer: 0 },
        { q: 'What time does he go to bed?', options: ['Ten', 'Eleven', 'Eight'], answer: 0 },
      ],
    },
  }),

  unit(2, {
    id: 'u15-plans',
    title: 'Making plans',
    emoji: '📅',
    description: 'Talk about the future, what you have to do, and invite friends.',
    lessons: [
      {
        title: "I'm going to…",
        tip: `**ir a + infinitive** = going to (do something).
- **Voy a comer** = I'm going to eat
- **¿Qué vas a hacer?** = What are you going to do?
**Vamos a…** can also mean "Let's…".`,
        items: [
          'voy a | I am going to | I\'m going to',
          'esta noche | tonight | this evening',
          'la próxima semana | next week | the next week',
          'Voy a estudiar. | I am going to study. | I\'m going to study',
          'Vamos a comer. | We are going to eat. | We\'re going to eat;Let\'s eat',
          '¿Qué vas a hacer? | What are you going to do? | What will you do;What are you gonna do',
          'Mañana voy a trabajar. | Tomorrow I am going to work. | Tomorrow I\'m going to work;I\'m going to work tomorrow;I am going to work tomorrow | Voy a trabajar mañana',
          'Ella va a llamar a su mamá. | She is going to call her mom. | She\'s going to call her mom;She is going to call her mother;She\'s going to call her mother',
          'Esta noche vamos a ver una película. | Tonight we are going to watch a movie. | Tonight we\'re going to watch a movie;We are going to watch a movie tonight;We\'re going to watch a movie tonight;Tonight we are going to see a movie;Tonight we\'re going to see a movie | Vamos a ver una película esta noche',
          'Ellos van a viajar la próxima semana. | They are going to travel next week. | They\'re going to travel next week;They are going to take a trip next week;They\'re going to take a trip next week',
        ],
      },
      {
        title: 'I have to',
        tip: `**tener que + infinitive** = to have to.
- **Tengo que trabajar** = I have to work
- **No tengo que…** = I don't have to…`,
        items: [
          'tengo que | I have to | I must;I need to',
          'ocupado | busy',
          'Tengo que trabajar. | I have to work. | I must work;I need to work',
          'Tienes que estudiar. | You have to study. | You must study;You need to study',
          'Tenemos que comprar leche. | We have to buy milk. | We need to buy milk;We must buy milk',
          '¿Qué tienes que hacer hoy? | What do you have to do today? | What do you need to do today',
          'Él tiene que limpiar la casa. | He has to clean the house. | He must clean the house;He needs to clean the house',
          'No tengo que ir a la escuela mañana. | I do not have to go to school tomorrow. | I don\'t have to go to school tomorrow',
          'Estoy ocupada hoy. | I am busy today. | I\'m busy today | Hoy estoy ocupada',
        ],
      },
      {
        title: 'I want to, I can',
        tip: `Put an infinitive right after **querer** or **poder**:
- **Quiero ir** = I want to go
- **Puedo ir** = I can go
**poder**: puedo, puedes, puede, podemos, pueden.
**conmigo** = with me · **contigo** = with you.`,
        items: [
          'puedo | I can | I am able to',
          'puedes | you can | you are able to',
          'conmigo | with me',
          'contigo | with you',
          'Quiero ir al cine. | I want to go to the movies. | I want to go to the cinema',
          '¿Puedes venir? | Can you come? | Are you able to come',
          'No puedo, tengo que trabajar. | I can\'t, I have to work. | I cannot, I have to work;I can\'t. I have to work;I can\'t, I need to work',
          '¿Quieres cenar conmigo? | Do you want to have dinner with me? | Do you want to eat dinner with me;Would you like to have dinner with me;Do you want to dine with me',
          'Podemos ir el sábado. | We can go on Saturday. | We can go Saturday',
          'Ellos quieren jugar al fútbol. | They want to play soccer. | They want to play football | Ellos quieren jugar fútbol',
        ],
      },
      {
        title: 'Invitations',
        tip: `Invite with **¿Quieres…?** or the softer **¿Te gustaría…?** (Would you like…?).
- Yes: **¡Claro!** · **¡Me encantaría!**
- No: **Lo siento, no puedo.** · **Otro día.**`,
        items: [
          'la fiesta | the party',
          '¡Claro! | Of course! | Sure',
          '¡Me encantaría! | I would love to! | I\'d love to;I would love that;I\'d love that',
          'Otro día. | Another day. | Some other day;Another time',
          'Lo siento, no puedo. | I am sorry, I can\'t. | I\'m sorry, I can\'t;Sorry, I can\'t;I am sorry, I cannot;I\'m sorry, I cannot',
          '¿Quieres ir a la fiesta? | Do you want to go to the party? | Would you like to go to the party',
          '¿Vamos al parque? | Shall we go to the park? | Should we go to the park;Want to go to the park;Are we going to the park',
          '¡Qué buena idea! | What a good idea! | What a great idea;Good idea;Great idea',
          '¿Te gustaría tomar un café? | Would you like to have a coffee? | Would you like to get a coffee;Would you like a coffee;Would you like to grab a coffee',
          'Gracias por la invitación. | Thanks for the invitation. | Thank you for the invitation;Thanks for inviting me;Thank you for inviting me',
        ],
      },
      {
        title: 'When and where?',
        tip: `**Nos vemos** = see you (literally "we see each other").
**por la tarde** and **en la tarde** both mean "in the afternoon"; **en la** is very common in Latin America.`,
        items: [
          '¿Cuándo? | When?',
          '¿A qué hora? | At what time? | What time',
          'nos vemos | see you | see you then;we\'ll see each other',
          'por la tarde | in the afternoon | in the evening | en la tarde',
          'este fin de semana | this weekend',
          'Nos vemos a las ocho. | See you at eight. | See you at eight o\'clock;We\'ll see each other at eight',
          '¿Dónde nos vemos? | Where shall we meet? | Where do we meet;Where should we meet;Where are we meeting',
          '¿Qué vas a hacer este fin de semana? | What are you going to do this weekend? | What are you doing this weekend;What will you do this weekend',
          'Nos vemos el viernes en el restaurante. | See you on Friday at the restaurant. | See you Friday at the restaurant;We\'ll see each other on Friday at the restaurant;We\'ll meet on Friday at the restaurant',
          'Te llamo mañana. | I will call you tomorrow. | I\'ll call you tomorrow;I call you tomorrow',
        ],
      },
    ],
    story: {
      title: '¿Quieres venir?',
      lines: [
        'Tomás: Hola, Sara. ¿Qué vas a hacer el sábado? | Hi, Sara. What are you going to do on Saturday?',
        'Sara: Por la mañana tengo que trabajar. ¿Por qué? | In the morning I have to work. Why?',
        'Tomás: Voy a ir al cine con unos amigos. ¿Quieres venir? | I\'m going to go to the movies with some friends. Do you want to come?',
        'Sara: ¡Me encantaría! ¿A qué hora? | I\'d love to! At what time?',
        'Tomás: La película es a las cinco. | The movie is at five.',
        'Sara: Perfecto. Puedo ir después del trabajo. | Perfect. I can go after work.',
        'Tomás: ¡Qué bien! Nos vemos en el cine a las cinco. | Great! See you at the movie theater at five.',
        'Sara: ¡Gracias por la invitación! | Thanks for the invitation!',
      ],
      questions: [
        { q: 'What does Sara have to do on Saturday morning?', options: ['Work', 'Study', 'Clean the house'], answer: 0 },
        { q: 'Where are they going?', options: ['To the movies', 'To a party', 'To the park'], answer: 0 },
        { q: 'What time is the movie?', options: ['Five', 'Eight', 'Seven'], answer: 0 },
      ],
    },
  }),

  unit(2, {
    id: 'u16-shopping',
    title: 'Shopping',
    emoji: '🛍️',
    description: 'Count to a thousand, ask prices, and pick "this one" or "that one".',
    lessons: [
      {
        title: 'Thirty to a hundred',
        tip: `From 31 on, numbers join with **y**: **treinta y uno**, **cuarenta y cinco**.
**cien** = exactly 100.`,
        items: [
          'treinta | thirty',
          'cuarenta | forty',
          'cincuenta | fifty',
          'sesenta | sixty',
          'setenta | seventy',
          'ochenta | eighty',
          'noventa | ninety',
          'cien | one hundred | a hundred;hundred',
          'treinta y cinco | thirty-five | thirty five',
          'Mi abuela tiene ochenta años. | My grandmother is eighty years old. | My grandmother is eighty;My grandma is eighty;My grandma is eighty years old',
        ],
      },
      {
        title: 'Hundreds',
        tip: `- **ciento** + number: **ciento diez** = 110
- **doscientos**, **trescientos**, **cuatrocientos**…
- Watch out: **quinientos** (500), **setecientos** (700), **novecientos** (900)
- **mil** = 1,000 (never "un mil")
Hundreds agree with feminine nouns: **doscientas personas**.`,
        items: [
          'ciento diez | one hundred ten | a hundred and ten;one hundred and ten;a hundred ten',
          'doscientos | two hundred',
          'trescientos | three hundred',
          'quinientos | five hundred',
          'setecientos | seven hundred',
          'novecientos | nine hundred',
          'mil | one thousand | a thousand;thousand',
          'Hay doscientas personas en la fiesta. | There are two hundred people at the party. | There are 200 people at the party',
          'El celular cuesta novecientos dólares. | The cell phone costs nine hundred dollars. | The cellphone costs nine hundred dollars;The phone costs nine hundred dollars;The cell phone costs 900 dollars;The cell phone is nine hundred dollars;The phone is nine hundred dollars',
        ],
      },
      {
        title: 'How much is it?',
        tip: `- **¿Cuánto cuesta?** = How much is it? (one thing)
- **¿Cuánto cuestan?** = How much are they? (plural)
**caro** = expensive · **barato** = cheap. They agree with the noun: **la camisa es cara**.`,
        items: [
          'el precio | the price',
          'el dinero | the money | money',
          'barato | cheap | inexpensive',
          'caro | expensive',
          '¿Cuánto cuesta? | How much is it? | How much does it cost',
          '¿Cuánto cuestan? | How much are they? | How much do they cost',
          '¿Cuánto cuesta la camisa? | How much is the shirt? | How much does the shirt cost',
          'Cuesta cuarenta pesos. | It costs forty pesos. | It is forty pesos;It\'s forty pesos',
          'Los zapatos cuestan setenta dólares. | The shoes cost seventy dollars. | The shoes are seventy dollars',
          '¡Es muy caro! | It is very expensive! | It\'s very expensive;It\'s too expensive;That\'s very expensive',
        ],
      },
      {
        title: 'This one, that one',
        tip: `- **este / esta**: this (near me)
- **ese / esa**: that (near you)
- plural: **estos / estas** (these), **esos / esas** (those)
Match the noun: **esta falda**, **ese sombrero**. On their own they mean "this one" / "that one".`,
        items: [
          'este | this | this one',
          'esta | this | this one',
          'ese | that | that one',
          'esa | that | that one',
          '¿Este o ese? | This one or that one? | This or that',
          'Quiero esta falda. | I want this skirt. | I\'d like this skirt',
          '¿Cuánto cuesta ese sombrero? | How much is that hat? | How much does that hat cost',
          'Estos pantalones son baratos. | These pants are cheap. | These trousers are cheap;These pants are inexpensive',
          'Esas camisas son muy bonitas. | Those shirts are very pretty. | Those shirts are very nice;Those shirts are really pretty',
          'Me gustan esos zapatos negros. | I like those black shoes.',
        ],
      },
      {
        title: 'In the store',
        tip: `**la talla** = clothing size.
**probarse** = to try on: **¿Puedo probarme…?**
**Me lo llevo / Me la llevo** = I'll take it.`,
        items: [
          'la tienda | the store | the shop',
          'la talla | the size | size',
          'mediano | medium',
          'pequeño | small | little | chico',
          '¿Qué talla usa? | What size do you wear? | What size do you take;What size are you',
          '¿Tiene esta camisa en talla mediana? | Do you have this shirt in a medium? | Do you have this shirt in medium;Do you have this shirt in size medium',
          '¿Puedo probarme estos pantalones? | Can I try on these pants? | May I try on these pants;Can I try these pants on;Could I try on these pants | ¿Me puedo probar estos pantalones?',
          'Es demasiado pequeño. | It is too small. | It\'s too small | Es demasiado chico',
          'Me lo llevo. | I will take it. | I\'ll take it',
          'Pago con tarjeta. | I am paying by card. | I\'ll pay by card;I pay by card;I\'m paying by card;I\'ll pay with a card;I pay with a card;I\'m paying with a card',
        ],
      },
    ],
    story: {
      title: 'Una camisa para papá',
      lines: [
        'Vendedora: Buenas tardes. ¿Puedo ayudarle? | Good afternoon. Can I help you?',
        'Lucas: Sí, busco una camisa para mi papá. | Yes, I\'m looking for a shirt for my dad.',
        'Vendedora: ¿Qué talla usa él? | What size does he wear?',
        'Lucas: Talla grande. ¿Cuánto cuesta esta camisa azul? | Large. How much is this blue shirt?',
        'Vendedora: Cuesta ochenta pesos. | It costs eighty pesos.',
        'Lucas: Es un poco cara. ¿Y esa camisa blanca? | It\'s a little expensive. And that white shirt?',
        'Vendedora: Esa cuesta cincuenta pesos. | That one costs fifty pesos.',
        'Lucas: Perfecto, me la llevo. ¿Puedo pagar con tarjeta? | Perfect, I\'ll take it. Can I pay by card?',
        'Vendedora: ¡Claro que sí! | Of course!',
      ],
      questions: [
        { q: 'Who is the shirt for?', options: ["Lucas's dad", "Lucas's brother", 'Lucas himself'], answer: 0 },
        { q: 'How much is the blue shirt?', options: ['Eighty pesos', 'Fifty pesos', 'A hundred pesos'], answer: 0 },
        { q: 'Which shirt does Lucas buy?', options: ['The white one', 'The blue one', 'Neither'], answer: 0 },
      ],
    },
  }),

  unit(2, {
    id: 'u17-restaurant',
    title: 'At the restaurant',
    emoji: '🍽️',
    description: 'Get a table, order politely, and ask for the check.',
    lessons: [
      {
        title: 'A table, please',
        tip: `**el mesero / la mesera** is the usual word for waiter / waitress in Latin America.
**¿Qué me recomienda?** = What do you recommend? (polite, to the waiter).`,
        items: [
          'el mesero | the waiter | the server',
          'la mesera | the waitress | the server',
          'la mesa | the table',
          'el menú | the menu | menu | la carta',
          'reservar | to reserve | reserve;to book;book',
          'Una mesa para dos, por favor. | A table for two, please.',
          '¿Tiene una mesa para cuatro? | Do you have a table for four?',
          'El menú, por favor. | The menu, please. | Menu, please;Can I have the menu, please;Could I have the menu, please | La carta, por favor',
          'Aquí tiene el menú. | Here is the menu. | Here\'s the menu;Here you have the menu',
          '¿Qué me recomienda? | What do you recommend? | What would you recommend',
        ],
      },
      {
        title: 'I would like',
        tip: `**Quisiera** = I would like. It's the most polite way to order.
Other ways to order:
- **Para mí, …** = For me, …
- **¿Me trae…?** = Could you bring me…?
In Latin America, **tomar** often means "to drink".`,
        items: [
          'quisiera | I would like | I\'d like',
          'la sopa | the soup | soup',
          'el pescado | the fish | fish',
          'el vaso | the glass',
          'Quisiera una sopa. | I would like a soup. | I\'d like a soup;I would like soup;I\'d like soup;I would like some soup;I\'d like some soup',
          'Para mí, el pescado. | For me, the fish. | The fish for me;I\'ll have the fish',
          'Quisiera un vaso de agua. | I would like a glass of water. | I\'d like a glass of water',
          '¿Me trae la sal, por favor? | Could you bring me the salt, please? | Can you bring me the salt, please;Will you bring me the salt, please;Could you bring me the salt',
          '¿Y para tomar? | And to drink? | And for drinks;Anything to drink;And what to drink',
          'Para tomar, un jugo de naranja. | To drink, an orange juice. | To drink, orange juice;An orange juice to drink;For drinks, an orange juice;To drink, an orange juice please',
        ],
      },
      {
        title: 'The menu',
        items: [
          'la carne | the meat | meat;the beef',
          'la ensalada | the salad | salad',
          'el postre | the dessert | dessert',
          'las papas fritas | French fries | fries;the fries;the French fries;chips',
          'el plato principal | the main course | main course;the main dish;the entree',
          'la bebida | the drink | the beverage;drink',
          'De postre, quiero un helado. | For dessert, I want an ice cream. | For dessert I want ice cream;For dessert, I want ice cream;For dessert, I want some ice cream;I want ice cream for dessert;I want an ice cream for dessert',
          'La carne viene con ensalada. | The meat comes with salad. | The meat comes with a salad;The beef comes with salad',
          '¿La sopa tiene carne? | Does the soup have meat? | Is there meat in the soup;Does the soup have meat in it',
          'Soy vegetariana. | I am a vegetarian. | I\'m a vegetarian;I am vegetarian;I\'m vegetarian',
        ],
      },
      {
        title: 'The check',
        tip: `- **la cuenta** = the check / bill
- **la propina** = the tip, often about 10% in Latin America
- **Yo invito** = It's my treat
Ask first: **¿Está incluida la propina?**`,
        items: [
          'la cuenta | the check | the bill',
          'la propina | the tip | tip',
          'en efectivo | in cash | cash',
          'La cuenta, por favor. | The check, please. | The bill, please;Check, please;Bill, please',
          '¿Está incluida la propina? | Is the tip included?',
          '¿Puedo pagar en efectivo? | Can I pay in cash? | May I pay in cash;Can I pay cash',
          '¿Cuánto es en total? | How much is it in total? | How much is the total;What is the total;What\'s the total',
          'Dejamos una propina de diez por ciento. | We leave a ten percent tip. | We are leaving a ten percent tip;We\'re leaving a ten percent tip;We leave a 10 percent tip;We leave a 10% tip',
          'Todo está muy rico. | Everything is very tasty. | Everything is really good;Everything is delicious;Everything is very good;Everything is really tasty',
          'Yo invito. | It\'s my treat. | It is my treat;My treat;I\'m paying;I\'ll pay',
        ],
      },
      {
        title: 'At the table',
        tip: `Hunger and thirst use **tener**, not "to be":
- **Tengo hambre** = I'm hungry
- **Tengo sed** = I'm thirsty
**¡Buen provecho!** is what you say to people who are eating.`,
        items: [
          'el tenedor | the fork',
          'el cuchillo | the knife',
          'la cuchara | the spoon',
          'la servilleta | the napkin',
          '¡Buen provecho! | Enjoy your meal! | Bon appétit;Enjoy your food;Enjoy',
          'Tengo mucha hambre. | I am very hungry. | I\'m very hungry;I\'m really hungry;I am really hungry',
          'Tengo sed. | I am thirsty. | I\'m thirsty',
          'Necesito una cuchara, por favor. | I need a spoon, please.',
          '¿Me trae otro tenedor? | Could you bring me another fork? | Can you bring me another fork;Will you bring me another fork',
          'La sopa está fría. | The soup is cold.',
        ],
      },
    ],
    story: {
      title: 'Yo invito',
      lines: [
        'Mesero: Buenas noches. ¿Mesa para dos? | Good evening. Table for two?',
        'Daniela: Sí, por favor. ¿Nos trae el menú? | Yes, please. Could you bring us the menu?',
        'Mesero: Aquí tienen. ¿Qué van a tomar? | Here you go. What are you going to drink?',
        'Pablo: Para mí, un jugo de naranja. Y quisiera la sopa de pollo. | For me, an orange juice. And I would like the chicken soup.',
        'Daniela: Yo quisiera el pescado con ensalada. | I would like the fish with salad.',
        'Mesero: Muy bien. ¿Y de postre? | Very good. And for dessert?',
        'Daniela: Un helado de chocolate para los dos. | A chocolate ice cream for the two of us.',
        'Pablo: Y después, la cuenta, por favor. ¡Hoy yo invito! | And afterwards, the check, please. Today it\'s my treat!',
      ],
      questions: [
        { q: 'What does Pablo drink?', options: ['Orange juice', 'Water', 'Coffee'], answer: 0 },
        { q: 'What does Daniela order?', options: ['Fish with salad', 'Chicken soup', 'Meat with fries'], answer: 0 },
        { q: 'Who is paying?', options: ['Pablo', 'Daniela', 'They split the check'], answer: 0 },
      ],
    },
  }),

  unit(2, {
    id: 'u18-health',
    title: 'Health & body',
    emoji: '🩺',
    description: 'Name body parts, say what hurts, and visit the doctor.',
    lessons: [
      {
        title: 'The body',
        tip: `**la mano** (the hand) is feminine even though it ends in **-o**.
Spanish uses **el / la** with body parts where English uses "my / her": **Ella tiene el pelo largo**.`,
        items: [
          'el cuerpo | the body',
          'la cabeza | the head',
          'el brazo | the arm',
          'la pierna | the leg',
          'la mano | the hand',
          'el pie | the foot',
          'el estómago | the stomach',
          'la espalda | the back',
          'Tengo los pies grandes. | I have big feet. | My feet are big',
          'Ella tiene el pelo largo. | She has long hair. | Her hair is long | Ella tiene el cabello largo',
        ],
      },
      {
        title: 'The face',
        items: [
          'la cara | the face',
          'los ojos | the eyes | eyes',
          'la nariz | the nose',
          'la boca | the mouth',
          'las orejas | the ears | ears',
          'los dientes | the teeth | teeth',
          'la garganta | the throat',
          'Mi hijo tiene los ojos azules. | My son has blue eyes. | My son\'s eyes are blue',
          'El bebé tiene una nariz pequeña. | The baby has a small nose. | The baby has a little nose',
          'Abra la boca, por favor. | Open your mouth, please. | Please open your mouth',
        ],
      },
      {
        title: 'It hurts',
        tip: `**doler** (to hurt) works like gustar:
- **Me duele la cabeza** = my head hurts
- **Me duelen los pies** = my feet hurt (plural)
- **¿Qué te duele?** = What hurts?`,
        items: [
          'me duele | it hurts | it hurts me',
          'el dolor | the pain | pain;the ache',
          'Me duele la cabeza. | My head hurts. | I have a headache',
          'Me duele el estómago. | My stomach hurts. | I have a stomachache;I have a stomach ache',
          'Me duelen los pies. | My feet hurt.',
          '¿Qué te duele? | What hurts? | Where does it hurt;What hurts you',
          'Le duele la espalda. | His back hurts. | Her back hurts;Your back hurts;He has a backache;She has a backache',
          'A mi hija le duele la garganta. | My daughter has a sore throat. | My daughter\'s throat hurts',
          '¿Te duelen los ojos? | Do your eyes hurt?',
        ],
      },
      {
        title: 'I feel sick',
        tip: `- **Estoy enfermo / enferma** = I'm sick
- Use **tener** for symptoms: **Tengo fiebre**, **Tengo tos**, **Tengo gripe**
- **Me siento bien / mal / mejor** = I feel good / bad / better`,
        items: [
          'enfermo | sick | ill',
          'la fiebre | the fever | fever',
          'la tos | the cough | cough',
          'la gripe | the flu | flu | la gripa',
          'el resfriado | the cold | a cold',
          'Estoy enferma. | I am sick. | I\'m sick;I am ill;I\'m ill',
          'Tengo fiebre y tos. | I have a fever and a cough. | I have fever and cough;I\'ve got a fever and a cough;I have a fever and cough',
          'Mi papá tiene gripe. | My dad has the flu. | My father has the flu;My dad has flu | Mi papá tiene gripa',
          'No me siento bien. | I do not feel well. | I don\'t feel well;I don\'t feel good;I do not feel good',
          'Me siento mejor hoy. | I feel better today. | I\'m feeling better today;I am feeling better today | Hoy me siento mejor',
        ],
      },
      {
        title: 'Doctor & pharmacy',
        tip: `Doctors give instructions with polite **usted** commands:
- **Tome** = take · **Abra** = open · **Descanse** = rest
**la cita** = the appointment.`,
        items: [
          'el médico | the doctor | | el doctor',
          'la farmacia | the pharmacy | the drugstore',
          'el hospital | the hospital',
          'la medicina | the medicine | medicine | el medicamento',
          'la pastilla | the pill | the tablet',
          'Necesito ir al médico. | I need to go to the doctor. | I have to go to the doctor | Necesito ir al doctor',
          'Tengo una cita con el médico. | I have an appointment with the doctor. | I have a doctor\'s appointment | Tengo una cita con el doctor',
          'Tome una pastilla cada ocho horas. | Take one pill every eight hours. | Take a pill every eight hours;Take one tablet every eight hours;Take a tablet every eight hours',
          '¿Dónde hay una farmacia? | Where is there a pharmacy? | Where is a pharmacy;Where\'s a pharmacy;Where can I find a pharmacy;Where is there a drugstore',
          'Tiene que descansar. | You have to rest. | You need to rest;You must rest;He has to rest;She has to rest',
        ],
      },
    ],
    story: {
      title: 'En el consultorio',
      lines: [
        'Doctora: Buenos días, Javier. ¿Qué le duele? | Good morning, Javier. What hurts?',
        'Javier: Me duele mucho la garganta. Y tengo tos. | My throat hurts a lot. And I have a cough.',
        'Doctora: ¿Tiene fiebre? | Do you have a fever?',
        'Javier: Sí, un poco. No me siento bien. | Yes, a little. I don\'t feel well.',
        'Doctora: Abra la boca, por favor. Usted tiene gripe. | Open your mouth, please. You have the flu.',
        'Javier: ¿Necesito medicina? | Do I need medicine?',
        'Doctora: Sí. Tome una pastilla cada ocho horas y descanse mucho. | Yes. Take one pill every eight hours and rest a lot.',
        'Javier: Gracias, doctora. Voy a la farmacia ahora. | Thank you, doctor. I\'m going to the pharmacy now.',
      ],
      questions: [
        { q: 'What hurts Javier?', options: ['His throat', 'His head', 'His back'], answer: 0 },
        { q: 'What does the doctor say he has?', options: ['The flu', 'A broken arm', 'A stomachache'], answer: 0 },
        { q: 'How often should he take a pill?', options: ['Every eight hours', 'Every hour', 'Once a day'], answer: 0 },
      ],
    },
  }),

  unit(2, {
    id: 'u19-travel',
    title: 'Travel',
    emoji: '✈️',
    description: 'Get through the airport, buy tickets, and check into a hotel.',
    lessons: [
      {
        title: 'At the airport',
        tip: `- **salir** = to leave: **el vuelo sale** = the flight leaves
- **llegar** = to arrive: **el avión llega** = the plane arrives
**Su pasaporte** = your passport (polite).`,
        items: [
          'el aeropuerto | the airport',
          'el avión | the plane | the airplane;the aeroplane',
          'el vuelo | the flight',
          'el pasaporte | the passport',
          'la maleta | the suitcase | the bag;the luggage',
          'Su pasaporte, por favor. | Your passport, please.',
          'Tengo dos maletas. | I have two suitcases. | I have two bags',
          'Mi vuelo sale a las diez. | My flight leaves at ten. | My flight departs at ten;My flight leaves at ten o\'clock',
          'El avión llega a las tres. | The plane arrives at three. | The plane lands at three;The airplane arrives at three',
          '¿Dónde está la puerta doce? | Where is gate twelve? | Where\'s gate twelve;Where is gate 12',
        ],
      },
      {
        title: 'Bus & train',
        tip: `Use **en** for transportation: **en tren**, **en autobús**, **en taxi** = by train, by bus, by taxi.
Words vary by country: the bus is **el camión** in Mexico and **el colectivo** in Argentina.
**de ida y vuelta** = round-trip.`,
        items: [
          'el autobús | the bus | | el camión;el colectivo',
          'el tren | the train',
          'la estación | the station',
          'el boleto | the ticket | | el pasaje',
          'de ida y vuelta | round-trip | round trip;return',
          '¿A qué hora sale el tren? | What time does the train leave? | At what time does the train leave;When does the train leave',
          'Un boleto para Lima, por favor. | A ticket to Lima, please. | One ticket to Lima, please;A ticket for Lima, please | Un pasaje para Lima, por favor',
          '¿Este autobús va al centro? | Does this bus go downtown? | Does this bus go to the center;Does this bus go to the city center;Is this bus going downtown | ¿Este camión va al centro?',
          'Vamos a la estación en taxi. | We are going to the station by taxi. | We\'re going to the station by taxi;We go to the station by taxi;We\'re going to the station by cab;Let\'s go to the station by taxi',
        ],
      },
      {
        title: 'Trips',
        tip: `**el mapa** is masculine even though it ends in **-a**.
**conocer** + a place = to visit it for the first time, to get to know it.
**estar de vacaciones** = to be on vacation.`,
        items: [
          'el viaje | the trip | the journey',
          'viajar | to travel | travel',
          'las vacaciones | the vacation | vacation;the holidays;holiday',
          'el mapa | the map',
          'las montañas | the mountains | mountains',
          '¡Buen viaje! | Have a good trip! | Have a nice trip;Bon voyage;Good trip',
          'Estoy de vacaciones. | I am on vacation. | I\'m on vacation;I am on holiday;I\'m on holiday',
          'Quiero conocer México. | I want to visit Mexico. | I want to get to know Mexico;I want to see Mexico',
          'Necesito un mapa de la ciudad. | I need a map of the city. | I need a city map',
          'Vamos a viajar a Colombia en julio. | We are going to travel to Colombia in July. | We\'re going to travel to Colombia in July;We\'re going to Colombia in July;We are going to Colombia in July',
        ],
      },
      {
        title: 'At the hotel',
        tip: `**la reservación** is common in Latin America; **la reserva** is also correct.
**la habitación** = hotel room. **sencilla** = single, **doble** = double.`,
        items: [
          'la habitación | the room | the hotel room;the bedroom | el cuarto',
          'la reservación | the reservation | the booking | la reserva',
          'la llave | the key',
          'Tengo una reservación. | I have a reservation. | I have a booking | Tengo una reserva',
          'Quisiera una habitación doble. | I would like a double room. | I\'d like a double room',
          '¿Para cuántas noches? | For how many nights? | How many nights | ¿Por cuántas noches?',
          'Para tres noches. | For three nights. | Three nights | Por tres noches',
          '¿El desayuno está incluido? | Is breakfast included? | Is the breakfast included | ¿Está incluido el desayuno?',
          'Aquí está su llave. | Here is your key. | Here\'s your key',
          'La habitación tiene baño privado. | The room has a private bathroom. | The room has its own bathroom;The room has a private bath',
        ],
      },
      {
        title: 'Getting around',
        tip: `**¿Cómo llego a…?** = How do I get to…?
In Latin America, **tomar** is the verb for taking transportation: **tomar el metro**, **tomar el autobús**.`,
        items: [
          'perdido | lost',
          'el museo | the museum',
          'el centro | downtown | the center;the city center;the town center',
          'el metro | the subway | the metro;the underground',
          'la parada | the stop | the bus stop',
          'Estoy perdido. | I am lost. | I\'m lost | Estoy perdida',
          '¿Cómo llego al museo? | How do I get to the museum? | How can I get to the museum',
          '¿Está lejos de aquí? | Is it far from here?',
          'Puede tomar el metro. | You can take the subway. | You can take the metro;You can take the underground',
          'La parada está en la esquina. | The stop is on the corner. | The stop is at the corner;The bus stop is on the corner;The bus stop is at the corner',
        ],
      },
    ],
    story: {
      title: 'En el hotel',
      lines: [
        'Recepcionista: Buenas noches. Bienvenida al hotel Mar Azul. | Good evening. Welcome to the Hotel Mar Azul.',
        'Elena: Buenas noches. Tengo una reservación a nombre de Elena Ruiz. | Good evening. I have a reservation under the name Elena Ruiz.',
        'Recepcionista: Sí, una habitación sencilla para tres noches. ¿Su pasaporte, por favor? | Yes, a single room for three nights. Your passport, please?',
        'Elena: Aquí está. ¿El desayuno está incluido? | Here it is. Is breakfast included?',
        'Recepcionista: Sí, el desayuno es de siete a diez. | Yes, breakfast is from seven to ten.',
        'Elena: Perfecto. Mañana quiero ir al museo. ¿Está lejos? | Perfect. Tomorrow I want to go to the museum. Is it far?',
        'Recepcionista: No, puede tomar el autobús. La parada está en la esquina. | No, you can take the bus. The stop is on the corner.',
        'Recepcionista: Aquí está su llave. Habitación cuarenta y dos. | Here is your key. Room forty-two.',
      ],
      questions: [
        { q: 'How many nights is Elena staying?', options: ['Three', 'Two', 'Four'], answer: 0 },
        { q: 'When is breakfast?', options: ['From seven to ten', 'From six to nine', "It isn't included"], answer: 0 },
        { q: 'What is her room number?', options: ['Forty-two', 'Twelve', 'Twenty-four'], answer: 0 },
      ],
    },
  }),

  unit(2, {
    id: 'u20-stem-change',
    title: 'Changing verbs',
    emoji: '🔄',
    description: 'Master stem-changing verbs: e→ie, o→ue, e→i.',
    lessons: [
      {
        title: 'e → ie',
        tip: `In some verbs the stem vowel changes in every form **except nosotros**:
- pensar → **pienso**, piensas, piensa, pensamos, piensan
Same pattern: **empezar** (empiezo), **querer** (quiero), **preferir** (prefiero), **entender** (entiendo), **cerrar** (cierro).`,
        items: [
          'pienso | I think | I\'m thinking;I am thinking',
          'empieza | it starts | it begins;he starts;she starts;he begins;she begins',
          'prefiero | I prefer',
          'entiendo | I understand',
          'No entiendo. | I do not understand. | I don\'t understand',
          'La clase empieza a las nueve. | The class starts at nine. | Class starts at nine;The class begins at nine;Class begins at nine',
          'Pienso en mi familia. | I think about my family. | I am thinking about my family;I\'m thinking about my family;I think of my family',
          '¿Prefieres té o café? | Do you prefer tea or coffee? | Would you prefer tea or coffee;Do you prefer coffee or tea',
          'Nosotros pensamos que es caro. | We think that it is expensive. | We think it is expensive;We think it\'s expensive;We think that it\'s expensive | Pensamos que es caro',
          'Ellos cierran la tienda a las ocho. | They close the store at eight. | They close the shop at eight',
        ],
      },
      {
        title: 'o → ue',
        tip: `- dormir → **duermo**, duermes, duerme, dormimos, duermen
Same pattern: **poder** (puedo), **volver** (vuelvo), **encontrar** (encuentro), **costar** (cuesta).
**volver** = to come back, to return.`,
        items: [
          'duermo | I sleep | I am sleeping;I\'m sleeping',
          'vuelvo | I come back | I return;I go back;I\'m coming back',
          'podemos | we can | we are able to',
          'Duermo ocho horas. | I sleep eight hours. | I sleep for eight hours;I sleep eight hours a night',
          'Vuelvo a casa a las seis. | I come back home at six. | I return home at six;I go back home at six;I get home at six;I come home at six',
          '¿A qué hora vuelves? | What time are you coming back? | What time do you come back;When are you coming back;What time do you get back;At what time do you return',
          'Los niños duermen mucho. | The children sleep a lot. | The kids sleep a lot',
          'No encuentro mis llaves. | I can\'t find my keys. | I cannot find my keys;I don\'t find my keys;I do not find my keys',
          'Nosotros dormimos en el hotel. | We sleep at the hotel. | We are sleeping at the hotel;We\'re sleeping at the hotel;We sleep in the hotel | Dormimos en el hotel',
          '¿Puedo abrir la ventana? | Can I open the window? | May I open the window',
        ],
      },
      {
        title: 'e → i',
        tip: `This change only happens in some **-ir** verbs:
- pedir → **pido**, pides, pide, pedimos, piden
Same pattern: **repetir** (repito), **servir** (sirvo), **vestirse** (me visto).
**pedir** = to ask for, to order (food).`,
        items: [
          'pido | I ask for | I order;I request',
          'repite | he repeats | she repeats;you repeat;repeat',
          'sirven | they serve | you all serve',
          'Siempre pido pollo. | I always order chicken. | I always ask for chicken',
          '¿Qué pides? | What are you ordering? | What do you order;What are you asking for;What do you ask for',
          'Ella pide la cuenta. | She asks for the check. | She asks for the bill;She is asking for the check;She\'s asking for the check',
          'Pedimos dos cafés. | We order two coffees. | We are ordering two coffees;We\'re ordering two coffees;We ask for two coffees',
          '¿Puede repetir, por favor? | Can you repeat, please? | Could you repeat, please;Can you repeat that, please;Could you repeat that, please',
          'Repito las palabras nuevas. | I repeat the new words. | I\'m repeating the new words;I am repeating the new words',
          'En este restaurante sirven comida mexicana. | In this restaurant they serve Mexican food. | They serve Mexican food in this restaurant;This restaurant serves Mexican food',
        ],
      },
      {
        title: 'Jugar',
        tip: `**jugar** is the only **u → ue** verb:
- **juego**, juegas, juega, jugamos, juegan
**jugar a** + game or sport: **jugar al tenis**. Many Latin Americans drop the **a**: **jugar tenis**.`,
        items: [
          'juego | I play | I am playing;I\'m playing',
          'juegas | you play | you are playing',
          'jugamos | we play | we are playing;we\'re playing',
          'el tenis | tennis',
          'las cartas | cards | the cards',
          'Juego al tenis los martes. | I play tennis on Tuesdays. | I play tennis every Tuesday | Juego tenis los martes',
          '¿Juegas al béisbol? | Do you play baseball? | | ¿Juegas béisbol?',
          'Los niños juegan en el parque. | The children play in the park. | The kids play in the park;The children are playing in the park;The kids are playing in the park',
          'Mi papá juega a las cartas. | My dad plays cards. | My father plays cards;My dad is playing cards | Mi papá juega cartas',
          'Jugamos videojuegos por la noche. | We play video games at night. | We play videogames at night;We play video games in the evening | Jugamos a los videojuegos por la noche;Jugamos videojuegos en la noche',
        ],
      },
      {
        title: 'Mixed practice',
        tip: `The change only happens when the stem vowel is **stressed**. That's why **nosotros** keeps the original vowel: **podemos**, **pensamos**, **pedimos**.
In the dictionary you'll often see the change marked: **dormir (ue)**, **pedir (i)**.`,
        items: [
          'recordar | to remember | remember',
          'contar | to count | count;to tell',
          'cerrar | to close | close;to shut',
          'No puedo dormir. | I can\'t sleep. | I cannot sleep',
          'Empiezo a trabajar a las nueve. | I start working at nine. | I start work at nine;I begin working at nine;I start to work at nine',
          '¿Cuánto cuesta el boleto? | How much is the ticket? | How much does the ticket cost',
          'Ella quiere volver a México. | She wants to go back to Mexico. | She wants to return to Mexico',
          'Mis hijos piden pizza los viernes. | My kids order pizza on Fridays. | My children order pizza on Fridays;My kids ask for pizza on Fridays;My children ask for pizza on Fridays;My sons order pizza on Fridays',
          'Ustedes entienden muy bien. | You understand very well. | You all understand very well',
          '¿Recuerdas su nombre? | Do you remember his name? | Do you remember her name;Do you remember their name;Do you remember your name',
        ],
      },
    ],
    story: {
      title: 'El partido',
      lines: [
        'Inés: Nico, ¿a qué hora empieza el partido? | Nico, what time does the game start?',
        'Nico: Empieza a las cuatro. Juego con mi equipo. | It starts at four. I\'m playing with my team.',
        'Inés: ¿Puedo ir contigo? | Can I go with you?',
        'Nico: Claro. Pero primero quiero dormir un poco. | Sure. But first I want to sleep a little.',
        'Inés: ¡Siempre duermes! | You\'re always sleeping!',
        'Nico: Pienso que necesito energía para jugar. | I think I need energy to play.',
        'Inés: Bueno. Después del partido, ¿volvemos a casa? | Okay. After the game, do we go back home?',
        'Nico: No, después pedimos pizza en el restaurante. ¡Yo invito! | No, afterwards we order pizza at the restaurant. My treat!',
      ],
      questions: [
        { q: 'What time does the game start?', options: ['At four', 'At two', 'At six'], answer: 0 },
        { q: 'What does Nico want to do first?', options: ['Sleep a little', 'Eat pizza', 'Call his team'], answer: 0 },
        { q: 'What will they do after the game?', options: ['Order pizza', 'Go home', 'Play another game'], answer: 0 },
      ],
    },
  }),

  unit(2, {
    id: 'u21-work',
    title: 'Work',
    emoji: '💼',
    description: 'Talk about jobs, the office, schedules and meetings.',
    lessons: [
      {
        title: 'Jobs',
        tip: `Most jobs have a masculine and feminine form: **el abogado / la abogada**.
Jobs ending in **-ista** stay the same: **el / la dentista**.
Remember: no "a" after ser: **Soy ingeniera** = I'm an engineer.`,
        items: [
          'el abogado | the lawyer | the (male) lawyer',
          'la doctora | the doctor | the (female) doctor',
          'el ingeniero | the engineer | the (male) engineer',
          'la enfermera | the nurse | the (female) nurse',
          'el cocinero | the cook | the chef',
          'la dentista | the dentist | the (female) dentist',
          '¿A qué te dedicas? | What do you do? | What do you do for a living;What is your job;What\'s your job',
          'Soy ingeniera. | I am an engineer. | I\'m an engineer',
          'Mi madre es abogada. | My mother is a lawyer. | My mom is a lawyer',
          'Él trabaja como cocinero. | He works as a cook. | He works as a chef',
        ],
      },
      {
        title: 'At the office',
        items: [
          'la oficina | the office',
          'el jefe | the boss | the (male) boss;the manager',
          'la jefa | the boss | the (female) boss;the manager',
          'el compañero de trabajo | the coworker | the colleague;the co-worker;the workmate',
          'la empresa | the company | the business;the firm',
          'el correo electrónico | the email | email;the e-mail',
          'Trabajo en una oficina. | I work in an office. | I\'m working in an office;I work at an office',
          'Mi jefe es muy simpático. | My boss is very nice. | My boss is very friendly;My boss is really nice',
          'Tengo que escribir muchos correos. | I have to write a lot of emails. | I have to write many emails;I need to write a lot of emails;I need to write many emails',
          'La empresa es grande. | The company is big. | The company is large',
        ],
      },
      {
        title: 'Schedules',
        tip: `- **de… a…** = from… to…: **de nueve a cinco**
- **salir** is irregular in the "yo" form: **salgo** (I leave)
- **medio tiempo** = part-time · **tiempo completo** = full-time`,
        items: [
          'el horario | the schedule | the timetable;the hours',
          'de lunes a viernes | from Monday to Friday | Monday to Friday;Monday through Friday',
          'medio tiempo | part-time | part time',
          'tiempo completo | full-time | full time',
          'Trabajo de lunes a viernes. | I work from Monday to Friday. | I work Monday to Friday;I work Monday through Friday',
          'Mi horario es de nueve a cinco. | My schedule is from nine to five. | My schedule is nine to five;My hours are nine to five;My hours are from nine to five',
          'Trabajo medio tiempo. | I work part-time. | I work part time;I have a part-time job',
          'Salgo del trabajo a las seis. | I leave work at six. | I get off work at six;I leave work at six o\'clock',
          'Hoy trabajo hasta tarde. | Today I am working late. | I\'m working late today;I am working late today;Today I work late;Today I\'m working late',
          '¿Trabajas los fines de semana? | Do you work on weekends? | Do you work weekends;Do you work on the weekend;Do you work on the weekends',
        ],
      },
      {
        title: 'The meeting',
        tip: `**funcionar** = to work (for machines): **No funciona** = it doesn't work.
**trabajar** is only for people working.`,
        items: [
          'la reunión | the meeting',
          'el proyecto | the project',
          'la computadora | the computer | | el computador',
          'la llamada | the call | the phone call',
          'Tenemos una reunión a las diez. | We have a meeting at ten. | We have a meeting at ten o\'clock',
          'La reunión empieza en cinco minutos. | The meeting starts in five minutes. | The meeting begins in five minutes',
          'El jefe quiere hablar contigo. | The boss wants to talk to you. | The boss wants to speak with you;The boss wants to talk with you;The boss wants to speak to you',
          'Estoy en una llamada. | I am on a call. | I\'m on a call;I am on the phone;I\'m on the phone',
          'Necesito terminar el proyecto hoy. | I need to finish the project today. | I have to finish the project today',
          'Mi computadora no funciona. | My computer is not working. | My computer isn\'t working;My computer doesn\'t work;My computer does not work | Mi computador no funciona',
        ],
      },
      {
        title: 'Finding a job',
        items: [
          'el sueldo | the salary | the pay;the wages | el salario',
          'la entrevista | the interview | the job interview',
          'la experiencia | the experience | experience',
          'buscar trabajo | to look for work | look for work;to look for a job;look for a job',
          'Busco trabajo. | I am looking for work. | I\'m looking for work;I am looking for a job;I\'m looking for a job',
          'Mañana tengo una entrevista. | Tomorrow I have an interview. | I have an interview tomorrow;I\'ve got an interview tomorrow;Tomorrow I have a job interview | Tengo una entrevista mañana',
          'Tengo cinco años de experiencia. | I have five years of experience. | I have five years\' experience;I\'ve got five years of experience',
          'Me gusta mi trabajo. | I like my job. | I like my work',
          'Ella trabaja en un hospital. | She works in a hospital. | She works at a hospital',
          'Quiero un trabajo con un buen sueldo. | I want a job with a good salary. | I want a job with good pay;I want a job that pays well;I want a well-paid job',
        ],
      },
    ],
    story: {
      title: 'La entrevista',
      lines: [
        'Directora: Buenos días, Raúl. Siéntese, por favor. | Good morning, Raúl. Have a seat, please.',
        'Raúl: Gracias. Mucho gusto. | Thank you. Nice to meet you.',
        'Directora: ¿Cuántos años de experiencia tiene? | How many years of experience do you have?',
        'Raúl: Tengo cuatro años de experiencia como ingeniero. | I have four years of experience as an engineer.',
        'Directora: Muy bien. El horario es de lunes a viernes, de ocho a cinco. | Very good. The schedule is Monday to Friday, from eight to five.',
        'Raúl: Perfecto. ¿Hay reuniones todos los días? | Perfect. Are there meetings every day?',
        'Directora: Solo los lunes. Tenemos una reunión con todo el equipo. | Only on Mondays. We have a meeting with the whole team.',
        'Raúl: Me gusta mucho la empresa. | I really like the company.',
        'Directora: Gracias, Raúl. Lo llamo mañana. | Thank you, Raúl. I\'ll call you tomorrow.',
      ],
      questions: [
        { q: "What is Raúl's profession?", options: ['Engineer', 'Lawyer', 'Nurse'], answer: 0 },
        { q: 'What are the work hours?', options: ['Eight to five', 'Nine to five', 'Nine to six'], answer: 0 },
        { q: 'When are the team meetings?', options: ['On Mondays', 'Every day', 'On Fridays'], answer: 0 },
      ],
    },
  }),

  unit(2, {
    id: 'u22-comparisons',
    title: 'Comparisons',
    emoji: '⚖️',
    description: 'Compare people and things: more, less, as… as, the best.',
    lessons: [
      {
        title: 'More than, less than',
        tip: `- **más + adjective + que** = more… than (taller, faster…)
- **menos + adjective + que** = less… than
The adjective still agrees: **Ella es más alta que él**.`,
        items: [
          'más | more',
          'menos | less | fewer',
          'más que | more than',
          'Mi hermano es más alto que yo. | My brother is taller than me. | My brother is taller than I am;My brother is taller than I',
          'Ana es más joven que Carlos. | Ana is younger than Carlos.',
          'El tren es más rápido que el autobús. | The train is faster than the bus. | The train is quicker than the bus',
          'Esta camisa es menos cara que esa. | This shirt is less expensive than that one. | This shirt is cheaper than that one;This shirt is less expensive than that',
          'El perro es menos inteligente que el gato. | The dog is less intelligent than the cat. | The dog is less smart than the cat;The dog is not as smart as the cat',
          'Hoy hace más calor que ayer. | Today it is hotter than yesterday. | It\'s hotter today than yesterday;It is hotter today than yesterday;Today is hotter than yesterday;Today it\'s hotter than yesterday',
          'Tengo más libros que tú. | I have more books than you. | I have more books than you do',
        ],
      },
      {
        title: 'As… as',
        tip: `- **tan + adjective + como** = as… as: **tan alto como** = as tall as
- **tanto / tanta + noun + como** = as much… as
- **tantos / tantas + noun + como** = as many… as`,
        items: [
          'tan | as | so',
          'como | as | like',
          'tanto | as much | so much',
          'tan alto como | as tall as',
          'Soy tan alta como mi mamá. | I am as tall as my mom. | I\'m as tall as my mom;I am as tall as my mother;I\'m as tall as my mother',
          'Mi casa es tan grande como tu casa. | My house is as big as your house. | My house is as big as yours;My house is as large as your house;My home is as big as your home',
          'No soy tan rápido como tú. | I am not as fast as you. | I\'m not as fast as you;I am not as quick as you;I\'m not as quick as you',
          'La playa no está tan lejos como la montaña. | The beach is not as far as the mountain. | The beach isn\'t as far as the mountain;The beach is not as far away as the mountain;The beach isn\'t as far as the mountains;The beach is not as far as the mountains',
          'Tengo tantos hermanos como tú. | I have as many siblings as you. | I have as many siblings as you do;I have as many brothers and sisters as you;I have as many brothers as you',
          'Ella tiene tanto dinero como él. | She has as much money as him. | She has as much money as he does;She has as much money as he has',
        ],
      },
      {
        title: 'Better & worse',
        tip: `Two irregular comparisons:
- bueno → **mejor** (better)
- malo → **peor** (worse)
Don't say "más bueno". Plural: **mejores**, **peores**.`,
        items: [
          'mejor | better',
          'peor | worse',
          'mejores | better | better (plural)',
          'Este restaurante es mejor que ese. | This restaurant is better than that one. | This restaurant is better than that restaurant;This restaurant is better than that',
          'Mi español es mejor ahora. | My Spanish is better now.',
          'El tráfico hoy es peor que ayer. | The traffic today is worse than yesterday. | Traffic today is worse than yesterday;The traffic is worse today than yesterday',
          'Tu computadora es mejor que la mía. | Your computer is better than mine. | | Tu computador es mejor que el mío',
          'Me siento peor hoy. | I feel worse today. | I\'m feeling worse today;I am feeling worse today | Hoy me siento peor',
          'Estas papas son peores que las otras. | These potatoes are worse than the other ones. | These potatoes are worse than the others',
          'Es mejor tarde que nunca. | Better late than never. | It\'s better late than never;It is better late than never | Más vale tarde que nunca',
        ],
      },
      {
        title: 'Older & younger',
        tip: `For people's ages:
- **mayor** = older
- **menor** = younger
**mi hermano mayor** = my older brother · **mi hermana menor** = my younger sister.`,
        items: [
          'mayor | older | elder',
          'menor | younger',
          'el hermano mayor | the older brother | the big brother;the elder brother',
          'la hermana menor | the younger sister | the little sister',
          'los mayores | the elders | older people;the older ones;the grown-ups',
          'Soy mayor que mi prima. | I am older than my cousin. | I\'m older than my cousin',
          'Mi hermana menor tiene diez años. | My younger sister is ten years old. | My little sister is ten years old;My younger sister is ten;My little sister is ten',
          '¿Quién es mayor, tú o tu hermano? | Who is older, you or your brother? | Who\'s older, you or your brother',
          'Mi abuelo es mayor que mi abuela. | My grandfather is older than my grandmother. | My grandpa is older than my grandma',
          'Ella es dos años menor que yo. | She is two years younger than me. | She\'s two years younger than me;She is two years younger than I am;She\'s two years younger than I am',
        ],
      },
      {
        title: 'The best',
        tip: `Superlative: **el / la / los / las + más + adjective + de**
- **la ciudad más grande de México** = the biggest city in Mexico
- **el mejor / el peor** = the best / the worst
Use **de** for "in": **el mejor restaurante de la ciudad**.
Add **-ísimo** for "very, very": **rico → riquísimo**.`,
        items: [
          'el mejor | the best | the best one',
          'el peor | the worst | the worst one',
          'la más alta | the tallest | the tallest one',
          'Es el mejor restaurante de la ciudad. | It is the best restaurant in the city. | It\'s the best restaurant in the city;It is the best restaurant in town;It\'s the best restaurant in town',
          'Este es el peor día de mi vida. | This is the worst day of my life. | This is the worst day in my life',
          'El domingo es el mejor día de la semana. | Sunday is the best day of the week.',
          'Mi madre es la persona más inteligente de la familia. | My mother is the smartest person in the family. | My mom is the smartest person in the family;My mother is the most intelligent person in the family;My mom is the most intelligent person in the family',
          '¿Cuál es la ciudad más grande de México? | What is the biggest city in Mexico? | Which is the biggest city in Mexico;What\'s the biggest city in Mexico;What is the largest city in Mexico;Which is the largest city in Mexico',
          'Es la película más aburrida del año. | It is the most boring movie of the year. | It\'s the most boring movie of the year;It is the most boring film of the year;It\'s the most boring film of the year',
          'La comida está riquísima. | The food is really delicious. | The food is delicious;The food is very delicious;The food is extremely tasty;The food is super tasty;The food is very tasty',
        ],
      },
    ],
    story: {
      title: '¿Cuál es mejor?',
      lines: [
        'Valentina: Marcos, ¿prefieres vivir en Bogotá o en Medellín? | Marcos, do you prefer to live in Bogotá or in Medellín?',
        'Marcos: Medellín. Es más pequeña que Bogotá, pero es más bonita. | Medellín. It is smaller than Bogotá, but it is prettier.',
        'Valentina: ¿Y el clima? | And the weather?',
        'Marcos: El clima de Medellín es mejor. No hace tanto frío como en Bogotá. | The weather in Medellín is better. It is not as cold as in Bogotá.',
        'Valentina: Pero Bogotá tiene los mejores museos del país. | But Bogotá has the best museums in the country.',
        'Marcos: Es verdad. Y la comida es tan buena como en Medellín. | That\'s true. And the food is as good as in Medellín.',
        'Valentina: Entonces, ¿cuál es la mejor ciudad? | So, which is the best city?',
        'Marcos: ¡Mi ciudad, claro! | My city, of course!',
      ],
      questions: [
        { q: 'Which city does Marcos prefer?', options: ['Medellín', 'Bogotá', 'Lima'], answer: 0 },
        { q: "What does Marcos say about Medellín's weather?", options: ["It isn't as cold as Bogotá", "It's colder than Bogotá", 'It rains every day'], answer: 0 },
        { q: 'What does Bogotá have, according to Valentina?', options: ['The best museums in the country', 'The best beaches', 'The cheapest food'], answer: 0 },
      ],
    },
  }),
]
