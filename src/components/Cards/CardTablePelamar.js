export default function CardTablePelamar() {
    return (
        <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded p-4">
            <div class="overflow-x-auto relative">
                <div class="pb-4 bg-white dark:bg-gray-900 p-2">
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative mt-1">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search the employes" />
                    </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Job Position
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Salary
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Score
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="https://cssh.northeastern.edu/wp-content/uploads/2020/01/PHIL-Nathanson-web.jpg" alt="eka" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                4 Years
                            </td>
                            <td class="py-4 px-6">
                                UI / UX Designer
                            </td>
                            <td class="py-4 px-6">
                                $2999
                            </td>
                            <td class="py-4 px-6">
                                <span class="bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">90</span>
                            </td>
                            <td class="flex items-center py-4 px-6 space-x-3">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                        <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="https://cssh.northeastern.edu/wp-content/uploads/2020/01/PHIL-Nathanson-web.jpg" alt="eka" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                5 Years
                            </td>
                            <td class="py-4 px-6">
                                Mobile Developer
                            </td>
                            <td class="py-4 px-6">
                                $1999
                            </td>
                            <td class="py-4 px-6">
                                <span class="bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">90</span>
                            </td>
                            <td class="flex items-center py-4 px-6 space-x-3">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="https://cssh.northeastern.edu/wp-content/uploads/2020/01/PHIL-Nathanson-web.jpg" alt="eka" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                1 Years
                            </td>
                            <td class="py-4 px-6">
                                Frontend Developer
                            </td>
                            <td class="py-4 px-6">
                                $99
                            </td>
                            <td class="py-4 px-6">
                                <span class="bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">50</span>
                            </td>
                            <td class="flex items-center py-4 px-6 space-x-3">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                        <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="https://cssh.northeastern.edu/wp-content/uploads/2020/01/PHIL-Nathanson-web.jpg" alt="eka" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                Non Experience
                            </td>
                            <td class="py-4 px-6">
                                Frontend Developer
                            </td>
                            <td class="py-4 px-6">
                                $799
                            </td>
                            <td class="py-4 px-6">
                                <span class="bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">70</span>
                            </td>
                            <td class="flex items-center py-4 px-6 space-x-3">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="https://cssh.northeastern.edu/wp-content/uploads/2020/01/PHIL-Nathanson-web.jpg" alt="eka" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                2 Years
                            </td>
                            <td class="py-4 px-6">
                                Backend Developer
                            </td>
                            <td class="py-4 px-6">
                                $999
                            </td>
                            <td class="py-4 px-6">
                                <span class="bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">90</span>
                            </td>
                            <td class="flex items-center py-4 px-6 space-x-3">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </>
    )
}