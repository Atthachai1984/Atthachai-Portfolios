import Link from "next/link";

const ExpandNav = () => {
  return (
    <>
      {/*expand Navigation*/}
      <ul className="text-center text-gray-500 text-sm font-light transition ease-in-out display:none">
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/trueid" className="hover:underline">TRUE ID</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/pdflive" className="hover:underline">PDF LIVE</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/splashed" className="hover:underline">Splashed</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/gikipedia" className="hover:underline">Gikipedia</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/clarie" className="hover:underline">Clarie</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/openrice" className="hover:underline">OpenRice</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/88db" className="hover:underline">88db</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/kitchentech" className="hover:underline">Kitchen Tech</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/eis" className="hover:underline">eis</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/2monkeysfilms" className="hover:underline">2MonkeysFilms</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/leatherocasa" className="hover:underline">LeatherO Casa</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/matthewsfamilyfarms" className="hover:underline">Matthews Family Farms...</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/infinitybusinessdev" className="hover:underline">Infinity Business Devel...</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/babadook" className="hover:underline">Babadook</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="/movingcard" className="hover:underline">Moving Card</a>
        </li>
      </ul>
      <div className="flex justify-center pt-6 pb-20">
        <div className="flex justify-center pt-6">
          <a target="_blank" href="https://www.linkedin.com/in/bo-phan/" className="pr-3">
            {" "}
            <img src="/src/img/linkedin.png" alt="Linkedin" className="w-[30px] opacity-50 hover:opacity-100"></img>
          </a>
          <a target="_blank" href="https://github.com/Atthachai1984" className="pr-3">
            {" "}
            <img src="/src/img/github.png" alt="Github" className="w-[30px] opacity-50 hover:opacity-100"></img>
          </a>
          <a target="_blank" href="https://vercel.com/atthachai-phanuthats-projects/my-portfolio">
            {" "}
            <img src="/src/img/vercel.png" alt="Vercel" className="w-[30px] opacity-50 hover:opacity-100"></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default ExpandNav;
