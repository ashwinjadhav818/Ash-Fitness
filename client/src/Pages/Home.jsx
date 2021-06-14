import { Link } from "react-router-dom";

const Home = () => {
   return (
      <>
         <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
               <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Lets Get Ready To Be Fit
                     <br className="hidden lg:inline-block"/>Lets Hit The Gym
                  </h1>
                  <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nesciunt ipsam, magnam porro unde inventore obcaecati beatae ipsa distinctio sit aspernatur mollitia quidem. Dolore a repellat nesciunt maiores consequatur commodi.</p>
                  <div className="flex justify-center">
                     <Link to="/enroll">
                        <button type="submit" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enroll Now</button>
                     </Link>
                  </div>
               </div>
               <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
               </div>
            </div>
         </section>

         <hr />

         <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
               <div className="flex flex-wrap w-full mb-20">
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                     <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Best Gym Equipment</h1>
                     <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                  </div>
               </div>
               <div className="flex flex-wrap justify-center">
                  <div className="xl:w-1/4 md:w-1/2 p-4">
                     <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://images-na.ssl-images-amazon.com/images/I/31NRahEQPFL._SX425_.jpg" alt="content"/>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Best Adjustable Bench.</h2>
                        <p className="leading-relaxed text-base">We Have The Best Adjustable Bench.</p>
                     </div>
                  </div>
                  <div className="xl:w-1/4 md:w-1/2 p-4">
                     <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://cdn1.coachmag.co.uk/sites/coachmag/files/2017/04/gym-ball-press-up.jpg" alt="content"/>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Best Exercise Ball</h2>
                        <p className="leading-relaxed text-base">We Have The Best Exercise Ball.</p>
                     </div>
                  </div>
                  <div className="xl:w-1/4 md:w-1/2 p-4">
                     <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://www.repfitness.com/media/catalog/product/cache/6031cf661625f6f6abd8f87ef140b802/w/e/web-381b6562.jpg" alt="content"/>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Best Cable Crossover or Functional Trainer</h2>
                        <p className="leading-relaxed text-base">We Have The Best Cable Crossover or Functional Trainer.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Home
