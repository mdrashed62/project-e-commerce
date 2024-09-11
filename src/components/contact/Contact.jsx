import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import Button from "../shared/Button";
import Cart from "../cart/Cart";

const Contact = () => {
    return (
        <div className="my-5 md:my-16 p-4">
            <div className="my-5 md:my-10">
                Home / Contact
            </div>
            <div className="w-[100%] flex flex-col md:flex-row gap-5">
                <div className="flex gap-3 md:w-[33%] flex-col bg-gray-50 shadow-lg">
                    <div className="space-y-2 p-6 border-b-2">
                        <div className="space-y-2">
                            <h3 className="text-xl flex gap-2 items-center font-bold"><span className="bg-red-500 p-3 rounded-full text-white"><LuPhone /> </span>Call To Us</h3>
                            <p>We are available 24/7, 7 days a week.</p>
                            <p>Phone: +8801611112222</p>
                        </div>
                    </div>
                    <div className="space-y-2 p-6 bg-gray-50">
                        <div className="space-y-2">
                            <h3 className="text-xl flex gap-2 items-center font-bold"><span className="bg-red-500 p-3 rounded-full text-white"><MdOutlineMail /> </span>Write To Us</h3>
                            <p>Fill out our form and we will contact you within 24 hours.</p>
                            <p>Emails: customer@exclusive.com</p>
                            <p>Emails: support@exclusive.com</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-[67%]">
                    <form>
                        <div className="grid grid-cols-3 gap-3">
                            <input type="text" placeholder="Your Name" className="bg-slate-100 px-3 py-3
                            " />
                            <input type="email" placeholder="Your Email" className="bg-slate-100 px-3 py-3
                            " />
                            <input type="number" placeholder="Your Phone" className="bg-slate-100 px-3 py-3
                            " />
                        </div>
                        <div>
                            <textarea name="" id="" placeholder="Your Message" className="w-full bg-slate-100 p-4 mt-2" cols={'50'} rows={'10'}></textarea>
                        </div>
                    </form>
                    <div className="flex justify-end mt-3">
                        <Button text={"Send Message"}></Button>
                    </div>
                </div>
            </div>
            <Cart></Cart>
        </div>
    );
};

export default Contact;