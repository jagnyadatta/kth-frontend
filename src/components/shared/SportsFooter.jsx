import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { useTheme } from "../../context/ThemeContext" // Adjust path as needed

export function SportsFooter() {
  const { theme } = useTheme()
  const footerSections = [
    {
      title: "Shop",
      links: ["Men's Collection", "Women's Collection", "Kids' Collection", "New Arrivals", "Sale Items"],
    },
    {
      title: "Support",
      links: ["Size Guide", "Shipping Info", "Returns", "FAQ", "Contact Us"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Sustainability", "Partnerships"],
    },
  ]

  return (
    <footer className="bg-card border-t selection:bg-[#ff8c00]/80 selection:text-white" 
            style={{ backgroundColor: theme.bgPrimary, borderColor: theme.border }}>
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="rounded-lg p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-2" style={{ color: theme.accent }}>Stay in the Game</h3>
          <p className="mb-6 max-w-md mx-auto" style={{ color: theme.textSecondary }}>
            Get the latest updates on new products, exclusive offers, and athletic inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              placeholder="Enter your email" 
              className="flex-1 outline-none border-1 p-2 rounded-sm" 
              style={{ 
                borderColor: theme.textSecondary,
                color: theme.textSecondary,
                backgroundColor: theme.bgPrimary
              }}
            />
            <button 
              className="cursor-pointer px-6 py-2 rounded-md transition-colors duration-200" 
              style={{ 
                backgroundColor: theme.bgSecondary,
                color: theme.textSecondary
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = theme.accent;
                e.target.style.color = theme.textPrimary;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = theme.bgSecondary;
                e.target.style.color = theme.textSecondary;
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold" style={{ color: theme.accent }}>KTH Sports</span>
            </div>
            <p className="mb-6 max-w-sm" style={{ color: theme.textSecondary }}>
              Empowering athletes worldwide with premium sportswear and equipment. Your journey to greatness starts
              here.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm" style={{ color: theme.textSecondary }}>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" style={{ color: theme.accent }} />
                <span>1-800-SPORT-ZONE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" style={{ color: theme.accent }} />
                <span>support@sportzone.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" style={{ color: theme.accent }} />
                <span>123 Athletic Ave, Sports City, SC 12345</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4" style={{ color: theme.accent }}>{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link} className="hover:scale-102">
                    <a
                      href="#"
                      className="transition-colors duration-200 text-sm"
                      style={{ color: theme.textSecondary }}
                      onMouseOver={(e) => e.target.style.color = theme.accent}
                      onMouseOut={(e) => e.target.style.color = theme.textSecondary}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div 
          className="pt-5 flex flex-col md:flex-row justify-between items-center gap-4" 
          style={{ borderColor: theme.textSecondary, color: theme.textSecondary }}
        >
          <div className="text-sm">© 2025 KTH Sports. All rights reserved.</div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm">Follow us:</span>
            <div className="flex gap-2">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="h-8 w-8 rounded-md flex items-center justify-center transition-colors duration-200"
                  style={{ color: theme.textSecondary, borderColor: theme.textSecondary }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = theme.accent;
                    e.target.style.color = theme.textPrimary;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = theme.textSecondary;
                  }}
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex gap-4 text-sm">
            <a 
              href="#" 
              className="transition-colors"
              style={{ color: theme.textSecondary }}
              onMouseOver={(e) => e.target.style.color = theme.accent}
              onMouseOut={(e) => e.target.style.color = theme.textSecondary}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="transition-colors"
              style={{ color: theme.textSecondary }}
              onMouseOver={(e) => e.target.style.color = theme.accent}
              onMouseOut={(e) => e.target.style.color = theme.textSecondary}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}