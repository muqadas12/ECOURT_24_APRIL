import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import history from "./components/history"
import CaseReferal from "./pages/CaseReferal"
import CaseProceeding from "./pages/Dashborad/Judge/CaseProceeding"
import EFilling from "./pages/EFilling/EFilling.js"
import FileCase from "./pages/EFilling/FileCase.js"
import File from "./pages/EFilling/File.js"
import FileCasesInfo from "./pages/EFilling/FileCasesInfo.js"

import CaseInfo from "./pages/CMS/CaseInfo"
import CaseRecordCMS from "./pages/CMS/CaseRecordCMS"
import CauseListCMS from "./pages/CMS/CauseListCMS"
import Modules from "./pages/CMS/Modules"
import Summn from "./pages/CMS/Summn"

import ESummonCMS from "./pages/CMS/ESummonCMS"
import LoginCMS from "./pages/CMS/LoginCMS"
import About from "./pages/MainPage/About"
import StaticReport from "./pages/MainPage/StaticReport"
import MainNavigation from "./shared/Navigation/MainNavigation"
import Logo from "./shared/Navigation/Logo/Logo"
import LoginCaseRef from "./pages/LoginCaseRef"
import LoginCasePro from "./pages/LoginCasePro"
import Rules from "./pages/MainPage/Rules"
import LawyerList from "./pages/MainPage/LawyerList"
import Contact from "./pages/MainPage/Contact"
import Search from "./pages/SearchCase/Search"
import Notification from "./pages/SearchCase/Notification"
import JudgmentSerach from "./pages/SearchCase/JudgmentSerach"
import LatestJudgments from "./pages/SearchCase/LatestJudgments"
import CauseListSearch from "./pages/SearchCase/CauseListSearch"
import OnlineCaseSearch from "./pages/SearchCase/OnlineCaseSearch"
import ViewNotification from "./pages/SearchCase/ViewNotification"
import PressRelease from "./pages/MainPage/PressRelease"
import Footer from "./components/Footer"
import Scroll from "./components/scroll"

// import Searchbar from "./components/Searchbar"

import AdminLogin from "./pages/CMS/AdminLogin";
import BarChart from "./pages/MainPage/Charts/BarChart"
import LineChart from "./pages/MainPage/Charts/LineChart"
import DoughnutChart from "./pages/MainPage/Charts/DoughnutChart"
import JudgeSignUp from "./pages/Dashborad/Judge/JudgeSignUp";
import Call from "./pages/Dashborad/Judge/Call";
import LPrac from "./pages/Dashborad/Lawyer/LPrac";

import Civilcase from  "./pages/Dashborad/Lawyer/Civilcase";
import LawyerSignUp from  "./pages/Dashborad/Lawyer/LawyerSignUp";
import LoginLawyer from  "./pages/Dashborad/Lawyer/LoginLawyer";
import OnlinePay from  "./pages/Dashborad/Lawyer/OnlinePay";
import LawyerMod from  "./pages/Dashborad/Lawyer/LawyerMod";
import LoginJudge from  "./pages/Dashborad/Judge/LoginJudge";
import Docu from  "./pages/Dashborad/Judge/Docu";
import Docx from "./pages/CMS/Docx"


import JudgeMod  from  "./pages/Dashborad/Judge/JudgeMod";

import CaseRecord  from  "./pages/Dashborad/Judge/RecordCase";
import Rec  from  "./pages/Dashborad/Judge/Rec";

import AcceptCase  from  "./pages/Dashborad/Judge/AcceptCase";

import ESummon  from  "./pages/Dashborad/Judge/ESummonStatus";
import ArrestWarrant  from  "./pages/Dashborad/Judge/ArrestWarrant";

import GenerateSummon  from  "./pages/CMS/GenerateSummon";
import PoliceCon  from  "./pages/CMS/PoliceCon";
import UpdateJudgment  from  "./pages/CMS/UpdateJudgment";
import SummonStatus  from  "./pages/CMS/SummonStatus";

import AddJudge  from   "./pages/CMS/AddJudge"
import Esummon from   "./pages/CMS/Esummon";
import InformationCases  from   "./pages/CMS/Info";






import ViewEFilling  from  "./pages/Dashborad/Judge/ViewEFilling";
import Causelist  from  "./pages/Dashborad/Lawyer/Causelist";
import Judgment from  "./pages/Dashborad/Lawyer/Judgment";
import CourtFee from  "./pages/Dashborad/Lawyer/CourtFee";
import CaseStatusLaw from  "./pages/Dashborad/Lawyer/CaseStatusLaw";

