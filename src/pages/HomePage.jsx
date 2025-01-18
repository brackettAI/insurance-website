import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HomePage = ({ nextPage }) => {
  return (
      <div className="flex flex-col items-center justify-center bg-blue-50">
          <h1 className="text-3xl font-bold mb-4">Welcome to Insurance Quote</h1>
          <p className="text-lg mb-8 text-center">Get started with a quick and easy process to request an insurance
              quote tailored for your business.</p>
          <button
              onClick={nextPage}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-lg text-lg"
          >
              Request a Quote
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
                  <DirectionsCarIcon className="text-blue-600 text-4xl mb-2"/>
                  <p className="text-blue-600 font-semibold">Get an auto quote</p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
                  <AccountBalanceIcon className="text-blue-600 text-4xl mb-2"/>
                  <p className="text-blue-600 font-semibold">Checking accounts</p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
                  <HomeIcon className="text-blue-600 text-4xl mb-2"/>
                  <p className="text-blue-600 font-semibold">Home insurance</p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
                  <CreditCardIcon className="text-blue-600 text-4xl mb-2"/>
                  <p className="text-blue-600 font-semibold">Credit cards</p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
                  <ApartmentIcon className="text-blue-600 text-4xl mb-2"/>
                  <p className="text-blue-600 font-semibold">Get a renters quote</p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
                  <FavoriteIcon className="text-blue-600 text-4xl mb-2"/>
                  <p className="text-blue-600 font-semibold">Life insurance</p>
              </div>
          </div>
      </div>
  );
};

export default HomePage;
