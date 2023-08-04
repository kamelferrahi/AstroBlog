import { useNavigate } from "react-router-dom";

function Notifications({ notifications }) {
    const navigate = new useNavigate();
    const renderNotifications = (notifications) => {
        return notifications.map((notif) => {
            return (
                <div className="flex flex-row items-end justify-start gap-2 py-2 border-b border-border-grey relative hover:bg-input-light-grey" key={notif.id} onClick={() => navigate(notif.link)}>
                    <img src={notif.img} alt={notif.img} className="h-[40px] w-[50px] rounded-sm" />
                    <div className="flex flex-col items-center justify-start">
                        <span className={`w-full ${notif.seen ? "text-black" : "text-light-pink"} font-semibold text-small-subtitle`}>{notif.message}</span>
                        <span className={`w-full ${notif.seen ? "text-light-text" : "text-light-pink font-medium"} text-smallest-text `}>{notif.date}</span>
                    </div>
                    {!notif.seen && <div className="h-2 w-2 rounded-full bg-light-pink absolute top-1 right-0"></div>}
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