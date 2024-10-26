import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Login from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Admindashboard } from './components/navbar/Admindashboard';
import Employeeinfo from "./components/navbar/Employeeinfo";
import Addemp from "./components/navbar/Addemp";
import Updateemp from "./components/navbar/Updateemp";
import Deleteemp from "./components/navbar/Deleteemp";
import Department from "./components/navbar/Department";
import Profile from "./components/navbar/Profile";
import { Hr } from "./components/navbar/departmentpills/Hr";
import { It } from "./components/navbar/departmentpills/It";
import { Finance } from "./components/navbar/departmentpills/Finance";
import { Marketing } from "./components/navbar/departmentpills/Marketing";
import { Accounting } from "./components/navbar/departmentpills/Accounting";
import Aditya from "./components/navbar/managersdata/Aditya";
import  About  from "./components/navbar/About";
import Smita from "./components/navbar/managersdata/Smita";
import Devanshu from "./components/navbar/managersdata/Devanshu";
import Kishore from "./components/navbar/managersdata/Kishore";
import Ayush from "./components/navbar/managersdata/Ayush";
import Akash from "./components/navbar/managersdata/Akash";
import Ranu from "./components/navbar/managersdata/Ranu";

function App() {
const [session, setSession] = useState(0);

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Login session={session} setSession={setSession} />} />
        <Route path='/dashboard' element={
        session > 0?
        <Dashboard session={session} setSession={setSession}  />
        :
        <Login session={session} setSession={setSession} />
        
        }>
          <Route path='' element={<Admindashboard />}/>
          <Route path='/dashboard/empinfo' element={<Employeeinfo />} />
          <Route path='/dashboard/addemp' element={<Addemp />} />
          <Route path='/dashboard/updateemp' element={<Updateemp />} />
          <Route path='/dashboard/deleteemp' element={<Deleteemp />} />
          <Route path='/dashboard/department' element={<Department />} />
          <Route path='/dashboard/about' element={<About />} />
          <Route path='/dashboard/hr' element={<Hr />} />
          <Route path='/dashboard/it' element={<It />} />
          <Route path='/dashboard/finance' element={<Finance />} />
          <Route path='/dashboard/marketing' element={<Marketing />} />
          <Route path='/dashboard/accounting' element={<Accounting />} />
          <Route path='/dashboard/aditya' element={<Aditya/>} />
          <Route path='/dashboard/smita' element={<Smita />} />
          <Route path='/dashboard/devanshu' element={<Devanshu />} />
          <Route path='/dashboard/akash' element={<Akash />} />
          <Route path='/dashboard/kishore' element={<Kishore />} />
          <Route path='/dashboard/ayush' element={<Ayush />} />
          <Route path='/dashboard/ranu' element={<Ranu />} />
          <Route path='/dashboard/profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
