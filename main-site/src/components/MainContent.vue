<template>
    <section class="container-fluid" id="products">
        <div class="row" style="max-width:1308px; margin:0px auto 0px auto">
            <div class="container wid13">
                <div class="products_section">
                    <div class="products_content">
                        <Deals></Deals>
                        <Featured></Featured>
                        <Trending></Trending>
                        <Kitchen></Kitchen>
                        <Range></Range>
                        <Fashion></Fashion>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Deals from './Deals'
    import Featured from './Featured'
    import Trending from './Trending'
    import Kitchen from './Kitchen'
    import Range from './Range'
    import Fashion from './Fashion'

    export default {
        // name: 'MainContent',
        components: {
           Deals,
           Featured,
           Trending,
           Kitchen,
           Range,
           Fashion
        },
        data: () => ({
            
        }),
    };
</script>
