import Link from 'next/link'
import RootLayout from './layout'
import { getDictionary } from './dictionaries'
import { ThemeProvider } from '../contexts/ThemeContext'

const Main = async ({ params: { lang } }) => {

  const t = await getDictionary(lang)

  return (

    <div>

      <Link href={"fa"} >fa</Link>
      <br />
      <Link href={"en"} >en</Link>
      <br />
      <Link href={"tickets"} >tickets</Link>
      <div>{t("Next.js i18n Demo")}</div>

    </div>

  )
}

export default Main
