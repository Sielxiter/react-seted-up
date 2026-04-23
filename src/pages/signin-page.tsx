import { LoginForm } from "@/components/login-form"

export function SigninPage() {
  return (
    <div className="min-h-svh bg-muted/40 p-6 md:p-10">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        <LoginForm className="rounded-xl border bg-card p-6 shadow-sm" />
      </div>
    </div>
  )
}