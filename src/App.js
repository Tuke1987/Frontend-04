// function Header() {
//   return (
//       <h1>Header</h1>
//   )
// }
//
// function Title() {
//   return (
//       <h2>Brich</h2>
//   )
// }
//
// function Footer() {
//   return (
//       <h2>Footer</h2>
//   )
// }

import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import UsersPage from "./pages/userPage/UserPage";
import MainPage from "./pages/mainPage/MainPage";




function App() {
  return (
      <>
          <Header/>
          <MainPage/>
          <UsersPage/>
          <Footer/>
      </>
  )
}

export default App;
