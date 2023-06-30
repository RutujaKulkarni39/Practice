import React from 'react';
import "../css/searchBar.css";
import Navbar from './Navbar';

const Reports = () => {
  return (
   
    <div class='row'>
    <div class='col-2'><br/><br/><br/><br/>
    <Navbar/></div>
    <div class = 'col-9'>



    <div className='search'><center>
    <h2>Search Your Reports Here...</h2></center>
    <br/><br/>
    <div class="row">
    <div class="col-4">
    <input class="searchbar" type="text" placeholder="Premium Register" />
    <br/><br/>
    <input class="searchbar" type="text" placeholder="Insurance Companies" />
    <br/><br/>
    <input class="searchbar" type="text" placeholder="Location Companies" />
    <br/><br/>
    </div>
    <div class="col-4">
    <input class="searchbar" type="text" placeholder="LOB Wise" />
    <br/><br/>
    <input class="searchbar" type="text" placeholder="Sales Team Wise" />
    <br/><br/>
    <input class="searchbar" type="text" placeholder="New/Renewal Wise" />
    <br/><br/>
    </div>
    <div class="col-4">
    <input class="searchbar" type="text" placeholder="Partner Wise" />
    <br/><br/>
    <input class="searchbar" type="text" placeholder="Dummy" />
    <br/><br/>
    <input class="searchbar" type="text" placeholder="Dummy" />
    <br/><br/>
    </div></div>
    <center>
    <div class="row">
    <div class="col-6">
    <input class="searchbar" type="text" placeholder="Start Date" />
    <br/><br/> 
    </div>
    <div class="col-6">
    <input class="searchbar" type="text" placeholder="End Date" />
    <br/><br/>
    </div>
    </div>
    </center>
   
   </div>





    </div>
    </div>





   
    

  
  )
}

export default Reports
