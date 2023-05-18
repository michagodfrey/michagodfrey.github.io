import React from 'react';
import { BsSend } from 'react-icons/bs'

const Contact = () => {
  return (
    <div name="contact" className="h-screen">
        <div className="max-w-screen-xl flex flex-col justify-center items-center px-8 lg:px-24 mx-auto h-full w-full">
            <form method="POST" action="https://getform.io/f/7c1a6ab1-0cd7-42d3-8bf0-d9dc5f85fab6" className="flex flex-col max-w-[600px] w-full">
              <div className="pb-8">
                  <h2 className="text-4xl inline border-b-4 border-emerald-600">Contact</h2>
                  <p className="pt-6">Submit the form below or shoot me an email at - <a href="mailto:mail@michael-godfrey.com" className="underline">mail@michael-godfrey.com</a></p>
              </div>
              <input required type="text" placeholder="Name" name="name" className="my-2 px-4 py-4 bg-[#ccd6f6] rounded-lg text-slate-800" />
              <input required type="email" placeholder="Email" name="email" className="my-2 px-4 py-4 bg-[#ccd6f6] rounded-lg text-slate-800" />
              <textarea required placeholder="Message..." name="message" rows="10" className="my-2 px-4 py-4 bg-[#ccd6f6] rounded-lg text-slate-800"></textarea>
              <button className="text-white border-2 rounded-lg group hover:bg-emerald-600 hover:border-emerald-600 my-8 mx-auto px-4 py-3 flex items-center">
                Send
                <span className="ml-3 rotate-45">
                    <BsSend />
                </span>
              </button>
          </form>
        </div>
    </div>
  )
}

export default Contact