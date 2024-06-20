
const Banner = () => {
  return (
    <div className="container mt-32">
      <div className="grid 1g:grid-cols-[66%, 34%] gap-4 pr-[15px]">
        <div className="h-[200px] md:h-[260px] flex flex-col justify-center items-center bg-[url('../public/Banner.png')] bg-cover bg-center rounded-xl p-8 md:p-16">
          <p className="text-topHeadingSecondary text-xl font-medium">
            Sale 20% off all store
          </p>
          <h2 className="text-topHeadingPrimary font-bold text-xl sm:text-3xl ">
            SmartPhone BLU G91 Pro 2023
          </h2>
          <a className="inline-block mt-4 hover:text-accent bg-neutral-50/10 p-2 rounded-xl hover:bg-white/60 text-topHeadingSecondary font-medium" href="#">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
