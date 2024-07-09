"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-center text-4xl text-red-500">
        Something went wrong!!
      </h1>
      <h1 className="text-center text-4xl text-red-500">{error.message}</h1>
      <button className="text-center">Try Again</button>
    </div>
  );
};

export default ErrorPage;
