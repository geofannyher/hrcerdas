import React from 'react'

function CardBigFive() {
    return (
        <div className='relative flex flex-col min-w-0 break-words w-full mb-6 mt-8 shadow-md rounded p-4'>
            <div className='m-4'>
                <p className='text-left text-xl font-bold text-gray-500'>Personaliy</p>
                <div class="mb-1 text-base font-medium dark:text-white">Openness</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300 w-20" ></div>
                </div>
                <div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Conscientiousness</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-blue-600 h-2.5 rounded-full w-88"></div>
                </div>
                <div class="mb-1 text-base font-medium text-red-700 dark:text-red-500">ExtraVersion</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-red-600 h-2.5 rounded-full dark:bg-red-500 w-70" ></div>
                </div>
                <div class="mb-1 text-base font-medium text-green-700 dark:text-green-500">Agreeableness</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-80"></div>
                </div>
                <div class="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Neuroticism</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-yellow-400 h-2.5 rounded-full w-20" ></div>
                </div>
            </div>
        </div>
    )
}

export default CardBigFive