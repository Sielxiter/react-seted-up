import { SignupForm } from "@/components/signup-form"

export function SignupPage() {
  return (
    <div className="min-h-svh bg-muted/40 p-6 md:p-10">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6">
        <SignupForm className="shadow-sm" />
      </div>
    </div>
  )
}