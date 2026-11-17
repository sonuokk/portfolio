import { useState } from 'react';
import { projects } from './data/projects.js';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Github,
  Linkedin, Mail, Menu, Send, X,
} from 'lucide-react';

const skillGroups = [
  { title: 'Languages', items: ['Java', 'JavaScript', 'Python', 'C++', 'SQL'] },
  { title: 'Frontend', items: ['React', 'HTML', 'CSS'] },
  { title: 'Backend', items: ['Spring Boot', 'Node.js', 'Express', 'REST APIs', 'Microservices', 'Spring Security'] },
  { title: 'Data & cloud', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'AWS', 'Docker', 'Linux'] },
  { title: 'AI & LLM concepts', items: ['AI / ML', 'GenAI', 'LLMs', 'RAG & embeddings', 'MCP', 'Agentic AI', 'Context engineering'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Figma', 'JUnit'] },
];

const aiConcepts = [
  { number: '01', title: 'GenAI & LLMs', text: 'Language models, generative systems, and the building blocks behind AI-powered applications.', mark: 'LLM' },
  { number: '02', title: 'RAG & embeddings', text: 'Retrieval and vector representations that bring relevant knowledge into a model’s context.', mark: 'RAG' },
  { number: '03', title: 'Context engineering', text: 'Shaping instructions, context, and constraints to make model behavior more useful and reliable.', mark: 'CTX' },
  { number: '04', title: 'Agentic AI & MCP', text: 'Tool-connected models and structured workflows that can take on multi-step tasks.', mark: 'MCP' },
];

const resumes = [
  { label: 'General', file: 'Sonu_Resume.pdf' },
  { label: 'Full stack', file: 'Full_Stack_Developer_Sonu_Resume.pdf' },
  { label: 'Java backend', file: 'Java_Backend_Developer_Sonu_Resume.pdf' },
  { label: 'Software engineer', file: 'Software_Engineer_Sonu_Resume.pdf' },
];

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span><i /></div>;
}

