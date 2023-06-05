import { FaCalendarDay, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex justify-between bg-black py-20 px-16 rounded-xl mt-8 mb-20">
      <div className="flex items-center gap-4">
        <FaCalendarDay className="text-4xl text-orange-600" />
        <div className="text-white">
          <p className="font-medium">We are open monday-friday</p>
          <h3 className="text-3xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FaPhoneAlt className="text-4xl text-orange-600" />
        <div className="text-white">
          <p className="font-medium">Have a question?</p>
          <h3 className="text-3xl font-bold">+2546 251 2658</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FaMapMarkerAlt className="text-4xl text-orange-600" />
        <div className="text-white">
          <p className="font-medium">Need a repair? our address</p>
          <h3 className="text-3xl font-bold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
