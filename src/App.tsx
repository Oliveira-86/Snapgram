import { Route, Routes } from 'react-router-dom'
import './globals.css'
import AuthLayout from './_auth/AuthLayout'
import SignInForms from './_auth/forms/SignInForms'
import SignUpForms from './_auth/forms/SignUpForms'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import { Toaster } from '@/components/ui/toaster'

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForms />} />
          <Route path="/sign-up" element={<SignUpForms />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App
