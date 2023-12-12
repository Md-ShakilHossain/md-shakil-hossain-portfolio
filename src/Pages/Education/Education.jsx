import { Helmet } from "react-helmet-async";


const Education = () => {
    return (
        <div>
            <Helmet><title>Education</title></Helmet>
            <h2 className="text-4xl text-center font-bold mb-4">Education</h2>
            <hr className="mb-4" />
            <div className="bg-gradient-to-tr from-teal-100 via-teal-50 to-teal-100 p-2 md:p-8 rounded-lg shadow-xl">
                <h2 className="md:text-2xl font-bold">Secondary School Certificate (S.S.C)</h2>
                <hr className="my-2" />
                <p><span className="font-bold">Institute:</span> Konda High School</p>
                <p><span className="font-bold">Board:</span> Dhaka</p>
                <p><span className="font-bold">Group:</span> Science</p>
                <p><span className="font-bold">Passing Year:</span> 2014</p>
                <p><span className="font-bold">Result:</span> GPA-5 (out of 5)</p>
            </div>
            <div className="bg-gradient-to-br from-teal-100 via-teal-50 to-teal-100 p-2 md:p-8 rounded-lg mt-6 shadow-xl">
                <h2 className="md:text-2xl font-bold">Higher Secondary School Certificate (H.S.C)</h2>
                <hr className="my-2" />
                <p><span className="font-bold">Institute:</span> BCIC College</p>
                <p><span className="font-bold">Board:</span> Dhaka</p>
                <p><span className="font-bold">Group:</span> Science</p>
                <p><span className="font-bold">Passing Year:</span> 2016</p>
                <p><span className="font-bold">Result:</span> GPA-5 (out of 5)</p>
            </div>
            <div className="bg-gradient-to-br from-teal-100 via-teal-50 to-teal-100 p-2 md:p-8 rounded-lg mt-6 shadow-xl">
                <h2 className="md:text-2xl font-bold">Bachelor of Sciences (B.Sc)</h2>
                <hr className="my-2" />
                <p><span className="font-bold">Institute:</span> World University of Bangladesh</p>
                <p><span className="font-bold">Subject:</span> Computer Science & Engineering</p>
                <p><span className="font-bold">Passing Year:</span> 2020</p>
                <p><span className="font-bold">Result:</span> GPA-3.93 (out of 4)</p>
            </div>
            <hr className="mt-8" />
            <p className="mt-2 text-center text-gray-400">copyright@2023 - All Right Reserve by Md. Shakil Hossain</p>
        </div>
    );
};

export default Education;