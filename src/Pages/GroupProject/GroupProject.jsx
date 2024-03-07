import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const GroupProject = () => {
    return (
        <div>
            <Helmet><title>Projects</title></Helmet>
            <h2 className="text-4xl text-center font-bold mb-4">My Group-projects</h2>
            <hr />

            <div className="w-52 md:w-60 lg:w-80 p-8 bg-teal-100 rounded-xl shadow-xl border-t-2">
                    <h1 className="text-2xl font-bold text-center">InnovateEd</h1>
                    <hr />
                    <p className="mt-4"><span className="font-bold">Type:</span> Full Stack</p>
                    <p className="text-xl font-bold my-2">Technologies:</p>
                    <hr />
                    <div className="flex justify-between">
                        <div>
                            <p><span className="font-bold underline">Front-end:</span></p>
                            <ul>
                                <li>React</li>
                                <li>Tailwind</li>
                                <li>DaisyUI</li>
                                <li>Redux</li>
                            </ul>
                        </div>
                        <div>
                            <p><span className="font-bold underline">Back-end:</span></p>
                            <ul>
                                <li>NodeJs</li>
                                <li>Mongoose</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="mt-2" />
                    <Link to="/innovateEd"><button className="btn btn-outline w-full border-b-4 border-teal-500 mt-6 border-t-0 uppercase text-violet-800 font-bold shadow-xl">Details</button></Link>

                </div>

            <hr className="mt-16" />
            <p className="mt-2 text-center text-gray-400">copyright@2023 - All Right Reserve by Md. Shakil Hossain</p>
        </div>
    );
};

export default GroupProject;