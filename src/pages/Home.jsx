import React, { Fragment } from "react";
import Header from "../components/Header/Header";

import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    
          <body>
           <Header />
          
            <div className="container mx-auto px-4 py-12 flex flex-wrap items-center bg-purple-500">
              <div className="w-full lg:w-1/2">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4vm-URpyCUDDqwlKirbUVw_3yQcwwZ5CvlcdPt2barrdNzlLa" alt="Education Illustration" className="max-w-full h-auto rounded-lg shadow-lg"></img>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-12">
                <h1 className="text-4xl font-bold text-white mb-4">Online Education</h1>
                <p className="text-white mb-4">
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-white mb-8">
                  Lorem ipsum!
                </p>
                <a href="#" className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-600">Learn more</a>
              </div>
            </div>
            <Footer />
          </body>
      )
}

export default Home;
