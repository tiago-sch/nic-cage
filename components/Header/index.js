import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderWrapper, HeaderTitle, Nav, NavItem } from './style';

const navLinks = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'GIFs',
    url: '/gifs',
  }
];

const Header = () => {
  const { asPath } = useRouter();

  return (
    <HeaderWrapper as="header">
      <HeaderTitle>Nic Cage</HeaderTitle>
      <Nav>
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
