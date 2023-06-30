import React, { useState } from "react";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css' 

import Login from "./Login/Login";
import Googlelogin from "./Login/Googlelogin";
import Text from "./unused/Text";
import Alluser from "./dashboard/allUser";
import Password from "./Login/Password";
import Otplogin from "./Login/Otplogin";
import Logincontext from "./context/Logincontext";
import Reports from "./side_navbar/Reports";
import Profile from "./side_navbar/Profile";
import LifeInsurance from "./dashboard/lifeInsurance";
import Loan from "./dashboard/loan";
import MutualFund from "./dashboard/mutualFund";
import KnowledgeCentre from "./side_navbar/KnowledgeCentre";
import CrossSell from "./side_navbar/crossSell";
import Upsell from "./side_navbar/uSell";
import RenewalTracking from "./side_navbar/renewalTracking";
import CustomerSingleView from "./side_navbar/customerSingleView";
import InsuranceNeeds from "./side_navbar/insuranceNeeds";
import Claims from "./side_navbar/claims";
import Transactions from "./side_navbar/transactions";
import Leadmanagement from "./side_navbar/leadManagement";
import Dashboard from "./dashboard/Board";
import Dashboardtable from "./dashboard/boardTable";
import GeneralInsurance from "./dashboard/Insurance";
import Renewal from "./Renewal";
import Lob from "./Lob";
import Saleswise from "./Saleswise";
import Partnerwise from "./Partnerwise";
import Insurancecompany from "./Insurancecompany";
import Locationwise from "./locationwise";








const App =()=>{
    const [uname,setUname] = useState();
    return(
        <>
            <Logincontext.Provider value={uname}>
            <Router>
                <Routes>
                  
                    <Route exact path = '/' element={<Login/>}></Route>
                    <Route exact path="/googlelogin" element={<Googlelogin/>}></Route>  
                    <Route exact path="/text" element={<Text/>}></Route>      
                    <Route exact path="/alluser" element={<Alluser/>}></Route>    
                    <Route exact path="/password" element={<Password/>}></Route>                                                                                                    
                    <Route exact path="/otp" element={<Otplogin/>}></Route>     
                    <Route exact path="/dashboard" element={<Dashboard/>}></Route>   
                    <Route exact path="/dashboardtable" element={<Dashboardtable/>}></Route>   
                    <Route exact path="/generalinsurance" element={<GeneralInsurance/>}></Route>
                    <Route exact path="/lifeinsurance" element={<LifeInsurance/>}></Route>
                    <Route exact path="/loan" element={<Loan/>}></Route>
                    <Route exact path="/mfund" element={<MutualFund/>}></Route>  
                    <Route exact path="/profile" element={<Profile/>}></Route>   
                    <Route exact path="/reports" element={<Reports/>}></Route>   
                    <Route exact path="/crosssell" element={<CrossSell/>}></Route>    
                    <Route exact path="/upsell" element={<Upsell/>}></Route>   
                    <Route exact path="/lead" element={<Leadmanagement/>}></Route>   
                    <Route exact path="/knowledgecentre" element={<KnowledgeCentre/>}></Route>  
                    <Route exact path="/Renewaltracking" element={<RenewalTracking/>}></Route>   
                    <Route exact path="/customersingleview" element={<CustomerSingleView/>}></Route>   
                    <Route exact path="/insuranceneeds" element={<InsuranceNeeds/>}></Route>   
                    <Route exact path="/claims" element={<Claims/>}></Route>  
                    <Route exact path="/transactions" element={<Transactions/>}></Route>   
                    <Route exact path="/insurancecompany" element={<Insurancecompany/>}></Route>   
                    <Route exact path="/renewal" element={<Renewal/>}></Route>   
                    <Route exact path="/lob" element={<Lob/>}></Route>   
                    <Route exact path="/teamwise" element={<Saleswise/>}></Route>   
                    <Route exact path="/locationwise" element={<Locationwise/>}></Route>   
                    <Route exact path="/partnerwise" element={<Partnerwise/>}></Route>   
                                                                                                          
                </Routes>
                    

            </Router>
            </Logincontext.Provider>
        </>
        
    )
}


export default App