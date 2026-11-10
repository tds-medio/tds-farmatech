export type Severity = 'LEVE' | 'MODERADA' | 'GRAVE' | 'CONTRAINDICADA';

export interface QuizQ {
  q: string;
  options: string[];
  answer: number;
  why: string;
}

export interface Section {
  title: string;
  body: string;
  tone?: 'default' | 'warn' | 'danger';
}

export interface Module {
  id: string;
  name: string;
  subtitle: string;
  tags: string[];
  severity: Severity;
  summary: string;
  sections: Section[];
  avoid: string[];
  quiz: QuizQ[];
}

export const foodModules: Module[] = [
  {
    id: 'alendronato',
    name: 'Alendronato de Sódio',
    subtitle: 'Tratamento de Osteoporose e Osteopenia',
    tags: ['bisfosfonato', 'jejum', 'cálcio', 'osso', 'osteoporose'],
    severity: 'GRAVE',
    summary:
      'A absorção do alendronato é praticamente anulada por qualquer alimento ou bebida que não seja água pura.',
    sections: [
      {
        title: 'O que é e para que serve',
        body: 'Bisfosfonato que inibe os osteoclastos (células que reabsorvem osso), preservando a massa óssea e prevenindo fraturas em pacientes com osteoporose e osteopenia.',
      },
      {
        title: 'Regra do jejum e absorção',
        body: 'Administrar 1 vez por semana, logo ao acordar, em jejum absoluto, com 1 copo grande de água pura (200 ml). Atenção: sucos, cafés, leite e alimentos reduzem a absorção em valores próximos a 100%.',
        tone: 'warn',
      },
      {
        title: 'Regra posicional obrigatória',
        body: 'Manter-se em pé ou sentado ereto por no mínimo 30 a 60 minutos após engolir o comprimido. Jamais deitar — o refluxo do fármaco provoca lesões e ulcerações graves no esôfago.',
        tone: 'danger',
      },
      {
        title: 'Interações alimentares e medicamentosas',
        body: 'Aguardar de 30 a 60 minutos antes de comer qualquer alimento. Suplementos de cálcio e de ferro devem ser rigorosamente espaçados do horário da dose.',
      },
    ],
    avoid: [
      'Tome sempre ao acordar, em jejum, apenas com água pura (200 ml).',
      'Permaneça em pé ou sentado ereto por 30 a 60 minutos.',
      'Só se alimente após 30 a 60 minutos da ingestão.',
      'Separe cálcio e ferro para outro período do dia.',
    ],
    quiz: [
      {
        q: 'Com qual líquido o alendronato deve ser ingerido?',
        options: ['Suco de laranja', 'Água pura (200 ml)', 'Leite morno', 'Café preto'],
        answer: 1,
        why: 'Apenas água pura preserva a absorção; sucos, café e leite reduzem a absorção próxima a 100%.',
      },
      {
        q: 'Por que não se deve deitar após tomar o comprimido?',
        options: [
          'Porque causa sonolência',
          'Porque reduz o efeito no coração',
          'Porque pode causar lesões e ulcerações graves no esôfago',
          'Porque aumenta a pressão arterial',
        ],
        answer: 2,
        why: 'O contato prolongado do fármaco com a mucosa esofágica provoca esofagite e ulcerações graves; fique ereto por 30 a 60 minutos.',
      },
    ],
  },
  {
    id: 'clonazepam',
    name: 'Clonazepam x Café (Cafeína)',
    subtitle: 'Benzodiazepínico depressor do SNC',
    tags: ['clonazepam', 'cafeína', 'café', 'ansiedade', 'gaba'],
    severity: 'MODERADA',
    summary:
      'A cafeína antagoniza o efeito ansiolítico e sedativo do clonazepam e cria uma falsa sensação de segurança.',
    sections: [
      {
        title: 'O que é e como age',
        body: 'Benzodiazepínico depressor do Sistema Nervoso Central que potencializa o efeito do neurotransmissor GABA, gerando ação tranquilizante, relaxante muscular e anticonvulsivante.',
      },
      {
        title: 'O antagonismo com a cafeína',
        body: 'A cafeína (café, chás escuros, energéticos e refrigerantes de cola) é um estimulante que bloqueia a adenosina. Combinada ao clonazepam, reduz ou anula o efeito ansiolítico e sedativo, desencadeando insônia, agitação e palpitações.',
        tone: 'warn',
      },
      {
        title: 'Falsa sensação de segurança',
        body: 'A cafeína reduz a sonolência percebida, mas NÃO recupera os reflexos nem a coordenação motora alterados pelo medicamento — o que aumenta de forma importante o risco de acidentes, inclusive no trânsito.',
        tone: 'danger',
      },
    ],
    avoid: [
      'Evite café, chás escuros, energéticos e refrigerantes de cola próximo ao horário da dose.',
      'Nunca use cafeína para "compensar" a sedação antes de dirigir ou operar máquinas.',
      'Prefira bebidas sem cafeína no período da noite.',
    ],
    quiz: [
      {
        q: 'Qual o efeito da cafeína sobre o clonazepam?',
        options: [
          'Potencializa a sedação',
          'Reduz ou anula o efeito ansiolítico e sedativo',
          'Não interfere em nada',
          'Aumenta a absorção intestinal',
        ],
        answer: 1,
        why: 'A cafeína é estimulante e bloqueia a adenosina, antagonizando o efeito do clonazepam e causando insônia, agitação e palpitações.',
      },
      {
        q: 'Tomar café depois do clonazepam deixa a pessoa apta a dirigir?',
        options: [
          'Sim, a cafeína reverte o efeito completamente',
          'Não — reflexos e coordenação continuam prejudicados',
          'Sim, desde que seja café forte',
          'Depende da dose de café',
        ],
        answer: 1,
        why: 'A cafeína só reduz a sonolência percebida; reflexos e coordenação motora permanecem alterados, aumentando o risco de acidentes.',
      },
    ],
  },
  {
    id: 'levotiroxina',
    name: 'Levotiroxina Sódica',
    subtitle: 'Hormônio da tireoide (reposição de T4)',
    tags: ['levotiroxina', 'tireoide', 'hipotireoidismo', 'jejum', 'café'],
    severity: 'GRAVE',
    summary:
      'Café, leite, soja, fibras, cálcio, ferro e antiácidos bloqueiam de forma importante a absorção do hormônio.',
    sections: [
      {
        title: 'Indicação',
        body: 'Reposição do hormônio T4 no tratamento do hipotireoidismo, regulando o metabolismo do organismo.',
      },
      {
        title: 'Modo seguro de tomar',
        body: 'Uso diário, em jejum absoluto, exclusivamente com água. Aguardar de 30 a 60 minutos antes do café da manhã.',
      },
      {
        title: 'Fatores de bloqueio da absorção',
        body: 'Café, leite, soja e alimentos ricos em fibras reduzem drasticamente a absorção da levotiroxina.',
        tone: 'warn',
      },
      {
        title: 'Cuidados especiais',
        body: 'Suplementos de cálcio, de ferro e antiácidos/protetores gástricos exigem intervalo mínimo de 4 horas em relação à dose.',
        tone: 'warn',
      },
      {
        title: 'Sinais de alerta',
        body: 'Dose alta: taquicardia, insônia, tremores e sensação de calor. Dose baixa: fadiga, ganho de peso, pele seca e frio constante.',
        tone: 'danger',
      },
    ],
    avoid: [
      'Tome em jejum, somente com água, sempre no mesmo horário.',
      'Espere de 30 a 60 minutos para o café da manhã.',
      'Mantenha 4 horas de intervalo de cálcio, ferro e antiácidos.',
      'Relate ao médico sinais de dose alta ou baixa.',
    ],
    quiz: [
      {
        q: 'Qual o intervalo mínimo entre a levotiroxina e suplementos de cálcio ou ferro?',
        options: ['30 minutos', '1 hora', '2 horas', '4 horas'],
        answer: 3,
        why: 'Cálcio, ferro e antiácidos exigem intervalo mínimo de 4 horas para não comprometerem a absorção.',
      },
      {
        q: 'Quais sinais sugerem dose excessiva de levotiroxina?',
        options: [
          'Fadiga, ganho de peso e frio constante',
          'Taquicardia, insônia, tremores e calor',
          'Tosse seca e espirros',
          'Manchas nos dentes',
        ],
        answer: 1,
        why: 'O excesso de hormônio acelera o metabolismo: taquicardia, insônia, tremores e intolerância ao calor.',
      },
    ],
  },
  {
    id: 'tetraciclina',
    name: 'Tetraciclina x Leite e Cálcio',
    subtitle: 'Mecanismo de quelação (chelação)',
    tags: ['tetraciclina', 'antibiótico', 'leite', 'cálcio', 'sol'],
    severity: 'GRAVE',
    summary:
      'O cálcio do leite forma um quelato insolúvel com a tetraciclina, reduzindo de 50% a 80% a eficácia do antibiótico.',
    sections: [
      {
        title: 'Classe e mecanismo',
        body: 'Antibiótico bacteriostático de amplo espectro. Liga-se à subunidade 30S do ribossomo bacteriano, bloqueando a entrada do aminoacil-tRNA e a síntese proteica. Indicado para Chlamydia trachomatis, Rickettsia rickettsii e outras infecções bacterianas.',
      },
      {
        title: 'O fenômeno da quelação pelo leite',
        body: 'O cálcio do leite liga-se à molécula da tetraciclina no trato digestivo, formando um complexo insolúvel (quelato) de difícil absorção — redução de 50% a 80% na eficácia. O remédio é eliminado nas fezes sem efeito terapêutico.',
        tone: 'danger',
      },
      {
        title: 'Instruções posológicas',
        body: 'Tomar com água pura, 1 hora antes ou 2 horas depois das refeições. Evitar leite, derivados e suplementos minerais (cálcio, ferro, magnésio) por pelo menos 2 horas antes e depois da dose.',
      },
      {
        title: 'Contraindicações e reações adversas',
        body: 'Contraindicada em gestantes e crianças menores de 8 anos: causa manchamento amarelado/acinzentado permanente nos dentes e inibição do crescimento ósseo, por ligação ao cálcio em calcificação ativa.',
        tone: 'danger',
      },
      {
        title: 'Alerta de fotossensibilidade',
        body: 'O acúmulo cutâneo do fármaco absorve radiação UV, causando queimaduras solares e eritemas graves em caso de exposição ao sol.',
        tone: 'warn',
      },
    ],
    avoid: [
      'Tome com água pura, 1 hora antes ou 2 horas depois das refeições.',
      'Afaste leite, iogurte, queijo e suplementos minerais em pelo menos 2 horas.',
      'Use protetor solar e evite exposição solar durante o tratamento.',
      'Não utilize em gestantes nem em crianças com menos de 8 anos.',
    ],
    quiz: [
      {
        q: 'O que acontece quando a tetraciclina é tomada com leite?',
        options: [
          'Aumenta a absorção',
          'Forma um quelato insolúvel e perde de 50% a 80% da eficácia',
          'Protege o estômago sem outros efeitos',
          'Acelera a ação do antibiótico',
        ],
        answer: 1,
        why: 'O cálcio liga-se à tetraciclina formando um complexo insolúvel eliminado nas fezes, sem efeito terapêutico.',
      },
      {
        q: 'Por que a tetraciclina é contraindicada em crianças menores de 8 anos?',
        options: [
          'Causa insônia',
          'Provoca manchamento dentário permanente e inibe o crescimento ósseo',
          'Aumenta o apetite',
          'Reduz a imunidade',
        ],
        answer: 1,
        why: 'O fármaco liga-se ao cálcio em calcificação ativa, manchando dentes de forma permanente e prejudicando o crescimento ósseo.',
      },
    ],
  },
  {
    id: 'varfarina-k',
    name: 'Varfarina x Vitamina K',
    subtitle: 'Anticoagulante oral de janela terapêutica estreita',
    tags: ['varfarina', 'vitamina k', 'inr', 'folhosos', 'anticoagulante'],
    severity: 'GRAVE',
    summary:
      'Variações bruscas no consumo de folhosos verde-escuros desestabilizam o INR e o risco de trombose ou hemorragia.',
    sections: [
      {
        title: 'Mecanismo',
        body: 'Anticoagulante oral que inibe a ativação da Vitamina K no fígado, reduzindo a produção dos fatores de coagulação dependentes dela.',
      },
      {
        title: 'Interação alimentar',
        body: 'Alimentos ricos em Vitamina K (folhosos verde-escuros como couve, espinafre, brócolis e rúcula) antagonizam o efeito da varfarina, aumentando o risco de coágulos e trombose.',
        tone: 'warn',
      },
      {
        title: 'Monitoramento',
        body: 'Necessidade de exames de sangue regulares (TAP / INR) para evitar hemorragias (efeito excessivo) ou tromboses (efeito insuficiente).',
        tone: 'danger',
      },
    ],
    avoid: [
      'Não elimine os folhosos: mantenha consumo CONSTANTE e previsível.',
      'Evite mudanças bruscas de dieta ou "detox" verdes.',
      'Realize o TAP/INR nos intervalos indicados pelo médico.',
      'Informe sempre o uso de varfarina a qualquer profissional de saúde.',
    ],
    quiz: [
      {
        q: 'Qual a melhor conduta alimentar para quem usa varfarina?',
        options: [
          'Eliminar totalmente os folhosos verdes',
          'Manter consumo constante e regular de vitamina K',
          'Comer folhosos apenas aos domingos',
          'Dobrar a dose de folhosos',
        ],
        answer: 1,
        why: 'O problema é a variação: consumo estável de vitamina K mantém o INR previsível e seguro.',
      },
    ],
  },
  {
    id: 'ciprofloxacino',
    name: 'Ciprofloxacino',
    subtitle: 'Antibiótico quinolônico',
    tags: ['ciprofloxacino', 'antibiótico', 'leite', 'ferro', 'zinco'],
    severity: 'MODERADA',
    summary: 'Leite, cálcio, ferro, zinco e magnésio reduzem significativamente a absorção do antibiótico.',
    sections: [
      {
        title: 'Mecanismo e cuidados',
        body: 'Antibiótico com absorção significativamente reduzida na presença de leite, alimentos ricos em cálcio e minerais como ferro, zinco e magnésio.',
        tone: 'warn',
      },
      {
        title: 'Recomendação',
        body: 'Respeitar rigidamente os horários prescritos e os intervalos em relação às refeições e aos suplementos minerais.',
      },
    ],
    avoid: [
      'Tome com água, afastado de leite e derivados.',
      'Separe suplementos de ferro, zinco, cálcio e magnésio por algumas horas.',
      'Cumpra rigorosamente os horários das doses até o fim do tratamento.',
    ],
    quiz: [
      {
        q: 'Quais substâncias reduzem a absorção do ciprofloxacino?',
        options: [
          'Água e sal',
          'Leite, cálcio, ferro, zinco e magnésio',
          'Proteínas animais',
          'Vitamina C',
        ],
        answer: 1,
        why: 'Esses cátions minerais se ligam ao antibiótico no trato digestivo, reduzindo de forma significativa a sua absorção.',
      },
    ],
  },
];