import DChart from "./pages/MainPage/DChart"
import Charttwo from "./pages/MainPage/Charttwo"

import Home from "./pages/Dashborad/Judge/Video/Home"
import Header from "./pages/Dashborad/Judge/Video/Header"

import VideoCall from "./pages/Dashborad/Judge/VideoCall"
import ViewSummonstatus from "./pages/Dashborad/Judge/ViewSummonstatus"

import PayOnline from "./pages/Dashborad/Lawyer/PayOnline"
import Practice from "./Practice";

import Prac from "./Prac";

import LoginNotification from "./pages/SearchCase/LoginNotification"
import ArrestP from "./pages/Dashborad/Judge/ArrestP"
import thankyou from "./pages/Dashborad/Judge/thank-you"

import LP from "./pages/Dashborad/Lawyer/LP"

import PP from  "./pages/Dashborad/Lawyer/PP"

import AutomaticSummon  from   "./pages/CMS/AutomaticSummon";
import SLP from "./pages/CMS/SLP"
import Searchbar from "./components/Searcbar"
import Admin  from  "./pages/CMS/Admin";
import uploadCause  from  "./pages/CMS/uploadCause";
import sendSummon  from  "./pages/CMS/sendSummon";
///partner//
import Register  from  "./pages/CMS/Register";
import Proceeding  from  "./pages/CMS/Proceeding";
import Judge  from  "./pages/CMS/Judge";
import filingCase  from  "./pages/CMS/filingCase";
import CauselList  from  "./pages/CMS/CauseList";
import CaseRecording  from  "./pages/CMS/CaseRecording";
import Caseproceeingss  from  "./pages/CMS/CaseProceeding";

// import AdminFunctionalities from  "./pages/CMS/AdminFunctionalities";












///