function ResumeMenu() {
  const [open, setOpen] = useState(false);
  return <div className="resume-wrap">
    <button className="button button-dark resume-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
      Get my resume <ArrowDown size={15} />
    </button>
    {open && <div className="resume-menu">{resumes.map((resume) =>
      <a key={resume.file} href={`/resumes/${resume.file}`} download>{resume.label}<ArrowDown size={13} /></a>,
    )}</div>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState({ status: 'idle', text: '' });

  async function submitContact(event) {
    event.preventDefault();
    setFormState({ status: 'sending', text: '' });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Something went wrong.');
      setFormState({ status: 'success', text: result.message });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setFormState({ status: 'error', text: `${error.message} You can also email sonu.ok433@gmail.com.` });
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className="site-header">
      <a href="#home" className="wordmark" onClick={closeMenu}>sonu<span>.</span></a>
      <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        <a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
      </nav>
    </header>

    <main>
      <section className="hero page-width" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="availability-dot" /> MCA GRADUATE · PROJECT EXPERIENCE · DELHI, INDIA</div>
          <h1>Software, systems<br />&amp; <em>ideas in progress.</em></h1>
          <p className="hero-intro">I’m Sonu, an MCA graduate building practical experience through academic and personal projects. I work across software, backend systems, and emerging AI, and I’m always learning by making.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <ArrowRight size={15} /></a>
            <ResumeMenu />
          </div>
          <div className="hero-socials">
            <a href="https://github.com/sonuokk" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={12} /></a>
            <a href="https://linkedin.com/in/sonu4" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="A glimpse of my development toolkit">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-center"><Code2 size={29} strokeWidth={1.4} /></div>
          <div className="floating-tag tag-react"><span>◉</span> React</div>
          <div className="floating-tag tag-java"><span>J</span> Java</div>
          <div className="floating-tag tag-node"><span>⬡</span> Node.js</div>
          <div className="floating-tag tag-python"><span>⌘</span> Python</div>
          <div className="floating-tag tag-spring"><span>✿</span> Spring Boot</div>
          <div className="floating-tag tag-ai"><span>✳</span> AI / ML</div>
          <div className="floating-tag tag-genai"><span>✧</span> GenAI</div>
          <div className="floating-tag tag-rag"><span>◈</span> RAG + embeddings</div>
          <div className="floating-tag tag-mcp"><span>⌘</span> MCP</div>
          <div className="floating-tag tag-context"><span>⌁</span> Context engineering</div>
          <div className="art-spark spark-a">✳</div><div className="art-spark spark-b">✳</div>
        </div>
        <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="page-width">
          <SectionLabel number="01">PROJECT WORK</SectionLabel>
          <div className="section-heading-row"><h2>Project<br /><em>work.</em></h2><p>A mix of full-stack applications, backend systems, research tools, and browser games built through academic and personal projects.</p></div>
          <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.name}>
            <div className={`project-visual ${project.tone}${project.image ? ' has-image' : ''}`}>
              {project.image && <img src={project.image} alt={project.imageAlt || `${project.name} project preview`} loading="lazy" />}
              {!project.image && <div className={`project-artwork artwork-${project.tone}`} aria-hidden="true">
                <div className="artwork-window"><div className="artwork-bar"><span /><span /><span /><b>{project.name}</b></div>
                  <div className="artwork-content"><div className="artwork-copy"><i>PROJECT PREVIEW</i><strong>{project.name}</strong><span /><span /><span /></div>
                    <div className="artwork-shape"><b>{project.mark}</b><i /><i /><i /></div></div>
                </div><div className="artwork-orb" />
              </div>}
              <span className="project-index">PROJECT {project.number}</span><span className="visual-caption">{project.type}</span>
            </div>
            <div className="project-body"><div className="project-title-row"><div><h3>{project.name}</h3><p>{project.type}</p></div></div>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="project-links">{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}{project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Source code <Github size={14} /></a>}</div>
            </div>
          </article>)}</div>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="page-width about-layout">
          <div className="about-main"><SectionLabel number="02">A LITTLE ABOUT ME</SectionLabel><h2>Curious by nature.<br /><em>Builder through projects.</em></h2>
            <p>Most of my hands-on experience so far comes from academic and personal projects. I’ve built web applications and backend features with React, Java/Spring Boot, and Node.js, exploring authentication, REST APIs, microservices, and real-time updates along the way.</p>
            <p>I’m also building my understanding of AI and LLM concepts such as RAG, embeddings, context engineering, MCP, and agentic systems. These are areas I’m actively learning and want to explore further through practical projects.</p>
            <a className="text-link" href="mailto:sonu.ok433@gmail.com">Say hello <ArrowUpRight size={15} /></a>
          </div>
          <aside className="about-aside">
            <div className="education-card"><span className="card-kicker">EDUCATION</span><div className="education-entry"><span className="education-dot" /><div><h3>Master of Computer Applications</h3><p>Maharshi Dayanand University · 2024–2026</p></div></div><div className="education-entry"><span className="education-dot" /><div><h3>B.Sc. (Hons), Computer Science</h3><p>PGDAV College, University of Delhi · 2020–2023</p></div></div></div>
            <div className="cert-card"><span className="card-kicker">CERTIFICATION</span><div className="cert-icon"><Check size={17} /></div><h3>AI Fundamentals of AI ASCEND</h3><p>Accenture · FutureSkills Prime · 2026</p></div>
          </aside>
        </div>
        <div className="page-width skills-wrap"><SectionLabel number="03">MY TOOLKIT</SectionLabel><div className="skills-grid">{skillGroups.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div>
        <div className="page-width ai-concepts-wrap"><SectionLabel number="04">AI &amp; LLM CONCEPTS</SectionLabel><div className="ai-concepts-heading"><h2>Areas I’m <em>exploring.</em></h2><p>A growing part of my technical interests, alongside software and backend engineering.</p></div><div className="ai-concepts-grid">{aiConcepts.map((concept) => <article className="ai-concept-card" key={concept.title}><div className="concept-card-top"><span>{concept.number}</span><b>{concept.mark}</b></div><h3>{concept.title}</h3><p>{concept.text}</p></article>)}</div></div>
      </section>

      <section className="contact-section section-pad" id="contact"><div className="page-width contact-layout">
        <div className="contact-copy"><SectionLabel number="05">GET IN TOUCH</SectionLabel><p className="contact-kicker">HAVE A PROJECT IN MIND?</p><h2>Let’s make<br /><em>it happen.</em></h2><p className="contact-intro">I’m open to software engineering opportunities and interesting collaborations. Tell me a little about what you’re working on.</p><a className="contact-email" href="mailto:sonu.ok433@gmail.com"><Mail size={17} /> sonu.ok433@gmail.com <ArrowUpRight size={14} /></a>
        </div>
        <form className="contact-form" onSubmit={submitContact}>
          <label>Your name<input required maxLength="100" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Smith" /></label>
          <label>Email address<input required type="email" maxLength="254" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@company.com" /></label>
          <label>Your message<textarea required maxLength="4000" rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="A little about the opportunity or idea…" /></label>
          {formState.text && <p className={`form-feedback ${formState.status}`} role="status">{formState.text}</p>}
          <button className="button button-light" type="submit" disabled={formState.status === 'sending'}>{formState.status === 'sending' ? 'Sending…' : 'Send a message'} <Send size={15} /></button>
        </form>
      </div></section>
    </main>

    <footer className="site-footer"><div className="page-width footer-inner"><a href="#home" className="wordmark">sonu<span>.</span></a><p>Designed with care. Built to be useful.</p><div className="footer-links"><a href="https://github.com/sonuokk" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://linkedin.com/in/sonu4" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:sonu.ok433@gmail.com" aria-label="Email"><Mail size={17} /></a></div><span className="copyright">© {new Date().getFullYear()} Sonu</span></div></footer>
  </>;
}

export default App;
