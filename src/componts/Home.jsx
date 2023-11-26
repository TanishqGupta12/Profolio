import { React } from "react";
import Button from '@mui/material/Button';
// import { Swiper, SwiperSlide } from "swiper/react";
let ButtonStyle = {
  font: '400 1vmax Roboto',
  color: "aliceblue",
  fontSize: "15px",
  width: "8vw",

}
let GitHub = {
  font: '400 1vmax Roboto',
  color: "aliceblue",
  fontSize: "15px",
  width: "8vw",
}
let LinKedln = {
  font: '350 1vmax Roboto',
  color: "aliceblue",
  fontSize: "15px",
  width: "8vw",
}
const Home = () => {
  const ButtonGitHub = ()=>{
    try {
      window.open("https://github.com/TanishqGupta12")
      
    } catch (error) {
      alert(error)
    }
  }
  const ButtonLinKedln = ()=>{
    try {
      window.open("https://www.linkedin.com/in/tanishq-gupta-723b91200")
      
    } catch (error) {
      alert(error)
    }
  }
  const ButtonCV = ()=>{
    try {
      
      window.open("https://drive.google.com/file/d/1kI4DJiMmL6qzlTiQFEvVucjn2vN2Wr-r/view?usp=sharing")

    } catch (error) {
      alert(error)
    }
  }

  return (
    <section class="home" id="home">
       {/* <Swiper className="mySwiper">
        <SwiperSlide><img src={image} alt="image" /></SwiperSlide>
        </Swiper> */}
      <div class="max-width">
        <div class="home-content">
          <div class="text-1">Hello , My Name is</div>
          <div class="text-2">Tanishq Gupta</div>
          <div class="text-3">And I'm ,<span>a Student</span> </div>
          <div class="text-4">From Lucknow Public College of Professional Studies </div>
        </div>
        <div className="icons">
          <div className="logosicons-1">
            <Button style={ButtonStyle} onClick={ButtonCV}>CV</Button>
          </div>
          <div className="logosicons-2">
          <Button style={GitHub} onClick={ButtonGitHub} >GitHub</Button>
          </div>
          <div className="logosicons-2">
          <Button style={LinKedln}  onClick={ButtonLinKedln}>LinKedln</Button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Home