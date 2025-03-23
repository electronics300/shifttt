import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Check, Bike, Zap, Shield, Clock } from "lucide-react";
import { GOOGLE_FORM_CONFIG } from "@/config";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const waitlistSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  motorcycleBrand: z.string().min(1, "Please select your motorcycle brand"),
  motorcycleModel: z.string().min(2, "Please enter your motorcycle model"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export function WaitlistSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      motorcycleBrand: "",
      motorcycleModel: "",
      consent: false,
    },
  });

  const waitlistMutation = useMutation({
    mutationFn: async (data: WaitlistFormValues) => {
      console.log('Submitting form data:', data);
      
      const formData = new FormData();
      formData.append(GOOGLE_FORM_CONFIG.formFields.firstName, data.firstName);
      formData.append(GOOGLE_FORM_CONFIG.formFields.lastName, data.lastName);
      formData.append(GOOGLE_FORM_CONFIG.formFields.email, data.email);
      formData.append(GOOGLE_FORM_CONFIG.formFields.motorcycleBrand, data.motorcycleBrand);
      formData.append(GOOGLE_FORM_CONFIG.formFields.motorcycleModel, data.motorcycleModel);
      formData.append(GOOGLE_FORM_CONFIG.formFields.consent, data.consent ? "Yes" : "No");

      try {
        const response = await fetch(
          `https://docs.google.com/forms/d/e/${GOOGLE_FORM_CONFIG.formId}/formResponse`,
          {
            method: "POST",
            body: formData,
            mode: "no-cors",
          }
        );

        console.log('Form submission completed');
        return response;
      } catch (error) {
        console.error('Form submission error:', error);
        throw error;
      }
    },
    onSuccess: () => {
      console.log('Mutation succeeded');
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
    },
    onError: (error) => {
      console.error('Mutation error:', error);
      toast({
        title: "Something went wrong",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: WaitlistFormValues) => {
    console.log('Form submitted:', data);
    waitlistMutation.mutate(data);
  };

  const motorcycles = [
    { value: "bajaj", label: "Bajaj" },
    { value: "honda", label: "Honda" },
    { value: "yamaha", label: "Yamaha" },
    { value: "royalenfield", label: "Royal Enfield" },
    { value: "tvs", label: "Tvs" },
    { value: "kawasaki", label: "Kawasaki" },
    { value: "suzuki", label: "Suzuki" },
    { value: "bmw", label: "BMW" },
    { value: "aprilia", label: "Aprilia" },
    { value: "other", label: "Other" },
  ];

  return (
    <section id="waitlist" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&q=80"
          alt="Racing motorcycle on track"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            
            <h2 className="text-3xl md:text-5xl font-bold text-white">Join the Waitlist</h2>
          </div>
          <p className="text-xl text-gray-300 mb-10">
            Be the first to experience the future of motorcycle shifting. Limited units will be released in our initial production run.
          </p>

          <motion.div
            className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-zinc-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto rounded-full bg-zinc-800 w-20 h-20 flex items-center justify-center mb-4">
                  <Check className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Thank You!</h3>
                <p className="text-gray-300">
                  You've been added to our waitlist. We'll notify you when Terramog Raptor becomes available.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-300">First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your first name"
                              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400 focus:border-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-300">Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your last name"
                              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400 focus:border-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400 focus:border-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="motorcycleBrand"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-300">Motorcycle Brand</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white focus:border-white">
                                <SelectValue placeholder="Select brand" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-zinc-900 border-zinc-700 text-white">
                              {motorcycles.map((motorcycle) => (
                                <SelectItem key={motorcycle.value} value={motorcycle.value}>
                                  {motorcycle.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="motorcycleModel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-300">Motorcycle Model</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., RS200"
                              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400 focus:border-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-zinc-700 data-[state=checked]:bg-white data-[state=checked]:border-white"
                          />
                        </FormControl>
                        <div className="flex-1">
                          <FormLabel className="text-sm text-gray-300 cursor-pointer">
                            I agree to receive updates about QUICKSHIFT PRO and agree to the{" "}
                            <a href="/privacy" className="text-white hover:underline">
                              Privacy Policy
                            </a>
                            .
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-zinc-900 text-white hover:bg-gray-900 font-medium py-6"
                      disabled={waitlistMutation.isPending}
                    >
                      {waitlistMutation.isPending ? "Submitting..." : "Join Waitlist"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 bg-zinc-900 border-black text-white hover:bg-white/10 font-medium py-6"
                      onClick={() => window.open('https://example.com', '_blank')}
                    >
                      Take a Servey
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
