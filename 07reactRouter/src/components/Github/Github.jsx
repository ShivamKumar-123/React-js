import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <section
      className="min-h-[calc(100vh-80px)] flex items-center justify-center
      bg-gradient-to-b from-white via-orange-50 to-white px-6"
    >
      <div
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full
        text-center animate-fadeInUp"
      >
        {/* Avatar */}
        <div className="relative w-36 h-36 mx-auto mb-6">
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-full h-full rounded-full object-cover border-4 border-orange-500 animate-softPulse"
          />
        </div>

        {/* Name & Username */}
        <h2 className="text-3xl font-extrabold text-gray-900">
          {data.name || "GitHub User"}
        </h2>
        <p className="text-gray-500 mt-1">@{data.login}</p>

        {/* Bio */}
        {data.bio && (
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            {data.bio}
          </p>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-orange-50 rounded-xl p-4">
            <p className="text-2xl font-bold text-orange-600">
              {data.followers}
            </p>
            <p className="text-xs text-gray-500 mt-1">Followers</p>
          </div>

          <div className="bg-orange-50 rounded-xl p-4">
            <p className="text-2xl font-bold text-orange-600">
              {data.following}
            </p>
            <p className="text-xs text-gray-500 mt-1">Following</p>
          </div>

          <div className="bg-orange-50 rounded-xl p-4">
            <p className="text-2xl font-bold text-orange-600">
              {data.public_repos}
            </p>
            <p className="text-xs text-gray-500 mt-1">Repos</p>
          </div>
        </div>

        {/* Extra Info */}
        <div className="mt-6 text-sm text-gray-600 space-y-1">
          {data.location && <p>📍 {data.location}</p>}
          {data.company && <p>🏢 {data.company}</p>}
          {data.blog && (
            <p>
              🔗{" "}
              <a
                href={data.blog}
                target="_blank"
                rel="noreferrer"
                className="text-orange-600 hover:underline"
              >
                Portfolio / Blog
              </a>
            </p>
          )}
        </div>

        {/* CTA Button */}
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 px-8 py-3 bg-orange-600 text-white
          rounded-xl shadow-lg hover:bg-orange-700 hover:scale-105
          transition duration-300"
        >
          Visit GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default Github;

/* ================= LOADER ================= */

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/ShivamKumar-123"
  );
  return response.json();
};
