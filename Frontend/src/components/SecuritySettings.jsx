import React from "react";
import settingsIcon from "../assets/icons/settings.png"

class SecuritySettings extends React.Component {

    render() {
        return (
            <div className="ml-[16px] flex-row mt-16" id="security">
            <div className="pb-2 border-b-2 border-feed-border flex flex-row justify-start items-center gap-4">
                <img src={settingsIcon} alt="Settings" className="h-8 w-8 ml-1" />
                <h2 className="font-semibold text-big-title text-white">security Settings</h2>
            </div>

            <div className="flex flex-col gap-12 mt-8"> 
                <div className="flex flex-col w-1/2">
                    <label htmlFor="old_psw" className="text-white mb-2 ml-1">Old password</label>
                    <input type="password" id="old_psw" name="old_psw" className="text-white bg-transparent font-text text-sm border border-boder-grey p-3 rounded-md mr-4"/>
                </div>
                <div className="flex flex-row gap-8">
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="new_psw" className="text-white mb-2 ml-1">New password</label>
                        <input type="password" id="new_psw" name="new_psw" className="text-white bg-transparent font-text text-sm border border-boder-grey p-3 rounded-md"/>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="new_psw_conf" className="text-white mb-2 ml-1">Confirmation</label>
                        <input type="password" id="new_psw_conf" name="new_psw_conf" className="text-white bg-transparent font-text text-sm border border-boder-grey p-3 rounded-md"/>
                    </div>
                </div>

            </div>         
        </div>
        )
    }
}

export default SecuritySettings