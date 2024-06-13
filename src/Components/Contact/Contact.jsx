import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

function Contact() {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "fc07424a-bc7d-4d2f-9e84-1f657c6c9322");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt=""/></h3>
            <p>Feel free to reach out through contact from or find our contact
                information below. your feedback,questions,and suddestions are important
                to us as we strive to provide exceptional service to our 
                university community.
            </p>
            <ul>
                <li><img src={mail_icon} alt=''/>mannetarunasri@gmail.com</li>
                <li> <img src={phone_icon} alt=''/>+91 630-518-5251   </li>
                <li><img src={location_icon} alt=''/>1-100/3 ,kismathpur,Hyderabad<br/>India </li>
            </ul>

        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label> Your name</label>
                <input type='text' name='name' placeholder='enter your name' required/>
                <label> Phone number</label>
                <input type='tel' name='phone' placeholder='enter your mobile number' required/>
                <label> write your message here</label>
                <textarea name='message'  rows="6" placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow}/></button>
            </form>
            <span>{result}</span>
            
        </div>

    </div>
  )
}

export default Contact