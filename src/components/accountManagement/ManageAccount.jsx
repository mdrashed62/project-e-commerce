import React from "react";
import Button from "../shared/Button";

const ManageAccount = () => {
  return (
    <div>
      <div className="w-[100%] flex gap-5 mb-10">
        <div className="w-[30%] mt-6">
          <div className="w-3/4 mx-auto">
          <div className="collapse">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Manage My Account
            </div>
            <div className="collapse-content text-sm font-semibold space-y-2">
              <p className="text-[#DB4444]">My Profile</p>
              <p>Address Book</p>
              <p>My Payment Option</p>
            </div>
          </div>
          <div className="collapse">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              My Orders
            </div>
            <div className="collapse-content text-sm font-semibold space-y-2">
              <p>My Returns</p>
              <p>My Cancellations</p>
            </div>
          </div>
        
          <div className="collapse">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
            My Wishlist
            </div>
            <div className="collapse-content text-sm font-semibold space-y-2">
            <p>Saved Items</p>
            <p>Favorite Stores</p>
            </div>
          </div>
          </div>
        </div>
        <div className="w-[70%] p-8 mt-14">
          <h1 className="text-xl font-bold text-[#DB4444] mb-6">
            Edit Your Profile
          </h1>
          <form className="w-full space-y-5">
            <div className="flex gap-5">
              {/* First Name and Last Name in one row */}
              <div className="flex flex-col w-1/2 space-y-2">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-gray-100 px-3 py-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col w-1/2 space-y-2">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-gray-100 px-3 py-2 rounded-sm"
                />
              </div>
            </div>

            <div className="flex gap-5">
              {/* Email and Address in one row */}
              <div className="flex flex-col w-1/2 space-y-2">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-100 px-3 py-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col w-1/2 space-y-2">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="bg-gray-100 px-3 py-2 rounded-sm"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p>Password Changes</p>
              <input
                type="password"
                placeholder="Current Password"
                className="bg-gray-100 w-full px-3 py-2 rounded-sm"
              />
              <input
                type="password"
                placeholder="New Password"
                className="bg-gray-100 w-full px-3 py-2 rounded-sm"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="bg-gray-100 w-full px-3 py-2 rounded-sm"
              />
            </div>
          </form>
          <div className="flex justify-end mt-3">
            <Button text={"Save Changes"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
