# Card notification component

This is a React component built with TypeScript and Tailwind CSS that allows users to see a message preview before clicking on a specific chat link.

This component was inspired by this twitter post by
[Mariana Castillo](https://x.com/mrncst/status/1751958215833649393?s=20)

## Features

- Display message previews for chat links.
- Customizable message preview styling.
- Supports TypeScript for type safety.
- Utilizes Tailwind CSS for responsive and customizable styles.

## Installation

To install the Chat Message Preview Component, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chat-message-preview.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chat-message-preview
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To use the Chat Message Preview Component in your project, follow these steps:

1. Import the component into your project:

   ```jsx
   import ChatMessagePreview from "path/to/ChatMessagePreview";
   ```

2. Use the component in your JSX code:

   ```jsx
   <ChatMessagePreview
     message="Hello, how are you?"
     link="https://example.com/chat"
   />
   ```

## Props

The Chat Message Preview Component accepts the following props:

- `message`: The message to display in the preview.
- `link`: The URL of the chat link associated with the message.

## Example

```jsx
import ChatMessagePreview from "path/to/ChatMessagePreview";

const App = () => {
  return (
    <div>
      <ChatMessagePreview
        message="Hello, how are you?"
        link="https://example.com/chat"
      />
    </div>
  );
};

export default App;
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this template to fit the specifics of your project. Good luck with your project!
