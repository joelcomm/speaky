import { unit } from './build'

// Section 4 (upper intermediate) — units 38–42. Latin American Spanish: "ustedes" for plural you, no "vosotros".
export default [
  unit(4, {
    id: 'u38-relatives',
    title: 'Who, which, where',
    emoji: '🔗',
    description: 'Link ideas with que, quien, lo que, donde, el que and cuyo.',
    lessons: [
      {
        title: 'que',
        tip: `**que** = that, which, who. It works for people and things.
- **el libro que leo** = the book (that) I'm reading
- **la mujer que canta** = the woman who sings
English can drop "that", but Spanish **never drops que**.`,
        items: [
          'que | that | which;who',
          'el vecino | the neighbor | the neighbour;neighbor',
          'el libro que leo | the book I am reading | the book that I\'m reading;the book I\'m reading;the book that I am reading;the book that I read;the book I read',
          'El hombre que vive aquí es doctor. | The man who lives here is a doctor. | The man that lives here is a doctor;The man who lives here is a physician',
          'La película que vimos fue muy buena. | The movie we saw was very good. | The movie that we saw was very good;The film we saw was very good;The film that we saw was very good;The movie we saw was really good',
          'Tengo un amigo que habla francés. | I have a friend who speaks French. | I have a friend that speaks French;I\'ve got a friend who speaks French',
          '¿Dónde está el pastel que compraste? | Where is the cake you bought? | Where\'s the cake you bought;Where is the cake that you bought;Where\'s the cake that you bought',
          'Es la canción que más me gusta. | It is the song I like the most. | It\'s the song I like most;It is the song that I like the most;It\'s my favorite song;It\'s the song I like the most;It is the song I like most',
          'Los zapatos que llevas son nuevos. | The shoes you are wearing are new. | The shoes you\'re wearing are new;The shoes that you are wearing are new;The shoes that you\'re wearing are new',
        ],
      },
      {
        title: 'quien & quienes',
        tip: `For **people after a preposition** (con, para, de, a), use **quien** / **quienes**.
- **la chica con quien hablé** = the girl I talked to
- **los amigos con quienes viajo** = the friends I travel with
Also between commas: **Mi jefe, quien es amable…**
English puts the preposition at the end; Spanish keeps it **in front**.`,
        items: [
          'quien | who | whom',
          'quienes | who | whom;who (plural)',
          'con quien | with whom | who with',
          'La chica con quien hablé es mi prima. | The girl I talked to is my cousin. | The girl who I talked to is my cousin;The girl with whom I spoke is my cousin;The girl I spoke with is my cousin;The girl I spoke to is my cousin;The girl I talked with is my cousin',
          'Los amigos con quienes viajo son muy divertidos. | The friends I travel with are a lot of fun. | The friends who I travel with are very fun;The friends with whom I travel are very fun;The friends I travel with are really fun;The friends I travel with are very funny;The friends I travel with are lots of fun',
          'Mi jefe, quien es muy amable, me ayudó. | My boss, who is very nice, helped me. | My boss, who\'s very kind, helped me;My boss, who is very kind, helped me;My boss, who\'s very nice, helped me;My boss, who is really nice, helped me',
          'Es el profesor de quien te hablé. | He is the teacher I told you about. | He\'s the teacher I told you about;He is the teacher I talked to you about;He\'s the teacher I talked to you about;It\'s the teacher I told you about;That\'s the teacher I told you about',
          'Ella es la persona para quien trabajo. | She is the person I work for. | She\'s the person I work for;She is the person for whom I work',
          '¿Quién es el chico a quien saludaste? | Who is the guy you said hi to? | Who\'s the guy you said hi to;Who is the boy you greeted;Who is the guy you greeted;Who\'s the boy you said hello to;Who is the guy you said hello to;Who\'s the guy you said hello to',
        ],
      },
      {
        title: 'lo que',
        tip: `**lo que** = what, the thing that. Use it for ideas, not a specific noun.
- **No entiendo lo que dices** = I don't understand what you're saying
- **todo lo que** = everything that
After a comma, **lo que** sums up the whole idea, like "which":
**Llegó tarde, lo que me molestó** = He arrived late, which bothered me.`,
        items: [
          'lo que | what | the thing that;that which;whatever',
          'todo lo que | everything that | all that;everything;all',
          'No entiendo lo que dices. | I do not understand what you are saying. | I don\'t understand what you\'re saying;I don\'t understand what you say;I do not understand what you say',
          'Lo que necesito es dormir. | What I need is to sleep. | What I need is sleep;What I need is some sleep',
          'Haz lo que quieras. | Do whatever you want. | Do what you want;Do whatever you like;Do what you like',
          'Gracias por todo lo que hiciste. | Thank you for everything you did. | Thanks for everything you did;Thank you for all you did;Thanks for all you did;Thank you for everything that you did;Thanks for everything that you did',
          'Eso es lo que me dijo Ana. | That is what Ana told me. | That\'s what Ana told me;That\'s what Ana said to me;That is what Ana said to me',
          'Llegó tarde, lo que me molestó. | He arrived late, which bothered me. | She arrived late, which bothered me;He came late, which bothered me;She came late, which bothered me;He arrived late, which annoyed me;She arrived late, which annoyed me;He was late, which bothered me;She was late, which bothered me',
          '¿Es esto lo que buscabas? | Is this what you were looking for? | Is this what you were searching for;This is what you were looking for',
        ],
      },
      {
        title: 'donde',
        tip: `**donde** (no accent) = where, linking two ideas about a place.
- **la casa donde crecí** = the house where I grew up
**en el que / en la que** means the same: **la casa en la que crecí**.
With an accent, **dónde** asks a question, even inside a sentence:
**No sé dónde está** = I don't know where it is.`,
        items: [
          'donde | where | in which',
          'el lugar | the place | the spot;place',
          'Esta es la casa donde crecí. | This is the house where I grew up. | This is the house I grew up in;This is the house that I grew up in;This is the home where I grew up | Esta es la casa en la que crecí;Esta es la casa en que crecí',
          'Ese es el café donde nos conocimos. | That is the café where we met. | That\'s the café where we met;That\'s the coffee shop where we met;That is the coffee shop where we met;That\'s the cafe where we met;That is the cafe where we met | Ese es el café en el que nos conocimos',
          'Busco un lugar donde pueda estudiar. | I am looking for a place where I can study. | I\'m looking for a place where I can study;I\'m looking for a place to study;I am looking for a place to study',
          'La ciudad donde vivo es muy tranquila. | The city where I live is very quiet. | The city I live in is very quiet;The city where I live is very peaceful;The city I live in is very peaceful;The city where I live is very calm;The city I live in is really quiet | La ciudad en la que vivo es muy tranquila',
          'No sé dónde dejé las llaves. | I do not know where I left the keys. | I don\'t know where I left the keys;I don\'t know where I left my keys;I do not know where I left my keys',
          'Vamos al parque donde juegan los niños. | Let\'s go to the park where the kids play. | Let us go to the park where the children play;Let\'s go to the park where the children play;We\'re going to the park where the kids play;We are going to the park where the children play;Let\'s go to the park where the kids are playing',
          'Es un restaurante donde se come muy bien. | It is a restaurant where the food is very good. | It\'s a restaurant where the food is great;It\'s a restaurant where you eat really well;It is a restaurant where you eat very well;It\'s a restaurant where the food is very good;It\'s a restaurant where the food is really good',
        ],
      },
      {
        title: 'el que & cuyo',
        tip: `**el que / la que / los que / las que** = the one(s) that / who. They match the noun.
- **Mi carro es el que está allí** = My car is the one over there
- After prepositions: **la mesa en la que trabajo**
**cuyo** = whose. It matches the thing owned, not the owner:
- **cuyo perro** · **cuya madre** · **cuyos hijos** · **cuyas novelas**`,
        items: [
          'el que | the one that | the one who;he who;whoever;the one which',
          'cuyo | whose',
          'Mi carro es el que está allí. | My car is the one over there. | My car is the one that\'s over there;My car is the one that is over there;My car\'s the one over there | Mi coche es el que está allí',
          'Las que compré ayer son más bonitas. | The ones I bought yesterday are prettier. | The ones that I bought yesterday are prettier;The ones I bought yesterday are nicer;The ones I bought yesterday are more beautiful',
          'Es la mesa en la que trabajo. | It is the table I work at. | It\'s the table I work at;It is the table where I work;It\'s the table where I work;It\'s the desk I work at;It is the desk where I work;It is the table at which I work;It\'s the desk where I work | Es la mesa en que trabajo;Es la mesa donde trabajo',
          'El que llegue primero gana. | Whoever arrives first wins. | Whoever gets there first wins;The one who arrives first wins;Whoever gets here first wins;The first one to arrive wins;The first to arrive wins | Quien llegue primero gana',
          'Tengo una vecina cuyo perro ladra mucho. | I have a neighbor whose dog barks a lot. | I have a neighbour whose dog barks a lot;I\'ve got a neighbor whose dog barks a lot;I have a neighbor whose dog barks constantly',
          'Es el autor cuyas novelas leímos. | He is the author whose novels we read. | He\'s the author whose novels we read;It\'s the author whose novels we read;That\'s the author whose novels we read;It is the author whose novels we read',
          'Conocí a un chico cuya madre es chef. | I met a guy whose mother is a chef. | I met a boy whose mother is a chef;I met a guy whose mom is a chef;I met a boy whose mom is a chef;I met a kid whose mom is a chef',
          'El edificio en el que trabajo es muy alto. | The building I work in is very tall. | The building where I work is very tall;The building that I work in is very tall;The building in which I work is very tall;The building I work in is really tall | El edificio en que trabajo es muy alto;El edificio donde trabajo es muy alto',
        ],
      },
    ],
    story: {
      title: 'La foto de la boda',
      lines: [
        'Sara: Mira, esta es la foto que te mencioné. | Look, this is the photo I mentioned to you.',
        'Diego: ¿Quién es el señor que está al lado de tu abuela? | Who is the man next to your grandmother?',
        'Sara: Es mi tío Rafa, el que vive en Chile. | That is my uncle Rafa, the one who lives in Chile.',
        'Diego: ¿Y la chica cuyo vestido es rojo? | And the girl whose dress is red?',
        'Sara: Es mi prima Inés, con quien viajé a Perú. | That is my cousin Inés, who I traveled to Peru with.',
        'Diego: ¿Y dónde tomaron la foto? | And where did you take the photo?',
        'Sara: En el jardín donde se casaron mis papás. | In the garden where my parents got married.',
        'Diego: ¡Qué bonita! Lo que más me gusta es la luz. | How pretty! What I like most is the light.',
        'Sara: La tomó mi hermano, que es fotógrafo. | My brother, who is a photographer, took it.',
        'Diego: Pues tu hermano tiene mucho talento. | Well, your brother is very talented.',
      ],
      questions: [
        { q: 'Where does Uncle Rafa live?', options: ['Chile', 'Peru', 'Mexico'], answer: 0 },
        { q: 'Who is Inés?', options: ["Sara's cousin", "Sara's sister", "Diego's friend"], answer: 0 },
        { q: 'Who took the photo?', options: ["Sara's brother", "Sara's uncle", 'Diego'], answer: 0 },
      ],
    },
  }),

  unit(4, {
    id: 'u39-opinions',
    title: 'Opinions',
    emoji: '💬',
    description: 'Give your opinion, agree, disagree and weigh the pros and cons.',
    lessons: [
      {
        title: 'In my opinion',
        tip: `Ways to give your opinion:
- **en mi opinión** = in my opinion
- **para mí** = for me, to me
- **creo que** / **me parece que** = I think (that)
Careful: **no creo que** takes the subjunctive:
**No creo que sea buena idea** = I don't think it's a good idea.`,
        items: [
          'en mi opinión | in my opinion',
          'para mí | for me | in my view;to me;personally',
          'creo que | I think that | I think;I believe;I believe that',
          'En mi opinión, la película es aburrida. | In my opinion, the movie is boring. | In my opinion, the film is boring;In my opinion the movie is boring;In my opinion, the movie\'s boring',
          'Para mí, el café de aquí es el mejor. | For me, the coffee here is the best. | To me, the coffee here is the best;I think the coffee here is the best;For me the coffee here is the best;For me, the coffee here\'s the best',
          'Creo que tienes razón. | I think you are right. | I think you\'re right;I believe you\'re right;I believe you are right',
          'No creo que sea buena idea. | I do not think it is a good idea. | I don\'t think it\'s a good idea;I don\'t think that\'s a good idea;I don\'t think it is a good idea;I do not think that is a good idea | No creo que sea una buena idea',
          '¿Qué opinas de la nueva película? | What do you think of the new movie? | What do you think about the new movie;What\'s your opinion of the new movie;What do you think of the new film;What\'s your opinion on the new movie;What do you think about the new film | ¿Qué piensas de la nueva película?',
          'Me parece que la ciudad es muy cara. | It seems to me that the city is very expensive. | I think the city is very expensive;It seems to me the city is really expensive;I think the city is really expensive;It seems to me the city is very expensive;I feel like the city is very expensive | Me parece que la ciudad está muy cara',
        ],
      },
      {
        title: 'I agree',
        tip: `**estar de acuerdo** = to agree. It always uses **estar**, never ser.
- **Estoy de acuerdo contigo** = I agree with you
- **No estoy de acuerdo** = I disagree
**Tienes razón** = You're right (literally "you have reason").`,
        items: [
          'estoy de acuerdo | I agree | I am in agreement',
          'no estoy de acuerdo | I disagree | I don\'t agree;I do not agree',
          'tienes razón | you are right | you\'re right',
          'Estoy de acuerdo contigo. | I agree with you. | I\'m in agreement with you',
          'No estoy de acuerdo con mi hermano. | I do not agree with my brother. | I don\'t agree with my brother;I disagree with my brother',
          '¿Estás de acuerdo con Pablo? | Do you agree with Pablo? | Are you in agreement with Pablo',
          'Estamos de acuerdo en casi todo. | We agree on almost everything. | We agree about almost everything;We agree on nearly everything;We agree about nearly everything',
          'Tienes razón, la comida mexicana es la mejor. | You are right, Mexican food is the best. | You\'re right, Mexican food is the best;You\'re right, Mexican food\'s the best;You are right, Mexican food\'s the best',
          'Bueno, depende. | Well, it depends. | Well, that depends;OK, it depends;Okay, it depends',
        ],
      },
      {
        title: 'Pros & cons',
        tip: `To weigh both sides:
- **por un lado…** = on one hand…
- **por otro lado…** = on the other hand…
- **sin embargo** = however (a bit more formal than **pero**)
**la ventaja** = advantage · **la desventaja** = disadvantage`,
        items: [
          'por un lado | on one hand | on the one hand',
          'por otro lado | on the other hand',
          'sin embargo | however | nevertheless;but;still',
          'la ventaja | the advantage | the benefit;the upside;advantage',
          'la desventaja | the disadvantage | the downside;the drawback;disadvantage',
          'Por un lado, trabajar desde casa es cómodo. | On one hand, working from home is comfortable. | On the one hand, working from home is comfortable;On one hand, working from home is convenient;On the one hand, working from home is convenient;On one hand working from home is comfortable',
          'Por otro lado, a veces me siento solo. | On the other hand, sometimes I feel lonely. | On the other hand, sometimes I feel alone;On the other hand, I sometimes feel lonely;On the other hand, I feel lonely sometimes | Por otro lado, a veces me siento sola',
          'La ciudad es bonita. Sin embargo, hay mucho tráfico. | The city is pretty. However, there is a lot of traffic. | The city is pretty. However, there\'s a lot of traffic;The city is beautiful. However, there is a lot of traffic;The city is beautiful. However, there\'s a lot of traffic;The city is nice. However, there is a lot of traffic;The city is nice. However, there\'s a lot of traffic',
          'Una ventaja de vivir en el campo es la tranquilidad. | One advantage of living in the countryside is the peace and quiet. | One advantage of living in the country is the peace and quiet;One advantage of living in the countryside is the calm;One advantage of living in the country is the calm;One advantage of living in the countryside is the tranquility;An advantage of living in the countryside is the peace and quiet',
        ],
      },
      {
        title: 'aunque',
        tip: `**aunque** = although, even though, even if.
- + **indicative** for a fact: **Aunque llueve, vamos** = Even though it's raining, we're going
- + **subjunctive** for a maybe: **Aunque llueva, vamos** = Even if it rains, we're going
**Aunque no lo creas** = Believe it or not.`,
        items: [
          'aunque | although | even though;though;even if',
          'la mascota | the pet | pet',
          'Aunque llueve, vamos a salir. | Although it is raining, we are going out. | Even though it\'s raining, we\'re going out;Although it\'s raining, we\'re going to go out;Even though it is raining, we are going out;Though it\'s raining, we\'re going out;Although it\'s raining, we\'re going out | Aunque está lloviendo, vamos a salir',
          'Aunque llueva, vamos a salir. | Even if it rains, we are going out. | Even if it rains, we\'re going out;Even if it rains, we\'re going to go out;Even if it rains, we will go out;Even if it rains, we\'ll go out',
          'Me gustan los gatos, aunque soy alérgico. | I like cats, although I am allergic. | I like cats, even though I\'m allergic;I like cats, although I\'m allergic;I like cats even though I am allergic | Me gustan los gatos, aunque soy alérgica',
          'Aunque es cara, la comida vale la pena. | Although it is expensive, the food is worth it. | Even though it\'s expensive, the food is worth it;Although it\'s expensive, the food is worth it;Even though it is expensive, the food is worth it;The food is expensive but worth it',
          'Voy a adoptar un perro, aunque mi casa sea pequeña. | I am going to adopt a dog, even if my house is small. | I\'m going to adopt a dog, even though my house is small;I\'m going to adopt a dog, even if my house is small;I will adopt a dog even if my house is small;I\'m going to adopt a dog, although my house is small',
          'Los perros son buenas mascotas, aunque dan mucho trabajo. | Dogs are good pets, although they are a lot of work. | Dogs are good pets, even though they\'re a lot of work;Dogs make good pets, although they\'re a lot of work;Dogs make good pets, though they\'re a lot of work;Dogs are good pets, but they\'re a lot of work;Dogs are good pets, although they\'re a lot of work',
          'Aunque no lo creas, me encanta cocinar. | Believe it or not, I love to cook. | Believe it or not, I love cooking;Even if you don\'t believe it, I love to cook;You may not believe it, but I love cooking;You may not believe it, but I love to cook',
        ],
      },
      {
        title: 'Everyday debates',
        tip: `Handy phrases for a friendly debate:
- **lo bueno es que…** = the good thing is that…
- **lo malo es que…** = the bad thing is that…
- **es mejor + infinitive** = it's better to…
- **depende** = it depends`,
        items: [
          'lo bueno | the good thing | the good part;the upside',
          'lo malo | the bad thing | the bad part;the downside',
          'Lo bueno es que no tengo que manejar. | The good thing is that I do not have to drive. | The good thing is I don\'t have to drive;The good part is that I don\'t have to drive;The upside is I don\'t have to drive;The good thing is that I don\'t have to drive;The upside is that I don\'t have to drive',
          'Lo malo es que extraño a mis compañeros. | The bad thing is that I miss my coworkers. | The bad thing is I miss my coworkers;The downside is that I miss my colleagues;The bad part is that I miss my coworkers;The bad thing is that I miss my colleagues;The downside is I miss my coworkers;The downside is that I miss my coworkers',
          'Prefiero los gatos porque son independientes. | I prefer cats because they are independent. | I prefer cats because they\'re independent;I like cats better because they\'re independent;I like cats better because they are independent',
          'Es mejor cocinar en casa que comer afuera. | It is better to cook at home than to eat out. | It\'s better to cook at home than to eat out;It\'s better to cook at home than eat out;Cooking at home is better than eating out | Es mejor cocinar en casa que comer fuera',
          'Las películas de terror me dan miedo, pero me encantan. | Horror movies scare me, but I love them. | Horror films scare me, but I love them;Horror movies frighten me, but I love them;Scary movies scare me, but I love them',
          'Vivir en una ciudad grande tiene sus ventajas. | Living in a big city has its advantages. | Living in a big city has its benefits;Living in a large city has its advantages;Living in a big city has its upsides',
          'Depende de la persona. | It depends on the person. | That depends on the person',
        ],
      },
    ],
    story: {
      title: '¿Casa u oficina?',
      lines: [
        'Lucas: ¿Qué opinas de trabajar desde casa? | What do you think about working from home?',
        'Paula: En mi opinión, es genial. No pierdo tiempo en el tráfico. | In my opinion, it is great. I do not waste time in traffic.',
        'Lucas: Estoy de acuerdo. Sin embargo, extraño a mis compañeros. | I agree. However, I miss my coworkers.',
        'Paula: Por un lado, sí. Por otro lado, ¡ahora mi gato es mi compañero! | On one hand, yes. On the other hand, my cat is my coworker now!',
        'Lucas: Jaja. Aunque me encantan los gatos, prefiero los perros. | Haha. Although I love cats, I prefer dogs.',
        'Paula: No estoy de acuerdo. Los gatos son más independientes. | I disagree. Cats are more independent.',
        'Lucas: Tienes razón, pero con un perro tienes que salir a caminar. | You are right, but with a dog you have to go out for walks.',
        'Paula: Bueno, lo bueno de mi gato es que no salgo cuando llueve. | Well, the good thing about my cat is that I do not go out when it rains.',
        'Lucas: ¡Buen punto! | Good point!',
      ],
      questions: [
        { q: 'What does Paula like about working from home?', options: ['Not wasting time in traffic', 'Earning more money', 'Seeing her coworkers'], answer: 0 },
        { q: 'What does Lucas miss?', options: ['His coworkers', 'His cat', 'The traffic'], answer: 0 },
        { q: 'Which pet does Lucas prefer?', options: ['Dogs', 'Cats', 'Fish'], answer: 0 },
      ],
    },
  }),

  unit(4, {
    id: 'u40-tech-environment',
    title: 'Technology & nature',
    emoji: '🌍',
    description: 'Talk about phones, apps and social media, and how to care for the planet.',
    lessons: [
      {
        title: 'Phones & apps',
        tip: `In Latin America a cell phone is **el celular** (in Spain: el móvil).
- **la aplicación** or just **la app**
- **descargar** = to download
- **cargar** = to charge (a battery)`,
        items: [
          'el celular | the cell phone | the phone;the mobile phone;the cellphone;cell phone;phone',
          'la aplicación | the app | the application;app',
          'descargar | to download | download',
          'la pantalla | the screen | screen',
          'Mi celular no tiene batería. | My phone has no battery. | My phone is dead;My cell phone has no battery;My phone\'s out of battery;My phone has no charge;My cell phone is dead;My phone\'s dead',
          '¿Me pasas tu número de celular? | Can you give me your cell number? | Can I have your cell phone number;Can you give me your phone number;Can I get your cell number;Will you give me your cell number;Can I have your phone number;Can I get your number',
          'Descargué una aplicación para aprender idiomas. | I downloaded an app to learn languages. | I downloaded a language-learning app;I downloaded an app for learning languages;I downloaded an application to learn languages;I downloaded a language app | Descargué una app para aprender idiomas',
          'Tengo que cargar el celular. | I have to charge my phone. | I need to charge my phone;I have to charge the phone;I need to charge my cell phone;I have to charge my cell phone;I need to charge the phone | Tengo que cargar mi celular',
          'La pantalla está rota. | The screen is broken. | The screen\'s broken;The screen is cracked;The screen\'s cracked',
        ],
      },
      {
        title: 'Social media',
        tip: `- **las redes sociales** = social media (literally "social networks")
- **subir** = to upload, to post (literally "to go up")
- **seguir** = to follow
- **la contraseña** = password`,
        items: [
          'las redes sociales | social media | social networks;the social networks',
          'la contraseña | the password | password',
          'subir | to upload | to post;upload;post',
          'Olvidé mi contraseña. | I forgot my password. | I\'ve forgotten my password;I have forgotten my password | Se me olvidó la contraseña;Se me olvidó mi contraseña;Olvidé la contraseña',
          'Paso demasiado tiempo en las redes sociales. | I spend too much time on social media. | I spend way too much time on social media;I spend too much time on social networks',
          'Ella subió una foto de su perro. | She posted a photo of her dog. | She uploaded a photo of her dog;She posted a picture of her dog;She uploaded a picture of her dog;She posted a pic of her dog',
          '¿Me sigues en Instagram? | Do you follow me on Instagram? | Are you following me on Instagram',
          'Tu contraseña debe tener al menos ocho caracteres. | Your password must have at least eight characters. | Your password needs at least eight characters;Your password must be at least eight characters long;Your password should have at least eight characters;Your password needs to be at least eight characters | Tu contraseña debe tener como mínimo ocho caracteres',
          'No compartas tu contraseña con nadie. | Do not share your password with anyone. | Don\'t share your password with anyone;Never share your password with anyone;Do not share your password with anybody;Don\'t share your password with anybody',
        ],
      },
      {
        title: 'Online life',
        tip: `In Latin America a computer is **la computadora** (in Spain: el ordenador).
- **el correo** = email (short for **correo electrónico**)
- **el enlace** = link (many people also say **el link**)
- **buscar en internet** = to look up online`,
        items: [
          'la computadora | the computer | computer',
          'el correo electrónico | email | the email;e-mail;the e-mail',
          'el enlace | the link | link',
          '¿Cuál es la contraseña del wifi? | What is the wifi password? | What\'s the wifi password;What is the Wi-Fi password;What\'s the Wi-Fi password',
          'No hay señal aquí. | There is no signal here. | There\'s no signal here;There\'s no reception here;There is no reception here;I have no signal here;I don\'t have signal here',
          'Lo busqué en internet. | I looked it up online. | I searched for it online;I looked it up on the internet;I searched for it on the internet;I googled it',
          'Mi abuela ya sabe usar las videollamadas. | My grandma already knows how to use video calls. | My grandmother already knows how to use video calls;My grandma knows how to use video calls now;My grandmother knows how to make video calls now;My grandma now knows how to use video calls;My grandmother now knows how to use video calls',
          'Te mando el enlace por correo. | I will send you the link by email. | I\'ll send you the link by email;I\'ll email you the link;I will email you the link;I\'m sending you the link by email;I\'ll send you the link by e-mail',
          'Hay que actualizar la aplicación. | The app has to be updated. | You have to update the app;We need to update the app;The app needs to be updated;The app needs updating;You need to update the app;We have to update the app',
        ],
      },
      {
        title: 'The environment',
        tip: `- **el medio ambiente** = the environment
- **reciclar** = to recycle
- **la basura** = trash, garbage
- **sacar la basura** = to take out the trash
**Hay que…** = we have to…, one must… (a general need, no specific person).`,
        items: [
          'el medio ambiente | the environment | environment',
          'reciclar | to recycle | recycle',
          'la basura | the trash | the garbage;garbage;trash;the rubbish',
          'el plástico | plastic | the plastic',
          'Hay que cuidar el medio ambiente. | We have to take care of the environment. | We must take care of the environment;We need to take care of the environment;We have to look after the environment;You have to take care of the environment;We need to protect the environment;We have to protect the environment',
          'En mi casa reciclamos el papel y el vidrio. | At my house we recycle paper and glass. | At home we recycle paper and glass;In my house we recycle paper and glass;At my place we recycle paper and glass;At our house we recycle paper and glass',
          '¿Dónde tiro la basura? | Where do I throw away the trash? | Where do I throw out the garbage;Where do I put the trash;Where can I throw the garbage;Where do I throw the trash;Where do I throw away the garbage;Where do I put the garbage',
          'No uses bolsas de plástico. | Do not use plastic bags. | Don\'t use plastic bags',
          'Saca la basura, por favor. | Take out the trash, please. | Take out the garbage, please;Please take out the trash;Please take out the garbage;Take the trash out, please;Take the garbage out, please',
          'La contaminación es un gran problema. | Pollution is a big problem. | Pollution is a huge problem;Pollution is a major problem',
        ],
      },
      {
        title: 'Saving energy & water',
        tip: `**ahorrar** = to save (water, energy, money, time).
- **apagar** = to turn off · **prender** = to turn on (LatAm; Spain: encender)
- **la energía solar** = solar energy
The faucet changes by country: **la llave** (Mexico, Colombia), **el grifo**, **la canilla** (Argentina, Uruguay).`,
        items: [
          'ahorrar | to save | save',
          'la energía solar | solar energy | solar power;the solar energy',
          'apagar | to turn off | to switch off;turn off;switch off',
          'los paneles solares | solar panels | the solar panels',
          'Cierra la llave mientras te lavas los dientes. | Turn off the faucet while you brush your teeth. | Turn off the tap while you brush your teeth;Turn the water off while you brush your teeth;Close the faucet while you brush your teeth;Turn off the water while you brush your teeth | Cierra el grifo mientras te lavas los dientes;Cierra la canilla mientras te lavas los dientes',
          'Apaga la luz cuando salgas. | Turn off the light when you leave. | Switch off the light when you leave;Turn the light off when you leave;Turn off the lights when you leave;Turn off the light when you go out',
          'Queremos ahorrar agua en casa. | We want to save water at home. | We want to save water at our house;We\'d like to save water at home',
          'Pusimos paneles solares en el techo. | We put solar panels on the roof. | We installed solar panels on the roof;We put up solar panels on the roof;We put solar panels on our roof',
          'La energía solar es limpia y barata. | Solar energy is clean and cheap. | Solar power is clean and cheap;Solar energy is clean and inexpensive;Solar power is clean and inexpensive',
          'Me baño en cinco minutos para ahorrar agua. | I shower in five minutes to save water. | I take five-minute showers to save water;I take a five-minute shower to save water;I shower for five minutes to save water;I bathe in five minutes to save water | Me ducho en cinco minutos para ahorrar agua',
        ],
      },
    ],
    story: {
      title: 'La aplicación de Tomás',
      lines: [
        'Mamá: Tomás, ¿otra vez con el celular? | Tomás, on your phone again?',
        'Tomás: Estoy viendo una aplicación para reciclar. | I am looking at an app for recycling.',
        'Mamá: ¿En serio? ¿Qué hace? | Really? What does it do?',
        'Tomás: Te dice dónde puedes tirar el plástico, el vidrio y el papel. | It tells you where you can throw away plastic, glass and paper.',
        'Mamá: ¡Qué bien! Hay que cuidar el medio ambiente. | Great! We have to take care of the environment.',
        'Tomás: También dice que debemos ahorrar agua y apagar las luces. | It also says that we should save water and turn off the lights.',
        'Mamá: Entonces, ¿por qué está prendida la luz de tu cuarto? | Then why is the light in your room on?',
        'Tomás: Ups… ahorita la apago. | Oops… I will turn it off right now.',
        'Mamá: Y tu papá quiere poner paneles solares en el techo. | And your dad wants to put solar panels on the roof.',
        'Tomás: ¡Genial! Lo voy a subir a las redes sociales. | Awesome! I am going to post it on social media.',
      ],
      questions: [
        { q: "What is Tomás's app for?", options: ['Recycling', 'Playing games', 'Learning languages'], answer: 0 },
        { q: 'Which light is on?', options: ["The one in Tomás's room", 'The kitchen light', 'The bathroom light'], answer: 0 },
        { q: "What does Tomás's dad want?", options: ['To put solar panels on the roof', 'To buy a new phone', 'To stop recycling'], answer: 0 },
      ],
    },
  }),

  unit(4, {
    id: 'u41-idioms',
    title: 'Everyday expressions',
    emoji: '😄',
    description: 'Sound natural with friendly Latin American expressions.',
    lessons: [
      {
        title: 'Cool!',
        tip: `"Cool!" changes from country to country:
- **¡Qué padre!**: Mexico (also **¡Qué chido!**)
- **¡Qué chévere!**: Colombia, Venezuela, Peru, the Caribbean
- **¡Qué bacán!**: Chile, Peru
- **buena onda** = nice, cool, good vibes (almost everywhere)
**¡Qué padrísimo!** = super cool!`,
        items: [
          '¡Qué padre! | Cool! | How cool;That\'s cool;Awesome;That\'s awesome;Great;How great',
          '¡Qué chévere! | That\'s great! | Great;Cool;How cool;That\'s cool;Awesome;How great;That is great',
          '¡Qué bacán! | Awesome! | Cool;That\'s cool;How cool;That\'s awesome;Great;How awesome',
          '¡Qué buena onda! | How nice! | That\'s nice;How cool;That\'s cool;Cool;That\'s so nice;Nice;That\'s really nice',
          'Tu casa nueva está muy padre. | Your new house is really cool. | Your new house is very cool;Your new place is really cool;Your new house is awesome;Your new house is great;Your new home is really cool',
          '¡Qué chévere que vengas a la fiesta! | It is great that you are coming to the party! | It\'s great that you\'re coming to the party;So great that you\'re coming to the party;How cool that you\'re coming to the party;Awesome that you\'re coming to the party;It\'s cool that you\'re coming to the party;How great that you\'re coming to the party',
          'Mi jefe es muy buena onda. | My boss is really nice. | My boss is very cool;My boss is really cool;My boss is very nice;My boss is a really nice guy;My boss is really easygoing;My boss is super nice',
          'El concierto estuvo padrísimo. | The concert was awesome. | The concert was super cool;The concert was amazing;The concert was really cool;The concert was great;The concert was so cool',
        ],
      },
      {
        title: 'Head in the clouds',
        tip: `- **estar en las nubes** = to have your head in the clouds, to be daydreaming (literally "to be in the clouds")
- **costar un ojo de la cara** = to cost an arm and a leg (literally "to cost an eye from your face")
Conjugate the verb as usual: **estoy en las nubes**, **me costó un ojo de la cara**.`,
        items: [
          'estar en las nubes | to have your head in the clouds | to be daydreaming;to be in the clouds;to be distracted;to be spaced out;to have one\'s head in the clouds;to daydream',
          'costar un ojo de la cara | to cost an arm and a leg | to cost a fortune;to be very expensive;to cost an eye of the face;to be super expensive',
          'caro | expensive | pricey',
          'Perdón, estaba en las nubes. | Sorry, I was daydreaming. | Sorry, my head was in the clouds;Sorry, I was distracted;Sorry, I was spacing out;Sorry, I was in the clouds;Sorry, I was miles away',
          'Hoy Marcos está en las nubes. | Marcos has his head in the clouds today. | Marcos is daydreaming today;Marcos is distracted today;Today Marcos has his head in the clouds;Marcos is in the clouds today;Marcos is spacing out today;Today Marcos is distracted;Today Marcos is daydreaming',
          '¿En qué piensas? Estás en las nubes. | What are you thinking about? You are daydreaming. | What are you thinking about? You\'re daydreaming;What are you thinking about? Your head is in the clouds;What\'s on your mind? You\'re in the clouds;What are you thinking about? You\'re miles away;What are you thinking about? You\'re spacing out;What are you thinking about? You\'re in the clouds',
          'Este celular me costó un ojo de la cara. | This phone cost me an arm and a leg. | This cell phone cost me an arm and a leg;This phone cost me a fortune;This cell phone cost me a fortune;This phone cost me an eye of the face',
          'Los boletos cuestan un ojo de la cara. | The tickets cost an arm and a leg. | The tickets cost a fortune;The tickets are super expensive;The tickets cost an eye of the face;Tickets cost an arm and a leg;The tickets are really expensive',
          'Vivir en esta ciudad cuesta un ojo de la cara. | Living in this city costs an arm and a leg. | Living in this city costs a fortune;Living in this city is super expensive;It costs a fortune to live in this city;It costs an arm and a leg to live in this city',
        ],
      },
      {
        title: 'Lend a hand',
        tip: `- **echar una mano** = to lend a hand (literally "to throw a hand")
- **¿Me echas una mano?** = Can you give me a hand?
- **No pasa nada** = No worries, it's fine (literally "nothing happens")
**No pasa nada** is the go-to reply when someone apologizes.`,
        items: [
          'echar una mano | to lend a hand | to give a hand;to help out;to help;to throw a hand',
          'no pasa nada | no worries | it\'s okay;it\'s fine;don\'t worry;nothing\'s wrong;it\'s no big deal;no big deal;nothing happens;it\'s OK',
          'la ayuda | help | the help',
          '¿Me echas una mano? | Can you give me a hand? | Can you lend me a hand;Could you give me a hand;Will you give me a hand;Can you help me;Could you help me;Could you lend me a hand;Can you help me out',
          'Te echo una mano con la mudanza. | I will give you a hand with the move. | I\'ll give you a hand with the move;I\'ll help you with the move;I\'ll lend you a hand with the move;I\'ll help you move;I will help you with the move;I will lend you a hand with the move',
          'Mis vecinos siempre me echan una mano. | My neighbors always lend me a hand. | My neighbors always give me a hand;My neighbors always help me;My neighbours always lend me a hand;My neighbours always give me a hand;My neighbors always help me out',
          'No pasa nada, todos cometemos errores. | No worries, we all make mistakes. | It\'s fine, we all make mistakes;Don\'t worry, we all make mistakes;It\'s OK, everyone makes mistakes;No worries, everyone makes mistakes;It\'s okay, we all make mistakes;No big deal, we all make mistakes;It\'s okay, everyone makes mistakes',
          '¿Se te cayó el café? No pasa nada. | You dropped your coffee? No worries. | Did you drop your coffee? No worries;You spilled your coffee? Don\'t worry;Did you spill your coffee? It\'s fine;You dropped your coffee? It\'s okay;You dropped your coffee? No big deal;Did you drop your coffee? It\'s OK;You spilled your coffee? No worries;Did you spill your coffee? No worries;Did you drop your coffee? Don\'t worry',
          'Gracias por echarme una mano. | Thanks for giving me a hand. | Thank you for giving me a hand;Thanks for lending me a hand;Thanks for helping me;Thank you for helping me;Thanks for helping me out;Thank you for lending me a hand;Thanks for the help',
        ],
      },
      {
        title: 'Enjoy your meal',
        tip: `**¡Buen provecho!** (or just **¡Provecho!**) = enjoy your meal.
In much of Latin America people say it to anyone eating, even strangers in a restaurant as they walk by.
The usual reply: **Gracias, igualmente**.
**la sobremesa** = staying at the table to chat after a meal. No English word for it!`,
        items: [
          '¡Buen provecho! | Enjoy your meal! | Bon appétit;Bon appetit;Enjoy;Enjoy your food;Have a good meal | ¡Provecho!',
          'igualmente | likewise | same to you;you too',
          'la sobremesa | chatting at the table after a meal | after-dinner conversation;after-meal chat;table talk;after-lunch conversation;time spent talking after a meal;after-dinner chat',
          'Gracias, igualmente. | Thanks, you too. | Thank you, likewise;Thanks, likewise;Thank you, you too;Thanks, same to you;Thank you, same to you',
          'La comida está servida. ¡Buen provecho! | The food is served. Enjoy your meal! | Food is served. Enjoy your meal;The food is ready. Enjoy;Dinner is served. Enjoy your meal;Lunch is served. Enjoy your meal;Food is served. Bon appétit;The food is served. Bon appetit;The food is served. Enjoy',
          '¡Salud! | Cheers! | Bless you;To your health;Cheers',
          'Está para chuparse los dedos. | It is finger-licking good. | It\'s finger-licking good;It\'s delicious;It\'s so good;It is delicious;It\'s really delicious',
          'Me muero de hambre. | I am starving. | I\'m starving;I\'m dying of hunger;I am dying of hunger;I\'m so hungry;I\'m really hungry;I am so hungry',
          'Después de comer, hacemos la sobremesa. | After eating, we stay and chat at the table. | After we eat, we stay at the table and talk;After eating, we hang out at the table;After the meal, we stay and chat at the table;After eating, we sit and chat at the table;After we eat, we stay and chat at the table;After eating, we stay at the table and talk',
        ],
      },
      {
        title: 'Pulling your leg',
        tip: `- **tomar el pelo** = to pull someone's leg (literally "to take the hair")
- **ponerse las pilas** = to get your act together, to get going (literally "to put your batteries in")
**ponerse** is reflexive: **me pongo**, **te pones**, **¡ponte las pilas!**
**¿En serio?** = Really? Seriously?`,
        items: [
          'tomar el pelo | to pull someone\'s leg | to tease;to kid;to joke;to take the hair;to pull your leg;to pull somebody\'s leg;to joke around',
          'ponerse las pilas | to get your act together | to get going;to get to work;to get moving;to put your batteries in;to step it up;to get one\'s act together;to buckle down;to get it together',
          '¿En serio? | Really? | Seriously;For real;Are you serious',
          '¿Me estás tomando el pelo? | Are you pulling my leg? | Are you kidding me;Are you teasing me;Are you joking;Are you messing with me;Are you taking my hair;Are you kidding | ¿Me tomas el pelo?',
          'No te creo, me tomas el pelo. | I do not believe you, you are pulling my leg. | I don\'t believe you, you\'re pulling my leg;I don\'t believe you, you\'re kidding;I don\'t believe you, you\'re teasing me;I don\'t believe you, you\'re joking;I don\'t believe you, you\'re messing with me;I don\'t believe you, you\'re kidding me | No te creo, me estás tomando el pelo',
          'Mi abuelo siempre nos toma el pelo. | My grandpa always pulls our leg. | My grandpa is always pulling our leg;My grandfather always pulls our leg;My grandpa always teases us;My grandfather always teases us;My grandpa is always teasing us;My grandpa always pulls our legs;My grandfather is always pulling our leg',
          'Tengo que ponerme las pilas con el español. | I have to get my act together with Spanish. | I need to get my act together with Spanish;I have to get serious about Spanish;I need to get serious about Spanish;I have to step it up with Spanish;I need to step up my Spanish;I have to buckle down with Spanish;I need to get going with Spanish | Me tengo que poner las pilas con el español',
          '¡Ponte las pilas! El examen es mañana. | Get your act together! The exam is tomorrow. | Get going! The exam is tomorrow;Get moving! The test is tomorrow;Get your act together! The test is tomorrow;Get it together! The exam is tomorrow;Step it up! The exam is tomorrow;Get moving! The exam is tomorrow;Get going! The test is tomorrow;Get it together! The test is tomorrow',
          'Nos pusimos las pilas y terminamos a tiempo. | We got our act together and finished on time. | We got going and finished on time;We stepped it up and finished on time;We buckled down and finished on time;We got moving and finished on time;We got our act together and we finished on time;We got it together and finished on time',
        ],
      },
    ],
    story: {
      title: 'El día de la mudanza',
      lines: [
        'Andrés: ¡Hola, Vale! ¿Me echas una mano? Hoy me mudo. | Hi, Vale! Can you give me a hand? I am moving today.',
        'Valeria: ¡Claro! ¿Ya tienes todo en cajas? | Of course! Do you already have everything in boxes?',
        'Andrés: Más o menos… estuve en las nubes toda la semana. | More or less… my head was in the clouds all week.',
        'Valeria: ¡Ponte las pilas! ¿Y cómo es el departamento nuevo? | Get your act together! And what is the new apartment like?',
        'Andrés: Está muy padre, pero cuesta un ojo de la cara. | It is really cool, but it costs an arm and a leg.',
        'Valeria: ¿Vas a vivir solo? | Are you going to live alone?',
        'Andrés: No, con mi primo, que es chef. ¡Va a cocinar todos los días! | No, with my cousin, who is a chef. He is going to cook every day!',
        'Valeria: ¿En serio? ¿Me estás tomando el pelo? | Seriously? Are you pulling my leg?',
        'Andrés: No, en serio. Ven a cenar el viernes. | No, really. Come have dinner on Friday.',
        'Valeria: ¡Qué chévere! Ay, se me cayó una caja… | That is great! Oh, I dropped a box…',
        'Andrés: No pasa nada. Era pura ropa. | No worries. It was just clothes.',
      ],
      questions: [
        { q: 'What is Andrés doing today?', options: ['Moving', 'Cooking dinner', 'Taking an exam'], answer: 0 },
        { q: 'What is the new apartment like?', options: ['Cool but very expensive', 'Small and cheap', 'Old and far away'], answer: 0 },
        { q: 'Who is Andrés going to live with?', options: ['His cousin', 'Valeria', 'Nobody'], answer: 0 },
      ],
    },
  }),

  unit(4, {
    id: 'u42-past-perfect',
    title: 'Reported speech',
    emoji: '📣',
    description: 'Say what had happened and pass on what people said and asked.',
    lessons: [
      {
        title: 'Had done',
        tip: `The past perfect = **había** + participle. It means "had done".
- había · habías · había · habíamos · habían
**Ya había comido** = I had already eaten.
**Nunca había visto…** = I had never seen…
Reflexive and object pronouns go before **había**: **se habían ido**.`,
        items: [
          'había comido | I had eaten | he had eaten;she had eaten;you had eaten;I\'d eaten',
          'habíamos salido | we had left | we\'d left;we had gone out;we\'d gone out',
          'ya | already',
          'Ya había cenado cuando llegaste. | I had already eaten dinner when you arrived. | I\'d already had dinner when you arrived;I had already had dinner when you arrived;I\'d already eaten dinner when you got here;I had already eaten dinner when you got here;I had already had dinner when you got here;He had already had dinner when you arrived;She had already had dinner when you arrived;I\'d already eaten when you arrived;I had already eaten when you arrived',
          'Nunca había visto el mar. | I had never seen the sea. | I\'d never seen the sea;I had never seen the ocean;I\'d never seen the ocean;She had never seen the sea;He had never seen the sea',
          'Cuando llegamos, la película ya había empezado. | When we arrived, the movie had already started. | When we got there, the movie had already started;When we arrived, the film had already started;When we arrived the movie had already begun;When we got there, the movie had already begun;When we got there, the film had already started',
          '¿Habías estado en Lima antes? | Had you been to Lima before? | Had you ever been to Lima before;Had you been in Lima before',
          'Ellos ya se habían ido. | They had already left. | They\'d already left;They had already gone;They\'d already gone',
          'Mi hermana había perdido las llaves. | My sister had lost the keys. | My sister had lost her keys;My sister had lost the keys',
        ],
      },
      {
        title: 'He said that…',
        tip: `To report what someone said, use **decir que**.
When the reporting verb is in the past, the tense shifts back:
- "**Estoy** cansado." → **Dijo que estaba cansado.**
- "**Vivo** en Bogotá." → **Dijo que vivía en Bogotá.**
With present **dice que**, nothing changes: **Dice que la cena está lista.**`,
        items: [
          'dijo que | he said that | she said that;you said that;he said;she said',
          'contestar | to answer | to reply;answer;reply',
          'Dijo que estaba cansado. | He said he was tired. | He said that he was tired',
          'Ana dijo que tenía hambre. | Ana said she was hungry. | Ana said that she was hungry',
          'Me dijeron que la tienda estaba cerrada. | They told me the store was closed. | They told me that the store was closed;They told me the shop was closed;I was told the store was closed;They said the store was closed;They told me that the shop was closed',
          'Mi mamá dice que la cena está lista. | My mom says dinner is ready. | My mom says that dinner is ready;My mother says dinner is ready;My mother says that dinner is ready;Mom says dinner is ready',
          'Carlos dijo que vivía en Bogotá. | Carlos said he lived in Bogotá. | Carlos said that he lived in Bogotá;Carlos said he was living in Bogotá;Carlos said he lived in Bogota;Carlos said that he lived in Bogota',
          'Le dije que no me gustaba el café. | I told him I did not like coffee. | I told him I didn\'t like coffee;I told her I didn\'t like coffee;I told her I did not like coffee;I told him that I didn\'t like coffee;I told her that I didn\'t like coffee;I told you I didn\'t like coffee',
          'Pedro dijo que estaba en camino. | Pedro said he was on his way. | Pedro said that he was on his way;Pedro said he was on the way',
        ],
      },
      {
        title: 'She asked if…',
        tip: `- **preguntar si** = to ask if / whether: **Me preguntó si quería café.**
- Question words keep their accent: **Le pregunté dónde vivía.**
- **pedir que** + past subjunctive = to ask someone to do something:
**Me pidió que lo llamara** = He asked me to call him.`,
        items: [
          'me preguntó si | he asked me if | she asked me if;he asked me whether;she asked me whether;you asked me if',
          'preguntar | to ask | ask;to ask a question',
          'Me preguntó si quería café. | She asked me if I wanted coffee. | He asked me if I wanted coffee;She asked me whether I wanted coffee;He asked me whether I wanted coffee;She asked if I wanted coffee;He asked if I wanted coffee;She asked me if I wanted some coffee;He asked me if I wanted some coffee',
          'Le pregunté dónde vivía. | I asked him where he lived. | I asked her where she lived;I asked him where he was living;I asked her where she was living;I asked you where you lived',
          'Nos preguntaron cuántos años teníamos. | They asked us how old we were. | They asked how old we were',
          'La maestra preguntó quién había terminado. | The teacher asked who had finished. | The teacher asked who was done;The teacher asked who\'d finished;The teacher asked who had finished already',
          'Mi papá me pidió que lo llamara. | My dad asked me to call him. | My father asked me to call him;Dad asked me to call him',
          'Te pregunté si podías venir. | I asked you if you could come. | I asked you whether you could come;I asked if you could come',
          '¿Te preguntó por qué llegaste tarde? | Did he ask you why you arrived late? | Did she ask you why you arrived late;Did he ask you why you were late;Did she ask you why you were late;Did he ask why you were late;Did she ask why you were late;Did he ask you why you came late;Did she ask you why you came late',
        ],
      },
      {
        title: 'Tense changes',
        tip: `When you report in the past, tenses step back:
- present → **imperfect**: "Tengo…" → dijo que **tenía**
- preterite → **past perfect**: "Comí" → dijo que **había comido**
- future → **conditional**: "Vendré" → dijo que **vendría**
- **voy a** → **iba a**: dijo que **iba a** llamar`,
        items: [
          'prometer | to promise | promise',
          'Dijo que vendría mañana. | He said he would come tomorrow. | She said she would come tomorrow;He said he\'d come tomorrow;She said she\'d come tomorrow;He said that he would come tomorrow;She said that she would come tomorrow',
          'Me dijo que había perdido el autobús. | She told me she had missed the bus. | He told me he had missed the bus;She told me she\'d missed the bus;He told me he\'d missed the bus;She told me that she had missed the bus;He told me that he had missed the bus | Me dijo que había perdido el bus',
          'Dijeron que iban a llegar tarde. | They said they were going to be late. | They said they were going to arrive late;They said they\'d be late;They said that they were going to arrive late;They said they would arrive late;They said they were going to get there late;They said that they were going to be late',
          'Juan dijo que ya había comido. | Juan said he had already eaten. | Juan said he\'d already eaten;Juan said that he had already eaten;Juan said he already ate;Juan said that he\'d already eaten',
          'Le prometí que la ayudaría. | I promised her I would help her. | I promised her that I would help her;I promised her I\'d help her;I promised I would help her;I promised I\'d help her',
          'Pensé que habías salido. | I thought you had left. | I thought you\'d left;I thought you had gone out;I thought you\'d gone out;I thought that you had left',
          'Sabía que ibas a decir eso. | I knew you were going to say that. | I knew you would say that;I knew you\'d say that;I knew that you were going to say that',
          'Ella me contó que se había casado. | She told me she had gotten married. | She told me that she had gotten married;She told me she\'d gotten married;She told me she had got married;She told me that she\'d gotten married;She told me she got married',
        ],
      },
      {
        title: 'Passing on messages',
        tip: `- **contar** = to tell (news, a story): **Me contó que…**
- **avisar** = to let someone know: **Avísame cuando llegues.**
- **el chisme** = gossip
If something is still true now, you can keep the present: **Me contaron que Sofía tiene novio.**`,
        items: [
          'contar | to tell | tell;to relate',
          'avisar | to let know | to let someone know;to notify;to tell;to warn',
          'el chisme | the gossip | gossip',
          '¿Qué te dijo Laura? | What did Laura tell you? | What did Laura say to you;What did Laura say',
          'Me avisó que no podía venir. | He let me know he could not come. | He let me know he couldn\'t come;She let me know she couldn\'t come;She let me know she could not come;He told me he couldn\'t come;She told me she couldn\'t come;He let me know that he couldn\'t come;She let me know that she couldn\'t come',
          'Avísame cuando llegues. | Let me know when you arrive. | Let me know when you get there;Let me know when you get here;Tell me when you arrive;Text me when you get there',
          'Dile que lo llamo más tarde. | Tell him I will call him later. | Tell him I\'ll call him later;Tell him I\'ll call later;Tell him that I\'ll call him later;Tell him that I will call him later',
          'Me contaron que Sofía tiene novio. | They told me that Sofía has a boyfriend. | They told me Sofía has a boyfriend;I heard that Sofía has a boyfriend;I heard Sofía has a boyfriend;They told me Sofia has a boyfriend;I heard Sofia has a boyfriend',
          '¿Te conté lo que pasó ayer? | Did I tell you what happened yesterday? | Did I tell you about what happened yesterday',
        ],
      },
    ],
    story: {
      title: 'La noticia de Martín',
      lines: [
        'Rosa: ¿Te conté lo que me dijo Martín? | Did I tell you what Martín told me?',
        'Elena: No, ¿qué te dijo? | No, what did he tell you?',
        'Rosa: Dijo que había conseguido un trabajo nuevo en Bogotá. | He said that he had gotten a new job in Bogotá.',
        'Elena: ¡No me digas! Pensé que estaba contento aquí. | No way! I thought he was happy here.',
        'Rosa: Yo también. Le pregunté si se iba a mudar. | Me too. I asked him if he was going to move.',
        'Elena: ¿Y qué te contestó? | And what did he answer?',
        'Rosa: Me dijo que se iría en marzo con su esposa. | He told me he would leave in March with his wife.',
        'Elena: ¿Y ella ya había visitado Bogotá? | And had she already visited Bogotá?',
        'Rosa: Sí, me contó que habían ido de vacaciones el año pasado. | Yes, he told me they had gone on vacation there last year.',
        'Elena: Pues hay que hacerle una fiesta de despedida. | Well, we have to throw him a goodbye party.',
      ],
      questions: [
        { q: "Where is Martín's new job?", options: ['Bogotá', 'Lima', 'Mexico City'], answer: 0 },
        { q: 'When is Martín leaving?', options: ['In March', 'Next week', 'In December'], answer: 0 },
        { q: 'What does Elena want to do?', options: ['Throw him a goodbye party', 'Ask for his job', 'Visit Bogotá'], answer: 0 },
      ],
    },
  }),
]
