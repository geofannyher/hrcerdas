import { useEffect, useState, CSSProperties } from "react"
import PulseLoader from "react-spinners/PulseLoader";

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 5000)
  }, [])



  return (
    <div>
      {
        loading ?
          <PulseLoader
            color={"#236bbf"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :

          <div className="container-Hero">
            <div>
              <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                {/* HERO */}
                <div className="section relative z-0 py-16 md:pt-32 md:pb-20 bg-gray-50">
                  <div className="container xl:max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap flex-row -mx-4 justify-center">
                      {/* START CONTENT */}
                      <div className="flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center">
                        <img className="w-full max-w-full h-auto" alt="creative agency" src={`${process.env.PUBLIC_URL}/1.png`}></img>
                      </div>
                      {/* END CONTENT */}

                      {/* START TEXT */}
                      <div className="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
                        <div className="text-center lg:text-left mt-6 lg:mt-0">
                          <div className="mb-12">
                            <h1 className="text-3xl leading-normal text-blue-900 font-bold mb-4">Make it Easy to Find The Right Candidate for Your Company</h1>
                            <p className="text-gray-900 leading-relaxed font-light text-xl mx-auto pb-2">HR Cerdas is a trusted professional talent recruiter and management partner and give you a best feature</p>
                          </div>
                          <a className="py-2.5 px-10 inline-block text-center font-semibold leading-normal text-white bg-blue-900 border-b border-gray-100 rounded-lg hover:ring-0 focus:outline-none focus:ring-0 mr-4" href="/login">
                            GET STARTED
                          </a>
                        </div>
                      </div>
                      {/* END TEXT */}

                    </div>
                  </div>
                </div>
                {/* END HERO */}

                {/* START SERVICES */}
                <div className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
                  <div className="container xl:max-w-6xl mx-auto px-4">
                    {/* HEADING START */}
                    <header className="text-center mx-auto mb-12 lg:px-20">
                      <h2 className="text-2xl leading-normal mb-2 font-bold text-black">Our Services</h2>
                      <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Our Company Have a Few Service For You</p>
                    </header>
                    {/* END HEADER */}

                    {/* START ROW */}
                    <div className="flex flex-wrap flex-row -mx-4 text-center">
                      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                        {/* START SERVICE BLOCK */}
                        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                          <div className="inline-block text-gray-900 mb-4">
                            {/* ICON */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
                          </div>
                          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Fast Tracking</h3>
                          <p className="text-gray-500">HR Cerdas will be give you fast track to monitoring job applicant on your company</p>
                        </div>
                        {/* END SERVICE BLOCK */}
                      </div>

                      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                        {/* START SERVICE BLOCK */}
                        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                          <div className="inline-block text-gray-900 mb-4">
                            {/* ICON */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                          </div>
                          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Include Test for Job Applicant Requirements</h3>
                          <p className="text-gray-500">Headhunter have an easy way to choose job applicant with test</p>
                        </div>
                        {/* END SERVICE BLOCK */}
                      </div>

                      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                        {/* START SERVICE BLOCK */}
                        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                          <div className="inline-block text-gray-900 mb-4">
                            {/* ICON */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
                          </div>
                          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Best Connected</h3>
                          <p className="text-gray-500">You can linked with another account like Linkedin and also Facebook</p>
                        </div>
                        {/* END SERVICE BLOCK */}
                      </div>

                      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                        {/* START SERVICE BLOCK */}
                        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                          <div className="inline-block text-gray-900 mb-4">
                            {/* ICON */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>
                          </div>
                          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Social Media Analytic</h3>
                          <p className="text-gray-500">Improve your recruitment process to get the best talent</p>
                        </div>
                        {/* END SERVICE BLOCK */}
                      </div>

                      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                        {/* START SERVICE BLOCK */}
                        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                          <div className="inline-block text-gray-900 mb-4">
                            {/* ICON */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
                          </div>
                          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">User Friendly</h3>
                          <p className="text-gray-500">With the nice appearance will make you easily use HR Cerdas</p>
                        </div>
                        {/* END SERVICE BLOCK */}
                      </div>

                      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                        {/* START SERVICE BLOCK */}
                        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                          <div className="inline-block text-gray-900 mb-4">
                            {/* ICON */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" /></svg>
                          </div>
                          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Easy Use</h3>
                          <p className="text-gray-500">HR Cerdas give you best feature and easy use to use our service</p>
                        </div>
                        {/* END SERVICE BLOCK */}
                      </div>

                    </div>
                    {/* END ROW */}

                  </div>
                </div>
                {/* END SERVICES */}
              </nav>


              <footer className="p-1  bg-black sm:p-7  dark:bg-gray-900 ">
                <div className="md:flex md:justify-between px-40">
                  <div className="mb-6 md:mb-0">
                    <a href="#" className="flex items-center mb-5">
                      <img
                        src={`${process.env.PUBLIC_URL}/HRCerdas.png`}
                        className="mr-3 h-8"
                        alt="HR Logo"
                      />
                    </a>
                    <div className="felx text-gray-300 justify-between">
                      HR Cerdas is a trusted professional talent recruitment and
                      management
                      <p>partner, and give you a few best feature.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
                        Useful Link
                      </h2>
                      <ul className="text-gray-300 dark:text-gray-400">
                        <li className="mb-4">
                          <a href="#" className="hover:underline">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:underline">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>

                <div className="sm:flex sm:items-center sm:justify-between px-40 py-20">
                  <ul>
                    <li className="mb-4">
                      <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 ">
                        <a
                          href="#"
                          className="text-gray-500 hover:text-white dark:hover:text-white">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"></path>
                          </svg>
                          <span className="sr-only">Facebook page</span>
                        </a>
                        <a
                          href="#"
                          className="text-gray-500 hover:text-white dark:hover:text-white">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"></path>
                          </svg>
                          <span className="sr-only">Instagram page</span>
                        </a>
                        <a
                          href="#"
                          className="text-gray-500 hover:text-white dark:hover:text-white">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                          </svg>
                          <span className="sr-only">Twitter page</span>
                        </a>
                      </div>
                    </li>
                    <li className="mb-4">
                      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2022{" "}
                        <a href="/dashboard" className="hover:underline">
                          HR Cerdas
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </footer>
            </div>

          </div>
      }
    </div>
  )
}

export default App