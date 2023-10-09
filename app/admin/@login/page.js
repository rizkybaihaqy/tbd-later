"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { experimental_useFormState as useFormState } from "react-dom";
import { login } from "./action.js";

export default function LoginPage() {
  const [state, formAction] = useFormState(login, {
    message: null,
  });

  function SubmitButton({ children }) {
    const { pending } = useFormStatus();

    return (
      <button type="submit" disabled={pending} aria-busy={pending}>
        {children}
      </button>
    );
  }

  return (
    <main className="container">
      <hgroup>
        <h1>Login</h1>
        <h2>Enter Password</h2>
      </hgroup>
      <form action={formAction}>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            aria-invalid={state.message !== null ? true : ""}
            required
          />
          <small>{state.message}</small>
        </label>
        <SubmitButton>Login</SubmitButton>
      </form>
    </main>
  );
}
