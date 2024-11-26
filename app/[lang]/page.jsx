import Link from 'next/link'
import { getDictionary } from './dictionaries'
import RootLayout from './layout'
import ChangeThemeToggler from '../components/ChangeThemeToggler'
import { ArrowRight, MessageCircle, Shield, Clock, Users } from 'react-feather'

const Main = async ({ params: { lang } }) => {

  const t = await getDictionary(lang)

  return (

    <div>


      <div className="min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center space-x-4">
            <span className="text-primary text-2xl font-bold">🎫 TicketHub</span>
          </div>
          <div className="flex items-center space-x-4">
            <ChangeThemeToggler />
            <Link href={`/${lang == "en" ? "fa" : "en"}`}>
              <button className="btn btn-outline btn-sm">{lang}</button>
            </Link>
            <Link href={`/${lang}/auth/signin`}>
              <button className="btn btn-outline btn-sm">{t("sign in")}</button>
            </Link>
            <Link href={`/${lang}/auth/signup`}>
              <button className="btn btn-primary btn-sm">{t("sign up")}</button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6">{t("Smart Ticketing System")}</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-80">
            {t("Make it easier to manage and respond to customer requests")}
          </p>
          <Link href={`/${lang}/auth/signup`}>
            <button className="btn btn-primary btn-lg gap-2">
              {t("Get Started")}
              <ArrowRight size={20} />
            </button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t("Main Features")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <MessageCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">{t("Quick Response")}</h3>
                <p>{t("Easily manage tickets and respond quickly to customer requests")}</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">{t("High Security")}</h3>
                <p>{t("Maintain the security of information and communications with high security standards")}</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">{t("Easy Tracking")}</h3>
                <p>{t("Track the status of tickets and view request history")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-content py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">{t("Start Now")}</h2>
            <p className="mb-8 max-w-xl mx-auto">
              {t("Set up your ticketing system today for free")}
            </p>
            <Link href={`/${lang}/auth/signup`}>
              <button className="btn btn-secondary btn-lg">{t("Free sign up")}</button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer footer-center p-10 bg-base-200 text-base-content">
          <div>
            <p className="font-bold">
              {t("appName")} <br />{t("Professional Ticketing System")}
            </p>
            <p>{t("copyright")}</p>
          </div>
        </footer>
      </div>
      {/*  */}


    </div>

  )
}

export default Main
