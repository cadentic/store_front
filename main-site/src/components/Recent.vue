<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <h4 class="recom">
                    Your recently viewed items and featured recommendations</h4>
                <h6 class="hist">Inspired by your browsing history</h6>
            </div>
            <Texshaad :title='recentlyData[0].title' :imageUrl='recentlyData[0].imageUrl' :price='recentlyData[0].price'/>
            <Texshaad :title='recentlyData[1].title' :imageUrl='recentlyData[1].imageUrl' :price='recentlyData[1].price'/>
            <Texshaad :title='recentlyData[2].title' :imageUrl='recentlyData[2].imageUrl' :price='recentlyData[2].price'/>
            <Texshaad :title='recentlyData[3].title' :imageUrl='recentlyData[3].imageUrl' :price='recentlyData[3].price'/>
            <Texshaad :title='recentlyData[4].title' :imageUrl='recentlyData[4].imageUrl' :price='recentlyData[4].price'/>
            
        </div>
        <div class="row">
            <div class="col-md-12">
                <h4 class="recom">
                    Your browsing history
                </h4>
                <a href="#">
                    <h6 class="hist">View or edit your browsing history</h6>
                </a>
            </div>
            
            <Texshaad :title='browsingData[0].title' :imageUrl='browsingData[0].imageUrl' :price='browsingData[0].price'/>
            <Texshaad :title='browsingData[1].title' :imageUrl='browsingData[1].imageUrl' :price='browsingData[1].price'/>
            <Texshaad :title='browsingData[2].title' :imageUrl='browsingData[2].imageUrl' :price='browsingData[2].price'/>
            <Texshaad :title='browsingData[3].title' :imageUrl='browsingData[3].imageUrl' :price='browsingData[3].price'/>
            <Texshaad :title='browsingData[4].title' :imageUrl='browsingData[4].imageUrl' :price='browsingData[4].price'/>
            
        </div>
    </div>
</template>

<script>
import Texshaad from './Texshaad'
export default {
    components: {
        Texshaad
    },
    data: () => ({
        recentlyData: [
            {title:"Vivo Y12 (Aqua Blue, 4GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers",imageUrl:"img/518UXwfiTsL._AC_UL270_SR270,270_.jpg",price:"12490.00"},
            {title:"SYSKA Hair Dryer HD1610 with Cool and Hot Air (White)",imageUrl:"img/syska.jpg",price:"697.00"},
            {title:"Killer 400170210031 38-Litre Waterproof Backpack (Blue)",imageUrl:"img/51HHHI-SslL._AC_UL100_SR100,100_.jpg",price:"1195.00"},
            {title:"Fastrack 29.82 Ltrs Black Casual Backpack (A0641NBL01)",imageUrl:"img/tshirt.jpg",price:"1550.00"},
            {title:"PAUSE Men's Solid Cotton Long Sleeve Round Neck Shrug",imageUrl:"img/nike.jpg",price:"449.00"}
        ],
        browsingData: [
            {title:"GRITSTONES Men's Hooded Cotton Zipper Jacket",imageUrl:"img/jack.jpg",price:"383.00"},
            {title:"VonVonCo Blouse Unstitched Casual Formal Regular Long Party Men's Summer Funny 3D Printed Short Sleeves Shirt Fashion Top",imageUrl:"img/boy.jpg",price:"369.32"},
            {title:"Urban Tribe Plank 23 Liters Sports Gym Bag with Separate Shoe Compartment (Indigo)",imageUrl:"img/51HHHI-SslL._AC_UL100_SR100,100_.jpg",price:"1299.00"},
            {title:"Powermax Fitness BU-203 Air Bike with Fixed Handles - Exercise Cycle for Weight Loss, Cardio Workout at home - Compact Design and Comfortable Seat",imageUrl:"img/scy.jpg",price:"5990.00"},
            {title:"Viya Products Professional Bluetooth 4.1 Wireless Stereo Sport Headphones Headset Hi-Fi Sound Hands-Free Calling Model 218865",imageUrl:"img/doc.jpg",price:"449.00"}
        ]
    })
};
</script>
