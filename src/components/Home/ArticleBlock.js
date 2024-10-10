export default function ArticleBlock({
  imageUrl,
  label,
  title,
  paragraph,
  srcUrl,
}) {
  return (
    <div className="col-md-4">
      <div className="blog-entry ftco-animate">
        <a
          href={srcUrl}
          className="img img-2"
          style={{ backgroundImage: imageUrl }}
        ></a>
        <div className="text text-2 pt-2 mt-3">
          {/* <span className="category mb-3 d-block">{label}</span> */}
          <h3 className="mb-4">
            <a href={srcUrl}>{title}</a>
          </h3>
          <p className="mb-4">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
