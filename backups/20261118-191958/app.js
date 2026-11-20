(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const app = document.querySelector('#app');
  const safe = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const icons = {
    folder: '<path d="M3 6h6l2 2h10v11H3z"/><path d="M3 6V4h6l2 2h8v2"/>',
    file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M9 12h6m-6 4h6"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    chart: '<path d="M4 3v17h17M8 16v-5m5 5V6m5 10V9"/>',
    code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-5 2 2-16"/>',
    research: '<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6M7 10h6m-3-3v6"/>',
    cap: '<path d="m2 8 10-5 10 5-10 5zM6 11v6c4 3 8 3 12 0v-6m4-3v9"/>',
    work: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12c6 4 12 4 18 0m-9 1v4"/>',
    flag: '<path d="M5 22V3m0 0c5-4 9 4 15 0v10c-6 4-10-4-15 0"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 5-5 4 4 4-6 5 7"/>',
    award: '<circle cx="12" cy="8" r="5"/><path d="m8 12-2 10 6-3 6 3-2-10"/>',
    person: '<circle cx="12" cy="7" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
    arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>'
  };
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.file}</svg>`;
  const readSetting = (key, fallback) => { try { return JSON.parse(sessionStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
  const saveSetting = (key, value) => { try { sessionStorage.setItem(key, JSON.stringify(value)); } catch { /* Navigation still works without storage. */ } };
  const projectPath = project => `/projects/${project.category}/${project.id}`;
  const categoryIcon = category => ({analytics:'chart',software:'code',research:'research'}[category] || 'folder');
  const tags = values => `<div class="tags">${values.map(value => `<span class="tag">${safe(value)}</span>`).join('')}</div>`;
  const list = values => `<ul class="pending-list">${values.map(value => `<li>${safe(value)}</li>`).join('')}</ul>`;
  const crumb = entries => `<nav class="breadcrumbs" aria-label="Breadcrumb">${entries.map((item,index) => `${index ? '<span aria-hidden="true">/</span>' : ''}${item.path ? `<a href="#${item.path}">${safe(item.label)}</a>` : `<span aria-current="page">${safe(item.label)}</span>`}`).join('')}</nav>`;
  const toolbar = entries => `<div class="content-toolbar"><button class="mobile-explorer" aria-controls="explorer" aria-expanded="false">${icon('folder')} Explore</button>${crumb(entries)}<span class="toolbar-right">PERSONAL PORTFOLIO</span></div>`;
  const draftStatus = project => `<span class="status-chip">${safe(project?.status || 'Case study draft')}</span>`;
  const pendingBox = (title, text) => `<div class="summary-note"><strong>${safe(title)}</strong>${safe(text)}</div>`;
  let activeRoute = '';
  let timelineScroll = readSetting('portfolio:timeline-scroll', {});

  function previewCard(project) {
    return `<a class="preview-card" href="#${projectPath(project)}"><div class="card-meta">${icon(categoryIcon(project.category))}<span>${safe(project.type.toUpperCase())}</span></div><span class="card-arrow" aria-hidden="true">↗</span><h3>${safe(project.title)}</h3><p>${safe(project.summary)}</p><div class="card-bottom">${safe(project.tools.slice(0,2).join(' / '))}</div></a>`;
  }

  function home() {
    return `<main id="main" class="screen home" tabindex="-1"><div class="home-top"><div><span class="eyebrow">A little curiosity. A considered approach.</span><h1>People. Data.<br><span>Possibilities.</span></h1><p class="home-description">Hi, I’m ${safe(data.identity.name)}. ${safe(data.identity.introduction)}</p><div class="home-actions"><a class="button" href="#/projects">Explore my work ${icon('arrow')}</a><a class="text-link" href="#/journey">Follow my journey <span aria-hidden="true">↗</span></a></div></div><div class="index-art" role="img" aria-label="An illustrated portfolio folder connecting psychology, data and technology"><div class="art-header"><span>THE INTERDISCIPLINARY FILE</span><span>01 — 04</span></div><div class="art-lines"></div><div class="art-folder back"></div><div class="art-folder"><small>A WORK IN CONTINUOUS PROGRESS</small><strong>Connecting the dots.</strong><span class="art-categories">PSYCHOLOGY &nbsp; × &nbsp; DATA &nbsp; × &nbsp; TECHNOLOGY</span></div></div></div><div class="home-bottom"><div class="section-heading"><h2>Selected work</h2><a class="text-link" href="#/projects">View project index <span aria-hidden="true">↗</span></a></div><div class="project-grid">${[data.projects[0],data.projects[2],data.projects[1]].map(previewCard).join('')}</div><div class="home-footnote"><span>Different disciplines. A shared approach to problem-solving.</span><span>SELECTED FOR THIS PORTFOLIO / 03</span></div></div></main>`;
  }

  function projectRail(selected) {
    return `<nav class="folder-rail" aria-label="Project folders"><a class="folder-tab ${!selected ? 'active' : ''}" ${!selected ? 'aria-current="page"' : ''} href="#/projects"><span class="tab-number">INDEX</span> All projects</a>${data.projects.map(project => `<a class="folder-tab ${selected?.id === project.id ? 'active' : ''}" ${selected?.id === project.id ? 'aria-current="page"' : ''} href="#${projectPath(project)}"><span class="tab-number">${project.number}</span>${safe(project.shortTitle)}</a>`).join('')}</nav>`;
  }

  function projectSidebar(selected, category, section) {
    const expanded = readSetting('portfolio:folders', {});
    return `<aside id="explorer" class="sidebar" aria-label="Project explorer"><span class="sidebar-label">PROJECT EXPLORER</span><a class="side-link ${!category && !selected ? 'active' : ''}" href="#/projects">${icon('grid')}All projects<span class="side-count">04</span></a>${data.categories.map(group => `<details class="category-group" data-folder="${group.id}" ${(expanded[group.id] ?? (group.id === (selected?.category || category) || !category && !selected)) ? 'open' : ''}><summary>${icon('folder')}${safe(group.title)}<span class="chevron" aria-hidden="true">⌄</span></summary><a class="side-link file-link ${category === group.id && !selected ? 'active' : ''}" href="#/projects/${group.id}">Folder overview</a>${data.projects.filter(project => project.category === group.id).map(project => `<a class="side-link file-link ${selected?.id === project.id ? 'active' : ''}" href="#${projectPath(project)}">${icon('file')}${safe(project.shortTitle)}</a>`).join('')}</details>`).join('')}${selected ? `<div class="side-separator"></div><span class="sidebar-label">IN THIS PROJECT</span><nav aria-label="Project contents">${data.sections.map((entry,index) => `<a class="side-link section-link ${section === entry.id ? 'active' : ''}" ${section === entry.id ? 'aria-current="page"' : ''} href="#${projectPath(selected)}${entry.id !== 'overview' ? `/${entry.id}` : ''}"><span class="section-number">0${index+1}</span>${entry.title}</a>`).join('')}</nav>` : ''}<div class="sidebar-note"><strong>Thoughtfully selected work.</strong>Four case studies across analytics, software and research.</div></aside>`;
  }

  function projectIndex(categoryId) {
    const category = data.categories.find(item => item.id === categoryId);
    const groups = category ? [category] : data.categories;
    return `<div class="page-topline"><span class="eyebrow">PROJECT INDEX / ${category ? category.number : '01 — 04'}</span><span class="status-chip">Content being curated</span></div><h1 class="page-title">${safe(category?.title || 'Work, across disciplines.')}</h1><p class="page-intro">${safe(category?.note || 'A focused collection of analytical, technical and research work. Open a folder to explore the questions, decisions and evidence behind each project.')}</p>${groups.map(group => `<section aria-labelledby="category-${group.id}"><div class="category-heading"><h2 id="category-${group.id}">${safe(group.title)}</h2><span>${data.projects.filter(project => project.category === group.id).length} ${data.projects.filter(project => project.category === group.id).length === 1 ? 'FILE' : 'FILES'}</span></div><div class="category-cards">${data.projects.filter(project => project.category === group.id).map(previewCard).join('')}</div></section>`).join('')}`;
  }

  function evidence(project, compact = false) {
    if (project.media.length) return project.media.map(media => `<figure class="evidence-gallery"><button class="image-enlarge" data-image="${safe(media.src)}" data-alt="${safe(media.alt)}" data-caption="${safe(media.caption)}" aria-label="Enlarge ${safe(project.title)} screenshot"><img src="${safe(media.src)}" alt="${safe(media.alt)}" loading="lazy" width="390" height="843"><span>View original screenshot ${icon('research')}</span></button><figcaption class="image-caption">${safe(media.caption)}</figcaption></figure>`).join('');
    return `<div class="evidence-placeholder"><div class="placeholder-symbol">${icon(categoryIcon(project.category))}</div><div><span class="eyebrow">EVIDENCE SPACE</span><h3>${project.category === 'research' ? 'Research materials to be added' : 'Original project preview to be added'}</h3><p>${project.category === 'research' ? 'Approved methodology materials and research evidence will appear here.' : 'This space is reserved for the actual dashboard or deliverable. Project visuals have not been supplied yet.'}</p>${!compact ? '<p>No illustrative metrics or unverified results are shown.</p>' : ''}</div></div>`;
  }

  function projectDetail(project, section) {
    const shared = `<div class="page-topline"><span class="eyebrow">PROJECT ${project.number} / ${safe(project.label)}</span>${draftStatus(project)}</div><h1 class="page-title">${safe(project.title)}</h1><p class="page-intro">${safe(project.summary)}</p><div class="project-meta"><div class="meta-item"><small>DISCIPLINE</small>${safe(project.type)}</div><div class="meta-item"><small>PROJECT DATE</small>${safe(project.date || 'To be confirmed')}</div><div class="meta-item"><small>METHODS & TOOLS</small>${tags(project.tools)}</div></div>`;
    if (section === 'overview') return shared + `<div class="section-row"><section class="content-section"><h2>The project</h2><p>${safe(project.description)}</p></section><section class="content-section"><h2>My contribution</h2><p>${safe(project.role || 'The exact scope of my individual contribution will be documented in the final case study.')}</p></section></div>${evidence(project,true)}<div class="evidence-actions"><span class="muted" style="font-size:11px">Case study content is being prepared.</span><a class="text-link" href="#${projectPath(project)}/process">Explore the approach <span aria-hidden="true">→</span></a></div>`;
    if (section === 'process') return shared + `<section class="content-section"><h2>Approach & process</h2><p>A proposed structure for documenting the work. Implementation details and completed research stages will be confirmed before publication.</p><ol class="steps">${project.approach.map((step,index) => `<li><span>0${index+1}</span>${safe(step)}</li>`).join('')}</ol></section><section class="content-section">${pendingBox('Documentation in progress','These steps describe the case-study structure; they do not certify completion of every stage.')}</section>`;
    if (section === 'evidence') return shared + `<section class="content-section"><h2>Evidence & output</h2><p>${project.media.length ? 'An available development screenshot, followed by the supporting material still needed for a complete case study.' : 'The final case study will foreground original deliverables and verified findings.'}</p></section>${evidence(project)}<section class="content-section"><h2>Materials to complete this case study</h2>${list(project.pending)}</section>`;
    return shared + `<section class="content-section"><h2>Reflection & limitations</h2><p>${safe(project.reflection)}</p></section><section class="content-section"><h2>Before this case study is published</h2>${list(project.pending)}</section><section class="content-section">${pendingBox('Project links','Source repositories and demos will be linked when the correct public URLs have been supplied.')}</section>`;
  }

  function projects(parts) {
    const category = parts[1];
    const project = parts[2] ? data.projects.find(item => item.id === parts[2] && item.category === category) : null;
    const section = parts[3] || 'overview';
    if (parts.length > 4 || category && !data.categories.some(item => item.id === category) || parts[2] && !project || !data.sections.some(item => item.id === section) || !project && parts[3]) return notFound();
    const group = data.categories.find(item => item.id === category);
    const entries = [{label:'Projects',path:category ? '/projects' : null}, ...(group ? [{label:group.title,path:project ? `/projects/${category}` : null}] : []), ...(project ? [{label:project.shortTitle}] : [])];
    setTitle(project ? `${project.title}${section !== 'overview' ? ' · ' + data.sections.find(item=>item.id === section).title : ''}` : group?.title || 'Projects');
    return `<div class="folder-workspace">${projectRail(project)}<div class="folder-body">${projectSidebar(project,category,section)}<div class="content-wrap">${toolbar(entries)}<main id="main" class="content-panel" tabindex="-1">${project ? projectDetail(project,section) : projectIndex(category)}</main></div></div></div>`;
  }

  function simpleWorkspace(sidebar, entries, body, label) {
    return `<div class="screen simple-workspace"><div class="standalone-head"><span class="eyebrow">${safe(label)}</span><span class="eyebrow">THE PERSONAL FILE</span></div><div class="plain-body"><aside id="explorer" class="sidebar" aria-label="${safe(label)} navigation">${sidebar}</aside><div class="content-wrap">${toolbar(entries)}<main id="main" class="content-panel" tabindex="-1">${body}</main></div></div></div>`;
  }

  const journeyFilters = [{id:'all',title:'All milestones',icon:'grid'},{id:'education',title:'Education',icon:'cap'},{id:'experience',title:'Professional experience',icon:'work'},{id:'projects',title:'Major projects',icon:'flag'}];
  function journeySidebar(filter) {
    return `<span class="sidebar-label">THE JOURNEY</span>${journeyFilters.map(item => `<a href="#/journey${item.id !== 'all' ? '/'+item.id : ''}" class="side-link ${filter === item.id ? 'active' : ''}">${icon(item.icon)}${item.title}</a>`).join('')}<div class="side-separator"></div><div class="sidebar-note"><strong>One connected journey.</strong>Education, professional experience and independent work.<br><br>Dates are awaiting confirmation; undated entries are not shown as a verified chronology.</div>`;
  }

  function milestone(type,title,description,path,date) {
    return `<div class="milestone"><span class="milestone-marker">${icon(type === 'Education' ? 'cap' : type === 'Experience' ? 'work' : 'flag')}</span><a class="milestone-content" href="#${path}"><div class="milestone-top"><span class="eyebrow">${safe(type)}</span><span class="milestone-date">${safe(date || 'DATE TO CONFIRM')}</span></div><h3>${safe(title)} <span aria-hidden="true">↗</span></h3><p>${safe(description)}</p></a></div>`;
  }

  function journey(parts) {
    if (parts[1] === 'experience' && parts[2]) {
      const experience = data.experiences.find(item => item.id === parts[2]);
      if (!experience || parts.length > 3) return notFound();
      setTitle(experience.title);
      return simpleWorkspace(journeySidebar('experience'),[{label:'Journey',path:'/journey'},{label:'Professional experience',path:'/journey/experience'},{label:experience.title}],`<span class="eyebrow">PROFESSIONAL EXPERIENCE</span><h1 class="page-title">${safe(experience.title)}</h1><p class="page-intro">${safe(experience.description)}</p><section class="content-section">${pendingBox('Experience detail draft','This entry identifies a role from the brief. Exact employer details, dates, responsibilities and outcomes require confirmation.')}</section><section class="content-section"><h2>Details to add</h2>${list(experience.pending)}</section><section class="content-section"><a class="button secondary" href="#/journey/experience">← Return to the journey</a></section>`,'Journey / Experience');
    }
    const filter = parts[1] || 'all';
    if (parts.length > 2 || !journeyFilters.some(item=>item.id === filter)) return notFound();
    setTitle('Journey');
    let milestones = '';
    if (filter === 'all' || filter === 'education') milestones += milestone('Education','Psychology undergraduate',data.identity.university,'/about','GRADUATION EXPECTED 2028');
    if (filter === 'all' || filter === 'experience') milestones += data.experiences.map(item => milestone('Experience',item.title,item.description,`/journey/experience/${item.id}`)).join('');
    if (filter === 'all' || filter === 'projects') milestones += data.projects.map(item => milestone('Project',item.title,item.summary,projectPath(item),item.date)).join('');
    const body = `<div class="page-topline"><span class="eyebrow">EDUCATION / EXPERIENCE / EXPLORATION</span><span class="status-chip">Dates being curated</span></div><h1 class="page-title">The path so far.</h1><p class="page-intro">Connecting the experiences that shape how I think, work and build. Select a milestone to look inside.</p><section class="content-section">${pendingBox('Roadmap preview','Milestones are grouped by type until their start and completion dates are confirmed. This is not a verified chronological order.')}</section><div class="timeline">${milestones}</div>`;
    return simpleWorkspace(journeySidebar(filter),[{label:'Journey',path:filter !== 'all' ? '/journey' : null},...(filter !== 'all' ? [{label:journeyFilters.find(item=>item.id === filter).title}] : [])],body,'Journey / Roadmap');
  }

  const achievementGroups = [{id:'all',title:'All highlights',icon:'grid'},{id:'sports',title:'Sports',icon:'award'},{id:'events',title:'Events & leadership',icon:'person'},{id:'competitions',title:'Hackathons & pitching',icon:'flag'}];
  function achievements(parts) {
    const category = parts[1] || 'all';
    const selected = parts[2] ? data.achievements.find(item=>item.id === parts[2] && item.category === category) : null;
    if (!achievementGroups.some(item=>item.id === category) || parts[2] && !selected || parts.length > 3) return notFound();
    const sidebar = `<span class="sidebar-label">BEYOND THE PROJECTS</span>${achievementGroups.map(item => `<a href="#/achievements${item.id !== 'all' ? '/'+item.id : ''}" class="side-link ${item.id === category ? 'active' : ''}">${icon(item.icon)}${item.title}</a>`).join('')}<div class="side-separator"></div><div class="sidebar-note"><strong>Selected highlights.</strong>Leadership, teamwork and participation, with individual contributions at the centre.</div>`;
    let body;
    if (selected) body = `<div class="page-topline"><span class="eyebrow">${safe(selected.type)}</span><span class="status-chip">Details to confirm</span></div><h1 class="page-title">${safe(selected.title)}</h1><p class="page-intro">${safe(selected.summary)}</p><div class="achievement-detail"><p>${safe(selected.details)}</p><section class="content-section"><h2>Evidence to add</h2>${list(['Exact event title, organizer and date','Personal role and specific contributions','Certificate, photograph or approved event material'])}</section><section class="content-section"><a class="button secondary" href="#/achievements/${category}">← Return to highlights</a></section></div>`;
    else {
      const items = data.achievements.filter(item=>category === 'all' || item.category === category);
      body = `<div class="page-topline"><span class="eyebrow">LEADERSHIP & ACHIEVEMENTS</span><span class="status-chip">Evidence being curated</span></div><h1 class="page-title">Beyond the desk.</h1><p class="page-intro">Experiences in teamwork, leadership and communication. A focused selection of moments and contributions.</p><div class="category-heading"><h2>${safe(achievementGroups.find(item=>item.id === category).title)}</h2><span>${items.length} ENTRIES</span></div><div class="category-cards">${items.map(item=>`<a class="preview-card" href="#/achievements/${item.category}/${item.id}"><div class="card-meta">${icon('award')}${safe(item.type)}</div><span class="card-arrow" aria-hidden="true">↗</span><h3>${safe(item.title)}</h3><p>${safe(item.summary)}</p><div class="card-bottom">DETAILS & EVIDENCE TO CONFIRM</div></a>`).join('')}</div>${category === 'sports' || category === 'all' ? '<section class="content-section"><h2>Additional participation</h2><p>Shooting competitions, debate and other participation can be included as concise entries once dates, results and individual roles have been supplied.</p></section>' : ''}`;
    }
    setTitle(selected?.title || 'Achievements');
    return simpleWorkspace(sidebar,[{label:'Achievements',path:category !== 'all' ? '/achievements' : null},...(category !== 'all' ? [{label:achievementGroups.find(item=>item.id === category).title,path:selected ? `/achievements/${category}` : null}] : []),...(selected ? [{label:selected.title}] : [])],body,'Leadership / Achievements');
  }

  function about(parts) {
    if (parts.length > 2 || parts[1] && parts[1] !== 'contact') return notFound();
    setTitle('About');
    const contacts = [['Email',data.identity.email ? `mailto:${data.identity.email}` : null],['LinkedIn',data.identity.linkedin],['GitHub',data.identity.github]];
    const body = `<span class="eyebrow">THE PERSON BEHIND THE PROJECTS</span><h1 class="page-title">Understanding people.<br>Building useful things.</h1><div class="about-grid"><div><p>I’m ${safe(data.identity.name)}, a psychology undergraduate exploring the connections between human behaviour, data analytics and software development. My portfolio brings together independent technical projects, psychological research and professional experience.</p><p style="margin-top:16px">Across these areas, I’m interested in asking useful questions, working through complex problems and translating ideas into something practical. Each case study is a space to explain the decisions, contributions and evidence behind the work.</p><div class="education-block"><span class="eyebrow">EDUCATION</span><h3>${safe(data.identity.university)}</h3><p>Psychology undergraduate · ${safe(data.identity.graduation)}</p><a class="text-link" style="margin-top:16px" href="#/journey/education">View education milestone ↗</a></div></div><div><div class="capability"><h3>Data Analytics</h3>${tags(['Power BI','DAX','Excel'])}<p style="margin-top:10px"><a class="text-link" href="#/projects/analytics">Explore analytics work ↗</a></p></div><div class="capability"><h3>Software Development</h3>${tags(['TypeScript','React Native','Python'])}<p style="margin-top:10px"><a class="text-link" href="#/projects/software/personal-secretary">View Personal Secretary ↗</a></p></div><div class="capability"><h3>Research & Applied Psychology</h3>${tags(['Research methods','Behavioural science'])}<p style="margin-top:10px"><a class="text-link" href="#/projects/research">Explore research ↗</a></p></div></div></div><section id="contact" class="contact-block"><span class="eyebrow">START A CONVERSATION</span><h2 style="margin-top:12px">Let’s connect.</h2><p class="page-intro">Contact links will be added when the preferred professional details are supplied.</p><div class="contact-options">${contacts.map(([label,url])=>url ? `<a class="button secondary" href="${safe(url)}" ${label !== 'Email' ? 'target="_blank" rel="noopener noreferrer"' : ''}>${label} ↗</a>` : `<span class="contact-pending">${label} · to be added</span>`).join('')}</div></section>`;
    return `<main id="main" class="screen" tabindex="-1"><div class="standalone-head"><span class="eyebrow">ABOUT / PROFILE</span><span class="eyebrow">PSYCHOLOGY × DATA × TECHNOLOGY</span></div><div class="content-panel" style="overflow:visible">${body}</div></main>`;
  }

  function notFound() {
    setTitle('Page not found');
    return `<main id="main" class="screen content-panel" tabindex="-1"><div class="empty-state">${icon('folder')}<h1>That file isn’t here.</h1><p>The link may be incomplete. Return to the project index to continue exploring.</p><a class="button" href="#/projects">Open project index →</a></div></main>`;
  }

  function setTitle(title) { document.title = `${title} — ${data.identity.name} / Portfolio`; }

  function render(initial = false) {
    if (activeRoute.startsWith('/journey') && !activeRoute.includes('/experience/')) {
      timelineScroll[activeRoute] = window.scrollY;
      saveSetting('portfolio:timeline-scroll',timelineScroll);
    }
    let route;
    try { route = decodeURIComponent(location.hash.slice(1) || '/').replace(/\/$/,'') || '/'; } catch { route = '/invalid'; }
    const parts = route.split('/').filter(Boolean);
    const page = parts[0] || 'home';
    document.querySelectorAll('[data-nav]').forEach(link => {
      if (link.dataset.nav === page) link.setAttribute('aria-current','page');
      else link.removeAttribute('aria-current');
    });
    if (page === 'home') { setTitle('Home'); app.innerHTML = home(); }
    else if (page === 'projects') app.innerHTML = projects(parts);
    else if (page === 'journey') app.innerHTML = journey(parts);
    else if (page === 'achievements') app.innerHTML = achievements(parts);
    else if (page === 'about') app.innerHTML = about(parts);
    else app.innerHTML = notFound();
    const index = ['home','projects','journey','achievements','about'].indexOf(page);
    document.querySelector('#footer-context').textContent = `${String(index+1).padStart(2,'0')} / ${page === 'home' ? 'OVERVIEW' : page.toUpperCase()}`;
    activeRoute = route;
    const scrollTop = route.startsWith('/journey') && !route.includes('/experience/') ? timelineScroll[route] || 0 : 0;
    window.scrollTo({top:scrollTop,left:0,behavior:'instant'});
    document.querySelectorAll('[data-folder]').forEach(details => details.addEventListener('toggle',() => {
      const expanded = readSetting('portfolio:folders',{});
      expanded[details.dataset.folder] = details.open;
      saveSetting('portfolio:folders',expanded);
    }));
    if (!initial) document.querySelector('#main')?.focus({preventScroll:true});
    if (route === '/about/contact') document.querySelector('#contact')?.scrollIntoView({block:'start'});
  }

  app.addEventListener('click',event => {
    const toggle = event.target.closest('.mobile-explorer');
    if (toggle) {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded',String(open));
      document.querySelector('#explorer')?.classList.toggle('is-open',open);
    } else if (event.target.closest('[data-image]')) {
      const button = event.target.closest('[data-image]');
      const dialog = document.querySelector('#image-dialog');
      const img = document.querySelector('#dialog-image');
      img.src = button.dataset.image;
      img.alt = button.dataset.alt;
      document.querySelector('#dialog-caption').textContent = button.dataset.caption;
      dialog.showModal();
    } else if (!event.target.closest('.sidebar')) {
      document.querySelector('#explorer')?.classList.remove('is-open');
      document.querySelector('.mobile-explorer')?.setAttribute('aria-expanded','false');
    }
  });
  const dialog = document.querySelector('#image-dialog');
  dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target === dialog) dialog.close();});
  window.addEventListener('keydown',event => {
    if (event.key === 'Escape') {
      document.querySelector('#explorer')?.classList.remove('is-open');
      document.querySelector('.mobile-explorer')?.setAttribute('aria-expanded','false');
    }
  });
  window.addEventListener('hashchange',()=>render());
  render(true);
})();
