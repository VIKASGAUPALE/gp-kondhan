import { useMemo, useState } from "react";
import { Phone, Search, FileText, CheckCircle2, Download, Mail, MapPinned, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import { siteData, members, schemes, services, works, schools, notices, mapPlaces, governmentLeadership, galleryImages } from "../data/siteData";

export function About() {
  return (
    <Page title="ग्रामपंचायतीची माहिती" path="/about" description="ग्रुप ग्रामपंचायत कोंढाण, ता. जि. पालघर यांची प्राथमिक माहिती.">
      <div className="content-grid">
        <article className="info-card">
          <h2>ग्रुप ग्रामपंचायत कोंढाण</h2>
          <p>ही website ग्रुप ग्रामपंचायत कोंढाण यांच्या नागरिक माहिती व सेवांसाठी तयार केलेली static माहिती प्रणाली आहे.</p>
          <p>
            <strong>पत्ता:</strong> {siteData.address}<br />
            <strong>Landmark:</strong> {siteData.landmark}<br />
            पंचायत समिती: {siteData.panchayatSamitiMr}<br />
            तालुका: {siteData.talukaMr}<br />
            जिल्हा: {siteData.districtMr}<br />
            राज्य: {siteData.stateMr}
          </p>
          <p>
            <strong>लोकसंख्या (२०११):</strong> {siteData.population.census2011.toLocaleString("en-IN")}<br />
            <strong>शाळा:</strong> {siteData.schoolCount} (११ + १ आश्रमशाळा)<br />
            <strong>अंगणवाडी:</strong> {siteData.anganwadiCount}
          </p>
        </article>
        <article className="info-card">
          <h2>स्वच्छ भारत मिशन</h2>
          <p>गावातील स्वच्छता, कचरा विलगीकरण आणि जनजागृतीसाठी उपलब्ध माहिती येथे मांडता येईल.</p>
          <img className="content-image" src="/images/slider/waste-centre.jpg" alt="कचरा विलगीकरण केंद्र" />
        </article>
      </div>
    </Page>
  );
}

export function Members() {
  return (
    <Page title="पदाधिकारी" path="/members" description="ग्रुप ग्रामपंचायत कोंढाण येथील पदाधिकारी, सदस्य व कर्मचारी.">
      <div className="member-grid">
        {members.map((m) => (
          <div className="member-card" key={m.id}>
            {m.photo ? (
              <img
                className="member-photo"
                src={m.photo}
                alt={m.name}
                onError={(e) => {
                  e.target.style.display = "none";
                  if (e.target.nextSibling) e.target.nextSibling.style.display = "grid";
                }}
              />
            ) : null}
            <div className="avatar" style={m.photo ? { display: "none" } : undefined}>
              {m.name.replace(/^(श्री\.|सौ\.|कु\.)\s*/, "").slice(0, 1)}
            </div>
            <span className="eyebrow">{m.role}{m.ward ? ` · वॉर्ड ${m.ward}` : ""}</span>
            <h3>{m.name}</h3>
            {m.phone ? (
              <a className="btn btn-outline" href={`tel:${m.phone}`}>
                <Phone size={16} /> संपर्क {m.phone}
              </a>
            ) : (
              <span className="muted">मोबाईल उपलब्ध नाही</span>
            )}
          </div>
        ))}
      </div>
      <p className="muted" style={{ marginTop: 20, textAlign: "center", fontSize: 13 }}>
        कमिटी फोटो: <code>public/images/members/</code> मध्ये first name नुसार (उदा. geeta.jpg, pranita.jpg, nikhil.jpg …) ठेवा.
      </p>
    </Page>
  );
}

export function Schemes() {
  const [q, setQ] = useState("");
  const filtered = schemes.filter((s) => s.title.includes(q) || s.category.includes(q));
  return (
    <Page title="शासकीय योजना" path="/schemes" description="उपलब्ध शासकीय योजनांची प्राथमिक माहिती.">
      <div className="toolbar">
        <div className="search">
          <Search /><input placeholder="योजना शोधा..." value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
      </div>
      <div className="card-grid">
        {filtered.map((s) => (
          <div className="feature-card" key={s.title}>
            <span className="tag">{s.category}</span>
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
            <button className="btn btn-primary" style={{ marginTop: 12 }} onClick={() => alert("ही प्राथमिक client-side माहिती आहे. अधिकृत पात्रता ग्रामपंचायत/शासकीय पोर्टलवर तपासा.")}>
              मी पात्र आहे का?
            </button>
          </div>
        ))}
      </div>
    </Page>
  );
}

export function Services() {
  return (
    <Page title="नागरिक सेवा" path="/services" description="दाखले, नमुना 8/कर आकारणी आणि इतर नागरिक सेवा.">
      <div className="card-grid">
        {services.map((s) => (
          <div className="feature-card" key={s.id}>
            <FileText /><h2>{s.title}</h2><p>{s.desc}</p>
            <p className="muted">आवश्यक कागदपत्रे व प्रक्रिया कार्यालयाकडून निश्चित केली जाऊ शकते.</p>
            <Link className="btn btn-outline" to="/contact">अर्जाबाबत संपर्क</Link>
          </div>
        ))}
      </div>
      <div className="info-card form-card" style={{ marginTop: 20 }}>
        <h2>अर्जाची प्राथमिक माहिती</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("फॉर्मची माहिती तयार झाली. Static website असल्याने database मध्ये साठवली जात नाही."); }}>
          <input required placeholder="पूर्ण नाव" />
          <input required placeholder="मोबाईल क्रमांक" />
          <select><option>सेवा निवडा</option>{services.map((s) => <option key={s.id}>{s.title}</option>)}</select>
          <textarea required placeholder="अर्ज / विनंतीची माहिती" />
          <button className="btn btn-primary">अर्ज तयार करा</button>
        </form>
      </div>
    </Page>
  );
}

