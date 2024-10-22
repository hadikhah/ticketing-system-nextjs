import Link from 'next/link'
import { getDictionary } from './dictionaries'
import RootLayout from './layout'
import ChangeThemeToggler from '../components/ChangeThemeToggler'

const Main = async ({ params: { lang } }) => {

  const t = await getDictionary(lang)

  return (

    <div>

      <ChangeThemeToggler></ChangeThemeToggler>

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
