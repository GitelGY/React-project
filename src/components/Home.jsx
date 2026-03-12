
const Home=()=>{
const img="backgrund_C.jpg"
return<>
    <div className="home">
      <h1>Welcome to our Website!</h1>
      
      <video
        width="640"
        height="360"
        controls
        style={{ borderRadius: '12px', marginTop: '20px' }}
      >
        <source src="./images/video.mp4" type="video/mp4" />
        הדפדפן שלך לא תומך בתצוגת וידאו.
      </video>
    </div>
</>
}
export default Home;
