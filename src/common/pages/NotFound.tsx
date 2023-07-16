import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const NotFound = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3"><span className="text-danger">{t("pages.notFound.oops")}</span> {t("pages.notFound.notFoundMsg")}.</p>
        <p className="lead">
          {t("pages.notFound.msg")}.
        </p>
        <a onClick={() => navigate("/")} className="btn btn-primary">{t("pages.notFound.goHome")}</a>
      </div>
    </div>
  )
}