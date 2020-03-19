import React from 'react'
import './Features.css'

function Features(){
    return(
<div>
<div className="container-fluid">
    <header className='example-one-header scroll'>
        {/*<div className='logo'></div>*/}
        
        <nav className="vertical-align-middle">
        <div className='item-scroll'>Our Services</div>
        <div className='item-scroll'>Car Assessories</div>
        <div className='item-scroll'>How GoMechanic Works?</div>
        <div className='item-scroll'>Scheduled Services</div>
        <div className='item-scroll'>Car Care Services</div>
        <div className='item-scroll'>Wheel Care Services</div>
        </nav>
    </header>
  </div>
<br></br>
<br></br>
<div className="container-fluid">
    <hr className="line">
    </hr>
    <div className="row-service">
    <h3 className="our-services">Our Services</h3>
    
       
       <p> In mollit sit amet nostrud. Do sint sint tempor sit. Non commodo minim dolore magna veniam ullamco voluptate officia nostrud aliqua nostrud ad. Velit nostrud qui pariatur labore ad ad et non culpa proident dolore.</p>
    </div>
</div>

<div className="container-fluid">
    <div className="row-service">
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card border-0 shadow rounded-xs pt-5">
                <div className="card-body"> <i className="fa fa-object-ungroup icon-lg icon-primary icon-bg-primary icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">Services</h4>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card border-0 shadow rounded-xs pt-5">
                <div className="card-body"> <i className="fa fa-users icon-lg icon-yellow icon-bg-yellow icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">AC Services</h4>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card border-0 shadow rounded-xs pt-5">
                <div className="card-body"> <i className="fa fa-desktop icon-lg icon-purple icon-bg-purple icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">Cleaning</h4>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card border-0 shadow rounded-xs pt-5">
                <div className="card-body"> <i className="fa fa-cloud icon-lg icon-cyan icon-bg-cyan icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">Wheel</h4>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card border-0 shadow rounded-xs pt-5">
                <div className="card-body"> <i className="fa fa-comments icon-lg icon-red icon-bg-red icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">Denting</h4>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card border-0 shadow rounded-xs pt-5">
                <div className="card-body"> <i className="fa fa-search-plus icon-lg icon-green icon-bg-green icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">Insurance</h4>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card border-0 shadow rounded-xs pt-5">
                <div className="card-body"> <i className="fa fa-user icon-lg icon-orange icon-bg-orange icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">Custom Repair</h4>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card border-0 shadow rounded-xs pt-5">
                <div className="card-body"> <i className="fa fa-envelope icon-lg icon-blue icon-bg-blue icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">Accessories</h4>
                </div>
            </div>
        </div>
    </div>
</div>        
</div>
    );
}
export default Features;
