import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HeaderWrapper,
  HeaderTitle,
  ToggleButton,
  ToggleButtonIcon,
  Nav,
  NavItem
} from './style';

const navLinks = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Movies',
    url: '/movies',
  },
  {
    title: 'GIFs',
    url: '/gifs',
  }
];

const Header = () => {
  const { events, asPath } = useRouter();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setNavOpen(false);
    }
    events.on('routeChangeStart', handleRouteChange)
    return () => {
      events.off('routeChangeStart', handleRouteChange)
    }
  }, []);

  return (
    <HeaderWrapper as='header'>
      <HeaderTitle>Nic Cage</HeaderTitle>
      <ToggleButton onClick={() => setNavOpen(!navOpen)}>
        <ToggleButtonIcon/><ToggleButtonIcon/><ToggleButtonIcon/>
      </ToggleButton>
      <Nav $open={navOpen}>
        {navLinks.map(({ title, url }) => (
          <Link key={`nav-${title}`} href={url} passHref>
            <NavItem $active={url === asPath}>
              { title }
            </NavItem>
          </Link>
        ))}
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;
