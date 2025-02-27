import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-20 py-5 text-white z-10">
      <div className="text-2xl font-bold">
        <Image src="/assets/logo-nobg.png" alt="logo" width={80} height={80} />
      </div>
      <ul className="flex ">
        <li className="navItems"><Link href="/home">Home</Link></li>
        <li className="navItems"><Link href="/services">Services</Link></li>
        <li className="navItems"><Link href="/aboutus">About Us</Link></li>
        <li className="navItems"><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
