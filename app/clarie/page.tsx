export default function Page() {
  return (
    <div>
      <div className="bg-white justify-center max-lg:pt-10 pl-[20px] pr-[20px]">
        <span className="text-center text-4xl">
          <h1>Clarie</h1>
        </span>
        <div className="flex justify-center">
          <img src="/src/img/clarie.gif" alt="clarie-logo"></img>
        </div>
        <div className="block text-center w-full text-gray-500 leading-loose">
          Clarie is a browser extension that will replace the default browser's
          new tab with desktop-like environments. <br />
          <br />
          It's a productivity application that allows users to make a quiet
          to-do list and the main priority task of the day. <br />
          <br />
          Clarie also offers a high-quality desktop background the browser user
          can download and also upload their local image to use as a background
          as well.
          <br />
          <a href="https://chromewebstore.google.com/detail/clarie/obkoocpicbjnoaljdjbadoadkoemchlp" target="_blank">Clarie on Chrome Web Store</a>
          <br/>
        </div>
        <div className="flex justify-center pt-24">
          <img src="/src/img/clarie/clarie-1.jpg" alt="clarie"></img>
        </div>
        <div className="flex justify-center pt-24">
          <img src="/src/img/clarie/clarie-2.jpg" alt="clarie"></img>
        </div>
      </div>
    </div>
  );
}
