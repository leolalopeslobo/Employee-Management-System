import React from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/Dashboard" />;
  }
  return (
    <section>
      <div className="home-page">
        <section id="banner">
          <div id="main-slider" className="flexslider">
            <ul className="slides">
              <li>
                <img
                  src="img/slides/1.jpeg"
                  alt="flexslider"
                  style={{ height: 400 }}
                />
                <div className="flex-caption">
                  {/* <h3>Employee Administration system</h3>
                           <p>One stop solution for managing all blood banks and invetories</p> */}
                </div>
              </li>
              <li>
                <img
                  src="img/slides/2.jpeg"
                  alt="flexslider"
                  style={{ height: 400 }}
                />
                <div className="flex-caption"></div>
              </li>
            </ul>
          </div>
        </section>
        <section className="jumbobox">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <h1>Employee Administration System</h1>
                  <p>
                    Employee administration that uses coaching to motivate and
                    build trust with workers can unlock enormous human
                    potential. Yet, communication tactics alone may fall short
                    in the face of multi-generational workforces, rising numbers
                    of freelance workers and complex regulations. Technology,
                    whether it’s workforce administration software or a human
                    capital administration solution, can often help business
                    leaders maintain productivity more effectively in rapidly
                    changing environments.
                  </p>
                  <p>
                    Employee administration is the process by which employers
                    ensure workers perform their jobs to the best of their
                    abilities so as to achieve business goals. It typically
                    entails building and maintaining healthy relationships with
                    employees, as well as monitoring their daily labor and
                    measuring progress. In this way, employers can identify
                    opportunities for improvement and recognize achievements.
                  </p>
                  <p>
                    Are you tired of managing employee-related tasks manually?
                    Look no further! Our Employee Administration System App is
                    here to streamline your administrative processes and make
                    your life easier. With a range of powerful features, this
                    app is designed to simplify employee management, salary
                    administration, login administration, and leave
                    administration. Here's what our app has to offer:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="content">
          <div className="container">
            <div className="row">
              <div className="skill-home">
                <div className="skill-home-solid clearfix">
                  <div className="col-md-3 text-center">
                    <div className="box">
                      <span className="icons c1">
                        <i className="icon-settings icons"></i>
                      </span>
                      <div className="box-area">
                        <h3>Employee Administration</h3>
                        <p>
                          Efficiently manage all aspects of employee
                          administration with our comprehensive app. Easily
                          store and access employee records, including personal
                          information, contact details, and employment history.
                          Keep track of employee performance, training, and
                          certifications in one central location. Generate
                          detailed reports and analytics to gain valuable
                          insights into your workforce, making informed
                          decisions and optimizing your team's productivity.
                        </p>
                        <p>
                          <a href="#">Learn More</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <div className="box">
                      <span className="icons c2">
                        <i className="icon-login icons"></i>
                      </span>
                      <div className="box-area">
                        <h3>Salary Administration</h3>
                        <p>
                          Our app simplifies salary administration by automating
                          complex calculations, deductions, and bonuses for
                          individual employees. Maintain accurate records of
                          salary payments and effortlessly generate pay slips.
                          The app streamlines the process of handling payroll
                          taxes and statutory deductions, reducing errors and
                          ensuring compliance with legal requirements. With our
                          salary administration feature, you can efficiently
                          manage employee compensation, saving time and
                          resources.
                        </p>
                        <p>
                          <a href="#">Learn More</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <div className="box">
                      <span className="icons c3">
                        <i className="icon-user icons"></i>
                      </span>
                      <div className="box-area">
                        <h3>Leave Administration</h3>
                        <p>
                          Simplify the process of managing employee leaves with
                          our intuitive leave administration feature. Enable
                          employees to submit leave requests digitally, Track
                          and monitor leave balances, ensuring accurate records
                          and avoiding scheduling conflicts. Maintain a
                          centralized calendar to easily manage and view leave
                          schedules for efficient workforce planning. With our
                          leave administration feature, you can optimize leave
                          management, enhance employee satisfaction, and
                          maintain smooth operations.
                        </p>
                        <p>
                          <a href="#">Learn More</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <div className="box">
                      <span className="icons c4">
                        <i className="icon-home icons"></i>
                      </span>
                      <div className="box-area">
                        <h3>Login Administration</h3>
                        <p>
                          Ensure secure access to your app with our robust login
                          administration feature. Manage user accounts and
                          permissions, controlling access levels and assigning
                          roles to different users. Safeguard sensitive data and
                          prevent unauthorized access with strong authentication
                          mechanisms. You can easily create and manage user
                          profiles and maintaining control over app
                          functionalities.Simplify the process of managing
                          employee leaves, including vacation, sick leave, and
                          other types of time off.
                        </p>
                        <p>
                          <a href="#">Learn More</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="aboutUs">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="img/home.jpeg" className="img-center" alt="" />
              </div>
              <div className="col-md-6">
                <div>
                  <h2>About Employee Administration System</h2>
                  <p className="text-justify">
                    Our Employee Administration System App offers a
                    user-friendly interface, intuitive navigation, and robust
                    functionality to support your administrative tasks. Say
                    goodbye to paperwork, manual calculations, and scattered
                    information. With our app, you can streamline your
                    operations, save time, and increase productivity. Experience
                    the convenience and efficiency of modern employee
                    administration. Try our Employee Administration System App
                    today and take control of your workforce management!
                  </p>
                  <p className="text-justify">
                    Employee administration is the process by which employers
                    ensure workers perform their jobs to the best of their
                    abilities so as to achieve business goals. It typically
                    entails building and maintaining healthy relationships with
                    employees, as well as monitoring their daily labor and
                    measuring progress. In this way, employers can identify
                    opportunities for improvement and recognize achievements.
                  </p>
                </div>
                <br />
              </div>
            </div>
          </div>
        </section>
      </div>
      <a href="#" className="scrollup">
        <i className="fa fa-angle-up active"></i>
      </a>
    </section>
  );
};
Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
