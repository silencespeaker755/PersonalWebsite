import { ExperiencesList } from "../../Text/ConstantText";

export default function Experience() {
  return (
    <section
      id="colorlib-main"
      className="colorlib-experience"
      data-section="experience"
    >
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <h1 className="mb-4">Experience</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              {ExperiencesList.map((el, index) => (
                <article
                  key={`${el.title}-${index}`}
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className={`timeline-icon color-${index + 1}`}>
                      <i className="icon-book"></i>
                    </div>

                    <div className="timeline-label">
                      <h2>
                        {el.title} <span>{el.time}</span>
                      </h2>
                      <p>{el.content}</p>
                    </div>
                  </div>
                </article>
              ))}

              <article
                className="timeline-entry begin animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-none"></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
