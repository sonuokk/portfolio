// Add project images in public/images/projects/ and set image to a root-relative path.
// Keep repository and demo URLs tied to verified project links.
export const projects = [
  {
    number: '01', name: 'CineSaga', type: 'Cinema ticketing platform',
    description: 'A full-stack booking system with React and Spring Boot microservices, secure sign-in, service discovery, API gateway routing, distributed tracing, and real-time ticket updates.',
    stack: ['React', 'Spring Boot', 'Microservices', 'JWT', 'WebSockets'], tone: 'sage', mark: 'CS', image: '', imageAlt: 'CineSaga cinema ticketing platform',
    repo: 'https://github.com/sonuokk/CineVisionMicroserviceProject', demo: 'https://cinesagashows-22fox71hn-doffeii.vercel.app/',
  },
  {
    number: '02', name: 'IntelliCat', type: 'Intelligent catalog & library management',
    description: 'A MERN library catalog project with inventory synchronization and automated fine calculation, designed with a responsive and accessible interface.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'], tone: 'lavender', mark: 'IC', image: '', imageAlt: 'IntelliCat library management system',
    repo: 'https://github.com/sonuokk/IntelliCat',
  },
  {
    number: '03', name: 'LeadDesk', type: 'Lead capture & management',
    description: 'A lead management app with account sign-in, lead capture, personal lead history, and an admin dashboard for searching and updating lead statuses.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Authentication'], tone: 'peach', mark: 'LD', image: '', imageAlt: 'LeadDesk lead management application',
    repo: 'https://github.com/sonuokk/leaddesk', demo: 'https://leaddesk-7qqt.onrender.com/',
  },
  {
    number: '04', name: 'ResearchON', type: 'Open-access research publishing',
    description: 'A research publishing platform for sharing scientific work, rating research methodologies, and storing and retrieving research documents.',
    stack: ['React', 'Express', 'Node.js', 'REST APIs'], tone: 'blue', mark: 'RO', image: '', imageAlt: 'ResearchON academic publishing platform',
    repo: 'https://github.com/sonuokk/ResearchON',
  },
  {
    number: '05', name: 'ePapers', type: 'Previous-year paper sharing',
    description: 'A student resource portal for sharing exam preparation papers, with attention to efficient asset delivery and caching.',
    stack: ['Node.js', 'Express', 'JavaScript', 'HTML', 'CSS'], tone: 'sage', mark: 'eP', image: '', imageAlt: 'ePapers exam resource sharing platform',
    repo: 'https://github.com/sonuokk/ePapers', demo: 'https://e-papers-dfqibpzhh-sonuokks-projects.vercel.app/',
  },
  {
    number: '06', name: 'Tic-Tac-Toe', type: 'Browser game',
    description: 'A lightweight two-player Tic-Tac-Toe game that runs in the browser, built with vanilla JavaScript, HTML, and CSS.',
    stack: ['JavaScript', 'HTML', 'CSS'], tone: 'lavender', mark: 'XO', image: '', imageAlt: 'Tic-Tac-Toe browser game',
    repo: 'https://github.com/sonuokk/tictactoe', demo: 'https://tictactoe-nine-teal.vercel.app',
  },
  {
    number: '07', name: 'Stone Paper Scissors', type: 'Browser game',
    description: 'A simple browser-based Stone Paper Scissors game with its interface and game logic built using HTML, CSS, and JavaScript.',
    stack: ['JavaScript', 'HTML', 'CSS'], tone: 'peach', mark: 'SPS', image: '', imageAlt: 'Stone Paper Scissors browser game',
    repo: 'https://github.com/sonuokk/stonepaper', demo: 'https://stonepaper-eight.vercel.app',
  },
];
