const SectionHeader = ({ title }) => {
  return (
    <>
      <div className="w-full bg-slate-600 text-white font-semibold text-xl rounded-tl-lg rounded-tr-lg p-4 mb-3">
        {title}
      </div>
    </>
  );
};

export default SectionHeader;
