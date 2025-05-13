import NavBar from "@/app/Component/Navbar";
import CharacterSections from "@/app/Component/Characters";
import Link from "next/link";

const page = () => {
  const pages = [
    {
      title: "See All PreOrders",
      href: "/PreOder",
      color: "text-blue-600",
    },
    {
      title: "Trendings",
      href: "/Trend",
      color: "text-red-600",
    },
    {
      title: "MostPopular",
      href: "/MostPopular",
      color: "text-green-600",
    },
    {
      title: "Footer",
      href: "/Footer",
      color: "text-purple-600",
    },
  ];

  return (
    <div>
      <NavBar />
      <CharacterSections />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
        {pages.map((page, index) => (
          <Link href={page.href} key={index}>
            <div className="cursor-pointer bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img
                src="/images/imgsss.png"
                alt={page.title}
                className="w-40 h-40 p-2 px-10 ml-20 object-cover"
              />
              <div className="p-4">
                <h3 className={`text-xl font-bold ${page.color} mb-2`}>
                  {page.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Go to {page.title} page and explore more.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
