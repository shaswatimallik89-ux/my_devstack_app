function YourStack({
  selectedStack,
  onRemoveTechnology,
  onRemoveAll,
}) {
  const count = selectedStack.length;

  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

     
      <div className="border-b border-gray-100 pb-4">
        <h3 className="text-xl font-bold">
          Your Stack
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {count === 0
            ? "No technology selected"
            : `${count} ${
                count === 1
                  ? "Technology"
                  : "Technologies"
              } Selected`}
        </p>
      </div>

     
      {count === 0 ? (
        <div className="py-12 text-center">
          <div className="text-4xl">
          
          </div>

          <h4 className="mt-4 font-semibold">
            Your stack is empty
          </h4>

          <p className="mx-auto mt-2 max-w-xs text-xs leading-6 text-gray-500">
            Start adding technologies to create your ideal
            development stack.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {selectedStack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-gray-200 p-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8 object-contain"
              />

              <div className="flex-1">
                <h4 className="text-sm font-semibold">
                  {technology.name}
                </h4>

                <p className="mt-1 text-[10px] text-gray-500">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() =>
                  onRemoveTechnology(technology.id)
                }
                className="text-xl text-gray-400 transition hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={onRemoveAll}
        className="mt-5 w-full rounded-lg border border-red-200 bg-red-50 py-3 text-xs font-semibold text-red-500 transition hover:bg-red-100"
      >
        Remove All
      </button>

    </aside>
  );
}

export default YourStack;