import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Eyebrow } from './Eyebrow'
import { useLang } from '@/lib/i18n'
import { CONTACT } from '@/lib/contact'
import { cn } from '@/lib/utils'

const inputClass =
  'bg-paper border-line h-auto rounded-[7px] px-[14px] py-[12px] text-[15px] focus-visible:border-forest focus-visible:ring-0'

const labelClass = 'text-ink mb-2 block font-sans text-[12px] font-semibold'

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  )
}

export function ContactSection() {
  const { t } = useLang()
  const c = t.contact
  const [state, handleSubmit] = useForm(
    import.meta.env.VITE_FORMSPREE_ID as string
  )
  const [submitAttempted, setSubmitAttempted] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitAttempted(true)
    handleSubmit(e)
  }

  const showError = submitAttempted && !state.submitting && !state.succeeded

  return (
    <section id="contact" className="border-line bg-paper-shell border-t">
      <div className="mx-auto max-w-[1200px] px-[22px] py-[64px] min-[720px]:px-[40px] min-[720px]:py-[104px]">
        <div className="max-w-[640px]">
          <Eyebrow tone="brass">{c.eyebrow}</Eyebrow>
          <h2 className="font-display text-ink mt-3 text-[30px] leading-[1.1] font-light tracking-[-0.01em] min-[720px]:text-[46px]">
            {c.heading}
          </h2>
          <p className="text-muted-foreground mt-5 font-sans text-[17px] leading-[1.6] min-[720px]:text-[20px]">
            {c.lead}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-14 min-[720px]:grid-cols-[1.55fr_1fr]">
          {/* Form card / confirmation panel */}
          {state.succeeded ? (
            <div className="bg-card border-line shadow-card flex flex-col justify-center rounded-[14px] border p-10">
              <h3 className="font-display text-ink text-[26px] font-medium">
                {c.successTitle}
              </h3>
              <p className="text-muted-foreground mt-3 font-sans text-[16px] leading-[1.6]">
                {c.successBody}
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="bg-card border-line shadow-card rounded-[14px] border p-10"
            >
              {showError && (
                <div
                  role="alert"
                  className="border-destructive/30 bg-destructive/10 text-destructive mb-6 rounded-[7px] border px-4 py-3 font-sans text-[14px]"
                >
                  {c.errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 min-[720px]:grid-cols-2">
                <Field id="name" label={`${c.fName} *`}>
                  <Input
                    id="name"
                    name="name"
                    placeholder={c.phName}
                    required
                    className={inputClass}
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-destructive mt-1 text-[13px]"
                  />
                </Field>
                <Field id="company" label={c.fCompany}>
                  <Input
                    id="company"
                    name="company"
                    placeholder={c.phCompany}
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field id="interest" label={`${c.fInterest} *`}>
                  <select
                    id="interest"
                    name="interest"
                    required
                    defaultValue=""
                    className={cn(inputClass, 'w-full appearance-none bg-none')}
                  >
                    <option value="" disabled>
                      {c.phInterest}
                    </option>
                    <option value="networks">{t.nav.networks}</option>
                    <option value="advisory">{t.nav.advisory}</option>
                    <option value="software">{t.nav.software}</option>
                  </select>
                </Field>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 min-[720px]:grid-cols-2">
                <Field id="email" label={`${c.fEmail} *`}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={c.phEmail}
                    required
                    className={inputClass}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-destructive mt-1 text-[13px]"
                  />
                </Field>
                <Field id="phone" label={c.fPhone}>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={c.phPhone}
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field id="project" label={c.fProject}>
                  <Textarea
                    id="project"
                    name="project"
                    rows={4}
                    placeholder={c.phProject}
                    className={cn(inputClass, 'min-h-[120px]')}
                  />
                  <ValidationError
                    prefix="Project"
                    field="project"
                    errors={state.errors}
                    className="text-destructive mt-1 text-[13px]"
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-forest text-paper hover:bg-forest-deep mt-6 w-full rounded-[7px] py-3 font-sans text-[15px] font-semibold transition-colors disabled:opacity-60"
              >
                {state.submitting ? c.submitting : c.submit}
              </button>
            </form>
          )}

          {/* Contact details */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-forest font-sans text-[11px] font-semibold tracking-[0.1em] uppercase">
                {c.phoneLabel}
              </p>
              <a
                href={CONTACT.phoneHref}
                className="font-display text-ink hover:text-forest mt-2 block text-[22px]"
              >
                {CONTACT.phone}
              </a>
            </div>
            <div>
              <p className="text-forest font-sans text-[11px] font-semibold tracking-[0.1em] uppercase">
                {c.emailLabel}
              </p>
              <a
                href={CONTACT.emailHref}
                className="font-display text-ink hover:text-forest mt-2 block text-[22px]"
              >
                {CONTACT.email}
              </a>
            </div>
            <div>
              <p className="text-forest font-sans text-[11px] font-semibold tracking-[0.1em] uppercase">
                {c.locationLabel}
              </p>
              <p className="font-display text-ink mt-2 text-[22px]">
                {c.locationValue}
              </p>
              <p className="text-muted-foreground mt-1 font-sans text-[14px]">
                {c.radius}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
