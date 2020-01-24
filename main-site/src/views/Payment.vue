<template>
    <div style="max-width:1100px; margin:0px auto 0px auto">
        <section class="payment-method pt-100 pb-100">
            <div class="container">
            <div class="row">
                <div class="col-lg-10 m-auto">
                <div class="payment-timeline">
                    <div class="timeline-bar"></div>
                    <div class="timeline-name d-flex justify-content-between">
                    <a href="" class="complate">SIGN IN</a>
                    <a href="" class="complate shop">PAYMENT METHOD</a>
                    <a href="">PLACE ORDER</a>
                    <a href="">COMPLETE PAYMENT</a>
                    </div>
                </div>
                </div>
            </div>
            <div class="row pt-60">
                <div class="col-lg-4 m-auto">
                <div class="payment-title text-center">
                    <h2><span>select</span> PAYMENT METHOD</h2>
                </div>
                </div>
            </div>
            <div class="row pt-100">
                <div class="col-lg-12">
                <div class="payment-option">
                    <div class="row">
                    <!-- single card -->
                    <div class="col-md-6 col-lg-3">
                        <div class="card-wrapper">
                        <div class="card">
                            <div class="card-front pt-70">
                            <div class="font-img">
                                <img src="assetss/img/payment-method/paypal.png" alt="">
                            </div>
                            </div>
                            <div class="card-back pt-40">
                            <div class="back-img"><img src="assetss/img/payment-method/paypal.png" alt=""></div>
                            <div class="back-btn"><a href="#">Select</a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <!-- single card -->
                    <div class="col-md-6 col-lg-3">
                        <div class="card-wrapper">
                        <div class="card">
                            <div class="card-front pt-30">
                            <div class="font-img master-card">
                                <img src="assetss/img/payment-method/master.png" alt="">
                            </div>
                            </div>
                            <div class="card-back pt-20">
                            <div class="back-img master-card"><img src="assetss/img/payment-method/master.png" alt=""></div>
                            <div class="back-btn"><a href="#">Select</a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <!-- single card -->
                    <div class="col-md-6 col-lg-3">
                        <div class="card-wrapper">
                        <div class="card">
                            <div class="card-front pt-65">
                            <div class="font-img">
                                <img src="assetss/img/payment-method/paytm.png" alt="">
                            </div>
                            </div>
                            <div class="card-back pt-35">
                            <div class="back-img"><img src="assetss/img/payment-method/paytm.png" alt=""></div>
                            <div class="back-btn"><a href="#">Select</a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <!-- single card -->
                    <div class="col-md-6 col-lg-3">
                        <div class="card-wrapper">
                        <div class="card">
                            <div class="card-front pt-60">
                            <div class="font-img">
                                <img src="assetss/img/payment-method/visa.png" alt="">
                            </div>
                            </div>
                            <div class="card-back pt-35">
                            <div class="back-img"><img src="assetss/img/payment-method/visa.png" alt=""></div>
                            <div class="back-btn"><a href="#">Select</a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <div class="payment-form">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 m-auto">
                    <div class="payment-form-wrapper">
                        <div class="row">
                        <div class="col-lg-8">
                            <div class="payment-form-title">
                            <h2>Set up your payment method</h2>
                            <p>Please enter your card details. The repayment of your instalments will be deducted automatically
                                from
                                your card</p>
                            </div>
                        </div>
                        </div>
                        <div class="payment-form-body">
                        <form class="payment">
                            <div class="row">
                            <div class="col-lg-6">
                                <div class="single-form d-flex">
                                <label for="cardholder">Cardholder</label>
                                <input type="text" id="cardholder" placeholder="Jhon Lim">
                                </div>
                                <div class="single-form d-flex">
                                <label for="cardnumber">Card number</label>
                                <input type="password" id="cardnumber" placeholder="*** *** ***">
                                <span class="card-tag">visa</span>
                                </div>
                                <div class="single-form d-flex">
                                <label for="expiredate">Expire date</label>
                                <select id="expiredate" class="mr-3" style="display: none;">
                                    <option value="" v-for="i in idx">{{i}}</option>
                                </select><div class="nice-select mr-3" tabindex="0"><span class="current">1</span><ul class="list"><li data-value="" class="option selected">1</li><li data-value="" class="option">2</li><li data-value="" class="option">3</li><li data-value="" class="option">4</li><li data-value="" class="option">5</li><li data-value="" class="option">6</li><li data-value="" class="option">7</li><li data-value="" class="option">8</li><li data-value="" class="option">9</li><li data-value="" class="option">10</li><li data-value="" class="option">11</li><li data-value="" class="option">12</li></ul></div>

                                <select style="display: none;">
                                    <option value="" v-for="i in year">{{i}}</option>
                                    
                                </select><div class="nice-select" tabindex="0"><span class="current">2019</span><ul class="list"><li data-value="" class="option selected">2019</li><li data-value="" class="option">2020</li><li data-value="" class="option">2021</li><li data-value="" class="option">2022</li></ul></div>
                                </div>
                                <div class="single-form d-flex">
                                <label for="cvv">CVV / CVC</label>
                                <input type="text" id="cvv" placeholder="213">
                                </div>
                                <div class="single-form d-flex">
                                <label for="nickname">Card nickcame</label>
                                <input type="text" id="nickname" placeholder="Jhon Lim">
                                </div>
                            </div>
                            <div class="col-lg-5 offset-lg-1">
                                <div class="form-card-img text-center text-lg-right my-3 my-lg-0">
                                <div class="form-card-wrapper">
                                    <div class="form-card">
                                    <div class="form-card-front">
                                        <img src="assetss/img/payment-method/payment-img-5.jpg" alt="">
                                    </div>
                                    <div class="form-card-back">
                                        <h2>back side</h2>
                                    </div>
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                            <div class="col-lg-12 d-flex justify-content-between mt-40">
                                <button class="form-btn back">Back</button>
                                <button type="submit" class="form-btn submit-btn">Next</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>

<script>
import '../../public/assetss/css/nice-select.css';
import '../../public/assetss/css/default.css';
import '../../public/assetss/css/style.css';

export default {
    
  name: 'Payment',
  data: () => ({
    idx:[1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12],
    year:[2019, 2020, 2021, 2022]
  })
};
</script>
