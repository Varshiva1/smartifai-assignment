import dashboardIcon from "../../assets/dashboard.svg";
import connectIcon from "../../assets/connect.svg";
import reportIcon from "../../assets/reports.svg";
import settingsIcon from "../../assets/settings.svg";

export default function SideNavBar() {
  return (
    <div className="h-full min-w-[200px] py-4 px-6 col bg-primaryColor text-white">
      <p className="text-2xl ">Platfrom</p>
      <br />
      <br />
      <p className="flex gap-1 py-2 text-secondaryColor cursor-pointer">
        <img src={dashboardIcon} alt="dashboard" />
        Dashboard
      </p>
      <p className="flex gap-1 py-2 cursor-pointer">
        {" "}
        <img src={connectIcon} alt="connect" /> Connect
      </p>
      <p className="flex gap-1 py-2 cursor-pointer">
        {" "}
        <img src={reportIcon} alt="report" />
        Report
      </p>
      <p className="flex gap-1 py-2 cursor-pointer">
        {" "}
        <img src={settingsIcon} alt="settings" />
        Settings
      </p>
    </div>
  );
}
