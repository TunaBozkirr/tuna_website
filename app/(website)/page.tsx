import { Container } from "@/components/blocks/container";
import { OpenSourceCard } from "@/components/blocks/opensource-card";
import { ProjectCard } from "@/components/blocks/project-card";
import { GitHubIcon, XIcon } from "@/components/blocks/social-icons";
import { SocialLink } from "@/components/blocks/social-link";
import { careerItems } from "@/lib/utils";
import { getGithubInfo, getXInfo } from "@/server/thirdparty";
import Link from "next/link";
import { LinkedinIcon } from "@/components/icons/smashing";

const currentYear = new Date().getFullYear();
const lastPosition = currentYear - careerItems[careerItems.length - 1].from;

export default function Readme() {
  return (
    <>
      <Container className="mt-9">
        <h1 className="tracking-tight text-4xl sm:text-5xl">
          Tuna Bozkir
          <span className="text-muted-foreground font-title font-extralight text-3xl sm:text-4xl block text-balance">
            BI Developer/ Data Analyst
          </span>
          <span className="tracking-tight text-2xl sm:text-2xl font-bold">
            Warsaw / Poland 
          </span>
        </h1>
        <div className="pro text-muted-foreground text-balance">
          <p className="mt-6">
            Hi <span className="text-xl"></span>, I&apos;m Tuna. 👋🏻
          </p>
          <p>
            as a BI Developer / Data Analyst, I specialize in ETL processes, Data Warehouse concepts, 
            and delivering end-to-end Business Intelligence solutions.
          </p>
        <img
        alt="Tuna Bozkir's Profile Picture"
        src= "/changelog/usa3.jpeg"
        decoding="async"
        className="rounded-3xl"/>
        
        </div>
      </Container>
      <Container className="mt-24 md:mt-20">
        <h2 className="text-3xl">Spotlight</h2>
        <p className="text-muted-foreground mb-8 mt-3">
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ProjectCard
            title="Linkedin"
            icon={<LinkedinIcon className="size-10" />}
            description="Follow me on LinkedIn."
            link="https://www.linkedin.com/in/tunabozkir/"
          />
          <ProjectCard
            title="GitHub"
            icon={<GitHubIcon className="size-10" />} // GitHub ikonunu burada ekliyoruz
            description="Check out my projects on GitHub."
            link="https://github.com/TunaBozkirr"
          />
        </div>
      </Container>
      <Container className="mt-24 md:mt-20">
        <div className="mx-auto max-w-xl gap-y-20 lg:max-w-none">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl mb-1">Career</h2>
            <div className="flex flex-col gap-8">
              <p className="text-muted-foreground">
                Overall I have {lastPosition}+ years of experience in IT.
              </p>
              {careerItems.map((item, index) => (
                <div
                  key={`career-${index}`}
                  className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-4"
                >
                  <div className="font-mono flex min-w-24 text-sm text-muted-foreground">
                    {item.from} — {item.to}
                  </div>
                  <div>
                    {item.title} @{item.company.name}
                    <span className="block text-muted-foreground text-sm">
                      {item.location}
                    </span>
                    {item.description && (
                      <p className="mt-2 text-muted-foreground text-base text-balance">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
