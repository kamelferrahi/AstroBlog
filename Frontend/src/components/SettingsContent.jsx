import React from "react";
import ProfileSettings from "./ProfileSettings";
class SettingsContent extends React.Component {
    render() {
        return(
            <div className="w-5/12 h-full">
                <ProfileSettings />
                
                <div className="flex flex-row mt-20 justify-end gap-8">
                        <button className='w-1/4 text-white rounded-md outline-none border bg-transparent h-[40px] font-medium text-sm border-boder-grey'>Cancel</button>
                        <button className='w-1/4 text-white rounded-md outline-none border-none bg-gradient-to-r from-light-pink to-dark-pink h-[40px] font-medium text-sm'>Save changes</button>
                </div>
            </div>
        )
    }
}

export default SettingsContent