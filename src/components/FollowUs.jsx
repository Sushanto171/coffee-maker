import a from "./../assets/images/cups/Rectangle 9.png"
import b from "./../assets/images/cups/Rectangle 10.png"
import c from "./../assets/images/cups/Rectangle 11.png"
import d from "./../assets/images/cups/Rectangle 13.png"
import e from "./../assets/images/cups/Rectangle 14.png"
import f from "./../assets/images/cups/Rectangle 15.png"
import g from "./../assets/images/cups/Rectangle 12.png"
import h from "./../assets/images/cups/Rectangle 16.png"

const FollowUs = () => {
  return (
    <div className="mt-5 w-10/12 mx-auto">
      <div className="text-center py-8">
        <p className="opacity-80 text-xs font-sans">---Follow Us Now ---</p>
        <h1
          className="font-bold text-4xl pb-5"
          style={{ textShadow: "2px 2px 4px #331A15" }}
        >
          Follow On Instagram
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
         <img src={a} alt="" />
         <img src={b} alt="" />
         <img src={c} alt="" />
         <img src={e} alt="" />
         <img src={f} alt="" />
         <img src={d} alt="" />
         <img src={g} alt="" />
         <img src={h} alt="" />
      </div>
    </div>
  );
};

export default FollowUs;
