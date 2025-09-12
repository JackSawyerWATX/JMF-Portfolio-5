import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility once the component mounts
    const timer = setTimeout(() => setIsVisible(true), 100); // Slight delay for smoothness
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "I have recieved your message and will reply to you soon.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto max-w-5xl flex flex-col items-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center  ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
          <span className="text-shadow-lg/560">
            Contact
          </span>{" "}
          <span className="text-primary">
            Me
          </span>
        </h2>

        <p className="text-center text-lg/6 text-shadow-lg/560 mb-12 max-w-2xl mx-auto">
          I am always open to new opportunities and challenges. If you have any
          questions or just want to say hi, feel free to reach out to me. I
          will get back to you as soon as possible.
        </p>

        <div className="w-full flex justify-center">
          <div className="space-y-8 w-full md:w-1/2">
            <div className="bg-blend-overlay p-8 rounded-lg shadow-xs">
              <h3 className={`text-2xl md:text-2xl font-bold mb-12 text-center  ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
                <span className="text-shadow-lg/560">
                  Send
                </span>{" "}
                <span className="text-primary">
                  Me
                </span>{" "}
                <span className="text-shadow-lg/560">
                  A Message
                </span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your Message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2 text-shadow-lg/560",
                    isSubmitting && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};