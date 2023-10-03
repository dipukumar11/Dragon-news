const { createBrowserRouter } = require("react-router-dom");
const { default: Router } = require("../Router/Router");
const { default: Home } = require("../component/Home/Home");

const rauter= createBrowserRouter([
    {
        path:"/",
        element:<Router></Router>,
        children:[
            {
                path:"/",
                element:<Home></Home>

            }
        ]
    },
    
])
export default rauter