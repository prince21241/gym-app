export default function Layout(props) {
  const { children } = props;

  const header = (
    <header>
      <h1 className="text-gradient">30-Day Challenge</h1>
      <p>
        <strong>The 30 Simple Workouts Program</strong>
      </p>
    </header>
  );

  const footer = (
    <footer>
      <p>
        Developed By {""}
        <a href="https://princeraval.netlify.app/" target="_blank">
          Prince Raval
        </a>
        <br />
        Styled with{" "}
        <a href="https://www.fantacss.smoljames.com" target="_blank">
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
