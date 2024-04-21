import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lc from '../assets/exp/lc.svg'
import contentplus from '../assets/exp/contentplus.svg'
import { isMobile } from "../functions";

export function Experience() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  return (
    <>
      <div className="experiencePage page">
        <Slider {...settings}>
          <div className="item lc">
            <img src={lc} alt="leanconvert-logo"/>
            <p>July 2022 -</p>
            <h2>Technical Consultant {isMobile() ? <br></br> : "|"} <span>Javascript Developer</span></h2>
            <div className="details">
            <p>
              <span>-></span>In cooperation with optimization consultants, designers, clients and other developers -
              evaluate the technical complexity of project requirements, investigate various technical solutions,
              suggest and implement them in client's websites as A/B campaigns;
            </p>
            <p>
              <span>-></span> Providing technical expertise
              and solutions to optimize
              clients’ websites and increase
              revenue.
            </p>
            <p>
              <span>-></span>Ownership of the construction, implementation, and end-to-end quality assurance for the agreed upon requirements scope
            </p>
            <p>
              <span>-></span> Implementing A/B tests using
              JavaScript, HTML5, CSS, React,
              and other technologies to
              develop and maintain highquality,
              scalable, and
              performant frontend
              applications
            </p>
            <p>
              <span>-></span> use backend solution to widen the scope of possible A/B tests for even better performence
              and more optimized user experience
            </p>
            <p>
              <span>-></span>Improving internal processes by building small useful tools, such as Terminal apps, Jira add-ons, or Chrome extensions
            </p>
            </div>
          </div>
          <div className="item">
            <div className="logo">
              <img src={contentplus} alt="contentplus-logo"/>
              <p>Contentplus</p>
            </div>
            <p>July 2022 -</p>
            <h2><span>Javascript Developer</span></h2>
            <div className="details">
              <p>
                <span>-></span>
                Part of the developers team of e-learning platform that provides tools and apps for students to
                help them learn from home
              </p>
              <p>
                <span>-></span> Use Javascript and it's frameworks and libraries to build new and improve existings
                tools on the platform
              </p>
              <p>
                <span>-></span> CLosely cooperate with other developers to make sure various features implemented by each
                of them or all of them together are not contraditing each other, don't cause merge issues and document
                disturb production flow
              </p>
              <p>
                <span>-></span> Come up with new ideas on tools both completly new as well as creative ideas
                for improving existing ones
              </p>
            </div>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  )
}
