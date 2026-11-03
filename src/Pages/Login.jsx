import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Account() {
  const [mode, setMode] = useState("login");
  const [demoAccount, setDemoAccount] = useState(null);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email")).trim().toLowerCase();
    const password = String(data.get("password"));

    if (mode === "create") {
      const confirmPassword = String(data.get("confirmPassword"));
      if (password !== confirmPassword) {
        setMessage("Passwords do not match.");
        return;
      }

      setDemoAccount({ email, password });
      setMode("login");
      setMessage("Demo account created. You can now log in during this session.");
      return;
    }

    if (demoAccount?.email === email && demoAccount.password === password) {
      setMessage("Demo login successful. Connect an authentication backend for protected accounts.");
    } else {
      setMessage("Account not found in this session. Create a demo account first.");
    }
  }

  return (
    <main className="account-page">
      <section className="account-card">
        <Link className="account-home" to="/">← Back to home</Link>
        <p className="account-kicker">OVABEL SECTECH</p>
        <h1>{mode === "login" ? "Welcome back" : "Create your account"}</h1>
        <p className="account-description">
          {mode === "login" ? "Log in to your account." : "Enter your details to get started."}
        </p>

        <form onSubmit={handleSubmit}>
          {mode === "create" && (
            <label>
              Full name
              <input name="name" type="text" autoComplete="name" required />
            </label>
          )}

          <label>
            Email address
            <input name="email" type="email" autoComplete="email" required />
          </label>

          <label>
            Password
            <input
              name="password"
              type="password"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              minLength={8}
              required
            />
          </label>

          {mode === "create" && (
            <label>
              Confirm password
              <input name="confirmPassword" type="password" minLength={8} required />
            </label>
          )}

          <button className="account-submit" type="submit">
            {mode === "login" ? "Log in" : "Create account"}
          </button>
        </form>

        {message && <p className="account-message" role="status">{message}</p>}

        <p className="account-switch">
          {mode === "login" ? "New here?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "create" : "login");
              setMessage("");
            }}
          >
            {mode === "login" ? "Create an account" : "Log in"}
          </button>
        </p>
        <p className="account-demo-note">
          Demo only: this page does not securely store accounts or provide real authentication.
        </p>
      </section>
    </main>
  );
}