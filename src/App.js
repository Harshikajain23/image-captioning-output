import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ImageShowcase() {
  const images = Array.from({ length: 20 }, (_, i) =>
    require(`./assets/${i + 1}-ic.JPG`)
  );

  const [page, setPage] = React.useState(0);
  const perPage = 2;

  // NEXT PAGE (loop)
  const nextPage = () => {
    const totalPages = Math.ceil(images.length / perPage);
    if (page + 1 < totalPages) {
      setPage(page + 1);
    } else {
      setPage(0); // back to first page
    }
  };

  // PREV PAGE (loop)
  const prevPage = () => {
    const totalPages = Math.ceil(images.length / perPage);
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(totalPages - 1); // go to last page
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-600 to-gray-300 overflow-hidden">
      <h1 className="mt-[40px] text-[35px] font-semibold text-white text-center">
        I am unable to host the model online for free due to its large size. The
        outcome of the model is shown below
      </h1>

      <div className="flex gap-4 w-full">
        {/* LEFT BUTTON */}
        <button
          onClick={prevPage}
          className="h-12 w-12 flex mt-[210px] items-center justify-center rounded-full bg-white shadow hover:bg-gray-200"
        >
          <FiChevronLeft size={30} color="gray" />
        </button>

        {/* GRID IMAGES */}
        <div className="mt-[30px] mb-[30px] grid grid-cols-2 grid-rows-1 gap-4 flex-1">
          {images
            .slice(page * perPage, page * perPage + perPage)
            .map((src, idx) => (
              <div
                key={idx}
                className="w-full h-[400px] bg-white rounded-2xl shadow overflow-hidden flex justify-center items-center"
              >
                <img
                  src={src}
                  alt={`img-${idx}`}
                  className="w-700 justify-center item-center h-[400px] object-coverpx] object-cover"
                />
              </div>
            ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextPage}
          className="h-12 w-12 flex mt-[210px] items-center justify-center rounded-full bg-white shadow hover:bg-gray-200"
        >
          <FiChevronRight size={30} color="gray" />
        </button>
      </div>
    </div>
  );
}
