import { Link } from "react-router-dom";

const Enrol = () => {
   return (
      <>
         <section className="text-gray-600 body-font overflow-hidden pricing">
            <div className="container px-5 py-20 mx-auto">
               <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Plans</h1>
               </div>
               <div className="sm:flex justify-center plan">
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
                        <Link to="/enroll/starter-plan" className="mt-20">
                        <button type="submit" className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Select
                           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                           </svg>
                        </button>
                        </Link>
                        <p className="text-xs text-gray-500 mt-3">Terms & Conditions Apply.</p>
                     </div>
                  </div>
                  <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                     <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                           <span>$38</span>
                           <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                           </svg>
                        </span>Best Equipment
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                           </svg>
                        </span>Best Trainer
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                           </svg>
                        </span>Best Exercise
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                           </svg>
                        </span>Best Traning
                        </p>
                        <Link to="/enroll/pro-plan" className="mt-7">
                           <button type="submit" className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Select
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                 <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                           </button>
                        </Link>
                        <p className="text-xs text-gray-500 mt-3">Terms & Conditions Apply.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Enrol
