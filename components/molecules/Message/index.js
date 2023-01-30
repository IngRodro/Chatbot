import Avatar from "../../atoms/Avatar";

export default function Message({ name, message, background, avatar }) {
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={name} />
        </div>
        <div>
          <strong>{name}</strong>
          <p>{message}</p>
        </div>
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
