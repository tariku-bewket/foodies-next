'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './nav-link.module.css';

export default function NavLink({ href, children }) {
  const currentPath = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={
          currentPath.startsWith(href)
            ? `${classes.active} ${classes.link}`
            : classes.link
        }
      >
        {children}
      </Link>
    </li>
  );
}
