import SectionHeader from "../SectionHeader";
import TableTamu from "./TableTamu";
import { InputTamu } from "./InputTamu";

const DashboardPage = () => {
  return (
    <>
      <SectionHeader title="Daftar Tamu Undangan" />
      <div className="px-4">
        <InputTamu />
        <TableTamu />
      </div>
    </>
  );
};

export default DashboardPage;
