# React Native – Learning Notes

## Section 1: Introduction to React Native

### 1. What Is React Native?

**React.js + React Native = Mobile Applications for Android and iOS**

React is a JavaScript library used to build user interfaces. It is commonly used for web development, where `react-dom` connects React components to the browser's DOM.

React Native allows developers to use React concepts to build mobile applications for Android and iOS.

**Key features of React Native:**
- A framework for building native mobile applications using JavaScript and React.
- Uses special React components such as `View`, `Text`, and `TextInput`.
- Renders components as native UI elements on Android and iOS.
- Provides access to native platform APIs through React Native APIs and native modules.
- Allows developers to reuse much of their JavaScript and React code across platforms.

**How does it work?**

React Native plays a role similar to `react-dom`, but instead of rendering React components into a web browser's DOM, it renders them as native mobile UI components.

---

### 2. A Look Under the Hood of React Native

A React Native application typically contains JSX files, such as `App.jsx`, which describe the user interface.

React Native processes the JavaScript and JSX, then renders the UI using native platform components.

#### React Native Component Mapping

| Web Development | Android Native UI | iOS Native UI | React Native |
|---|---|---|---|
| `div` | `android.view.View` | `UIView` | `View` |
| `input` | `EditText` | `UITextField` | `TextInput` |
| Text elements | `TextView` | `UILabel` | `Text` |
| Button elements | Native button UI | Native button UI | `Button` |

**Important concepts:**

- `View`: A fundamental container for laying out UI elements.
- `Text`: Displays text content.
- `TextInput`: Allows users to enter text.
- `StyleSheet`: Helps organize component styles.
- Platform APIs: Provide access to device capabilities such as cameras, notifications, and location, subject to permissions and available APIs.

React Native maps its components to platform-specific native UI implementations. The exact underlying implementation may vary by platform and React Native version.

---

### 3. Creating React Native Projects: Expo CLI vs React Native CLI

React Native projects can be created using different development workflows.

#### Expo

Expo simplifies React Native development by providing tools for project creation, development, testing, and building applications.

**Advantages:**
- Easy setup for beginners.
- Quick testing on physical devices using Expo Go, where supported.
- Provides tools for building and deploying mobile applications.
- Reduces the need for initial native Android and iOS configuration.

#### React Native Community CLI

The React Native Community CLI provides a workflow for creating and managing projects with direct access to native Android and iOS project files.

**Advantages:**
- Greater control over native project configuration.
- Suitable for projects requiring custom native code or specialized integrations.
- Requires additional setup for the Android and iOS development environments.

**Which should you choose?**

For beginners, Expo is generally a good starting point. The Community CLI is useful when you need direct native project control.

---

### 4. Creating a New React Native Project

Using Expo, you can create a project with the following commands:

```bash
npx create-expo-app@latest MyFirstApp
           OR
npx create-expo-app --template blank MyFirstApp
cd MyFirstApp
npx expo start
```

Follow the terminal instructions to run the application in an emulator or on a supported physical device.

---

### 5. Analyzing the Created Project

Common files and folders in an Expo project include:

- `app/` or `App.js`: Application screens or the main application component, depending on the project template.
- `assets/`: Images, fonts, and other static resources.
- `package.json`: Project metadata, dependencies, and scripts.
- `app.json` or `app.config.js`: Expo application configuration.
- `node_modules/`: Installed project dependencies.
- `tsconfig.json`: TypeScript configuration, when included.

The exact structure depends on the template used to create the project.

---

### 6. Running Our First App on a Real Device

You can test your React Native application on a physical Android or iOS device.

**Basic steps:**

1. Install Node.js and create your Expo project.
2. Install Expo Go on a supported device, if you plan to use that workflow.
3. Run `npx expo start` in the project directory.
4. Scan the displayed QR code or follow the terminal instructions.
5. Make changes to your code and check the updated application.

Some native features or custom native modules may require a development build instead of Expo Go.

---

### 7. Setting Up a Local Development Environment

#### Essential tools

- **Node.js:** Runs JavaScript tooling and package managers.
- **Visual Studio Code:** A code editor for writing and managing your project.
- **Expo:** Simplifies React Native development and testing.
- **Android Studio:** Provides the Android SDK and Android emulator.
- **Xcode:** Required for native iOS development and the iOS Simulator on macOS.

#### Environment setup checklist

- [ ] Install Node.js.
- [ ] Install Visual Studio Code.
- [ ] Create a React Native project using Expo.
- [ ] Install Expo Go or configure an emulator.
- [ ] Install Android Studio and configure the Android SDK if needed.
- [ ] Install Xcode if developing for iOS on macOS.
- [ ] Run the application and verify that it works.

**Note:** You can start learning React Native with Expo without setting up every native development tool immediately. Requirements depend on your target platform and workflow.

---

## Summary

In this section, we covered:

1. Introduction to React Native.
2. How React Native renders native UI components.
3. Expo versus the React Native Community CLI.
4. Creating a React Native project.
5. Understanding the project structure.
6. Running an app on a physical device.
7. Setting up a local development environment.