export function Works() {
  return (
    <Page title="विकासकामे" path="/works" description="ग्रुप ग्रामपंचायत कोंढाण येथील विकासकामे.">
      <div className="work-grid">
        {works.map((w) => (
          <div className="work-card" key={w.title}>
            <span className={w.status === "पूर्ण" ? "status done" : "status"}>{w.status}</span>
            <h2>{w.title}</h2>
          </div>
        ))}
      </div>
    </Page>
  );
}

export function Notices() {
  const [q, setQ] = useState("");
  const list = useMemo(() => notices.filter((n) => n.title.includes(q) || n.text.includes(q)), [q]);
  return (
    <Page title="सूचना व कार्यक्रम" path="/notices">
      <div className="toolbar">
        <div className="search">
          <Search /><input placeholder="सूचना शोधा..." value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
      </div>
      <div className="notice-list">
        {list.map((n) => (
          <div className="notice-row" key={n.id}>
            <span>{n.date}</span>
            <div><strong>{n.title}</strong><p>{n.text}</p></div>
            <span className="status">{n.priority}</span>
          </div>
        ))}
      </div>
    </Page>
  );
}

export function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [closing, setClosing] = useState(false);
  const [imgFade, setImgFade] = useState(true);

  const open = (img) => {
    setClosing(false);
    setImgFade(true);
    setLightbox(img);
  };

  const close = () => {
    setClosing(true);
    setTimeout(() => {
      setLightbox(null);
      setClosing(false);
    }, 250);
  };

  const currentIdx = lightbox ? galleryImages.findIndex((g) => g.id === lightbox.id) : -1;

  const changeImg = (img) => {
    setImgFade(false);
    setTimeout(() => {
      setLightbox(img);
      setImgFade(true);
    }, 200);
  };

  const prev = () => {
    if (currentIdx > 0) changeImg(galleryImages[currentIdx - 1]);
  };
  const next = () => {
    if (currentIdx < galleryImages.length - 1) changeImg(galleryImages[currentIdx + 1]);
  };

  return (
    <Page title="गॅलरी" path="/gallery" description="ग्रामपंचायत व गावविकास फोटो — क्लिक करून मोठे पहा.">
      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <button
            type="button"
            className="gallery-item"
            key={img.id}
            style={{ animationDelay: `${Math.min(i, 12) * 0.05}s` }}
            onClick={() => open(img)}
          >
            <img src={img.src} alt={img.alt} onError={(e) => { e.target.closest(".gallery-item").style.display = "none"; }} />
            <span className="gallery-zoom">🔍 मोठे पहा</span>
          </button>
        ))}
      </div>
      <p className="muted" style={{ marginTop: 16, textAlign: "center" }}>
        फोटो: <code>public/images/img1.jpeg</code> ते <code>img20.jpeg</code>
      </p>

      {lightbox && (
        <div
          className={`lightbox ${closing ? "lightbox-out" : "lightbox-in"}`}
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button type="button" className="lightbox-close" onClick={close} aria-label="बंद">×</button>
          {currentIdx > 0 && (
            <button type="button" className="lightbox-nav left" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="मागील">‹</button>
          )}
          {currentIdx < galleryImages.length - 1 && (
            <button type="button" className="lightbox-nav right" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="पुढील">›</button>
          )}
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img
              key={lightbox.id}
              className={imgFade ? "lb-img-in" : "lb-img-out"}
              src={lightbox.src}
              alt={lightbox.alt}
            />
            <p className="lightbox-caption">{lightbox.alt} ({currentIdx + 1} / {galleryImages.length})</p>
          </div>
        </div>
      )}
    </Page>
  );
}

