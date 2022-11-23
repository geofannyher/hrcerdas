

export const Spinner = () => {
    // $(window).on('load',function(){
    //     $(".Spinner").fadeOut(600);
    //     $(".App").fadeIn(600);
    // });


    return (
        <div className="duration-100 preloader loaded-success fixed inset-0 z-50 bg-gray-50">
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2">
                <div className="relative mx-auto my-12">
                    <div className="inline-block">

                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Spinner