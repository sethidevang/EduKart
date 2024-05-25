import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="bg-zinc-100 font-sans leading-normal tracking-normal">
      <Header />

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-white p-4 shadow rounded">
            <p>Your subscription ends on 25 February 2015</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded mt-2">
              Active
            </button>
          </div>
          <div className="bg-white p-4 shadow rounded mt-4">
            <h2 className="font-bold text-lg">Courses</h2>
            <ul className="list-disc pl-5">
              <li>Basics of HTML</li>
              <li>Angular in Steps</li>
              <li>Bootstrap Foundations</li>
            </ul>
            <Link to="/course">
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                View All
              </button>
            </Link>
          </div>
          <div className="bg-white p-4 shadow rounded mt-4">
            <h2 className="font-bold text-lg">Quizzes</h2>
            <p>Title of quiz goes here</p>
            <p>Course: Basics of HTML</p>
            <p>Score: 5.8 Good</p>
            <button className="bg-zinc-300 text-black py-2 px-4 rounded mt-4">
              Go to Results
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/4 p-4">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-bold text-lg">Rewards</h2>
            <div className="flex space-x-2 mt-2">
              <span className="w-6 h-6 bg-purple-300 rounded-full"></span>
              <span className="w-6 h-6 bg-green-300 rounded-full"></span>
              <span className="w-6 h-6 bg-yellow-300 rounded-full"></span>
              <span className="w-6 h-6 bg-pink-300 rounded-full"></span>
            </div>
          </div>
          <div className="bg-white p-4 shadow rounded mt-4">
            <h2 className="font-bold text-lg">Certificates (4)</h2>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-zinc-200 p-2 rounded">Certificate 1</div>
              <div className="bg-zinc-200 p-2 rounded">Certificate 2</div>
              <div className="bg-zinc-200 p-2 rounded">Certificate 3</div>
              <div className="bg-zinc-200 p-2 rounded">Certificate 4</div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-bold text-lg">Profile</h2>
            <div className="flex items-center">
              <img
                src="https://placehold.co/50x50"
                alt="Profile Image"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p>NAME: XYX</p>
                <p>CLASS: XYX</p>
                <p>DOB: XYS</p>
                <p>ROLL NO.: 998</p>
                <p>BLOOD GROUP: 332</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow rounded mt-4">
            <h2 className="font-bold text-lg">Forum Activity</h2>
            <ul className="list-disc pl-5">
              <li>
                Can someone help me with AngularJS?{" "}
                <span className="text-zinc-500">1 hr ago</span>
              </li>
              <li>
                Can someone help me with AngularJS?{" "}
                <span className="text-zinc-500">2 hrs ago</span>
              </li>
              <li>
                Can someone help me with AngularJS?{" "}
                <span className="text-zinc-500">3 hrs ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
