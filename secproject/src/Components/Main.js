import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Main = () => {
  return (
    <div className="flex h-screen">
      <div className=" text-white text-3xl h-screen w-46  justify-center">
        {/* <li className='bg-slate-600 hover:bg-slate-600 px-8'>Home</li> */}
        <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">Home</p>
        <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">Profile</p>
        <p className="py-4 px-12 hover:bg-slate-600 flex cursor-pointer">
          <IoIosArrowForward />
          <span className="ml-2">My Profile</span>
        </p>
        
        <p className="py-4 px-12 hover:bg-slate-600 flex cursor-pointer">
          <IoIosArrowForward />
          <span className="ml-2">Favourites</span>
        </p>
        <p className="py-4 px-12 hover:bg-slate-600 flex cursor-pointer">
          <IoIosArrowForward />
          <span className="ml-2">Downloads</span>
        </p>
        <p className="py-4 px-12 hover:bg-slate-600 flex cursor-pointer">
          <IoIosArrowForward />
          <span className="ml-2">Logout</span>
        </p>
        <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">Trending</p>
        <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer bg-amber-900">
          Subscription
        </p>
        <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">History</p>
        <p className="py-4 px-12 hover:bg-slate-600 flex cursor-pointer">
          <IoIosArrowForward />
          <span className="ml-2">Tourist</span>
        </p>
        <p className="py-4 px-12 hover:bg-slate-600 flex cursor-pointer">
          <IoIosArrowForward />
          <span className="ml-2">Human</span>
        </p>
      </div>
      <span className="w-[2px] h-screen bg-slate-800 m-0"></span>
      <div class="w-full top-4 my-2 mx-auto p-12">
        <div className="py-20 items-center  flex justify-center">
        <p className="text-white text-6xl italic font-semibold">Subscription Plan</p>
        </div>
        <table class="min-w-full text-3xl bg-transparent text-white border border-gray-400">
          <thead>
            <tr className="border-b-8 border-gray-400 w-full">
              <th class="py-3 px-6 border-r  font-semibold text-white border-b border-gray-400"></th>
              <th class="py-3 px-6 border-r-4 font-semibold text-white border-b border-gray-400">
                Free
              </th>
              <th class="py-3 px-6 border-r-4 font-semibold text-white border-b border-gray-400">
                Monthly
              </th>
              <th class="py-3 px-6 border-r font-semibold text-white border-b border-gray-400">
                Yearly
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class=" border-gray-400">
              <td class="py-4 px-6  border-r text-center">Generations</td>
              <td class="py-4 px-6 border-gray-400 border-r-4 text-center">5</td>
              <td class="py-4 px-6 border-gray-400 border-r-4 text-center">150</td>
              <td class="py-4 px-6 border-r text-center">2000</td>
            </tr>
            <tr class="border-gray-400">
              <td class="py-4 px-6 border-r text-center">Downloads</td>
              <td class="py-4 px-6 border-gray-400 border-r-4 text-center">0</td>
              <td class="py-4 px-6 border-gray-400 border-r-4 text-center">40</td>
              <td class="py-4 px-6 border-r text-center">500</td>
            </tr>
            <tr class="border-gray-400">
              <td class="py-4 px-6 border-r text-center">Quality</td>
              <td class="py-4 px-6 border-gray-400 border-r-4 text-center">720 p</td>
              <td class="py-4 px-6 border-gray-400 border-r-4 text-center">1440 p</td>
              <td class="py-4 px-6 border-r text-center">1440 p</td>
            </tr>
            <tr class=" border-gray-400">
              <td class="py-4 px-6 border-r text-center">Price</td>
              <td class="py-4 px-6 border-gray-400 border-r-4 text-center"></td>
              <td class="py-4 px-6 border-gray-400 font-semibold text-4xl border-r-4 text-center">
                15 $
              </td>
              <td class="py-4 px-6  font-semibold text-4xl border-r text-center">
                150 $
              </td>
            </tr>
            <tr class="">
              <td class="py-4 px-6 border-r text-center"></td>
              <td class="py-4 px-6 border-gray-400 border-r-4 text-center"></td>
              <td class="py-4 px-6 border-gray-400 border-r-4 text-center">
                <button className="border-2 px-2 pb-2 hover:bg-slate-600">
                  upgrade
                </button>
              </td>
              <td class="py-4 px-6  border-r text-center">
                <button className="border-2 px-2 pb-2 hover:bg-slate-600 ">
                  upgrade
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