export function Dashboard() {
  return (
    <Page title="गावाची माहिती" path="/dashboard" description="लोकसंख्या व सुविधा.">
      <div className="stats-grid">
        <div className="stat-card"><strong>{siteData.population.total.toLocaleString("en-IN")}</strong><span>लोकसंख्या (२०११)</span></div>
        <div className="stat-card"><strong>{siteData.schoolCount}</strong><span>शाळा</span></div>
        <div className="stat-card"><strong>{siteData.anganwadiCount}</strong><span>अंगणवाडी</span></div>
        <div className="stat-card"><strong>{members.length}</strong><span>पदाधिकारी / कर्मचारी</span></div>
      </div>
      <div className="info-card">
        <h2>शाळा</h2>
        <div className="list-grid">
          {schools.map((s) => (
            <div key={s.id}><CheckCircle2 /> {s.name} — {s.classes}</div>
          ))}
        </div>
        <p style={{ marginTop: 12 }}><strong>एकूण:</strong> ११ शाळा + १ आश्रमशाळा = १२</p>
      </div>
      <div className="info-card" style={{ marginTop: 16 }}>
        <h2>अंगणवाडी</h2>
        <p><Baby size={18} style={{ verticalAlign: "middle", marginRight: 6 }} /> एकूण अंगणवाडी केंद्रे: <strong>१३</strong></p>
      </div>
    </Page>
  );
}

export function Schools() {
  return (
    <Page title="गावातील शाळा" path="/schools">
      <div className="card-grid">
        {schools.map((s) => (
          <div className="feature-card" key={s.id}>
            <span className="tag">शाळा</span>
            <h2>{s.name}</h2>
            <p>{s.classes}</p>
          </div>
        ))}
      </div>
      <div className="info-card" style={{ marginTop: 20 }}>
        <h2>अंगणवाडी</h2>
        <p>एकूण अंगणवाडी केंद्रे: <strong>१३</strong></p>
      </div>
    </Page>
  );
}

export function MapPage() {
  return (
    <Page title="गावाचा नकाशा" path="/map" description="ग्रुप ग्रामपंचायत कोंढाण स्थान.">
      <div className="map-placeholder">
        <MapPinned size={42} />
        <h2>ग्रुप ग्रामपंचायत कोंढाण</h2>
        <p>{siteData.address}</p>
        <p>Landmark: {siteData.landmark}</p>
        <a className="btn btn-primary" target="_blank" rel="noreferrer" href={siteData.mapUrl}>
          Google Maps वर उघडा
        </a>
      </div>
      <div className="map-iframe-wrap">
        <iframe
          title="Kondhan Map"
          src={`https://maps.google.com/maps?q=${encodeURIComponent("Kondhan Ghapshipada Palghar")}&z=14&output=embed`}
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: 14 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="card-grid" style={{ marginTop: 20 }}>
        {mapPlaces.map((p) => (
          <div className="feature-card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.type}</p>
          </div>
        ))}
      </div>
    </Page>
  );
}

export function Downloads() {
  return (
    <Page title="डाउनलोड" path="/downloads">
      <div className="info-card">
        <Download />
        <h2>दस्तऐवज उपलब्ध नाहीत</h2>
        <p>PDF files <code>public/documents/</code> मध्ये ठेवल्यानंतर येथे links जोडा.</p>
      </div>
    </Page>
  );
}

export function Contact() {
  return (
    <Page title="संपर्क" path="/contact" description="ग्रुप ग्रामपंचायत कोंढाण संपर्क.">
      <div className="content-grid">
        <div className="info-card">
          <Mail />
          <h2>ई-मेल</h2>
          <a className="contact-link" href={`mailto:${siteData.email}`}>{siteData.email}</a>
          <p style={{ marginTop: 12 }}>
            <strong>पत्ता:</strong> {siteData.address}<br />
            <strong>Landmark:</strong> {siteData.landmark}
          </p>
        </div>
        <div className="info-card">
          <h2>नागरिक तक्रार / अभिप्राय</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert("आपली माहिती तयार झाली. कृपया Email वापरा."); }}>
            <input required placeholder="नाव" />
            <input required placeholder="मोबाईल" />
            <select><option>तक्रार</option><option>अभिप्राय</option><option>सूचना</option></select>
            <textarea required placeholder="तपशील" />
            <button className="btn btn-primary">सबमिट करा</button>
          </form>
        </div>
      </div>
    </Page>
  );
}
