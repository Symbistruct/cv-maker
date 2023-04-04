import InfoSection from "./InfoSection/InfoSection";
import ContentSection from "./ContentSection/ContentSection";
import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";

export default function CV() {
  const ref = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>Print out</button>
      <div
        ref={ref}
        className={`bg-[#f2f2f2] h-[55.88cm] w-[21.6cm] flex flex-row`}
      >
        <InfoSection
          education={[
            {
              schoolName: "TE, Knut Hahnsskolan",
              date: { from: "2020", to: "2023" },
            },
          ]}
          references={[
            {
              name: "Jessica Viklund",
              jobTitle: "Product Owner",
              companyName: "IKEA",
              teleNo: "unknown",
            },
            {
              name: "Emric Månsson",
              jobTitle: "Ägare",
              companyName: "Symbistruct",
              teleNo: "+46 73 326 96 82",
            },
            {
              name: "Emil Holgersson (Fråga Emil)",
              jobTitle: "Ägare",
              companyName: "SKFM Syd",
              teleNo: "unknown",
            },
          ]}
          contactInfo={{
            teleNo: "+46 79 347 17 10",
            email: "privat.melvin.wahlberg@gmail.com",
            linkedIn: "Melvin Wahlberg",
            website: "melvinwahlberg.com",
            address: "Ronneby, Sverige",
          }}
        />
        <ContentSection />
      </div>
    </div>
  );
}
