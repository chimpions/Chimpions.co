import React from "react";

export default function About() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center -mt-80">
      <div className="bg-gradient-to-b from-[#0F061D] to-[#1F1531] py-32 w-full"></div>
      <div className="h-full w-full bg-repeat-y bg-cover">
        <img
          src="images/RGB_Commissioned_Banner.png"
          alt="A still of a pixelated forest in rich purple colors."
        />
      </div>
      <div className="bg-gradient-to-b from-[#1F1531] to-[#0F061D] w-full px-6">
        <div className="max-w-screen-sm mx-auto py-32">
          <p className="font-display text-xl md:text-3xl text-pink-400">
            There used to be thousands of us...
          </p>
          <p className="font-body tracking-widest leading-loose mt-3 text-purple-200">
            Our packs used to roam this planet's primordial forests. Slinging
            from branch to branch, peering out across the treetops. It was a
            veritable paradise, and we were its kings and queens.
          </p>
          <p className="font-body tracking-widest leading-loose mt-3 text-purple-200">
            Or so we thought...
          </p>
          <p className="font-body tracking-widest leading-loose mt-3 text-purple-200">
            They appeared as if by magic. From across the vast oceans, they came
            bearing claw and fang. The Triumvirate of Chimpions, acted swiftly
            and decisively. Each tribe put forth their strongest of body and
            keenest of mind.
          </p>
          <p className="font-body tracking-widest leading-loose mt-3 text-purple-200">
            Together we stand...
          </p>
        </div>
      </div>
    </section>
  );
}
