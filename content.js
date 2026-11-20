/* Edit content here. Unconfirmed dates, outcomes, links and statuses stay null.
   Screenshots are evidence of interface design, not validated product outcomes. */
window.PORTFOLIO = {
  identity: {
    name: 'Evelyn',
    title: 'Psychology undergraduate',
    university: 'International Medical University',
    graduation: 'Expected 2028',
    introduction: 'Exploring the intersection of human behaviour, analytical thinking and technology through research, data projects and independent software development.',
    email: 'w.h.shan03@gmail.com', phone: '0103317628', phoneLink: '+60103317628', linkedin: null, github: null
  },
  categories: [
    { id: 'analytics', title: 'Data Analytics', note: 'Turning questions into clearer decisions.', number: '01' },
    { id: 'software', title: 'Software & Applications', note: 'Building tools around everyday needs.', number: '02' },
    { id: 'research', title: 'Research', note: 'Understanding people through structured enquiry.', number: '03' }
  ],
  sections: [
    { id: 'overview', title: 'Overview' },
    { id: 'process', title: 'Approach & process' },
    { id: 'evidence', title: 'Evidence & output' },
    { id: 'reflection', title: 'Reflection' }
  ],
  projects: [
    {
      id: 'ikea', number: '01', title: 'IKEA Sales Dashboard', shortTitle: 'IKEA Dashboard', category: 'analytics',
      type: 'Data analytics', label: 'Business intelligence', tools: ['Power BI', 'DAX', 'Data visualisation'],
      summary: 'A sales dashboard project centred on business questions and analytical decision-making.',
      description: 'An independent analytics case study using Power BI to explore sales information. The final case study will connect business questions, data preparation and dashboard design to verified insights.',
      role: null, date: null, status: null, links: [], media: [],
      approach: ['Define the business questions', 'Document and prepare the dataset', 'Develop measures and dashboard views', 'Validate insights and implications'],
      pending: ['Dataset source, size and time period', 'Data cleaning steps and DAX measures', 'Original dashboard screenshots', 'Three validated findings and their business implications'],
      reflection: 'The published case study should distinguish observations from recommendations and explain the dataset’s limitations. Findings and performance metrics have not been supplied yet.'
    },
    {
      id: 'jobstreet', number: '02', title: 'Job Search Product Readiness Analyst', shortTitle: 'Job Search Product Readiness Analyst', category: 'analytics',
      type: 'Data analytics', label: 'Workforce & recruitment', tools: ['Power BI', 'Data analysis', 'Dashboard design'],
      summary: 'Exploring recruitment readiness through a structured analytical lens.',
      description: 'A recruitment-focused analytics project. Its case study will explain the specific readiness question, the variables used and how the dashboard supports interpretation.',
      role: null, date: null, status: null, links: [], media: [],
      approach: ['Clarify the recruitment question', 'Document the source and variables', 'Design the analytical views', 'Validate findings and decision implications'],
      pending: ['Dataset provenance and sharing permissions', 'Definition of recruitment or product readiness', 'Dashboard screenshots and analytical methods', 'Validated findings and limitations'],
      reflection: 'The meaning of readiness and the dataset provenance need to be explicit before conclusions can be presented. The project name does not imply an affiliation with JobStreet.'
    },
    {
      id: 'personal-secretary', number: '03', title: 'Personal Secretary', shortTitle: 'Personal Secretary', category: 'software',
      type: 'Software development', label: 'An everyday planning companion', tools: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
      summary: 'An independently developed application for organising tasks, calendars and personal planning.',
      description: 'A mobile application exploring how task management and calendar planning can work together. The portfolio will document the product decisions, interface, implementation and current development scope.',
      role: 'Independent application development. A breakdown of personal contributions and AI-assisted implementation will be added to the final case study.',
      date: null, status: null, links: [],
      media: [{ src: 'assets/personal-secretary-review.png', alt: 'Personal Secretary Review screen with week and month controls, a November 2026 overview and a weekly progress chart.', caption: 'Review interface · development screenshot. The displayed values are interface data, not measured outcomes.' }],
      approach: ['Define task and calendar requirements', 'Design the planning interactions', 'Implement and connect application features', 'Test behaviour and refine the interface'],
      pending: ['Confirmed release status and implemented feature list', 'Technical architecture and integration scope', 'Development challenges and testing evidence', 'Public demo or source repository, if available'],
      reflection: 'A useful case study will show why key interface and technical decisions were made, which features work today, and which remain planned. No AI capability is claimed in this draft.'
    },
    {
      id: 'ai-sycophancy', number: '04', title: 'AI Sycophancy Recognition', shortTitle: 'AI Sycophancy', category: 'research',
      type: 'Psychology research', label: 'Human–AI interaction', tools: ['Qualitative research', 'Interviews', 'Thematic analysis'],
      summary: 'A research topic investigating how people recognise agreeable behaviour in AI interactions.',
      description: 'A psychology research case study focused on AI sycophancy recognition. The final page will describe the research objectives, study design and approved materials, with empirical results included only when available.',
      role: null, date: null, status: null, links: [], media: [],
      approach: ['Define the research objectives', 'Establish the study design and ethics requirements', 'Document the interview approach', 'Report analysis only after it has been conducted'],
      pending: ['Ethics approval and current study stage', 'Participant criteria and interview protocol', 'Whether data collection and analysis have begun', 'Materials approved for public sharing'],
      reflection: 'Planned methods and anticipated contributions must remain separate from empirical findings. No participant data, themes or study results are presented in this preview.'
    }
  ],
  education: [
  {
    "id": "psychology-degree",
    "title": "Bachelor of Science (Hons) Psychology",
    "organization": "IMU",
    "period": "Sep 2025 - Sep 2028 (Expected)",
    "sortDate": "2025-09",
    "description": "CGPA: 3.94/4.0",
    "details": [
      "Pursuing a Bachelor of Science (Hons) Psychology at IMU.",
      "Expected completion: September 2028.",
      "CGPA: 3.94/4.0."
    ],
    "current": true
  },
  {
    "id": "foundation-science",
    "title": "Foundation in Science",
    "organization": "IMU",
    "period": "Jul 2024 - Jul 2025",
    "sortDate": "2024-07",
    "description": "CGPA: 3.96/4.0",
    "details": [
      "Completed the Foundation in Science programme at IMU.",
      "CGPA: 3.96/4.0."
    ]
  },
  {
    "id": "secondary-school",
    "title": "SMK Pusat Bandar Puchong (1)",
    "organization": "Secondary education",
    "period": "2019 - 2023",
    "sortDate": "2019",
    "description": "Sub science stream | SPM: 6A+ 2A 2A-",
    "details": [
      "Sub science stream.",
      "SPM: 6A+ 2A 2A-."
    ]
  }
],
  experiences: [
  {
    "id": "coding-tutor",
    "title": "Python Syllabus Editor & Part-time Kids Web Dev Tutor",
    "organization": "Code Ranger",
    "period": "Oct 2024 - Present",
    "sortDate": "2024-10",
    "current": true,
    "description": "Curriculum development and web development teaching.",
    "details": [
      "Developed a structured Python syllabus framework to support progressive learning.",
      "Researched and contributed to the design of Python learning materials.",
      "Delivered basic web development lessons to children and communicated learning progress with parents."
    ]
  },
  {
    "id": "behavioral-therapist",
    "title": "Behavioral Therapist",
    "organization": "Spectrum of Possibilities",
    "period": "Jul 2025 - Sep 2025",
    "sortDate": "2025-07",
    "description": "Individualized behavioral intervention and progress monitoring.",
    "details": [
      "Prepared and delivered interactive activities aligned with individualized behavioral intervention plans.",
      "Documented client responses and session data in Excel to support progress monitoring.",
      "Reviewed client progress with therapists to maintain consistency in intervention delivery."
    ]
  },
  {
    "id": "sales-assistant",
    "title": "Personal Assistant",
    "organization": "Nirvana",
    "period": "Jun 2023 - Jul 2023",
    "sortDate": "2023-06",
    "description": "Operational coordination, record keeping and client support.",
    "details": [
      "Coordinated operational arrangements for ceremonial services, supporting scheduled activities and attendee needs.",
      "Compiled receipts and financial records for accounting, audit and tax documentation.",
      "Assisted with client-facing promotional activities during residential visits."
    ]
  }
],
  achievements: [
    { id: 'basketball', category: 'sports', title: 'IMU Cup Basketball 3v3', type: 'Sports', year: '2026', award: 'Champions', role: 'Team Leader', summary: 'IMU Cup Basketball 3v3 — 2026 Champions.', details: 'Led the team, coached teammates during training, and coordinated player line-ups and substitutions during games.' },
      { id: 'chariofare', category: 'events', title: 'IMU Chariofare 2024', type: 'Leadership & Events', role: 'Performance & Activities Committee · Performer', summary: 'Coordinated activity flow and helped select emcees and performers through auditions. Supported participants and helped resolve an unexpected issue with recording marathon winners.', responsibilities: 'Served on the Performance & Activities Committee and participated as a performer. Helped ensure activities ran according to schedule and selected emcees and performers through auditions.', challenge: 'When some marathon winners’ details were not recorded, I stepped in to reassure participants and manage enquiries while the team worked to identify the winners. I also helped locate them through alternative approaches, including public announcements. The issue was resolved, allowing the proceedings to continue smoothly.' },
    { id: 'mental-health-week', category: 'events', title: 'Mental Health Week 2026', type: 'Leadership & Events', role: 'Awareness Booth', topic: 'Social stigma & gender assumptions about depression', summary: 'Helped raise awareness of depression symptoms through a booth exploring social stigma, gender assumptions, and internalizing and externalizing expressions of distress. Worked with teammates to plan interactive games for participants and design the booth decorations.' },
    { id: 'hackathon', category: 'competitions', title: 'Hackathon · second runner-up', type: 'Hackathons & pitching', summary: 'A team competition result identified in the portfolio brief.', details: 'The official competition, organizer, date, team role and award evidence need confirmation before publication.' }
  ]
};

