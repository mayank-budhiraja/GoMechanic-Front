import React from "react";
import "./Timeline.css";

function Timeline() {
  return (
<div className="container-fluid bg-white">
  <hr className="line"></hr>
  <div className="row-service">
    <h3 id="our-services">How GoMechanic Works?</h3>    
    <ul className="timeline">
    <li className="timeline-inverted">
        <div className="timeline-badge">
          <i className="glyphicon glyphicon-check"></i>
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title">Mussum ipsum cacilds</h4>
          </div>
          <div className="timeline-body">
            <p>
              Mussum ipsum cacilds, vidis litro abertis. Consetis
              adipiscings elitis. Pra lá , depois divoltis porris, paradis.
            </p>
          </div>
        </div>
      </li>
      <li className="timeline-inverted">
        <div className="timeline-badge warning">
          <i className="glyphicon glyphicon-credit-card"></i>
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title">Mussum ipsum cacilds</h4>
          </div>
          <div className="timeline-body">
            <p>
              Mussum ipsum cacilds, vidis litro abertis. Consetis
              adipiscings elitis. Pra lá , depois divoltis porris, paradis.
            </p>
          </div>
        </div>
      </li>
      <li className="timeline-inverted">
        <div className="timeline-badge danger">
          <i className="glyphicon glyphicon-credit-card"></i>
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title">Mussum ipsum cacilds</h4>
          </div>
          <div className="timeline-body">
            <p>
              Mussum ipsum cacilds, vidis litro abertis. Consetis
              adipiscings elitis. Pra lá , depois divoltis porris, paradis.
            </p>
          </div>
        </div>
      </li>
      <li className="timeline-inverted">
        <div className="timeline-badge success">
          <i className="glyphicon glyphicon-thumbs-up"></i>
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title">Mussum ipsum cacilds</h4>
          </div>
          <div className="timeline-body">
            <p>
              Mussum ipsum cacilds, vidis litro abertis. Consetis
              adipiscings elitis. Pra lá , depois divoltis porris, paradis.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
  );
}

export default Timeline;
