// ToastConfig.tsx
import React from "react";
import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfigParams,
} from "react-native-toast-message";

const toastConfig = {
  success: (props: ToastConfigParams<any>) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
      text2Style={{
        fontSize: 13,
        fontWeight: "400",
      }}
    />
  ),
  error: (props: ToastConfigParams<any>) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 15,
      }}
      text2Style={{
        fontSize: 13,
      }}
    />
  ),
};

const ToastConfig = () => {
  return <Toast config={toastConfig} />;
};

export default ToastConfig;
