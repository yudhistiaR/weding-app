import SectionHeader from "@/components/SectionHeader";
import { InputFotoGrafi } from "./InputFotoGrafi";
import TableFotoGrafi from "./TableFotoGrafi";

const LaporanFotoGrafi = () => {
  return (
    <>
      <SectionHeader title="Laporan Fotografi" />
      <div className="px-4 overflow-auto">
        <InputFotoGrafi />
        <TableFotoGrafi />
      </div>
    </>
  );
};

export default LaporanFotoGrafi;