// IKEA case-study content supplied for this portfolio.
Object.assign(window.PORTFOLIO.projects.find(project => project.id === "ikea"), {
  "reportUrl": "https://app.powerbi.com/view?r=eyJrIjoiZjFhYWVjYTAtZjUyYi00NGY0LTlmMmItNzU5MGE2YTU0MjQyIiwidCI6ImNmYWMwNWYyLWNlNjMtNDFiMC04NDM1LWFlNDA2NWZhNmNiZSIsImMiOjEwfQ%3D%3D",
  "summary": "Exploring discounts, shipping and product returns.",
  "insights": [
    {
      "title": "Discounts & profitability",
      "finding": "Higher discounts are not consistently associated with higher profit margins.",
      "action": "Consider category demand and country-level sales when reviewing discount policies."
    },
    {
      "title": "Same Day shipping",
      "finding": "The analysis identifies Same Day as the most-used shipping option despite higher associated tax costs.",
      "action": "Test pricing for premium shipping tiers and investigate whether customers prioritise speed over cost."
    },
    {
      "title": "Kitchen returns · ~25%",
      "finding": "Kitchen shows the highest reported return rate, with returns concentrated in Canada and Spain.",
      "action": "Investigate handling, logistics, product quality, regional demand mismatch and customer expectations to identify the causes."
    },
    {
      "title": "Furniture returns · $648k",
      "finding": "Furniture generates the highest returned sales, alongside lower average ratings and higher discount levels.",
      "action": "Review discount policies, product quality and customer satisfaction to reduce returns and improve profitability."
    }
  ]
});

