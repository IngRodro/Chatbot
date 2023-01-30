export default function Message({ name, message }) {
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
            border-bottom: 2px solid #eaf7ff;
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
