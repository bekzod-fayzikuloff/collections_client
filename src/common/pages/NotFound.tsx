import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useContext} from "react";
import {ThemeContext} from "../../shared/contexts/theme";

export const NotFound = () => {
  const {t} = useTranslation()
  const {theme} = useContext(ThemeContext)
  const navigate = useNavigate()
  return (
    <div className={`theme-${theme}`}>
    <div className={`d-flex align-items-center justify-content-center vh-100 not_found__content`}>
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3"><span className="text-danger">{t("pages.notFound.oops")}</span> {t("pages.notFound.notFoundMsg")}.</p>
        <p className="lead">
          {t("pages.notFound.msg")}.
        </p>
        <a onClick={() => navigate("/")} className="btn btn-primary">{t("pages.notFound.goHome")}</a>
      </div>
    </div>
    </div>
  )
}