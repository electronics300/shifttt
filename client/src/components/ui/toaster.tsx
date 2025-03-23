import { Toast, ToastProvider, ToastViewport } from "@radix-ui/react-toast";

export function Toaster() {
  return (
    <ToastProvider>
      <Toast />
      <ToastViewport />
    </ToastProvider>
  );
} 