import { Route, Routes } from "react-router-dom"
import CreateProfile from "./Pages/CreateProfile"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Explore from "./Pages/Explore/Explore"
import Home from "./Pages/Home"
import Layout from "./Pages/Layout"
import Login from "./Pages/Login"
import MyJobs from "./Pages/MyJobs"
import Register from "./Pages/Register"
import NotFound from "./Pages/NotFound"
import EditProfile from "./Pages/EditProfile"
import EditSocial from "./Pages/EditSocial"
import AddExperiences from "./Pages/AddExperiences"
import AddEducation from "./Pages/AddEducation"
import Jobs from "./Pages/Jobs"
import Profile from "./Pages/Profile"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myjobs" element={<MyJobs />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/editprofile/social" element={<EditSocial />} />
          <Route path="/addexperience" element={<AddExperiences />} />
          <Route path="/addeducation" element={<AddEducation />} />
          <Route path="/jobs/:id" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App


// remote: sardor
// branch: master


// Home +
// Register +
// Login +
// Dashboard +
// Create profile +
// Explore jobs +
// My jobs +
// Not Found +
// Edit profile +
// Edit profile socials +
// Add experience +
// Add education + 
// Jobs +
// View Profile +



