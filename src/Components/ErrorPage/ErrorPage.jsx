const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl p-8">
        <div className="card-body text-center">
          <div className="text-5xl font-bold mb-4 text-[rgb(14,165,233)]">404</div>
          <h2 className="card-title text-2xl flex items-center justify-center
           font-semibold">Page Not Found</h2>
          <p className="mb-6">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <div className="card-actions justify-center">
            <a href="/" className="btn bg-[rgb(14,165,233)] text-white">Back to Homepage</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;