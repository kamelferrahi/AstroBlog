import React from "react";
import settingsIcon from "../assets/icons/settings.png"
import profileImg from "../assets/images/profile.jpg";
import pen from "../assets/icons/pen.png"

class ProfileSettings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: {
                img: profileImg,
            }
        }
    }
    render(){
    return (
        <div className="ml-[16px] flex-row h-full" id="profile">
            <div className="pb-2 border-b-2 border-feed-border flex flex-row justify-start items-center gap-4">
                <img src={settingsIcon} alt="Settings" className="h-8 w-8 ml-1" />
                <h2 className="font-semibold text-big-title text-white">Profile Settings</h2>
            </div>
                        
                        
            <div className="flex flex-row gap-12 mt-8">
                <div className="flex flex-col gap-8 w-2/3">
                    <div className="flex flex-col">
                        <label htmlFor="fname" className="text-white mb-2 ml-1">First Name</label>
                        <input type="text" id="fname" name="fname" className="text-white bg-transparent font-text text-sm border border-boder-grey p-3 rounded-md" placeholder="Yacine"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lname" className="text-white mb-2 ml-1">Last Name</label>
                        <input type="text" id="lname" name="lname" className=" text-white bg-transparent font-text text-sm border border-boder-grey p-3 rounded-md" placeholder="Touahria" />
                    </div>
                </div>
                <div className=" relative w-1/2 ml-12">
                    <div className="w-48 h-48 overflow-hidden rounded-full">
                        <img src={this.state.profile.img} alt="Profile picture" className="w-full h-full object-cover"/>   
                    </div> 
                    <div className="absolute bottom-2 right-0 py-2 px-4 bg-zinc-800 rounded-md flex gap-2 items-center">
                        <img src={pen} alt="google" className='h-4 w-4'/>
                        <span className="text-white font-text text-sm cursor-pointer">Change picture</span>
                    </div>
                </div>


            </div>

            <div className="flex flex-col gap-12 mt-12"> 
                <div className="flex flex-col">
                    <label htmlFor="username" className="text-white mb-2 ml-1">Username</label>
                    <input type="text" id="username" name="username" className="text-white bg-transparent font-text text-sm border border-boder-grey p-3 rounded-md" placeholder="yacine_touahria"/>
                </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-white mb-2 ml-1">Email</label>
                                <input type="email" id="email" name="email" className="text-white bg-transparent font-text text-sm border border-boder-grey p-3 rounded-md"  placeholder="yacine_touahria@mail.com"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="bio" className="text-white mb-2 ml-1">Bio</label>
                                <textarea id="bio" name="bio" className="text-white bg-transparent font-text text-sm border border-boder-grey p-3 rounded-md h-32"  placeholder="Tell your readers about yoursef..."/>
                            </div>
            </div>
        </div>

    )
    }
}

export default ProfileSettings