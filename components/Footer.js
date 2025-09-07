import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} SOSA Consulting</div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/company/108319345/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={22} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61579169464417" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size={22} />
          </a>
          <a href="https://www.instagram.com/sosacsind/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}