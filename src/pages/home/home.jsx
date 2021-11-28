import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import "./home.scss"
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__block">
        <div className="home__sidebar">
          <Sidebar/>
        </div>
        <div className="home__conatiner">sdfsd</div>
      </div>
    </div>
  )
}
export default Home;