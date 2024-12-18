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
      <ul className="flex flex-col gap-3">{props.children}</ul>
    </div>
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
