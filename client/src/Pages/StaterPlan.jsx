import Axios from 'axios';
import { useState } from 'react';
import { Ring } from 'react-spinners-css';

const StaterPlan = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [gender, setGender] = useState("");
   const [age, setAge] = useState("");
   const [address, setAddress] = useState("");

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
         url: "https://ash-fitness-backend.herokuapp.com/starterplan",
         data: {
            name: name,
            email: email,
            gender: gender,
            age: age,
            address: address
         },
      }).then(() => {
         spinner.className = "mr-1 spinner d-none style_lds-ring__1T067";
         submitBtn.className = "flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg submit-btn hidden";
         submitedBtn.className = "flex text-white bg-indigo-500 border-0 py-2 px-8 rounded text-lg submited-btn block";
         Alert.className = "alert bg-indigo-100 block border-indigo-500 border-l-4 flex items-center justify-between p-1 pl-2 text-orange-700 block";
         alertText.innerText = "You Were Sucessfully Registered For The Free Plan!!";
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
         <section className="text-gray-600 body-font overflow-hidden pricing">
            <div className="container mx-auto py-20">
               <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Plans</h1>
               </div>
               <div className="flex justify-center">
                  <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                     <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">STARTER</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                           <span>Free</span>
                           <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
                           <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                 <path d="M20 6L9 17l-5-5"></path>
                              </svg>
                           </span>Basic Exercise
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                           <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                 <path d="M20 6L9 17l-5-5"></path>
                              </svg>
                           </span>Warm Up
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                           <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                 <path d="M20 6L9 17l-5-5"></path>
                              </svg>
                           </span>Basic Traning
                        </p>
                        <form className="mt-10">
                           <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full rounded" disabled>Selected
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                 <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                           </button>
                        </form>
                        <p className="text-xs text-gray-500 mt-3">Terms & Conditions Apply.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <hr />

         <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-20 mx-auto">
               <div className="flex flex-col text-center w-full mb-12">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Info</h1>
               </div>
               <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <div className="alert bg-indigo-100 block border-indigo-500 border-l-4 flex items-center justify-between p-1 pl-2 text-orange-700 hidden mb-2" role="alert">
                     <strong className="font-bold alert-text"></strong>
                     <span className="top-0 bottom-0 right-0 text-indigo-500 alert-btn px-4 py-3">
                        <svg className="fill-current h-6 w-6" onClick={closeAlert} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                     </span>
                  </div>
                  <form className="sm-flex" onSubmit={submit}>
                     <div className="-m-2 block flex-wrap sm:flex w-100">
                        <div className="p-2 sm:w-1/2">
                           <div className="relative">
                              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                              <input type="text" value={name} onChange={e => setName(e.target.value)} id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                           </div>
                        </div>
                        <div className="p-2 sm:w-1/2">
                           <div className="relative">
                              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                              <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                           </div>
                        </div>
                        <div className="p-2 sm:w-1/2">
                           <div className="relative">
                              <label htmlFor="gender" className="leading-7 text-sm text-gray-600">Gender</label>
                              <input type="text" value={gender} onChange={e => setGender(e.target.value)} id="gender" name="gender" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                           </div>
                        </div>
                        <div className="p-2 sm:w-1/2">
                           <div className="relative">
                              <label htmlFor="age" className="leading-7 text-sm text-gray-600">Age</label>
                              <input type="number" value={age} onChange={e => setAge(e.target.value)} id="age" name="age" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                           </div>
                        </div>
                        <div className="p-2 sm:w-full">
                           <div className="relative">
                              <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                              <textarea value={address} onChange={e => setAddress(e.target.value)} id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                           </div>
                        </div>
                        <div className="p-2 w-full flex">
                           <button type="submit" className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg submit-btn flex items-center"><Ring color="#fff" size={25} className="spinner d-none mr-1" />Submit</button>
                           <button type="submit" className="flex text-white bg-indigo-500 border-0 py-2 px-8 rounded text-lg submited-btn hidden" disabled>Submited</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </>
   )
}

export default StaterPlan
