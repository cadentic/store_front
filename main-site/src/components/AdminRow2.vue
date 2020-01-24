<template>
            <div class="row">
                <Customers/>
                <div class="col-md-6">
                    <OrderStats/>
                    <RecentActiviry/>
                </div>
            </div>
</template>

<script>
import Customers from '../components/Customers'
import OrderStats from '../components/OrderStats'
import RecentActiviry from '../components/RecentActivity'
export default {
    name: 'AdminRow2',
    components: {
        Customers,
        OrderStats,
        RecentActiviry
    }
}
</script>