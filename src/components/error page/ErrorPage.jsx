import styles from "./errorpage.module.css";

export default function ErrorPage()
{
  const { errorPage } = styles;

  return (
    <div id="errorPage" className={errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

    </div>
  );
};