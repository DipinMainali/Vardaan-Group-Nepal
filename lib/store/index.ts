import { create } from "zustand";

interface UIState {
  isMobileMenuOpen: boolean;
  isContactModalOpen: boolean;
  selectedBusiness: string | null;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openContactModal: (business?: string) => void;
  closeContactModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isContactModalOpen: false,
  selectedBusiness: null,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  openContactModal: (business) =>
    set({ isContactModalOpen: true, selectedBusiness: business ?? null }),
  closeContactModal: () =>
    set({ isContactModalOpen: false, selectedBusiness: null }),
}));

interface NotificationState {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
}

interface Notification {
  id: string;
  type: "success" | "error" | "info" | "warning";
  title: string;
  message?: string;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { ...notification, id: crypto.randomUUID() },
      ],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
  clearAll: () => set({ notifications: [] }),
}));
