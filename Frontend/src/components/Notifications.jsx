import { useNavigate } from "react-router-dom";

function Notifications({ notifications }) {
    const navigate = new useNavigate();
    const renderNotifications = (notifications) => {
        return notifications.map((notif) => {
            console.log(notif);
            return (
                <div className="flex flex-row items-end justify-start gap-2 py-2 border-b border-border-grey" key={notif.id} onClick={() => navigate(notif.link)}>
                    <img src={notif.img} alt={notif.img} className="h-[40px] w-[50px] rounded-sm" />
                    <div className="flex flex-col items-center justify-start">
                        <span className="w-full text-black font-semibold text-small-subtitle">{notif.message}</span>
                        <span className="w-full text-light-text text-smallest-text">{notif.date}</span>
                    </div>
                </div>
            );
        });
    }
    return (
        <div className="flex flex-col gap-4 px-4 py-3 w-[300px] bg-white max-h-[500px] overflow-auto rounded-md absolute right-0 top-[30px] z-10">
            {renderNotifications(notifications)}
        </div>
    );
}

export default Notifications;