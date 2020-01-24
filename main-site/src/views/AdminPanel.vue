<template>
  <div class="page-container">
    <SidebarMenu />
    <AdminContent />
  </div>
</template>

<script>
import SidebarMenu from "../components/SidebarMenu";
import AdminContent from "../components/AdminContent";

export default {
  name: "AdminPanel",
  components: {
    SidebarMenu,
    AdminContent
  },
  data: () => ({
    //
  })
};
</script>

<style scoped></style>
