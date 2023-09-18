import {createBrowserRouter} from "react-router-dom"
import HomeScreen from "../pages/HomeScreen"
import DashBordLayout from "../components/LayOut/DashBordLayout"
import Body from "../pages/screen/Body"


export  const MainRoute = createBrowserRouter([
    {
        path:"/",
        element:<DashBordLayout/>,
        children:[
            {
             index:true,
             element:<Body/>
            }
        ]
    }
])