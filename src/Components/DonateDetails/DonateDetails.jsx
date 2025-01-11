import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const DonateDetails = () => {
  // Load donation details from the loader
  const donate = useLoaderData();

  // Form state
  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    notes: "",
  });

  // Destructure donation details
  const { image, title, description, status, contactInfo, division } = donate;

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = () => {
    if (!formData.quantity || !formData.itemType || !formData.pickupLocation) {
      toast.error("Please fill in all required fields! 🚨");
    } else {
      console.log("Form Submitted:", formData);
      toast.success("Thank you for your donation! 🎉");

      
      setFormData({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        notes: "",
      });
    }
  };

  return (
    <div className="p-5 md:flex ">
      {/* Left Section */}
      <div className="pl-6 mr-6">
        <h1 className="text-3xl font-bold mb-3 text-[rgb(14,165,233)]">{title}</h1>
        <img
          className="w-full md:h-[500px] object-cover rounded mb-3"
          src={image}
          alt={title}
        />
      </div>

      {/* Right Section */}
      <div>
        <p className="pb-4">
          <span className="font-bold">Description:</span> {description}
        </p>
        <p className="mt-2 pb-4 text-gray-600">
          <span className="font-bold">Status:</span> {status}
        </p>
        <p className="mt-2 pb-4">
          <span className="font-bold">Contact:</span> {contactInfo}
        </p>
        <p className="mt-2 pb-4">
          <span className="font-bold">Division:</span> {division}
        </p>

        {/* Donation Form */}
        <div className="flex flex-col">
          <h1 className="font-bold mb-2 text-[rgb(14,165,233)] text-2xl">Donation Form</h1>

          <input
            type="text"
            name="quantity"
            placeholder="Quantity of items"
            className="input mb-4 input-bordered w-full"
            value={formData.quantity}
            onChange={handleChange}
          />

          <input
            type="text"
            name="itemType"
            placeholder="Item type (e.g., blanket, sweater)"
            className="input mb-4 input-bordered w-full"
            value={formData.itemType}
            onChange={handleChange}
          />

          <textarea
            name="pickupLocation"
            className="textarea textarea-bordered mb-4"
            placeholder="Pickup location (e.g., address)"
            value={formData.pickupLocation}
            onChange={handleChange}
          ></textarea>

          <textarea
            name="notes"
            className="textarea textarea-bordered mb-4"
            placeholder="Additional notes (optional)"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>

          <div>
            <button
              className="btn bg-[rgb(14,165,233)] text-white w-full"
              onClick={handleSubmit}
            >
              Submit Donation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateDetails;
