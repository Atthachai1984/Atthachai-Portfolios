export default function Page() {
  return (
    <div>
      <div className="bg-white justify-center max-lg:pt-10 pl-[20px] pr-[20px]">
        <span className="text-center text-4xl">
          <h1>Splashed</h1>
        </span>
        <div className="flex justify-center py-44  ">
          <img
            className="max-w-xs"
            src="/src/img/splashed/splashed-logo.png"
            alt="splashed"
          ></img>
        </div>
        <div className="block text-center w-full text-gray-500 leading-loose">
          The splashed project is a project that my team at Tightrope
          Interactive created during the pandemic in 2020. <br />
          <br />
          The concept is to create a video confluence application to provide a
          free video confluence to the customers. As a lead creative, I work
          directly with the product manager and the marketing team to develop
          the brand’s look and feel and all the assets used within the apps and
          advertising materials.
          <br />
          <br />
          The work process was pretty straightforward from the direction of the
          product manager and the targeted audience from the marketing team,
          along with the research from the current market. I've created a
          friendly, easy-to-use user interface from registrations to the apps'
          actuarial use of the apps themself. <br />
          <br />
          Wireframe and user journey are a part of the design process as well.
          On the technical side, we have chosen the open-source “Jetsi” as a
          base code; with this, we can shorten the time and resources of the
          project.
        </div>
        <div className="flex justify-center pt-24">
          <img src="/src/img/splashed/splashed-1.png" alt="splashed"></img>
        </div>
        <div className="flex justify-center pt-24">
          <img src="/src/img/splashed/splashed-2.png" alt="splashed"></img>
        </div>
      </div>
    </div>
  );
}
