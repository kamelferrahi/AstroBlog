function Notifications({ notifications }) {
    const renderNotifications = (notifications) => {
        return notifications.map((notif) => {
            console.log(notif);
            return (<div className="flex flex-row align-center justify-between" key={notif.id}>
                <img src={notif.img} alt={notif.img} className="h-[50px] w-[70px] rounded-sm" />
                <div className="flex flex-col align-center justify-start">
                    <span className="w-full text-black">{notif.message}</span>
                    {/* <span className="w-full text-right">{notif.date}</span> */}
                </div>
            </div>);
        });
    }
    return (
        <div className="flex flex-col gap-4 px-2 py-3 w-[300px] bg-white max-h-[500px] overflow-auto rounded-sm absolute right-0 top-[30px]">
            {renderNotifications(notifications)}
        </div>
    );
}

export default Notifications;