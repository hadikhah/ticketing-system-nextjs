import Link from 'next/link'
import { getDictionary } from '@/app/[lang]/dictionaries'

import ChangeThemeToggler from '@/app/components/ChangeThemeToggler'
import { Mail, Lock, User } from 'react-feather'

const SignUp = async ({ params: { lang } }) => {

	const t = await getDictionary(lang)

	return (
		<div className="min-h-screen flex flex-col">
			{/* Header */}
			<header className="flex justify-between items-center p-6">
				<Link href={`/${lang}`}>
					<div className="text-primary text-2xl font-bold">{t("appName")}</div>
				</Link>
				<div className="flex items-center space-x-4">
					<ChangeThemeToggler />
					<Link href={`/${lang == "en" ? "fa" : "en"}/auth/signup`}>
						<button className="btn btn-outline btn-sm">{lang}</button>
					</Link>
				</div>
			</header>

			{/* Sign Up Form */}
			<div className="flex-1 flex items-center justify-center px-6 py-12">
				<div className="card w-full max-w-md bg-base-200 shadow-xl">
					<div className="card-body">
						<h2 className="card-title text-2xl font-bold text-center mb-6 justify-center">
							{t("Create New Account")}
						</h2>

						<form className="space-y-4">
							<div className="form-control">
								<label className="input-group">
									<label className="label">
										<span className='flex flex-row'>
											<span className="bg-base-300">
												<User size={18} />
											</span>
											<span className="label-text">{t("fullName")}</span>
										</span>
									</label>
									<input
										type="text"
										placeholder={t("fullName")}
										className="input input-bordered w-full"
									/>
								</label>
							</div>

							<div className="form-control">
								<label className="label ">
									<span className="label-text flex flex-row">

										<span className="bg-base-300">
											<Mail size={18} />
										</span>
										<span>

											{t("email")}
										</span>
									</span>
								</label>
								<label className="input-group">
									<input
										type="email"
										placeholder="example@mail.com"
										className="input input-bordered w-full"
									/>
								</label>
							</div>

							<div className="form-control">

								<label className="input-group">
									<label className="label ">
										<span className='flex flex-row' >

											<span className="bg-base-300">
												<Lock size={18} />
											</span>
											<span className="label-text"> {t("password")}</span>
										</span>
									</label>
									<input
										type="password"
										placeholder="********"
										className="input input-bordered w-full"
									/>
								</label>
							</div>

							<div className="form-control">
								<label className="input-group">
									<label className="label ">
										<span className='flex flex-row' >

											<span className="bg-base-300">
												<Lock size={18} />
											</span>
											<span className="label-text">
												{t("repeatPassword")}
											</span>
										</span>
									</label>
									<input
										type="password"
										placeholder="********"
										className="input input-bordered w-full"
									/>
								</label>
							</div>

							<div className="form-control">
								<label className="label cursor-pointer justify-start gap-2">
									<input type="checkbox" className="checkbox checkbox-primary" />
									<span className="label-text">

										<Link href={`/${lang}/terms`} className="link link-primary">{t("I agree to the terms and conditions")}
										</Link>
									</span>
								</label>
							</div>

							<button className="btn btn-primary w-full">{t("sign up")}</button>
						</form>

						<div className="divider">{t("or")}</div>

						<Link href={`/${lang}/auth/signin`}>
							<button className="btn btn-outline w-full">{t("Login to Your Account")}</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp