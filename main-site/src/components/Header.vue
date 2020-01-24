<template>
    <header id="header" class="container-fluid">
        <!-- Mobile Header -->
        <div class="wsmobileheader clearfix">
            <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
        </div>
        <!-- Mobile Header -->
        <div class="header_section w-100">
            <div class="header_content">
                <div class="d-flex flex-wrap align-items-center">
                    <div class="logo_part">
                        <a href="index.php">
                            <img src="assets/img/logo.png" alt="">
                        </a>
                    </div>

                    <div class="mobile_menu">
                        <a href="javascript:;">
                            <span class="fa fa-bars"></span>
                        </a>
                    </div>

                    <div class="header_right_part">
                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                            <div class="search_bar_part">
                                <div class="d-flex flex-wrap align-items-center justify-content-between">

                                    <Category/>
                                    
                                    <div class="search_box">
                                        <form method="post">
                                            <input type="text" name="search" placeholder="Search Brand or Product" class="form-control">
                                            <input type="submit" name="submit" value="Search" class="search_btn">
                                        </form>
                                    </div>
                                    <div class="mobile_search">
                                        <a href="javascript:;">
                                            <span class="fa fa-search"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="cart_part">
                                <ul class="d-flex flex-wrap align-items-center justify-content-end">
                                    <li class="d-flex flex-wrap align-items-center drpdn">
                                        <i class="fa fa-shopping-cart"></i>
                                            MY ZOQOLO
                                    </li>
                                    <li class="d-flex flex-wrap align-items-center drpdn">
                                        <a href="#">
                                            SIGN IN
                                        </a>
                                        <figure>
                                            <img src="assets/img/user.png" alt="">
                                        </figure>

                                        <div class="drpdnps">
                                            <ul class="drpul">
                                                <li v-for="item in items"><a href="#">{{ item }}</a></li>
                                            </ul>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Category from '../components/Category'
export default {
//   name: 'Header',
    components: {
        Category
    },
    data: () => ({
        items:['Your Acccount', 'Your Order', 'Your wish List', 'Your Recommendations', 'Your Amazon Business Account', 'Your Seller Account', 'Manage Your Content and Devices']
    }),
};
</script>
