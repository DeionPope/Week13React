import LoginForm from "./login-form"
import Navbar from "./Navbar"





function App() {

  return (
    <div>
      <div> <Navbar/> </div>
      <div className="form">
        <LoginForm/>
      </div>
    </div>
  )
}

export default App
