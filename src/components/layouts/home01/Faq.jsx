import React, { Component } from "react";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion: [
        {
          id: 1,
          classname: "accordion-item active",
          heading: "How long does it take to get an estimate?",
          text: "Our goal is to be on-site for a consult either the same day or within 48 hours pending geographic location. Written estimates are provided for all work.",
        },
        {
          id: 2,
          classname: "accordion-item",
          heading: "Can I get a drawing of the project?",
          text: "Yes, 2D and/or 3D drawings provided upon request as part of our design services.",
        },
        {
          id: 3,
          classname: "accordion-item",
          heading: "How do you handle the dirty work ?",
          text: "We aim to leave the job site cleaner than when we arrived. Of course, what we do can be dirty. We tarp our work area, broom sweep and magnetic broom sweep the work area to get any possible debris. We also provide porta potties where applicable.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="col-md-6">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={0}
          data-smobile={35}
        />
        <div
          className="themesflat-content-box"
          data-margin="0 0 0 18px"
          data-mobilemargin="0 0 0 0"
        >
          <div className="themesflat-headings style-1 clearfix">
            <h2 className="heading">FAQs</h2>
            <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={38}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="themesflat-accordions style-1 has-icon icon-left iconstyle-1 clearfix">
            {this.state.accordion.map((data) => (
              <div className={data.classname} key={data.id}>
                <h3 className="accordion-heading">
                  <span className="inner">{data.heading}</span>
                </h3>
                <div className="accordion-content">
                  <div>{data.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
