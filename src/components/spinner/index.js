const Spinner = () => {
    return (
            <div className="spin-wrapper relative h-screen flex justify-center items-center bg-gray-400">
                <svg className="w-10 h-10 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"/></svg>
            </div>
            // <div>
            //     <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
            //         <div className="animate-pulse flex space-x-4">
            //             <div className="flex-1 space-y-6 py-1">
            //                 <div className="space-y-3">
            //                     <div className="grid grid-cols-2 gap-4">
            //                         <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            //                     </div>
            //                     <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
    )
}
export default Spinner