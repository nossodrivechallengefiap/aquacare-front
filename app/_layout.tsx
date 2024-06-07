import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
import ToastConfig from "@/components/ToastConfig";
import Toast from "react-native-toast-message";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "screens/loginScreen",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="screens/loginScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="screens/registerScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="screens/indicatorsScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="screens/citiesScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="screens/localsScreen"
            options={{ headerShown: false }}
          />
        </Stack>
      </ThemeProvider>
      <ToastConfig />
      <Toast />
    </>
  );
}
