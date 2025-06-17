import {
  Avatar,
  Button,
  Dropdown,
  Navbar,
  TextInput,
} from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  FaMoon,
  FaSun,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState, useRef, useMemo } from 'react';
import React from 'react';
import logo from './logo.jpg';
import PropTypes from 'prop-types';

const throttle = (func, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    func(...args);
  };
};

const socialLinks = [
  {
    href: 'https://x.com/ArvindUghrejiya?s=08',
    label: 'X',
    icon: <SiX size={20} />,
    position: 'left',
    bg: 'bg-[#1B0033]',
  },
  {
    href: 'https://www.instagram.com/_television_show?igsh=MXRpamZyaGNscHdzbA==',
    label: 'Instagram',
    icon: <FaInstagram size={20} />,
    position: 'left',
    bg: 'bg-pink-600',
  },
  {
    href: 'https://youtube.com/@televisionshow25?si=MYgBqtYSo1MlBPKh',
    label: 'YouTube',
    icon: <FaYoutube size={20} />,
    position: 'right',
    bg: 'bg-red-600',
  },
  {
    href: 'https://www.facebook.com/share/16d9yKXMwU/',
    label: 'Facebook',
    icon: <FaFacebook size={20} />,
    position: 'right',
    bg: 'bg-blue-700',
  },
];

const SocialButton = React.memo(({ href, icon, label, bg }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-10 h-10 group my-1 sm:w-11 sm:h-11"
  >
    <div
      className={`absolute inset-0 rounded-full transition-transform duration-500 origin-left group-hover:-rotate-90 flex items-center justify-center ${bg} text-white`}
    >
      {icon}
    </div>
    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-500">
      {label}
    </div>
  </a>
));

SocialButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  const BACKEND_URL = 'https://back-end-ys5e.onrender.com';

  const leftSocialLinks = useMemo(
    () => socialLinks.filter((link) => link.position === 'left'),
    []
  );
  const rightSocialLinks = useMemo(
    () => socialLinks.filter((link) => link.position === 'right'),
    []
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  useEffect(() => {
    const throttledScroll = throttle(() => {
      const offset = headerRef.current?.offsetHeight || 0;
      setIsSticky(window.scrollY > offset);
    }, 200);
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const handleSignout = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/user/signout`, {
        method: 'POST',
        credentials: 'include',
      });
      const data = await res.json();
      if (!res.ok) console.log(data.message);
      else dispatch(signoutSuccess());
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    navigate(`/search?${urlParams.toString()}`);
  };

  return (
    <div>
      {/* Top Header */}
      <div
        ref={headerRef}
        className={`py-4 px-3 sm:px-6 md:px-10 transition-colors duration-500 ${
          theme === 'dark'
            ? 'bg-black text-white'
            : 'bg-gradient-to-r from-[#0B0033] via-[#8A045C] to-[#003366] text-white'
        }`}
      >
        {/* Social Icons - Left */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col z-40">
          {leftSocialLinks.map((link, i) => (
            <SocialButton key={i} {...link} />
          ))}
        </div>

        {/* Social Icons - Right */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col z-40">
          {rightSocialLinks.map((link, i) => (
            <SocialButton key={i} {...link} />
          ))}
        </div>

        {/* Branding Center */}
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center text-center gap-4 sm:gap-6 px-2">
          <img
            src={logo}
            alt="TellyBeatss Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-yellow-400 shadow-md"
          />
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold flex flex-wrap items-center gap-2">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-[#003366] text-transparent bg-clip-text">
                TELEVISION
              </span>
              <span className="text-white">SHOW</span>
            </h1>
            <p className="text-sm sm:text-base text-white dark:text-gray-400 font-medium">
              From buzz to blockbuster – all your TV highlights in one place!
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div
        className={`w-full z-50 transition-all duration-300 ease-in-out ${
          isSticky ? 'fixed top-0 bg-white dark:bg-gray-900 shadow-lg backdrop-blur-md' : ''
        }`}
      >
        <Navbar
          className={`shadow-md ${
            theme === 'dark'
              ? 'bg-[#1B0033] text-white'
              : 'bg-gradient-to-r from-[#FFDD00] via-[#8A045C] to-[#D43F00] text-white'
          }`}
        >
          {/* Brand + Logo */}
          <Link
            to="/"
            className="flex items-center self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-white"
          >
            <img className="h-12 w-12 mr-2 rounded-full" src={logo} alt="logo" />
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-[#003366] rounded-lg text-white font-bold">
              TELEVISION SHOW
            </span>
            <span className="ml-2 hidden sm:inline text-yellow-200 font-semibold">
              .Com
            </span>
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSubmit} className="hidden lg:block w-64">
            <label htmlFor="search-input" className="sr-only">
              Search
            </label>
            <TextInput
              id="search-input"
              type="text"
              placeholder="Search..."
              rightIcon={AiOutlineSearch}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>

          {/* Right Controls */}
          <div className="flex items-center gap-2 md:order-2">
            <Button
              className="w-10 h-10 lg:hidden"
              color="gray"
              pill
              onClick={() =>
                navigate(`/search?searchTerm=${searchTerm}`)
              }
            >
              <AiOutlineSearch />
            </Button>
            <Button
              className="w-10 h-10"
              color="gray"
              pill
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === 'light' ? <FaSun /> : <FaMoon />}
            </Button>

            {currentUser ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="user"
                    img={currentUser.profilePicture}
                    rounded
                    className="w-10 h-10 object-cover border-2 border-white"
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">@{currentUser.username}</span>
                  <span className="block text-sm font-medium truncate">
                    {currentUser.email}
                  </span>
                </Dropdown.Header>
                <Link to="/dashboard?tab=profile">
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
              </Dropdown>
            ) : (
              <Link to="/sign-in">
                <Button gradientDuoTone="purpleToPink" outline>
                  Sign In
                </Button>
              </Link>
            )}

            <Navbar.Toggle />
          </div>

          {/* Nav Links */}
          <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as="div">
              <Link to="/" className="text-white hover:text-yellow-300 font-semibold transition duration-300">
                Home
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'} as="div">
              <Link to="/about" className="text-white hover:text-yellow-300 font-semibold transition duration-300">
                About
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/projects'} as="div">
              <Link to="/projects" className="text-white hover:text-yellow-300 font-semibold transition duration-300">
                Videos
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>

        {/* Mobile Social Icons */}
        <div className="md:hidden flex flex-wrap justify-center gap-4 py-4 bg-yellow-100 dark:bg-gray-900">
          {socialLinks.map((link, i) => (
            <SocialButton key={i} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}
