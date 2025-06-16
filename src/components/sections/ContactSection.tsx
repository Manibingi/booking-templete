import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Message sent successfully! We'll get back to you soon.");
      reset(); // Reset form after successful submission
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Let's discuss how we can transform your business with our proven
              strategies and cutting-edge solutions.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-6">
                  <Phone className="w-6 h-6 textcolor1" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <span className="opacity-90">+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-6">
                  <Mail className="w-6 h-6 textcolor1" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <span className="opacity-90">hello@yourbrand.com</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-6">
                  <MapPin className="w-6 h-6 textcolor1" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <span className="opacity-90">
                    123 Business Street, City, State 12345
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input
                    {...register("firstName")}
                    type="text"
                    placeholder="First Name"
                    className={`w-full px-6 py-4 rounded-xl bg-white/20 border ${
                      errors.firstName ? "border-red-500" : "border-white/30"
                    } placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300`}
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <input
                    {...register("lastName")}
                    type="text"
                    placeholder="Last Name"
                    className={`w-full px-6 py-4 rounded-xl bg-white/20 border ${
                      errors.lastName ? "border-red-500" : "border-white/30"
                    } placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300`}
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                  className={`w-full px-6 py-4 rounded-xl bg-white/20 border ${
                    errors.email ? "border-red-500" : "border-white/30"
                  } placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <textarea
                  {...register("message")}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className={`w-full px-6 py-4 rounded-xl bg-white/20 border ${
                    errors.message ? "border-red-500" : "border-white/30"
                  } placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 resize-none transition-all duration-300`}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                disabled={isSubmitting}
                className="w-full hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
