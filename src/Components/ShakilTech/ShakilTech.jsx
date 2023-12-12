import { Helmet } from "react-helmet-async";


const ShakilTech = () => {
    return (
        <div>
            <Helmet><title>Shakil Tech</title></Helmet>
            <h2 className="text-4xl text-center font-bold mb-4">Shakil Tech</h2>
            <hr className="mb-4" />
            <h2 className="text-2xl font-semibold text-center mb-6">More Information is Coming</h2>
            <div>
                <h2 className="text-xl font-bold">Key Feature</h2>
                <ul>
                    <li>Toggle between dark and light mood</li>
                    <li>Showing User information on Navbar</li>
                    <li>Sweet alert2</li>
                    <li>Crud Operation</li>
                    <li>Showing card according to brandName</li>
                    <li>Private Route</li>
                    <li>Firebase Authentication</li>
                </ul>
            </div>
            <div className="mt-4 flex gap-6">
                <a className="btn btn-outline border-2 border-b-4 border-t-0 border-teal-600" href="https://github.com/Md-ShakilHossain/shakil-tech">Client side code link</a>

                <a className="btn btn-outline border-2 border-b-4 border-t-0 border-teal-600" href="https://github.com/Md-ShakilHossain/shakil-tech-server">Server side code link</a>

                <a className="btn btn-outline border-2 border-b-4 border-t-0 border-teal-600" href="https://shakil-tech.web.app">Live link</a>

            </div>
            <hr className="mt-20" />
            <p className="mt-2 text-center text-gray-400">copyright@2023 - All Right Reserve by Md. Shakil Hossain</p>
        </div>
    );
};

export default ShakilTech;