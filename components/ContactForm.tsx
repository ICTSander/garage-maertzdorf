"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setFormState("error");
      setErrors({
        global:
          "Formulier endpoint ontbreekt. Controleer de configuratie van de website."
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const values = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    const newErrors: Record<string, string> = {};

    if (!values.name) newErrors.name = "Vul uw naam in.";
    if (!values.email) {
      newErrors.email = "Vul uw e-mailadres in.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      newErrors.email = "Dit lijkt geen geldig e-mailadres.";
    }
    if (!values.phone) newErrors.phone = "Vul uw telefoonnummer in.";
    if (!values.service) newErrors.service = "Kies een dienst.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      setFormState("submitting");

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...values,
          _subject: `Nieuwe aanvraag via website – ${values.service}`,
          _formName: "Autobedrijf Maertzdorf contactformulier"
        })
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFormState("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setFormState("error");
    }
  };

  const isSubmitting = formState === "submitting";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 sm:p-8">
      <h2 className="text-lg font-semibold text-slate-900">
        Neem contact op
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        Heeft u een vraag of wilt u een afspraak maken? Vul het formulier in en
        wij nemen zo snel mogelijk contact met u op.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        {errors.global && (
          <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
            {errors.global}
          </p>
        )}

        {formState === "success" && (
          <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
            Bedankt voor uw bericht! Wij nemen zo snel mogelijk contact met u op.
          </p>
        )}

        {formState === "error" && !errors.global && (
          <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
            Er ging iets mis. Probeer het opnieuw of bel ons.
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Naam *
            </label>
            <input
              name="name"
              type="text"
              className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-primary-100 focus:bg-white focus:ring-2"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Telefoon *
            </label>
            <input
              name="phone"
              type="tel"
              className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-primary-100 focus:bg-white focus:ring-2"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700">
            E-mail *
          </label>
          <input
            name="email"
            type="email"
            className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-primary-100 focus:bg-white focus:ring-2"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700">
            Waar kunnen wij u mee helpen? *
          </label>
          <select
            name="service"
            className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-primary-100 focus:bg-white focus:ring-2"
            disabled={isSubmitting}
            defaultValue=""
          >
            <option value="" disabled>
              Kies een dienst
            </option>
            <option value="APK-keuring">APK-keuring</option>
            <option value="Onderhoud">Onderhoud &amp; service</option>
            <option value="Reparatie">Reparatie</option>
            <option value="Spuitwerk">Spuitwerk</option>
            <option value="Schadeherstel">Schadeherstel</option>
            <option value="Overig">Overig</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-600">{errors.service}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700">
            Uw bericht
          </label>
          <textarea
            name="message"
            rows={4}
            className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-primary-100 focus:bg-white focus:ring-2"
            placeholder="Beschrijf kort waarmee wij u kunnen helpen."
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/30 transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-primary-400"
        >
          {isSubmitting ? "Verzenden..." : "Bericht versturen"}
        </button>

        <p className="text-[11px] text-slate-500">
          Door dit formulier te versturen gaat u akkoord met onze{" "}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary-600"
          >
            privacyverklaring
          </a>
          .
        </p>
      </form>
    </div>
  );
}
