/* Edit content here. Unconfirmed dates, outcomes, links and statuses stay null.
   Screenshots are evidence of interface design, not validated product outcomes. */
window.PORTFOLIO = {
  identity: {
    name: 'Evelyn',
    title: 'Psychology undergraduate',
    university: 'International Medical University',
    graduation: 'Expected 2028',
    introduction: 'Exploring the intersection of human behaviour, analytical thinking and technology through research, data projects and independent software development.',
    email: null, linkedin: null, github: null
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
      id: 'jobstreet', number: '02', title: 'JobStreet Recruitment Readiness', shortTitle: 'JobStreet Analysis', category: 'analytics',
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
  experiences: [
    { id: 'coding-tutor', title: 'Coding Tutor', description: 'Teaching and technical communication.', pending: ['Employer, official title and employment type', 'Employment dates and subjects taught', 'Teaching responsibilities and documented contributions'] },
    { id: 'behavioral-therapist', title: 'Behavioral Therapist', description: 'Applied psychology and structured intervention.', pending: ['Employer, official title and employment dates', 'Non-confidential responsibilities and supervision context', 'Appropriate evidence of personal contributions'] },
    { id: 'sales-assistant', title: 'Nirvana Sales Personal Assistant', description: 'Sales support, coordination and administration.', pending: ['Official job title, organization and employment dates', 'Specific support and coordination responsibilities', 'Verified contributions and relevant deliverables'] }
  ],
  achievements: [
    { id: 'basketball', category: 'sports', title: 'Basketball · 3v3 medal', type: 'Sports', summary: 'Team participation and leadership experience.', details: 'The brief identifies a 3v3 medal and leadership responsibilities. Competition name, year, medal placement and the distinction between player, team leader and assistant coach need confirmation.' },
    { id: 'chariofare', category: 'events', title: 'Chariofare 2024', type: 'Events & leadership', summary: 'Committee and event coordination experience.', details: 'An event involvement entry. Committee role, individual responsibilities and appropriate event evidence will be added after confirmation.' },
    { id: 'mental-health-week', category: 'events', title: 'Mental Health Week', type: 'Events & leadership', summary: 'A psychology-focused booth and communication experience.', details: 'The final entry will describe the booth objective, personal contribution and event materials once supplied.' },
    { id: 'hackathon', category: 'competitions', title: 'Hackathon · second runner-up', type: 'Hackathons & pitching', summary: 'A team competition result identified in the portfolio brief.', details: 'The official competition, organizer, date, team role and award evidence need confirmation before publication.' }
  ]
};
