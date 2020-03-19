import React from "react";
import "./Faqs.css";
import {scrollfunc} from './custom';

function Faqs() {
	scrollfunc();
  return (
<div className="container-fluid">
  <hr className="line"></hr>
  <div className="row-service">
    <h3 id="our-services">Frequently Asked Questions (FAQs)</h3>    

<div className="faq-content">
  <div className="faq-question">
    <input id="q1" type="checkbox" className="panel" />
    <div className="plus">+</div>
    <label for="q1" className="panel-title">What is the meaning of life?</label>
    <div className="panel-content">42</div>
  </div>
  
  <div className="faq-question">
    <input id="q2" type="checkbox" className="panel" />
    <div className="plus">+</div>
    <label for="q2" className="panel-title">How much wood would a woodchuck chuck?</label>
    <div className="panel-content">A woodchuck would chuck all the wood he could chuck, if a woodchuck could chuck wood!</div>
  </div>
  
  <div className="faq-question">
    <input id="q3" type="checkbox" className="panel" />
    <div className="plus">+</div>
    <label for="q3" className="panel-title">What happens if Pinocchio says, "my nose will grow now"?</label>
    <div className="panel-content">Certain questions are better left &nbsp;</div>
  </div>
</div>
</div>
</div>
  );
}

export default Faqs;
