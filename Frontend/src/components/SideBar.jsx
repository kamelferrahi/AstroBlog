import React, { useState } from "react";
import current from "../assets/icons/selected.png";
function SideBar() {
  const [selectedSectionId, setSelectedSectionId] = useState("profile");

  const barItems = [
    { label: "Profile Settings", id: "profile" },
    { label: "Security Settings", id: "security" }
  ]



  const onSelect = (sectionId) => {
    setSelectedSectionId(sectionId);
    const selected = document.getElementById(sectionId);
    selected.scrollIntoView({ behavior: 'smooth' });
  }
  const createbarItems = () => {
    return (
      barItems.map(section => (
        <li
          className={`block cursor-pointer w-full h-[42px] rounded-[8px] object-cover px-4 py-2 bg-opacity-25 
              flex items-center space-x-3 align-items-center 
              ${selectedSectionId === section.id ? 'bg-light-pink' : 'pl-[48px]'}`}
          key={section.id}
          onClick={() => onSelect(section.id)}
        >
          {selectedSectionId === section.id &&
            <img src={current} alt="current" className="w-5" />}
          <span className={`text-base font-medium w-full ${selectedSectionId === section.id ? "text-white" : "text-description"}`}>{section.label}</span>
        </li>
      ))
    );
  }

  return (
    <div className="w-full h-full relative">
      <ul className="flex flex-col justify-start items-start px-2 sticky top-4">
        {createbarItems()}
      </ul>

    </div>
  )
}

export default SideBar