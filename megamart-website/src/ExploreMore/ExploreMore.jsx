import React from "react";

const exploreItems = [
  { id: 1, img: "./src/assets/img/1.png", title: "Megapass" },
  { id: 2, img: "./src/assets/img/2.png", title: "Topwear" },
  { id: 3, img: "./src/assets/img/3.png", title: "Bottomwear" },
  { id: 4, img: "./src/assets/img/4.png", title: "Womenswear" },
  { id: 5, img: "./src/assets/img/5.png", title: "Kidswear" },
  { id: 6, img: "./src/assets/img/6.png", title: "Innerwear" },
];

const ExploreMore = () => {
  return (
    <div className="w-full py-10 text-center">
      <h2 className="text-3xl font-bold mb-8">EXPLORE MORE</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {exploreItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-40 transition-transform hover:scale-105"
          >
            <div className="bg-[#f6f3ef] rounded-xl shadow-md p-3">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg object-cover w-36 h-36"
              />
            </div>
            <p
              className={`mt-3 text-lg font-semibold ${
                item.title === "Megapass" ? "text-red-500" : "text-gray-800"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
