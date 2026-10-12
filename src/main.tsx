import { createRoot } from 'react-dom/client';
import { MotionConfig, motion } from 'motion/react';
import './styles.css';

const codeLines = [
  <><span className="text-[#9ac6e4]">const</span> <span className="text-[#53aeea]">developer</span> = <span className="text-[#f5d42e]">{'{'}</span></>,
  <><span className="text-[#9ac6e4]">frontend</span>: <span className="text-[#c99b7f]">"strong"</span>,</>,
  <><span className="text-[#9ac6e4]">backend</span>: <span className="text-[#c99b7f]">"exploring"</span>,</>,
  <><span className="text-[#9ac6e4]">cloud</span>: <span className="text-[#c99b7f]">"learning"</span>,</>,
  <><span className="text-[#9ac6e4]">mindset</span>: <span className="text-[#c99b7f]">"always curious"</span></>,
  <><span className="text-[#f5d42e]">{' }'.trim()}</span>;</>,
];

// Replace each image, summary, and href with a personal app screenshot and destination.
const projects = [
  { title: 'Personal app 01', kind: 'Web app', summary: 'Add a sentence about the problem this app solves.', image: null, href: 'https://github.com/' },
  { title: 'Personal app 02', kind: 'Mobile app', summary: 'Add a sentence about who this app is for.', image: null, href: 'https://github.com/' },
  { title: 'Personal app 03', kind: 'Web or mobile app', summary: 'Add a sentence about what makes this app useful.', image: null, href: 'https://github.com/' },
];

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

function CodeCard() {
  return (
    <motion.aside
      aria-label="Developer profile code sample"
      className="relative mt-7 w-full rounded-[28px] bg-[#4b1f0e] px-5 py-5 font-mono text-[#c5b2a6] sm:mt-0 sm:absolute sm:right-[5.7vw] sm:top-[8.3%] sm:h-[260px] sm:min-w-[300px] sm:w-[34vw] sm:rounded-[38px] sm:px-6 sm:py-6 lg:h-[30.5vh] lg:max-h-[350px] lg:min-h-[260px] lg:min-w-0 lg:w-[25.6vw] lg:rounded-[52px] lg:px-[34px] lg:py-7"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: [0, -7, 0] }}
      transition={{ opacity: { duration: 0.7, delay: 0.2, ease: 'easeOut' }, y: { duration: 6, delay: 1, repeat: Infinity, ease: 'easeInOut' } }}
    >
      <div className="flex items-center gap-3 text-[11px] sm:text-[13px]"><span className="font-medium text-[#f6d43d]">JS</span><span>developer.js</span><span className="ml-5 text-[#a77e6a]">×</span></div>
      <div className="mt-3 text-[10px] text-[#a77e6a] sm:mt-[17px] sm:text-xs">src › developer.js › developer</div>
      <pre className="mt-3 text-[13px] leading-[1.62] sm:mt-4 sm:text-[clamp(14px,1.1vw,21px)]">
        {codeLines.map((line, index) => <div className="flex whitespace-pre" key={index}><span className="w-8 shrink-0 pr-3 text-right text-[#9b715e] sm:w-10 sm:pr-[18px]">{index + 1}</span><code>{line}</code></div>)}
      </pre>
    </motion.aside>
  );
}

