import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="grid grid-cols-5 gap-6 h-screen bg-gray-100 p-6">
        <div className="col-span-1 flex flex-col">
          <Sidebar />
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <div>
            <Topbar />
          </div>
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
}
