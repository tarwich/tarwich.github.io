import { geistSans } from '@/components/fonts';
import PrinterPaper from '@/components/printer-paper';
import { Icon } from '@/components/simple-icon';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { ComponentProps } from 'react';
import { siGithub } from 'simple-icons';
import { parse as parseYaml } from 'yaml';
import Background from './_components/background';
import { Header } from './_components/header';
import { Obfuscate } from './_components/obfuscate';
import { encrypt } from './_components/obfuscate.crypto';

const SKILLS = [
  'C++',
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Docker',
  'Git',
  'CI/CD',
  'AWS',
  'Azure',
  // People skills
  'Mediating',
  'Teaching',
  'Conflict Resolution',
];

type IWorkHistory = {
  company: string;
  title: string;
  start: string;
  activities: string[];
};

const WORK_HISTORY: IWorkHistory[] = parseYaml(`
- company: VoidRay → Vega Studio
  title: Senior Technical Lead
  start: 2015-12-30
  activities:
    - Architected and implemented pharmacy automation system that reduced operational costs by $200K+ annually while significantly improving patient satisfaction metrics and prescription accuracy
    - Designed and deployed automated continuous integration/continuous deployment (CI/CD) pipeline, streamlining release management and reducing deployment risks while maintaining quality controls
    - Developed forensic analysis tool utilizing WebGL to visualize and analyze organizational communication patterns, supporting fraud investigation and risk management initiatives
    - Created enterprise vulnerability assessment dashboard for the DoD to monitor and track software security risks across organization
    - Led development of network traffic visualization tool for AWS environments, enabling rapid identification of potential security threats and data leakage
    - Spearheaded development of geographic threat intelligence platform to analyze and visualize security risks based on internet traffic patterns
    - Engineered VPN security group management solution using Sankey diagrams, streamlining access control administration
    - Partnered with Infosight to develop advanced memory-based threat detection software
    - Designed and implemented omnichannel retail platform integrating online and brick-and-mortar inventory management
    - Established automated QA testing environment, reducing testing cycle time and improving release quality through systematic validation procedures

- company: KloudNation
  title: Software Developer
  start: 2014-12-31
  activities:
    - Architected and implemented an auto-scaling web scraping system to aggregate and compare auto parts pricing across major retailers (NAPA, AutoZone, O'Reilly, Firestone)
    - Designed and developed a web-based analytics platform that consolidated vendor datasets and generated comparative pricing reports
    - Built a cross-platform (iOS/Android) augmented reality application utilizing beacon technology for compliance monitoring and retail display verification

- company: VoidRay Co
  title: Senior Software Architect
  start: 2011-12-31
  activities:
    - Developed HIPAA-compliant SaaS application enabling physicians to access comprehensive office database remotely, empowering data-driven decision-making through detailed profitability and geographical analysis
    - Created advanced web analytics SaaS platform simplifying complex marketing performance tracking, allowing users to effectively evaluate campaign effectiveness and optimize advertising investments
    - Engineered migration tool facilitating seamless customer transition from WooCommerce to Shopify while preserving complete transaction history
    - Designed automated financial analysis tool for 401k management, integrating complex web scraping techniques to optimize portfolio management across multiple banking platforms
    - Collaborated with BrainSpace to develop advanced computer forensics visualization platform, providing comprehensive network data exploration and suspicious activity detection capabilities

- company: Symfono Corporation
  title: Software Development Team Lead
  start: 2009-12-31
  activities:
    - Led a cross-functional team of four engineers and designers in developing an innovative augmented reality application enabling social media friend visualization in real-world environments with configurable object and advertisement placement
    - Guided team in engineering a sophisticated server synchronization system capable of mirroring data from diverse server architectures
    - Directed development of an iOS GUI prototype that accelerated iPhone application interface development
    - Spearheaded the implementation of an advanced streaming data compression algorithm to optimize binary data transmission in statically typed environments, enabling real-time data display in dynamic C++ applications
    - Architected comprehensive application server with advanced features including role-based access controls, device-specific protocol versioning, and secure scenegraph data streaming to iOS devices

- company: Odyssey Communications Group
  title: Software Developer
  start: 2009-07-31
  activities:
    - Architected comprehensive digital scoreboard server and client system enabling real-time game information tracking across network using PureMVC and ActionScript 3
    - Diagnosed and resolved critical server stability issue, preventing potential data loss and eliminating 8 hours of weekly productivity bottlenecks
    - Executed seamless migration of 600 customer accounts to new server infrastructure with minimal 7-minute total downtime, ensuring data integrity and improved system scalability
    - Developed and maintained video streaming server infrastructure in COLO environment, including video transcoding and comprehensive media management
    - Leveraged deep technical expertise in OSX core architecture to implement robust and reliable software solutions

- company: Pursuant Group
  title: Software Developer
  start: 2008-07-30
  activities:
    - Collaborated with 15-member development team to design and implement flagship rich internet application for social networking platform
    - Facilitated cross-functional team integration by emphasizing effective communication and collaborative work strategies
    - Independently pursued advanced training in Flex and PureMVC, subsequently presenting key insights to team
    - Demonstrated strategic learning approach by translating personal professional development into team-wide skill enhancement
    - Achieved $6,000 in training cost savings through innovative knowledge-sharing methodology

- company: United States Air Force
  title: Communications and Computer Systems Project Manager
  start: 2002-12-31
  activities:
    - Trained 600+ personnel in Oracle-based telecommunications management software
    - Established new airfield security system, successfully overcoming three previous unsuccessful implementation attempts
    - Instructed seven advanced computer programming classes in object-oriented languages C++ and Java
    - Executed 7 mission-critical projects for aircraft monitoring systems integrated with base network infrastructure
    - Managed comprehensive communications infrastructure records, documenting network topology and 3D geospatial network structure, including detailed internal facility wiring
    - Implemented IPv6-compatible network architecture enabling converged voice and data transmission in preparation for Voice Over IP technology
    - Upgraded Telecommunications Management Server to support network infrastructure spanning 27,000+ phones and computer systems
    - Certified as CPR Instructor with additional expertise in Field Triage, First Aid, Biological Defense, and Explosive Ordnance management
    - Delivered specialized training in combat preparation, weapons systems utilization and maintenance, and tactical operations

- company: Cantex Management
  title: Information Technology Specialist
  start: 2000-12-31
  activities:
    - Administered Microsoft Windows Server 2003 network infrastructure supporting multiple retail locations across 7 states
    - Designed and implemented a comprehensive net-centric video surveillance system to enhance multi-state retail store security and monitoring
    - Developed web-based interactive training platform, enabling employees to access professional development resources remotely
    - Optimized IT resources to support business operations with efficient server management and scalable technology solution

- company: Nortel Networks
  title: Technical Documentation and Systems Development Intern
  start: 1999-05-25
  activities:
    - Engineered an automated document conversion utility that eliminated 200+ manual labor hours, dramatically improving departmental efficiency
    - Designed and implemented enterprise-level internal systems, including a comprehensive issue tracking platform and centralized training room reservation application
    - Standardized technical documentation processes by transforming legacy training manuals from PostScript to SGML, ensuring consistent formatting and accessibility
    - Supported mission-critical operations through proactive maintenance of industrial printing infrastructure
    - Delivered targeted SGML training to technical team, enhancing department-wide documentation capabilities
    - Created web-based Trouble Management System to integrate with Remedy Software and decentralize help-desk operations

- company: CBWE Communications → Grand Avenue Broadband
  title: Network Engineer
  start: 2023-12-31
  activities:
    - Deploy and maintain high-capacity point-to-point microwave communications systems utilizing UniFi and Ubiquiti equipment, achieving 6gbps throughput across metropolitan distances
    - Hold current Tower Climber and Rescue certifications, performing elevated infrastructure maintenance and equipment installations
    - Manage network backbone infrastructure with focus on security implementation and maintaining 99.99% uptime SLA
    - Monitor and optimize network traffic patterns to ensure optimal routing and filtering of malicious traffic
    - Developed full-stack network monitoring solution using React, NextJS, and PostgreSQL to enable proactive maintenance through real-time visualization of network nodes and performance metrics
    - Implemented predictive analytics system for early detection of potential network degradation and service interruptions

- company: Botisimo → OpTic Gaming
  title: Software Engineer
  start: 2021-12-31
  activities:
    - Architected and implemented a cross-platform chatbot solution integrating multiple streaming services (Twitch, Trovo, YouTube, Facebook, Discord), featuring customizable stream overlays and interactive viewer engagement tools
    - Developed comprehensive viewer engagement features including real-time polls, automated giveaways, multi-platform chat synchronization, and rewards system management
    - Engineered customer analytics platform utilizing Twilio Segment for data mapping and visualization, enabling targeted email marketing campaigns and user retention initiatives
    - Created fundraising campaign management system supporting multi-platform donation tracking, real-time goal visualization, and automated donor recognition features
    - Designed and implemented browser-based overlay system compatible with OBS, featuring customizable animations and interactive elements

- company: SammyD LLC
  title: Owner and Principle Developer
  start: 2020-12-30
  activities:
    - Successfully delivered platform to multiple high schools, meeting state educational standards while providing practical cybersecurity training
    - Developed TEA-compliant curriculum delivery system featuring interactive content, video integration, and automated assessment capabilities
    - Engineered secure, browser-accessible virtual lab environments in AWS, enabling students to safely analyze malware and virus behavior in isolated networks
    - Created containerized cybersecurity training environments that allowed hands-on experience with threat analysis while maintaining strict security protocols
    - Designed and implemented a comprehensive e-learning platform for cybersecurity education, contracted by Coherent Cyber

- company: Focus Ministries → GoMethod
  title: Software Engineer
  start: 2018-12-31
  activities:
    - Developed and implemented a mission trip management system using Angular, C# and .NET, streamlining the coordination of travel requirements, documentation tracking, and deadline management for team leaders
    - Created an automated document processing solution utilizing React, C# and .NET, incorporating multiple AI services (Google Cloud Vision, Microsoft Azure AI, Amazon Mechanical Turk) to digitize and categorize paper forms through OCR technology
    - Designed and integrated systems that significantly reduced manual data entry and improved organizational efficiency in managing participant documentation and compliance requirements



`);

