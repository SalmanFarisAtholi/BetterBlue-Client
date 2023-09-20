import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
function PaymentSucces() {
  return (
    <div>
      <div className=" mt-4 flex items-center justify-center w-full ">
        <div className="flex items-center justify-center bg-darkPurple w-5/6 h-5/6 p-5 rounded-xl">
          <div className="text-center">
            <h1 className="text-3xl uppercase font-bold text-white">
              Ticket Booked
            </h1>
            <h1 className="text-white flex gap-2 hover:text-red-500 text-2xl font-semibold">
              Check Your Email{" "}
              <span className="flex pt-1 items-center justify-center">
                <MdOutlineMarkEmailRead />
              </span>
            </h1>
          
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="w-full flex items-center justify-center text-center pb-9">
          <div className="bg-litePurple w-5/6 p-5 rounded-xl ">
            <h1 className="font-bold text-5xl">Stadium Rules</h1>
            <h1 className="mt-2 text-xl text-white font-semibold">
              Don't Forget to wear Better Blue F.C Jersey
            </h1>
            <div className="text-slate-200 mt-8 leading-loose font-sans flex justify-center text-start">
              <ol className="list-decimal pl-6">
                <li>
                  No Smoking: Smoking is not allowed in the stadium seating
                  areas.
                </li>
                <li>
                  No Outside Food and Beverages: Please do not bring outside
                  food or drinks into the stadium.
                </li>
                <li>
                  Security Checks: Be prepared for bag checks and metal detector
                  screenings at the entrance.
                </li>
                <li>
                  No Weapons or Dangerous Items: Weapons and any dangerous items
                  are strictly prohibited.
                </li>
                <li>
                  Alcohol Policies: Consume alcohol only in designated areas and
                  adhere to age restrictions.
                </li>
                <li>
                  No Unauthorized Recording Devices: Do not use cameras or
                  recording devices without permission.
                </li>
                <li>
                  Stay in Designated Areas: Respect restricted access areas and
                  stay in your designated seats or sections.
                </li>
                <li>
                  Respect Other Fans: Be courteous to fellow fans, players, and
                  stadium staff.
                </li>
                <li>
                  No Reentry: Once you leave the stadium, reentry may not be
                  allowed.
                </li>
                <li>
                  Follow Emergency Procedures: Familiarize yourself with
                  emergency procedures and exit routes.
                </li>
                <li>
                  Respect the Venue: Avoid damaging or defacing stadium property
                  or facilities.
                </li>
                <li>
                  Prohibited Items: Check for a list of prohibited items such as
                  large bags, umbrellas, etc.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSucces;
