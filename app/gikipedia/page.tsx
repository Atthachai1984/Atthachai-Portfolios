export default function Page() {
  return (
    <div>
      <div className="bg-white justify-center max-lg:pt-10">
        <span className="text-center text-4xl">
          <h1>Gikipedia</h1>
        </span>
        <div className="block text-center w-full text-gray-500 leading-loose py-44">
          Gikipedia.org is an experimental project using the open-source
          Wikimedia database and re-design the page layout, by putting the
          syllabus on the left for the user to jump between topics effortlessly.
        </div>
        <div className="flex justify-center pt-24">
          <img src="/src/img/gikipedia/gikipedia-1.gif" alt="gikipedia"></img>
        </div>
        <div className="flex justify-center pt-24">
          <img src="/src/img/gikipedia/gikipedia-2.gif" alt="gikipedia"></img>
        </div>
      </div>
    </div>
  );
}
