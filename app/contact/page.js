import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Contact Evespire
        </h1>
        <p className="mt-2 text-slate-600">
          Share your enquiry and we will get back to you shortly.
        </p>

        <form className="mt-8 space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-slate-700"
            >
              Full name
            </label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Jane Doe"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-700"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us how we can help"
              required
            />
          </div>

          <Button type="submit" className="w-full sm:w-auto">
            Send Enquiry
          </Button>
        </form>
      </div>
    </section>
  );
}
