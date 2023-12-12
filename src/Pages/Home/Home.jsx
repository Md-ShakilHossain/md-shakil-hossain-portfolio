import { Helmet } from "react-helmet-async";
import { useTypewriter } from "react-simple-typewriter";
import flower from '../../assets/images/flower.png';
import cv from '../../../public/cv.pdf'

const Home = () => {

    const [text] = useTypewriter({
        words: ['Developer'],
        loop: {},
        typeSpeed: 200
    });

    const handleDownloadResume = () => {
        console.log("clicked");
        const link = document.createElement('a');
        link.href = { cv };
        link.download = 'Resume-of-Md-Shakil-Hossain.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center">
                    <div className="md:w-3/5 lg:w-2/5">
                        <img src={flower} className="border-b-4 md:border-b-8 border-rose-200" />
                    </div>
                    <div className="lg:w-3/5">
                        <h2 className="lg:text-3xl text-center">
                            Hi ! I am <span className="font-bold">{`Md. Shakil Hossain`}</span>
                        </h2>

                        <h2 className="lg:text-xl text-center">
                            But You can call me as <span className="font-bold uppercase">{`"Shakil"`}</span>
                        </h2>
                        <h4 className="lg:text-xl text-center lg:mt-8 text-orange-600 font-bold">Web {text}</h4>

                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleDownloadResume}
                                className="btn btn-outline border-b-4 border-teal-500 border-t-0 uppercase text-violet-800 font-bold shadow-xl">Get My Resume</button>
                        </div>
                    </div>
                </div>

            </div>
            <hr />
            <div className="mt-4 shadow-xl p-2 rounded-md">
                <h2 className="text-center text-sm md:text-xl font-bold">Core Values and Beliefs</h2>
                <div>
                    <p className="mt-2 text-gray-500 text-sm md:text-lg md:text-justify">
                        {`As I am a React and Tailwind based front-end developer, my core values revolve around user-centric design, continuous learning, and collaborative communication. I prioritize code quality, maintainability, and adhere to agile methodologies. Efficiency and performance are key, along with a meticulous attention to detail. I thrive on problem-solving and bring a passion for innovation to push the boundaries of web development.`}
                    </p>
                </div>
            </div>

            <hr className="mt-8" />
            <p className="mt-2 text-center text-gray-400">copyright@2023 - All Right Reserve by Md. Shakil Hossain</p>

        </div>
    );
};

export default Home;
