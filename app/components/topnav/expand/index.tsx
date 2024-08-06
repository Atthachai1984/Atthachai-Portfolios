import Link from "next/link";

const ExpandNav = () => {
  return (
    <>
      {/*expand Navigation*/}
      <ul className="text-center text-gray-500 text-sm font-light transition ease-in-out display:none">
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="sapa">SAPATV</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="pdflive">PDF LIVE</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="splashed">Splashed</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="gikipedia">Gikipedia</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="clarie">Clarie</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="openrice">OpenRice</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="88db">88db</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="kitchentech">Kitchen Tech</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="eis">eis</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="2monkeysfilms">2MonkeysFilms</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="leatherocasa">LeatherO Casa</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="matthewsfamilyfarms">Matthews Family Farms...</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="infinitybusinessdev">Infinity Business Devel...</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="babadook">Babadook</a>
        </li>
        <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
          <a href="movingcard">Moving Card</a>
        </li>
      </ul>
      <div className="flex justify-center pt-6 pb-20">
        <div className="flex justify-center pt-6">
          <a target="_blank" href="https://www.linkedin.com/in/bo-phan/">
            {" "}
            <img src="/src/img/icon.svg" alt="Linkedin"></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default ExpandNav;
