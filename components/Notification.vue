// Notification.vue
<template>
  <transition name="slide-fade">
    <div
      v-if="isVisible"
      :class="[
        'notification',
        { shake: notificationShake },
        notificationType === 'addedCart' ? 'cursor-pointer' : '',
      ]"
      @click="notificationType === 'addedCart' ? emitClick() : ''"
    >
      {{ notificationMessage }}
    </div>
  </transition>
</template>

<script setup>
import { useNotifications } from "@/composables/useNotifications";

const { notificationMessage, isVisible, notificationShake, notificationType } =
  useNotifications();

const emit = defineEmits(["notifClicked"]);

const emitClick = () => {
  emit("notifClicked");
};
</script>

<style scoped>
.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  @apply bg-leif-green text-white;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
}
</style>
