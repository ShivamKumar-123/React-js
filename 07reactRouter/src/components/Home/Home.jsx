import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-6">

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-50 via-white to-pink-50 py-20 mb-28">

        <div className="relative z-10 max-w-xl ml-auto text-center md:text-right space-y-6 animate-fadeInRight pr-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Download Now
            <span className="block text-orange-600">Lorem Ipsum</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Experience smooth performance and modern UI built with React &
            Tailwind CSS.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl shadow-lg hover:bg-orange-700 hover:scale-105 transition duration-300"
          >
            Download Now
          </Link>
        </div>

        <img
          src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
          alt="Coding Hero"
          className="absolute left-6 bottom-0 w-72 md:w-96 h-[390px] object-cover rounded-2xl shadow-2xl animate-float hidden sm:block"
        />
      </div>

      {/* ================= FEATURES SECTION ================= */}
      <section className="mb-28">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Why Choose Our App?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Fast Performance",
              desc: "Optimized for speed with modern React architecture.",
            },
            {
              title: "Secure",
              desc: "Built with security-first best practices.",
            },
            {
              title: "Responsive Design",
              desc: "Looks perfect on mobile, tablet, and desktop.",
            },
            {
              title: "Easy to Use",
              desc: "Clean UI with intuitive user experience.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="mb-28">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          App Screenshots
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
            "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
            "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
            "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
            "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
          ].map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="mb-28">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          What Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Amazing UI and smooth performance!",
            "This app saved me a lot of time.",
            "Best experience on both mobile and desktop.",
          ].map((text, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <p className="text-gray-600 italic">"{text}"</p>
              <h4 className="mt-4 font-semibold text-gray-900">
                — Happy User
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="mb-28 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Basic", price: "$0", desc: "For personal use" },
            { title: "Pro", price: "$9.99", desc: "For professionals" },
            { title: "Enterprise", price: "$29.99", desc: "For businesses" },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-orange-600 text-3xl font-extrabold mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.desc}</p>
              <Link
                to="/"
                className="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition"
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="mb-28 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Alice", role: "Frontend Developer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "Bob", role: "Backend Developer", img: "https://randomuser.me/api/portraits/men/46.jpg" },
            { name: "Clara", role: "UI/UX Designer", img: "https://randomuser.me/api/portraits/women/47.jpg" },
            { name: "David", role: "Project Manager", img: "https://randomuser.me/api/portraits/men/48.jpg" },
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="mb-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "Is this app free?", a: "Yes, the basic plan is completely free." },
            { q: "Can I use it on mobile?", a: "Absolutely! It is fully responsive." },
            { q: "Is my data secure?", a: "Yes, we use best security practices to protect your data." },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      {/* ================= STATISTICS SECTION ================= */}
<section className="mb-28 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Achievements</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
    {[
      { label: "Downloads", value: "50K+" },
      { label: "Active Users", value: "10K+" },
      { label: "5-Star Reviews", value: "4.8/5" },
    ].map((stat, index) => (
      <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
        <p className="text-4xl font-extrabold text-orange-600 mb-2">{stat.value}</p>
        <p className="text-gray-600">{stat.label}</p>
      </div>
    ))}
  </div>
</section>

{/* ================= INTEGRATIONS SECTION ================= */}
<section className="mb-28 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-12">Integrations</h2>
  <div className="flex flex-wrap justify-center gap-12">
    {[
      "https://cdn.worldvectorlogo.com/logos/github-icon.svg",
      "https://cdn.worldvectorlogo.com/logos/slack-icon.svg",
      "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
      "https://cdn.worldvectorlogo.com/logos/google-drive-1.svg",
    ].map((logo, index) => (
      <img key={index} src={logo} alt="Integration" className="w-20 h-20 object-contain" />
    ))}
  </div>
</section>

{/* ================= BLOG / ARTICLES SECTION ================= */}
<section className="mb-28 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-12">Latest Articles</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { title: "Getting Started with React", img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" },
      { title: "Top 10 Tailwind Tips", img: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg" },
      { title: "Improve App Performance", img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" },
    ].map((post, index) => (
      <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
        </div>
      </div>
    ))}
  </div>
    </section>

    {/* ================= NEWSLETTER SECTION ================= */}
    <section className="mb-28 text-center bg-gradient-to-r from-orange-50 via-white to-pink-50 py-20 rounded-3xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 mb-8">Get updates, tips, and latest news delivered to your inbox.</p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-3 rounded-xl border border-gray-300 w-full sm:w-auto"
        />
        <button className="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition">Subscribe</button>
      </form>
    </section>

    {/* ================= CONTACT / SUPPORT SECTION ================= */}
    <section className="mb-28 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact Support</h2>
      <p className="text-gray-600 mb-8">Have questions? Reach out to our support team anytime.</p>
      <form className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
        <input type="text" placeholder="Your Name" className="px-4 py-3 border rounded-xl border-gray-300" />
        <input type="email" placeholder="Your Email" className="px-4 py-3 border rounded-xl border-gray-300" />
        <textarea placeholder="Your Message" className="px-4 py-3 border rounded-xl border-gray-300 h-32"></textarea>
        <button className="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition">Send Message</button>
      </form>
    </section>

      <section className="mb-24 text-center bg-gradient-to-r from-orange-600 to-pink-600 text-white py-20 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-lg">
          Download now and experience the future of modern web apps.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:scale-105 transition"
        >
          Download App
        </Link>
      </section>

    </section>
  );
}
