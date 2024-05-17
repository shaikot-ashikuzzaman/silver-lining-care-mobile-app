# Silver Linings Care Mobile App - Getting Started.

Welcome to the Silver Linings Care Mobile App project! This README will guide you through setting up the project, understanding its structure, running it locally, building for staging and production, running OTA updates, etc. The project has been set up with [Expo](https://docs.expo.dev/) to run on Android and iOS devices.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

-   Node.js (Latest LTS)
-   Yarn (latest version)
-   Expo CLI
-   EAS (Expo Application Service) CLI

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone <repository url>
    ```

2. **Install dependencies:**

    ```bash
    yarn install
    ```

3. **Start the development server:**

    - Android:

        ```bash
        yarn start
        ```

        - If you have an Android or iOS emulator installed, you can press `a` for Android or `i` for iOS in the terminal where the development server is running to launch the app in the respective emulator.
        - Alternatively, you can run the app on your Android or iOS device by scanning the QR code generated by Expo to run the app on your device.

## EAS Build

-   Create an Android [development build](https://docs.expo.dev/develop/development-builds/introduction/).

    ```bash
      eas build -p android --profile development
    ```

-   Build the Android app for staging.

    ```bash
      eas build -p android --profile staging
    ```

-   Build the iOS app for staging.

    ```bash
      eas build -p ios --profile staging
    ```

-   Build the Android app for production.
    <span style="color:red">_*Note:*_</span> Before each release build, we need to bump the app `version` number and `android.versionCode` in app.json file.

    ```bash
      eas build -p android --profile production
    ```

-   Build the iOS app for production.

    ```bash
      eas build -p ios --profile production
    ```

## Additional Information

-   This project is integrated with Expo for easier development and deployment. You can find more information about Expo [here](https://expo.dev/).
-   We use EAS (Expo Application Services) for building and updating our applications. You can find more information about EAS [here](https://docs.expo.dev/build/).
