import Link from "next/link";

const highlights = [
  {
    title: "15+ Years Inspiring Readers",
    description:
      "Transforming literature classrooms into collaborative studios where curiosity, empathy, and critical thinking flourish.",
  },
  {
    title: "National Board Certified",
    description:
      "Specialized in English Language Arts with a focus on culturally responsive and inclusive curriculum design.",
  },
  {
    title: "Instructional Coach",
    description:
      "Mentoring new educators, leading district-wide PD, and designing data-informed literacy interventions.",
  },
];

const featuredClasses = [
  {
    name: "AP Literature & Composition",
    snapshot:
      "Student-led Socratic seminars, weekly writing workshops, and interdisciplinary projects connecting literature to current issues.",
    focus: "Grades 11-12",
  },
  {
    name: "Creative Writing Studio",
    snapshot:
      "Genre deep-dives, peer feedback protocols, and a published anthology that celebrates student voice.",
    focus: "Grades 9-10",
  },
  {
    name: "Reading Strategies Lab",
    snapshot:
      "Evidence-based interventions that accelerate reading growth for emerging bilinguals and striving readers.",
    focus: "Grades 6-8",
  },
];

const milestones = [
  {
    year: "2024",
    title: "District Teacher of the Year",
    detail:
      "Recognized for launching a community storytelling initiative and dramatically increasing student engagement metrics.",
  },
  {
    year: "2021",
    title: "National Writing Project Fellow",
    detail:
      "Led action research on multimodal writing that resulted in a district-wide adoption of digital portfolios.",
  },
  {
    year: "2018",
    title: "Curriculum Innovation Grant",
    detail:
      "Developed a project-based learning sequence blending American literature with civic advocacy projects.",
  },
  {
    year: "2012",
    title: "Launch of Classroom Blog",
    detail:
      "Created an online hub for student publishing that now hosts over 1,200 original pieces and podcasts.",
  },
];

const testimonials = [
  {
    quote:
      "Ms. Carter redesigned our literacy block so every student saw themselves reflected in the texts we explored. Engagement skyrocketed.",
    name: "Jordan Lee",
    title: "Assistant Principal, Maple Ridge High School",
  },
  {
    quote:
      "Her workshops made writing feel possible for every learner. The growth in student confidence was unmistakable.",
    name: "Amelia Duarte",
    title: "English Department Chair",
  },
  {
    quote:
      "Families rave about the community nights she organizes—students proudly present their learning beyond the classroom walls.",
    name: "Marcus Nguyen",
    title: "PTA President",
  },
];

const professionalLearning = [
  {
    label: "Upcoming",
    topic: "Designing Authentic Assessments",
    date: "October 12, 2024 · Virtual Summit",
  },
  {
    label: "Workshop",
    topic: "Early College Composition",
    date: "September 6, 2024 · State English Teachers Association",
  },
  {
    label: "Webinar",
    topic: "Reading Interventions That Stick",
    date: "On-Demand · 90 Minutes",
  },
];

