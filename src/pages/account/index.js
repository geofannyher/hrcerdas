const Profile = () => {
    return (
        <>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                                    <div>
                                        <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Anggito Suryo Baskoro</a>
                                        <p className="text-base font-light text-gray-500 dark:text-gray-400">Edit Basic Info</p>
                                        <hr />
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Best practices for successful prototypes</h1>
                        </header>
                        <p className="lead">Flowbite is an open-source library of UI components built with the utility-first
                            classNamees from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
                            datepickers.</p>
                    </article>
                </div>
            </main>
        </>
    )
}

export default Profile