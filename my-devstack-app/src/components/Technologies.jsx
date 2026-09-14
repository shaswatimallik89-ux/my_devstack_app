import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

function Technologies({
  technologies,
  selectedStack,
  loading,
  onAddTechnology,
  onRemoveTechnology,
  onRemoveAll,
}) {
  if (loading) {
    return (
      <section className="min-h-125 py-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

          <p className="text-gray-500">
            Loading technologies...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="pb-20"
    >
      <div className="mx-auto w-[90%] max-w-6xl">

       
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            Explore the{" "}

            <span className="bg-linear-to-r from-brand-orange via-brand-pink to-brand-violet bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Discover modern tools and technologies and build
            the development stack that fits your project.
          </p>
        </div>

       
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">

          
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = selectedStack.some(
                (item) => item.id === technology.id
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isAdded}
                  onAddTechnology={onAddTechnology}
                />
              );
            })}
          </div>

         
          <YourStack
            selectedStack={selectedStack}
            onRemoveTechnology={onRemoveTechnology}
            onRemoveAll={onRemoveAll}
          />

        </div>
      </div>
    </section>
  );
}

export default Technologies;