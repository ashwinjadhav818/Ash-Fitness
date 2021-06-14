import Axios from 'axios';
import { useState } from 'react';
import { Ring } from 'react-spinners-css';

const Contact = () => {
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   
   const submitBtn = document.querySelector('.submit-btn');
   const submitedBtn = document.querySelector('.submited-btn');
   const Alert = document.querySelector('.alert');
   const alertText = document.querySelector('.alert-text');
   const alertBtn = document.querySelector('.alert-btn');
   const spinner = document.querySelector('.spinner');

   const closeAlert = () => {
      Alert.className = "alert bg-indigo-100 block border-indigo-500 border-l-4 flex items-center justify-between p-1 pl-2 text-orange-700 block hidden";
   }

   const submit = (e) => {
      spinner.className = "mr-1 spinner block style_lds-ring__1T067";

      Axios({
         method: "POST",
         url: "https://ash-fitness-backend.herokuapp.com/queries",
         data: {
            email: email,
            message: message,
         },
      }).then(() => {
         spinner.className = "mr-1 spinner d-none style_lds-ring__1T067";
         submitBtn.className = "flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg submit-btn hidden";
         submitedBtn.className = "flex text-white bg-indigo-500 border-0 py-2 px-8 rounded text-lg submited-btn block";
         Alert.className = "alert bg-indigo-100 block border-indigo-500 border-l-4 flex items-center justify-between p-1 pl-2 text-orange-700 block";
         alertText.innerText = "Form Was Submitted Sucessfully!!";
      }).catch(() => {
         spinner.className = "mr-1 spinner d-none style_lds-ring__1T067";
         Alert.className = "alert bg-red-100 block border-red-500 border-l-4 flex items-center justify-between p-1 pl-2 text-red-700 block";
         alertText.innerText = "An Error Occured";
         alertBtn.className = "top-0 bottom-0 right-0 text-red-500 alert-btn px-4 py-3";
      })
      e.preventDefault();
   }

   return (
      <>
         <section>
            <div className="flex flex-col justify-center text-center w-full mb-12">
               <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Contact Us</h1>
            </div>
            <div className="text-gray-600 body-font relative h-70">
               <div className="absolute inset-0 bg-gray-300">
                  <iframe style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29994.138031880237!2d73.78854400000002!3d19.997295!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1617976618050!5m2!1sen!2sin" width="100%" height="100%" frameBorder="0"></iframe>
               </div>
               <div className="container px-5 py-24 mx-auto flex">
                  <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Any Queries</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Give It Down Here</p>
                        <div className="alert bg-indigo-100 block border-indigo-500 border-l-4 flex items-center justify-between p-1 pl-2 text-orange-700 hidden mb-2" role="alert">
                        <strong className="font-bold alert-text"></strong>
                        <span className="top-0 bottom-0 right-0 text-indigo-500 alert-btn px-4 py-3">
                           <svg className="fill-current h-6 w-6" onClick={closeAlert} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </span>
                     </div>
                     <form onSubmit={submit}>
                        <div className="relative mb-4">
                           <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                           <input type="email" value={email} onChange={e => setEmail(e.target.value)}  id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
                        </div>
                        <div className="relative mb-4">
                           <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                           <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                        </div>
                        <button type="submit" className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg submit-btn items-center"><Ring color="#fff" size={25} className="spinner d-none mr-1" />Submit</button>
                        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 rounded text-lg submited-btn hidden" disabled>Submited</button>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Contact
