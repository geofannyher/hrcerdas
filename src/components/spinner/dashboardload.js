import React from 'react'
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
function Dashboardload({ cards }) {
    return (
        Array(cards)
        .fill(1)
        .map(val =>
            <div>
                <div class="p-4 max-w-screen-xl mx-auto rounded border border-gray-200 md:p-6 dark:border-gray-700">
                    <div class="h-2.5 w-40 mb-4">
                        <Skeleton />
                    </div>
                    <div class="h-2.5 w-50 mb-4">
                        <Skeleton />
                    </div>
                    <div class="h-2.5 w-30 mb-4">
                        <Skeleton />
                    </div>
                    <div class="flex items-center mt-2 space-x-3">
                        <svg class="w-14 h-14 text-gray-200 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                        <div>
                            <div class="h-2.5  w-32 mb-2"><Skeleton /></div>
                            <div class="w-48 h-2 mb-2 mt-1"><Skeleton /></div>
                        </div>
                    </div>
                    <div class="h-2.5 w-35 mb-4">
                        <Skeleton />
                    </div>
                    <div class="h-2.5 w-30 mb-4">
                        <Skeleton />
                    </div>
                </div>
            </div>
        )
    )
}

export default Dashboardload