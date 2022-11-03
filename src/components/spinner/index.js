const Spinner = () => {

    // var xpre = document.querySelector(".preloader");
    // if ( xpre != null) {
    //     window.addEventListener('load',function(){
    //         this.document.querySelector('container-Hero').classList.add("loaded-success")
    //     });
    // }

    return (
            // <div className="spin-wrapper static h-screen flex justify-center items-center bg-gray-400 transition duration-200">
            //     <svg className="w-10 h-10 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"/></svg>
            // </div>
            
            // <div className="items-center justify-center">
            //     <button type="button" className="flex items-center rounded-lg bg-blue-900 px-4 py-2 text-white" disabled>
            //         <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            //             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            //             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            //         </svg>
            //     <span className="font-medium"> Processing... </span>
            //     </button>
            // </div>
            
            <div className="preloader loaded-success fixed inset-0 z-50 bg-gray-50">
	            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2">
	                <div className="relative mx-auto my-12">
	                    <div className="inline-block">
                            <svg className="animate-spin h-8 w-8 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
	                    </div>
	                </div>
                </div>
            </div>

    )
}
export default Spinner