import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Brief Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 relative mr-2 rounded-md overflow-hidden">
                <Image 
                  src="/profile.png" 
                  alt="Sorex Development" 
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-green to-secondary-green">
              Sorex Development
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Custom development solutions for your digital needs.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary-green">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary-green">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-green">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-green">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-primary-green">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-green">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/services#websites" className="text-gray-600 dark:text-gray-300 hover:text-primary-green">
                  Custom Websites
                </Link>
              </li>
              <li>
                <Link href="/services#discord-bots" className="text-gray-600 dark:text-gray-300 hover:text-primary-green">
                  Discord Bots
                </Link>
              </li>
              <li>
                <Link href="/services#minecraft-plugins" className="text-gray-600 dark:text-gray-300 hover:text-primary-green">
                  Minecraft Plugins
                </Link>
              </li>
              <li>
                <Link href="/services#fivem-scripts" className="text-gray-600 dark:text-gray-300 hover:text-primary-green">
                  FiveM Scripts
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:contact@Sorex.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-green">
                  contact@sorex.com
                </a>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.9 3.998c.11.313.168.646.168.998v6l-3.326-2h-2.578v-.004h-5.342v.004H2V5c0-.354.057-.69.17-1.004A3.002 3.002 0 015 2h10c1.262 0 2.341.779 2.791 1.882l.109.116zm1.534 7.478a2.995 2.995 0 01-.534 1.692A3.001 3.001 0 0115 15.002H5a2.999 2.999 0 01-2.9-2.198 3 3 0 01-.168-.998v-1.806h4.166v.004H15V10h2.902l1.531.999v.475l.001.002z" />
                </svg>
                <a href="https://discord.gg/your-server" className="text-gray-600 dark:text-gray-300 hover:text-primary-green">
                  Join our Discord
                </a>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Response time: 24-48 hours</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Sorex Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;