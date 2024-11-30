const Banner = () => {
  return (
    <div className="bg-banner-bg h-[500px] bg-cover flex flex-col justify-center bg-bottom sm:grid grid-cols-2">
      <div className="hidden sm:block"></div>
      <div className="text-white flex flex-col justify-center pl-10 sm:pl-0 gap-4">
        <h1 className="text-4xl">Would you like a Cup of Delicious Coffee?</h1>
        <p className="w-10/12 opacity-80">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <div>
        <button className="btn bg-[#E3B577] text-lg rounded-none border-0 hover:bg-[#c18f4e]">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
