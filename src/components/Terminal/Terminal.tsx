import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import { Modal } from "@components";
import "./Terminal.scss";

const Terminal: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <Modal
      title={t("modal.aboutme")}
      defaultOpen
      triggerImg="src/assets/icons/prompt.png"
    >
      <div className="terminal-content">
        <Suspense fallback="">
          <TypeAnimation
            key={i18n.language}
            sequence={[t("terminal.desc"), 1000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={80}
            style={{
              whiteSpace: "pre-line",
              display: "inline-block"
            }}
          />
        </Suspense>
      </div>
    </Modal>
  );
};

export default Terminal;
