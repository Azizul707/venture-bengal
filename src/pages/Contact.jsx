
const Contact = () => {
    return (
        <div className="max-w-screen-xl mx-auto h-screen">
             <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-8">Feel free to reach out to us for any inquiries or assistance.</p>

            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                    <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-2" />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
                    <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-2" />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md p-2"></textarea>
                </div>

                <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
       </div>
    );
};

export default Contact;