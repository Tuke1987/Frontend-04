import MainPage from "./pages/mainPage/MainPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

const name = prompt('Введите свое имя')
const lastName = prompt('Введите свою фамилию')


function App(promptJJ) {
    const users = {
        name: name,
        lastName: lastName
    }
    console.log(users)
    return name === 'john' && lastName === 'johns'
        ? <MainPage/> : <ErrorPage/>
}

export default App