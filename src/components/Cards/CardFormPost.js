import axios from 'axios';
import {useState,useEffect} from 'react';

export default function CardFormPost() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded p-4">
                <div className="overflow-x-auto relative">
                <form>
                    <div className="mb-6">
                        <label for="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Posisi Yang Ditawarkan</label>
                        <input type="text" id="role" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Masukkan Posisi Pekerjaan..." required/>
                    </div>
                    <div className="mb-6">
                        <label for="coveredArea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Area Penugasan</label>
                        <input type="text" id="coveredArea" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Masukkan Daerah Penugasan..." required/>
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
                        <textarea id="descRole" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Deskripsi Posisi Pekerjaan...."></textarea>
                    </div>
                    <div className="mb-6">
                        <label for="qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Kualifikasi</label>
                        <textarea id="qualification" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Kualifikasi Pekerjaan...."></textarea>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>
                </form>
                </div>
            </div>
        </>
    )
}