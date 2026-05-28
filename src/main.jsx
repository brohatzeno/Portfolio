import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Mail, MapPin, Phone } from "lucide-react";
import "./styles.css";

const mapUrl =
  "https://www.google.com/maps/place/Kapan,+44600/@27.7379982,85.3431592,14z/data=!3m1!4b1!4m6!3m5!1s0x39eb1be5bea00987:0x70cf02a942554e97!8m2!3d27.7360126!4d85.3601307!16s%2Fm%2F04jlw1m?entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D";

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const projects = [
  {
    title: "WhatsApp RAG Support Chatbot",
    stack: "LLaMA 3.1 · Groq API · Qdrant · EmbeddingGemma · n8n · PostgreSQL",
    body:
      "Live multi-agent AI assistant on WhatsApp Business. Semantic vector search, exchange rate APIs, competitor rates, dynamic FAQ routing, and per-user conversation state. The one I am most proud of.",
    featured: true,
  },
  {
    title: "JSON-Driven QA Automation Framework",
    stack: "Python · Selenium · JSON · MCP Server · Ollama · LangGraph",
    body: "Code-free, extensible test runner. The framework that taught me what scalable actually means.",
  },
  {
    title: "OAuth 2.0 + MCP Backend POC",
    stack: "OAuth 2.0 · MCP Protocol · Flask · Claude Desktop · Cloudflare Tunnels",
    body: "Role-based access control connecting a secured backend to AI. Science fiction I wrote myself.",
  },
  {
    title: "MongoDB CSFLE Ledger Migration Tool",
    stack: "MongoDB · Node.js · Python · Encryption Key Vaults",
    body: "Sensitive fields encrypted throughout: at rest, in transit, on the client.",
  },
  {
    title: "Wingsten Furniture E-Commerce Website",
    stack: "PHP · MySQL · JavaScript · HTML5 · CSS3 · Bootstrap",
    body: "The project where it all started. The first thing I built that felt real.",
  },
];

const skillRows = [
  ["Languages", "Python, JavaScript ES6+, PHP, HTML5, CSS3"],
  ["Frameworks", "React.js, Tailwind CSS, Flask, Django"],
  ["Data", "PostgreSQL, MongoDB CSFLE, Qdrant, pgvector"],
  ["AI & ML", "RAG pipelines, embeddings, vector search, LangGraph, Ollama"],
  ["Automation", "n8n, Selenium WebDriver, Page Object Model, Twilio"],
  ["Integrations", "REST APIs, OAuth 2.0, Webhooks, MCP Protocol"],
  ["Tools", "Git, GitHub, Docker, Jira, Cloudflare Tunnels, Pandas, NumPy"],
];

function Header() {
  const [spinning, setSpinning] = useState(false);

  return (
    <header className="masthead">
      <a href="#cover" className="brand">
        <img
          className={spinning ? "logo-spin" : ""}
          src={asset("/media/assets/logo.svg")}
          alt=""
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setSpinning((value) => !value);
          }}
        />
        <span>brohatzeno</span>
      </a>
      <input className="nav-toggle" type="checkbox" id="nav-toggle" aria-label="Toggle navigation" />
      <label className="hamburger" htmlFor="nav-toggle" aria-hidden="true">
        <span />
        <span />
        <span />
      </label>
      <nav aria-label="Primary navigation">
        <a href="#human">About me</a>
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="panel hero" id="cover">
      <div className="motion-bg" aria-hidden="true" />
      <h1>PORTFOLIO</h1>
      <p className="topline hero-kicker">Pseudo human</p>
      <p className="date">Born Aug 11, 2003</p>
      <img className="hero-person" src={asset("/media/assets/meShaded.png")} alt="Aryan Karki portrait cutout" />
      <div className="hero-copy">
        <p className="label">brohatzeno / Aryan Karki</p>
        <p>
          I am everything and nothing. I am the contradiction that refused to pick a side.
          Builds things by day. Writes in the margins at night. Shows up anyway, dramatically,
          fully, for the plot.
        </p>
      </div>
      <div className="hero-footer">
        <a href="mailto:karkiii.aryan@gmail.com" target="_blank" rel="noreferrer">
          <Mail size={18} />
          <span>karkiii.aryan@gmail.com</span>
        </a>
        <a href="https://github.com/brohatzeno" target="_blank" rel="noreferrer">
          <img src={asset("/media/icons/github-svgrepo-com.svg")} alt="" />
          <span>github.com/brohatzeno</span>
        </a>
        <a href={mapUrl} target="_blank" rel="noreferrer">
          <MapPin size={18} />
          <span>Kapan, Kathmandu, Nepal</span>
        </a>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="panel intro">
      <div>
        <p className="topline">Not a resume with better typography</p>
        <h2>
          Hello, I’m{" "}
          <span className="name-pair">
            <span className="name-mark name-legal">Aryan Karki</span>. But the name on the
            marquee is <span className="name-mark name-alias">brohatzeno</span>.
          </span>
        </h2>
        <p className="big">
          Life is Dramatic. Not performed. Not ironic. A genuine operating philosophy:
          everything worth doing carries weight, texture, consequence.
        </p>
        <p>
          This is a place about a whole person. You will find the engineer here: the RAG
          pipelines, OAuth backends, JSON-driven test frameworks. But you will also find
          the person who feels things at full volume and processes them in poems. Who stans
          Choi Yeonjun with the same conviction he brings to debugging a broken webhook.
        </p>
      </div>
      <figure className="mood-frame">
        <div className="height-line" aria-hidden="true">
          <span>5'10ft</span>
        </div>
        <img src={asset("/media/assets/me_cool.png")} alt="Aryan Karki standing portrait" />
      </figure>
    </section>
  );
}

