import SectionHeader from "@/components/SectionHeader";
import { InputRekapitulasi } from "./InputRekapitulasi";
import TableRekapitulasi from "./TableRekapitulasi";

const RekapitulasiResepsi = () => {
  return (
    <>
      <SectionHeader title="Rekapitulasi Resepsi" />
      <div className="px-4 overflow-auto">
        <InputRekapitulasi />
        <TableRekapitulasi />
      </div>
    </>
  );
};

export default RekapitulasiResepsi;
