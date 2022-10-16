export default function FormPassword() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Edit Password</h6>
                    </div>
                </div>

                <form>
                    <div className="grid gap-6 mb-6 m-6">
                        <div>
                            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Current Password</label>
                            <input type="password" id="password_current" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New Password</label>
                            <input type="password" id="password_new" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New Password Confirm</label>
                            <input type="password" id="password_confirm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mt-2">
                            <p className="font-semibold text-sm">Password requirements:</p>
                            <p className="font-medium text-sm text-gray-600">Ensure that these requirements are met:</p>
                            <p className="font-medium text-xs text-gray-600 px-2">At least 10 characters (and up to 100 characters)</p>
                            <p className="font-medium text-xs text-gray-600 px-2">At least one lowercase character</p>
                            <p className="font-medium text-xs text-gray-600 px-2">Inclusion of at least one special character, e.g., ! @ # ?</p>
                            <p className="font-medium text-xs text-gray-600 px-2">Some text here zoltan</p>
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none m-6 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save New Password</button>
                </form>

            </div>
        </>
    )
}