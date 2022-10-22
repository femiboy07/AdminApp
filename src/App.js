import './App.css';
import {Admin, Layout, ListGuesser, ShowGuesser} from 'react-admin';
import UserList from './Users/Users.component';
import ProductList from './Products/Products.component';
import dataProvider from './dataProvider/dataProvider';
import { Resource } from 'react-admin';
import PartsPage from './components/Partspage/Partspage.component';
import MyLayOut from './components/MyLayOut/MyLayOut.component';



function App() {
  return (
    <Admin dataProvider={dataProvider} layout={MyLayOut}>
      <Resource name='users' list={UserList}/>
      <Resource name='products' list={ProductList} show={PartsPage}/>
      
    </Admin>
  );
}

export default App;
