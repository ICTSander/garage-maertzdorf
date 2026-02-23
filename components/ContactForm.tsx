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
      garageName: String(formData.get("garageName") || "").trim(),
      city: String(formData.get("city") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      website: String(formData.get("website") || "").trim(),
      focus: String(formData.get("focus") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    const newErrors: Record<string, string> = {};

    if (!values.name) newErrors.name = "Vul je naam in.";
    if (!values.garageName) newErrors.garageName = "Vul de naam van je garage in.";
    if (!values.city) newErrors.city = "Vul je plaats in.";
    if (!values.email) {
      newErrors.email = "Vul je e-mailadres in.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      newErrors.email = "Dit lijkt geen geldig e-mailadres.";
    }
    if (!values.phone) newErrors.phone = "Vul je telefoonnummer in.";
    if (!values.focus) newErrors.focus = "Kies waar je meer van wilt.";

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
          _subject: "Nieuwe demo-aanvraag via Garage Leads",
          _formName: "Garage Leads demo formulier"
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
        Vraag een gratis demo aan
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        Vul in waar je als garage meer van wilt, dan sturen we je binnen 24 uur
        een demo-link met voorbeelden en concrete ideeën.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        {errors.global && (
          <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
            {errors.global}
          </p>
        )}

        {formState === "success" && (
          <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
            Bedankt! We sturen je binnen 24 uur een demo-link.
          </p>
        )}

        {formState === "error" && !errors.global && (
          <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
            Hmm, ging iets mis. Probeer opnieuw.
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
              Garage naam *
            </label>
            <input
              name="garageName"
              type="text"
              className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-primary-100 focus:bg-white focus:ring-2"
              disabled={isSubmitting}
            />
            {errors.garageName && (
              <p className="mt-1 text-xs text-red-600">{errors.garageName}</p>
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Plaats *
            </label>
            <input
              name="city"
              type="text"
              className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-primary-100 focus:bg-white focus:ring-2"
              disabled={isSubmitting}
            />
            {errors.city && (
              <p className="mt-1 text-xs text-red-600">{errors.city}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Huidige website url
            </label>
            <input
              name="website"
              type="url"
              placeholder="https://"
              className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-primary-100 focus:bg-white focus:ring-2"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
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
            Waar wil je meer van? *
          </label>
          <select
            name="focus"
            className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-primary-100 focus:bg-white focus:ring-2"
            disabled={isSubmitting}
            defaultValue=""
          >
            <option value="" disabled>
              Kies een optie
            </option>
            <option value="meer afspraken">Meer afspraken</option>
            <option value="meer apk">Meer apk</option>
            <option value="meer onderhoud">Meer onderhoud</option>
            <option value="algemeen">Algemeen</option>
          </select>
          {errors.focus && (
            <p className="mt-1 text-xs text-red-600">{errors.focus}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700">
            Bericht
          </label>
          <textarea
            name="message"
            rows={4}
            className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-primary-100 focus:bg-white focus:ring-2"
            placeholder="Vertel kort wat voor garage je hebt en waar je nu tegenaan loopt."
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/30 transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-primary-400"
        >
          {isSubmitting ? "Verzenden..." : "Gratis demo aanvragen"}
        </button>

        <p className="text-[11px] text-slate-500">
          Door dit formulier te versturen ga je akkoord met onze{" "}
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

