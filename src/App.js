import './App.css';
import {
    Switch,
    Route,
} from "react-router-dom"
import Header from './components/header/header.component'
import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import ShopPage from "./pages/shop-page/shop.component";
import ButtonAppBar from "./components/header/navbar";
import TitlebarImageList from "./components/directory/ItemLists";
import Collection from "./components/preview-collection/machinesPreview";
import MachinesPreview from "./components/preview-collection/machinesPreview";
import Products from "./components/directory/ItemLists";
import StoragePreview from "./components/preview-collection/StoragePreview";
import ProcessorsPreview from "./components/preview-collection/ProcessorsPreview";
import MotherboardsPreview from "./components/preview-collection/MotherboardsPreview";
import CardsPreview from "./components/preview-collection/CardsPreview";
import RamPreview from "./components/preview-collection/RamPreview";
import SectionsBar from "./components/header/sections-bar";

function App() {
  return (
    <div>
        {/*<Header/>*/}
        <ButtonAppBar/>
        <SectionsBar/>
        {/*<TitlebarImageList/>*/}
            <Switch>
                <Route exact path='/' component={Products}/>
                <Route path='/machines' component={MachinesPreview}/>
                <Route path='/storage' component={StoragePreview}/>
                <Route path='/processors' component={ProcessorsPreview}/>
                <Route path='/motherboards' component={MotherboardsPreview}/>
                <Route path='/ram' component={RamPreview}/>
                <Route path='/cards' component={CardsPreview}/>
                <Route path='/signin' component={SignInPage}/>
            </Switch>
    </div>
  );
}

export default App;
