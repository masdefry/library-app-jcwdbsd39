import EmployeeStatCard from "./EmployeeStatCard";
import EmployeeTable from "./EmployeeTable";

export default function EmployeeManagementPage() {
  return (
    <section>
      {/* Header */}
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-[32px] font-bold text-[#2036bd]">
            Employee Management
          </h2>
          <p className="mt-2 text-[18px] text-[#454654]">
            Manage library staff roles, shifts, and digital access levels.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-[#2036bd] px-6 py-3 font-bold text-white shadow-md transition-all hover:bg-[#2036bd]/90">
          <span className="material-symbols-outlined">person_add</span>
          Register New Employee
        </button>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-12 gap-6">
        <EmployeeStatCard
          title="Total Staff"
          value="24"
          icon="groups"
          iconWrapperClassName="bg-[#dfe0ff] text-[#2036bd]"
          valueClassName="text-[#2036bd]"
        />

        <EmployeeStatCard
          title="On Duty Now"
          value="08"
          icon="schedule"
          iconWrapperClassName="bg-[#6cf8bb] text-[#005236]"
          valueClassName="text-[#006c49]"
        />
      </div>

      {/* Table */}
      <EmployeeTable />
    </section>
  );
}