# WebSocket Group Chat Application

This is a simple real-time group chat application built with Spring Boot and WebSocket (STOMP). Users can join a chat room, enter their name, and send messages to all connected users in real time.

## Features
- Real-time group chat using WebSocket (STOMP)
- Users enter their name to join the chat
- Messages are broadcast to all users
- Simple HTML frontend using `stomp.js` and `sockjs.js`

## Prerequisites
- Java 17 or higher
- Git
- Internet connection (for downloading dependencies)

## Project Setup

### 1. Clone the repository
```sh
git clone <your-repo-url>
cd lab-42-websocket
```

### 2. If `gradle-wrapper.jar` is missing
If you see an error about a missing `gradle-wrapper.jar`, you can regenerate it with the following command:

```sh
gradle wrapper
```

This will create the `gradle/wrapper/gradle-wrapper.jar` file and ensure the Gradle wrapper scripts work.

If you do not have Gradle installed globally, you can download the jar manually from another project or from the [Gradle releases page](https://services.gradle.org/distributions/).

### 3. Build and Run the Application
```sh
./gradlew build
./gradlew bootRun
```

The application will start on [http://localhost:8080/chat.html](http://localhost:8080/chat.html).

### 4. Open the Chat
Open `http://localhost:8080/chat.html` in your browser. Open in multiple tabs or browsers to test real-time chat.

## Notes
- If you change dependencies or update Gradle, you may need to regenerate the wrapper with `gradle wrapper`.
- The `.gitignore` file excludes build and IDE files from version control.

---
Happy chatting! 