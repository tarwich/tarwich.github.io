'use client';

import { cn } from '@/lib/utils';
import { useInterval } from '@reactuses/core';
import { produce } from 'immer';
import { ComponentProps, useState } from 'react';

const LINES = [
  // Serious lines
  'Started LSB: Record successful boot for GRUB',
  'Reached target Host and Network Name Lookups',
  'Started Thermal Daemon Service',
  'Started WPA supplicant',
  'Finished Remove Stale Online ext Metadata Check Snapshots',
  'Started Network Manager',
  'Started Avahi mDNS/DNS-SD Stack',
  'Started Switcheroo Control Proxy service',
  'Reached target Network',
  'Starting Network Manager Wait Online',
  'Started Make remote CUPS printers available Locally',
  'Starting OpenVPN service',
  'Starting UFW (Uncomplicated Firewall)',
  'Finished UFW firewall configuration',
  'Starting fail2ban service',
  'Started fail2ban service',
  'Starting Apache2 web server',
  'Started Apache2 web server',
  'Starting MariaDB database server',
  'Started MariaDB database server',
  'Starting Redis in-memory cache',
  'Started Redis in-memory cache',
  'Started Service for snap application..anonical-livepatch.canonical-livepatchd',
  'Starting Permit User Sessions',
  'Started Dispatcher daemon for systemd-networkd',
  'Finished OpenVPN service',
  'Finished Permit User Sessions',
  'Starting GNOME Display Manager',
  'Starting Hold until boot process finishes up',
  'Starting Hostname Service',
  'Finished Hold until boot process finishes up',
  'Started Authorization Manager',
  'Starting Modem Manager',
  'Starting Set console scheme',
  'Finished Set console scheme',
  'Created slice system-getty,slice',
  'Started GNOME Display Manager',
  'Started Accounts Service',
  'Started Modem Manager',
  'Started Disk Manager',
  'Started Login Service',
  'Started Unattended Upgrades Shutdoun',
  'Created slice User Slice of UID 1000',
  'Starting User Runtime Directory /run/user/1000',
  'Finished User Runtime Directory /run/user/1000',
  'Starting User Manager for UID 1000',
  // Funny lines
  "Seeing if you're still watching",
  'Wishing there were more attractive computers on the network',
  'Writing an opus on the state of the art in computer science',
  'Reticulating splines',
  'Searching for the cake',
  'The cake is a lie..',
  'The cake is a lie.',
  'The cake is a lie',
];

type Line = {
  text: string;
  /** Delay in milliseconds before the line is displayed */
  delay: number;
  status: keyof typeof STATUS_COLORS;
};

const range = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const scope = (min: number, max: number) => {
  return (percent: number) => {
    return Math.floor(percent * (max - min + 1)) + min;
  };
};

export default function BootSequence(props: ComponentProps<'div'>) {
  const [lines, setLines] = useState<Line[]>([]);

  const interval = useInterval(() => {
    setLines(
      produce((draft) => {
        if (draft.length < LINES.length) {
          draft.push({
            text: LINES[draft.length],
            delay: range(100, scope(1000, 5000)(draft.length / LINES.length)),
            status: draft.length === LINES.length - 1 ? 'FAILED' : 'LOAD',
          });
        }

        if (draft.length >= LINES.length) {
          interval.pause();
        }
      })
    );
  }, 50);

  return (
    <div
      {...props}
      className={cn(
        'font-jetbrains text-sm p-2 text-black',
        'h-full overflow-hidden',
        props.className
      )}
    >
      {lines.map((line) => (
        <Line key={line.text} {...line} />
      ))}
    </div>
  );
}

// Status color keys can only be six characters long
const STATUS_COLORS = {
  OK: 'text-green-600 dark:text-green-500',
  WARN: 'text-yellow-600 dark:text-yellow-500',
  LOAD: 'text-blue-600 dark:text-blue-500',
  FAILED: 'text-red-600 dark:text-red-500',
};

const Line = (initial: Line) => {
  const [expires] = useState(Date.now() + initial.delay);
  const [dots, setDots] = useState(0);
  const [status, setStatus] = useState(initial.status);
  const [isAnimating, setAnimating] = useState(status === 'LOAD');
  const text = initial.text;

  const interval = useInterval(() => {
    if (isAnimating) {
      if (Date.now() > expires) {
        setStatus('OK');
        setAnimating(false);
      }
      setDots((dots) => dots + 1);
    } else {
      interval.pause();
    }
  }, 200);

  return (
    <div className="whitespace-nowrap">
      <span className={cn('opacity-50 mr-2 uppercase')}>
        [
        <span
          className={cn(
            'inline-block w-12 text-center',
            STATUS_COLORS[status as keyof typeof STATUS_COLORS]
          )}
        >
          {status}
        </span>
        ]
      </span>
      {text}
      {dots > 0 && '.'.repeat(dots)}
    </div>
  );
};
