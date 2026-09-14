function TechnologyCard({
  technology,
  isAdded,
  onAddTechnology,
}) {
  return (
    <article className="flex min-h-67.5 flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-9 w-9 object-contain"
        />

        <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-medium text-emerald-600">
          {technology.badge}
        </span>
      </div>

     
      <h3 className="mt-5 text-lg font-bold">
        {technology.name}
      </h3>

      <p className="mt-2 text-xs leading-6 text-gray-500">
        {technology.description}
      </p>

  
      <div className="mt-auto pt-5">
        <div className="flex items-center justify-between gap-2 text-[10px]">
          <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
            {technology.category}
          </span>

          <span className="text-gray-500">
            {technology.difficulty}
          </span>

          <span className="whitespace-nowrap text-gray-600">
             {technology.rating}
          </span>
        </div>

        
        <button
          disabled={isAdded}
          onClick={() => onAddTechnology(technology)}
          className={`mt-5 w-full rounded-lg py-3 text-xs font-semibold text-white transition ${
            isAdded
              ? "cursor-not-allowed bg-gray-500"
              : "bg-gray-900 hover:bg-gray-700"
          }`}
        >
          {isAdded
            ? "✓ Added to Stack"
            : "Add to Stack"}
        </button>
      </div>

    </article>
  );
}

export default TechnologyCard;