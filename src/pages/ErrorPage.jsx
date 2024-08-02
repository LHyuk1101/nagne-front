const ErrorPage = (error) => {
  return (
    <>
      <div>{error.code}</div>
      <div>{error.message}</div>
    </>
  );
};

export default ErrorPage;
