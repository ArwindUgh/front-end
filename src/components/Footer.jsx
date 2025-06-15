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
      className="bg-gradient-to-tr from-[#1B0033] via-[#32004B] to-[#D43F00] text-white border-t-8 border-[#FFC107]"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-[#003366] rounded-lg text-black mr-2">
                TELEVISION
              </span>
              SHOW
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
                  ARTICLES
                </Footer.Link>
                <Footer.Link
                  className="text-white hover:text-[#FFC107] transition"
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TELEVISION SHOW
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-[#FFC107]" title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  className="text-white hover:text-[#FFC107] transition"
                  href="https://www.instagram.com/_television_show?igsh=MXRpamZyaGNscHdzbA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Footer.Link>
                <Footer.Link
                  className="text-white hover:text-[#FFC107] transition"
                  href="https://www.facebook.com/share/16d9yKXMwU/"
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
            by="Television show"
            year={new Date().getFullYear()}
            className="text-white"
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              className="hover:text-[#FFC107] transition"
              href="https://www.facebook.com/share/16d9yKXMwU/"
              icon={BsFacebook}
            />
            <Footer.Icon
              className="hover:text-[#FFC107] transition"
              href="https://www.instagram.com/_television_show?igsh=MXRpamZyaGNscHdzbA=="
              icon={BsInstagram}
            />
            <Footer.Icon
              className="hover:text-[#FFC107] transition"
              href="https://x.com/ArvindUghrejiya?s=08"
              icon={BsTwitter}
            />
            <Footer.Icon
              className="hover:text-[#FFC107] transition"
              href="https://github.com/"
              icon={BsGithub}
            />
            <Footer.Icon
              className="hover:text-[#FFC107] transition"
              href="https://youtube.com/@televisionshow25?si=MYgBqtYSo1MlBPKh"
              icon={BsYoutube}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
