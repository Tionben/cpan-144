import Navigation from "../components/Navigation";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import ToggleMessage from "../components/ToggleMessage";

export default function Home() {
  return (
    <main>
      <Navigation />

      <section id="home" className="hero">
        <h1>Welcome to My React Dashboard</h1>
        <p>
          This web application demonstrates React components, props, state
          management, event handling, conditional rendering, and basic styling.
        </p>
      </section>

      <Counter />
      <UserForm />
      <ToggleMessage />
    </main>
  );
}