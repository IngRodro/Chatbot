export default function Message({ name, message, background }) {
  return (
    <>
      <article>
        <section>
          <strong>{name}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>
        {`
          div {
            padding-right: 10px;
          }

          article {
            display: flex;
            padding: 10px 15px;
            background: ${background};
          }

          p {
            line-height: 1.3125;
            margin: 0;
          }
        `}
      </style>
    </>
  );
}
