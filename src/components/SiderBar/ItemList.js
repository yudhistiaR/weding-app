"use client";
import Link from "next/link";
import { InputProgress } from "../InputProgress";

const ItemsList = () => {
  const list = [
    {
      name: "Daftar Tamu",
      path: "/",
    },
    {
      name: "Jadwal Acara",
      path: "/jadwal-acara",
    },
    {
      name: "Budget Pernikahan",
      path: "/budget-pernikahan",
    },
    {
      name: "Daftar Vendor",
      path: "/daftar-vendor",
    },
    {
      name: "Laporan Keuangan",
      path: "/laporan-keuangan",
    },
    {
      action: <InputProgress />,
      path: "",
    },
    {
      name: "Reakapitulasi Resepsi",
      path: "/reakapitulasi-resepsi",
    },
    {
      name: "Laporan Fotografer",
      path: "/laporan-fotografi",
    },
  ];

  return (
    <>
      {list.map((items, idx) => (
        <Link
          href={items.path}
          className={`hover:bg-gray-600 hover:text-white text-black ${items.action ? "" : "p-4"} block transition-colors duration-300 ${items.isActive ? "text-black " : "text-white"}`}
          key={idx}
        >
          {items.action ? (
            items.action
          ) : (
            <div className={`font-bold text-md text-black hover:text-white`}>
              <span>{items.name}</span>
            </div>
          )}
        </Link>
      ))}
    </>
  );
};

export default ItemsList;
