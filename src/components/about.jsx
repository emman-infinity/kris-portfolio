import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Developer"
              className="rounded-full mx-auto"
              width={300}
              height={300}
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Hi, I'm a passionate developer with experience in web technologies. I love creating user-friendly and
              efficient applications. When I'm not coding, you can find me exploring new technologies or contributing to
              open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

