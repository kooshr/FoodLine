import { showMessage } from "react-native-flash-message";
import { Platform } from "react-native";
// import Geolocation from "react-native-geolocation-service";

// export const locationPermission = () =>
//   new Promise(async (resolve, reject) => {
//     if (Platform.OS === "ios") {
//       try {
//         const permissionStatus = await Geolocation.requestAuthorization(
//           "whenInUse"
//         );
//         if (permissionStatus === "granted") {
//           return resolve("granted");
//         }
//         reject("permission not granted");
//       } catch (error) {
//         return reject(error);
//       }
//     }
//   });
const showError = (message) => {
  showMessage({
    message,
    type: "danger",
    icon: "danger",
  });
};

const showSuccess = (message) => {
  showMessage({
    message,
    type: "success",
    icon: "success",
  });
};

export { showError, showSuccess };