const resources = [
  {
    title: "Project-Based Reading Units",
    description:
      "Downloadable unit guides with mentor texts, conferencing checklists, and differentiation pathways.",
    link: "https://example.com/resources/reading-units",
  },
  {
    title: "Family Literacy Toolkit",
    description:
      "A bilingual resource that helps caregivers support reading fluency, vocabulary, and discussion at home.",
    link: "https://example.com/resources/family-toolkit",
  },
  {
    title: "Workshop Decks & Materials",
    description:
      "Slide decks, planning templates, and rubric banks from recent professional learning sessions.",
    link: "https://example.com/resources/workshops",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 flex justify-center blur-3xl sm:-top-40">
          <div className="aspect-[1500/600] w-[60rem] max-w-none bg-gradient-to-r from-indigo-500/70 via-sky-500/70 to-emerald-400/70 opacity-40" />
        </div>
        <header className="relative">
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-28 pt-24 sm:pb-36 sm:pt-32 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 shadow-lg shadow-indigo-500/20 ring-1 ring-white/20 backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-200" />
                English Language Arts · Grades 6-12
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Avery Carter
                  <span className="block text-transparent bg-gradient-to-r from-emerald-300 via-sky-300 to-indigo-300 bg-clip-text">
                    Teacher · Instructional Coach · Storyteller
                  </span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-slate-200/90">
                  I partner with young people to discover the power of their voices and help fellow educators cultivate joyful, rigorous learning communities. Together we design classrooms where every story matters.
                </p>
              </div>
              <div className="flex flex-col gap-4 text-sm sm:flex-row sm:text-base">
                <Link
                  href="mailto:hello@averycarterteaches.com"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 font-medium text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
                >
                  Schedule a Conversation
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-medium text-slate-100 transition hover:border-emerald-200 hover:text-emerald-200"
                >
                  View Classroom Portfolio
                </Link>
              </div>
            </div>
            <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/40 backdrop-blur">
              <div className="grid gap-8">
                {highlights.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <h3 className="text-lg font-semibold text-emerald-200">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-200/80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="relative pb-24">
        <section id="portfolio" className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
                Classroom Snapshot
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Learning experiences that center student voice
              </h2>
            </div>
            <span className="text-sm text-slate-300/80">
              Project-based · Culturally responsive · Standards aligned
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredClasses.map((course) => (
              <div
                key={course.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 shadow-lg shadow-black/40"
              >
                <div className="space-y-4">
                  <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-200/90">
                    {course.focus}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-50">
                    {course.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-200/80">
                    {course.snapshot}
                  </p>
                </div>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
                <div className="mt-6 text-xs uppercase tracking-[0.25em] text-slate-400">
                  Workshop · Collaboration · Reflection
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-6xl rounded-4xl border border-white/5 bg-white/5 px-6 py-20 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
                Philosophy
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Every learner is a storyteller with a story worth hearing
              </h2>
              <p className="text-base leading-relaxed text-slate-100/80">
                My classroom culture is built on brave curiosity. Through purposeful talk, multimodal composition, and reflective practice, students analyze complex texts and create media that resonates with real audiences.
              </p>
            </div>
            <div className="space-y-8 lg:col-span-3">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-emerald-200">
                  Workshop Rhythms
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                  Mini-lessons anchor the day, followed by student goal-setting, conferring, and share-outs that make learning visible. Formative data guides responsive teaching and keeps the focus on growth.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-emerald-200">
                  Authentic Audiences
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                  Publishing nights, podcast series, and community partnerships ensure student work travels beyond the classroom. Learners see purpose in their craft and receive feedback from varied perspectives.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-emerald-200">
                  Restorative Relationships
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                  Circles, reflection protocols, and strengths-based feedback cultivate belonging. Students find joy in learning and develop agency as readers, writers, and critical thinkers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-6xl px-6" id="milestones">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
                Milestones
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Celebrating growth and collaboration
              </h2>
            </div>
            <span className="text-sm text-slate-300/80">
              Awards · Fellowships · Classroom innovations
            </span>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-300/40 via-emerald-300/20 to-transparent sm:block" />
            <div className="space-y-10">
              {milestones.map((milestone) => (
                <article
                  key={milestone.year}
                  className="relative rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-black/40 sm:pl-16"
                >
                  <div className="sm:absolute sm:left-0 sm:top-8 sm:flex sm:flex-col sm:items-center sm:gap-2">
                    <span className="hidden h-8 w-8 rounded-full border border-emerald-200/60 bg-slate-950 text-center text-sm font-semibold leading-8 text-emerald-200 shadow-lg shadow-emerald-400/20 sm:inline-block">
                      •
                    </span>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                      {milestone.year}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-50">
                      {milestone.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-200/80">
                      {milestone.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-6xl rounded-4xl border border-white/10 bg-white/5 px-6 py-20 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
                Collaborators Speak
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Partnerships rooted in trust and shared purpose
              </h2>
              <p className="text-base leading-relaxed text-slate-100/85">
                From school leaders to families, working together is central to every initiative. Here’s what long-term collaborators highlight about our work.
              </p>
            </div>
            <div className="space-y-6">
              {testimonials.map((item) => (
                <blockquote
                  key={item.name}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-black/40"
                >
                  <p className="text-base leading-relaxed text-slate-200/90">
                    “{item.quote}”
                  </p>
                  <footer className="mt-6 text-sm text-slate-400">
                    <span className="font-semibold text-slate-200">{item.name}</span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-slate-500">
                      {item.title}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="speaking" className="mx-auto mt-24 max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-black/40">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
                Professional Learning
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Workshops and speaking engagements
              </h2>
              <p className="text-base leading-relaxed text-slate-200/80">
                I lead custom professional learning experiences for districts, universities, and nonprofit partners. Sessions blend research, modeling, and collaborative planning so teams leave ready to implement.
              </p>
              <div className="space-y-4">
                {professionalLearning.map((item) => (
                  <div
                    key={`${item.label}-${item.topic}`}
                    className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                      {item.label}
                    </span>
                    <p className="text-sm font-medium text-slate-50">
                      {item.topic}
                    </p>
                    <p className="text-xs text-slate-300/80">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-black/40">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
                Resources
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Favorite tools and downloads
              </h2>
              <p className="text-base leading-relaxed text-slate-200/80">
                Explore ready-to-use materials that keep readers and writers at the center. All resources are classroom-tested and adaptable across grade levels.
              </p>
              <div className="space-y-4">
                {resources.map((resource) => (
                  <Link
                    key={resource.title}
                    href={resource.link}
                    className="group block rounded-2xl border border-transparent bg-white/5 px-4 py-4 transition hover:border-emerald-200/70 hover:bg-white/10"
                  >
                    <p className="text-sm font-semibold text-emerald-200 group-hover:text-emerald-100">
                      {resource.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-200/80">
                      {resource.description}
                    </p>
                    <span className="mt-3 inline-flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/70 group-hover:text-emerald-100">
                      Download Resource →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto mt-24 max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Let’s design transformative learning experiences together
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-200/85">
                Whether you’re looking for classroom collaboration, curriculum design support, or a conference keynote, I’d love to connect. Send a note and I’ll respond within two school days.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-black/40">
              <form
                className="space-y-4"
                action="https://formsubmit.co/hello@averycarterteaches.com"
                method="POST"
              >
                <input type="hidden" name="_next" value="https://agentic-318ee0b6.vercel.app/thanks" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-300/70 transition focus:border-emerald-200 focus:ring"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-300/70 transition focus:border-emerald-200 focus:ring"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-200">
                    How can I help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-900 outline-none ring-emerald-300/70 transition focus:border-emerald-200 focus:ring"
                    placeholder="Share a bit about your goals"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-white/10 px-6 py-12 text-sm text-slate-400">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-400/80">
            © {new Date().getFullYear()} Avery Carter. Building communities where literacy thrives.
          </p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-slate-500">
            <Link href="#portfolio" className="transition hover:text-emerald-200">
              Portfolio
            </Link>
            <Link href="#speaking" className="transition hover:text-emerald-200">
              Speaking
            </Link>
            <Link href="mailto:hello@averycarterteaches.com" className="transition hover:text-emerald-200">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