Object.assign(window.PORTFOLIO.projects.find(p => p.id === 'jobstreet'), {
 title: 'Recruitment Product Performance & Market Readiness Analysis',
 shortTitle: 'Recruitment Product Performance & Market Readiness Analysis',
 summary: 'Evaluating product adoption, account engagement, retention, and credit consumption to identify product risks and opportunities for improvement.',
 caseType: 'recruitment',
 tools: ['Digital Analytics', 'Product Analytics', 'Business Strategy'],
 media: [{src:'assets/recruitment/usage.svg',alt:'Product usage rises from 438 records in November 2014 to 638 in January 2015. CV access leads connection preferences.'}]
});

window.PORTFOLIO.projects.push({
 id:'mindwave', category:'software', title:'MindWave', shortTitle:'MindWave', type:'UI/UX design', caseType:'mindwave',
 summary:'MindWave is a mental-wellbeing application concept developed for the IMU Digital Pitch Hackathon 2024.',
 description:'The project aims to connect individuals experiencing mental fatigue by encouraging mindfulness practices and opportunities to engage with others who share similar experiences. Through these activities, MindWave seeks to support users in navigating everyday challenges with a more positive outlook.',
 tools:['Figma'], date:'2024',
 prototypeUrl:'https://embed.figma.com/proto/HajQ0ER3gH9XHcQZt1XcAg/mind-wave?node-id=0-1&t=6naKkD60LsgDsBPB-1&embed-host=share',
 prototypeLink:'https://www.figma.com/proto/HajQ0ER3gH9XHcQZt1XcAg/mind-wave?node-id=0-1&t=6naKkD60LsgDsBPB-1',
 media:[{src:'assets/mindwave-cover.svg',alt:'Abstract orange and lavender waves for the MindWave UI/UX project.'}]
});

