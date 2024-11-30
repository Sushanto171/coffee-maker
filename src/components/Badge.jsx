import cup from "./../assets/images/icons/1.png"
import award from "./../assets/images/icons/2.png"
import ball from "./../assets/images/icons/3.png"
import coffee from "./../assets/images/icons/4.png"

const Badge = () => {
    return (
        <div className="bg-[#ECEAE3] ">
            <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-20 py-5">
                <div>
                    <img src={cup} alt="" />
                    <h4 className="font-semibold text-lg my-2">Awesome Aroma</h4>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={award} alt="" />
                    <h4 className="font-semibold text-lg my-2">High Quality</h4>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={ball} alt="" />
                    <h4 className="font-semibold text-lg my-2">Pure Grades</h4>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={coffee} alt="" />
                    <h4 className="font-semibold text-lg my-2">Proper Roasting</h4>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
            </div>
        </div>
    );
};

export default Badge;