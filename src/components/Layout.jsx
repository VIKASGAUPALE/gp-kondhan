import { NavLink, Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { siteData } from "../data/siteData";

const nav = [
  ["/", "मुख्यपृष्ठ"], ["/about", "ग्रामपंचायत"], ["/members", "पदाधिकारी"],
  ["/schemes", "योजना"], ["/services", "नागरिक सेवा"],
  ["/works", "विकास कामे"], ["/notices", "सूचना"], ["/gallery", "गॅलरी"],
  ["/dashboard", "गाव माहिती"], ["/map", "नकाशा"], ["/downloads", "डाउनलोड"], ["/contact", "संपर्क"]
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  const [en, setEn] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>महाराष्ट्र शासन • पंचायत समिती {siteData.panchayatSamitiMr} • जिल्हा {siteData.districtMr}</span>
          <span>नागरिकांसाठी माहिती व सेवा</span>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Link className="brand" to="/">
            <div className="brand-mark">GP</div>
            <div>
              <strong>{en ? siteData.nameEn : siteData.nameMr}</strong>
              <small>{siteData.talukaMr}, जि. {siteData.districtMr}</small>
            </div>
          </Link>
          <div className="header-actions">
            <button className="icon-btn" onClick={() => setEn(!en)} title="Language">
              <Languages size={18} /><span className="lang-label">{en ? "मराठी" : "English"}</span>
            </button>
            <button className="icon-btn" onClick={() => setDark(!dark)} title="Theme">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="icon-btn mobile-only" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <nav className={`nav ${open ? "nav-open" : ""}`}>
          <div className="container nav-inner">
            {nav.map(([to, label]) => (
              <NavLink key={to} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")} to={to}>
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>{siteData.nameMr}</h3>
            <p>{siteData.address}</p>
            <p>Landmark: {siteData.landmark}</p>
          </div>
          <div>
            <h4>जलद दुवे</h4>
            <Link to="/services">नागरिक सेवा</Link>
            <Link to="/schemes">शासकीय योजना</Link>
            <Link to="/notices">सूचना</Link>
            <Link to="/members">पदाधिकारी</Link>
          </div>
          <div>
            <h4>संपर्क</h4>
            <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} {siteData.nameMr}. सर्व हक्क राखीव.</div>
      </footer>
    </>
  );
}
