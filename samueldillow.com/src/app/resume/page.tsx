import { geistSans } from '@/components/fonts';
import { Icon } from '@/components/simple-icon';
import { cn } from '@/lib/utils';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { ComponentProps } from 'react';
import { siGithub } from 'simple-icons';
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
      <div
        className={cn(
          'w-full h-full flex flex-col items-center',
          geistSans.className,
          'text-neutral-700'
        )}
      >
        <div
          className={cn(
            'flex flex-col pt-20',
            'w-[9in] bg-white shadow-black shadow-2xl',
            'print:w-full print:h-full print:bg-transparent print:shadow-none',
            'print:pt-0'
          )}
        >
          <Header />

          <div
            className={cn(
              'p-5 border-amber-950/30 border-b',
              'flex flex-col gap-3'
            )}
          >
            <h2 className="text-md font-bold uppercase">
              Professional Summary
            </h2>
            <p className="leading-relaxed">
              A seasoned technology leader with a track record of pioneering
              innovative solutions at the cutting edge of what&apos;s possible.
              From implementing early AR applications to developing advanced
              threat detection systems, I thrive on tackling unprecedented
              challenges. My greatest satisfaction comes from empowering teams
              to achieve ambitious goals, fostering an environment where
              collaboration drives innovation. I excel in dynamic environments
              where strong teamwork and mutual support are fundamental to
              success.
            </p>
          </div>

          <div className="flex flex-row">
            {/* Left Column */}
            <div className={cn('flex-1', 'flex flex-col', 'print:border-none')}>
              {/* Contact Information */}
              <div
                className={cn(
                  'p-5 border-amber-950/30 border-r border-b rounded-r-lg',
                  'flex flex-col gap-3'
                )}
              >
                <h2 className="text-md font-bold uppercase">
                  Contact Information
                </h2>
                <BasicBio />
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-5">
                <div
                  className={cn(
                    'flex flex-col gap-5',
                    'p-5 border-amber-950/30 border-y border-r rounded-r-lg'
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
              <div className="flex flex-col gap-5">
                <div
                  className={cn(
                    'flex flex-col gap-5',
                    'p-5 border-amber-950/30 border-y border-r rounded-r-lg'
                  )}
                >
                  <div className="flex flex-col gap-3">
                    <h2 className="text-md font-bold uppercase">Languages</h2>
                    <ul className="flex flex-col gap-1">
                      <li className="flex justify-between gap-2 items-center">
                        <span className="flex-grow">English</span>
                        <span className="flex-1 text-neutral-500"> </span>
                        <span className="flex-1 flex flex-row gap-1">
                          ●●●●●
                        </span>
                      </li>
                      <li className="flex justify-between gap-2 items-center">
                        <span className="flex-grow">Spanish</span>
                        <span className="flex-1 text-neutral-500 text-sm">
                          Fluent
                        </span>
                        <span className="flex-1 flex flex-row gap-1">
                          ●●●●○
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pastoral Care */}
              <div className="flex flex-col gap-5">
                <div
                  className={cn(
                    'flex flex-col gap-5',
                    'p-5 border-amber-950/30 border-t border-tr rounded-r-lg'
                  )}
                >
                  <div className="flex flex-col gap-3">
                    <h2 className="text-md font-bold uppercase">
                      Pastoral Care
                    </h2>
                    <div className="flex flex-col gap-2">
                      <p>
                        Led team providing spiritual care to Dallas hospitals:
                      </p>
                      <ul className="list-disc ml-4 flex flex-col gap-1">
                        <li>End-of-life counseling and family support</li>
                        <li>Interfaith spiritual care and guidance</li>
                        <li>Crisis intervention and grief counseling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className={cn('flex-2', 'flex flex-col gap-5')}>
              <div
                className={cn(
                  'flex flex-col gap-5',
                  'p-5 border-amber-950/30 border-l border-t rounded-tl-lg'
                )}
              >
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
                  <li>
                    Developed an enterprise-scale network forensics platform for
                    real-time threat detection and analysis across distributed
                    corporate environments.
                  </li>
                </WorkHistory>

                <WorkHistory company="Symfono Corp" title="Lead Developer">
                  <li>
                    Led a team of four developers and designers in creating AR
                    Stadium, an augmented reality application for sporting
                    events that displayed real-time player and event
                    information.
                  </li>
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
                    Executed seven projects for installing aircraft monitoring
                    systems in (something about coordinating with base network
                    teams).
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
      <h2 className="text-lg font-bold uppercase">{company}</h2>
      <h3 className="text-base font-bold">{title}</h3>
      <ul className="flex flex-col gap-3">{props.children}</ul>
    </div>
  );
};
