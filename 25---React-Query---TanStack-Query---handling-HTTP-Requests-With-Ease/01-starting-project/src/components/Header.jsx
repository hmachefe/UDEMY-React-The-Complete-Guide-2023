import { useIsFetching } from "@tanstack/react-query";

export default function Header({ children }) {
  const fetching = useIsFetching(); // as a number, not a boolean
  return (
    <>
      <div id="main-header-loading">
        {fetching > 0 && <progress />}
      </div>

      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
