import { Link, NavLink, Outlet } from "react-router-dom";
import photo from '../assets/images/photo.jpg';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Root = () => {

    return (
        <div className="flex">

            <div className="bg-slate-700 w-20 md:w-32 lg:w-60 min-h-screen">
                <div className="flex justify-center items-center">
                    <img src={photo} alt="" className="w-12 md:w-16 lg:w-40 mt-4 rounded-full border-x-2 lg:border-x-4 border-orange-600" />
                </div>
                <hr className="border-1 border-teal-50 w-11/12 mx-auto mt-4" />
                <ul>
                    <div className="bg-gradient-to-l from-teal-100 via-teal-50 to-teal-100 rounded-xl w-11/12 mx-auto py-0 md:py-1 lg:py-2 mt-4">
                        <li className="text-center"><NavLink className={({ isActive, isPending }) =>
                            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
                        } to='/'>Home</NavLink></li>
                    </div>

                    <div className="bg-gradient-to-l from-teal-100 via-teal-50 to-teal-100 rounded-xl w-11/12 mx-auto py-0 md:py-1 lg:py-2 mt-4">
                        <li className="text-center"><NavLink className={({ isActive, isPending }) =>
                            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
                        } to='/projects'>Projects</NavLink></li>
                    </div>

                    <div className="bg-gradient-to-l from-teal-100 via-teal-50 to-teal-100 rounded-xl w-11/12 mx-auto py-0 md:py-1 lg:py-2 mt-4">
                        <li className="text-center"><NavLink className={({ isActive, isPending }) =>
                            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
                        } to='/group-projects'>Group Projects</NavLink></li>
                    </div>

                    <div className="bg-gradient-to-l from-teal-100 via-teal-50 to-teal-100 rounded-xl w-11/12 mx-auto py-0 md:py-1 lg:py-2 mt-4">
                        <li className="text-center"><NavLink className={({ isActive, isPending }) =>
                            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
                        } to='/skills'>Skills</NavLink></li>
                    </div>

                    <div className="bg-gradient-to-l from-teal-100 via-teal-50 to-teal-100 rounded-xl w-11/12 mx-auto py-0 md:py-1 lg:py-2 mt-4">
                        <li className="text-center"><NavLink className={({ isActive, isPending }) =>
                            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
                        } to='/education'>Education</NavLink></li>
                    </div>

                    <div className="bg-gradient-to-l from-teal-100 via-teal-50 to-teal-100 rounded-xl w-11/12 mx-auto py-0 md:py-1 lg:py-2 mt-4">
                        <li className="text-center"><NavLink className={({ isActive, isPending }) =>
                            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
                        } to='/experience'>Experience</NavLink></li>
                    </div>

                    <div className="bg-gradient-to-l from-teal-100 via-teal-50 to-teal-100 rounded-xl w-11/12 mx-auto py-0 md:py-1 lg:py-2 mt-4">
                        <li className="text-center"><NavLink className={({ isActive, isPending }) =>
                            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
                        } to='/contact'>Contact</NavLink></li>
                    </div>
                    <hr className="border-1 border-teal-50 w-11/12 mx-auto mt-4" />
                    <div className="mt-4 w-11/12 mx-auto">
                        <div className="flex gap-2 justify-center items-center">
                            <li><Link to={`https://www.facebook.com/shakil.bsb/`}><FaFacebook className="text-teal-100 md:text-2xl opacity-60"></FaFacebook></Link></li>

                            <li><Link to={`https://www.linkedin.com/in/md-shakil-hossain-bsb/`}><FaLinkedin className="text-teal-100 md:text-2xl opacity-60"></FaLinkedin></Link></li>

                            <li><Link to={`https://github.com/Md-ShakilHossain`}><FaGithub className="text-teal-100 md:text-2xl opacity-60"></FaGithub></Link></li>
                        </div>
                    </div>

                </ul>
            </div>
            <div className="flex-1 p-5 md:p-10 bg-gradient-to-br from-teal-100 via-teal-50 to-teal-100 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;