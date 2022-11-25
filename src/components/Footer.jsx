import React from "react";

export default function Footer() {
  return (
    <footer className="grid grid-cols-12 bg-gray-800 bottom-0">
      <section className="col-span-3 col-start-3 mt-4">
        <h2 className="text-slate-50 text-xl">HELP & SERVICE</h2>
        <ul className="my-4">
          <li>
            <a>CONTACT</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>MY ACCOUNT</a>
          </li>
          <li>
            <a>PUBLISHER</a>
          </li>
        </ul>
      </section>
      <section className="col-span-3 mt-4">
        <h2 className="text-slate-50 text-xl">INFORMATION</h2>
        <ul className="my-4">
          <li>
            <a>CUSTOMER INFORMATION</a>
          </li>
          <li>
            <a>PRIVACY POLICY</a>
          </li>
          <li>
            <a>PAYMENT METHOD</a>
          </li>
          <li>
            <a>PROTECTION</a>
          </li>
        </ul>
      </section>
      <section className="col-span-3 mt-4">
        <h2 className="text-slate-50 text-xl">MOVIEPRIDE</h2>
        <ul className="my-4">
          <li>
            <a>IMPRINT</a>
          </li>
          <li>
            <a>JOBS</a>
          </li>
          <li>
            <a>ABOUT US</a>
          </li>
          <li>
            <a>REVIEWS</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
