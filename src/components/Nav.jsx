import { hamburger } from "./../assets - Copy/icons";
import { headerLogo } from "./../assets - Copy/images";
import { navLinks } from "../constants/index";

export default function Nav() {
    return (
        <header className="padding-x py-8 absolute w-full z-10">
            <nav className="flex justify-between">
                <a href="/">
                    <img src={headerLogo} alt="nike-logo" />
                </a>
                <ul className="flex justify-center items-center lg:gap-10 xl:gap-16 flex-1 max-lg:hidden">
                    {navLinks.map((nav) => (
                        <li key={nav.label}>
                            <a
                                href={nav.href}
                                className="font-montserrat text-lg text-slate-gray leading-normal"
                            >
                                {nav.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <h3 className="font-palanquin font-bold text-lg tracking-wide max-lg:hidden me-6 text-gray-600">
                    Login/Sign Up
                </h3>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="menu" className="w-7 h-6" />
                </div>
            </nav>
        </header>
    );
}
