import { Link } from "react-router-dom";
import { ArrowRight, FileText, Landmark, Users, MapPinned, Recycle, School, Baby } from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import SEO from "../components/SEO";
import { siteData, schemes, services, works, notices, governmentLeadership } from "../data/siteData";

export default function Home() {
  return (
    <>
      <SEO title="मुख्यपृष्ठ" path="/" description="ग्रुप ग्रामपंचायत कोंढाण, ता. जि. पालघर यांचे अधिकृत नागरिक माहिती पोर्टल." />
      <HeroSlider />
      <section className="quick container">
        {[
          [FileText, "नागरिक सेवा", "/services"],
          [Landmark, "शासकीय योजना", "/schemes"],
          [Users, "पदाधिकारी", "/members"],
          [MapPinned, "गावाचा नकाशा", "/map"]
        ].map(([I, t, l]) => (
          <Link className="quick-card" to={l} key={t}>
            <I /><span>{t}</span><ArrowRight size={16} />
          </Link>
        ))}
      </section>

      <section className="section container">
        <div className="section-head">
          <div><span className="eyebrow">गावाची ओळख</span><h2>ग्रुप ग्रामपंचायत कोंढाण</h2></div>
          <Link to="/about">अधिक माहिती <ArrowRight size={16} /></Link>
        </div>
        <div className="intro-grid">
          <div className="info-card large">
            <h3>नागरिकांसाठी एकाच ठिकाणी माहिती</h3>
            <p>ग्रामपंचायत, नागरिक सेवा, शासकीय योजना, विकासकामे, सूचना, शाळा आणि गावाशी संबंधित महत्त्वाची माहिती एका ठिकाणी उपलब्ध करून देण्यासाठी हे पोर्टल तयार केले आहे.</p>
            <div className="pill-row"><span>पालघर</span><span>महाराष्ट्र</span><span>घापशीपाडा</span></div>
          </div>
          <div className="stat-card"><Users /><strong>{siteData.population.total.toLocaleString("en-IN")}</strong><span>लोकसंख्या (२०११)</span></div>
          <div className="stat-card"><School /><strong>{siteData.schoolCount}</strong><span>शाळा</span></div>
          <div className="stat-card"><Baby /><strong>{siteData.anganwadiCount}</strong><span>अंगणवाडी</span></div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">महत्त्वाचे मान्यवर</span><h2>शासकीय नेतृत्व</h2></div></div>
          <div className="card-grid leadership-grid">
            {governmentLeadership.map((p, i) => (
              <div className="feature-card leadership-card" key={i}>
                <img className="leadership-photo" src={p.photo} alt={p.name} onError={(e) => { e.target.style.display = "none"; }} />
                <span className="tag">{p.designation}</span>
                <h3>{p.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div><span className="eyebrow">नागरिकांसाठी</span><h2>महत्त्वाच्या सेवा</h2></div>
          <Link to="/services">सर्व सेवा <ArrowRight size={16} /></Link>
        </div>
        <div className="card-grid">
          {services.slice(0, 5).map((s) => (
            <Link to="/services" className="feature-card" key={s.id}>
              <FileText /><h3>{s.title}</h3><p>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">शासकीय मदत</span><h2>महत्त्वाच्या योजना</h2></div>
            <Link to="/schemes">सर्व योजना <ArrowRight size={16} /></Link>
          </div>
          <div className="card-grid">
            {schemes.map((s) => (
              <Link to="/schemes" className="feature-card" key={s.title}>
                <Landmark /><small>{s.category}</small><h3>{s.title}</h3><p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div><span className="eyebrow">ग्रामविकास</span><h2>विकासकामे</h2></div>
          <Link to="/works">सर्व कामे <ArrowRight size={16} /></Link>
        </div>
        <div className="work-grid">
          {works.map((w) => (
            <div className="work-card" key={w.title}>
              <span className={w.status === "पूर्ण" ? "status done" : "status"}>{w.status}</span>
              <h3>{w.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">अद्ययावत</span><h2>सूचना</h2></div>
            <Link to="/notices">सर्व सूचना <ArrowRight size={16} /></Link>
          </div>
          <div className="notice-list">
            {notices.map((n) => (
              <div className="notice-row" key={n.id}>
                <span>{n.date}</span>
                <div><strong>{n.title}</strong><p>{n.text}</p></div>
                <span className="status">{n.priority}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta">
          <div>
            <Recycle />
            <h2>स्वच्छ गाव, समृद्ध गाव</h2>
            <p>कचरा विलगीकरण आणि स्वच्छतेबाबत नागरिकांचा सहभाग महत्त्वाचा आहे.</p>
          </div>
          <Link className="btn btn-light" to="/about">स्वच्छता माहिती</Link>
        </div>
      </section>
    </>
  );
}
