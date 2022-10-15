import React from 'react'
const Notification = (open, onClose) => {

    return (
        <div>
            <div className=" absolute z-10 right-5 divide-y mt-12 w-56 origin-top rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="block py-2 px-4 font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white">
                    Notifications
                </div>
                <button type="button" onClick={onClose} className="absolute top-0 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>

                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                    <a href="#" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex-shrink-0">
                            <img className="w-11 h-11 rounded-full"
                                src="https://cdna.artstation.com/p/assets/images/images/045/610/778/large/seonghwan-jang-jy-flcl38-02.jpg?1643130229"
                                alt="Jese image" />
                        </div>
                        <div className="pl-3 w-full">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message from <span className="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                        </div>
                    </a>
                </div>

                {/* button view all */}
                <a href="#" className="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <div className="inline-flex items-center ">
                        <svg className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                        View all
                    </div>
                </a>
            </div>

        </div>
    )
}

export default Notification