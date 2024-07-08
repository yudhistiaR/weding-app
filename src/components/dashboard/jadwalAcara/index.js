import TableJadwalAcara from "./TableJadwalAcara";
import SectionHeader from "@/components/SectionHeader";
import { InputJadwalAcara } from "./InputJadwalAcara";

const JadwalAcara = () => {
  return (
    <>
      <SectionHeader title="Jadwal Acara" />
      <div className="px-4 overflow-auto">
        <InputJadwalAcara />
        <TableJadwalAcara />
      </div>
    </>
  );
};

export default JadwalAcara;
