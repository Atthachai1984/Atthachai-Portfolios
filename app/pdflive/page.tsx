export default function Page() {
  return (
    <div>
      <div className="bg-white justify-center max-lg:pt-10 pl-[20px] pr-[20px]">
        <span className="text-center text-4xl">
          <h1>PdfLive</h1>
        </span>
        <div className="flex justify-center">
          <img src="/src/img/pdflive/pl0.jpg" alt="PDF Live"></img>
        </div>
        <div className="block text-center w-full text-gray-500 leading-loose">
          PDF.live is an online file conversion service that allows users to
          upload their local files and convert them to another format.
          <br />
          <br />
          This project's challenge is communicating with the user about the
          process they are on and what to do next.
          <br />
          <br />A clear message to the user of the error or failure to upload or
          convert the file is the server's limitation, which can handle the task
          in limited numbers.
        </div>
        <div className="flex justify-center pt-24">
          <img src="/src/img/pdflive/pl1.jpg" alt="PDF Live"></img>
        </div>
        <div className="flex justify-center pt-24">
          <img src="/src/img/pdflive/pl2.jpg" alt="PDF Live"></img>
        </div>
        <div className="flex justify-center pt-24">
          <img src="/src/img/pdflive/pl3.jpg" alt="PDF Live"></img>
        </div>
      </div>
    </div>
  );
}
