/* ============================================================
   CEA Arco-Íris · Arquivo comum do site e do painel (admin)
   - Configuração do Firebase (projeto próprio do site, separado do sistema)
   - Conteúdo padrão: usado até existir conteúdo salvo no painel
   ============================================================ */
window.CEA = (function () {

  /* Configuração do projeto Firebase do site (cea-matricula-site),
     separado do sistema */
  const firebaseConfig = {
    apiKey: "AIzaSyAftWajEwhZiM1QDx6kOdeveM5FaOCpxFE",
    authDomain: "cea-matricula-site.firebaseapp.com",
    projectId: "cea-matricula-site",
    storageBucket: "cea-matricula-site.firebasestorage.app",
    messagingSenderId: "895613748769",
    appId: "1:895613748769:web:4af99b7f164ab1b6b54560",
    measurementId: "G-5D30QDY9JB"
  };

  /* Coleções no Firestore (separadas das do sistema) */
  const COL = {
    conteudo: "site-publico",      // doc "conteudo": textos, contatos, links, cores
    fotos: "site-fotos",           // miniaturas + legenda + ordem
    fotosFull: "site-fotos-full",  // foto em tamanho grande (aberta ao clicar)
    logos: "site-logos",           // logos dos parceiros (rodapé)
    editores: "site-editores"      // 1 doc por e-mail autorizado a editar (criado no console)
  };

  const padrao = {
    escola: {
      nome: "Creche Escola Arco-Íris",
      nomeCurto: "Arco-Íris",
      fundacao: 2001,
      slogan: "Cuidando e educando com amor",
      logo: "" // vazio = usa logo.png
    },
    contato: {
      whatsapp: "5571991629960",
      whatsappExibicao: "(71) 99162-9960",
      mensagemWhatsapp: "Olá! Vi o site da Creche Escola Arco-Íris e gostaria de agendar uma visita.",
      telefone: "(71) 3014-6482",
      telefoneWhats: false,
      endereco: "Rua Quaresmeiras Vermelhas, 204",
      bairroCidade: "Jardim das Margaridas, Salvador, BA",
      instagram: "crechescolarcoiris",
      horario: ""
    },
    links: {
      matricula: "",
      classapp: "https://www.classapp.com.br/",
      isaac: "https://isaac.com.br/"
    },
    hero: {
      titulo: "Cuidando e educando com amor.",
      texto: "Do berçário, a partir dos 4 meses, ao 5º ano do Ensino Fundamental. Uma escola com jeito de família, que conhece cada criança pelo nome.",
      visual: "arcoiris",   // arcoiris | sol | imagem | video | nenhuma
      video: "",            // videos/inicio.mp4  ou link do YouTube
      imagem: "",
      imagemAlt: "",
      faixa: ["Manhã", "Tarde", "Integral", "Bilíngue CCAA", "Robótica"]
    },
    etapas: {
      titulo: "Uma escola para cada fase da infância",
      intro: "Seu filho pode começar com a gente ainda bebê e seguir até o fim do Fundamental I, com a mesma equipe por perto e o cuidado ajustado a cada idade.",
      itens: [
        { selo: "a partir de 4 meses", titulo: "Berçário", texto: "Rotina de cuidado com alimentação, sono e higiene acompanhados de perto, e muito colo nos primeiros passos longe de casa." },
        { selo: "Creche", titulo: "Maternal", texto: "Linguagem, movimento e convivência. A criança ganha autonomia brincando com outras crianças." },
        { selo: "Educação Infantil", titulo: "Pré-escola", texto: "O aprender brincando ganha forma: primeiras letras, números, artes e o início do inglês e da robótica." },
        { selo: "1º ao 5º ano", titulo: "Fundamental I", texto: "Alfabetização sólida e acompanhamento individual, com material didático e avaliações alinhados à BNCC." }
      ]
    },
    parceiros: {
      titulo: "Parceiros que fazem diferença no dia a dia",
      intro: "Escolhemos cada parceria pensando no que ela muda para o seu filho e para a sua rotina.",
      itens: [
        { nome: "Programa bilíngue CCAA", titulo: "Inglês desde pequenos", texto: "O inglês faz parte da rotina da escola, com a metodologia do CCAA, para que a criança aprenda o idioma de forma natural, como aprende tudo nessa idade.", destaque: true },
        { nome: "Nave à Vela", titulo: "Robótica e tecnologia", texto: "Projetos mão na massa de robótica e programação que desenvolvem raciocínio lógico, criatividade e trabalho em equipe.", destaque: true },
        { nome: "Editora Construir", titulo: "Material didático", texto: "Livros que guiam o planejamento de cada etapa e ajudam a família a acompanhar o que está sendo aprendido.", destaque: false },
        { nome: "ClassApp", titulo: "Agenda digital", texto: "Recados, fotos, comunicados e autorizações direto no celular. Você sabe como foi o dia sem precisar procurar bilhete na mochila.", destaque: false },
        { nome: "Isaac", titulo: "Mensalidades sem complicação", texto: "Boleto, Pix e cartão em um só lugar, com lembretes de vencimento e atendimento para as famílias.", destaque: false }
      ]
    },
    extras: {
      titulo: "Aulas extraclasse",
      intro: "Atividades opcionais para seu filho se movimentar, criar e descobrir novos talentos.",
      itens: []   // { icone, titulo, publico, horario, texto }
    },
    historia: {
      titulo: "Tudo começou com uma placa na porta",
      placa: "CUIDA-SE DE CRIANÇAS",
      placaLegenda: "Jardim das Margaridas, 2001",
      itens: [
        { marca: "2001", titulo: "Uma mãe precisava trabalhar", texto: "Gildete Ferreira dos Santos começou ajudando uma mãe do bairro que não tinha com quem deixar a filha. Logo percebeu que muitas famílias passavam pelo mesmo, e o bairro não tinha creche." },
        { marca: "Depois", titulo: "A creche virou escola", texto: "As crianças cresceram e chegou a hora de aprender. Gildete trouxe professoras de educação infantil para que ninguém precisasse sair quando chegasse a idade escolar." },
        { marca: "Hoje", titulo: "Do berçário ao 5º ano", texto: "A escola cresceu, ganhou parceiros como CCAA e Nave à Vela, mas manteve o cuidado familiar e o mesmo lema de sempre." }
      ],
      missaoTitulo: "Nossa missão",
      missao: "Oferecer a cada criança uma educação de qualidade, humana e próxima da sua realidade, para que ela construa o próprio conhecimento e cresça com qualidade de vida."
    },
    logos: {
      titulo: "Nossos parceiros"
    },
    galeria: {
      titulo: "Momentos na escola",
      intro: "Um pouco do nosso dia a dia: projetos, festas e muita brincadeira."
    },
    familias: {
      titulo: "Para as famílias",
      intro: "Matrícula, comunicação e pagamentos, tudo pelo celular."
    },
    contatoSecao: {
      titulo: "Venha conhecer a escola",
      intro: "Agende uma visita para conhecer as salas, a equipe e tirar suas dúvidas sobre vagas e valores."
    },
    aviso: {
      ativo: false,
      texto: "Matrículas abertas para o próximo ano letivo!",
      link: "",
      botao: "Garanta a vaga",
      posicao: "destaque"   // destaque | topo | ambos
    },
    secoes: {
      etapas: true, parceiros: true, historia: true, galeria: true, familias: true, instagram: true, contato: true, logos: true, extras: true
    },
    cores: {
      verde: "#0E6B30",
      sol: "#F6B70E"
    }
  };

  /* Mescla o conteúdo salvo por cima do padrão (listas são substituídas inteiras) */
  function mesclar(base, salvo) {
    if (Array.isArray(base)) return Array.isArray(salvo) ? salvo : base;
    if (base && typeof base === "object") {
      const out = {};
      const chaves = new Set([...Object.keys(base), ...Object.keys(salvo || {})]);
      chaves.forEach(k => {
        out[k] = (salvo && k in salvo) ? mesclar(base[k], salvo[k]) : base[k];
      });
      return out;
    }
    return (salvo === undefined || salvo === null) ? base : salvo;
  }

  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function linkWhats(c) {
    return "https://wa.me/" + String(c.contato.whatsapp || "").replace(/\D/g, "") +
      "?text=" + encodeURIComponent(c.contato.mensagemWhatsapp || "");
  }

  function iniciarFirebase() {
    if (!window.firebase || firebaseConfig.apiKey === "COLE_AQUI") return null;
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    return firebase.firestore();
  }

  return { firebaseConfig, COL, padrao, mesclar, esc, linkWhats, iniciarFirebase };
})();
