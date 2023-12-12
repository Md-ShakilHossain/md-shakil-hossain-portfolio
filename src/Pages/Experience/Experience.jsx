import { Helmet } from "react-helmet-async";
import sad from "../../assets/images/sad.png"

const Experience = () => {
    return (
        <div>
            <Helmet><title>Experience</title></Helmet>
            <h2 className="text-4xl text-center font-bold mb-4">Experience</h2>
            <hr className="mb-4" />
            <div className="flex justify-center">
                <img src={sad} alt="" className="w-60 md:w-72" />
            </div>
            <div>
                <p className="md:text-justify">I have no industrial experience. Still now i am fresher and at learning stage. I am hard working, developing my skills. I have already some projects that I mentioned at Projects page. Recently I have completed a Full Stack (MERN) Web Development Course with Jhankar Mahbub at Programming Hero. I am very comfortable at Front-end with React, Tailwind, DaysiUi, Flowbite. But I know Nodejs, MongoDb, ExpressJs. I have explore many library or package, for example: Rehcart, Axios, JWT, swiper, react hook form etc.</p>
            </div>
            <hr className="mt-12" />
            <p className="mt-2 text-center text-gray-400">copyright@2023 - All Right Reserve by Md. Shakil Hossain</p>
        </div>
    );
};

export default Experience;