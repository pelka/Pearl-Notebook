import Dashboard from "./Dashboard";
import Menu from "./Menu";
import SideNavigation from "./SideNavigation";

export default function MainLayout() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <SideNavigation/>
      </div>
      <div className="col-span-10">
        <Menu />
        <Dashboard/>
      </div>
    </div>
  )
}