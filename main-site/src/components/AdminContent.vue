<template>
  <div class="main-content">
    <AdminHeader />
    <br />
    <TotalPanel />
    <br />
    <br />
    <AdminRow1 />
    <AdminRow2 />
  </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader";
import TotalPanel from "../components/TotalPanel";
import AdminRow1 from "../components/AdminRow1";
import AdminRow2 from "../components/AdminRow2";

export default {
  name: "AdminContent",
  components: {
    AdminHeader,
    TotalPanel,
    AdminRow1,
    AdminRow2
  }
};
</script>