export const drugModules: Module[] = [
  {
    id: 'alprazolam-clonazepam',
    name: 'Alprazolam + Clonazepam',
    subtitle: 'Sinal Vermelho — Alto Risco',
    tags: ['alprazolam', 'clonazepam', 'benzodiazepínico', 'gaba'],
    severity: 'GRAVE',
    summary: 'Dois benzodiazepínicos somam efeitos sobre o GABA e podem levar à depressão respiratória e coma.',
    sections: [
      {
        title: 'Incompatibilidade',
        body: 'A associação entre dois benzodiazepínicos atua de forma acumulativa sobre o neurotransmissor GABA, multiplicando a depressão do Sistema Nervoso Central.',
        tone: 'danger',
      },
      {
        title: 'Efeitos adversos compostos',
        body: 'Risco severo de sedação excessiva, perda de coordenação, confusão mental, depressão respiratória e coma.',
        tone: 'danger',
      },
    ],
    avoid: [
      'Nunca associe dois benzodiazepínicos por conta própria.',
      'Leve todas as receitas ao médico/farmacêutico para revisão.',
      'Evite álcool e outros depressores do SNC.',
    ],
    quiz: [
      {
        q: 'Qual o principal risco da associação alprazolam + clonazepam?',
        options: [
          'Hipertensão arterial',
          'Depressão respiratória e coma por somação de efeitos no GABA',
          'Manchas na pele',
          'Perda de cabelo',
        ],
        answer: 1,
        why: 'Ambos potencializam o GABA; o efeito acumulado causa sedação profunda, depressão respiratória e coma.',
      },
    ],
  },
  {
    id: 'amoxicilina-varfarina',
    name: 'Amoxicilina + Varfarina',
    subtitle: 'Sinal Amarelo — Alerta de Monitoramento',
    tags: ['amoxicilina', 'varfarina', 'inr', 'microbiota'],
    severity: 'MODERADA',
    summary: 'O antibiótico reduz a vitamina K produzida pela microbiota e potencializa a anticoagulação.',
    sections: [
      {
        title: 'Mecanismo de interação',
        body: 'A amoxicilina altera a microbiota intestinal, reduzindo a produção endógena de Vitamina K.',
        tone: 'warn',
      },
      {
        title: 'Consequência',
        body: 'Potencializa a ação da varfarina, elevando o risco de sangramentos. O descontrole do INR pode persistir mesmo após o término do antibiótico, exigindo acompanhamento frequente.',
        tone: 'warn',
      },
    ],
    avoid: [
      'Informe o médico sobre o uso de varfarina antes de iniciar o antibiótico.',
      'Aumente a frequência de controle do INR durante e após o tratamento.',
      'Observe gengivas sangrando, hematomas e urina avermelhada.',
    ],
    quiz: [
      {
        q: 'Por que a amoxicilina potencializa a varfarina?',
        options: [
          'Porque aumenta a absorção da varfarina no estômago',
          'Porque reduz a produção intestinal de vitamina K pela microbiota',
          'Porque bloqueia as plaquetas',
          'Porque acidifica o sangue',
        ],
        answer: 1,
        why: 'Com menos vitamina K endógena, a inibição promovida pela varfarina fica mais intensa, elevando o risco de sangramento.',
      },
    ],
  },
  {
    id: 'cetoprofeno-aas',
    name: 'Cetoprofeno + Aspirina (AAS)',
    subtitle: 'Sinal Vermelho — Contraindicação',
    tags: ['cetoprofeno', 'aas', 'aspirina', 'aine', 'úlcera'],
    severity: 'CONTRAINDICADA',
    summary: 'Dois AINEs juntos duplicam a agressão gástrica e a inibição plaquetária, sem ganho analgésico.',
    sections: [
      {
        title: 'Incompatibilidade',
        body: 'Uso simultâneo de dois AINEs (Anti-inflamatórios Não Esteroides), com mesmo mecanismo de ação e toxicidade somada.',
        tone: 'danger',
      },
      {
        title: 'Riscos agravados',
        body: 'Inibição duplicada das prostaglandinas protetoras do estômago (úlceras e hemorragia digestiva), inibição plaquetária severa e alto risco de reação alérgica/broncoespasmo cruzado em pacientes asmáticos. Alternativa recomendada: paracetamol, sob orientação profissional.',
        tone: 'danger',
      },
    ],
    avoid: [
      'Nunca combine dois anti-inflamatórios não esteroides.',
      'Em dor leve, prefira paracetamol sob orientação.',
      'Pacientes asmáticos devem redobrar a atenção pelo risco de broncoespasmo.',
    ],
    quiz: [
      {
        q: 'Qual alternativa é recomendada no lugar da associação de dois AINEs?',
        options: ['Dipirona + AAS', 'Paracetamol sob orientação profissional', 'Nimesulida + cetoprofeno', 'Ibuprofeno em dose dupla'],
        answer: 1,
        why: 'O paracetamol, sob orientação, não possui o mesmo perfil de agressão gástrica e plaquetária dos AINEs.',
      },
    ],
  },
  {
    id: 'omeprazol',
    name: 'Omeprazol e suas Interações Críticas',
    subtitle: 'Sinal Vermelho / Amarelo — Inibidor da Bomba de Prótons',
    tags: ['omeprazol', 'clopidogrel', 'ibp', 'ferro', 'b12'],
    severity: 'GRAVE',
    summary: 'Anula a proteção cardiovascular do clopidogrel e altera a absorção e a toxicidade de vários fármacos.',
    sections: [
      {
        title: 'Classe',
        body: 'Inibidor da Bomba de Prótons (IBP) que reduz de forma potente a acidez gástrica.',
      },
      {
        title: 'Interação crítica 1 — Clopidogrel',
        body: 'O omeprazol impede a conversão do clopidogrel na sua forma ativa no fígado, anulando a proteção contra infartos e AVCs.',
        tone: 'danger',
      },
      {
        title: 'Outras interações',
        body: 'Reduz a eficácia de antifúngicos (cetoconazol) e de suplementos de ferro por falta de acidez; aumenta a toxicidade de varfarina, fenitoína e diazepam; interfere em antivirais para HIV (atazanavir).',
        tone: 'warn',
      },
      {
        title: 'Riscos do uso prolongado',
        body: 'Deficiência de Vitamina B12, hipomagnesemia e maior risco de fraturas ósteo-articulares.',
        tone: 'warn',
      },
    ],
    avoid: [
      'Usuários de clopidogrel devem discutir alternativas (ex.: outro IBP) com o médico.',
      'Não use omeprazol cronicamente sem reavaliação periódica.',
      'Monitore B12 e magnésio em uso prolongado.',
    ],
    quiz: [
      {
        q: 'Qual a consequência de associar omeprazol e clopidogrel?',
        options: [
          'Aumenta o efeito antiplaquetário',
          'Anula a ativação hepática do clopidogrel e a proteção contra infarto e AVC',
          'Não há interação',
          'Causa apenas azia',
        ],
        answer: 1,
        why: 'O omeprazol inibe a enzima que converte o clopidogrel em sua forma ativa, eliminando o efeito protetor cardiovascular.',
      },
      {
        q: 'Qual risco está ligado ao uso prolongado de omeprazol?',
        options: [
          'Deficiência de vitamina B12, hipomagnesemia e fraturas',
          'Aumento da acidez gástrica',
          'Hipertensão',
          'Manchas dentárias',
        ],
        answer: 0,
        why: 'A redução crônica da acidez prejudica a absorção de B12 e magnésio e eleva o risco de fraturas ósseas.',
      },
    ],
  },
  {
    id: 'ranitidina',
    name: 'Ranitidina',
    subtitle: 'Sinal Amarelo — Alteração de acidez e metabolismo hepático',
    tags: ['ranitidina', 'h2', 'cetoconazol', 'metformina', 'varfarina'],
    severity: 'MODERADA',
    summary: 'A queda da acidez gástrica prejudica antifúngicos e antirretrovirais e altera níveis de outros fármacos.',
    sections: [
      {
        title: 'Mecanismo',
        body: 'Antagonista dos receptores H2 que reduz a acidez gástrica e afeta enzimas hepáticas envolvidas no metabolismo de medicamentos.',
      },
      {
        title: 'Impactos',
        body: 'Diminui drasticamente a absorção de antifúngicos (cetoconazol, itraconazol) e de antirretrovirais; altera os níveis de metformina no sangue; exige controle do tempo de coagulação em usuários de varfarina.',
        tone: 'warn',
      },
    ],
    avoid: [
      'Espace antifúngicos e antirretrovirais do horário da ranitidina.',
      'Monitore glicemia em usuários de metformina.',
      'Controle o tempo de coagulação (INR) se usar varfarina.',
    ],
    quiz: [
      {
        q: 'Por que a ranitidina reduz a eficácia do cetoconazol?',
        options: [
          'Porque acelera sua eliminação renal',
          'Porque o cetoconazol precisa de acidez gástrica para ser absorvido',
          'Porque se liga ao fármaco no sangue',
          'Porque bloqueia receptores do fungo',
        ],
        answer: 1,
        why: 'A redução da acidez gástrica diminui drasticamente a dissolução e a absorção dos antifúngicos azólicos.',
      },
    ],
  },
  {
    id: 'varfarina-aines',
    name: 'Varfarina + AINEs',
    subtitle: 'Sinal Vermelho — Ibuprofeno, Diclofenaco, Nimesulida',
    tags: ['varfarina', 'ibuprofeno', 'diclofenaco', 'nimesulida', 'sangramento'],
    severity: 'GRAVE',
    summary: 'Combinação de inibição plaquetária, agressão gástrica e anticoagulação: risco elevado de hemorragia.',
    sections: [
      {
        title: 'Perigo duplo',
        body: 'Os AINEs inibem a agregação das plaquetas e agridem a mucosa gástrica, enquanto a varfarina inibe os fatores de coagulação — somando-se em um risco hemorrágico importante.',
        tone: 'danger',
      },
      {
        title: 'Sinais de emergência médica',
        body: 'Hematomas espontâneos, sangue na urina, fezes escuras/alcatroadas e sangramentos nasais prolongados — procurar atendimento imediatamente.',
        tone: 'danger',
      },
    ],
    avoid: [
      'Não use anti-inflamatórios por conta própria em uso de varfarina.',
      'Prefira analgésicos alternativos indicados pelo médico.',
      'Procure atendimento diante de qualquer sinal de sangramento.',
    ],
    quiz: [
      {
        q: 'Qual sinal exige atendimento médico imediato nessa combinação?',
        options: [
          'Dor de cabeça leve',
          'Fezes escuras/alcatroadas e sangue na urina',
          'Coceira nos pés',
          'Boca seca',
        ],
        answer: 1,
        why: 'Fezes alcatroadas e hematúria indicam sangramento ativo, uma emergência em pacientes anticoagulados.',
      },
    ],
  },
];
