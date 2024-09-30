export default function Page() {
  return (
    <div>
      <div className="bg-white justify-center max-lg:pt-10 pl-[10px] pr-[10px]">
        <span className="text-center text-4xl">
          <h1>2Monkeys Films</h1>
        </span>
        <div className="flex justify-center py-14">
          <img
            className="max-w-xs"
            src="/src/img/2monkeysfilms/2monkeysfilms-thumbs.webp"
            alt="2monkeysfilms"
          ></img>
        </div>
        <div className="block text-center w-full text-gray-500 leading-loose">
          2 Monkeys Films Co Ltd is located in Bangkok, Thailand. Company is
          working in Film, Television and Video, Media Production business
          activities.
        </div>
        <div className="flex justify-center pt-24">
          <img
            src="/src/img/2monkeysfilms/2monkeysfilms_1.webp"
            alt="eis"
          ></img>
        </div>
        <div className="flex justify-center pt-24">
          <img
            src="/src/img/2monkeysfilms/2monkeysfilms_2.webp"
            alt="eis"
          ></img>
        </div>
      </div>
    </div>
  );
}
