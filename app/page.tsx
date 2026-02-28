import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { OrganizationCard } from "@/components/OrganizationCard";
import { projects, organizations } from "@/data/content";
import { ArrowDown, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-800 selection:text-white">
      <Navbar />

      <main>
        {/* Hero */}
        <Section className="min-h-screen flex flex-col justify-center pt-24 md:pt-32 relative">
          <div className="max-w-3xl">
            <span className="font-mono text-zinc-500 mb-4 block text-sm md:text-base">
              Hello, I&apos;m
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
              Hasan Hüseyin Kurt{" "}
              <br />
              <span className="text-zinc-500 text-2xl sm:text-4xl md:text-6xl block mt-2">
                AI & Cloud Engineer.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-10">
              Final year Computer Engineering student at Bülent Ecevit
              University. I build AI-powered systems and deploy them on AWS
              using Docker and CI/CD pipelines. Focused on RAG architectures,
              computer vision, and cloud infrastructure.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-zinc-900 text-white border border-zinc-800 font-medium rounded-full hover:bg-zinc-800 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600 hidden md:block">
            <ArrowDown size={24} />
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" className="py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Featured Projects
              </h2>
              <p className="text-zinc-400">
                A selection of projects I&apos;ve built — from AI systems to
                full-stack web apps.
              </p>
            </div>
            <a
              href="https://github.com/hasankurtt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-zinc-500 hover:text-white transition-colors"
            >
              View all on GitHub &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        {/* Organizations */}
        <Section id="organizations" className="py-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Organizations
            </h2>
            <p className="text-zinc-400">
              Communities and teams I&apos;ve been part of during university.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {organizations.map((org) => (
              <OrganizationCard key={org.id} organization={org} />
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" className="py-24 mb-20">
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Let&apos;s Connect
                </h2>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  I&apos;m currently looking for new opportunities as an AI &
                  Software Engineer. Whether you have a question or just want to
                  say hi, I&apos;ll try my best to get back to you!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Mail className="text-zinc-500" size={20} />
                    <a
                      href="mailto:hasankurt051@gmail.com"
                      className="hover:text-white transition-colors"
                    >
                      hasankurt051@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <MapPin className="text-zinc-500" size={20} />
                    <span>Zonguldak / Istanbul, Turkey</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "FastAPI",
                    "Flask",
                    "Django",
                    "React",
                    "TypeScript",
                    "PostgreSQL",
                    "MongoDB",
                    "LangChain",
                    "OpenAI API",
                    "Pinecone",
                    "AWS",
                    "Docker",
                    "OpenCV",
                    "NumPy",
                    "Pandas",
                    "Git",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-md text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Hasan Hüseyin Kurt. All rights reserved.
        </p>
      </footer>
    </div>
  );
}