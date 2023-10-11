import "./style.scss"
import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
const PageNotFound = () => {
  return (
    <div>
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  )
}

export default PageNotFound