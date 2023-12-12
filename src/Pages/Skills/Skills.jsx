import { Helmet } from "react-helmet-async";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    // Replace these percentages with your actual skill levels
    const reactSkill = 80;
    const tailwindSkill = 90;
    const daisyuiSkill = 85;
    const flowbiteSkill = 60;
    const nodejsSkill = 60;
    const mongodbSkill = 40;

    return (
        <div>
            <Helmet><title>Skills</title></Helmet>
            <h2 className="text-4xl text-center font-bold mb-4">My Skills</h2>
            <hr className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:mt-32">
                <div className="text-center w-40">
                    <CircularProgressbar
                        value={reactSkill}
                        text={`${reactSkill}%`}
                        styles={buildStyles({
                            pathColor: `#ff0000`, // Red path color
                            textColor: '#ff0000', // Red text color
                        })}
                    />
                    <p className="mt-2 text-2xl">React</p>
                </div>
                <div className="text-center w-40">
                    <CircularProgressbar
                        value={tailwindSkill}
                        text={`${tailwindSkill}%`}
                        styles={buildStyles({
                            pathColor: `#ff0000`, // Red path color
                            textColor: '#ff0000', // Red text color
                        })}
                    />
                    <p className="mt-2 text-2xl">Tailwind</p>
                </div>
                <div className="text-center w-40">
                    <CircularProgressbar
                        value={daisyuiSkill}
                        text={`${daisyuiSkill}%`}
                        styles={buildStyles({
                            pathColor: `#ff0000`, // Red path color
                            textColor: '#ff0000', // Red text color
                        })}
                    />
                    <p className="mt-2 text-2xl">DaisyUI</p>
                </div>
                <div className="text-center w-40">
                    <CircularProgressbar
                        value={flowbiteSkill}
                        text={`${flowbiteSkill}%`}
                        styles={buildStyles({
                            pathColor: `#ff0000`, // Red path color
                            textColor: '#ff0000', // Red text color
                        })}
                    />
                    <p className="mt-2 text-2xl">Flowbite</p>
                </div>
                <div className="text-center w-40">
                    <CircularProgressbar
                        value={nodejsSkill}
                        text={`${nodejsSkill}%`}
                        styles={buildStyles({
                            pathColor: `#ff0000`, // Red path color
                            textColor: '#ff0000', // Red text color
                        })}
                    />
                    <p className="mt-2 text-2xl">NodeJs</p>
                </div>
                <div className="text-center w-40">
                    <CircularProgressbar
                        value={mongodbSkill}
                        text={`${mongodbSkill}%`}
                        styles={buildStyles({
                            pathColor: `#ff0000`, // Red path color
                            textColor: '#ff0000', // Red text color
                        })}
                    />
                    <p className="mt-2 text-2xl">MongoDB</p>
                </div>

            </div>
            <hr className="mt-8 lg:mt-32" />
            <p className="mt-2 text-center text-gray-400">copyright@2023 - All Right Reserve by Md. Shakil Hossain</p>
        </div>

    );
};

export default Skills;
