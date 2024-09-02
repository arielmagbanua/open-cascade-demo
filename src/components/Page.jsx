export default function Page({ children, controls }) {
  return (
    <section className="page">
      <div className="page__container">
        <div className="page__container__controls">
          {controls}
        </div>
        {children}
      </div>
    </section>
  );
}