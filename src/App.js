import './App.css';
import {
    Switch,
    Route,
} from "react-router-dom"
import Header from './components/header/header.component'
import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import ShopPage from "./pages/shop-page/shop.component";

function App() {
  return (
    <div>
        <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInPage}/>
            </Switch>
    </div>
  );
}

export default App;
