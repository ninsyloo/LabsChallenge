import React from 'react';

export default function Footer(){
    return(
        <footer>
            <div class='py-5 py-lg-6 bg-grey-100 border-top border-dark border-5'>
                <div class='container'>
                    <div class='row'>
                    <div class="py-4 service-column col-sm-6 col-lg-3">
                            <div class="service-text">
                            <h6 class="text-sm mb-1"><i class="fas fa-shipping-fast"></i> Free shipping &amp; return</h6>
                            <p class="text-muted font-weight-light text-sm mb-0">Free Shipping over $300</p>
                           </div>
                        </div>
                    <div class="py-4 service-column col-sm-6 col-lg-3">
                        <div class="service-text">
                        <h6 class="text-sm mb-1"><i class="far fa-handshake"></i> Money back guarantee</h6>
                        <p class="text-muted font-weight-light text-sm mb-0">30 Days Money Back Guarantee</p>
                        </div>
                    </div>
                    <div class="py-4 service-column col-sm-6 col-lg-3">
                        <div class="service-text">
                            <h6 class="text-sm mb-1"><i class="fas fa-percent"></i> Best prices</h6>
                            <p class="text-muted font-weight-light text-sm mb-0">Always the best prices</p>
                            </div>
                    </div>
                    <div class="py-4 service-column col-sm-6 col-lg-3">
                        <div class="service-text">
                            <h6 class="text-sm mb-1"><i class="fas fa-headset"></i> 0-800-456-747</h6>
                            <p class="text-muted font-weight-light text-sm mb-0">24/7 Available Support</p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}