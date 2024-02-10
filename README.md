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
   git clone https://github.com/yefreescoding/box-preview-hover.git
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### .vscode folder

There's a tasks.json file that will run automatically in case you're using this code editor. This process will install all the dependencies needed for the project to work properly and will execute `pnpm run dev` to start a developer environment in a http://localhost

## Usage

To use the Chat Message Preview Component in your project, follow these steps:

1. Import the component into your project:

   ```jsx
   import Card from "path/to/Card";
   ```

2. Use the component in your JSX code:

   ```jsx
   <Card messages={messages} />
   ```

## Props

The Chat Message Preview Component accepts the following props:

- `message`: An array if objects containing all the necessary data for the component to work properly.

## Example

```jsx
import ChatMessagePreview from "path/to/ChatMessagePreview";

function App() {
  const messages: MyObjectMessages[] = data;

  return (
    <main className="min-h-[100dvh] grid place-items-center h-full bg-slate-100">
      <section className="">
        <h1 className="mb-8 font-bold text-2xl text-capitalize text-center">
          Preview Messages
        </h1>
        <Card messages={messages} />
      </section>
    </main>
  );
}

export default App;
```
