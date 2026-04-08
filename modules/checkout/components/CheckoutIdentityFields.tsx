'use client'

export const checkoutIdentityInputClassName =
  'font-effra w-full rounded-lg border border-black-2 px-5 py-4 text-base text-black-2 placeholder:text-black-2/60 outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:bg-[#f4f4f6] disabled:text-black-2/50'

export type CheckoutIdentityFieldsProps = {
  /** Unique prefix for `id` / `htmlFor` (e.g. `stripe`, `paypal`). */
  idPrefix: string
  email: string
  firstName: string
  lastName: string
  onEmailChange: (value: string) => void
  onFirstNameChange: (value: string) => void
  onLastNameChange: (value: string) => void
  /** Extra wrapper classes around the field group. */
  className?: string
  /** When true (e.g. logged-in session), fields are read-only and styled muted. */
  disabled?: boolean
}

export function CheckoutIdentityFields({
  idPrefix,
  email,
  firstName,
  lastName,
  onEmailChange,
  onFirstNameChange,
  onLastNameChange,
  className = '',
  disabled = false,
}: CheckoutIdentityFieldsProps) {
  const emailId = `${idPrefix}-checkout-email`

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <label className="sr-only" htmlFor={emailId}>
        Email
      </label>

      <input
        id={emailId}
        name="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder="Email"
        disabled={disabled}
        className={checkoutIdentityInputClassName}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          name="given-name"
          type="text"
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => onFirstNameChange(e.target.value)}
          placeholder="First name"
          disabled={disabled}
          className={checkoutIdentityInputClassName}
        />

        <input
          name="family-name"
          type="text"
          autoComplete="family-name"
          value={lastName}
          onChange={(e) => onLastNameChange(e.target.value)}
          placeholder="Last name"
          disabled={disabled}
          className={checkoutIdentityInputClassName}
        />
      </div>
    </div>
  )
}