function Human() {
  const humanCards = [
    ["Personality", "An ambivert with a secret. Around strangers: reserved, watching, present but contained. Around people I trust: pure Shinchan energy. Loud, dramatic, unfiltered, genuinely chaotic in the best way."],
    ["Spider-Man", "Not because he is the coolest. Because he is the most broken. A person navigating a cruel life with no safety net, no universe that cuts him slack, and he keeps going anyway. Not a superpower. A choice."],
    ["Anime canon", "Attack on Titan first, singular, unmovable. Jojo's Bizarre Adventure. One Piece. Jujutsu Kaisen. Fullmetal Alchemist: Brotherhood. Code Geass. Made in Abyss."],
    ["Music weather", "TXT, Stray Kids, Monsta X, ENHYPEN, Seventeen, MAMAMOO, TWICE, NewJeans, LE SSERAFIM, KISS OF LIFE, KATSEYE. Ultimate bias: Choi Yeonjun."],
  ];

  return (
    <section className="panel human" id="human">
      <div className="plot-hero">
        <div className="plot-copy">
          <p className="topline">The human, fully documented</p>
          <h2>I do it for the plot.</h2>
        </div>
        <img className="leaning-cutout" src={asset("/media/assets/melean.png")} alt="" aria-hidden="true" />
      </div>
      <div className="human-grid">
        {humanCards.map(([title, body]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <div className="ticker" aria-label="Human notes">
        {["Momo", "Poetry", "Rainstorm restoration", "Random facts", "Anime OSTs", "Nadaan Parinde", "Nandemonaiya"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="archive-wall" aria-label="Personal visual archive">
        <figure>
          <img src={asset("/media/assets/meAndBook2.svg")} alt="Aryan with a book" />
          <figcaption>Collects strange corners.</figcaption>
        </figure>
        <figure>
          <img src={asset("/media/assets/meguitar.png")} alt="Aryan playing guitar" />
          <figcaption>Music as weather.</figcaption>
        </figure>
        <figure>
          <img src={asset("/media/assets/meReadingbook.svg")} alt="Aryan reading" />
          <figcaption>Processes in lines.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="panel work" id="work">
      <div className="work-visuals" aria-hidden="true">
        <img src={asset("/media/assets/phonebooth.svg")} alt="" />
        <img src={asset("/media/assets/building-1.svg")} alt="" />
      </div>
      <p className="topline">November 2025 - May 2026 / Xuno</p>
      <h2>Six months. Three production systems. One continuous refusal to quit.</h2>
      <div className="work-grid">
        {[
          ["01", "Conversational AI & Backend Engineering", "Built a WhatsApp Business customer support chatbot end-to-end: n8n FAQ bot, Discord POC after the WhatsApp token expired, interactive button flows, PostgreSQL fuzzy keyword matching, then a live multi-agent RAG system serving real users on a verified business number.", "Replaced fuzzy matching with Qdrant vector search and cosine-similarity thresholding. Switched Qwen-3 embeddings at 4096 dimensions to EmbeddingGemma at 768 dimensions. Chose LLaMA 3.1 via Groq API over self-hosting."],
          ["02", "QA Automation & Full-Stack Tooling", "Built a Selenium + Python test automation framework from zero, evolved into a JSON-driven CLI system using Page Object Model architecture. 24+ configurable assertion and navigation types. 18/21 core cases passing on first release.", "Later extended it with an MCP server connected to Claude Desktop, enabling natural language test orchestration through local LLMs via Ollama."],
          ["03", "DevOps, Security & Infrastructure", "Built a MongoDB CSFLE proof of concept for financial ledger migration with client-side end-to-end encryption and automated dry-run verification.", "Implemented OAuth 2.0 with MCP role-based access control: Claude redirects to login, the user authenticates, the backend verifies role, and Claude receives only permitted data."],
        ].map(([num, title, one, two]) => (
          <article key={num}>
            <span>{num}</span>
            <h3>{title}</h3>
            <p>{one}</p>
            <p>{two}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="panel projects" id="projects">
      <p className="topline">Production pressure / personal canon</p>
      <h2>Selected work</h2>
      <div className="project-stack">
        {projects.map((project, index) => (
          <article className={project.featured ? "featured" : ""} key={project.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{project.title}</h3>
            <p className="stack">{project.stack}</p>
            <p>{project.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsEducation() {
  return (
    <section className="panel split">
      <div className="skills">
        <p className="topline">Most of this was learned mid-need</p>
        <h2>Technical skills</h2>
        <dl>
          {skillRows.map(([term, details]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{details}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="education">
        <p className="topline">Education / self-taught spine</p>
        <h2>Education</h2>
        <article>
          <span>2023 - Present</span>
          <h3>BSc (Hons) Computer Science with Artificial Intelligence</h3>
          <p>Sunway College, Birmingham City University · Kathmandu</p>
          <p>Machine Learning · Database Systems · Web Technologies · Software Engineering</p>
        </article>
        <article>
          <span>2019 - 2021</span>
          <h3>Higher Secondary Certificate</h3>
          <p>Southwestern State College · Kathmandu</p>
        </article>
      </div>
    </section>
  );
}

function Next() {
  return (
    <section className="panel next">
      <div>
        <p className="topline">The next arc</p>
        <h2>I want a problem with teeth.</h2>
      </div>
      <div className="next-copy">
        <p>
          The kind that does not become interesting until it is connected to real users, messy data,
          security boundaries, latency, cost, and the uncomfortable question: should this system exist at all?
        </p>
        <p>
          I am looking toward AI and ML engineering, production infrastructure, and full-stack product work
          when the product has a pulse. Not a title. A problem worth staying in the room for.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="panel contact" id="contact">
      <p className="topline">Final frame</p>
      <h2>This is brohatzeno.</h2>
      <p>
        The details are not decoration. They are the point. A whole, complicated, dramatic, momo-eating,
        rain-loving, Yeonjun-stanning, poem-writing, contradiction-embracing person.
      </p>
      <div className="contact-grid">
        <a href="mailto:karkiii.aryan@gmail.com" target="_blank" rel="noreferrer">
          <Mail size={18} />
          <span>karkiii.aryan@gmail.com</span>
        </a>
        <a href="tel:+9779803732718" target="_blank" rel="noreferrer">
          <Phone size={18} />
          <span>+977 980 373 2718</span>
        </a>
        <a href="https://linkedin.com/in/karkiaryan" target="_blank" rel="noreferrer">
          <img src={asset("/media/icons/linkedin.svg")} alt="" />
          <span>linkedin.com/in/karkiaryan</span>
        </a>
        <a href="https://github.com/brohatzeno" target="_blank" rel="noreferrer">
          <img src={asset("/media/icons/github-svgrepo-com.svg")} alt="" />
          <span>github.com/brohatzeno</span>
        </a>
      </div>
      <img className="contact-selfie" src={asset("/media/assets/meeror_selfie.png")} alt="Aryan mirror selfie" />
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Human />
        <Work />
        <Projects />
        <SkillsEducation />
        <Next />
        <Contact />
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
