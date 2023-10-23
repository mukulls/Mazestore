import{
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"; //imported for routing the website from one page to another
import Home from "./pages/Home/Home"; //importing Home Folder which has Home.js file
import Product from "./pages/Product/Product"; //importing Product.js
import Products from "./pages/Products/Products"; //import products.js
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/NAvbar";
import "./App.css";

const Layout =()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([ //creating router
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      }
    ]
  },
  {
    path:"/", //path to home
    element:<span>Home</span> //route to home
  },
  {
    path:"/products/:id", //path to product category
    element:<span>Category</span>
  },
  {
    path:"/product/:id", //path to single product
    element:<span>Product</span>
  }
]
)

function App() {
  return (
    <>
    <RouterProvider router = {router} />
    </>
  );
}

export default App;
