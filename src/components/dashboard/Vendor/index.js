import SectionHeader from "@/components/SectionHeader";
import { InputVendor } from "./InputVendor";
import TableVendor from "./TableVendor";

const Vendor = () => {
  return (
    <>
      <SectionHeader title="Daftar Vendor" />
      <div className="px-4 overflow-auto">
        <InputVendor />
        <TableVendor />
      </div>
    </>
  );
};

export default Vendor;
