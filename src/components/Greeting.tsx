import { $, component$, useSignal } from "@builder.io/qwik";

export interface GreetingProps {
  messages: string[];
}

export default component$(({ messages }: GreetingProps) => {
  const randomMessage = $(
    () => messages[Math.floor(Math.random() * messages.length)] ?? "Hello",
  );

  const greeting = useSignal(messages[0] ?? "Hello");

  return (
    <div>
      <h3>{greeting.value}! Thank you for visiting!</h3>
      <button
        onClick$={() => {
          randomMessage()
            .then((message) => (greeting.value = message))
            .catch(() => {
              greeting.value = "Hello";
            });
        }}
      >
        New Greeting
      </button>
    </div>
  );
});
