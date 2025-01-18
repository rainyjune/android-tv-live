# android-tv-live

An Application for watching TV live streaming on Android TV.

## Tech Stack

- React Native
- TypeScript
- react-native-video
- swr
- i18next

## Development Guide

1. Download and install [Git](https://git-scm.com/downloads)
  - Set username and email:
    ```
    git config --global user.name <yourname>
    git config --global user.email <yourname@example.com>
    ```
2. Download and install [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
  - Set proxy for nvm-windows: `nvm proxy http://127.0.0.1:<port>`
  - and install Node 22, then enable yarn: `corepack enable`
  - Set proxy for NPM and Yarn:
    ```
	npm config set registry http://registry.npm.taobao.org
	yarn config set registry https://registry.npm.taobao.org
	```
  - Install npm packages: `yarn`
3. Download and install [Android Studio Ladybug Feature Drop | 2024.2.2](https://developer.android.com/studio).
  - Set proxy for Android Studio.
  - Download necessary packages.
  - Configure to use JDK 18: File -> Settings -> Build, Execution, Deployment -> Build Tools -> Gradle -> Gradle Projects -> Gradle -> Gradle JDK -> Download JDK -> Version: 18, Vendor:  Eclipse Temurin (AdoptOpenJDK Hotspot) 18.0.2.1, the install location defaults to `C:\Users\rainyjune\.jdks\temurin-18.0.2.1-1`
4. Add `JAVA_HOME` environment variable:
  - Variable Name: `JAVA_HOME` Variable Value: The path to your JDK 18 (e.g., `C:\Users\rainyjune\.jdks\temurin-18.0.2.1-1`).
  - Update the `PATH` variable: Add `%JAVA_HOME%\bin`
5. Open the Android project by opening the `android` fold in Android Studio.