import SEO from "./SEO";
export default function Page({ title, description, path, children }) {
  return (
    <>
      <SEO title={title} description={description} path={path} />
      <div className="page container">
        <div className="page-heading">
          <span className="eyebrow">ग्रुप ग्रामपंचायत कोंढाण</span>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
        {children}
      </div>
    </>
  );
}
