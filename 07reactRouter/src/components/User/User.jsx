import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div
      className="min-h-[calc(100vh-80px)] flex items-center justify-center
      bg-gradient-to-b from-white via-orange-50 to-white"
    >
      <div
        className="bg-white rounded-3xl p-10 shadow-xl text-center
        animate-fadeInUp max-w-md w-full"
      >
        <h1 className="text-3xl font-extrabold text-gray-900">
          User Profile
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Viewing profile for
        </p>

        <div
          className="mt-6 px-6 py-3 rounded-xl bg-orange-100
          text-orange-700 font-semibold text-xl animate-softPulse"
        >
          @{userid}
        </div>

        <p className="mt-6 text-gray-500 text-sm">
          Dynamic route data fetched using <span className="font-medium">useParams()</span>
        </p>
      </div>
    </div>
  );
}

export default User;
