<template>
  <div>
    <AppHeader/>
    <div style="background:#fffef2">
      <div class="productbg" style="max-width:1308px; margin:0px auto 0px auto">
          <section class="container-fluid" id="productSell">
              <div class="row">
                  <div class="container wid13">
                      <div class="products_sell_section">
                          <div class="products_sell_content">
                              <Menu/>
                              <ProductsSell/>
                              <CustomerReview/>
                              <!-- <Manufacturer/> -->
                              <Suggestion/> 
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>  
    </div>     
    <AppFooter/>
  </div>
</template>

<script>
import Menu from '../components/Menu';
import ProductsSell from '../components/ProductsSell';
import CustomerReview from '../components/CustomerReview';
import Manufacturer from '../components/Manufacturer';
import Suggestion from '../components/Suggestion';

export default {
  name: 'Products',
  components: {
    Menu,
    ProductsSell,
    CustomerReview,
    Manufacturer,
    Suggestion
  },
  data: () => ({

  }),
};
</script>
