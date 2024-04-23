import React, {useState } from "react";
import { Cube } from "./cube";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lc from '../assets/exp/lc.svg'
import contentplus from '../assets/exp/contentplus.svg'
import contBg from '../assets/img/2.jpg';
import synthrone from '../assets/exp/synthrone.svg'
import synthroneP2 from '../assets/exp/synthrone-p2.svg'
import lcBg from '../assets/img/1.jpg';
import { isMobile } from "../functions";

export function Experience() {
  const [slide, setSlide] = useState(0);
  const bgs = [lcBg, contBg]

  var settings = {
    dots: true,
    pauseOnFocus: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: index => {
      console.log('index', index);
      setSlide(prevState => {
        const newState =  index;
        return newState;
      });
      console.log('prevState', slide);
    }
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
            <p>September 2021 - June 2022</p>
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
          <div className="item">
            <div className="logo">
              <img src={synthrone} alt="synthrone-logo" className="synthrone-logo"/>
              <img src={synthroneP2} alt="synthrone-logo" className="synthroneP2-logo"/>
            </div>
            <p>June 2021 - August 2022</p>
            <p className="synthrone-time-limited">Time limited project ( 2 months )</p>
            <h2><span className="yellow">Javascript Developer</span></h2>
            <div className="details">
              <p>
                <span>-></span>
                Writing javascript scripts for an existing bot that crawls urls to get needed informtion and statistics.
              </p>
              <p>
                <span>-></span>
                Each script was unique to match specific client's needs.
              </p>
              <p>
                <span>-></span>
                Javascript and pupeteer as main technologies used
              </p>
              <p>
                <span>-></span>
                Cooperation with Senior developers on more complex cases
              </p>
            </div>
          </div>
          <div>
            <h2><span class="yellow">Freelance - Javascript Developer</span></h2>
            <p>2020 - 2022</p>
            <Cube />
          </div>
        </Slider>
      </div>
    </>
  )
}
