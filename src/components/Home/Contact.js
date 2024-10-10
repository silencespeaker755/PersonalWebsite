import { PersonalIntro, ContactInfo } from "../../Text/ConstantText";
export default function Contact() {
  return (
    <section
      id="colorlib-main"
      className="contact-container contact-flex-container"
    >
      <div
        className="contact-card"
        style={{
          width: "80%",
          height: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <span className="avatar-container js-fullheight d-flex justify-content-center align-items-center">
          <div className="col-md-8 text text-center">
            <div
              className="avatar-img"
              style={{ backgroundImage: PersonalIntro.avatarURL }}
            ></div>
            <div className="desc" style={{ marginTop: "20px" }}>
              <h3 className="mb-4">{PersonalIntro.name}</h3>
            </div>
          </div>
        </span>
        <div className="info-container">
          <div className="info-item">
            <div className="icon">
              <i className="icon-envelope"></i>
            </div>
            <div className="info-text">{ContactInfo.email}</div>
          </div>
          <div className="info-item">
            <div className="icon">
              <i className="icon-home"></i>
            </div>
            <div className="info-text">{ContactInfo.address}</div>
          </div>
          <div className="info-item">
            <div className="icon">
              <i className="icon-phone"></i>
            </div>
            <div className="info-text">{ContactInfo.phone}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
