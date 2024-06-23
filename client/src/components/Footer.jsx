import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const Footer = () => {
  const [emailContent, setEmailContent] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleInputChange = (event) => {
    setEmailContent(event.target.value);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Assuming you have a backend API to send emails
    const response = await fetch("http://localhost:8000/sameh.khazri09@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: emailContent }),
    });

    if (response.ok) {
      setEmailSent(true);
    } else {
      // Handle error
      console.error("Failed to send email");
    }
  };

  return (
    <footer
      className="bg-light text-center text-lg-start"
      style={{ width: "115%" }}
    >
      {/* Social Media Section */}
      <section className="p-4 border-bottom">
        <div className="container">
          <div className="row justify-content-center d-flex align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="col-md-4 col-12 mb-4 mb-md-0">
                <div data-mdb-input-init className="form-outline">
                  <input
                    value={emailContent}
                    onChange={handleInputChange}
                    type="email"
                    id="form5Example22"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div className="col-md-2 col-12">
                <button type="submit" className="btn btn-primary d-flex mb-6">
                  Subscribe
                </button>
              </div>
            </form>
            {emailSent && <p>Email sent successfully!</p>}
          </div>
          <div className="row mt-4">
            <div className="col">
              <div className="social-icons">
                <a href="#" className="me-4 text-reset">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="me-4 text-reset">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="me-4 text-reset">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>CarFancy
              </h6>
              <p>
                Welcome to CarFancy your go-to for automotive style and passion!
                Explore our curated collection of car accessories, stay updated
                on car competitions, and discover the latest cars available in
                our country. Shop now and embrace the automotive lifestyle
              </p>
            </div>

            <div className="col-md-4 mb-4 mb-md-0">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              {/* <p>
                                <a href="#!" className="text-reset">
                                    Settings
                                </a>
                            </p> */}
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i>Tunisia
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i> CarFancy@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +216 27777779
              </p>
              <p>
                <i className="fas fa-print me-3"></i> +216 71469578
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
