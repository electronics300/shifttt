import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
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
  motorcycle: z.string().min(1, "Please select your motorcycle"),
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
      motorcycle: "",
      consent: false,
    },
  });

  const waitlistMutation = useMutation({
    mutationFn: async (data: WaitlistFormValues) => {
      return await apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "There was an error submitting your information. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: WaitlistFormValues) => {
    waitlistMutation.mutate(data);
  };

  const motorcycles = [
    { value: "honda", label: "Honda" },
    { value: "yamaha", label: "Yamaha" },
    { value: "kawasaki", label: "Kawasaki" },
    { value: "suzuki", label: "Suzuki" },
    { value: "ducati", label: "Ducati" },
    { value: "bmw", label: "BMW" },
    { value: "aprilia", label: "Aprilia" },
    { value: "other", label: "Other" },
  ];

  return (
    <section id="waitlist" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1594032194509-0056023973b2?auto=format&q=80"
          alt="Racing motorcycle on track"
          className="w-full h-full object-cover opacity-10"
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-xl text-gray-400 mb-10">
            Be the first to know when QUICKSHIFT PRO becomes available. Limited units will be released in our initial production run.
          </p>

          <motion.div
            className="bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-black/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto rounded-full bg-white/20 w-20 h-20 flex items-center justify-center mb-4">
                  <Check className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-400">
                  You've been added to our waitlist. We'll notify you when QUICKSHIFT PRO becomes available.
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
                          <FormLabel className="text-sm font-medium text-black">First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your first name"
                              className="bg-black/70 backdrop-blur-sm border-black/20 text-white focus:border-white/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-black">Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your last name"
                              className="bg-black/70 backdrop-blur-sm border-black/20 text-white focus:border-white/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-black">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="bg-black/70 backdrop-blur-sm border-black/20 text-white focus:border-white/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="motorcycle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-black">Motorcycle Model</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/70 backdrop-blur-sm border-black/20 text-white focus:border-white/50">
                              <SelectValue placeholder="Select your motorcycle" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black/90 backdrop-blur-md border-black/20 text-white">
                            {motorcycles.map((motorcycle) => (
                              <SelectItem key={motorcycle.value} value={motorcycle.value}>
                                {motorcycle.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-white data-[state=checked]:text-black"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-black">
                            I agree to receive product updates and news about QUICKSHIFT PRO. You can unsubscribe at any time.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-white/90"
                    disabled={waitlistMutation.isPending}
                  >
                    {waitlistMutation.isPending ? "Submitting..." : "Join the Waitlist"}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>

          <p className="mt-6 text-sm text-white/70">
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