Object.assign(window.PORTFOLIO.projects.find(p=>p.id==='personal-secretary'),{
 caseType:'personal-secretary',year:'2026',status:'Testing phase',platform:'Android',projectType:'Independent',
 summary:'A mobile productivity application designed to integrate scheduling, task management, and personal organization into a unified workspace.',
 description:'Personal Secretary is an independently developed mobile application designed to consolidate scheduling, task management, and personal organization into a single interface.',
 media:[['welcome','Welcome'],['calendar','Calendar'],['monthly','Monthly view'],['review','Review'],['ai','AI Secretary']].map(([file,label])=>({src:`assets/personal-secretary/${file}.jpg`,alt:`Personal Secretary ${label} screen`,label}))
});

window.PORTFOLIO.projects.push({
 id:'fraud-susceptibility',category:'research',caseType:'fraud',title:'Fraud Susceptibility Research',shortTitle:'Fraud Susceptibility Research',type:'Psychology research',
 summary:'Examining personality factors that may protect against fraud susceptibility following exposure.',
 role:'Research Assistant',tools:['Psychology research','Literature review','Manuscript editing'],
 media:[{src:'assets/fraud-research.svg',alt:'Abstract overlapping orange circles for Fraud Susceptibility Research.'}],
 contributions:[
 {title:'Review the literature',text:'Review the full literature review and update the evidence base to reflect current research.'},
 {title:'Revise the theoretical framework',text:'Replace the previous framework with the two-stage model of fraud detection and susceptibility.'},
 {title:'Strengthen theoretical grounding',text:'Improve alignment between the framework, research rationale and the focus on potential protective personality factors.'}
 ]
});

Object.assign(window.PORTFOLIO.projects.find(p=>p.id==='ai-sycophancy'),{
 caseType:'ai-research',
 title:'Exploring Users’ Experiences of Recognising Conversational AI Sycophancy: Changes in Perceptions and Subsequent AI Use',
 shortTitle:'AI Sycophancy',
 summary:'Exploring how recognising conversational AI sycophancy relates to users’ perceptions and subsequent AI use.',
 projectType:'Academic assignment',method:'Qualitative interviews',status:'Thematic analysis — coding',
 role:'Proposal review and editing; literature review; participant interview',
 contributions:[
 {title:'Proposal review & editing',text:'Reviewed and edited the entire research proposal to improve its overall flow and ensure that all sections were coherent and well integrated.'},
 {title:'Literature review',text:'Developed the literature review by synthesising recent studies. Identified a gap in the literature reviewed: studies relied primarily on online forum data, with limited use of in-person interviews that allow participants to elaborate on their experiences.'},
 {title:'Participant interview',text:'Conducted an approximately 20-minute semi-structured interview, using guiding questions while allowing the participant to expand on their answers and experiences.'}
 ]
});

window.PORTFOLIO.projects.find(p=>p.id==='ai-sycophancy').media=[{src:"assets/ai-sycophancy-cover.png",alt:"A person facing an agreeable AI with echoing speech bubbles, illustrating conversational AI sycophancy."}];

window.PORTFOLIO.projects.push({
 id:'loanshark',category:'software',caseType:'loanshark',title:'LoanShark',shortTitle:'LoanShark',type:'UI/UX design',date:'2024',event:'Finance PayHack',tools:['Figma'],media:[],
 summary:'A concept for PTPTN eligibility screening and repayment support.',
 description:'Designed for Finance PayHack 2024, LoanShark proposes using spending-behaviour data from e-wallets and bank accounts to support PTPTN eligibility screening.',
 benefits:'The concept aims to reduce manual review and improve identification of eligible applicants. Card-linked repayments and reminders are intended to encourage timely repayments and simplify administration.',
 prototypeUrl:'https://embed.figma.com/proto/pqAGx6jZt3fE62qDFQrmko/Loan-Shark?node-id=0-1&t=lkb5cCkzIsUrWEoc-1&embed-host=share',
 prototypeLink:'https://www.figma.com/proto/pqAGx6jZt3fE62qDFQrmko/Loan-Shark?node-id=0-1&t=lkb5cCkzIsUrWEoc-1'
});

