import { useState } from "react"

export default function CardEditFormPost() {

    
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded p-4">
                <div className="overflow-x-auto relative">
                <form>
                    <div className="mb-6">
                        <label for="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Posisi Yang Ditawarkan</label>
                        <input type="text" id="role" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value="UI/UX Designer" required/>
                    </div>
                    <div className="mb-6">
                        <label for="coveredArea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Area Penugasan</label>
                        <input type="text" id="coveredArea" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value="Surabaya" required/>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Tanggal Lowongan Dibuka</label>
                            <input type="date" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="" />
                        </div>
                        <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Tanggal Lowongan Ditutup</label>
                            <input type="date" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label for="descRole" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Deskripsi Posisi Pekerjaan</label>
                        <textarea id="descRole" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="UX Designer adalah jenis pekerjaan yang berhubungan dengan bagaimana meningkatkan kepuasan pengguna aplikasi maupun pengunjung situs yang dilihat dari nilai guna, manfaat, juga kesenangan yang didapatkan si pengguna dari suatu aplikasi atau situs.
                            Sederhananya, UX Designer bertugas untuk membuat aplikasi atau situs yang mudah digunakan oleh pengguna, dan terlihat keren, bagus, namun simple. Karena perasaan pengguna saat berinteraksi dengan interface jadi fokus utamanya. Seperti apakah pengguna merasa senang atau tidak? Apakah pengguna mendapati kesulitan atau tidak? Apakah pengguna puas atau tidak puas setelah berinteraksi. Apakah permasalahan pengguna terpecahkan atau tidak? Juga perasaan-perasaan lainnya.">
                        </textarea>
                    </div>
                    <div className="mb-6">
                        <label for="qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Kualifikasi</label>
                        <textarea id="qualification" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Terampil menggunakan Figma, Adobe Xd, Adobe Photoshop, Adobe Ilustrator dan Corel DrawDapat bekerja dengan bersama maupun sendiri"></textarea>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                </form>
                </div>
            </div>
        </>
    )
}