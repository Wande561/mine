const Contact = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#3BAEDE]">
      <h1 className="text-3xl font-bold mb-6 text-blue-950">Contact Me</h1>
      <form className="w-full max-w-md bg-[#465396] p-6 rounded-lg shadow-md">
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Name</span>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-indigo-500 focus:outline-none"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Email</span>
          <input
            type="email"
            placeholder="Your Email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-indigo-500 focus:outline-none"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Message</span>
          <textarea
            placeholder="Your Message"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-indigo-500 focus:outline-none"
            rows={4}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-blue-800 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Send Message
        </button>
      </form>
  
      <div className="text-center mt-6">
        <p className="text-gray-600 font-bold">Or reach me at:</p>
        <a href="mailto:youremail@example.com" className="text-indigo-600 underline">
          sbusisiwemawande@gmail.com
        </a>
        <p className="text-gray-600 font-bold leading-loose">+27 79 814 7284 on Whatsapp<br /> Wande Mbatha on Facebook</p>
      </div>
    </div>
  );
  
  export default Contact;
  