window.PORTFOLIO.achievements.push({id:'puchong-57',category:'events',title:'Puchong 57 Basketball Club',role:'Team Leader & Assistant Coach',period:'2023–Present',summary:'Assist with coaching sessions for more than 10 female players. Support charity tournaments as needed, including ushering, coordinating prize-giving ceremonies, and serving as a table official.'});

window.PORTFOLIO.achievements.push({id:'pitch-perfect-2026',category:'competitions',title:'IMU Pitch Perfect 2026',award:'Participation',role:'Team Leader',project:'RADIUS Lab',summary:'Led the team and developed the business model, revenue structure, and competitor analysis for a seven-minute pitch. RADIUS Lab is an AI SaaS concept designed to bridge the gap between industry changes and curriculum review.',slides:'assets/slides/radius-lab-pitch-perfect-2026.pdf'});

window.PORTFOLIO.projects.push({
 id:'radius-lab',category:'software',caseType:'radius-lab',title:'RADIUS Lab',shortTitle:'RADIUS Lab',type:'AI SaaS concept · 2026',year:'2026',tools:[],
 summary:'An AI-powered Curriculum Intelligence SaaS concept designed to help higher-education institutions respond to changes in industry, professional practice, regulation, research, and technology.',
 role:'Team Leader',contribution:'Led the team and developed the business model, revenue structure, and competitor analysis for a seven-minute pitch.',
 media:[{src:'assets/images/radius-lab.jpg',alt:'RADIUS Lab team illustration'}],slides:'assets/slides/radius-lab-pitch-perfect-2026.pdf',
 learning:['Business models','Revenue models','Collaboration','Competitor analysis','Cost structures','Solution development'],
 mvp:[
 {function:'Workforce Intelligence',inputs:'Job postings, salaries, skills, qualifications and demand trends',output:'Identify in-demand skills and inform course objectives'},
 {function:'Professional & Future Intelligence',inputs:'Policies, professional standards, research and emerging technologies',output:'Identify emerging skills and practices to review curriculum relevance'},
 {function:'Curriculum Intelligence',inputs:'Current course syllabuses and external intelligence',output:'Assess curriculum–industry alignment and flag potential gaps'}
 ]
});

window.PORTFOLIO.projects.push({id:'indecision-workshop',category:'research',caseType:'workshop',title:'Indecision in Major Life Transitions',shortTitle:'Indecision Workshop',type:'Academic assignment · 75-minute workshop',tools:[],media:[{src:'assets/images/indecision-workshop.jpg',alt:'A person covering their face beneath arrows pointing in different directions, illustrating indecision'}],summary:'Supporting decision-making confidence and emotional regulation.',objectives:['Recognise factors contributing to choice overload and indecision during major life transitions.','Practise emotional-regulation strategies for uncertainty and fear around important decisions.','Apply structured decision-making techniques to make choices with greater confidence.'],activities:[{title:'Emotional awareness & regulation',points:['Help participants recognise physical responses and name the associated emotions.','Introduce strategies for managing uncertainty and fear around important decisions.']},{title:'Decision-making through bidding',points:['Engage participants in an interactive bidding activity.','Incorporate a rational decision-making model to practise evaluating options and making choices.']} ]});
window.PORTFOLIO.achievements.push(
{id:'ssa-2025',category:'sports',title:'SSA In-house Shooting Competition',year:'2025',award:'Champion - Talented category',summary:'Champion in the Talented category at the 2025 SSA In-house Shooting Competition.',image:'assets/images/ssa-shooting.png'},
{id:'sukipt-2026',category:'sports',title:'SUKIPT 7th 2026',year:'2026',award:'Participation',summary:'Honoured to represent IMU in the women’s 10m air pistol event. The competition gave me valuable experience and motivated me to train more consistently for future competitions.',image:'assets/images/sukipt-2026.jpg'});
