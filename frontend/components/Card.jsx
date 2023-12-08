import React from "react";

const Card = ({title, description, author, readTime}) => {
  return (
      <div className="w-full lg:max-w-full lg:flex cursor-pointer">
        <div className="border border-gray-400 dark:border-gray-800 bg-white dark:bg-neutral-900 rounded-lg p-6 flex flex-col justify-between leading-normal max-w-xl">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2 dark:text-gray-300">
              {title}
            </div>
            <p className="text-gray-700 text-base dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{author}</p>
              <p className="text-gray-600">{readTime} hours</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card
