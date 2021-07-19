import React, { useState } from 'react';
import '../css/successpage.css';
import { Button, Modal } from 'react-bootstrap';

const EMOTIONS = [
  {
    feeling: "excited",
    emoji: "fa-grin-wink",
    caption: "Excites",
    detail: "Glad you are excited about learning new technology everyday! Keep up the energy and this hackathon will be a breeze!"
  },
  {
    feeling: "amazes",
    emoji: "fa-grin-stars",
    caption: "Amazedballz",
    detail: "Did you have an amazing time learning all those cool react concept? I'm glad you like it! I hope you will be able to practise these knowledge soon!"
  },
  {
    feeling: "bored",
    emoji: "fa-meh",
    caption: "Boooored",
    detail: "Awhs, sorry for torturing you for the last 3 hours. Here's a cat video to brighten up your day -> <a href=\"https://youtu.be/dQw4w9WgXcQ\" target=\"_blank\">https://youtu.be/dQw4w9WgXcQ</a>"
  },
  {
    feeling: "confused",
    emoji: "fa-dizzy",
    caption: "Confusions",
    detail: "Wait! What! Where! Why? Drop me an <a href=\"mailto:kenhua.l@gmail.com\">email</a> if you still need help! Or find me at <a href=\"https://discord.com/users/kenfunny#1255\" target=\"_blank\">Discord!</a>"
  },
  {
    feeling: "overwhelmed",
    emoji: "fa-sad-cry",
    caption: "Overwhelmed",
    detail: "Yea, I understand! I was overwhelmed too when I first started learning all these Javascript frameworks for years. 3 hours for you will be worse! But as they say, practice makes perfect!"
  },
  {
    feeling: "sleepy",
    emoji: "fa-tired",
    caption: "Sleepyyyyz",
    detail: "YES! Finally, you are now able to go rest after such a long day here! Rest well, you will need all the energy during the final hours crush."
  },
  {
    feeling: "angry",
    emoji: "fa-angry",
    caption: "Angryyyy",
    detail: "Oh noes. Are you feeling angry and/or stressed? Sorry for the torture. It's ok, go get some rest, come back tomorrow with clearer focus."
  }
]

function SuccessPage() {
  const [show, setShow] = useState(false);
  const [emote, setEmote] = useState(EMOTIONS[0]);
  const handleClose = () => setShow(false);
  const handleShow = (feeling) => {
    let thisEmote = EMOTIONS.find((emotion) => {
      return emotion.feeling === feeling;
    });
    setEmote(thisEmote);
    setShow(true);
  };

  function renderButtons() {
    var emojis = EMOTIONS.map((emoji) => {
      return (
        <li>
          <button 
            data-bs-toggle="modal" 
            data-bs-target={'#' + emoji.feeling}
            onClick={() => handleShow(emoji.feeling)}
          >
            <span className={'far ' + emoji.emoji}></span>
            <span>{emoji.caption}</span>
          </button>
        </li>
      );
    });
    return emojis;
  }

  var emojis = renderButtons();
  return (
    <section>
      <div className="container">
        <h1 className="text-success mb-3">This Tutorial is Done!</h1>
        <p className="focusMe">Please let us know how we have done and how we can improve by filling in this <a href="https://forms.gle/rWQ3zfPAJXUHYnHJA" target="_blank" rel="noreferrer">survey!</a> 😜 </p>
        <p>How are you feeling?</p>
        <ul className="emotions">
          {emojis}
        </ul>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="text-center">
          <div className="mb-3">
            <span className={'far ' + emote.emoji}></span>
          </div>
          <p dangerouslySetInnerHTML={{ __html: emote.detail }}/>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default SuccessPage;