import type { Certificate } from "../../data/certificates";

type CertificateModalProps = {
  certificate: Certificate | null;
  onClose: () => void;
};

const CertificateModal = ({ certificate, onClose }: CertificateModalProps) => {
  if (!certificate) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-[#17111F]/80
        p-6
        backdrop-blur-md
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-5xl
          overflow-auto
          rounded-[32px]
          border-4
          border-[#17111F]
          bg-[#FFF8F3]
          p-6
          shadow-[12px_12px_0px_#FF4FD8]
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* ================= CLOSE BUTTON ================= */}

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border-2
            border-[#17111F]
            bg-[#FFD44D]
            text-xl
            font-black
            shadow-[4px_4px_0px_#17111F]
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-[5px_5px_0px_#17111F]
          "
        >
          ×
        </button>

        {/* ================= IMAGE ================= */}

        <img
          src={certificate.image}
          alt={certificate.title}
          className="
            w-full
            rounded-2xl
            border-2
            border-[#17111F]
          "
        />

        {/* ================= INFO ================= */}

        <div className="mt-6">
          <p
            className="
              text-sm
              font-black
              uppercase
              tracking-[0.15em]
              text-[#FF4FD8]
            "
          >
            {certificate.issuer}
          </p>

          <h3
            className="
              mt-2
              text-4xl
              font-black
              uppercase
              tracking-[-0.04em]
            "
          >
            {certificate.title}
          </h3>

          <p
            className="
              mt-2
              font-bold
              text-[#17111F]/50
            "
          >
            {certificate.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
