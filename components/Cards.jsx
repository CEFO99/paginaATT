import React from "react";
import Image from "next/image";

function Cards() {
  return (
    <div className="max-w-[1240px] mx-auto py-24">
      <div class="flex flex-wrap -m-4">
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog"
              width="677"
              height="451"
            />
            <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
              <h2 className="text-base font-medium text-indigo-300 mb-1">
                Banda
              </h2>
              <h1 className="text-2xl font-semibold mb-3">
                Iron Weasel
              </h1>
              <p className="leading-relaxed mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                modi, expedita quos doloremque autem ipsum itaque incidunt ipsam
                reprehenderit fuga! Dolores quisquam eius cum accusamus?
              </p>
              <div className="flex items-center flex-wrap ">
                <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                  Ver Perfil
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src=" https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="blog"
              width="677"
              height="451"
            />
            <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
              <h2 className="text-base font-medium text-indigo-300 mb-1">
                Músico
              </h2>
              <h1 className="text-2xl font-semibold mb-3">
                Juan Pérez
              </h1>
              <p className="leading-relaxed mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                modi, expedita quos doloremque autem ipsum itaque incidunt ipsam
                reprehenderit fuga! Dolores quisquam eius cum accusamus?
              </p>
              <div className="flex items-center flex-wrap ">
                <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                  Ver Perfil
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="blog"
              width="677"
              height="451"
            />
            <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
              <h2 className="text-base font-medium text-indigo-300 mb-1">
                October 29, 2021
              </h2>
              <h1 className="text-2xl font-semibold mb-3">
                Mountains are alone
              </h1>
              <p className="leading-relaxed mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                modi, expedita quos doloremque autem ipsum itaque incidunt ipsam
                reprehenderit fuga! Dolores quisquam eius cum accusamus?
              </p>
              <div className="flex items-center flex-wrap ">
                <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
