import CreateJobMain from "../components/CreateJob";
import NavBar from "../components/Nav";

function Createjob() {
  return (
    <div className="items-center">
      <NavBar currentactivePage={"Manage Jobs"} />
      <CreateJobMain />
    </div>
  );
}
export default Createjob;
