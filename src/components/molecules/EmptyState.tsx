const EmptyState = () => {
  return (
    <div className="w-full h-full flex flex-col items-center py-10">
      <h2 className="text-lg md:text-2xl text-white">No movies available</h2>
      <p className="text-base md:text-lg">
        We couldn't find any matching results at this time. Try again later.
      </p>
    </div>
  );
};

export default EmptyState;
