import sectionheader from "@/components/sectionheader";
import { inputbudget } from "./inputbudget";
import tablebudget from "./tablebudget";

const budgetpernikahan = () => {
  return (
    <>
      <sectionheader title="budget pernikahan" />
      <div classname="px-4 overflow-auto">
        <inputbudget />
        <tablebudget />
      </div>
    </>
  );
};

export default budgetpernikahan;
