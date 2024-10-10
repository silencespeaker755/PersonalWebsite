import React, { useState, useEffect } from "react";
import { ArticleContentList, PersonalIntro } from "./Text/ConstantText";
import ArticleBlock from "./components/Home/ArticleBlock";
import $ from "jquery";

export default function HomeBlock() {
  const [fullHeight, setFullHeight] = useState(window.innerHeight + 15);

  useEffect(() => {
    const resize_window = () => {
      setFullHeight(window.innerHeight + 15);
    };
    window.addEventListener("resize", resize_window);

    return () => {
      window.removeEventListener("resize", resize_window);
    };
  }, []);

  return (
    <div id="colorlib-main">
      <div
        className="hero-wrap js-fullheight"
        style={{
          backgroundImage: "url(images/bg_1.jpg)",
          height: fullHeight,
        }}
        data-stellar-background-ratio="0.7"
      >
        <div className="overlay"></div>
        <div
          className="js-fullheight d-flex justify-content-center align-items-center"
          style={{ height: fullHeight }}
        >
          <div className="col-md-8 text text-center">
            <div
              className="img mb-4"
              style={{ backgroundImage: PersonalIntro.avatarURL }}
            ></div>
            <div className="desc">
              <h2 className="subheading">Hello I'm</h2>
              <h1 className="mb-4">{PersonalIntro.name}</h1>
              <p className="mb-4">{PersonalIntro.description}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div
              id="article"
              className="col-md-7 heading-section text-center ftco-animate"
            >
              <h2 className="mb-4">Poster</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country.
              </p>
            </div>
          </div>

          <div className="row">
            {ArticleContentList.map((el, index) => (
              <ArticleBlock
                key={`${el.title}-${index}`}
                imageUrl={el.imageUrl}
                label={el.label}
                title={el.title}
                paragraph={el.paragraph}
                srcUrl={el.src}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
