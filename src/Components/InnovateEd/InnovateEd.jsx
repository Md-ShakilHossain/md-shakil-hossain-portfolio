import { Helmet } from "react-helmet-async";

const InnovateEd = () => {
    return (
        <div>
            <Helmet><title>InnovateEd</title></Helmet>
            <h2 className="text-4xl text-center font-bold mb-4">InnovateEd</h2>
            <hr className="mb-4" />
            <h2 className="text-2xl font-semibold text-center mb-6">More Information is Coming</h2>
            <div>
                <h2 className="text-xl font-bold">Key Feature</h2>
                <ul>
                    <li>Toggle language between Bangla to English , English to Bangla</li>
                    <li>Messenger Chat system</li>
                    <li>Live Chat among users</li>
                    <li>Three category user management system</li>
                    <li>Live Video Class</li>
                    <li>Private Route</li>
                    <li>Firebase Authentication</li>
                </ul>
            </div>
            <div className="mt-4 flex gap-6">
                <a className="btn btn-outline border-2 border-b-4 border-t-0 border-teal-600" href="https://github.com/ruksana03/EdTech-Client">Client side code link</a>

                <a className="btn btn-outline border-2 border-b-4 border-t-0 border-teal-600" href="https://github.com/ruksana03/EdTech-Server">Server side code link</a>

                <a className="btn btn-outline border-2 border-b-4 border-t-0 border-teal-600" href="https://innavated.web.app/">Live link</a>

            </div>
            <hr className="mt-20" />
            <p className="mt-2 text-center text-gray-400">copyright@2023 - All Right Reserve by Md. Shakil Hossain</p>
        </div>
    );
};

export default InnovateEd;