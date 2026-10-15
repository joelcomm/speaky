import { unit } from './build'

// Section 4 (B1+) — units 33–37. Latin American Spanish: "ustedes" for plural you, no "vosotros".
export default [
  unit(4, {
    id: 'u33-subjunctive',
    title: 'Wishes',
    emoji: '🌠',
    description: 'Say what you want and hope with the present subjunctive.',
    lessons: [
      {
        title: 'I want you to…',
        tip: `The **subjunctive** is the mood for wishes, feelings and doubts. It usually comes after **que**.
Start from the **yo** form, drop the **-o**, and swap the vowel:
- **-ar** → e: hablo → **hable, hables, hablemos, hablen**
- **-er / -ir** → a: como → **coma**, vivo → **viva**
**Quiero que** + another person → subjunctive: **Quiero que comas.**
Same person? Use the infinitive: **Quiero comer.**`,
        items: [
          'que hables | that you speak | that you talk',
          'que coman | that they eat | that you all eat',
          'que vivamos | that we live',
          'que estudie | that I study | that he studies;that she studies',
          'Quiero que hables español. | I want you to speak Spanish. | I\'d like you to speak Spanish',
          'Quiero que comas más verduras. | I want you to eat more vegetables. | I\'d like you to eat more vegetables;I want you to eat more veggies',
          'Mi mamá quiere que yo estudie. | My mom wants me to study. | My mother wants me to study',
          'Queremos que ustedes vivan cerca. | We want you all to live nearby. | We want you to live nearby;We want you all to live close by;We want you to live close by;We want you to live close',
          '¿Quieres que te llame mañana? | Do you want me to call you tomorrow? | Should I call you tomorrow;Want me to call you tomorrow',
          'Ella quiere que escribamos una carta. | She wants us to write a letter.',
        ],
      },
      {
        title: 'Irregular forms',
        tip: `Some common verbs are irregular in the subjunctive:
- ser → **sea** · ir → **vaya** · estar → **esté**
- saber → **sepa** · haber → **haya**
Verbs with an irregular **yo** form keep it: tengo → **tenga**, hago → **haga**, vengo → **venga**.`,
        items: [
          'que sea | that it is | that it be;that he is;that she is',
          'que vaya | that he goes | that she goes;that I go',
          'que tenga | that she has | that he has;that I have',
          'que esté | that he is | that she is;that I am;that it is',
          'Quiero que la fiesta sea divertida. | I want the party to be fun.',
          'Quiero que vayas conmigo. | I want you to go with me. | I want you to come with me',
          'Mis padres quieren que tenga cuidado. | My parents want me to be careful. | My parents want him to be careful;My parents want her to be careful',
          '¿Quieres que haga la cena? | Do you want me to make dinner? | Should I make dinner;Want me to make dinner;Do you want me to cook dinner',
          'Queremos que estés bien. | We want you to be okay. | We want you to be well;We want you to be OK;We want you to be fine',
          'Quiero que sepas la verdad. | I want you to know the truth.',
        ],
      },
      {
        title: 'I hope',
        tip: `**Espero que** (I hope that) is always followed by the subjunctive.
- **Espero que estés bien.** I hope you're well.
Short answers need no verb:
- **Espero que sí.** I hope so.
- **Espero que no.** I hope not.`,
        items: [
          'espero que | I hope that | I hope',
          'Espero que sí. | I hope so.',
          'Espero que no. | I hope not.',
          'Espero que estés bien. | I hope you are well. | I hope you\'re well;I hope you are okay;I hope you\'re okay;I hope you\'re doing well;I hope you are doing well',
          'Espero que tengas un buen viaje. | I hope you have a good trip. | I hope you have a nice trip;Have a good trip',
          'Espero que no llueva mañana. | I hope it does not rain tomorrow. | I hope it doesn\'t rain tomorrow;I hope it won\'t rain tomorrow',
          'Esperamos que vengan a la boda. | We hope you all come to the wedding. | We hope you come to the wedding;We hope they come to the wedding;We hope you\'ll come to the wedding;We hope they\'ll come to the wedding',
          'Espero que te guste la comida. | I hope you like the food.',
          'Mi jefe espera que yo termine hoy. | My boss hopes I finish today. | My boss hopes that I finish today;My boss hopes I\'ll finish today;My boss expects me to finish today',
        ],
      },
      {
        title: 'Ojalá',
        tip: `**Ojalá** means "hopefully" or "I hope". It comes from Arabic: "if God wills".
It always takes the subjunctive, with or without **que**:
- **Ojalá (que) ganemos.** Hopefully we win.
**haya** is the subjunctive of **hay**: **Ojalá no haya tráfico.**`,
        items: [
          'ojalá | hopefully | I hope;let\'s hope',
          'el partido | the game | the match',
          '¡Ojalá que sí! | I really hope so! | I hope so;let\'s hope so;hopefully',
          'Ojalá haga sol mañana. | Hopefully it will be sunny tomorrow. | I hope it\'s sunny tomorrow;I hope it is sunny tomorrow;Hopefully it\'s sunny tomorrow;Let\'s hope it\'s sunny tomorrow',
          'Ojalá que ganemos el partido. | Hopefully we win the game. | I hope we win the game;Let\'s hope we win the game;Hopefully we\'ll win the game;Hopefully we win the match;I hope we win the match',
          'Ojalá puedas venir. | I hope you can come. | Hopefully you can come',
          'Ojalá que el tren llegue a tiempo. | Hopefully the train arrives on time. | I hope the train arrives on time;I hope the train gets here on time;Hopefully the train gets here on time',
          'Ojalá encuentres trabajo pronto. | I hope you find a job soon. | Hopefully you find a job soon;I hope you find work soon;Hopefully you find work soon',
          'Ojalá que mi abuela se sienta mejor. | I hope my grandmother feels better. | I hope my grandma feels better;Hopefully my grandmother feels better;Hopefully my grandma feels better',
          'Ojalá no haya tráfico. | Hopefully there is no traffic. | Hopefully there\'s no traffic;I hope there is no traffic;I hope there\'s no traffic',
        ],
      },
    ],
    story: {
      title: 'La fiesta de la abuela',
      lines: [
        'Sofía: Mamá, ¿qué quieres que lleve a la fiesta? | Mom, what do you want me to bring to the party?',
        'Mamá: Quiero que traigas un pastel. | I want you to bring a cake.',
        'Sofía: Está bien. ¿Quieres que haga uno de chocolate? | Okay. Do you want me to make a chocolate one?',
        'Mamá: Sí, a la abuela le encanta el chocolate. | Yes, Grandma loves chocolate.',
        'Sofía: Espero que le guste. ¿Va a venir el tío Pablo? | I hope she likes it. Is Uncle Pablo coming?',
        'Mamá: Ojalá que sí, pero trabaja hasta tarde. | I hope so, but he works until late.',
        'Sofía: Quiero que la abuela tenga un día especial. | I want Grandma to have a special day.',
        'Mamá: Yo también. Y espero que no llueva, porque la fiesta es en el jardín. | Me too. And I hope it doesn\'t rain, because the party is in the garden.',
        'Sofía: ¡Ojalá haga sol! | Hopefully it\'s sunny!',
      ],
      questions: [
        { q: 'What will Sofía bring?', options: ['A chocolate cake', 'Flowers', 'Bread'], answer: 0 },
        { q: 'Why might Uncle Pablo not come?', options: ['He works late', 'He is sick', 'He is traveling'], answer: 0 },
        { q: 'Where is the party?', options: ['In the garden', 'At a restaurant', 'At the beach'], answer: 0 },
      ],
    },
  }),

  unit(4, {
    id: 'u34-emotion-doubt',
    title: 'Feelings & doubt',
    emoji: '🤔',
    description: 'React to news and express doubt with the subjunctive.',
    lessons: [
      {
        title: 'I\'m glad that…',
        tip: `Feelings about what **someone else** does → **que** + subjunctive.
- **Me alegra que estés aquí.** I'm glad you're here.
- **Me encanta que cocines.** I love that you cook.
- **Me molesta que…** It bothers me that…
These work like **gustar**: **me / te / le / nos / les**.`,
        items: [
          'me alegra que | I am glad that | I\'m glad that;I\'m glad;I\'m happy that',
          'me encanta que | I love that | I love it that',
          'Me alegra que estés aquí. | I am glad you are here. | I\'m glad you\'re here;I\'m happy you\'re here;I am happy that you are here;I\'m glad that you\'re here',
          'Me alegra que te guste tu trabajo. | I am glad you like your job. | I\'m glad you like your job;I\'m happy you like your job;I\'m glad you like your work',
          'Nos alegra que vengan de visita. | We are glad you are coming to visit. | We\'re glad you\'re coming to visit;We\'re happy you\'re coming to visit;We\'re glad they\'re coming to visit;We are glad they are coming to visit',
          'Me encanta que cocines para mí. | I love that you cook for me. | I love it that you cook for me;I love it when you cook for me',
          'A mi hermano le molesta que yo use su computadora. | It bothers my brother that I use his computer. | My brother is bothered that I use his computer;My brother doesn\'t like me using his computer',
          'Me gusta que mis hijos lean. | I like that my kids read. | I like that my children read;I like it that my kids read',
          'Estoy feliz de que tengas novio. | I am happy that you have a boyfriend. | I\'m happy you have a boyfriend;I\'m glad you have a boyfriend;I\'m happy that you have a boyfriend',
        ],
      },
      {
        title: 'I\'m sorry that…',
        tip: `More feelings that trigger the subjunctive:
- **siento que**: I'm sorry that
- **me sorprende que**: I'm surprised that
- **tengo miedo de que**: I'm afraid that
- **es una lástima que**: it's a shame that
Careful: **siento que** + indicative means "I feel that".`,
        items: [
          'me sorprende | it surprises me | I\'m surprised;I am surprised',
          'es una lástima | it is a shame | it\'s a shame;it\'s a pity;it\'s too bad;what a shame',
          'Siento que estés enfermo. | I am sorry you are sick. | I\'m sorry you\'re sick;I am sorry that you are sick;I\'m sorry you\'re ill;I\'m sorry you are sick',
          'Siento mucho que no puedas venir. | I am very sorry you cannot come. | I\'m really sorry you can\'t come;I\'m so sorry you can\'t come;I\'m very sorry you can\'t come;I am very sorry that you can\'t come',
          'Me da pena que se vayan. | It makes me sad that you are leaving. | I\'m sad that you\'re leaving;I\'m sad they\'re leaving;It makes me sad that they are leaving;It\'s a shame that you\'re leaving',
          'Me sorprende que Juan no llame. | I am surprised that Juan does not call. | I\'m surprised Juan doesn\'t call;It surprises me that Juan doesn\'t call;I\'m surprised that Juan isn\'t calling',
          'Tengo miedo de que perdamos el vuelo. | I am afraid we will miss the flight. | I\'m afraid we\'ll miss the flight;I\'m scared we\'ll miss the flight;I am afraid that we will miss the flight;I\'m afraid we might miss the flight',
          'Es una lástima que llueva hoy. | It is a shame that it is raining today. | It\'s a shame it\'s raining today;It\'s too bad it\'s raining today;It is a pity that it is raining today;It\'s a shame that it rains today',
          'siento que | I am sorry that | I\'m sorry that',
        ],
      },
      {
        title: 'I doubt it',
        tip: `Doubt and disbelief → subjunctive:
- **dudo que**: I doubt that
- **no creo que**: I don't think that
- **no es cierto que**: it's not true that
- **es posible que**: it's possible that
**Dudo que sea verdad.** I doubt it's true.`,
        items: [
          'dudo que | I doubt that | I doubt',
          'no creo que | I do not think that | I don\'t think;I don\'t think that;I don\'t believe that',
          'es posible que | it is possible that | it\'s possible that;maybe',
          'Dudo que él sepa cocinar. | I doubt that he knows how to cook. | I doubt he knows how to cook;I doubt he can cook',
          'No creo que sea verdad. | I do not think it is true. | I don\'t think it\'s true;I don\'t believe it\'s true;I don\'t think that\'s true',
          'No creo que tengamos tiempo. | I do not think we have time. | I don\'t think we have time;I don\'t think we\'ll have time',
          'Dudo que el restaurante esté abierto. | I doubt the restaurant is open. | I doubt that the restaurant is open',
          'Es posible que llegue tarde. | It is possible that I will arrive late. | I might arrive late;I may be late;It\'s possible I\'ll be late;It\'s possible that I\'ll arrive late;He might arrive late;She might be late;It is possible that he will arrive late',
          'No es cierto que Ana se mude. | It is not true that Ana is moving. | It isn\'t true that Ana is moving;It\'s not true that Ana is moving;It\'s not true Ana is moving',
          'Mis amigos no creen que yo pueda correr un maratón. | My friends do not think I can run a marathon. | My friends don\'t think I can run a marathon;My friends don\'t believe I can run a marathon',
        ],
      },
      {
        title: 'Creo que vs. no creo que',
        tip: `Certainty → **indicative**. Doubt → **subjunctive**.
- **Creo que es verdad.** I think it's true.
- **No creo que sea verdad.** I don't think it's true.
Also indicative: **pienso que**, **estoy seguro de que**, **es verdad que**, **no dudo que**.`,
        items: [
          'creo que | I think that | I think;I believe;I believe that',
          'estoy seguro | I am sure | I\'m sure',
          'Creo que es verdad. | I think it is true. | I think it\'s true;I believe it\'s true;I think that\'s true',
          'Creo que tenemos tiempo. | I think we have time. | I believe we have time',
          'Pienso que el museo está cerrado. | I think the museum is closed. | I think that the museum is closed;I believe the museum is closed',
          'Estoy seguro de que va a llover. | I am sure it is going to rain. | I\'m sure it\'s going to rain;I am sure that it is going to rain;I\'m sure it will rain',
          'Es verdad que Marta habla tres idiomas. | It is true that Marta speaks three languages. | It\'s true that Marta speaks three languages;It\'s true Marta speaks three languages',
          'No dudo que eres inteligente. | I do not doubt that you are smart. | I don\'t doubt that you\'re smart;I don\'t doubt you\'re smart;I don\'t doubt that you are intelligent;I have no doubt you\'re smart',
          '¿Crees que va a venir? | Do you think he is going to come? | Do you think he\'s coming;Do you think she\'s coming;Do you think she is going to come;Do you think he\'ll come;Do you think she\'ll come',
          'Creo que sí, pero no creo que llegue temprano. | I think so, but I do not think he will arrive early. | I think so, but I don\'t think he\'ll arrive early;I think so, but I don\'t think she\'ll arrive early;I think so, but I don\'t think he will get here early;I think so, but I don\'t think she will arrive early',
        ],
      },
    ],
    story: {
      title: 'Una noticia',
      lines: [
        'Lucas: ¡Tengo un trabajo nuevo en Bogotá! | I have a new job in Bogotá!',
        'Elena: ¡Qué bien! Me alegra que estés contento. | Great! I\'m glad you are happy.',
        'Lucas: Gracias. Pero siento que no podamos vernos tanto. | Thanks. But I\'m sorry we won\'t be able to see each other as much.',
        'Elena: No creo que sea un problema. Hay vuelos baratos. | I don\'t think it\'s a problem. There are cheap flights.',
        'Lucas: Es verdad. ¿Crees que mi perro va a estar bien allá? | That\'s true. Do you think my dog will be okay there?',
        'Elena: Creo que sí. A los perros les gusta estar con su familia. | I think so. Dogs like being with their family.',
        'Lucas: Mi mamá duda que yo sepa vivir solo. | My mom doubts that I know how to live alone.',
        'Elena: Me sorprende que diga eso. ¡Cocinas muy bien! | I\'m surprised she says that. You cook very well!',
        'Lucas: Es posible que me visite el mes que viene. | She might visit me next month.',
        'Elena: ¡Qué bueno! Me encanta que tu familia sea tan unida. | How nice! I love that your family is so close.',
      ],
      questions: [
        { q: "Where is Lucas's new job?", options: ['In Bogotá', 'In Lima', 'In Mexico City'], answer: 0 },
        { q: "What does Lucas's mom doubt?", options: ['That he knows how to live alone', 'That he can find a job', 'That he likes Bogotá'], answer: 0 },
        { q: 'Who might visit Lucas next month?', options: ['His mom', 'Elena', 'His brother'], answer: 0 },
      ],
    },
  }),

  unit(4, {
    id: 'u35-advice',
    title: 'Advice',
    emoji: '💡',
    description: 'Give advice, make requests and explain purpose.',
    lessons: [
      {
        title: 'I recommend…',
        tip: `When you advise **someone** to do something → **que** + subjunctive.
- **Te recomiendo que pruebes los tacos.** I recommend you try the tacos.
- **Te sugiero que salgas temprano.** I suggest you leave early.
The pronoun (**te, le, les**) shows who gets the advice.`,
        items: [
          'recomendar | to recommend',
          'te recomiendo que | I recommend that you | I recommend you;I\'d recommend that you',
          'Te recomiendo que pruebes los tacos. | I recommend that you try the tacos. | I recommend you try the tacos;I\'d recommend you try the tacos;You should try the tacos',
          'Le recomiendo que tome el autobús. | I recommend that you take the bus. | I recommend you take the bus;I\'d recommend you take the bus;I recommend that he take the bus;I recommend that she take the bus;I recommend he takes the bus',
          'El médico me recomienda que duerma más. | The doctor recommends that I sleep more. | The doctor recommends I sleep more;The doctor tells me to sleep more;My doctor recommends that I sleep more',
          'Te sugiero que salgas temprano. | I suggest that you leave early. | I suggest you leave early;I\'d suggest you leave early;I suggest leaving early',
          'Sugiero que comamos afuera. | I suggest that we eat outside. | I suggest we eat outside;I suggest eating outside;Let\'s eat outside',
          '¿Qué me recomiendas? | What do you recommend? | What would you recommend',
          'Les sugiero que reserven una mesa. | I suggest that you reserve a table. | I suggest you reserve a table;I suggest you book a table;I suggest that you all book a table;I\'d suggest you book a table;I suggest that they reserve a table',
        ],
      },
      {
        title: 'Asking for things',
        tip: `**pedir que** = to ask someone to do something.
- **Te pido que me ayudes.** I'm asking you to help me.
**decir que** + subjunctive is an order, not news:
- **Dice que llega tarde.** He says he's arriving late. (news)
- **Dice que llegues temprano.** He says to arrive early. (order)`,
        items: [
          'pedir | to ask for | to ask;to request',
          'te pido | I am asking you | I\'m asking you;I ask you',
          'Te pido que me ayudes. | I am asking you to help me. | I\'m asking you to help me;I ask you to help me;Please help me',
          'Mi papá me pide que lave el carro. | My dad asks me to wash the car. | My father asks me to wash the car;My dad is asking me to wash the car',
          'La maestra nos pide que hablemos en español. | The teacher asks us to speak in Spanish. | The teacher asks us to speak Spanish;The teacher is asking us to speak in Spanish',
          'Le voy a pedir que baje la música. | I am going to ask him to turn down the music. | I\'m going to ask him to turn down the music;I\'m going to ask her to turn down the music;I\'m going to ask him to turn the music down;I\'m going to ask her to turn the music down;I\'ll ask him to turn down the music;I\'ll ask her to turn down the music',
          'Mi jefa me dice que llegue a las ocho. | My boss tells me to arrive at eight. | My boss tells me to get there at eight;My boss tells me to come at eight;My boss is telling me to arrive at eight',
          'Dile que me llame. | Tell him to call me. | Tell her to call me;Have him call me;Have her call me',
          'Les pedimos que no fumen aquí. | We ask you not to smoke here. | We ask that you not smoke here;We\'re asking you not to smoke here;We ask them not to smoke here;Please don\'t smoke here',
          'Les pido que sean puntuales. | I ask you all to be on time. | I\'m asking you to be on time;I\'m asking you all to be on time;I ask that you be on time;I ask you to be punctual;I\'m asking them to be on time',
        ],
      },
      {
        title: 'It\'s important that…',
        tip: `Opinions about what someone should do → subjunctive:
- **es importante que** · **es necesario que**
- **es mejor que** · **es bueno que**
With no specific person, use the infinitive:
- **Es importante dormir.** It's important to sleep.
- **Es importante que duermas.** It's important that you sleep.`,
        items: [
          'es importante que | it is important that | it\'s important that',
          'es necesario que | it is necessary that | it\'s necessary that',
          'es mejor que | it is better that | it\'s better that;it\'s better if',
          'Es importante que bebas mucha agua. | It is important that you drink a lot of water. | It\'s important that you drink a lot of water;It\'s important that you drink plenty of water;It\'s important you drink plenty of water;It is important that you drink lots of water;It\'s important to drink lots of water',
          'Es necesario que traigan el pasaporte. | It is necessary that you bring your passport. | You need to bring your passport;You all need to bring your passports;It\'s necessary that you bring your passport;It\'s necessary for you to bring your passport;They need to bring their passport',
          'Es mejor que vayamos en metro. | It is better that we go by subway. | It\'s better if we go by subway;It\'s better if we take the subway;It\'s better that we take the metro;It\'s better if we take the metro;It is better that we go by metro;We\'d better take the subway',
          'Es bueno que hagas ejercicio. | It is good that you exercise. | It\'s good that you exercise;It\'s good you work out;It\'s good that you work out',
          'No es necesario que vengas. | It is not necessary that you come. | You don\'t need to come;You don\'t have to come;It isn\'t necessary for you to come;It\'s not necessary for you to come',
          'Es importante que los niños duerman bien. | It is important that children sleep well. | It\'s important that kids sleep well;It\'s important for children to sleep well;It is important that the children sleep well;It\'s important that the kids sleep well',
          'Es mejor que no digas nada. | It is better that you do not say anything. | It\'s better if you don\'t say anything;You\'d better not say anything;It\'s better that you say nothing;It\'s better not to say anything',
        ],
      },
      {
        title: 'So that',
        tip: `**para que** (so that) always takes the subjunctive.
- **Hablo despacio para que entiendas.** I speak slowly so you understand.
Same person doing both actions? Use **para** + infinitive:
- **Ahorro dinero para viajar.** I save money to travel.`,
        items: [
          'para que | so that | in order that;so',
          'ahorrar | to save | to save money',
          'Ahorro dinero para viajar. | I save money to travel. | I\'m saving money to travel;I save money in order to travel;I\'m saving money for traveling',
          'Te doy mi número para que me llames. | I am giving you my number so that you can call me. | I\'m giving you my number so you can call me;I\'ll give you my number so you can call me;Here\'s my number so you can call me;I give you my number so that you call me',
          'Hablo despacio para que entiendas. | I speak slowly so that you understand. | I speak slowly so you understand;I\'m speaking slowly so you understand;I speak slowly so you can understand;I\'m talking slowly so you understand',
          'Mi abuela cocina para que comamos bien. | My grandmother cooks so that we eat well. | My grandma cooks so we eat well;My grandmother cooks so we eat well',
          'Voy a cerrar la ventana para que no entre el frío. | I am going to close the window so the cold does not come in. | I\'m going to close the window so the cold doesn\'t come in;I\'m going to close the window so the cold doesn\'t get in;I\'ll close the window so the cold doesn\'t come in;I\'m going to close the window so that the cold doesn\'t come in',
          'Ahorramos dinero para que nuestros hijos puedan estudiar. | We save money so that our children can study. | We save money so our children can study;We\'re saving money so our kids can study;We save money so our kids can study;We save money so that our kids can go to school',
          'Te presto mi bici para que llegues más rápido. | I will lend you my bike so that you get there faster. | I\'ll lend you my bike so you get there faster;I\'m lending you my bike so you can get there faster;I\'ll lend you my bike so you arrive faster;I lend you my bike so you arrive faster',
          'Escribo la lista para que no olvides nada. | I am writing the list so that you do not forget anything. | I\'m writing the list so you don\'t forget anything;I\'m writing the list so you won\'t forget anything;I write the list so you don\'t forget anything',
        ],
      },
    ],
    story: {
      title: 'Antes del viaje',
      lines: [
        'Diego: Voy a México la semana que viene. ¿Qué me recomiendas? | I\'m going to Mexico next week. What do you recommend?',
        'Paula: Te recomiendo que visites Oaxaca. La comida es increíble. | I recommend that you visit Oaxaca. The food is incredible.',
        'Diego: ¡Perfecto! Me encanta comer. | Perfect! I love to eat.',
        'Paula: Es importante que pruebes el mole. | It\'s important that you try the mole.',
        'Diego: ¿Y es necesario que reserve el hotel ahora? | And do I need to book the hotel now?',
        'Paula: Sí, te sugiero que lo reserves hoy. Hay muchos turistas en noviembre. | Yes, I suggest you book it today. There are lots of tourists in November.',
        'Diego: Mi mamá me pide que la llame todos los días. | My mom asks me to call her every day.',
        'Paula: Es mejor que le escribas mensajes para que no gastes mucho. | It\'s better to text her so that you don\'t spend much.',
        'Diego: Buena idea. Gracias por los consejos. | Good idea. Thanks for the advice.',
      ],
      questions: [
        { q: 'Which place does Paula recommend?', options: ['Oaxaca', 'Cancún', 'Monterrey'], answer: 0 },
        { q: 'When should Diego book the hotel?', options: ['Today', 'Next week', 'In November'], answer: 0 },
        { q: "What does Diego's mom ask him to do?", options: ['Call her every day', 'Bring her a gift', 'Try the mole'], answer: 0 },
      ],
    },
  }),

  unit(4, {
    id: 'u36-past-subjunctive',
    title: 'If I were…',
    emoji: '💭',
    description: 'Wishes and requests in the past with the imperfect subjunctive.',
    lessons: [
      {
        title: 'Past subjunctive forms',
        tip: `Take the **ellos** preterite, drop **-ron**, add **-ra**:
- fueron → **fuera** · tuvieron → **tuviera**
- hicieron → **hiciera** · pudieron → **pudiera**
Endings: **-ra, -ras, -ra, -ramos, -ran**. The **nosotros** form gets an accent: **tuviéramos**.
You'll also hear **-se** forms (**fuese**, **tuviese**). They mean the same thing.`,
        items: [
          'que fuera | that it were | that it was;that he was;that she was;that I was;that I were | que fuese',
          'que tuviera | that I had | that he had;that she had;that you had | que tuviese',
          'que hiciera | that he did | that she did;that I did;that he made;that she made;that I made | que hiciese',
          'que pudiera | that I could | that he could;that she could;that you could | que pudiese',
          'Era importante que tuviera paciencia. | It was important that I be patient. | It was important for me to be patient;It was important that he be patient;It was important for him to be patient;It was important for her to be patient;It was important to be patient | Era importante que tuviese paciencia.',
          'Fue una sorpresa que vinieran. | It was a surprise that they came. | It was a surprise they came;It was a surprise that you came;It was surprising that they came | Fue una sorpresa que viniesen.',
          'Esperaba que hiciera buen tiempo. | I was hoping the weather would be nice. | I was hoping the weather would be good;I hoped the weather would be good;I hoped the weather would be nice;I was hoping for good weather;I hoped it would be nice out | Esperaba que hiciese buen tiempo.',
          'Me alegró que pudieras venir. | I was glad you could come. | I was happy you could come;I was glad that you could come;It made me happy that you could come | Me alegró que pudieses venir.',
        ],
      },
      {
        title: 'I wanted you to…',
        tip: `When the main verb is in the **past**, the subjunctive goes to the past too:
- **Quiero que vengas.** I want you to come.
- **Quería que vinieras.** I wanted you to come.
Same with **pedir, decir, recomendar, sugerir**: **Me pidió que la ayudara.**`,
        items: [
          'quería que | I wanted | he wanted;she wanted;I wanted that',
          'me pidió que | she asked me to | he asked me to;you asked me to',
          'Quería que vinieras a la fiesta. | I wanted you to come to the party. | I wanted you to go to the party;I had wanted you to come to the party | Quería que vinieses a la fiesta.',
          'Mis padres querían que yo fuera médico. | My parents wanted me to be a doctor. | My parents wanted me to become a doctor | Mis padres querían que yo fuese médico.',
          'La profesora quería que leyéramos el libro. | The teacher wanted us to read the book. | Our teacher wanted us to read the book;The professor wanted us to read the book | La profesora quería que leyésemos el libro.',
          'Mi hermana me pidió que la ayudara. | My sister asked me to help her. | My sister asked that I help her | Mi hermana me pidió que la ayudase.',
          'Te dije que llamaras al hotel. | I told you to call the hotel. | I said to call the hotel;I told you that you should call the hotel | Te dije que llamases al hotel.',
          'El médico me recomendó que caminara más. | The doctor recommended that I walk more. | The doctor recommended I walk more;The doctor told me to walk more;My doctor recommended that I walk more | El médico me recomendó que caminase más.',
          'No quería que te preocuparas. | I did not want you to worry. | I didn\'t want you to worry;I didn\'t want you to be worried | No quería que te preocupases.',
          'Nos sugirieron que tomáramos un taxi. | They suggested that we take a taxi. | They suggested we take a taxi;They suggested we get a taxi;They suggested that we took a taxi;You suggested that we take a taxi | Nos sugirieron que tomásemos un taxi.',
        ],
      },
      {
        title: 'I wish…',
        tip: `**Ojalá** + past subjunctive = a wish that is unlikely or impossible:
- **Ojalá venga.** I hope he comes. (possible)
- **Ojalá viniera.** I wish he would come. (unlikely)
**quisiera** is a very polite "I would like": **Quisiera un café.**`,
        items: [
          'quisiera | I would like | I\'d like',
          'Quisiera un café, por favor. | I would like a coffee, please. | I\'d like a coffee, please;I\'d like some coffee, please;I would like some coffee, please',
          'Quisiera hablar con el gerente. | I would like to speak with the manager. | I\'d like to speak with the manager;I\'d like to talk to the manager;I would like to speak to the manager',
          'Ojalá tuviera más tiempo. | I wish I had more time. | If only I had more time;I wish I had more free time | Ojalá tuviese más tiempo.',
          'Ojalá pudiera ir contigo. | I wish I could go with you. | I wish I could come with you;If only I could go with you | Ojalá pudiese ir contigo.',
          'Ojalá fuera viernes. | I wish it were Friday. | I wish it was Friday;If only it were Friday;If only it was Friday | Ojalá fuese viernes.',
          'Ojalá supiera cocinar como mi abuela. | I wish I knew how to cook like my grandmother. | I wish I knew how to cook like my grandma;I wish I could cook like my grandmother;I wish I could cook like my grandma | Ojalá supiese cocinar como mi abuela.',
          'Ojalá estuvieras aquí. | I wish you were here. | If only you were here;I wish you were here with me | Ojalá estuvieses aquí.',
          'Ojalá no lloviera tanto. | I wish it did not rain so much. | I wish it didn\'t rain so much;I wish it wouldn\'t rain so much;If only it didn\'t rain so much | Ojalá no lloviese tanto.',
        ],
      },
      {
        title: 'As if',
        tip: `**como si** (as if) is always followed by the **past subjunctive**, even when talking about now:
- **Habla como si fuera el jefe.** He talks as if he were the boss.
- **como si nada**: as if nothing happened`,
        items: [
          'como si | as if | as though;like',
          'como si nada | as if nothing happened | like nothing happened;as if nothing were wrong',
          'Habla como si fuera el jefe. | He talks as if he were the boss. | He talks like he\'s the boss;He talks like he was the boss;He talks as though he were the boss;He speaks as if he were the boss;She talks as if she were the boss;She talks like she\'s the boss | Habla como si fuese el jefe.',
          'Come como si no hubiera mañana. | He eats as if there were no tomorrow. | He eats like there\'s no tomorrow;He eats as though there were no tomorrow;She eats as if there were no tomorrow;She eats like there\'s no tomorrow | Come como si no hubiese mañana.',
          'Me miró como si no me conociera. | She looked at me as if she did not know me. | She looked at me as if she didn\'t know me;She looked at me like she didn\'t know me;She looked at me as though she didn\'t know me;He looked at me as if he didn\'t know me;He looked at me like he didn\'t know me | Me miró como si no me conociese.',
          'Gasta dinero como si fuera rico. | He spends money as if he were rich. | He spends money like he\'s rich;He spends money like he was rich;He spends money as though he were rich | Gasta dinero como si fuese rico.',
          'Mi perro actúa como si entendiera todo. | My dog acts as if he understood everything. | My dog acts like he understands everything;My dog acts like it understands everything;My dog acts as if it understood everything;My dog acts as though he understood everything | Mi perro actúa como si entendiese todo.',
          'Hablas español como si vivieras en México. | You speak Spanish as if you lived in Mexico. | You speak Spanish like you live in Mexico;You speak Spanish as though you lived in Mexico | Hablas español como si vivieses en México.',
          'Bailan como si nadie los mirara. | They dance as if nobody were watching them. | They dance as if no one were watching;They dance like nobody\'s watching;They dance like no one is watching them;They dance as though nobody were watching | Bailan como si nadie los mirase.',
          'Actúa como si nada. | He acts as if nothing happened. | He acts like nothing happened;She acts as if nothing happened;She acts like nothing happened;He acts as if nothing were wrong',
        ],
      },
    ],
    story: {
      title: 'El sueño del abuelo',
      lines: [
        'Abuelo: Cuando era joven, mis padres querían que fuera abogado. | When I was young, my parents wanted me to be a lawyer.',
        'Nieta: ¿Y tú qué querías? | And what did you want?',
        'Abuelo: Yo quería ser músico. Tocaba la guitarra como si fuera mi vida. | I wanted to be a musician. I played the guitar as if it were my life.',
        'Nieta: ¿Por qué no fuiste músico? | Why didn\'t you become a musician?',
        'Abuelo: Mi padre me pidió que estudiara algo práctico. | My father asked me to study something practical.',
        'Nieta: ¿Y te gustó ser abogado? | And did you like being a lawyer?',
        'Abuelo: Más o menos. Ojalá tuviera tu edad otra vez. | So-so. I wish I were your age again.',
        'Nieta: Abuelo, quisiera que me enseñaras a tocar la guitarra. | Grandpa, I\'d like you to teach me to play the guitar.',
        'Abuelo: ¡Claro que sí! Me alegra mucho que me lo pidas. | Of course! I\'m so glad you\'re asking me.',
      ],
      questions: [
        { q: "What did the grandfather's parents want him to be?", options: ['A lawyer', 'A musician', 'A doctor'], answer: 0 },
        { q: 'What instrument did he play?', options: ['The guitar', 'The piano', 'The drums'], answer: 0 },
        { q: 'What does the granddaughter ask for?', options: ['Guitar lessons', 'A bedtime story', 'Help with homework'], answer: 0 },
      ],
    },
  }),

  unit(4, {
    id: 'u37-if-clauses',
    title: 'If…',
    emoji: '🔀',
    description: 'Talk about real and imaginary situations with "si".',
    lessons: [
      {
        title: 'If it rains…',
        tip: `For real, likely situations: **si** + present → future (or present, or a command).
- **Si llueve, me quedo en casa.** If it rains, I stay home.
- **Si tengo tiempo, te llamaré.** If I have time, I'll call you.
Never put the future or the present subjunctive right after **si**.`,
        items: [
          'si | if',
          'si llueve | if it rains',
          'Si llueve, me quedo en casa. | If it rains, I stay home. | If it rains, I\'ll stay home;If it rains, I will stay home;If it rains, I stay at home',
          'Si tengo tiempo, te llamaré. | If I have time, I will call you. | If I have time, I\'ll call you',
          'Si estudias, aprobarás el examen. | If you study, you will pass the exam. | If you study, you\'ll pass the exam;If you study, you\'ll pass the test;If you study, you will pass the test',
          'Si vamos a la playa, llevaremos sándwiches. | If we go to the beach, we will bring sandwiches. | If we go to the beach, we\'ll bring sandwiches;If we go to the beach, we\'ll take sandwiches',
          'Si mi hermano viene, cenaremos juntos. | If my brother comes, we will have dinner together. | If my brother comes, we\'ll have dinner together;If my brother comes, we\'ll eat dinner together',
          'Si no te gusta, no lo comas. | If you do not like it, do not eat it. | If you don\'t like it, don\'t eat it',
          'Si ves a Carla, dile hola. | If you see Carla, say hi to her. | If you see Carla, say hi;If you see Carla, say hello;If you see Carla, tell her hi',
          '¿Qué harás si pierdes el tren? | What will you do if you miss the train? | What\'ll you do if you miss the train;What are you going to do if you miss the train',
        ],
      },
      {
        title: 'Plans & conditions',
        tip: `The **si** part can go first or second. Use a comma only when it goes first.
- **Si quieres, podemos ir.**
- **Podemos ir si quieres.**
**ir a** + infinitive works too: **Si hace calor, vamos a nadar.**`,
        items: [
          'si quieres | if you want | if you like',
          'a tiempo | on time',
          'Si hace calor, vamos a nadar. | If it is hot, we are going to swim. | If it\'s hot, we\'re going to swim;If it\'s hot, we\'re going swimming;If it\'s hot, we\'ll go swimming;If it is hot, we will go swimming',
          'Si consigo el trabajo, voy a mudarme. | If I get the job, I am going to move. | If I get the job, I\'m going to move;If I get the job, I\'ll move',
          'Si me ayudas, terminaremos pronto. | If you help me, we will finish soon. | If you help me, we\'ll finish soon;If you help me, we\'ll be done soon',
          'Si llegas tarde, el jefe se enojará. | If you arrive late, the boss will get angry. | If you\'re late, the boss will get angry;If you\'re late, the boss will get mad;If you arrive late, the boss will be angry;If you get there late, the boss will get angry',
          'Si quieres, podemos ir mañana. | If you want, we can go tomorrow. | If you like, we can go tomorrow;We can go tomorrow if you want',
          'Te prestaré el libro si lo cuidas. | I will lend you the book if you take care of it. | I\'ll lend you the book if you take care of it;I\'ll lend you the book if you look after it',
          'Si salimos ahora, llegaremos a tiempo. | If we leave now, we will arrive on time. | If we leave now, we\'ll arrive on time;If we leave now, we\'ll get there on time;If we leave now, we will make it on time',
        ],
      },
      {
        title: 'If I had…',
        tip: `For imaginary or unlikely situations: **si** + past subjunctive → **conditional**.
- **Si tuviera dinero, viajaría.** If I had money, I'd travel.
- **Si fuera tú, no diría nada.** If I were you, I wouldn't say anything.`,
        items: [
          'si pudiera | if I could | if he could;if she could | si pudiese',
          'si tuviera | if I had | if he had;if she had | si tuviese',
          'Si tuviera dinero, viajaría por el mundo. | If I had money, I would travel around the world. | If I had money, I\'d travel around the world;If I had money, I would travel the world;If I had money, I\'d travel the world | Si tuviese dinero, viajaría por el mundo.',
          'Si fuera tú, no diría nada. | If I were you, I would not say anything. | If I were you, I wouldn\'t say anything;If I was you, I wouldn\'t say anything;If I were you, I\'d say nothing | Si fuese tú, no diría nada.',
          'Si pudiera, viviría en la playa. | If I could, I would live at the beach. | If I could, I\'d live at the beach;If I could, I\'d live on the beach;If I could, I would live by the beach | Si pudiese, viviría en la playa.',
          'Si hiciera buen tiempo, comeríamos afuera. | If the weather were nice, we would eat outside. | If the weather was nice, we\'d eat outside;If the weather were good, we would eat outside;If the weather was good, we\'d eat outside;If it were nice out, we\'d eat outside | Si hiciese buen tiempo, comeríamos afuera.',
          'Si supiera la respuesta, te la diría. | If I knew the answer, I would tell you. | If I knew the answer, I\'d tell you | Si supiese la respuesta, te la diría.',
          '¿Qué harías si ganaras la lotería? | What would you do if you won the lottery? | What would you do if you won the lotto | ¿Qué harías si ganases la lotería?',
          'Si viviéramos más cerca, nos veríamos más. | If we lived closer, we would see each other more. | If we lived closer, we\'d see each other more;If we lived closer, we would see each other more often;If we lived nearer, we would see each other more | Si viviésemos más cerca, nos veríamos más.',
          'Si mi hija hablara inglés, trabajaría en Canadá. | If my daughter spoke English, she would work in Canada. | If my daughter spoke English, she\'d work in Canada;If my daughter could speak English, she would work in Canada | Si mi hija hablase inglés, trabajaría en Canadá.',
        ],
      },
      {
        title: 'Real or imaginary?',
        tip: `Compare the two patterns:
- Likely: **Si vienes, te prepararé una paella.**
- Imaginary: **Si vinieras, te prepararía una paella.**
Present → future. Past subjunctive → conditional.`,
        items: [
          'Si tengo hambre, como una fruta. | If I am hungry, I eat a piece of fruit. | If I\'m hungry, I eat a piece of fruit;If I\'m hungry, I eat some fruit;When I\'m hungry, I eat some fruit',
          'Si tuviera hambre, comería algo. | If I were hungry, I would eat something. | If I was hungry, I\'d eat something;If I were hungry, I\'d eat something | Si tuviese hambre, comería algo.',
          'Si vienes, te prepararé una paella. | If you come, I will make you a paella. | If you come, I\'ll make you a paella;If you come, I\'ll make you paella;If you come, I\'ll cook you a paella;If you come, I will make paella for you',
          'Si vinieras, te prepararía una paella. | If you came, I would make you a paella. | If you came, I\'d make you a paella;If you came, I\'d make you paella;If you came, I\'d cook you a paella;If you came, I would make paella for you | Si vinieses, te prepararía una paella.',
          'Si tenemos vacaciones, iremos a Perú. | If we have vacation, we will go to Peru. | If we have vacation, we\'ll go to Peru;If we get vacation, we\'ll go to Peru;If we have a vacation, we will go to Peru;If we have time off, we\'ll go to Peru',
          'Si tuviéramos vacaciones, iríamos a Perú. | If we had vacation, we would go to Peru. | If we had vacation, we\'d go to Peru;If we had a vacation, we\'d go to Peru;If we had time off, we\'d go to Peru | Si tuviésemos vacaciones, iríamos a Perú.',
          'Mis amigos estarían felices si los visitaras. | My friends would be happy if you visited them. | My friends would be happy if you visited;My friends would be glad if you visited them | Mis amigos estarían felices si los visitases.',
          'Si puedes, llámame esta noche. | If you can, call me tonight. | Call me tonight if you can',
          'Si yo fuera rico, compraría una casa grande. | If I were rich, I would buy a big house. | If I were rich, I\'d buy a big house;If I was rich, I\'d buy a big house;If I were rich, I would buy a large house | Si yo fuese rico, compraría una casa grande.',
        ],
      },
    ],
    story: {
      title: 'Planes para el sábado',
      lines: [
        'Marco: Si hace sol el sábado, iremos al lago. | If it\'s sunny on Saturday, we\'ll go to the lake.',
        'Inés: ¿Y si llueve? | And if it rains?',
        'Marco: Si llueve, veremos una película en casa. | If it rains, we\'ll watch a movie at home.',
        'Inés: Me parece bien. ¿Invitamos a Tomás? | Sounds good. Should we invite Tomás?',
        'Marco: Si tuviera carro, vendría, pero vive muy lejos. | If he had a car, he would come, but he lives very far away.',
        'Inés: Si quieres, yo lo busco en mi carro. | If you want, I\'ll pick him up in my car.',
        'Marco: ¡Qué amable! Si fuera yo, no manejaría tanto. | How kind! If it were me, I wouldn\'t drive that much.',
        'Inés: No es nada. Si vamos todos juntos, será más divertido. | It\'s nothing. If we all go together, it will be more fun.',
        'Marco: Tienes razón. Si llevamos comida, haremos un pícnic. | You\'re right. If we bring food, we\'ll have a picnic.',
        'Inés: ¡Perfecto! Ojalá haga sol. | Perfect! Hopefully it\'s sunny.',
      ],
      questions: [
        { q: 'What will they do if it rains?', options: ['Watch a movie at home', 'Go to the lake anyway', 'Go to a restaurant'], answer: 0 },
        { q: "Why can't Tomás come easily?", options: ['He has no car and lives far away', 'He has to work', 'He is sick'], answer: 0 },
        { q: 'Who offers to pick up Tomás?', options: ['Inés', 'Marco', "Tomás's brother"], answer: 0 },
      ],
    },
  }),
]
