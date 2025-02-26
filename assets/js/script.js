// Função para abrir o link do WhatsApp
document.querySelectorAll(".whatsappBtn").forEach(button => {
    button.addEventListener("click", function() {
      window.open("https://wa.me/393516886254", "_blank");
    });
  });
  
  // Traduções
  const translations = {
    en: {
      greeting: "Hello,",
      name: "I'm Mariana Bahls",
      intro: "I'm a web developer with a design background.",
      about: "Hey there! I'm Mariana, a Web Developer with a strong passion for web design and digital creativity. My background in design helps me craft visually appealing and user-friendly experiences. Currently, I'm sharpening my skills in HTML, CSS, JavaScript, and UI/UX—always experimenting and learning new things. I believe that a good website is not just functional, but also a joy to explore! If you're looking for someone to bring fresh ideas and creative energy to your project, let's chat!",
      portfolioTitle1: "HBO Max Page Clone",
      portfolioTitle2: "CSS Track Landing Page",
      portfolioTitle3: "Discord Page Clone",
      portfolioTitle4: "Personal Portfolio",
      portfolioDesc1:"Recreation of the HBO Max page as part of the CSS track at DIO. Following the instructor's guidance, I developed the structure and styling, applying modern layout and responsiveness techniques.",
      portfolioDesc2:"Project developed during the CSS track at DIO, recreating a landing page for the course itself. I worked on structuring the HTML and designing the page using Flexbox, Grid, and other styling techniques.",
      portfolioDesc3:"A replica of the Discord page, focusing on practicing CSS styling. The project followed the instructor’s directions, with minor design tweaks to explore different visual approaches.",
      portfolioDesc4:"A clean and modern portfolio showcasing my projects and front-end development skills. Designed with a focus on simplicity and usability, it highlights my work and experience.",
      contactTitle: "Let's Talk about your project!",
      contactBtn: "Say Hi",
      whatsappBtn: "Let's Talk",
    },
    it: {
      greeting: "Ciao",
      name: "Mi chiamo Mariana",
      intro: "Sono una sviluppatrice web appassionata",
      about: "Ciao! Sono Mariana, una sviluppatrice web con una grande passione per il design dei siti e la creatività digitale. Il mio background in design mi aiuta a creare esperienze visive attraenti e facili da usare. Attualmente sto affinando le mie competenze in HTML, CSS, JavaScript e UI/UX—sempre sperimentando e imparando cose nuove. Credo che un buon sito web non sia solo funzionale, ma anche un piacere da esplorare! Se stai cercando qualcuno per portare idee fresche ed energia creativa al tuo progetto, parliamone!",
      portfolioTitle1: "Clone della Pagina di HBO Max",
      portfolioTitle2: "Landing Page del Percorso CSS",
      portfolioTitle3: "Clone della Pagina di Discord",
      portfolioTitle4: "Portfolio Personale",
      portfolioDesc1:"Ricreazione della pagina di HBO Max come parte del percorso CSS su DIO. Seguendo le indicazioni dell'istruttore, ho sviluppato la struttura e lo stile, applicando tecniche moderne di layout e responsive design.",
      portfolioDesc2:"Progetto sviluppato durante il percorso CSS su DIO, ricreando una landing page per il corso. Ho lavorato sulla struttura dell'HTML e sul design utilizzando Flexbox, Grid e altre tecniche di stilizzazione.",
      portfolioDesc3:"Replica della pagina di Discord, con l'obiettivo di praticare la stilizzazione in CSS. Il progetto ha seguito le istruzioni dell'istruttore, con alcune piccole modifiche al design per esplorare diverse soluzioni visive.",
      portfolioDesc4:"Un portfolio pulito e moderno che presenta i miei progetti e le mie competenze nello sviluppo front-end. Progettato con un focus sulla semplicità e usabilità, mette in evidenza il mio lavoro e la mia esperienza.",
      contactTitle: "Parliamo sul tuo progetto!",
      contactBtn: "Dì Ciao",
      whatsappBtn: "Parliamo",
    },
    pt: {
      greeting: "Olá",
      name: "Meu nome é Mariana",
      intro: "Sou desenvolvedora web com um background em design.",
      about: "Oi! Sou Mariana, uma desenvolvedora web com uma grande paixão por design de sites e criatividade digital. Meu background em design me ajuda a criar experiências visuais atraentes e fáceis de usar. Atualmente, estou aprimorando minhas habilidades em HTML, CSS, JavaScript e UI/UX—sempre experimentando e aprendendo coisas novas. Acredito que um bom site não é só funcional, mas também um prazer de explorar! Se você está procurando alguém para trazer ideias frescas e energia criativa ao seu projeto, vamos conversar!",
      portfolioTitle1: "Clone da Página da HBO Max",
      portfolioTitle2: "Landing Page da Trilha de CSS",
      portfolioTitle3: "Clone da Página do Discord",
      portfolioTitle4: "Portfólio Pessoal",
      portfolioDesc1:"Recriação da página da HBO Max como parte da trilha de CSS da DIO. Seguindo as instruções do instrutor, desenvolvi a estrutura e estilização, aplicando conceitos modernos de layout e responsividade.",
      portfolioDesc2:"Projeto desenvolvido durante a trilha de CSS da DIO, recriando uma landing page para a própria trilha. Trabalhei na estruturação do HTML e no design utilizando Flexbox, Grid e outras técnicas para aprimorar a estilização.",
      portfolioDesc3:"Construção de uma versão inspirada na página do Discord, focada na prática de estilização com CSS. O projeto seguiu as direções do instrutor, com pequenas alterações no design para explorar diferentes abordagens visuais.",
      portfolioDesc4:"Um portfólio limpo e moderno que apresenta meus projetos e habilidades em desenvolvimento front-end. Projetado com foco na simplicidade e usabilidade, destaca meu trabalho e experiência.",
      contactTitle: "Vamos conversar sobre seu projeto!",
      contactBtn: "Diga Olá",
      whatsappBtn: "Fale comigo",
    },
  };
  
  // Função para mudar o idioma
  function changeLanguage(language) {
    // Atualiza o conteúdo do site de acordo com o idioma selecionado
    document.getElementById('title-greeting').textContent = translations[language].greeting;
    document.getElementById('name').textContent = translations[language].name;
    document.getElementById('intro').textContent = translations[language].intro;
    document.getElementById('about-text').textContent = translations[language].about;
    document.getElementById('portfolio-title_1').textContent = translations[language].portfolioTitle1;
    document.getElementById('portfolio-title_2').textContent = translations[language].portfolioTitle2;
    document.getElementById('portfolio-title_3').textContent = translations[language].portfolioTitle3;
    document.getElementById('portfolio-title_4').textContent = translations[language].portfolioTitle4;
    document.getElementById('portfolio-desc_1').textContent = translations[language].portfolioDesc1;
    document.getElementById('portfolio-desc_2').textContent = translations[language].portfolioDesc2;
    document.getElementById('portfolio-desc_3').textContent = translations[language].portfolioDesc3;
    document.getElementById('portfolio-desc_4').textContent = translations[language].portfolioDesc4;
    document.getElementById('contact-title').textContent = translations[language].contactTitle;
    document.getElementById('contact-btn').textContent = translations[language].contactBtn;
    document.getElementById('whatsapp-btn').textContent = translations[language].whatsappBtn;
  
    // Rolar para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Event listeners para os botões de idioma
  document.getElementById('button--eng').addEventListener('click', () => {
    // Ao clicar no botão de inglês, definimos o idioma como o padrão (inglês)
    changeLanguage('en');
  });
  
  document.getElementById('button--it').addEventListener('click', () => {
    changeLanguage('it');
  });
  
  document.getElementById('button--pt').addEventListener('click', () => {
    changeLanguage('pt');
  });
