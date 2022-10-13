export default function Rating() {
    return (
        <>
             <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="flex justify-between">
                        <h6 className="text-blueGray-700 text-center text-xl font-bold">Rating</h6>
                    </div>
                </div>
                <img class="w-40 h-40 rounded-full self-center" src="https://cdn1-production-images-kly.akamaized.net/Sn5EjcEhFI-jWocCljrP7CZRwyw=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg" alt="Rounded avatar" />
                <h4 className="text-center font-bold mt-4">NAMA LENGKAP</h4>
                <p className="text-center font-semibold text-sm text-gray-400">Jl Matrip No. 35 Pancoran Bondowoso</p>
                <p className="text-center font-semibold text-sm text-gray-400">PT Global Data Inspirasi</p>
                <a href="/admin/profile/edit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none sm:w-auto m-6 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Profile</a>

            </div>
        </>
    )
}