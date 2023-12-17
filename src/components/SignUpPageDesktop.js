import "./SignUpPageDesktop.css";

const SignUpPageDesktop = () => {
  return (
    <div className="sign-up-page-desktop">
      <div className="header1">
        <div className="top-banner1">
          <div className="text17">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </div>
          <img className="icon13" alt="" src="/icon@2x.png" />
        </div>
        <div className="navbar1">
          <div className="container10">
            <img className="logo-icon2" alt="" src="/logo@2x.png" />
            <div className="buttons-container8">
              <div className="text17">Home</div>
              <div className="text17">Courses</div>
              <div className="text17">About Us</div>
              <div className="text17">Pricing</div>
              <div className="text17">Contact</div>
            </div>
          </div>
          <div className="buttons-container9">
            <div className="text17">Sign Up</div>
            <div className="button19">
              <div className="text17">Login</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section1">
        <div className="container11">
          <div className="sub-container6">
            <img className="logo-icon2" alt="" src="/logo@2x.png" />
            <div className="buttons-container10">
              <div className="button20">
                <img className="icon13" alt="" src="/icon@2x.png" />
                <div className="text17">hello@skillbridge.com</div>
              </div>
              <div className="button20">
                <img className="icon13" alt="" src="/icon@2x.png" />
                <div className="text17">+91 91813 23 2309</div>
              </div>
              <div className="button20">
                <img className="icon13" alt="" src="/icon@2x.png" />
                <div className="text17">Somewhere in the World</div>
              </div>
            </div>
          </div>
          <div className="sub-container7">
            <div className="container12">
              <div className="heading8">Home</div>
              <div className="buttons-container11">
                <div className="text-button23">Benefits</div>
                <div className="text-button23">Our Courses</div>
                <div className="text-button23">Our Testimonials</div>
                <div className="text-button23">Our FAQ</div>
              </div>
            </div>
            <div className="container12">
              <div className="heading8">About Us</div>
              <div className="buttons-container11">
                <div className="text-button23">Company</div>
                <div className="text-button23">Achievements</div>
                <div className="text-button23">Our Goals</div>
              </div>
            </div>
            <div className="container12">
              <div className="heading8">Social Profiles</div>
              <div className="buttons-container13">
                <div className="button23">
                  <img className="icon13" alt="" src="/icon@2x.png" />
                </div>
                <div className="button23">
                  <img className="icon13" alt="" src="/icon@2x.png" />
                </div>
                <div className="button23">
                  <img className="icon13" alt="" src="/icon@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line2" />
        <div className="text20">© 2023 Skillbridge. All rights reserved.</div>
      </div>
      <div className="sub-container-parent">
        <div className="sub-container8">
          <div className="text-container">
            <div className="heading11">Students Testimonials</div>
            <div className="paragraph1">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </div>
          </div>
          <div className="container15">
            <div className="card">
              <div className="container16">
                <div className="paragraph2">
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </div>
              </div>
              <div className="line2" />
              <div className="container17">
                <div className="sub-container9">
                  <img className="image-icon" alt="" src="/image@2x.png" />
                  <div className="name">Sarah L</div>
                </div>
                <div className="button26">
                  <div className="text21">Read More</div>
                </div>
              </div>
            </div>
            <div className="buttons-container14">
              <div className="button27">
                <img className="icon20" alt="" src="/icon@2x.png" />
              </div>
              <div className="button27">
                <img className="icon20" alt="" src="/icon@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="sign-up">
          <div className="text-container1">
            <div className="heading12">Sign Up</div>
            <div className="paragraph3">
              Create an account to unlock exclusive features.
            </div>
          </div>
          <div className="form1">
            <div className="container18">
              <div className="sub-container10">
                <div className="heading11">Full Name</div>
                <div className="input-field6">
                  <div className="paragraph2">Enter your Name</div>
                </div>
              </div>
              <div className="sub-container10">
                <div className="heading11">Email</div>
                <div className="input-field6">
                  <div className="paragraph2">Enter your Email</div>
                </div>
              </div>
              <div className="sub-container10">
                <div className="heading11">Password</div>
                <div className="input-field8">
                  <div className="paragraph2">Enter your Password</div>
                  <img className="icon13" alt="" src="/icon@2x.png" />
                </div>
              </div>
              <div className="check-box-container">
                <img
                  className="check-box-icon"
                  alt=""
                  src="/check-box@2x.png"
                />
                <div className="paragraph2">
                  {`I agree with `}
                  <span className="terms-of-use">Terms of Use</span>
                  {` and `}
                  <span className="terms-of-use">Privacy Policy</span>
                </div>
              </div>
              <div className="button29">
                <div className="text26">Sign Up</div>
              </div>
            </div>
            <div className="container19">
              <div className="line4" />
              <div className="text17">OR</div>
              <div className="line4" />
            </div>
            <div className="button30">
              <img className="icon23" alt="" src="/icon@2x.png" />
              <div className="text21">Sign Up with Google</div>
            </div>
            <div className="button31">
              <div className="text17">
                <span>{`Already have an account? `}</span>
                <span className="login">Login</span>
              </div>
              <img className="icon13" alt="" src="/icon@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageDesktop;
