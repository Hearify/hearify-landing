import React from "react"
import logo_logo from "../images/logo.svg"
import linkedin_logo from "../images/mdi_linkedin.svg"
import instagram_logo from "../images/streamline_instagram-solid.svg"
import facebook_logo from "../images/brandico_facebook-rect.svg"
import "./style.css"
import MediaQuery from "react-responsive"

function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        <nav className="footer-nav">
          <MediaQuery query="(max-device-width: 860px)">
            <a href="#how-hearify-works" className="nav-link">
              How Hearify works
            </a>
            <a href="#" className="nav-link">
              FAQ
            </a>
            <a href="#" className="nav-link">
              BLOG
            </a>
            <a href="#" className="nav-link">
              Pricing
            </a>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 861px)">
            <a href="#how-hearify-works" className="nav-link">
              How it works
            </a>
            <a href="#" className="nav-link">
              Blog
            </a>
            <a href="#" className="nav-link">
              Pricing
            </a>
            <a href="#" className="nav-link">
              FAQ
            </a>
          </MediaQuery>
        </nav>

        <div className="footer-logo">
          <a href="#">
            <img alt="logo" loading="lazy" src={logo_logo} />
          </a>
          <div className="terms">
            <p class="hide-on-small-screen">
              Be sure to take a look at our{" "}
              <u>
                <a href="#">Terms of Use</a>
              </u>{" "}
              and
            </p>
            <p>
              <center>
                <u>
                  <a href="#">Privacy Policy</a>
                </u>
              </center>
            </p>
          </div>
        </div>

        <div className="contacts">
          {
            <a
              href="https://www.instagram.com/hearify.tech?igsh=dWxoNXdoMnZoanJp"
              className="social-network"
            >
              <img alt="instagram_logo" loading="lazy" src={instagram_logo} />
            </a>
          }
          {
            <a
              href="https://www.linkedin.com/company/hearify/"
              className="social-network"
            >
              <img alt="linkedin_logo" loading="lazy" src={linkedin_logo} />
            </a>
          }
          {
            <a
              href="https://www.facebook.com/profile.php?id=61552644703836"
              className="social-network"
            >
              <img alt="facebook_logo" loading="lazy" src={facebook_logo} />
            </a>
          }
          <div>
            <a className="email" href="mailto:hearify.tech@gmail.com">
              hearify.tech@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
