<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Webhook and Notification Example</h1>
    <NotificationComponent />
  </div>
</template>

<script>
import NotificationComponent from '@/components/NotificationComponent.vue';

export default {
  components: {
    NotificationComponent,
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>


