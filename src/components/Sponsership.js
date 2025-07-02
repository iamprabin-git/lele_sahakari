// components/SponsorshipCard.jsx
import React from "react";
import Image from "next/image";
import sponser1 from "@/assets/sponser/s1.jpeg";
import sponser2 from "@/assets/sponser/s2.jpeg";
import sponser3 from "@/assets/sponser/s3.jpg";
import Link from "next/link";

const SponsorshipCard = () => {
  // Sponsor data
  const sponsors = [
    {
      id: 1,
      name: "DCUL",
      logo: sponser1,
      description: "District Cooperative Union of Lalitpur",
      since: "2019",
      link: "https://dcul.org.np/",
    },
    {
      id: 2,
      name: "NCBL",
      logo: sponser2,
      description: "National Cooperative Bank Limited",
      since: "2020",
      link: "https://ncbl.com.np/",
    },
    {
      id: 3,
      name: "DACUL",
      logo: sponser3,
      description: "District Agricultural Cooperative Union of Lalitpur",
      since: "2021",
      link: "https://dacul.org.np/",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-500 dark:from-slate-500 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Valued Partners
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            We are proud to partner with industry leaders who support our
            mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="p-6">
                {/* Sponsor logo */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-32 flex items-center justify-center  transition-colors duration-300">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="object-contain p-2"
                      fill
                      sizes="(max-width: 768px) 160px, 200px"
                    />
                  </div>
                </div>

                {/* Sponsor details */}
                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {sponsor.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                  {sponsor.description}
                </p>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 dark:border-slate-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Partner since {sponsor.since}
                  </span>
                  <Link href={sponsor.link} className="px-4 py-2 bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-lg font-medium text-sm hover:bg-blue-100 dark:hover:bg-slate-600 transition-colors duration-300">
                    Visit Website
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorshipCard;
