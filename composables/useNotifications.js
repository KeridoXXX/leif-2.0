const notificationMessage = ref("");
const isVisible = ref(false);
const notificationShake = ref(false);
const notificationType = ref(null);
let timeout;

const showNotification = (message, type) => {
  notificationMessage.value = message;
  notificationType.value = type;
  isVisible.value = true;

  notificationShake.value = true;
  setTimeout(() => {
    notificationShake.value = false;
  }, 500);

  if (timeout) clearTimeout(timeout);

  timeout = setTimeout(() => {
    isVisible.value = false;
  }, 3000);
};

export function useNotifications() {
  return {
    notificationMessage,
    notificationShake,
    notificationType,
    isVisible,
    showNotification,
  };
}
