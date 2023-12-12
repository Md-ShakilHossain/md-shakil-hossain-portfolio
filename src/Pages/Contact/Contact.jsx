import { Helmet } from "react-helmet-async";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bfm6gia', 'template_t8ghqgv', form.current, 'Hu6qBS66oC5ioPjYF')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div>
            <Helmet><title>Contact</title></Helmet>
            <h2 className="text-4xl text-center font-bold mb-4">Contact With Me</h2>
            <hr className="mb-4" />
            <h4 className="text-center text-xl my-2">You can message me, I will contact with you through Gmail.</h4>

            <div className="bg-teal-100 w-60 md:w-96 p-4 md:p-8 mx-auto rounded-xl shadow-xl">
                <form ref={form} onSubmit={sendEmail}>
                    <p className="md:text-xl font-semibold mb-1 md:mb-2">Your Name:</p>
                    <input type="text" name="name" className="w-full p-1 md:py-2 rounded-lg border-2 border-b-teal-600 border-t-0"/>

                    <p className="md:text-xl font-semibold mb-1 md:mb-2">Your Email:</p>
                    <input type="text" name="email" className="w-full p-1 md:py-2 rounded-lg border-2 border-b-teal-600 border-t-0"/>

                    <p className="md:text-xl font-semibold mt-4 mb-1 md:mb-2">Message:</p>
                    <input type="text" name="message" className="w-full py-4 rounded-lg border-2 border-b-teal-600 border-t-0"/>

                    <input type="submit" value="Send" className="btn btn-outline w-full mt-4 bg-white border-b-4 shadow-xl uppercase border-teal-600 border-t-0 text-xl"/>
                </form>
            </div>
            <hr className="mt-8" />
            <p className="mt-2 text-center text-gray-400">copyright@2023 - All Right Reserve by Md. Shakil Hossain</p>
        </div>
    );
};

export default Contact;