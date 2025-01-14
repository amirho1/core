import { IconButton, IconButtonProps } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ToggleLang({ ...props }: IconButtonProps) {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fa" : "en");
  };

  return (
    <IconButton onClick={toggleLang} {...props}>
      {i18n.language === "en" ? "Fa" : "En"}
    </IconButton>
  );
}
