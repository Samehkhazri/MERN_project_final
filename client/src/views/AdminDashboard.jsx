import CreateEvent from "../components/CreateEvent";
import CreateMerch from "../components/CreateMerch";
import BlogCreate from "../components/CreateBlog";
import AllUsersTable from "../components/AllUsersTable";
const AdminDashboard = () => {
    return (
        <div>
            <AllUsersTable/>
            <BlogCreate/>
            <CreateEvent/>
            <CreateMerch/>
        </div>
    )
}
export default AdminDashboard;