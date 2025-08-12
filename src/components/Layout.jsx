export default function Layout(props) {
  const { children } = props;

  const header = (
    <header>
      <h1 className="text-gradient">GYM APP</h1>
      <p>
        <strong>30 Simple Workout program</strong>
      </p>
    </header>
  );

  const footer = (
    <footer>
      <p>
        Built by{" "}
        <a
          href="https://princeraval.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prince Raval
        </a>{" "}
        using{" "}
        <a
          href="https://www.fantacss.smoljames.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          FantaCSS
        </a>
      </p>
    </footer>
  );

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
