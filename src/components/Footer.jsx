import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsYoutube,
} from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer
      container
      className="bg-gradient-to-tr from-[#1B0033] via-[#32004B] to-[#FF004D] text-white border-t-8 border-[#FFC107]"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-700 rounded-lg text-black mr-2">
                TELLY BEATSS
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="text-[#FFC107]" title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  className="text-white hover:text-[#FFC107] transition"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blogs
                </Footer.Link>
                <Footer.Link
                  className="text-white hover:text-[#FFC107] transition"
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TELLY BEATSS Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-[#FFC107]" title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  className="text-white hover:text-[#FFC107] transition"
                  href="https://www.instagram.com/extremebollywoodofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Footer.Link>
                <Footer.Link
                  className="text-white hover:text-[#FFC107] transition"
                  href="https://www.facebook.com/profile.php?id=100083955443389"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-[#FFC107]" title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white hover:text-[#FFC107] transition" href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link className="text-white hover:text-[#FFC107] transition" href="#">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="border-[#2E2E38]" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Telly Khabri"
            year={new Date().getFullYear()}
            className="text-white"
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              className="hover:text-[#FFC107] transition"
              href="https://www.facebook.com/profile.php?id=100083955443389"
              icon={BsFacebook}
            />
            <Footer.Icon
              className="hover:text-[#FFC107] transition"
              href="https://www.instagram.com/extremebollywoodofficial"
              icon={BsInstagram}
            />
            <Footer.Icon
              className="hover:text-[#FFC107] transition"
              href="https://twitter.com/"
              icon={BsTwitter}
            />
            <Footer.Icon
              className="hover:text-[#FFC107] transition"
              href="https://github.com/"
              icon={BsGithub}
            />
            <Footer.Icon
              className="hover:text-[#FFC107] transition"
              href="https://youtube.com/@tellykhabri?si=NlqHeFesSN4EW-6E"
              icon={BsYoutube}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
