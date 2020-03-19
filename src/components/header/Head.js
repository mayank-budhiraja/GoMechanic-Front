import React from 'react'
import './Head.css'

function Head(){
    return (

<header class="Main-Header">
    <nav class="navbar navbar-expand-lg py-3">
    <div className="navbar-header"> 
             <a className="navbar-brand" href="/#">
             <img src="https://gomechanic.in/assets/img/advertisepage/gomechanic-logo-white-new.png" width="200" height="50" alt="" />
             </a>
         </div>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
            
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><a href="/#" class="nav-link text-uppercase font-weight-bold">Accessories <span class="sr-only">(current)</span></a></li>
                    <li class="nav-item"><a href="/#" class="nav-link text-uppercase font-weight-bold">Services</a></li>
                    <li class="nav-item"><a href="/#" class="nav-link text-uppercase font-weight-bold">Offers</a></li>
                    <li class="nav-item"><a href="/#" class="nav-link text-uppercase font-weight-bold">More</a></li>
                    <li class="nav-item"><button type="button" class="btn btn-danger">Login/Sign up</button></li>
                </ul>
            </div>
    </nav>
</header>
    );
}
export default Head;
