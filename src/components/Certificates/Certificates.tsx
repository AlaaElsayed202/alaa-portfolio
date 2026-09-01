import { useState } from "react";
import { certificates } from "../../data/certificates";
import CertificateModal from "./CertificateModal";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certificates)[number] | null
  >(null);

  // Frontend certificates only
  const frontendCertificates = certificates.filter(
    (certificate) => certificate.title === "Frontend Development"
  );

  return (
    <section
      id="certificates"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#FFD44D]
        px-6
        py-32
      "
    >
      {/* ================= BACKGROUND DECORATIONS ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-40
          h-72
          w-72
          rounded-full
          border-[6px]
          border-[#17111F]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          bottom-32
          h-80
          w-80
          rounded-full
          border-[6px]
          border-[#17111F]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[20%]
          h-20
          w-20
          rotate-12
          border-4
          border-[#17111F]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[15%]
          top-[55%]
          h-16
          w-16
          rotate-45
          rounded-full
          border-4
          border-[#17111F]/10
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="text-center">

          <span
            className="
              inline-block
              rotate-[-3deg]
              rounded-full
              border-4
              border-[#17111F]
              bg-[#FF4FD8]
              px-5
              py-2
              font-black
              shadow-[5px_5px_0px_#17111F]
            "
          >
            🏆 MY ACHIEVEMENTS
          </span>

          <h2
            className="
              mt-8
              text-6xl
              font-black
              uppercase
              leading-[0.85]
              tracking-[-0.06em]
              md:text-9xl
            "
          >
            WELCOME TO
            <br />

            <span className="text-[#7C5CFF]">
              THE TROPHY
            </span>

            <br />

            ROOM.
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-xl
              text-lg
              font-bold
              leading-relaxed
              text-[#17111F]/70
            "
          >
            A little collection of things I learned,
            built and survived. 😭✨
          </p>

        </div>

        {/* ================= CERTIFICATES ================= */}

        <div className="relative mt-24">

          {/* Sticker */}

          <div
            className="
              absolute
              -left-2
              -top-10
              hidden
              rotate-[-8deg]
              rounded-full
              border-2
              border-[#17111F]
              bg-[#FFF8F3]
              px-5
              py-2
              font-black
              shadow-[4px_4px_0px_#17111F]
              md:block
            "
          >
            LOOK WHAT I MADE! 👀
          </div>

          {/* ================= TWO CARDS ================= */}

          <div
            className="
              mx-auto
              grid
              max-w-5xl
              gap-14
              md:grid-cols-2
            "
          >
            {frontendCertificates.slice(0, 2).map(
              (certificate, index) => {

                const is2025 = certificate.date === "2025";

                return (
                  <article
                    key={certificate.id}
                    className="
                      certificate-card
                      group
                      relative
                      cursor-pointer
                      transition-transform
                      duration-500
                      hover:z-20
                    "
                    style={{
                      transform: `rotate(${
                        index % 2 === 0 ? "-2deg" : "2deg"
                      })`,
                    }}
                    onClick={() =>
                      setSelectedCertificate(certificate)
                    }
                  >

                    {/* ================= CARD ================= */}

                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[30px]
                        border-4
                        border-[#17111F]
                        bg-[#FFF8F3]
                        p-4
                        shadow-[10px_10px_0px_#17111F]
                        transition-all
                        duration-500
                        group-hover:-translate-y-4
                        group-hover:rotate-[-2deg]
                        group-hover:shadow-[15px_18px_0px_#17111F]
                      "
                    >

                      {/* ================= CERTIFICATE IMAGE ================= */}

                      <div
                        className={`
                          relative
                          overflow-hidden
                          rounded-2xl
                          border-2
                          border-[#17111F]
                          ${is2025 ? "bg-[#17111F] p-3" : ""}
                        `}
                      >

                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="
                            aspect-[4/3]
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                        />

                        {/* 2025 SPECIAL FRAME */}

                        {is2025 && (
                          <div
                            className="
                              pointer-events-none
                              absolute
                              inset-2
                              rounded-xl
                              border-4
                              border-[#FFD44D]
                            "
                          />
                        )}

                      </div>

                      {/* ================= CLICK STICKER ================= */}

                      <div
                        className="
                          absolute
                          right-6
                          top-6
                          rounded-full
                          border-2
                          border-[#17111F]
                          bg-[#AAF35E]
                          px-4
                          py-2
                          text-xs
                          font-black
                          uppercase
                          opacity-0
                          rotate-12
                          shadow-[3px_3px_0px_#17111F]
                          transition-all
                          duration-300
                          group-hover:opacity-100
                          group-hover:rotate-6
                        "
                      >
                        CLICK! 👆
                      </div>

                      {/* ================= CARD INFO ================= */}

                      <div className="px-2 pb-2 pt-6">

                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-4
                          "
                        >

                          {/* Issuer */}

                          <span
                            className="
                              rounded-full
                              border-2
                              border-[#17111F]
                              bg-[#FF4FD8]
                              px-3
                              py-1
                              text-xs
                              font-black
                              uppercase
                              shadow-[2px_2px_0px_#17111F]
                            "
                          >
                            {certificate.issuer}
                          </span>

                          {/* Date */}

                          <span
                            className="
                              shrink-0
                              rounded-full
                              border-2
                              border-[#17111F]
                              bg-[#FFD44D]
                              px-3
                              py-1
                              text-xs
                              font-black
                              shadow-[2px_2px_0px_#17111F]
                            "
                          >
                            {certificate.date}
                          </span>

                        </div>

                        {/* Title */}

                        <h3
                          className="
                            mt-5
                            text-3xl
                            font-black
                            uppercase
                            leading-tight
                            tracking-[-0.04em]
                            md:text-4xl
                          "
                        >
                          {certificate.title}
                        </h3>

                      </div>

                    </div>

                  </article>
                );
              }
            )}
          </div>

          {/* ================= BOTTOM MESSAGE ================= */}

          <div
            className="
              mx-auto
              mt-20
              max-w-3xl
              rounded-[2rem]
              border-4
              border-[#17111F]
              bg-[#17111F]
              px-7
              py-6
              text-center
              shadow-[8px_8px_0px_#FF4FD8]
            "
          >
            <p
              className="
                text-sm
                font-black
                uppercase
                tracking-[0.12em]
                text-white
              "
            >
              Still learning. Still building. Still collecting. 🚀
            </p>
          </div>

        </div>
      </div>

      {/* ================= MODAL ================= */}

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

    </section>
  );
};

export default Certificates;