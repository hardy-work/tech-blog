import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior frontend developer with 5+ years building React and Next.js products. This is the story behind CHAEI PUEI Tech.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About — CHAEI PUEI Tech",
    description: "Senior frontend developer with 5+ years building React and Next.js products.",
    url: `${siteConfig.url}/about`,
    type: "profile",
  },
};

const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript (ES6+)"] },
  { group: "Web", items: ["Next.js", "React", "Vue.js", "Angular", "Tailwind CSS", "SCSS"] },
  { group: "Mobile", items: ["React Native (CLI & Expo)"] },
  { group: "State & Data", items: ["Redux", "React Query", "Axios"] },
  { group: "Infrastructure", items: ["Docker", "Firebase", "WebRTC", "Socket.io"] },
  { group: "Testing", items: ["Jest"] },
];

const experience = [
  {
    company: "CRV",
    role: "Freelance Frontend Developer",
    period: "Jan 2026 — Present",
    current: true,
    description:
      "Building client projects and web products independently. Running this tech blog on the side to document what I learn.",
  },
  {
    company: "Nimbus",
    role: "Middle Frontend Developer",
    period: "Oct 2025 — Dec 2025",
    current: false,
    description: "Contributed to frontend development on cross-platform web applications.",
  },
  {
    company: "MOR Software JSC",
    role: "Frontend Developer & React Native Lead",
    period: "Apr 2022 — Sep 2025",
    current: false,
    description:
      "Led React Native development and managed small frontend teams using Agile. Optimized application performance by up to 40% on key projects. Worked on Kcon Plus (K-pop fan platform), Viettel Money, and Actiwell.",
  },
  {
    company: "TEKIFY Co., Ltd",
    role: "Frontend Developer",
    period: "Mar 2021 — Mar 2022",
    current: false,
    description:
      "Built and maintained web applications. Gained solid foundations in React ecosystem and QA practices.",
  },
];

const projects = [
  {
    name: "Kcon Plus",
    tag: "React Native",
    desc: "K-pop fan platform — performance optimization lead. Improved load times significantly across iOS and Android.",
  },
  {
    name: "Viettel Money",
    tag: "React Native",
    desc: "Mobile payment application for Viettel's digital wallet ecosystem.",
  },
  {
    name: "Jobseeker",
    tag: "Next.js",
    desc: "Migrated a legacy PHP recruitment platform to Next.js App Router. Improved SEO and DX significantly.",
  },
  {
    name: "Cash Control",
    tag: "React Native",
    desc: "Personal finance mobile app for tracking income and expenses.",
  },
  {
    name: "Actiwell Management",
    tag: "React",
    desc: "Management system for wellness and activity tracking platform.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#09090b" }}>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative overflow-hidden py-16 sm:py-24"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.18) 0%, transparent 70%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              {/* Avatar placeholder */}
              <div
                className="w-20 h-20 rounded-2xl shrink-0 flex items-center justify-center text-3xl font-bold"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "#fff" }}
              >
                V
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#7c3aed" }}>
                  About me
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "#fafafa" }}>
                  Nguyen Van Vinh
                </h1>
                <p className="text-base mt-1" style={{ color: "#a1a1aa" }}>
                  Senior Frontend Developer · 5+ years · Ho Chi Minh City
                </p>
              </div>
            </div>

            <div
              className="p-6 rounded-2xl text-base leading-relaxed"
              style={{ background: "#18181b", border: "1px solid #27272a", color: "#a1a1aa" }}
            >
              <p className="mb-3">
                Hey — I&apos;m Vinh. I&apos;ve spent the last 5+ years building frontend products across web and mobile,
                mostly in the React ecosystem. I got my start at{" "}
                <span style={{ color: "#fafafa" }}>TEKIFY</span>, leveled up at{" "}
                <span style={{ color: "#fafafa" }}>MOR Software</span> where I led a React Native team,
                and now work independently as a freelance developer.
              </p>
              <p className="mb-3">
                I started <span style={{ color: "#a78bfa" }}>CHAEI PUEI Tech</span> because I was tired of reading
                reviews that felt like marketing copy. Everything here is based on tools I actually use and
                build with — Next.js for this site, Vercel for hosting, Cursor for my daily IDE, and so on.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m probably testing a new productivity stack or figuring out
                why my Lighthouse score dropped by 3 points.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-14">

          {/* Experience */}
          <section>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#fafafa" }}>Experience</h2>
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-3 top-2 bottom-2 w-px"
                style={{ background: "linear-gradient(to bottom, #7c3aed, transparent)" }}
              />
              <div className="space-y-6 pl-10">
                {experience.map((job) => (
                  <div key={job.company + job.period} className="relative">
                    {/* Dot */}
                    <div
                      className="absolute -left-7 top-1.5 w-2.5 h-2.5 rounded-full"
                      style={{
                        background: job.current ? "#7c3aed" : "#3f3f46",
                        boxShadow: job.current ? "0 0 8px #7c3aed" : "none",
                      }}
                    />
                    <div
                      className="p-4 rounded-xl"
                      style={{ background: "#18181b", border: "1px solid #27272a" }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <div>
                          <span className="font-semibold text-sm" style={{ color: "#fafafa" }}>
                            {job.role}
                          </span>
                          <span className="mx-2" style={{ color: "#3f3f46" }}>·</span>
                          <span className="text-sm" style={{ color: "#7c3aed" }}>{job.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {job.current && (
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-medium"
                              style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa" }}
                            >
                              Current
                            </span>
                          )}
                          <time className="text-xs" style={{ color: "#52525b" }}>{job.period}</time>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#71717a" }}>
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#fafafa" }}>Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((group) => (
                <div
                  key={group.group}
                  className="p-4 rounded-xl"
                  style={{ background: "#18181b", border: "1px solid #27272a" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#52525b" }}>
                    {group.group}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: "rgba(124,58,237,0.1)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#fafafa" }}>Education</h2>
            <div
              className="p-5 rounded-xl flex items-center gap-4"
              style={{ background: "#18181b", border: "1px solid #27272a" }}
            >
              <div
                className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-2xl"
                style={{ background: "rgba(8,145,178,0.12)" }}
              >
                🎓
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: "#fafafa" }}>FPT University</p>
                <p className="text-sm" style={{ color: "#a1a1aa" }}>Software Engineering</p>
                <p className="text-xs mt-0.5" style={{ color: "#52525b" }}>2018 — 2022</p>
              </div>
            </div>
          </section>

          {/* Notable Projects */}
          <section>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#fafafa" }}>Notable Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="p-4 rounded-xl"
                  style={{ background: "#18181b", border: "1px solid #27272a" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-sm" style={{ color: "#fafafa" }}>{project.name}</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(8,145,178,0.12)", color: "#22d3ee" }}
                    >
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#71717a" }}>{project.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#fafafa" }}>Get in touch</h2>
            <div
              className="p-6 rounded-2xl text-center"
              style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.2)" }}
            >
              <p className="text-sm mb-4" style={{ color: "#a1a1aa" }}>
                Open to freelance projects, collaborations, or just talking tech.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:ngvinh.work@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
                >
                  ngvinh.work@gmail.com
                </a>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{ border: "1px solid #27272a", color: "#a1a1aa" }}
                >
                  Read the blog →
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
