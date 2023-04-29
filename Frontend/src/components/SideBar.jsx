import React from "react";
import current from "../assets/icons/selected.png";
class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSectionId : "profile"
        }
    }

    barItems = [
         {label : "Profile Settings", id : "profile"},
         {label : "Security Settings", id : "security"}
    ]



    onSelect = (sectionId) => {
        this.setState({selectedSectionId : sectionId})
        const selected = document.getElementById(sectionId);
        selected.scrollIntoView({ behavior: 'smooth' });
       }
    createbarItems() {
        return (
          this.barItems.map(section => (
            <li
              className={`block cursor-pointer w-full h-[42px] rounded-[8px] object-cover px-4 py-2 bg-opacity-25 
              flex items-center space-x-3 align-items-center 
              ${this.state.selectedSectionId === section.id ? 'bg-light-pink' : ''}`}
              key={section.id}
              onClick={()=> this.onSelect(section.id)}
            >
              {this.state.selectedSectionId === section.id && 
              <img src={current} alt="current" className="w-5" />}
              <span className="text-base text-white font-medium w-full">{section.label}</span>
            </li>
          ))
        );
      }

    render() {
        return (
            <div className="h-full mt-16 w-1/4">
                <ul className="flex flex-col justify-start items-start py-4 px-2 h-full">
                    {this.createbarItems()} 
                </ul>
                
            </div>
        )
    }
}

export default SideBar