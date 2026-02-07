import "./App.css";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>

      {/* FULL SCREEN POSTCARD */}
      <section className="hero">

        <div className="hero-inner">

          <div className="left">
            <h1>POST CARD</h1>

            <p>To: My Mello❤️</p>
            <p>From: BooBoo</p>

            <h2>Happy Valentine’s Day</h2>

            <button onClick={() => setOpen(true)}>Open Letter 💌</button>
          </div>

          <div className="right">
            <p>
              I love you so much,
              wanna be my valentine?
            </p>
          </div>

        </div>

      </section>


      <section className="section split">

      <section className="section white">

      <h2 className="title">Reasons I Love You</h2>
      <p className="subtitle">Everything about you ❤️</p>

      <ol className="reasons">
        <li>Your eyes</li>
        <li>Your cheekssss</li>
        <li>Your other cheeks (ykwim)</li>
        <li>Your smile</li>
        <li>You’re funny</li>
        <li>You’re cute</li>
        <li>You’re hot</li>
        <li>Your hugs</li>
        <li>Your touch</li>
      </ol>

      </section>


      {/* NEW MEMORIES SECTION */}
      <section className="section memories">

      <h2 className="title">Memories 📸</h2>

      <div className="memory-grid">
        <img src="/mello1.jpg" />
        <img src="/mello2.jpg" />
        <img src="/mello3.jpeg" />
        <img src="/mello4.jpeg" />
      </div>

      </section>
    </section>





      {open && (
        <div className="modal" onClick={() => setOpen(false)}>
          <div className="letter" onClick={(e) => e.stopPropagation()}>
            Hiiiii Baby,
            You're so special to me and I love you so much! <br></br>
            I hope I can make you feel just as special one day :) <br></br>
            Youre the sweetest, I miss you my mello 🎀 <br></br>

          </div>
        </div>
      )}

    </div>
  );
}
