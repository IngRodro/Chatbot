const Loading = () => {
  return (
    <>
      <div className="loading">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
      <style jsx>
        {`
          .loading {
            display: flex;
            justify-content: center;
          }

          .dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            margin: 0 4px;
            opacity: 0;
            background: #000;
          }

          .dot-1 {
            animation: loading-1 1.2s ease-in-out infinite;
          }

          .dot-2 {
            animation: loading-2 1.2s ease-in-out infinite;
          }

          .dot-3 {
            animation: loading-3 1.2s ease-in-out infinite;
          }

          @keyframes loading-1 {
            0% {
              opacity: 1;
            }
            20% {
              opacity: 1;
            }
            40% {
              opacity: 1;
            }
            60% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes loading-2 {
            0% {
              opacity: 0;
            }
            20% {
              opacity: 0;
            }
            40% {
              opacity: 1;
            }
            60% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes loading-3 {
            0% {
              opacity: 0;
            }
            20% {
              opacity: 0;
            }
            40% {
              opacity: 0;
            }
            60% {
              opacity: 0;
            }
            80% {
              opacity: 1;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export default Loading;
