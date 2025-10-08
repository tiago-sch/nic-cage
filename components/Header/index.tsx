import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Movies",
    url: "/movies",
  },
  {
    title: "GIFs",
    url: "/gifs",
  }
];

const Header = () => {
  return (
    <header className='bg-base-100 shadow-sm'>
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link className="btn btn-ghost px-2 text-xl" href="/">Nic Cage</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map(page => (
              <li key={`link-nav-${page.url}`}>
                <Link href={page.url}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
