function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="flex flex-col md:flex-row">
          {/* Left Side - Contact Info */}
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              Feel free to reach out for collaborations, freelance projects, or
              just to connect!
            </p>

            <div className="space-y-6">
              <ContactItem
                icon="fa fa-envelope"
                title="Email"
                info="khanfardeen4661@gmail.com"
              />
              <ContactItem
                icon="fas fa-phone-alt"
                title="Phone"
                info="+91 9068231943"
              />
              <ContactItem
                icon="fas fa-map-marker-alt"
                title="Location"
                info="India"
              />
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  {
                    name: "github",
                    link: "https://github.com/fk2515714-creator",
                  },
                  {
                    name: "linkedin-in",
                    link: "https://www.linkedin.com/in/fardeen-b8aa32385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  },
                  {
                    name: "instagram",
                    link: "https://instagram.com/Fardeen5766",
                  },
                  { name: "facebook", link: "" },
                ]
                  .filter((social) => social.link) // only show if link exists
                  .map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <i className={`fab fa-${social.name} text-xl`}></i>
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2">
            <form className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm space-y-6">
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "subject", label: "Subject", type: "text" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block mb-2 font-medium">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-transparent transition-colors"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-transparent transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-light dark:bg-primary-dark text-black rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, info }) {
  return (
    <div className="flex items-start">
      <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 mr-4">
        <i
          className={`${icon} text-primary-light dark:text-primary-dark text-xl`}
        ></i>
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300">{info}</p>
      </div>
    </div>
  );
}

// Export at the very end
export default Contact;
