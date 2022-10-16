// import { mdiMapMarker } from '@mdi/js';

export default function PhotoProfileUser() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Account Profile</h6>
                    </div>
                </div>
                <img className="w-40 h-40 rounded-full self-center" src="https://cdn1-production-images-kly.akamaized.net/Sn5EjcEhFI-jWocCljrP7CZRwyw=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg" alt="Rounded avatar" />
                <h4 className="text-center font-bold mt-4">Hanif Satrio Rimamtomo <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">She/Her</span></h4>
                <p className="text-center font-semibold text-sm text-gray-400">Jl Matrip No. 35 Pancoran Bondowoso</p>
                <p className="text-center font-semibold text-sm text-gray-400">Mahasiswa</p>
                <p className="text-center font-semibold text-sm text-gray-400">Jember, Jawa Timur, Indonesia</p>
                <p className="text-center font-semibold text-sm text-gray-800">@HanifSatrio</p>
                <a href="/admin/profile/edit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none sm:w-auto m-6 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Accepted</a>
                <a href="/admin/profile/edit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none sm:w-auto m-6 focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 mt-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Denied</a>
            </div>
        </>
    )
}