function Avatar({ alt, src }) {
  return (
    <div>
      <img alt={alt} src={src} />
      <style jsx>{`
        img {
          height: 49px;
          width: 49px;
          border-radius: 9999px;
        }
        div {
          display: flex;
          align-items: center;
        }

        strong {
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
}

export default Avatar;
