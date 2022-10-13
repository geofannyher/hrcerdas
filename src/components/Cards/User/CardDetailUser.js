import React from "react";

// components

export default function Detail() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Detail Profile Account</h6>
                    </div>
                </div>

                <form>
                    <div class="grid gap-6 mb-6 md:grid-cols-2 m-6">
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" disabled />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" disabled />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" disabled />
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0852-3365-2544" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" disabled />
                        </div>
                        <div>
                            <label for="birth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Birth of Date</label>
                            <input type="date" id="birth" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" disabled />
                        </div>
                        <div>
                            <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label>
                            <input type="text" id="twitter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="man" disabled />
                        </div>
                        <div>
                            <label for="residential" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Residential Status</label>
                            <input type="text" id="residential" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mahasiswa" disabled />

                        </div>
                        <div>
                            <label for="industry_category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nationality</label>
                            <input type="text" id="face" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Indonesia" disabled />

                        </div>
                        <div>
                            <label for="adress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                            <textarea id="address" rows="4" cols="6" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Panorama street" disabled ></textarea>
                        </div>
                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About User</label>
                            <textarea id="message" rows="4" cols="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="About" disabled></textarea>
                        </div>
                    </div>
                </form>

            </div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Experience</h6>
                    </div>
                </div>


                <div class="grid gap-6 mb-6 md:grid-cols-2 m-6">
                    <div className="flex flex-wrap">
                        <div className=" xl:w-3/12 px-2">
                            <img class="w-40 h-35 rounded" src="https://andromedia.co.id/wp-content/uploads/2018/04/foto-capita-07.png" alt="Default avatar" />
                        </div>
                        <div className=" xl:w-9/12 px-2">
                            <p className="font-semibold text-xl">Andromedia</p>
                            <p className="font-normal text-gray-400 text-xs">2022</p>

                            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                                <li class="mb-10 ml-4">
                                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Juni 2022</time>
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Create Code From UI Design</h3>
                                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
                                    <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                                </li>
                                <li class="mb-10 ml-4">
                                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Agustus 2022</time>
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Code With Laravel Framework</h3>
                                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                                </li>
                                <li class="ml-4">
                                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oktober 2022</time>
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Create New Framework Javascript</h3>
                                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                </li>
                            </ol>

                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className=" xl:w-3/12 px-2">
                            <img class="w-40 h-35 rounded" src="https://law.uii.ac.id/wp-content/uploads/2021/11/logo-bangkit-2022.png" alt="Default avatar" />
                        </div>
                        <div className=" xl:w-9/12 px-2">
                            <p className="font-semibold text-xl">Bangkit Academy</p>
                            <p className="font-normal text-gray-400 text-xs">2022</p>
                            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                                <li class="mb-10 ml-4">
                                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
                                    <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                                </li>
                                <li class="mb-10 ml-4">
                                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                                </li>
                                <li class="ml-4">
                                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>


            </div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Lecense & Sertificate</h6>
                    </div>
                </div>


                <div class="grid gap-6 mb-6 md:grid-cols-2 m-6">
                    <div className="flex flex-wrap">
                        <div className=" xl:w-3/12 px-2">
                            <img class="w-40 h-35 rounded" src="https://law.uii.ac.id/wp-content/uploads/2021/11/logo-bangkit-2022.png" alt="Default avatar" />
                        </div>
                        <div className=" xl:w-9/12 px-2">
                            <p className="font-semibold text-xl">Bangkit Academy</p>
                            <p className="font-normal text-gray-400 text-xs">2022</p>
                            <a type="button" href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 mt-2 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Cridential
                                <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className=" xl:w-3/12 px-2">
                            <img class="w-40 h-35 rounded" src="https://law.uii.ac.id/wp-content/uploads/2021/11/logo-bangkit-2022.png" alt="Default avatar" />
                        </div>
                        <div className=" xl:w-9/12 px-2">
                            <p className="font-semibold text-xl">Bangkit Academy</p>
                            <p className="font-normal text-gray-400 text-xs">2022</p>
                            <a type="button" href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 mt-2 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Cridential
                                <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg bg-blueGray-100 border-0 mt-8">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Educations</h6>
                    </div>
                </div>


                <div class="grid gap-6 mb-6 md:grid-cols-2 m-6">
                    <div className="flex flex-wrap">
                        <div className=" xl:w-3/12 px-2">
                            <img class="w-20 h-20 rounded" src="https://www.polije.ac.id/wp-content/uploads/2021/03/LOGO-POLITEKNIK-NEGERI-JEMBER.png" alt="Default avatar" />
                        </div>
                        <div className=" xl:w-9/12 px-2">
                            <p className="font-semibold text-xl">Politeknik Negeri Jember</p>
                            <p className="font-bold  text-gray-700 text-xs">S.Trkom</p>
                            <p className="font-normal text-gray-400 text-xs">2019 - 2023</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className=" xl:w-3/12 px-2">
                            <img class="w-20 h-20 rounded" src="https://global-uploads.webflow.com/62d785c9e7b9b749907a5233/62eb38a4b31a6d717886e3d8_minimal-logo-binar-academy.svg" alt="Default avatar" />
                        </div>
                        <div className=" xl:w-9/12 px-2">
                            <p className="font-semibold text-xl">Bangkit Academy</p>
                            <p className="font-bold  text-gray-700 text-xs">S.Trkom</p>
                            <p className="font-normal text-gray-400 text-xs">2022</p>

                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
