export default function Page() {
  return (
    <div>
      <div className="bg-white justify-center max-lg:pt-10 pl-[20px] pr-[20px]">
        <span className="text-center text-4xl">
          <h1>Moving Card -School Project-</h1>
        </span>
        <div className="flex justify-center py-14">
          <img
            className="max-w-xs"
            src="/src/img/movingcard/movingcard-thumbs.webp"
            alt="movingcard"
          ></img>
        </div>
        <div className="block text-center w-full text-gray-500 leading-loose">
          This school project is to create an invitation card. I picked a moving
          card. <br />
          <br />
          The card that informs the customers the business has moved to the new
          address. I added a gimmick to the card design by adding an animation
          layer to the card itself.
          <div className="flex justify-center pt-24 pb-24">
            <img
              src="/src/img/movingcard/movingcard_1.webp"
              alt="movingcard"
            ></img>
          </div>
          At first glance, the recipient sees the cockroach silhouette on the
          cover. <br />
          <br />
          In the middle of the right side of the front of the card, there is a
          half-circle cutout with an arrow inviting the recipient to pull out
          from the side.
          <div className="flex justify-center pt-24 pb-24">
            <img
              src="/src/img/movingcard/movingcard_2.webp"
              alt="movingcard"
            ></img>
          </div>
          In the middle of the right side of the front of the card, there is a
          half-circle cutout with an arrow inviting the recipient to pull out
          from the side. <br />
          <br />
          While the layer of the half-transparent stripes pulling out it creates
          a visual of the cockroach moving. ( a running cockroach! ) I think
          this effect is fun and easy to grab the attention of the recipient to
          find out what this card is about.. <br />
          <br />
          Until they open the card and see all the information that the business
          has been moved to the new place.
          <div className="flex justify-center pt-24 pb-24">
            <img
              src="/src/img/movingcard/movingcard_0.webp"
              alt="movingcard"
            ></img>
          </div>
          <div className="flex justify-center pt-24 pb-24">
            <img
              src="/src/img/movingcard/movingcard_3.webp"
              alt="movingcard"
            ></img>
          </div>
          aka. I used to make this sample animation working on my old WP site It
          is fun users can drag the cards around and see the effect.
        </div>
        <div className="flex justify-center pt-24 pb-24">
          <img
            src="/src/img/movingcard/movingcard_4.webp"
            alt="movingcard"
          ></img>
        </div>
        <div className="flex justify-center pt-24 pb-24">
          <img
            src="/src/img/movingcard/movingcard_5.webp"
            alt="movingcard"
          ></img>
        </div>
      </div>
    </div>
  );
}
