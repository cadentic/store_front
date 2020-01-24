<template>
    <div class="products_main_box">
        <div class="products_header">
            <div class="d-flex flex-wrap align-items-center">
                <div class="products_heading">
                    <h3>Fashion Acessories</h3>
                </div>
                <div class="view_all_btn_part d-flex justify-content-end">
                    <a class="view_btn" href="javascript:;">View All</a>
                </div>
            </div>
        </div>
        <div class="products_list">
            <div class="d-flex flex-wrap justify-content-between">
                <div class="products_box" v-for="pd in products_detail">
                    <div class="products_img">
                        <a href="products.html"><img v-bind:src="'assets/img/'+pd.img+'.png'" alt=""></a>
                    </div>
                    <div class="products_info">
                        <h2 class="title">{{ pd.subtitle }}</h2>
                        <p>upto <span style="font-size:30px; color:red">{{ pd.price }}%</span> off</p>
                        <div class="buy_now_btn_part d-flex justify-content-end">
                            <a href="products.html" class="buy_now_btn">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        // name: 'MainContent',
        components: {
            
        },
        data: () => ({
           products_detail:[
            {
                img:"products6",
                subtitle:"LEVIS",
                price:"25"
            },
            {
                img:"products7",
                subtitle:"Adidas",
                price:"20"
            },
            {
                img:"products8",
                subtitle:"Samsung",
                price:"10"
            },
            {
                img:"products9",
                subtitle:"Tommy",
                price:"20"
            },
            {
                img:"products10",
                subtitle:"Dawlance",
                price:"30"
            }
           ]
        }),
    };
</script>