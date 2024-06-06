// reaktive værdier
const notificationMessage = ref("");
const isVisible = ref(false);
const notificationShake = ref(false);
const notificationType = ref(null);
let timeout;

// viser en notifikation
const showNotification = (message, type) => {
  notificationMessage.value = message;
  notificationType.value = type;
  isVisible.value = true;

  notificationShake.value = true;
  setTimeout(() => {
    notificationShake.value = false;
  }, 500); // længden af animationen

  if (timeout) clearTimeout(timeout); // starter timeren forfra, hvis der kommer et nyt kald

  timeout = setTimeout(() => {
    isVisible.value = false;
  }, 3000); // længden af notifikationen
};

// skyder det ud til resten af applikationen
export function useNotifications() {
  return {
    notificationMessage,
    notificationShake,
    notificationType,
    isVisible,
    showNotification,
  };
}