const  App=()=> {
  return <Router history={history}>
  <Scroll/>
          <Logo/>

          		  
        <Searchbar/>

    <MainNavigation />
    
    <Switch>
      <main>
      <Route path="/" component={About} exact></Route>
      <Route path="/About" component={About} exact></Route>
      <Route path="/BarChart" component={BarChart} ></Route>
      <Route path="/LineChart" component={LineChart} ></Route>
      <Route path="/DoughnutChart" component={DoughnutChart} ></Route>

    <Route path="/cr" component={CaseReferal}  ></Route>
    <Route path="/LoginCasePro" component={LoginCasePro} ></Route>

    <Route path="/EFilling" component={EFilling} ></Route>
    
    <Route path="/FileCase" component={FileCase} ></Route>
    <Route path="/FileCasesInfo" component={FileCasesInfo} ></Route>

    <Route path="/File" component={File} ></Route>
    <Route path="/LoginCaseRef" component={LoginCaseRef} ></Route>

    <Route path="/CaseReferal" component={CaseReferal} ></Route>



    <Route path="/Lawyer/CourtFee" component={CourtFee} exact></Route>
    <Route path="/Lawyer/Judgment" component={Judgment} exact></Route>
    <Route path="/CaseInfo" component={CaseInfo} ></Route>
    <Route path="/CaseRecordCMS" component={CaseRecordCMS} ></Route>
    <Route path="/CMS/CauseListCMS" component={CauseListCMS} exact ></Route>
    <Route path="/CMS/ESummonCMS" component={ESummonCMS} exact></Route>
    <Route path="/CMS/Modules" component={Modules} exact></Route>
    <Route path="/CMS/PoliceCon" component={PoliceCon} exact></Route>
    <Route path="/CMS/Docx" component={Docx} exact></Route>
    <Route path="/CMS/AddJudge" component={AddJudge} exact></Route>
    <Route path="/CMS/Esummon" component={Esummon} exact></Route>
    <Route path="/CMS/SummonStatus" component={SummonStatus} exact></Route>

    <Route path="/Summn" component={Summn} exact></Route>
    <Route path="/LPrac" component={LPrac} exact></Route>





    <Route path="/CMS/UpdateJudgment" component={UpdateJudgment} exact></Route>


    <Route path="/AdminLogin" component={AdminLogin } ></Route>

    <Route path="/LoginCMS" component={LoginCMS} ></Route>
    <Route path="/StaticReport" component={StaticReport} ></Route>
    <Route path="/Rules" component={Rules} ></Route>
    <Route path="/LawyerList" component={LawyerList} ></Route>
    <Route path="/Contact" component={Contact} ></Route>
    <Route path="/Search" component={Search} ></Route>
    <Route path="/JudgmentSerach" component={JudgmentSerach} ></Route>
    <Route path="/LatestJudgments" component={LatestJudgments} ></Route>
    <Route path="/CauseListSearch" component={CauseListSearch} ></Route>
    <Route path="/OnlineCaseSearch" component={OnlineCaseSearch} ></Route>
    <Route path="/ViewNotification" component={ViewNotification} ></Route>
    {/* <Route path="/Judgment" component={Search} ></Route> */}
    <Route path="/Notification" component={Notification} ></Route>
    <Route path="/PressRelease" component={PressRelease} ></Route>

    {/* //Dashboard */}
    <Route path="/JudgeSignUp" component={JudgeSignUp} ></Route>
    <Route path="/LawyerSignUp" component={LawyerSignUp} ></Route>
    <Route path="/LoginLawyer" component={LoginLawyer} ></Route>
    <Route path="/LoginJudge" component={LoginJudge} ></Route>
    <Route path="/JudgeMod" component={JudgeMod} ></Route>
    <Route path="/CaseRecord" component={CaseRecord} ></Route>
    <Route path="/Rec" component={Rec} ></Route>
    <Route path="/Call" component={Call} ></Route>
    <Route path="/Civilcase" component={Civilcase} ></Route>
    <Route path="/judge/ViewSummonstatus" component={ViewSummonstatus} ></Route>
    <Route path="/ArrestP" component={ArrestP} ></Route>





    <Route path="/ESummon" component={ESummon} ></Route>
    <Route path="/ArrestWarrant" component={ArrestWarrant} ></Route>
    <Route path="/ViewEFilling" component={ViewEFilling} ></Route>
    <Route path="/CaseProceeding" component={CaseProceeding} ></Route>
    <Route path="/LawyerMod" component={LawyerMod} ></Route>
    <Route path="/Causelist" component={Causelist} ></Route>
    <Route path="/Judgment" component={Judgment} ></Route>
    <Route path="/CourtFee" component={CourtFee} ></Route>
    <Route path="/CaseStatusLaw" component={CaseStatusLaw} ></Route>
    <Route path="/DChart" component={DChart} ></Route>
    <Route path="/Charttwo" component={Charttwo} ></Route>

    <Route path="/OnlinePay" component={OnlinePay} ></Route>
    <Route path="/GenerateSummon" component={GenerateSummon}></Route>
    <Route path="/AcceptCase" component={AcceptCase}></Route>
    <Route path="/Docu" component={Docu}></Route>


    {/* //video/ */}

    <Route path="/Home" component={Home}></Route>
    <Route path="/Header" component={Header}></Route>
    <Route path="/VideoCall" component={VideoCall}></Route>
    <Route path="/PayOnline" component={PayOnline}></Route>

    <Route path="/Practice" component={Practice}></Route>

    <Route path="/Prac" component={Prac}></Route>
    <Route path="/LoginNotification" component={LoginNotification}></Route>
    <Route path="/cms/InformationCases" component={InformationCases}></Route>
    <Route path="/LP" component={LP}></Route>
    <Route path="/PP" component={PP}></Route>
    <Route path="/AutomaticSummon" component={AutomaticSummon}></Route>
    <Route path="/SLP" component={SLP}></Route>
    <Route path="/thank-you" component={thankyou}></Route>
    <Route path="/Admin" component={Admin}></Route>
    <Route path="/uploadCause" component={uploadCause}></Route>
    <Route path="/sendSummon" component={sendSummon}></Route>

{/* ////partner/// */}
<Route path="/Register" component={Register}></Route>
<Route path="/Judge" component={Judge}></Route>
<Route path="/filingCase" component={filingCase}></Route>
<Route path="/Proceeding" component={Proceeding}></Route>
<Route path="/CauselList" component={CauselList}></Route>
<Route path="/CaseRecording" component={CaseRecording}></Route>
<Route path="/Caseproceeingss" component={Caseproceeingss}></Route>































    </main>
    </Switch>
    <br/>
    <br/>
    <Footer/>
</Router>
  
}

export default App;
