import React from 'react'
import Title from './Title'

const Contact = () => {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0f47b09b-8114-4120-9d36-60c74f39990c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your Message has been Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='pt-15'>
      <Title Title={'Contact Me'} Desc={'Let’s Build Something Amazing'}/>
      <div className='px-[10%]'>
        <form onSubmit={onSubmit} className='grid grid-cols-2 py-2.5 gap-2.5 w-full sm:w-1/2 mx-auto'>
            <div className='flex flex-col'>
                <label className='text-gray-400' htmlFor="name">Full Name</label>
                <input required className='border border-gray-700 outline-0 bg-gray-800 rounded-lg text-white text-sm p-2.5' type="text" id='name' name='name' placeholder='Your name here...' />
            </div>
             <div className='flex flex-col'>
                <label className='text-gray-400' htmlFor="email">Email</label>
                <input required className='border border-gray-700 outline-0 bg-gray-800 rounded-lg text-white text-sm p-2.5' type="email" id='email' name='email' placeholder='Your name here...' />
            </div>
            <div className='col-span-2 w-full flex flex-col'>
                <label className='text-gray-400' htmlFor="message">Message</label>
                <textarea required className='h-40 flex flex-col border outline-0 border-gray-700 bg-gray-800 rounded-lg text-white text-sm p-2.5' name="message" id="message" placeholder='Your message here...'></textarea>
            </div>
            <span>{result}</span>
            <button className='col-span-2 flex h-10 justify-center items-center w-full bg-linear-90 from-35% from-purple-600 to-blue-600 rounded-3xl hover:from-blue-600 hover:to-purple-600 transform transition-colors text-sm'>Send Message</button>  
        </form>
      </div>
    </div>
  )
}

export default Contact