export default function App() {
  return (
    <main className="overflow-hidden bg-[#f7f1df] text-[#4c1e0d]" id="top">
      <section className="relative min-h-[900px] px-6 pb-[70px] pt-[42px] sm:min-h-screen sm:px-[5.7vw] sm:pb-[5.5vh] sm:pt-[9.1vh]">
        <motion.p className="m-0 text-[15px] font-extrabold tracking-[-.045em] text-[#64564f] sm:text-[clamp(15px,1.22vw,25px)]"
          initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <><span className="text-[#4c1e0d]">AARTI YADAV</span><span className="ml-2 font-medium text-[#8a776a]">/ TECHNICAL LEAD — FRONTEND ENGINEERING</span></>
        </motion.p>
        <CodeCard />
        <motion.h1
          className="relative z-10 mt-[42px] max-w-none text-[clamp(43px,11.3vw,72px)] font-extrabold leading-[1.04] tracking-[-.07em] sm:mt-[11vh] sm:max-w-[86vw] sm:text-[clamp(56px,8vw,90px)] lg:mt-[5.1vh] lg:max-w-[75vw] lg:text-[clamp(60px,6.35vw,132px)] lg:leading-[1.02] lg:tracking-[-.075em]"
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}>
          <span className="text-[#a56838]">You see the<br />interface.</span><br />I build what’s behind it.
        </motion.h1>
        <motion.p className="mt-[22px] max-w-none text-base leading-[1.55] tracking-[-.025em] text-[#6f625a] sm:mt-[3.3vh] sm:max-w-[80vw] sm:text-[clamp(17px,1.45vw,29px)] sm:leading-[1.48] lg:max-w-[72vw]"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}>
          Frontend engineering lead with 10+ years of experience building responsive web and mobile applications. I focus on JavaScript frameworks, performance, analytics, and scalable delivery.
        </motion.p>
        <motion.div className="mt-11 text-[#14100e] sm:mt-[7vh] lg:mt-[8.1vh]" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.55, ease: 'easeOut' }}>
          <p className="mb-2 text-sm tracking-[-.04em] sm:text-[clamp(15px,1.23vw,25px)]">CURRENTLY EXPLORING</p>
          <p className="m-0 text-[19px] tracking-[-.04em] sm:text-[clamp(20px,1.65vw,33px)]">Backend <span>·</span> CI/CD <span>·</span> Cloud <span>·</span> Architecture</p>
        </motion.div>
        <a className="group absolute bottom-6 left-6 inline-flex items-center gap-3 rounded-full border border-[#63321e]/20 bg-[#fbf7eb]/65 py-2 pl-4 pr-2 text-[11px] font-semibold tracking-[.14em] text-[#63321e] no-underline backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#a56838]/60 hover:bg-[#fbf7eb] sm:bottom-[8.8vh] sm:left-1/2 sm:-translate-x-1/2 sm:py-2.5 sm:pl-5 sm:pr-2.5 sm:text-xs" href="#work">
          <span>SCROLL TO EXPLORE</span>
          <motion.span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full bg-[#4c1e0d] text-sm text-[#f7f1df] transition-colors group-hover:bg-[#a56838] sm:h-9 sm:w-9" animate={{ y: [0, 3, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>↓</motion.span>
        </a>
      </section>
      <section className="relative min-h-[60vh] border-t border-[#00851c]/35 px-6 pb-[110px] pt-[65px] sm:min-h-[65vh] sm:px-[5.7vw] sm:py-[10vh]" id="work">
        <p className="m-0 text-[15px] font-extrabold tracking-[-.045em] text-[#64564f]">&lt; PERSONAL PROJECTS /&gt;</p>
        <nav aria-label="Portfolio sections" className="mb-12 mt-6 flex flex-wrap gap-x-6 gap-y-3 border-y border-[#4c1e0d]/10 py-4 text-sm font-medium text-[#6f625a] sm:gap-x-9">
          <a className="hover:text-[#00851c]" href="#work">Work</a><a className="hover:text-[#00851c]" href="#about">About</a><a className="hover:text-[#00851c]" href="#skills">Skills</a><a className="hover:text-[#00851c]" href="#experience">Experience</a><a className="hover:text-[#00851c]" href="#education">Education</a><a className="hover:text-[#00851c]" href="#resume">Résumé</a><a className="hover:text-[#00851c]" href="#contact">Contact</a>
        </nav>
        <motion.div className="mb-10 mt-[30px] flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55, ease: 'easeOut' }}>
          <h2 className="m-0 text-[44px] font-extrabold leading-[1.03] tracking-[-.065em] sm:text-[clamp(42px,5vw,88px)]">Featured Work</h2>
          <p className="m-0 max-w-[520px] text-[17px] leading-[1.55] text-[#6f625a] sm:text-lg">Independent projects that reflect my approach to solving problems and building thoughtful digital experiences.</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {projects.map((project, index) => (
            <motion.a
              className="group block overflow-hidden rounded-[22px] border border-[#4c1e0d]/10 bg-[#fbf7eb] text-inherit no-underline shadow-[0_8px_28px_rgba(76,30,13,0.06)] transition-shadow hover:shadow-[0_16px_40px_rgba(76,30,13,0.13)]"
              href={project.href}
              key={project.title}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.45, delay: index * 0.12, ease: 'easeOut' }}
            >
              <div className={`relative aspect-[1.58] overflow-hidden p-5 sm:p-6 ${index === 1 ? 'bg-[#d9e5d2]' : index === 2 ? 'bg-[#ead7c8]' : 'bg-[#e7ded0]'}`}>
                {project.image ? (
                  <img className="absolute inset-0 h-full w-full object-cover" src={project.image} alt={`${project.title} screenshot`} />
                ) : (
                  <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#4c1e0d]/10 bg-[#fffdf7]/80 shadow-[0_10px_28px_rgba(76,30,13,0.10)]">
                    <div className="flex h-8 items-center gap-1.5 border-b border-[#4c1e0d]/10 px-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c98568]" /><span className="h-1.5 w-1.5 rounded-full bg-[#d9b668]" /><span className="h-1.5 w-1.5 rounded-full bg-[#92a57c]" />
                      <span className="ml-2 h-1.5 w-20 rounded-full bg-[#4c1e0d]/10" />
                    </div>
                    <div className="flex flex-1 items-center justify-center p-4">
                      <div className="w-full max-w-[240px]">
                        <div className="mb-3 h-2 w-1/3 rounded-full bg-[#a56838]/25" />
                        <div className="mb-2 h-3 w-3/4 rounded-full bg-[#4c1e0d]/15" />
                        <div className="mb-5 h-2 w-1/2 rounded-full bg-[#4c1e0d]/10" />
                        <div className="grid grid-cols-3 gap-2"><div className="h-12 rounded-md bg-[#a56838]/15" /><div className="h-12 rounded-md bg-[#00851c]/10" /><div className="h-12 rounded-md bg-[#4c1e0d]/10" /></div>
                      </div>
                    </div>
                    <span className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-[#fffdf7]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-[#6f625a]">Your app screenshot</span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
                <div><p className="m-0 text-lg font-bold tracking-[-.04em] sm:text-xl">{project.title}</p><p className="mb-0 mt-1 text-sm text-[#6f625a]">{project.kind}</p><p className="mb-0 mt-3 max-w-sm text-sm leading-relaxed text-[#6f625a]">{project.summary}</p></div>
                <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#4c1e0d]/15 text-lg transition-colors group-hover:border-[#00851c] group-hover:bg-[#00851c] group-hover:text-white">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
        <a className="mt-9 inline-block text-base font-semibold text-[#63321e] no-underline hover:text-[#00851c]" href="https://github.com/" target="_blank" rel="noreferrer">More personal apps on GitHub ↗</a>
      </section>
      <section className="border-t border-[#00851c]/25 px-6 py-16 sm:px-[5.7vw] sm:py-24" id="about">
        <p className="m-0 text-[15px] font-extrabold tracking-[-.045em] text-[#64564f]">&lt; A LITTLE ABOUT ME /&gt;</p>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-[1.1fr_.75fr] md:gap-16">
          <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-8">
            <motion.h2 className="m-0 text-[42px] font-extrabold leading-[1.02] tracking-[-.065em] sm:text-6xl" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Curious by nature.<br />Builder by choice.</motion.h2>
            <motion.div className="max-w-2xl text-lg leading-relaxed text-[#6f625a]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.12 }}><p className="mt-0">I’m Aarti, a frontend engineering lead with more than a decade of experience building web and mobile products. My work spans Angular, React Native, Ionic, and JavaScript applications used by customers and frontline teams.</p><p className="mb-0">I care about making applications fast, reliable, and easier to evolve. I’ve led teams through legacy modernization, performance improvements, analytics integrations, and end-to-end delivery.</p></motion.div>
          </div>
          <motion.figure className="relative mx-auto w-full max-w-[390px] rounded-[30px] bg-[#eadfcb] p-3 md:mr-0" initial={{ opacity: 0, x: 24, scale: 0.98 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}>
            <img className="aspect-[3/4] w-full rounded-[22px] object-cover object-[center_42%] grayscale" src={publicAsset('aarti-yadav-portrait.jpg')} alt="Portrait of Aarti Yadav" />
            <figcaption className="flex items-center justify-between gap-3 px-2 pb-1 pt-4"><span className="font-bold tracking-[-.03em]">Aarti Yadav</span><span className="text-right text-xs text-[#6f625a]">Frontend engineering<br />& technical leadership</span></figcaption>
          </motion.figure>
        </div>
      </section>
      <section className="border-t border-[#00851c]/25 bg-[#f1ead9] px-6 py-16 sm:px-[5.7vw] sm:py-24" id="skills">
        <p className="m-0 text-[15px] font-extrabold tracking-[-.045em] text-[#64564f]">&lt; SKILLS & TOOLKIT /&gt;</p>
        <motion.h2 className="mb-10 mt-7 text-[42px] font-extrabold leading-[1.02] tracking-[-.065em] sm:mb-12 sm:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Tools I use to<br className="sm:hidden" /> make things work.</motion.h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ['Frontend', 'Angular · JavaScript (ES6+) · TypeScript · HTML5 · CSS3 · SCSS'],
            ['Mobile', 'React Native · Ionic · Cordova · Android apps'],
            ['Backend & APIs', 'Node.js · Express.js · REST APIs · Firebase'],
            ['Performance & delivery', 'Core Web Vitals · analytics · Git · Agile/Scrum · CI/CD'],
          ].map(([title, detail], index) => <motion.article className="rounded-2xl border border-[#4c1e0d]/10 bg-[#fbf7eb] p-6" key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}><span className="text-sm font-semibold text-[#a56838]">0{index + 1}</span><h3 className="mb-2 mt-5 text-xl font-bold tracking-[-.04em]">{title}</h3><p className="m-0 text-sm leading-relaxed text-[#6f625a]">{detail}</p></motion.article>)}
        </div>
        <p className="mb-0 mt-7 max-w-2xl text-sm leading-relaxed text-[#6f625a]">Additional experience includes Adobe Analytics, Google Analytics, CleverTap, OpenSearch, Chrome DevTools, code reviews, debugging, technical leadership, and cross-functional collaboration.</p>
      </section>
      <section className="border-t border-[#00851c]/25 px-6 py-16 sm:px-[5.7vw] sm:py-24" id="experience">
        <p className="m-0 text-[15px] font-extrabold tracking-[-.045em] text-[#64564f]">&lt; EXPERIENCE /&gt;</p>
        <h2 className="mb-10 mt-7 text-[42px] font-extrabold leading-[1.02] tracking-[-.065em] sm:mb-12 sm:text-6xl">Places I’ve<br className="sm:hidden" /> learned and grown.</h2>
        <div className="max-w-5xl border-l border-[#00851c]/35 pl-6 sm:pl-9">
          {[
            { company: 'Incture Technologies', role: 'Technical Lead – Delivery', dates: 'May 2025 — Present', points: ['Leading Walmart store application development, including an Angular + Ionic Android app for store employees.', 'Owning architecture, design, and delivery for two React Native apps; modernizing legacy applications for performance, stability, and scale.', 'Guiding team execution and code quality; built and optimized CI/CD pipelines for Android deployments.'] },
            { company: 'Xebia IT Architects', role: 'Lead Consultant', dates: 'Mar 2021 — May 2025', points: ['Delivered scalable Angular and Ionic applications for Kotak Cherry and Walmart.', 'Modernized legacy systems, reducing technical debt and improving maintainability.', 'Improved Core Web Vitals and integrated Adobe Analytics, CleverTap, and OpenSearch; mentored developers across projects.'] },
            { company: 'LearningMate Technologies Pvt. Ltd.', role: 'Senior Software Engineer', dates: 'Oct 2019 — Mar 2021', points: ['Moved desktop applications to browser-based platforms and improved accessibility.', 'Implemented Service Workers for caching and offline capabilities; contributed to Node.js apps and frontend architecture.'] },
            { company: 'Verdantis Technologies Pvt. Ltd.', role: 'UX Developer', dates: 'May 2018 — Sep 2019', points: ['Reduced load time by 40% through performance optimization.', 'Led an Angular v5 to v6 migration, implemented XSS security measures, and managed app releases.'] },
            { company: 'Noesis Tech', role: 'Mobile Application Developer', dates: 'Jul 2015 — May 2018', points: ['Built hybrid mobile applications using Ionic and Cordova, integrating third-party APIs.', 'Improved application performance by 40%, developed a dynamic form engine, and integrated Google Analytics.'] },
          ].map((job, index) => <motion.article className={`relative ${index < 4 ? 'border-b border-[#4c1e0d]/10 pb-8' : 'pb-1'} ${index ? 'pt-8' : 'pb-8'} before:absolute before:-left-[29px] before:top-10 before:h-3 before:w-3 before:rounded-full ${index === 0 ? 'before:bg-[#00851c]' : 'before:bg-[#a56838]'} sm:before:-left-[38px]`} key={job.company} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.28), ease: 'easeOut' }}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline"><p className="m-0 text-sm font-semibold text-[#a56838]">{job.dates}</p><p className="order-first m-0 text-sm font-semibold text-[#6f625a] sm:order-last">{job.company}</p></div>
            <h3 className="mb-3 mt-2 text-2xl font-bold tracking-[-.04em]">{job.role}</h3>
            <ul className="m-0 grid max-w-4xl gap-2 pl-5 leading-relaxed text-[#6f625a]">{job.points.map(point => <li key={point}>{point}</li>)}</ul>
          </motion.article>)}
        </div>
      </section>
      <section className="border-t border-[#00851c]/25 bg-[#f1ead9] px-6 py-16 sm:px-[5.7vw] sm:py-24" id="education">
        <p className="m-0 text-[15px] font-extrabold tracking-[-.045em] text-[#64564f]">&lt; EDUCATION /&gt;</p>
        <motion.div className="mt-7 flex flex-col justify-between gap-3 border-b border-[#4c1e0d]/10 pb-6 sm:flex-row sm:items-baseline" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}><div><h2 className="m-0 text-2xl font-bold tracking-[-.04em]">Bachelor of Science, Information Technology</h2><p className="mb-0 mt-2 text-[#6f625a]">Kishinchand Chellaram College</p></div><p className="m-0 text-sm font-semibold text-[#a56838]">2012 — 2015 · 71.5%</p></motion.div>
      </section>
      <section className="border-t border-[#00851c]/25 bg-[#f1ead9] px-6 py-16 sm:px-[5.7vw] sm:py-24" id="resume">
        <p className="m-0 text-[15px] font-extrabold tracking-[-.045em] text-[#64564f]">&lt; RÉSUMÉ /&gt;</p>
        <motion.div className="mt-7 flex flex-col justify-between gap-8 rounded-[28px] bg-[#4b1f0e] p-7 text-[#f7f1df] sm:flex-row sm:items-center sm:p-10 lg:p-14" initial={{ opacity: 0, scale: 0.98, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.65, ease: 'easeOut' }}>
          <div className="max-w-2xl"><h2 className="m-0 text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">Résumé</h2><p className="mb-0 mt-4 leading-relaxed text-[#ddcabe]">A concise overview of my 10+ years in frontend and mobile engineering, team leadership, and product delivery.</p></div>
          <a className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#f7f1df] px-6 py-3 font-semibold text-[#4c1e0d] no-underline transition-transform hover:scale-[1.03]" href={publicAsset('AartiCV.pdf')} target="_blank" rel="noreferrer">Download résumé ↗</a>
        </motion.div>
      </section>
      <section className="border-t border-[#00851c]/25 px-6 py-16 sm:px-[5.7vw] sm:py-24" id="contact">
        <p className="m-0 text-[15px] font-extrabold tracking-[-.045em] text-[#64564f]">&lt; GET IN TOUCH /&gt;</p>
        <div className="mt-7 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}><h2 className="m-0 max-w-3xl text-[42px] font-extrabold leading-[1.02] tracking-[-.065em] sm:text-7xl">Have something<br className="hidden sm:block" /> good in mind?</h2><p className="mb-0 mt-5 max-w-xl text-lg leading-relaxed text-[#6f625a]">I’m happy to talk about frontend engineering, mobile applications, technical leadership, and opportunities to build useful products.</p></motion.div>
          <motion.div className="flex flex-col items-start gap-3" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}><a className="text-xl font-bold text-[#4c1e0d] underline decoration-[#a56838]/50 decoration-2 underline-offset-4 hover:text-[#00851c]" href="mailto:y.aarti.official@gmail.com">y.aarti.official@gmail.com ↗</a></motion.div>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#4c1e0d]/10 pt-6 text-sm font-medium"><a className="hover:text-[#00851c]" href="https://github.com/" target="_blank" rel="noreferrer">GitHub profile link to be added ↗</a></div>
      </section>
      <footer className="flex flex-col gap-3 border-t border-[#00851c]/25 px-6 py-6 text-sm text-[#6f625a] sm:flex-row sm:items-center sm:justify-between sm:px-[5.7vw]"><span>© 2026 · Aarti Yadav</span><span>Made with curiosity & care.</span><span>Built by Aarti with GitHub Copilot.</span><a className="text-inherit no-underline hover:text-[#00851c]" href="#top">Back to top ↑</a></footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<MotionConfig reducedMotion="user"><App /></MotionConfig>);
