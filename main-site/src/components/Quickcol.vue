<template>
    <div class="col-md-3 quickcol">
        <div class="quicklefty">
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="99"> Price <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide" id="quickid99">
                    <div id="range" onclick="ShowSecond()" class="rangeslider" style="height: 2em;">
                        <div class="rangeouter" style="background-color:#ddd;height:0.3em;margin:0.85em 0;"></div>
                        <div class="rangeinner" style="background-color: rgb(4, 180, 4); height: 0.3em; margin: 0.85em 0px; width: 100%;"></div>
                        <div class="rangeselector" style="background-color: rgb(4, 180, 4); border-radius: 1.2em; border: 0.4em solid rgba(0, 0, 0, 0); width: 1em; height: 1em; top: 0.1em; margin-left: -0.9em; left: 100%;"></div>
                    </div>
                    <div class="mintomax">
                        <div class="min_pp">
                            <select class="browser-default custom-select">
                                <option selected="">Min</option>
                                <option value="1">2000</option>
                                <option value="2">7000</option>
                            </select>
                        </div>
                        <div class="to_pp">To</div>
                        <div class="min_pp">
                            <select class="browser-default custom-select">
                                <option selected="">7000</option>
                                <option value="2">7000 +</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="5"> Customer Rating <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide" id="quickid5">
                    <!-- Material unchecked -->
                    <div class="form-check loadercheck" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input " id="reigon">
                        <label class="form-check-label" for="reigon">4 &amp; above</label>
                    </div>
                    <div class="form-check loadercheck" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input " id="reigon2">
                        <label class="form-check-label" for="reigon2">3 &amp; above</label>
                    </div>
                    <div class="form-check loadercheck" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input " id="reigon3">
                        <label class="form-check-label" for="reigon3">2 &amp; above</label>
                    </div>
                    <div class="form-check loadercheck" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input " id="reigon4">
                        <label class="form-check-label" for="reigon4">1 &amp; above</label>
                    </div>
                </div>
            </div>
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="4"> Internal Storage <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide" id="quickid4">
                    <!-- Material unchecked -->
                    <div class="form-check loadercheck" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto1">
                        <label class="form-check-label" for="sto1">32-63.9GB</label>
                    </div>
                </div>
            </div>
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="3"> Battery Capacity <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide lefty_hide" id="quickid3">
                    <!-- Material unchecked -->
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto2">
                        <label class="form-check-label" for="sto2">3000 - 3999 mAh</label>
                    </div>
                </div>
            </div>
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="2"> Operating System <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide lefty_hide" id="quickid2">
                    <!-- Material unchecked -->
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto3">
                        <label class="form-check-label" for="sto3">Android</label>
                    </div>
                </div>
            </div>
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="1"> Network Type <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide lefty_hide" id="quickid1">
                    <!-- Material unchecked -->
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto6">
                        <label class="form-check-label" for="sto6">2G</label>
                    </div>
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto7">
                        <label class="form-check-label" for="sto7">3G</label>
                    </div>
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto8">
                        <label class="form-check-label" for="sto8">4G</label>
                    </div>
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto9">
                        <label class="form-check-label" for="sto9">4G Volte</label>
                    </div>
                </div>
            </div>
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="101"> SIM TYPE <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide lefty_hide" id="quickid101">
                    <!-- Material unchecked -->
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto99">
                        <label class="form-check-label" for="sto99">Dual Sim</label>
                    </div>
                </div>
            </div>

            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="102">SCREEN SIZE <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide lefty_hide" id="quickid102">
                    <!-- Material unchecked -->
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto98">
                        <label class="form-check-label" for="sto98">6 inch &amp; above</label>
                    </div>
                </div>
            </div>
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="102">Offers <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide lefty_hide" id="quickid102">
                    <!-- Material unchecked -->
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto97">
                        <label class="form-check-label" for="sto97">Bank Offers</label>
                    </div>
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto96">
                        <label class="form-check-label" for="sto96">Exchange Offers</label>
                    </div>
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto95">
                        <label class="form-check-label" for="sto95">No Cost EMI Offers</label>
                    </div>
                </div>
            </div>
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="103">AVAILABILITY <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide lefty_hide" id="quickid103">
                    <!-- Material unchecked -->
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto94">
                        <label class="form-check-label" for="sto94">Exclude Out of Stock</label>
                    </div>
                </div>
            </div>
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="104">Processor Brand <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide lefty_hide" id="quickid104">
                    <!-- Material unchecked -->
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto93">
                        <label class="form-check-label" for="sto93">Mediatek</label>
                    </div>
                </div>
            </div>
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="104">Clock Speed <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide lefty_hide" id="quickid104">
                    <!-- Material unchecked -->
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto93">
                        <label class="form-check-label" for="sto93">2 - 2.5 GHz</label>
                    </div>
                </div>
            </div>
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="105">Number of Cores <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide lefty_hide" id="quickid105">
                    <!-- Material unchecked -->
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto92">
                        <label class="form-check-label" for="sto92">Quad Core</label>
                    </div>
                </div>
            </div>
            <div class="quick_leftsecs">
                <h6 class="quick_leftsecs_h6" data-val="106">Budget <i class="fas fa-sort-down"></i></h6>
                <div class="quick_rangeslide lefty_hide" id="quickid106">
                    <!-- Material unchecked -->
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto91">
                        <label class="form-check-label" for="sto91">Rs. 5000 - Rs. 9999</label>
                    </div>
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto90">
                        <label class="form-check-label" for="sto90">Below Rs. 5000</label>
                    </div>
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto89">
                        <label class="form-check-label" for="sto89">Rs. 10000 - Rs. 14999</label>
                    </div>
                    <div class="form-check" onclick="ShowSecond()">
                        <input type="checkbox" class="form-check-input loadeercheck" id="sto88">
                        <label class="form-check-label" for="sto88">Rs. 15000 - Rs. 29999</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    //
  }),
};
</script>