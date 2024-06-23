import { useEffect } from 'react';


function Contact() {
    // useEffect(() => {
    //     function getYear() {
    //         var currentDate = new Date();
    //         var currentYear = currentDate.getFullYear();
    //         // document.querySelector("#displayYear").innerHTML = currentYear;
    //     }
    //     getYear();

    //     $(".owl-carousel").owlCarousel({
    //         loop: true,
    //         margin: 20,
    //         nav: true,
    //         navText: [],
    //         autoplay: true,
    //         autoplayHoverPause: true,
    //         responsive: {
    //             0: {
    //                 items: 1
    //             },
    //             1000: {
    //                 items: 2
    //             }
    //         }
    //     });

    //     function initializeGoogleMap() {
    //         // Ensure the Google Maps API is loaded
    //         if (window.google) {
    //             // Google Maps initialization
    //             var mapProp = {
    //                 center: new window.google.maps.LatLng(40.712775, -74.005973),
    //                 zoom: 18,
    //             };
    //             var map = new window.google.maps.Map(document.getElementById("googleMap"), mapProp);
    //         }
    //     }

    //     // Check if the Google Maps API script is already loaded
    //     if (!window.google) {
    //         // Load Google Maps API script dynamically
    //         const script = document.createElement('script');
    //         script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initializeGoogleMap`;
    //         script.async = true;
    //         document.head.appendChild(script);
    //     } else {
    //         // If already loaded, initialize the map immediately
    //         initializeGoogleMap();
    //     }
    // }, []); 
    return (
        
            <div className="sub_page">
                <section className="contact_section layout_padding-top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 offset-md-1">
                                <div className="heading_container">
                                    <h2>
                                        Contact Us
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-5 offset-md-1">
                                <div className="form_container">
                                    <form action="">
                                        <div>
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Phone Number" />
                                        </div>
                                        <div>
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div>
                                            <input type="text" className="message-box" placeholder="Message" />
                                        </div>
                                        <div className="btn_box">
                                            <button>
                                                SEND
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 px-0">
                                <div className="map_container">
                                    <div className="map">
                                        <div id="googleMap"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        
    );
}

export default Contact;
