import { Helmet } from "react-helmet-async";


const Projects = () => {
    return (
        <div>
            <Helmet><title>Projects</title></Helmet>
            <h2 className="text-4xl text-center font-bold mb-4">My Projects</h2>
            <hr />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="w-52 md:w-60 lg:w-80 p-8 bg-teal-100 rounded-xl shadow-xl border-t-2">
                    <h1 className="text-2xl font-bold text-center">Dream Jobs</h1>
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
                            </ul>
                        </div>
                        <div>
                            <p><span className="font-bold underline">Back-end:</span></p>
                            <ul>
                                <li>NodeJs</li>
                                <li>MongoDb</li>
                            </ul>
                        </div>
                    </div>
                    <button className="btn btn-outline w-full border-b-4 border-teal-500 mt-6 border-t-0 uppercase text-violet-800 font-bold shadow-xl">Details</button>

                </div>
                <div className="w-52 md:w-60 lg:w-80 p-8 bg-teal-100 rounded-xl shadow-xl border-t-2">
                    <h1 className="text-2xl font-bold text-center">Shakil Tech</h1>
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
                            </ul>
                        </div>
                        <div>
                            <p><span className="font-bold underline">Back-end:</span></p>
                            <ul>
                                <li>NodeJs</li>
                                <li>MongoDb</li>
                            </ul>
                        </div>
                    </div>
                    <button className="btn btn-outline w-full border-b-4 border-teal-500 mt-6 border-t-0 uppercase text-violet-800 font-bold shadow-xl">Details</button>

                </div>
                <div className="w-52 md:w-60 lg:w-80 p-8 bg-teal-100 rounded-xl shadow-xl border-t-2">
                    <h1 className="text-2xl font-bold text-center"> Event Management</h1>
                    <hr />
                    <p className="mt-4"><span className="font-bold">Type:</span> Front-End</p>
                    <p className="mt-4"><span className="font-bold">Technologies:</span> <br /> React <br /> Tailwind <br /> DaisyUI</p>
                    
                    <button className="btn btn-outline w-full border-b-4 border-teal-500 mt-12 border-t-0 uppercase text-violet-800 font-bold shadow-xl">Details</button>

                </div>
                

            </div>
            <hr className="mt-16" />
            <p className="mt-2 text-center text-gray-400">copyright@2023 - All Right Reserve by Md. Shakil Hossain</p>
        </div>
    );
};

export default Projects;