import SectionHeader from "@/components/SectionHeader";
import { InputKeuangan } from "./InputKeuangan";
import TableKeuangan from "./TableKeuangan";

const LaporanKeuangan = () => {
  return (
    <>
      <SectionHeader title="Laporan Keuangan" />
      <div className="px-4 overflow-auto">
        <InputKeuangan />
        <TableKeuangan />
      </div>
    </>
  );
};

export default LaporanKeuangan;
