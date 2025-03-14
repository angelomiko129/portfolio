import { MdOutlineLocationOn, MdEmail } from "react-icons/md";
import socials from "@constants/socials.ts";

const Footer = () => {
  return (
    <>
      <footer className="font-clashDisplay px-8 sm:px-40">
        <h1>CONTACTS</h1>
        <div className="grid grid-cols-1 gap-10 py-10 text-wrap sm:grid-cols-3">
          <div>
            <div className="flex flex-col gap-4">
              <p className="text-cWhite/50">Email:</p>
              <p className="flex items-center gap-2">
                <MdEmail />
                angelomikobotabara021@gmail.com
              </p>
              <p className="text-cWhite/50">Location:</p>
              <p className="flex items-center gap-2">
                <MdOutlineLocationOn />
                Bulacan, Phillipines
              </p>
            </div>
          </div>
          <div>
            <p className="text-cWhite/50">Socials:</p>
            <ul className="text-fluid-lg font-normal!">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cPink transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-fluid-xl!">Designed and Developed</p>
            <p className="text-fluid-xl!">
              by <span className="text-cPink">Miko</span>
            </p>
            <p className="text-cWhite/50">
              &#169; &nbsp;{new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
