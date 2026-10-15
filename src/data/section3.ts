import { unit } from './build'

// Section 3 (B1) — units 23–32. Latin American Spanish: "ustedes" for plural you, no "vosotros".
export default [
  unit(3, {
    id: 'u23-preterite',
    title: 'Yesterday',
    emoji: '📅',
    description: 'Talk about what you did with the regular preterite.',
    lessons: [
      {
        title: '-ar verbs in the past',
        tip: `The **preterite** is for finished actions in the past.
- yo **hablé**: I spoke
- tú **hablaste**: you spoke
- él / ella / usted **habló**: he / she spoke
- nosotros **hablamos**: we spoke
- ellos / ustedes **hablaron**: they / you all spoke
Watch the accents: **hablo** = I speak, **habló** = he spoke.`,
        items: [
          'ayer | yesterday',
          'anoche | last night',
          'hablé | I spoke | I talked',
          'trabajaste | you worked',
          'Ayer trabajé mucho. | Yesterday I worked a lot. | I worked a lot yesterday;Yesterday I worked hard;I worked hard yesterday',
          'Hablé con mi madre. | I spoke with my mother. | I talked to my mother;I spoke to my mother;I talked with my mother;I spoke with my mom;I talked to my mom;I spoke to my mom;I talked with my mom',
          '¿Trabajaste ayer? | Did you work yesterday?',
          'Ella compró pan. | She bought bread. | She bought some bread',
          'Anoche escuchamos música. | Last night we listened to music. | We listened to music last night',
          'Ellos llegaron tarde. | They arrived late. | They got here late;They came late;They got there late',
        ],
      },
      {
        title: '-er and -ir verbs',
        tip: `**-er** and **-ir** verbs share the same preterite endings.
- **comí**, **comiste**, **comió**, **comimos**, **comieron**
- **viví**, **viviste**, **vivió**, **vivimos**, **vivieron**
The **nosotros** form looks just like the present. Context tells you which one it is.`,
        items: [
          'comí | I ate | I had',
          'salió | he left | she left;he went out;she went out;you left',
          'Comí pollo con arroz. | I ate chicken with rice. | I had chicken with rice;I ate chicken and rice;I had chicken and rice',
          '¿Bebiste café esta mañana? | Did you drink coffee this morning? | Did you have coffee this morning;Did you have any coffee this morning',
          'Ella escribió una carta. | She wrote a letter.',
          'Vivimos en México dos años. | We lived in Mexico for two years. | We lived in Mexico two years | Vivimos en México por dos años.',
          'Ellos abrieron la tienda. | They opened the store. | They opened the shop',
          'Salí de casa a las ocho. | I left home at eight. | I left the house at eight;I left home at eight o\'clock;I left the house at eight o\'clock',
          '¿Entendiste la pregunta? | Did you understand the question?',
          'Aprendí mucho. | I learned a lot. | I learnt a lot',
        ],
      },
      {
        title: 'Last week',
        tip: `Time words that call for the preterite:
- **ayer**: yesterday · **anoche**: last night
- **la semana pasada**: last week · **el año pasado**: last year
- **hace + time**: ago → **hace dos días** = two days ago`,
        items: [
          'la semana pasada | last week',
          'el año pasado | last year',
          'el mes pasado | last month',
          'anteayer | the day before yesterday',
          'hace dos días | two days ago',
          'La semana pasada visité a mi abuela. | Last week I visited my grandmother. | I visited my grandmother last week;Last week I visited my grandma;I visited my grandma last week',
          'El año pasado viajamos a Perú. | Last year we traveled to Peru. | We traveled to Peru last year;Last year we travelled to Peru;We travelled to Peru last year;Last year we went to Peru;We went to Peru last year',
          'Te llamé hace una hora. | I called you an hour ago. | I called you one hour ago',
          'Anoche no dormí bien. | Last night I didn\'t sleep well. | I didn\'t sleep well last night;Last night I did not sleep well;I did not sleep well last night',
          'El mes pasado empezaron las clases. | Classes started last month. | Last month classes started;Last month the classes started;The classes started last month;Classes began last month',
        ],
      },
      {
        title: 'Spelling changes',
        tip: `Some **yo** forms change spelling to keep the sound:
- **-car → -qué**: buscar → **busqué**
- **-gar → -gué**: llegar → **llegué**
- **-zar → -cé**: empezar → **empecé**
**leer** uses a **y**: **leyó**, **leyeron**.`,
        items: [
          'busqué | I looked for | I searched for',
          'almorcé | I had lunch | I ate lunch',
          'Busqué mis llaves. | I looked for my keys. | I searched for my keys',
          'Llegué a las nueve. | I arrived at nine. | I got here at nine;I got there at nine;I arrived at nine o\'clock',
          'Empecé un trabajo nuevo. | I started a new job. | I began a new job',
          'Pagué la cuenta. | I paid the bill. | I paid the check',
          'Toqué la guitarra. | I played the guitar. | I played guitar',
          'Ella leyó el libro. | She read the book.',
          'Ellos leyeron el periódico. | They read the newspaper. | They read the paper',
          'Jugué al fútbol ayer. | I played soccer yesterday. | Yesterday I played soccer;I played football yesterday | Jugué fútbol ayer.',
        ],
      },
    ],
    story: {
      title: 'Un día largo',
      lines: [
        'Laura: Ayer trabajé diez horas. | Yesterday I worked ten hours.',
        'Diego: ¡Diez horas! ¿A qué hora llegaste a casa? | Ten hours! What time did you get home?',
        'Laura: Llegué a las nueve de la noche. | I got home at nine at night.',
        'Diego: ¿Cenaste? | Did you have dinner?',
        'Laura: Sí, comí una pizza y miré una película. | Yes, I ate a pizza and watched a movie.',
        'Diego: Yo salí con mis amigos anoche. | I went out with my friends last night.',
        'Laura: ¿Adónde? | Where to?',
        'Diego: Bailamos en un club y volvimos a las tres. | We danced at a club and came back at three.',
        'Laura: ¡A las tres! Yo me acosté a las once. | At three! I went to bed at eleven.',
      ],
      questions: [
        { q: 'How many hours did Laura work?', options: ['Ten', 'Eight', 'Three'], answer: 0 },
        { q: 'What did Laura eat?', options: ['A pizza', 'Chicken with rice', 'Tacos'], answer: 0 },
        { q: 'What time did Diego get back?', options: ['At three', 'At nine', 'At eleven'], answer: 0 },
      ],
    },
  }),

  unit(3, {
    id: 'u24-preterite-irregular',
    title: 'What happened',
    emoji: '💥',
    description: 'The most common irregular verbs in the preterite.',
    lessons: [
      {
        title: 'Went & was',
        tip: `**ser** and **ir** have the **same** preterite forms:
- **fui**, **fuiste**, **fue**, **fuimos**, **fueron**
**Fui al cine** = I went to the movies.
**Fue increíble** = It was incredible.
Context tells you which verb it is.`,
        items: [
          'fui | I went | I was',
          'fue | it was | he went;she went;he was;she was',
          'Fui al cine ayer. | I went to the movies yesterday. | Yesterday I went to the movies;I went to the cinema yesterday;Yesterday I went to the cinema',
          '¿Adónde fuiste? | Where did you go?',
          'Fuimos a la playa. | We went to the beach.',
          'La fiesta fue increíble. | The party was incredible. | The party was amazing',
          'Ellos fueron al mercado. | They went to the market.',
          'Fue un día difícil. | It was a difficult day. | It was a hard day;It was a tough day',
          '¿Cómo fue el viaje? | How was the trip?',
        ],
      },
      {
        title: 'Had, was, could, put',
        tip: `These verbs get a new stem with **u**:
- tener → **tuv-** · estar → **estuv-**
- poder → **pud-** · poner → **pus-**
Endings: **-e, -iste, -o, -imos, -ieron**, with **no accents**:
**tuve**, **tuviste**, **tuvo**, **tuvimos**, **tuvieron**`,
        items: [
          'tuve | I had',
          'estuve | I was',
          'Tuve un problema. | I had a problem.',
          'Estuve en casa todo el día. | I was at home all day. | I was home all day;I stayed home all day;I was at home the whole day',
          'No pude dormir. | I couldn\'t sleep. | I could not sleep;I wasn\'t able to sleep;I was not able to sleep',
          '¿Dónde pusiste las llaves? | Where did you put the keys?',
          'Ella tuvo un bebé. | She had a baby.',
          'Estuvimos en Chile una semana. | We were in Chile for a week. | We were in Chile for one week;We were in Chile a week;We spent a week in Chile',
          'Puse la leche en el refrigerador. | I put the milk in the fridge. | I put the milk in the refrigerator',
          'Tuvimos que esperar. | We had to wait.',
        ],
      },
      {
        title: 'Did, wanted, came',
        tip: `These verbs get a stem with **i**:
- hacer → **hic-** · querer → **quis-** · venir → **vin-**
Same endings: **hice**, **hiciste**, **hizo**, **hicimos**, **hicieron**
Note the **z** in **hizo**.
**Hizo calor** = It was hot.`,
        items: [
          'hice | I did | I made',
          'hizo | he did | she did;he made;she made;you did;you made',
          '¿Qué hiciste el fin de semana? | What did you do on the weekend? | What did you do over the weekend;What did you do last weekend;What did you do this weekend',
          'Hice la tarea. | I did the homework. | I did my homework',
          'Hizo mucho calor. | It was very hot. | It was really hot',
          'Mi hermano vino a la fiesta. | My brother came to the party.',
          '¿Por qué no viniste? | Why didn\'t you come? | Why did you not come',
          'Quise llamarte. | I wanted to call you. | I tried to call you',
          'Vinieron mis primos. | My cousins came.',
          'Hicimos la cena juntos. | We made dinner together. | We cooked dinner together',
        ],
      },
      {
        title: 'Said, gave, saw',
        tip: `- decir: **dije**, **dijiste**, **dijo**, **dijimos**, **dijeron** (no "i" in -eron)
- dar: **di**, **diste**, **dio**, **dimos**, **dieron**
- ver: **vi**, **viste**, **vio**, **vimos**, **vieron**
One-syllable forms like **di**, **dio**, **vi**, **vio** never take an accent.`,
        items: [
          'dije | I said | I told',
          'vi | I saw',
          '¿Qué dijo el doctor? | What did the doctor say?',
          'Dije la verdad. | I told the truth.',
          'Ellos dijeron que no. | They said no. | They said that no',
          'Vi a Marta en el parque. | I saw Marta in the park.',
          '¿Viste la película? | Did you see the movie? | Have you seen the movie;Did you watch the movie;Did you see the film',
          'Mi abuela me dio un regalo. | My grandmother gave me a gift. | My grandmother gave me a present;My grandma gave me a gift;My grandma gave me a present',
          'Dimos un paseo. | We went for a walk. | We took a walk',
          'Vimos el partido anoche. | We watched the game last night. | We saw the game last night;We watched the match last night',
        ],
      },
    ],
    story: {
      title: 'La fiesta de Andrés',
      lines: [
        'Sara: ¿Fuiste a la fiesta de Andrés? | Did you go to Andrés\'s party?',
        'Tomás: Sí, fui con Paula. ¡Fue muy divertida! | Yes, I went with Paula. It was a lot of fun!',
        'Sara: Yo no pude ir. Tuve que trabajar. | I couldn\'t go. I had to work.',
        'Tomás: ¡Qué lástima! Vino mucha gente. | What a shame! Lots of people came.',
        'Sara: ¿Y qué hicieron? | And what did you all do?',
        'Tomás: Bailamos y Andrés hizo tacos. | We danced and Andrés made tacos.',
        'Sara: ¿Viste a Mónica? | Did you see Mónica?',
        'Tomás: Sí, y me dijo que tiene un trabajo nuevo. | Yes, and she told me she has a new job.',
        'Sara: ¡Qué bien! | That\'s great!',
      ],
      questions: [
        { q: "Why didn't Sara go to the party?", options: ['She had to work', 'She was sick', 'She went to the beach'], answer: 0 },
        { q: 'What did Andrés make?', options: ['Tacos', 'Pizza', 'A cake'], answer: 0 },
        { q: 'What did Mónica tell Tomás?', options: ['She has a new job', 'She is moving', 'She is getting married'], answer: 0 },
      ],
    },
  }),

  unit(3, {
    id: 'u25-imperfect',
    title: 'When I was a kid',
    emoji: '🧸',
    description: 'Describe habits and how things used to be with the imperfect.',
    lessons: [
      {
        title: 'Used to: -ar verbs',
        tip: `The **imperfect** describes habits and ongoing situations in the past: "used to", "would", "was …ing".
- **hablaba**, **hablabas**, **hablaba**
- **hablábamos**, **hablaban**
Only the **nosotros** form has an accent.`,
        items: [
          'siempre | always',
          'jugaba | I used to play | I played;I was playing;he used to play;she used to play',
          'Jugaba en el parque. | I used to play in the park. | I played in the park;I would play in the park;I was playing in the park',
          'Mi abuela cocinaba muy bien. | My grandmother cooked very well. | My grandmother used to cook very well;My grandma cooked very well;My grandma used to cook very well;My grandmother cooked really well',
          'Siempre caminábamos a la escuela. | We always walked to school. | We always used to walk to school;We used to always walk to school;We would always walk to school',
          'Ellos trabajaban mucho. | They worked a lot. | They used to work a lot;They were working a lot;They worked hard;They used to work hard',
          '¿Dónde estudiabas? | Where did you study? | Where did you use to study;Where were you studying;Where did you used to study',
          'Mi papá escuchaba la radio. | My dad listened to the radio. | My dad used to listen to the radio;My dad was listening to the radio;My father listened to the radio;My father used to listen to the radio',
          'Yo hablaba con mis abuelos. | I used to talk with my grandparents. | I talked with my grandparents;I used to talk to my grandparents;I talked to my grandparents;I was talking with my grandparents;I was talking to my grandparents | Hablaba con mis abuelos.',
        ],
      },
      {
        title: 'Used to: -er and -ir verbs',
        tip: `**-er** and **-ir** verbs share one set of endings, all with **í**:
- **comía**, **comías**, **comía**
- **comíamos**, **comían**
The yo and él/ella forms are the same, so add **yo** or **él** if it's unclear.`,
        items: [
          'tenía | I had | I used to have;he had;she had',
          'vivía | I lived | I used to live;I was living',
          'todos los días | every day',
          'Vivíamos en una casa pequeña. | We lived in a small house. | We used to live in a small house;We were living in a small house',
          'Tenía un perro. | I had a dog. | I used to have a dog',
          'Comíamos juntos los domingos. | We ate together on Sundays. | We used to eat together on Sundays;We would eat together on Sundays',
          'Mi hermana quería ser doctora. | My sister wanted to be a doctor. | My sister used to want to be a doctor',
          'No sabía nadar. | I didn\'t know how to swim. | I couldn\'t swim;I did not know how to swim;I could not swim',
          'Mis padres salían todos los viernes. | My parents went out every Friday. | My parents used to go out every Friday;My parents would go out every Friday',
        ],
      },
      {
        title: 'Was, went, saw',
        tip: `Only three verbs are irregular in the imperfect:
- ser: **era**, **eras**, **era**, **éramos**, **eran**
- ir: **iba**, **ibas**, **iba**, **íbamos**, **iban**
- ver: **veía**, **veías**, **veía**, **veíamos**, **veían**
**Cuando era niño/niña** = when I was a kid.`,
        items: [
          'era | I was | he was;she was;it was;I used to be',
          'iba | I used to go | I was going;I went;he used to go;she used to go',
          'Cuando era niño, vivía en Lima. | When I was a kid, I lived in Lima. | When I was a child, I lived in Lima;When I was a boy, I lived in Lima;When I was little, I lived in Lima;When I was a kid, I used to live in Lima;When I was a child, I used to live in Lima;When I was a boy, I used to live in Lima',
          'Cuando era niña, tenía un gato. | When I was a girl, I had a cat. | When I was a kid, I had a cat;When I was a child, I had a cat;When I was little, I had a cat;When I was a girl, I used to have a cat;When I was a kid, I used to have a cat',
          'Íbamos a la playa en verano. | We used to go to the beach in the summer. | We went to the beach in the summer;We used to go to the beach in summer;We went to the beach in summer;We would go to the beach in the summer;We would go to the beach in summer',
          'Veía la tele todas las tardes. | I watched TV every afternoon. | I used to watch TV every afternoon;I would watch TV every afternoon;I watched TV every evening;I used to watch TV every evening',
          'Mi abuelo era muy alto. | My grandfather was very tall. | My grandpa was very tall;My grandfather was really tall',
          'Éramos muy buenos amigos. | We were very good friends. | We used to be very good friends;We were really good friends',
          '¿Ibas a la escuela en autobús? | Did you go to school by bus? | Did you use to go to school by bus;Did you used to go to school by bus;Did you take the bus to school',
        ],
      },
      {
        title: 'Describing the past',
        tip: `Use the imperfect to **describe** the past:
- time: **Eran las diez** = It was ten o'clock
- age: **Tenía ocho años** = I was eight
- weather: **Hacía frío** = It was cold
- feelings: **Estaba cansado** = I was tired
**había** = there was / there were.`,
        items: [
          'había | there was | there were',
          'de niño | as a kid | as a child;as a boy',
          'Había muchos niños en el parque. | There were a lot of children in the park. | There were many children in the park;There were lots of kids in the park;There were a lot of kids in the park;There were many kids in the park',
          'Hacía mucho frío. | It was very cold. | It was really cold',
          'Eran las diez de la noche. | It was ten at night. | It was ten o\'clock at night;It was 10 p.m.',
          'Tenía ocho años. | I was eight years old. | I was eight;He was eight;She was eight;He was eight years old;She was eight years old',
          'La casa era grande y bonita. | The house was big and pretty. | The house was big and beautiful;The house was large and pretty;The house was large and beautiful',
          'Mi maestra se llamaba Rosa. | My teacher\'s name was Rosa. | My teacher was called Rosa;My teacher was named Rosa',
          'Estaba muy cansado. | I was very tired. | He was very tired;I was really tired',
        ],
      },
    ],
    story: {
      title: 'Cuando era niño',
      lines: [
        'Abuelo: Cuando era niño, vivía en un pueblo pequeño. | When I was a boy, I lived in a small town.',
        'Abuelo: No teníamos televisión. | We didn\'t have a television.',
        'Abuelo: Todos los días caminaba a la escuela con mi hermano. | Every day I walked to school with my brother.',
        'Nieta: ¿Estaba lejos? | Was it far?',
        'Abuelo: Sí, muy lejos. Y en invierno hacía mucho frío. | Yes, very far. And in winter it was very cold.',
        'Nieta: ¿Qué hacían después de la escuela? | What did you do after school?',
        'Abuelo: Jugábamos al fútbol en la calle. | We used to play soccer in the street.',
        'Abuelo: Mi madre siempre preparaba sopa para la cena. | My mother always made soup for dinner.',
        'Nieta: ¡Qué bonito, abuelo! | How lovely, Grandpa!',
      ],
      questions: [
        { q: 'Where did Grandpa live as a boy?', options: ['In a small town', 'In a big city', 'By the beach'], answer: 0 },
        { q: 'How did he get to school?', options: ['He walked with his brother', 'He took the bus', 'His father drove him'], answer: 0 },
        { q: 'What did they do after school?', options: ['Played soccer in the street', 'Watched TV', 'Made soup'], answer: 0 },
      ],
    },
  }),

  unit(3, {
    id: 'u26-storytelling',
    title: 'Telling stories',
    emoji: '📖',
    description: 'Mix the preterite and imperfect to tell a story.',
    lessons: [
      {
        title: 'Scene vs. event',
        tip: `Stories use both past tenses:
- **imperfect** = the scene: weather, time, feelings, what was going on
- **preterite** = the events: what happened next
**Llovía cuando salí** = It was raining (scene) when I left (event).`,
        items: [
          'llovía | it was raining',
          'así que | so',
          'Llovía cuando salí. | It was raining when I left. | It was raining when I went out',
          'Eran las ocho cuando llegó. | It was eight when he arrived. | It was eight when she arrived;It was eight o\'clock when he arrived;It was eight o\'clock when she arrived;It was eight when he got here;It was eight when she got here',
          'Hacía sol, así que fuimos a la playa. | It was sunny, so we went to the beach.',
          'Estaba cansada y me acosté temprano. | I was tired and went to bed early. | I was tired and I went to bed early;I was tired, so I went to bed early',
          'Tenía hambre, así que comí. | I was hungry, so I ate.',
          'La tienda estaba cerrada. | The store was closed. | The shop was closed',
          'Había mucha gente en la calle. | There were a lot of people in the street. | There were many people in the street;There were lots of people in the street;There were a lot of people on the street;There were many people on the street',
        ],
      },
      {
        title: 'Interrupted actions',
        tip: `"I was doing X **when** Y happened":
- the action in progress → **imperfect**
- the interruption → **preterite**
**Dormía cuando sonó el teléfono** = I was sleeping when the phone rang.`,
        items: [
          'cuando | when',
          'Yo dormía cuando sonó el teléfono. | I was sleeping when the phone rang. | I was asleep when the phone rang | Dormía cuando sonó el teléfono.',
          'Estudiaba cuando llegaste. | I was studying when you arrived. | I was studying when you got here;I was studying when you came',
          'Cocinábamos cuando se fue la luz. | We were cooking when the power went out. | We were cooking when the lights went out;We were cooking when the electricity went out',
          'Ella caminaba por el parque cuando vio a Juan. | She was walking through the park when she saw Juan. | She was walking in the park when she saw Juan',
          'Me duchaba cuando tocaron la puerta. | I was showering when someone knocked on the door. | I was taking a shower when someone knocked on the door;I was in the shower when someone knocked on the door;I was showering when someone knocked at the door;I was taking a shower when someone knocked at the door',
          'Manejaba a casa cuando tuve el accidente. | I was driving home when I had the accident.',
          'Cuando era estudiante, conocí a mi esposa. | When I was a student, I met my wife.',
          '¿Qué hacías cuando te llamé? | What were you doing when I called you? | What were you doing when I called',
        ],
      },
      {
        title: 'While',
        tip: `**mientras** = while. Two things going on at the same time → both in the **imperfect**.
You can also use **estaba + -ando / -iendo** for "was …ing":
- **Estaba cocinando** = I was cooking
- **Estábamos leyendo** = We were reading`,
        items: [
          'mientras | while',
          'estaba cocinando | I was cooking | he was cooking;she was cooking',
          'Mientras yo cocinaba, él leía. | While I was cooking, he was reading. | While I cooked, he read;While I was cooking, he read | Mientras cocinaba, él leía.',
          'Ella cantaba mientras trabajaba. | She sang while she worked. | She was singing while she was working;She sang while working;She was singing while working;She used to sing while she worked',
          'Estaba leyendo cuando entró mi mamá. | I was reading when my mom came in. | I was reading when my mother came in;I was reading when my mom walked in;I was reading when my mother walked in;I was reading when my mom entered;I was reading when my mother entered',
          'Mientras esperábamos, tomamos un café. | While we were waiting, we had a coffee. | While we waited, we had a coffee;While we were waiting, we drank a coffee;While we waited, we drank a coffee;While we were waiting, we had coffee;While we waited, we had coffee',
          'Los niños jugaban mientras los padres hablaban. | The children played while the parents talked. | The kids were playing while the parents were talking;The children were playing while the parents were talking;The kids played while the parents talked',
          '¿Qué estabas haciendo? | What were you doing?',
          'Estábamos viendo una película. | We were watching a movie. | We were watching a film',
        ],
      },
      {
        title: 'Suddenly',
        tip: `Words that move a story forward usually come with the **preterite**:
- **de repente**: suddenly
- **primero**, **después**, **entonces**: first, afterwards, then
- **al final**: in the end`,
        items: [
          'de repente | suddenly | all of a sudden',
          'entonces | then | so',
          'al final | in the end | finally;at the end',
          'después | afterwards | after;later;then',
          'De repente, se fue la luz. | Suddenly, the power went out. | All of a sudden, the power went out;Suddenly the lights went out;Suddenly, the lights went out;Suddenly the power went out',
          'Todo estaba tranquilo y de repente oímos un ruido. | Everything was calm and suddenly we heard a noise. | Everything was quiet and suddenly we heard a noise;Everything was calm and all of a sudden we heard a noise;Everything was quiet and all of a sudden we heard a noise',
          'Primero cenamos y después fuimos al cine. | First we had dinner and then we went to the movies. | First we ate dinner and then we went to the movies;First we had dinner and afterwards we went to the movies;First we had dinner and then went to the movies',
          'Al final, todo salió bien. | In the end, everything turned out fine. | In the end everything turned out well;In the end, everything worked out;In the end everything went well;In the end, everything went well',
          'Entonces llamé a la policía. | Then I called the police. | So I called the police',
          'Caminábamos por la calle cuando de repente empezó a llover. | We were walking down the street when suddenly it started to rain. | We were walking down the street when suddenly it began to rain;We were walking along the street when suddenly it started to rain;We were walking down the street when all of a sudden it started to rain;We were walking down the street when suddenly it started raining',
        ],
      },
    ],
    story: {
      title: 'Una noche extraña',
      lines: [
        'Elena: Era una noche oscura y llovía mucho. | It was a dark night and it was raining hard.',
        'Elena: Yo estaba sola en casa y leía un libro. | I was home alone and I was reading a book.',
        'Elena: De repente, oí un ruido en la cocina. | Suddenly, I heard a noise in the kitchen.',
        'Elena: Tenía mucho miedo, pero fui a la cocina. | I was very scared, but I went to the kitchen.',
        'Elena: La ventana estaba abierta y había agua en el piso. | The window was open and there was water on the floor.',
        'Elena: Entonces vi algo debajo de la mesa. | Then I saw something under the table.',
        'Elena: ¡Era mi gato! Estaba mojado y tenía hambre. | It was my cat! He was wet and hungry.',
        'Elena: Al final, le di comida y dormimos juntos. | In the end, I gave him food and we slept together.',
      ],
      questions: [
        { q: 'What was the weather like?', options: ['It was raining hard', 'It was sunny', 'It was snowing'], answer: 0 },
        { q: 'What was Elena doing when she heard the noise?', options: ['Reading a book', 'Cooking', 'Sleeping'], answer: 0 },
        { q: 'What was under the table?', options: ['Her cat', 'A dog', 'A thief'], answer: 0 },
      ],
    },
  }),

  unit(3, {
    id: 'u27-pronouns',
    title: 'Object pronouns',
    emoji: '🎁',
    description: 'Say "it", "him", "to her" and "it to them" without repeating nouns.',
    lessons: [
      {
        title: 'It, him, her, them',
        tip: `Direct object pronouns replace the thing or person:
- **lo**: it / him (masculine) · **la**: it / her (feminine)
- **los** / **las**: them
They go **before** the conjugated verb:
**Lo tengo** = I have it. **No la veo** = I don't see her.`,
        items: [
          'lo | it | him',
          'la | it | her',
          '¿Tienes el libro? Sí, lo tengo. | Do you have the book? Yes, I have it.',
          'La veo todos los días. | I see her every day. | I see it every day',
          'Compré las manzanas y las comí. | I bought the apples and ate them. | I bought the apples and I ate them',
          '¿Conoces a Pedro? No, no lo conozco. | Do you know Pedro? No, I don\'t know him. | Do you know Pedro? No, I do not know him',
          'Los llamo mañana. | I\'ll call them tomorrow. | I will call them tomorrow;I\'m calling them tomorrow',
          'No la entiendo. | I don\'t understand her. | I don\'t understand it;I do not understand her;I do not understand it',
          '¿Dónde están mis llaves? No las veo. | Where are my keys? I don\'t see them. | Where are my keys? I can\'t see them;Where are my keys? I do not see them;Where are my keys? I cannot see them',
        ],
      },
      {
        title: 'To him, to them',
        tip: `Indirect object pronouns say **to whom** or **for whom**:
- **me**: to me · **te**: to you · **le**: to him / her / you (formal)
- **nos**: to us · **les**: to them / you all
Spanish often keeps the person too: **Le di el dinero a mi hermano**.`,
        items: [
          'le | to him | to her;him;her;to you',
          'les | to them | them;to you all',
          'Le escribí una carta. | I wrote him a letter. | I wrote her a letter;I wrote a letter to him;I wrote a letter to her;I wrote you a letter',
          'Le di el dinero a mi hermano. | I gave the money to my brother. | I gave my brother the money',
          'Les compré un regalo a mis padres. | I bought my parents a gift. | I bought a gift for my parents;I bought my parents a present;I bought a present for my parents',
          '¿Le dijiste la verdad? | Did you tell him the truth? | Did you tell her the truth',
          'Mi mamá me preparó la cena. | My mom made me dinner. | My mom made dinner for me;My mother made me dinner;My mother made dinner for me;My mom cooked dinner for me;My mother cooked dinner for me',
          'Te mando un mensaje. | I\'ll send you a message. | I will send you a message;I\'ll text you;I send you a message',
          'Les explico la lección. | I\'ll explain the lesson to them. | I explain the lesson to them;I explain the lesson to you;I\'ll explain the lesson to you;I will explain the lesson to them',
        ],
      },
      {
        title: 'Before or after?',
        tip: `With an infinitive, the pronoun can go in **two places**:
- before the conjugated verb: **Lo voy a comprar**
- attached to the infinitive: **Voy a comprarlo**
Both mean "I'm going to buy it". The same works with **querer**, **poder**, **tener que**…`,
        items: [
          'Lo voy a comprar. | I\'m going to buy it. | I am going to buy it;I\'ll buy it | Voy a comprarlo.',
          'Quiero verla. | I want to see her. | I want to see it | La quiero ver.',
          '¿Me puedes ayudar? | Can you help me? | Could you help me | ¿Puedes ayudarme?',
          'Tengo que llamarlos. | I have to call them. | I need to call them;I\'ve got to call them | Los tengo que llamar.',
          'Te voy a escribir mañana. | I\'m going to write to you tomorrow. | I am going to write to you tomorrow;I\'m going to write you tomorrow;I am going to write you tomorrow;I\'ll write to you tomorrow;I\'ll write you tomorrow | Voy a escribirte mañana.',
          'No la quiero perder. | I don\'t want to lose her. | I don\'t want to lose it;I do not want to lose her;I do not want to lose it | No quiero perderla.',
          'Les voy a decir la verdad. | I\'m going to tell them the truth. | I am going to tell them the truth;I\'m going to tell you the truth;I am going to tell you the truth;I\'ll tell them the truth | Voy a decirles la verdad.',
          '¿Lo puedes repetir? | Can you repeat it? | Could you repeat it;Can you repeat that;Could you repeat that | ¿Puedes repetirlo?',
          'Necesito verte. | I need to see you. | Te necesito ver.',
        ],
      },
      {
        title: 'Give it to me',
        tip: `With two pronouns, **indirect comes first**: **me lo**, **te la**, **nos los**.
**le** / **les** + lo/la/los/las → **se**:
- ~~le lo~~ → **se lo**: **Se lo di** = I gave it to him/her.
When both attach to an infinitive, add an accent: **dártelo**, **decírselo**.`,
        items: [
          'se lo | it to him | it to her;it to them;it to you',
          '¿Me lo das? | Will you give it to me? | Can you give it to me;Are you giving it to me;Will you give me it',
          'Te lo prometo. | I promise you. | I promise;I promise you that',
          'Se lo di a mi hermana. | I gave it to my sister.',
          'Se lo dije ayer. | I told him yesterday. | I told her yesterday;I told them yesterday;I told you yesterday',
          '¿Se lo compraste? | Did you buy it for him? | Did you buy it for her;Did you buy it for them;Did you buy him it;Did you buy her it',
          'Mi papá me lo explicó. | My dad explained it to me. | My father explained it to me',
          'Te lo voy a dar. | I\'m going to give it to you. | I am going to give it to you;I\'ll give it to you | Voy a dártelo.',
          'Quiero decírselo. | I want to tell him. | I want to tell her;I want to tell them;I want to tell you | Se lo quiero decir.',
        ],
      },
    ],
    story: {
      title: 'El regalo',
      lines: [
        'Ana: ¿Compraste el regalo para mamá? | Did you buy the present for Mom?',
        'Luis: Sí, lo compré ayer. | Yes, I bought it yesterday.',
        'Ana: ¿Qué es? ¿Me lo muestras? | What is it? Will you show it to me?',
        'Luis: Es un libro de cocina. Mira. | It\'s a cookbook. Look.',
        'Ana: ¡Le va a encantar! ¿Cuándo se lo vas a dar? | She\'s going to love it! When are you going to give it to her?',
        'Luis: Se lo voy a dar el domingo, en su cumpleaños. | I\'m going to give it to her on Sunday, on her birthday.',
        'Ana: Yo le compré unas flores. Las tengo en mi cuarto. | I bought her some flowers. I have them in my room.',
        'Luis: ¡Perfecto! Es un secreto, ¿eh? | Perfect! It\'s a secret, okay?',
      ],
      questions: [
        { q: 'What did Luis buy?', options: ['A cookbook', 'Flowers', 'A cake'], answer: 0 },
        { q: 'When is he going to give it?', options: ['On Sunday, her birthday', 'Tonight', 'On Friday'], answer: 0 },
        { q: "Where are Ana's flowers?", options: ['In her room', 'In the kitchen', 'In the car'], answer: 0 },
      ],
    },
  }),

  unit(3, {
    id: 'u28-present-perfect',
    title: 'Have you ever…?',
    emoji: '✅',
    description: 'Say what you have and haven\'t done yet.',
    lessons: [
      {
        title: 'I have spoken',
        tip: `Present perfect = **haber** + participle:
- **he**, **has**, **ha**, **hemos**, **han**
Participles: **-ar → -ado** (hablado), **-er/-ir → -ido** (comido, vivido)
The participle never changes: **ella ha comido**, **ellos han comido**.`,
        items: [
          'esta semana | this week',
          'he hablado | I have spoken | I\'ve spoken;I have talked;I\'ve talked',
          'has comido | you have eaten | you\'ve eaten',
          'He trabajado mucho hoy. | I have worked a lot today. | I\'ve worked a lot today;I\'ve worked hard today;I have worked hard today',
          '¿Has comido? | Have you eaten? | Have you eaten yet;Did you eat',
          'Ella ha viajado mucho. | She has traveled a lot. | She\'s traveled a lot;She has travelled a lot;She\'s travelled a lot',
          'Hemos vivido aquí cinco años. | We have lived here for five years. | We\'ve lived here for five years;We have lived here five years;We\'ve lived here five years',
          'Ellos han llegado. | They have arrived. | They\'ve arrived;They have come;They\'re here',
          '¿Han estado en México? | Have you been to Mexico? | Have they been to Mexico;Have you all been to Mexico',
          'Esta semana he aprendido mucho. | This week I have learned a lot. | I\'ve learned a lot this week;I have learned a lot this week;This week I\'ve learned a lot;I\'ve learnt a lot this week',
        ],
      },
      {
        title: 'Irregular participles',
        tip: `Some common verbs have irregular participles:
- hacer → **hecho** · decir → **dicho** · ver → **visto**
- escribir → **escrito** · poner → **puesto** · volver → **vuelto**
- abrir → **abierto** · romper → **roto**`,
        items: [
          'hecho | done | made',
          'visto | seen',
          'dicho | said | told',
          '¿Qué has hecho? | What have you done? | What did you do',
          'He visto esa película. | I have seen that movie. | I\'ve seen that movie;I have seen that film;I\'ve seen that film',
          'Nunca te he dicho una mentira. | I have never told you a lie. | I\'ve never told you a lie;I have never lied to you;I\'ve never lied to you',
          'Ella ha escrito tres libros. | She has written three books. | She\'s written three books',
          '¿Quién ha abierto la ventana? | Who has opened the window? | Who opened the window;Who\'s opened the window',
          'Mis padres han vuelto de su viaje. | My parents have come back from their trip. | My parents have returned from their trip;My parents are back from their trip;My parents have gotten back from their trip',
          'He puesto la mesa. | I have set the table. | I\'ve set the table',
        ],
      },
      {
        title: 'Already & not yet',
        tip: `- **ya**: already / yet (in questions)
- **todavía no**: not yet
Nothing goes between **he/has/ha** and the participle, so pronouns go in front: **Ya lo he leído**.
In much of Latin America, people also just use the preterite: **¿Ya comiste?**`,
        items: [
          'ya | already | yet',
          'todavía no | not yet',
          '¿Ya has comido? | Have you already eaten? | Have you eaten yet;Have you eaten already;Did you already eat;Did you eat yet | ¿Ya comiste?',
          'Ya he terminado. | I have already finished. | I\'ve already finished;I\'ve finished already;I have finished already;I\'m already done;I\'m done already',
          'Todavía no he desayunado. | I haven\'t had breakfast yet. | I have not had breakfast yet;I haven\'t eaten breakfast yet;I still haven\'t had breakfast',
          'Todavía no han llegado. | They haven\'t arrived yet. | They have not arrived yet;They haven\'t come yet;They\'re not here yet;You haven\'t arrived yet',
          '¿Ya has hecho la tarea? | Have you done your homework yet? | Have you already done your homework;Have you done the homework yet;Have you already done the homework;Did you already do your homework',
          'Ya lo he leído. | I have already read it. | I\'ve already read it;I\'ve read it already;I have read it already',
          'Todavía no he visto a Marta. | I haven\'t seen Marta yet. | I have not seen Marta yet;I still haven\'t seen Marta',
          'Ya han salido. | They have already left. | They\'ve already left;They\'ve left already;They have left already;You have already left',
        ],
      },
      {
        title: 'Have you ever…?',
        tip: `- **¿Alguna vez has…?** = Have you ever…?
- **nunca** = never → **Nunca he…** = I've never…
- **dos veces** = twice · **muchas veces** = many times`,
        items: [
          'alguna vez | ever',
          'nunca | never',
          'muchas veces | many times | a lot of times;lots of times',
          '¿Has estado alguna vez en Perú? | Have you ever been to Peru? | ¿Alguna vez has estado en Perú?',
          '¿Alguna vez has comido mole? | Have you ever eaten mole? | Have you ever had mole;Have you ever tried mole | ¿Has comido mole alguna vez?',
          'Nunca he montado a caballo. | I have never ridden a horse. | I\'ve never ridden a horse;I have never been horseback riding;I\'ve never been horseback riding | No he montado a caballo nunca.',
          'He estado en Colombia dos veces. | I have been to Colombia twice. | I\'ve been to Colombia twice;I have been to Colombia two times;I\'ve been to Colombia two times',
          'Mi hermano nunca ha visto el mar. | My brother has never seen the sea. | My brother\'s never seen the sea;My brother has never seen the ocean;My brother\'s never seen the ocean',
          '¿Han probado la comida peruana? | Have you tried Peruvian food? | Have you all tried Peruvian food;Have they tried Peruvian food',
          'Sí, la he probado muchas veces. | Yes, I have tried it many times. | Yes, I\'ve tried it many times;Yes, I have had it many times;Yes, I\'ve had it many times;Yes, I\'ve tried it lots of times;Yes, I have tried it a lot of times',
        ],
      },
    ],
    story: {
      title: 'El viaje a Argentina',
      lines: [
        'Pablo: ¿Has estado alguna vez en Argentina? | Have you ever been to Argentina?',
        'Inés: Sí, he estado dos veces. ¿Y tú? | Yes, I\'ve been twice. And you?',
        'Pablo: Nunca. Pero he visto muchas fotos. | Never. But I\'ve seen a lot of photos.',
        'Inés: ¿Ya has comprado los boletos para el viaje? | Have you already bought the tickets for the trip?',
        'Pablo: Todavía no. He estado muy ocupado esta semana. | Not yet. I\'ve been very busy this week.',
        'Inés: ¿Has hablado con tu jefe? | Have you talked to your boss?',
        'Pablo: Sí, y me ha dicho que puedo tomar dos semanas. | Yes, and he has told me I can take two weeks.',
        'Inés: ¡Qué bien! ¿Has probado el asado? | Great! Have you tried asado?',
        'Pablo: No, nunca lo he probado. ¡Es lo primero que voy a hacer! | No, I\'ve never tried it. It\'s the first thing I\'m going to do!',
      ],
      questions: [
        { q: 'How many times has Inés been to Argentina?', options: ['Twice', 'Never', 'Once'], answer: 0 },
        { q: 'Has Pablo bought the tickets?', options: ['Not yet', 'Yes, last week', 'Yes, but he lost them'], answer: 0 },
        { q: 'How much time can Pablo take off?', options: ['Two weeks', 'One week', 'A month'], answer: 0 },
      ],
    },
  }),

  unit(3, {
    id: 'u29-future',
    title: 'The future',
    emoji: '🔮',
    description: 'Make plans, promises and predictions with the simple future.',
    lessons: [
      {
        title: 'I will speak',
        tip: `The future adds endings to the **whole infinitive**:
- **-é**, **-ás**, **-á**, **-emos**, **-án**
- **hablaré**, **hablarás**, **hablará**, **hablaremos**, **hablarán**
Same endings for **-ar**, **-er** and **-ir** verbs. In everyday talk, **ir a + infinitive** is also very common.`,
        items: [
          'hablaré | I will speak | I\'ll speak;I will talk;I\'ll talk',
          'viajaremos | we will travel | we\'ll travel',
          'el próximo año | next year | el año que viene',
          'Mañana trabajaré en casa. | Tomorrow I will work at home. | I\'ll work at home tomorrow;I will work at home tomorrow;Tomorrow I\'ll work at home;Tomorrow I will work from home;I\'ll work from home tomorrow',
          '¿Comerás con nosotros? | Will you eat with us? | Will you have lunch with us;Will you have dinner with us;Are you going to eat with us',
          'El próximo año viviremos en Bogotá. | Next year we will live in Bogotá. | Next year we\'ll live in Bogotá;We will live in Bogotá next year;We\'ll live in Bogotá next year',
          'Ella estudiará medicina. | She will study medicine. | She\'ll study medicine;She is going to study medicine',
          'Te llamaré esta noche. | I will call you tonight. | I\'ll call you tonight;I\'ll call you this evening;I will call you this evening',
          'Ellos llegarán a las seis. | They will arrive at six. | They\'ll arrive at six;They will get here at six;They\'ll get here at six',
          'Nos veremos pronto. | We will see each other soon. | We\'ll see each other soon;See you soon;We\'ll meet soon',
        ],
      },
      {
        title: 'Irregular futures',
        tip: `A few verbs change the stem but keep the same endings:
- tener → **tendr-** · salir → **saldr-** · venir → **vendr-**
- poder → **podr-** · saber → **sabr-**
- hacer → **har-** · decir → **dir-**
**tendré**, **haré**, **podré**, **saldré**, **diré**`,
        items: [
          'tendré | I will have | I\'ll have',
          'haré | I will do | I\'ll do;I will make;I\'ll make',
          'podré | I will be able to | I\'ll be able to',
          'Tendré tiempo el sábado. | I will have time on Saturday. | I\'ll have time on Saturday;I will have time Saturday;I\'ll have time Saturday',
          'Haré la tarea después. | I will do the homework later. | I\'ll do the homework later;I\'ll do my homework later;I will do my homework later',
          '¿Podrás venir mañana? | Will you be able to come tomorrow? | Can you come tomorrow',
          'Saldremos a las siete. | We will leave at seven. | We\'ll leave at seven;We will go out at seven;We\'ll go out at seven',
          'No te diré nada. | I won\'t tell you anything. | I will not tell you anything;I won\'t say anything to you;I will not say anything to you',
          'Mis tíos vendrán en diciembre. | My aunt and uncle will come in December. | My uncles will come in December;My aunt and uncle are coming in December;My aunts and uncles will come in December',
          'Ella sabrá la respuesta. | She will know the answer. | She\'ll know the answer',
        ],
      },
      {
        title: 'Plans & promises',
        tip: `More irregular stems:
- poner → **pondr-** · querer → **querr-**
- haber → **habrá** = there will be
**Te prometo que lo haré** = I promise I'll do it.`,
        items: [
          'habrá | there will be',
          'el futuro | the future',
          'Habrá mucha gente en el concierto. | There will be a lot of people at the concert. | There will be many people at the concert;There\'ll be a lot of people at the concert;There will be lots of people at the concert',
          'Te prometo que lo haré. | I promise you that I will do it. | I promise I\'ll do it;I promise you I\'ll do it;I promise I will do it;I promise you I will do it',
          'Pondré las flores aquí. | I will put the flowers here. | I\'ll put the flowers here',
          'Algún día hablaré español muy bien. | One day I will speak Spanish very well. | Someday I\'ll speak Spanish very well;Some day I will speak Spanish very well;One day I\'ll speak Spanish very well;Someday I will speak Spanish very well',
          'En el futuro, los carros serán eléctricos. | In the future, cars will be electric. | In the future cars will be electric | En el futuro, los autos serán eléctricos.',
          '¿Qué harás este fin de semana? | What will you do this weekend? | What are you going to do this weekend;What are you doing this weekend',
          'Mañana lloverá. | It will rain tomorrow. | Tomorrow it will rain;It\'ll rain tomorrow',
        ],
      },
      {
        title: 'I wonder…',
        tip: `The future also expresses a **guess** about the present:
- **¿Qué hora será?** = I wonder what time it is.
- **Estará en casa.** = He's probably at home.
- **Tendrá unos cuarenta años.** = She must be about forty.`,
        items: [
          'probablemente | probably',
          '¿Qué hora será? | I wonder what time it is. | What time could it be;What time might it be',
          '¿Dónde estará mi teléfono? | I wonder where my phone is. | Where could my phone be;Where might my phone be',
          'Estará en casa. | He is probably at home. | She is probably at home;He must be at home;She must be at home;He\'s probably at home;She\'s probably at home;He\'s probably home;She\'s probably home',
          'Serán las diez. | It must be about ten. | It\'s probably about ten;It\'s probably ten;It must be ten;It is probably around ten',
          'Tendrá unos cuarenta años. | He must be about forty. | She must be about forty;He\'s probably about forty;She\'s probably about forty;He must be around forty;She must be around forty',
          '¿Quién será? | I wonder who it is. | Who could it be;Who might that be;Who could that be',
          'Probablemente lloverá mañana. | It will probably rain tomorrow. | It\'ll probably rain tomorrow;Tomorrow it will probably rain',
        ],
      },
    ],
    story: {
      title: 'La adivina',
      lines: [
        'Marco: Buenas tardes. ¿Usted puede ver el futuro? | Good afternoon. Can you see the future?',
        'Adivina: Claro. Veo muchas cosas en su mano. | Of course. I see many things in your hand.',
        'Adivina: El próximo año tendrá un trabajo nuevo. | Next year you will have a new job.',
        'Marco: ¿Ganaré mucho dinero? | Will I earn a lot of money?',
        'Adivina: Sí, y viajará a muchos países. | Yes, and you will travel to many countries.',
        'Marco: ¿Y el amor? | And love?',
        'Adivina: Conocerá a una mujer muy inteligente en un avión. | You will meet a very intelligent woman on a plane.',
        'Marco: ¡Qué bien! ¿Cuándo será? | Great! When will it be?',
        'Adivina: Eso no lo sé. Pero ahora me pagará cincuenta pesos. | That I don\'t know. But now you will pay me fifty pesos.',
      ],
      questions: [
        { q: 'What will Marco have next year?', options: ['A new job', 'A new car', 'A baby'], answer: 0 },
        { q: 'Where will he meet the woman?', options: ['On a plane', 'At work', 'In a café'], answer: 0 },
        { q: 'How much does Marco have to pay?', options: ['Fifty pesos', 'Five pesos', 'A hundred pesos'], answer: 0 },
      ],
    },
  }),

  unit(3, {
    id: 'u30-conditional',
    title: 'Would you…?',
    emoji: '💭',
    description: 'Make polite requests and talk about what you would do.',
    lessons: [
      {
        title: 'I would',
        tip: `The conditional adds **-ía** endings to the infinitive:
- **-ía**, **-ías**, **-ía**, **-íamos**, **-ían**
- **compraría**, **comerías**, **viviría**
Irregular stems are the same as the future: **tendría**, **haría**, **diría**, **podría**.`,
        items: [
          'me gustaría | I would like | I\'d like',
          'tendría | I would have | I\'d have;he would have;she would have',
          'Me gustaría viajar a Chile. | I would like to travel to Chile. | I\'d like to travel to Chile;I would like to go to Chile;I\'d like to go to Chile',
          '¿Te gustaría venir conmigo? | Would you like to come with me? | Do you want to come with me',
          'Yo compraría esa casa. | I would buy that house. | I\'d buy that house | Compraría esa casa.',
          'Ella viviría en la playa. | She would live at the beach. | She\'d live at the beach;She would live on the beach;She\'d live on the beach;She would live by the beach',
          'Nosotros comeríamos aquí. | We would eat here. | We\'d eat here | Comeríamos aquí.',
          '¿Qué harías tú? | What would you do? | ¿Tú qué harías?;¿Qué harías?',
          'Yo no diría eso. | I wouldn\'t say that. | I would not say that | No diría eso.',
        ],
      },
      {
        title: 'Polite requests',
        tip: `The conditional makes requests softer:
- **¿Podría…?** = Could you…? (usted)
- **¿Podrías…?** = Could you…? (tú)
- **Quisiera…** / **Me gustaría…** = I would like…
- **¿Le importaría…?** = Would you mind…?`,
        items: [
          'quisiera | I would like | I\'d like',
          '¿Podría ayudarme? | Could you help me? | Would you be able to help me;Can you help me | ¿Me podría ayudar?',
          '¿Podrías cerrar la puerta? | Could you close the door? | Could you shut the door;Can you close the door;Would you close the door',
          'Quisiera una mesa para dos. | I would like a table for two. | I\'d like a table for two',
          'Me gustaría un café. | I would like a coffee. | I\'d like a coffee;I would like coffee;I\'d like coffee',
          '¿Me podría traer la cuenta? | Could you bring me the check? | Could you bring me the bill;Could I have the check;Could I have the bill;Can you bring me the check | ¿Podría traerme la cuenta?',
          '¿Sería posible cambiar la fecha? | Would it be possible to change the date?',
          '¿Le importaría esperar un momento? | Would you mind waiting a moment? | Would you mind waiting a minute;Would you mind waiting for a moment',
          '¿Qué me recomendaría? | What would you recommend? | What would you recommend to me;What do you recommend',
        ],
      },
      {
        title: 'If I had…',
        tip: `For "if" daydreams, Spanish uses a special past form after **si**. Learn these as chunks:
- **si tuviera** = if I had
- **si pudiera** = if I could
- **si fuera tú** = if I were you
Then the result goes in the conditional: **Si tuviera dinero, viajaría**.`,
        items: [
          'si tuviera | if I had',
          'si fuera tú | if I were you | if I was you',
          'Si tuviera dinero, viajaría por el mundo. | If I had money, I would travel around the world. | If I had money, I\'d travel around the world;If I had money, I would travel the world;If I had money, I\'d travel the world',
          'Si fuera tú, no lo haría. | If I were you, I wouldn\'t do it. | If I were you, I would not do it;If I was you, I wouldn\'t do it;If I were you, I wouldn\'t do that | Yo que tú, no lo haría.',
          'Si pudiera, viviría en la playa. | If I could, I would live at the beach. | If I could, I\'d live at the beach;If I could, I would live on the beach;If I could, I\'d live on the beach;If I could, I\'d live by the beach',
          'Si tuviera tiempo, aprendería a bailar. | If I had time, I would learn to dance. | If I had time, I\'d learn to dance;If I had time, I would learn how to dance;If I had time, I\'d learn how to dance',
          '¿Qué harías con un millón de dólares? | What would you do with a million dollars? | What would you do with one million dollars',
          'Compraría una casa para mis padres. | I would buy a house for my parents. | I\'d buy a house for my parents;I would buy my parents a house;I\'d buy my parents a house',
          'Yo en tu lugar, hablaría con ella. | In your place, I would talk to her. | If I were you, I would talk to her;If I were you, I\'d talk to her;In your place, I\'d talk to her;If I were you, I would speak with her;In your place, I would speak with her',
        ],
      },
      {
        title: 'Could, should',
        tip: `Three very useful conditional forms:
- **podría** = could · **Podríamos ir** = We could go
- **debería** = should · **Deberías descansar** = You should rest
- **sería** = would be · **Sería mejor** = It would be better
Also for reported speech: **Dijo que vendría** = He said he would come.`,
        items: [
          'debería | I should | I ought to;he should;she should',
          'podría | I could | he could;she could;you could',
          'sería | it would be | I would be',
          'Sería mejor salir temprano. | It would be better to leave early. | It\'d be better to leave early',
          'Deberíamos llamar a un doctor. | We should call a doctor. | We ought to call a doctor',
          'Podríamos ir al cine esta noche. | We could go to the movies tonight. | We could go to the cinema tonight;We could go to the movies this evening',
          'No deberías comer tanto. | You shouldn\'t eat so much. | You should not eat so much;You shouldn\'t eat that much',
          'Deberías descansar más. | You should rest more. | You ought to rest more',
          'Dijo que vendría a las ocho. | He said he would come at eight. | She said she would come at eight;He said he\'d come at eight;She said she\'d come at eight;He said that he would come at eight;She said that she would come at eight',
          'Pensé que sería más fácil. | I thought it would be easier. | I thought that it would be easier;I thought it\'d be easier',
        ],
      },
    ],
    story: {
      title: 'La lotería',
      lines: [
        'Rosa: ¿Qué harías si ganaras la lotería? | What would you do if you won the lottery?',
        'Javier: Primero, compraría una casa grande para mi familia. | First, I would buy a big house for my family.',
        'Rosa: ¿Y dejarías tu trabajo? | And would you quit your job?',
        'Javier: No, me gusta mi trabajo. Pero trabajaría menos. | No, I like my job. But I would work less.',
        'Rosa: Yo viajaría por todo el mundo. | I would travel all over the world.',
        'Javier: ¿Adónde irías primero? | Where would you go first?',
        'Rosa: Iría a Japón. Siempre he querido ir. | I would go to Japan. I\'ve always wanted to go.',
        'Javier: ¿Me llevarías contigo? | Would you take me with you?',
        'Rosa: ¡Claro! Pero tú pagarías los hoteles. | Of course! But you would pay for the hotels.',
      ],
      questions: [
        { q: 'What would Javier buy first?', options: ['A big house for his family', 'A new car', 'A boat'], answer: 0 },
        { q: 'Would Javier quit his job?', options: ['No, but he would work less', 'Yes, right away', 'He would start a company'], answer: 0 },
        { q: 'Where would Rosa go first?', options: ['Japan', 'Italy', 'Mexico'], answer: 0 },
      ],
    },
  }),

  unit(3, {
    id: 'u31-commands',
    title: 'Commands',
    emoji: '📢',
    description: 'Tell people what to do — and what not to do.',
    lessons: [
      {
        title: 'Do it! (tú)',
        tip: `Affirmative **tú** commands look like the **él/ella** present form:
- hablar → **habla** · comer → **come** · escribir → **escribe**
Stem changes stay: cerrar → **cierra**.
Add **por favor** to sound polite.`,
        items: [
          'habla | speak | talk',
          'Habla más despacio, por favor. | Speak more slowly, please. | Talk more slowly, please;Speak slower, please;Please speak more slowly;Please speak slower',
          'Come tus verduras. | Eat your vegetables. | Eat your veggies',
          'Escribe tu nombre aquí. | Write your name here.',
          'Abre la ventana. | Open the window.',
          'Toma el autobús número cinco. | Take bus number five. | Take the number five bus',
          'Mira esto. | Look at this. | Watch this',
          'Espera un momento. | Wait a moment. | Wait a minute;Hold on a moment;Wait a second',
          'Llama a tu madre. | Call your mother. | Call your mom',
          'Cierra la puerta, por favor. | Close the door, please. | Shut the door, please;Please close the door;Please shut the door',
        ],
      },
      {
        title: 'Irregular tú commands',
        tip: `Eight short irregular **tú** commands:
- **di** (decir) · **haz** (hacer) · **ve** (ir) · **pon** (poner)
- **sal** (salir) · **sé** (ser) · **ten** (tener) · **ven** (venir)`,
        items: [
          'ven | come',
          'haz | do | make',
          'Ven aquí. | Come here.',
          'Haz la tarea. | Do the homework. | Do your homework',
          'Pon la mesa, por favor. | Set the table, please. | Please set the table',
          'Sal de aquí. | Get out of here. | Leave here;Go out of here',
          'Ten cuidado. | Be careful. | Take care',
          'Sé bueno. | Be good. | Be nice',
          'Ve a tu cuarto. | Go to your room.',
          'Di la verdad. | Tell the truth.',
        ],
      },
      {
        title: "Don't! (tú)",
        tip: `Negative **tú** commands: take the **yo** form, drop the **-o**, and switch the vowel:
- **-ar → -es**: hablo → **no hables**
- **-er/-ir → -as**: como → **no comas**, vengo → **no vengas**, hago → **no hagas**
Irregular: **no vayas** (ir), **no seas** (ser).`,
        items: [
          'no hables | don\'t speak | don\'t talk;do not speak;do not talk',
          'No hables tan rápido. | Don\'t speak so fast. | Don\'t talk so fast;Do not speak so fast;Do not talk so fast;Don\'t speak so quickly',
          'No comas eso. | Don\'t eat that. | Do not eat that',
          'No llegues tarde. | Don\'t be late. | Don\'t arrive late;Do not be late;Do not arrive late',
          'No vengas mañana. | Don\'t come tomorrow. | Do not come tomorrow',
          'No hagas ruido. | Don\'t make noise. | Don\'t make any noise;Do not make noise;Do not make any noise',
          'No vayas solo. | Don\'t go alone. | Do not go alone;Don\'t go by yourself',
          'No seas malo. | Don\'t be mean. | Don\'t be bad;Do not be mean;Don\'t be nasty',
          'No te preocupes. | Don\'t worry. | Do not worry',
          'No toques nada. | Don\'t touch anything. | Do not touch anything',
        ],
      },
      {
        title: 'Polite commands',
        tip: `**usted** commands use the same switched vowel, with or without **no**:
- hablar → **hable** / **no hable** · comer → **coma** · venir → **venga**
- ir → **vaya** · hacer → **haga**
For **ustedes**, add **-n**: **hablen**, **vengan**, **escuchen**.`,
        items: [
          'Pase, por favor. | Come in, please. | Please come in',
          'Siéntese, por favor. | Sit down, please. | Please sit down;Please have a seat;Have a seat, please',
          'Hable con el gerente. | Speak with the manager. | Talk to the manager;Speak to the manager;Talk with the manager',
          'Tome esta pastilla dos veces al día. | Take this pill twice a day. | Take this pill two times a day;Take this tablet twice a day',
          'No fume aquí, por favor. | Please don\'t smoke here. | Don\'t smoke here, please;Do not smoke here, please;Please do not smoke here',
          'Vaya derecho y doble a la izquierda. | Go straight and turn left. | Go straight ahead and turn left;Go straight and turn to the left;Go straight on and turn left',
          'Venga mañana a las diez. | Come tomorrow at ten. | Come back tomorrow at ten;Come at ten tomorrow',
          'No se preocupe. | Don\'t worry. | Do not worry',
          'Escuchen, por favor. | Listen, please. | Please listen;Everyone, listen please',
        ],
      },
      {
        title: 'Tell me!',
        tip: `Pronouns **attach** to affirmative commands, and you add an accent to keep the stress:
- **di + me + lo → dímelo** = tell me
- **haz + lo → hazlo** = do it
In negative commands they go **before** the verb:
- **No lo hagas** = Don't do it. · **No me lo digas** = Don't tell me.`,
        items: [
          'Dímelo. | Tell me. | Tell it to me',
          'Hazlo ahora. | Do it now.',
          'No lo hagas. | Don\'t do it. | Do not do it;Don\'t do that',
          'Dámelo, por favor. | Give it to me, please. | Please give it to me;Give me it, please',
          'No me lo digas. | Don\'t tell me. | Do not tell me;Don\'t tell me that',
          'Siéntate aquí. | Sit here. | Sit down here;Have a seat here',
          'Llámame mañana. | Call me tomorrow.',
          'No te vayas. | Don\'t go. | Don\'t leave;Do not go;Do not leave',
          'Cómpralo si te gusta. | Buy it if you like it.',
          'Ayúdeme, por favor. | Help me, please. | Please help me',
        ],
      },
    ],
    story: {
      title: 'Tortillas con la abuela',
      lines: [
        'Abuela: Ven, Sofía. Hoy vamos a hacer tortillas. | Come here, Sofía. Today we\'re going to make tortillas.',
        'Sofía: ¡Sí! ¿Qué hago primero? | Yes! What do I do first?',
        'Abuela: Lávate las manos. Después, pon la harina aquí. | Wash your hands. Then put the flour here.',
        'Sofía: ¿Así? | Like this?',
        'Abuela: Sí. Ahora añade un poco de agua. ¡No pongas mucha! | Yes. Now add a little water. Don\'t put too much!',
        'Sofía: Ay, ¿es mucha? | Oh, is it too much?',
        'Abuela: No te preocupes. Pon más harina y mezcla todo bien. | Don\'t worry. Put in more flour and mix everything well.',
        'Sofía: ¿Y ahora? | And now?',
        'Abuela: Ahora haz bolitas pequeñas. ¡Y no te comas la masa! | Now make little balls. And don\'t eat the dough!',
      ],
      questions: [
        { q: 'What are they making?', options: ['Tortillas', 'A cake', 'Soup'], answer: 0 },
        { q: 'What does Sofía have to do first?', options: ['Wash her hands', 'Add water', 'Make little balls'], answer: 0 },
        { q: 'What does Grandma tell her not to eat?', options: ['The dough', 'The flour', 'The tortillas'], answer: 0 },
      ],
    },
  }),

  unit(3, {
    id: 'u32-por-para',
    title: 'Por & para',
    emoji: '⚖️',
    description: 'Two words for "for" — and when to use each one.',
    lessons: [
      {
        title: 'Para: goal & destination',
        tip: `**para** points toward a goal:
- purpose: **para aprender** = in order to learn
- recipient: **para ti** = for you
- destination: **para Lima** = for / toward Lima
- deadline: **para el lunes** = by Monday
- opinion: **para mí** = in my opinion`,
        items: [
          'para | for | in order to;to',
          'Este regalo es para ti. | This gift is for you. | This present is for you',
          'Estudio para aprender. | I study to learn. | I study in order to learn',
          'Salimos para Lima mañana. | We leave for Lima tomorrow. | We\'re leaving for Lima tomorrow;We are leaving for Lima tomorrow',
          'Trabajo para una empresa grande. | I work for a big company. | I work for a large company',
          'Necesito el informe para el lunes. | I need the report by Monday. | I need the report for Monday',
          'Para mí, el español es fácil. | For me, Spanish is easy. | To me, Spanish is easy;In my opinion, Spanish is easy',
          'Ahorro dinero para comprar un carro. | I\'m saving money to buy a car. | I save money to buy a car;I am saving money to buy a car;I\'m saving money in order to buy a car',
          '¿Para qué sirve esto? | What is this for? | What\'s this for;What is this used for',
          '¿Para quién es? | Who is it for? | Who\'s it for;For whom is it',
        ],
      },
      {
        title: 'Por: through & because',
        tip: `**por** is about the route or the reason:
- through / along / around: **por el parque**
- means: **por teléfono**, **por correo**
- cause: **por el tráfico** = because of the traffic
- part of the day: **por la mañana**
- thanks: **gracias por…**`,
        items: [
          'por | for | through;by;because of',
          'por la mañana | in the morning',
          'Caminamos por el parque. | We walked through the park. | We walk through the park;We walked around the park;We walk around the park;We walked in the park',
          'Te llamo por teléfono. | I\'ll call you on the phone. | I call you on the phone;I\'ll phone you;I will call you on the phone',
          'Te mando las fotos por correo. | I\'ll send you the photos by email. | I\'ll send you the photos by mail;I will send you the photos by email;I\'ll email you the photos;I\'ll send you the pictures by email',
          'Gracias por todo. | Thank you for everything. | Thanks for everything',
          'Llegué tarde por el tráfico. | I arrived late because of the traffic. | I was late because of the traffic;I got here late because of the traffic;I arrived late because of traffic;I was late because of traffic',
          'Pasé por tu casa. | I went by your house. | I stopped by your house;I passed by your house;I came by your house',
          'Trabajo por la tarde. | I work in the afternoon. | I work in the afternoons;I work in the evening',
          'Viví en Chile por dos años. | I lived in Chile for two years. | I lived in Chile two years | Viví en Chile dos años.',
        ],
      },
      {
        title: 'Por: exchange & rate',
        tip: `**por** is also for trades and rates:
- price: **Pagué veinte dólares por la camisa**
- swap: **mi sándwich por tu manzana**
- per: **por hora**, **por persona**, **tres veces por semana**
- on behalf of: **Lo hice por ti** = I did it for you (for your sake)`,
        items: [
          'por persona | per person',
          'Pagué veinte dólares por la camisa. | I paid twenty dollars for the shirt.',
          'Te cambio mi sándwich por tu manzana. | I\'ll trade you my sandwich for your apple. | I\'ll swap my sandwich for your apple;I will trade you my sandwich for your apple;I\'ll swap you my sandwich for your apple',
          'cien kilómetros por hora | a hundred kilometers per hour | one hundred kilometers per hour;100 kilometers per hour;a hundred kilometers an hour;one hundred kilometres per hour;a hundred kilometres per hour',
          'Voy al gimnasio tres veces por semana. | I go to the gym three times a week. | I go to the gym three times per week | Voy al gimnasio tres veces a la semana.',
          'Lo hice por ti. | I did it for you. | I did it for your sake',
          'Mi hermano habló por mí. | My brother spoke for me. | My brother spoke on my behalf;My brother talked for me',
          'Gracias por la ayuda. | Thanks for the help. | Thank you for the help;Thanks for your help;Thank you for your help',
          'La cena cuesta treinta pesos por persona. | Dinner costs thirty pesos per person. | The dinner costs thirty pesos per person;Dinner is thirty pesos per person',
        ],
      },
      {
        title: 'Fixed expressions',
        tip: `Some phrases just have to be memorized:
- **por favor**, **por fin**, **por supuesto**, **por eso**
- **por ejemplo**, **por cierto**, **por lo menos**
- **para siempre** = forever`,
        items: [
          'por fin | finally | at last',
          'por supuesto | of course',
          'por eso | that\'s why | that is why;so;for that reason',
          'por ejemplo | for example | for instance',
          'por lo menos | at least',
          'para siempre | forever | for ever',
          '¡Por fin llegaste! | You finally arrived! | You\'re finally here;At last you arrived;You finally got here;Finally you arrived;Finally you\'re here',
          'Estaba cansado, por eso no fui. | I was tired, that\'s why I didn\'t go. | I was tired, so I didn\'t go;I was tired, that is why I did not go;I was tired, so I did not go',
          'Por cierto, ¿viste a Carlos? | By the way, did you see Carlos? | By the way, have you seen Carlos',
          'Por lo menos no llovió. | At least it didn\'t rain. | At least it did not rain',
        ],
      },
      {
        title: 'Por or para?',
        tip: `Quick test:
- **para** → looking ahead: goal, receiver, destination, deadline
- **por** → looking back or through: cause, route, exchange, duration
**¿Por qué?** asks "why?" (the cause). **¿Para qué?** asks "what for?" (the goal).`,
        items: [
          'Salgo para la oficina por la mañana. | I leave for the office in the morning. | I head to the office in the morning;I\'m leaving for the office in the morning',
          'Compré flores para mi novia por diez dólares. | I bought flowers for my girlfriend for ten dollars. | I bought my girlfriend flowers for ten dollars',
          'Lo necesito para mañana. | I need it by tomorrow. | I need it for tomorrow',
          'Estudio mucho para el examen. | I study a lot for the exam. | I\'m studying a lot for the exam;I am studying a lot for the exam;I study hard for the exam;I\'m studying hard for the exam',
          'No pude ir por la lluvia. | I couldn\'t go because of the rain. | I could not go because of the rain;I wasn\'t able to go because of the rain',
          'Para ser estudiante, habla muy bien. | For a student, he speaks very well. | For a student, she speaks very well;For a student, he speaks really well;For a student, she speaks really well',
          'Este libro fue escrito por una mujer mexicana. | This book was written by a Mexican woman.',
          '¿Por qué estudias español? Para viajar. | Why do you study Spanish? To travel. | Why are you studying Spanish? To travel;Why do you study Spanish? In order to travel;Why are you studying Spanish? In order to travel',
          'Caminamos por la playa para llegar al hotel. | We walked along the beach to get to the hotel. | We walked on the beach to get to the hotel;We walked along the beach in order to get to the hotel',
        ],
      },
    ],
    story: {
      title: 'El viaje a Cusco',
      lines: [
        'Clara: Mañana salgo para Cusco. | Tomorrow I leave for Cusco.',
        'Martín: ¡Qué bien! ¿Por cuánto tiempo? | Great! For how long?',
        'Clara: Por dos semanas. Voy a visitar a mi tía y caminar por Machu Picchu. | For two weeks. I\'m going to visit my aunt and walk around Machu Picchu.',
        'Martín: ¿Cuánto pagaste por el boleto? | How much did you pay for the ticket?',
        'Clara: Pagué trescientos dólares por el vuelo. | I paid three hundred dollars for the flight.',
        'Martín: No está mal. ¿Ya tienes todo para el viaje? | Not bad. Do you have everything for the trip yet?',
        'Clara: Casi. Por eso voy al mercado ahora, para comprar una mochila. | Almost. That\'s why I\'m going to the market now, to buy a backpack.',
        'Martín: Te acompaño. Por cierto, ¿me traes un regalo? | I\'ll go with you. By the way, will you bring me a present?',
        'Clara: ¡Por supuesto! Algo especial para ti. | Of course! Something special for you.',
      ],
      questions: [
        { q: "How long is Clara's trip?", options: ['Two weeks', 'One week', 'A month'], answer: 0 },
        { q: 'How much did the flight cost?', options: ['Three hundred dollars', 'Two hundred dollars', 'Five hundred dollars'], answer: 0 },
        { q: 'Why is Clara going to the market?', options: ['To buy a backpack', 'To buy a present', 'To meet her aunt'], answer: 0 },
      ],
    },
  }),
]