export default function Resume() {
  return (
    <>
      <div
        className={cn(
          'fixed top-0 w-full h-full overflow-hidden pointer-events-none',
          '-z-10',
          'print:hidden'
        )}
      >
        <Background />
      </div>
      <RabbitHoleLink />
      <div
        className={cn(
          'w-full h-full flex flex-col items-center',
          geistSans.className,
          'text-neutral-700'
        )}
      >
        <PrinterPaper className="w-[8in] p-0">
          <Header />

          <div className="flex flex-row">
            {/* Left Column */}
            <div className={cn('flex-1', 'flex flex-col', 'print:border-none')}>
              {/* Contact Information */}
              <div
                className={cn(
                  'p-4 border-amber-950/30 border-r border-y rounded-r-lg',
                  'flex flex-col gap-3'
                )}
              >
                <h2 className="text-md font-bold uppercase">
                  Contact Information
                </h2>
                <BasicBio />
              </div>

              {/* Professional Summary */}
              <div
                className={cn(
                  'p-4 border-amber-950/30 border-b border-r rounded-r-lg',
                  'flex flex-col gap-1'
                )}
              >
                <h2 className="text-md font-bold uppercase">About Me</h2>
                <p className="leading-relaxed">
                  Driven by tackling unprecedented challenges and galvanizing
                  teams to achieve the <span className="line-through">im</span>
                  possible. My most fulfilling moments are when I&apos;m able to
                  help others realize their goals.
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-5">
                <div
                  className={cn(
                    'flex flex-col gap-3',
                    'p-4 border-amber-950/30 border-b border-r rounded-r-lg'
                  )}
                >
                  <h2 className="text-md font-bold uppercase">Skills</h2>

                  <ul className="flex flex-row gap-2 flex-wrap">
                    {SKILLS.map((skill) => (
                      <li key={skill} className="border px-2 rounded-full">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Languages */}
              <div className="flex flex-col gap-1">
                <div
                  className={cn(
                    'flex flex-col gap-2',
                    'p-4 border-amber-950/30 border-b border-r rounded-r-lg'
                  )}
                >
                  <h2 className="text-md font-bold uppercase">Languages</h2>
                  <ul className="flex flex-col gap-1">
                    <li className="flex justify-between gap-2 items-center">
                      <span className="flex-grow">English</span>
                      <span className="flex-1 text-neutral-500"> </span>
                      <span className="flex-1 flex flex-row gap-1">●●●●●</span>
                    </li>
                    <li className="flex justify-between gap-2 items-center">
                      <span className="flex-grow">Spanish</span>
                      <span className="flex-1 text-neutral-500 text-sm">
                        Fluent
                      </span>
                      <span className="flex-1 flex flex-row gap-1">●●●●○</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className={cn('flex-2', 'flex flex-col gap-5 pt-5')}>
              <div className={cn('flex flex-col gap-5', 'p-4')}>
                <WorkHistory company="VoidRay Co" title="Engineering Team Lead">
                  <li>
                    Led development of a pharmacy management system that
                    automated prescription processing, insurance verification,
                    billing, and inventory management.
                  </li>
                  <li>
                    Established and maintained a robust CI/CD pipeline with
                    automated testing, reducing deployment and enabling reliable
                    weekly releases.
                  </li>
                  <li>
                    Architected an NLP-based threat detection system for the
                    Department of Defense, implementing advanced algorithms for
                    intent analysis and threat classification.
                  </li>
                </WorkHistory>

                <WorkHistory company="Symfono Corp" title="Lead Developer">
                  <li>
                    Implemented PTAM (Parallel Tracking and Mapping) to achieve
                    AR functionality on single-threaded mobile devices,
                    pioneering AR capabilities before widespread hardware
                    support.
                  </li>
                  <li>
                    Developed GameView, a real-time soccer analytics platform
                    that tracked plays, and player statistics while providing
                    interactive playbook-style visualization tools for coaches.
                  </li>
                </WorkHistory>

                <WorkHistory
                  company="United States Air Force"
                  title="C4ISR Project Manager"
                >
                  <li>
                    Oversaw the implementation of an IPv6 compatible network,
                    running voice and data over same infrastructure in
                    preparation for Voice Over IP technology.
                  </li>
                  <li>
                    Led a project to establish a new airfield security system,
                    rivaling three previously failed attempts by security team.
                  </li>
                  <li>
                    Taught computer programming classes in the object oriented
                    languages C++ and Java.
                  </li>
                </WorkHistory>
              </div>
            </div>
          </div>
        </PrinterPaper>

        <div className="break-before-all"></div>

        <div className={cn('w-full mx-auto p-5')}>
          <div className={cn('flex flex-row flex-wrap gap-4')}>
            {/* First Column */}
            <div className={cn('flex flex-col gap-4 flex-1')}>
              {WORK_HISTORY.slice(0, Math.ceil(WORK_HISTORY.length / 3)).map(
                (work) => (
                  <AdditionalWorkHistory
                    key={work.company}
                    company={work.company}
                    title={work.title}
                    start={work.start}
                    activities={work.activities}
                  />
                )
              )}
            </div>

            {/* Second Column */}
            <div className={cn('flex flex-col gap-4 flex-1')}>
              {WORK_HISTORY.slice(
                Math.ceil(WORK_HISTORY.length / 3),
                Math.ceil((WORK_HISTORY.length * 2) / 3)
              ).map((work) => (
                <AdditionalWorkHistory
                  key={work.company}
                  company={work.company}
                  title={work.title}
                  start={work.start}
                  activities={work.activities}
                />
              ))}
            </div>

            {/* Third Column */}
            <div className={cn('flex flex-col gap-4 flex-1')}>
              {WORK_HISTORY.slice(Math.ceil((WORK_HISTORY.length * 2) / 3)).map(
                (work) => (
                  <AdditionalWorkHistory
                    key={work.company}
                    company={work.company}
                    title={work.title}
                    start={work.start}
                    activities={work.activities}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const BasicBio = (props: ComponentProps<'div'>) => {
  return (
    <div
      {...props}
      className={cn('grid gap-2 items-center', props.className)}
      style={{ gridTemplateColumns: 'auto 1fr', ...props.style }}
    >
      <Phone className="w-4 h-4" />
      <Obfuscate text={encrypt('(501) 551-4868')} />

      <Mail className="w-4 h-4" />
      <Obfuscate text={encrypt('work@samueldillow.com')} />

      <Icon icon={siGithub} className="w-4 h-4" />
      <span>
        <Link href="https://github.com/tarwich">tarwich</Link>
      </span>
    </div>
  );
};

const WorkHistory = ({
  company,
  title,
  ...props
}: {
  company: string;
  title: string;
} & ComponentProps<'div'>) => {
  return (
    <div
      {...props}
      className={cn('flex flex-col gap-2', props.className)}
      style={{ gridTemplateColumns: 'auto 1fr', ...props.style }}
    >
      <div className="flex flex-row justify-between">
        <h2 className="text-lg font-bold uppercase">{company}</h2>
        <h3 className="text-base font-bold">{title}</h3>
      </div>
      <ul className="flex flex-col gap-3 empty:hidden">{props.children}</ul>
    </div>
  );
};

const AdditionalWorkHistory = ({
  company,
  title,
  activities,
  ...props
}: {
  company: string;
  title: string;
  start: string;
  end?: string;
  activities: string[];
} & ComponentProps<'div'>) => {
  return (
    <PrinterPaper
      {...props}
      className={cn('flex flex-col gap-2', 'w-[500px]', props.className)}
      style={{ gridTemplateColumns: 'auto 1fr', ...props.style }}
    >
      <div className="flex flex-row justify-between">
        <h2 className="text-lg font-bold uppercase">{company}</h2>
        <h3 className="text-base font-bold">{title}</h3>
      </div>
      <ul className="flex flex-col gap-3 empty:hidden">
        {activities?.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
    </PrinterPaper>
  );
};



const RabbitHoleLink = () => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <div
            className={cn(
              'fixed bottom-0 right-0',
              'bg-conic/[in_hsl_longer_hue] from-red-600 to-red-600 opacity-50',
              'group hover:opacity-100',
              'flex flex-col items-center justify-center',
              'w-32 h-32 rounded-full'
            )}
          >
            <Link href="/menu" className="print:hidden relative w-full h-full">
              <svg
                viewBox="0 0 100 100"
                className={cn(
                  'w-full h-full absolute inset-0',
                  'opacity-70 stroke-neutral-900 fill-neutral-700',
                  'group-hover:opacity-40'
                )}
                strokeWidth="12"
              >
                <path
                  d="M50 90
                   A 40 40 0 0 1 50 10
                   A 30 30 0 0 1 50 70
                   A 20 20 0 0 1 50 30
                   A 10 10 0 0 1 50 50"
                />
              </svg>
              <div className="absolute inset-4 flex flex-col items-center justify-center text-center">
                <span className="text-white">Into the rabbit hole</span>
              </div>
            </Link>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Visit my homepage</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// const PastoralCare = (props: ComponentProps<'div'>) => {
//   return (
//     <div
//       {...props}
//       className={cn('flex flex-col gap-5', props.className)}
//       style={{ gridTemplateColumns: 'auto 1fr', ...props.style }}
//     >
//       <div
//         className={cn(
//           'flex flex-col gap-5',
//           'p-5 border-amber-950/30 border-t border-tr rounded-r-lg'
//         )}
//       >
//         <div className="flex flex-col gap-3">
//           <h2 className="text-md font-bold uppercase">Pastoral Care</h2>
//           <div className="flex flex-col gap-2">
//             <p>Led team providing spiritual care to Dallas hospitals:</p>
//             <ul className="list-disc ml-4 flex flex-col gap-1">
//               <li>End-of-life counseling and family support</li>
//               <li>Interfaith spiritual care and guidance</li>
//               <li>Crisis intervention and grief counseling</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
