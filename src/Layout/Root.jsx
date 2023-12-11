import { Outlet } from "react-router-dom";
const Root = () => {

    return (
        <div className="flex">
            
            <div className="bg-slate-700 w-20 md:w-32 lg:w-60 min-h-screen">

            </div>
            <div className="flex-1 p-5 md:p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;