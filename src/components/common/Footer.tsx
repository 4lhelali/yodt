import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 bg-accent p-6 text-accent-foreground md:p-3">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Yemeni Students Council"
                width={100}
                height={100}
              />
            </Link>
            <p>
              The main website for the Yemeni students union in Karabuk
              City in Turkey. It serves as a platform for students to connect, share
              resources, and stay updated on the latest news and events. The
              website provides various features including Posts, events and
              calendars to support the academic and
              social needs of Yemeni students.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a
                  href="mailto:info@yemenicouncil.com"
                  className="transition-colors hover:text-primary"
                >
                  info@karabukyodt.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a
                  href="tel:+905555555555"
                  className="transition-colors hover:text-primary"
                >
                  +90 555 555 5555
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>Karabük City - Turkey</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF%D8%A7%D9%84%D8%B7%D9%84%D8%A7%D8%A8%D8%A7%D9%84%D9%8A%D9%85%D9%86%D9%8A%D9%8A%D9%86%D9%83%D8%A7%D8%B1%D8%A7%D8%A8%D9%88%D9%83"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                <YoutubeIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/yod_karabuk/reels/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-accent-foreground/10 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} KarabukYodt
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
