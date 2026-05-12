// ============================================================
// PONTE — content data
// Pulled directly from Elaine's "PONTE Revisado.docx".
// Edit this file to update prompts; the UI re-reads on reload.
// ============================================================

window.PONTE = {

  // ----- Welcome / capa --------------------------------------
  welcome: {
    salutation: "Olá!",
    greeting: "Desejo que esteja bem.",
    body:
      "É com imensa alegria que inicio esta jornada — e é uma verdadeira honra ter sua companhia ao longo deste percurso. Esta oficina foi pensada para enriquecer seus projetos e ações, proporcionando uma imersão autêntica na experiência de compreender o que significa estar no lugar do outro.",
    cta: "Vamos começar?"
  },

  // ----- About the methodology -------------------------------
  about: {
    eyebrow: "PONTE — para elaboração de projetos de vida",
    title: "Três passos, à mão.",
    body:
      "A metodologia se divide em três exercícios. Em cada um, você é convidada a descrever, com calma, o que será solicitado. Não é uma checklist. É um inventário, uma escuta, uma ponte.",
    materials:
      "Se possível, escreva à mão também — em uma folha em branco, com caneta ou lápis. A escrita manual intensifica nossa presença e nos conecta melhor com nós mesmas.",
    cta: "Conhecer os três exercícios"
  },

  // ----- The three stages ------------------------------------
  stages: [
    {
      id: "presente",
      number: "01",
      theme: "verde",
      title: "a presença como presente",
      tagline: "Um inventário do que você já é.",
      bg: "../../assets/bg-green.jpg",
      intro:
        "Vamos começar nosso processo observando seu momento atual. Faremos um levantamento sobre o que você já conquistou até aqui. Com frequência negligenciamos nossas conquistas e isso resulta na subvalorização dos recursos que já temos. Compreender onde estamos representa metade do caminho para indicar para onde estamos indo.",
      prompt:
        "Descreva de maneira detalhada como estão as seguintes áreas de sua vida — não se concentre apenas nos aspectos negativos. Pouca coisa, na vida, está completamente perfeita ou completamente terrível.",
      cue: "Aqui e Agora — Gilberto Gil",
      cueLink: "https://www.youtube.com/watch?v=cC1ntip1f_U"
    },
    {
      id: "futuro",
      number: "02",
      theme: "amarelo",
      title: "o futuro é ancestral",
      tagline: "O que você não deseja para o seu futuro.",
      bg: "../../assets/bg-purple.jpg",
      intro:
        "O futuro não é totalmente novo, como parece. Nele estão implicitamente presentes nosso passado e nosso presente. Ao considerarmos o que não desejamos para o nosso futuro, abrimos espaço para uma análise profunda de nossas preferências, limites e valores no agora.",
      prompt:
        "Descreva, para cada área, o que você não deseja para o seu futuro. Isso não é pessimismo — é uma estratégia esclarecedora para identificar o que merece ser preservado no presente.",
      cue: "O Futuro é Ancestral — Ailton Krenak",
      cueLink: null
    },
    {
      id: "ponte",
      number: "03",
      theme: "laranja",
      title: "ponte para projetos de vida",
      tagline: "Ações concretas, hoje, com o que você já tem.",
      bg: "../../assets/bg-orange.jpg",
      intro:
        "A Ponte é a mediação entre seu presente e seu futuro. Aqui você descreve o que pode e deseja fazer, a partir de suas condições atuais, para viver uma vida com sentido. Antes das ações, três fundamentos: relações, participação coletiva, produção de beleza.",
      prompt:
        "Para cada área, descreva ações específicas e factíveis que você pode iniciar agora — ancoradas nas relações que você listou, nos grupos que despertam seu interesse e nas formas de produzir beleza que descobriu.",
      cue: null,
      cueLink: null
    }
  ],

  // ----- 11 áreas da vida (used in all 3 stages) -------------
  areas: [
    {
      id: "saude",
      name: "Saúde",
      presente: "Como se sente em termos de energia, bem-estar geral e hábitos de vida? Quais hábitos, mesmo sem você perceber, auxiliam na manutenção de sua saúde física e emocional?",
      futuro: "O que você não deseja para sua saúde no futuro? Que padrões hoje, se mantidos, te levariam para lá?",
      ponte: "Pense em ações específicas que você pode estabelecer no presente para aprimorar seu bem-estar.",
      sugestoes: [
        "Organizar leituras de seu interesse — artigos, livros, histórias em quadrinhos. Comece devagar.",
        "Participar de atividades voluntárias ao menos uma vez por ano.",
        "Dedicar-se a uma atividade artística simples — desenhar, pintar, bordar.",
        "Relembrar sua juventude e extrair dela ousadia, coragem, esperança."
      ]
    },
    {
      id: "familia",
      name: "Família",
      presente: "Como está a qualidade dessas relações? O que você pode destacar de positivo? Se não é próxima de seus familiares, como isso te ajudou?",
      futuro: "O que você não deseja para suas relações familiares no futuro?",
      ponte: "Pense em ações que possam reforçar seus laços familiares, ou resolver questões pendentes.",
      sugestoes: [
        "Conhecer o funcionamento da comunicação não violenta e da escuta ativa.",
        "Investir em formas de desenvolver apoio mútuo — receber ajuda e apoiar de maneira fluida."
      ]
    },
    {
      id: "amizades",
      name: "Amizades",
      presente: "Você está satisfeita com a qualidade dessas relações? O que a dinâmica das amizades — as que ficam, as que partem — ensinou de importante a você?",
      futuro: "O que você não deseja para suas amizades no futuro?",
      ponte: "Considere maneiras de cuidar e fortalecer suas amizades no presente.",
      sugestoes: [
        "Ampliar sua rede para além das relações humanas — plantas, animais, estações do ano, literatura, filosofia.",
        "Praticar meditação e autoconsciência como gesto de amizade consigo mesma.",
        "Realizar atividades físicas como uma relação de amizade e confiança com seu corpo.",
        "Participar de eventos e atividades culturais."
      ]
    },
    {
      id: "emprego",
      name: "Emprego",
      presente: "O que o trabalho significa para você, em termos positivos? Há oportunidades de crescimento que você pode aproveitar melhor?",
      futuro: "O que você não deseja para sua vida profissional?",
      ponte: "Pense em como progredir em direção aos seus objetivos profissionais, no momento atual.",
      sugestoes: [
        "Expandir sua rede de contatos.",
        "Aprender outra língua, por aplicativos e estudos autodidatas.",
        "Realizar teste vocacional — em qualquer momento da vida.",
        "Procurar ajuda profissional para conversar sobre carreira e sonhos."
      ]
    },
    {
      id: "sonho",
      name: "Sonho",
      presente: "O que você já alcançou? Existe algo específico em que esteja trabalhando para realizar neste momento?",
      futuro: "O que você não deseja para seus sonhos — o que faria com que eles se esvaziassem?",
      ponte: "Identifique passos concretos que você pode dar no presente para caminhar em direção aos seus sonhos.",
      sugestoes: [
        "Reflita com carinho sobre seus sonhos de infância — para reencontrar ternura, doçura, simplicidade.",
        "Convide pessoas que você ama a participar de ações relacionadas a esses sonhos."
      ]
    },
    {
      id: "financeira",
      name: "Vida financeira",
      presente: "Você tem enfrentado desafios? É organizada? O que a superação de obstáculos nesse campo trouxe de aprendizado importante?",
      futuro: "O que você não deseja para sua vida financeira no futuro?",
      ponte: "Identifique passos concretos para progredir em direção à sua organização.",
      sugestoes: [
        "Estabelecer um orçamento claro e acompanhar gastos regularmente.",
        "Economizar uma porcentagem específica regularmente — interessa o aprendizado, não a quantia.",
        "Investir em educação financeira: livros, cursos, aconselhamento.",
        "Definir metas de curto e longo prazo.",
        "Pensar formas de ganhar dinheiro de maneira co-participativa ou cooperativa."
      ]
    },
    {
      id: "educacao",
      name: "Educação e desenvolvimento",
      presente: "Há áreas específicas em que gostaria de expandir seu conhecimento? Como todas as formas de educação que você teve te fortaleceram até aqui?",
      futuro: "O que você não deseja para seu desenvolvimento?",
      ponte: "Pense em formas de se desenvolver de maneira ampla e objetiva.",
      sugestoes: [
        "Invista em áreas específicas em que gostaria de expandir conhecimento.",
        "Procure cursos online gratuitos.",
        "Pesquise universidades, intercâmbios.",
        "Verifique todas as oportunidades em sua cidade.",
        "Dedique tempo a entender as tendências do mercado profissional."
      ]
    },
    {
      id: "lazer",
      name: "Lazer e recreação",
      presente: "Quais são seus hobbies favoritos? Essas atividades contribuem positivamente para seu bem-estar?",
      futuro: "O que você não deseja que aconteça com seu lazer?",
      ponte: "Considere como você utiliza seu tempo de lazer.",
      sugestoes: [
        "Seus hobbies são sempre os mesmos? O que aconteceria se ampliasse as possibilidades?",
        "Essas atividades realmente proporcionam descanso, ou sempre causam gastos e cansaço?",
        "Como se divertir sem ter que gastar dinheiro?",
        "Você consegue ficar sem fazer nada? Como lida com o ócio?"
      ]
    },
    {
      id: "comunidade",
      name: "Engajamento comunitário",
      presente: "De que maneira você já contribuiu ou contribui para o bem-estar da sua comunidade?",
      futuro: "O que você não deseja para sua relação com a comunidade?",
      ponte: "Pondere sobre como potencializar sua participação na comunidade.",
      sugestoes: [
        "Pense maneiras de contribuir com o bem-estar da sua comunidade.",
        "Avalie quais aprendizados poderá adquirir participando da vida comunitária."
      ]
    },
    {
      id: "equilibrio",
      name: "Equilíbrio e autocuidado",
      presente: "Você está dedicando tempo suficiente para o autocuidado e o descanso?",
      futuro: "O que você não deseja para seu equilíbrio?",
      ponte: "Descreva formas de melhorar sua autoestima, conhecimento pessoal e equilíbrio emocional.",
      sugestoes: [
        "Aproveite melhor os espaços públicos.",
        "Convide pessoas de outras gerações — mais jovens e mais velhas — para passar um tempo juntas. Não apenas familiares."
      ]
    },
    {
      id: "tecnologia",
      name: "Tecnologia e conexão social",
      presente: "Como você utiliza a tecnologia em sua vida diária? Ela contribui para conexões sociais positivas?",
      futuro: "O que você não deseja para sua relação com a tecnologia?",
      ponte: "Pense em estratégias para usar a tecnologia da melhor forma.",
      sugestoes: [
        "Pense como a tecnologia pode ser utilizada a seu favor — emprego, formação cultural, política.",
        "Estabeleça metas de uso, e utilize outros meios de interação que não se limitem ao celular."
      ]
    }
  ],

  // ----- Three pillars (preface to Exercise 3) ---------------
  pillars: [
    {
      id: "relacoes",
      eyebrow: "1. Sem relações, não existem os sonhos.",
      title: "Quem estará ao meu lado?",
      body:
        "Um dos desafios mais sérios para elaborar um projeto é a crença equivocada de que ele é uma jornada puramente individual. A qualidade das interações é o que sustenta um projeto de vida promissor.",
      tasks: [
        "Faça uma lista das relações mais significativas em sua vida.",
        "Identifique aquelas das quais você jamais abriria mão.",
        "Considere também outras formas de conexão — o mar, o amanhecer, a música, o tempo livre."
      ]
    },
    {
      id: "grupos",
      eyebrow: "2. Estar junto, para ser maior.",
      title: "Em que grupos você quer estar?",
      body:
        "Participar de grupos amplia horizontes e dá objetividade ao seu projeto. Através da interação torna-se possível mapear oportunidades já presentes no seu contexto.",
      tasks: [
        "Elabore uma lista de atividades coletivas que despertem seu interesse.",
        "Valorize grupos diferentes dos que você está acostumada — abre novas perspectivas.",
        "Em cada etapa, coloque ao menos uma proposta altamente inusitada, criativa e ousada."
      ]
    },
    {
      id: "beleza",
      eyebrow: "3. A beleza necessária.",
      title: "Onde colocar mais beleza?",
      body:
        "A habilidade de gerar beleza, em todas as suas formas, é a melhor maneira de despertar e intensificar nossa presença. Um projeto de vida não pode ser desprovido de beleza, pois, com o tempo, esvazia seu sentido.",
      tasks: [
        "Plantar uma árvore por ano.",
        "Escrever cartas para contar sobre seu projeto de vida.",
        "Enfeitar sua casa.",
        "Dançar todos os dias músicas que você ama e que nunca dançou.",
        "Olhar o céu."
      ]
    }
  ],

  // ----- Compromisso (closing letter) ------------------------
  compromisso: {
    eyebrow: "Compromisso",
    title: "Uma declaração para si — e para alguém de confiança.",
    body:
      "Vamos finalizar este percurso com a efetivação de um compromisso pessoal? Escreva uma declaração de compromisso que defina seu planejamento. Mantenha-se focada e revisite-a periodicamente. Agora, o mais importante: envie uma cópia desta carta de compromisso para alguém de confiança. O objetivo é que você tenha companhia, e também possa ser acompanhada. Isso pode ajudar muito você a cumprir seus objetivos.",
    placeholder: "Eu me comprometo a…",
    closing:
      "Foi uma jornada intensa, não é mesmo? Espero que tenha se reconectado com a riqueza que permeia a sua vida. Até a próxima, e que, até lá, os dias sejam repletos de sentido e cores.",
    signature: "Com carinho, Elaine Narcizo"
  }
};
