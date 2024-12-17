import React from 'react';


export default function Contact() {
    return (
        <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
        <h1 className="text-6xl font-bold italic underline text-[#0A937C]">
        Contact ME,
      </h1>
      
            <p className='text-red-900 text-[18px] pt-2' data-aos="fade-down-left">
                Drop me a line, give me a cakk, aor send ma a message ny submitting foam
            </p>
            <div className='flex gap-3 items-center' data-aos="fade-down-left">
             mushk@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="fade-down-left">
             0300-0000000
            </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1' data-aos="fade-down-left">
            <label htmlFor="name">Name</label>
            <input type="text" 
            className='h-[40px] bg-transparent border border-accent'
            id='name'/>
          </div>
          <div className='flex flex-col gap-1' data-aos="fade-down-left">
            <label htmlFor="email">Email</label>
            <input type="text" 
            className='h-[40px] bg-transparent border border-accent'
            id='email'/>
          </div>
          <div className='flex flex-col gap-1' data-aos="fade-down-left">
            <label htmlFor="msg">Message</label>
            <textarea 
            className='bg-transparent border border-accent'
            id='msg' rows={8}>
              </textarea>
          </div>
          <button className='bg-yellow-300 p-2 px-6' data-aos="fade-down-left">Send</button>
        </div>
      </div>
    </div>
    )
}