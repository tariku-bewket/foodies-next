import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import Image from 'next/image';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href='/'>
          <Image src={logoImg} alt='A plate with food on it' priority />
          NextLevel Foods
        </Link>
        <nav className={classes.nav}>
          <ul>
            <NavLink href='/meals'>Meals</NavLink>
            <NavLink href='/community'>Community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
