"use client";
import { DollarSignIcon, Github, Linkedin, LinkedinIcon, Mail, Plane, Twitter, Wallet } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Kite_One } from 'next/font/google';
import Image from 'next/image';

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://x.com/notnotsezpoo",
		label: "Twitter",
		handle: "@notnotsezpoo",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:serenax8@gmail.com",
		label: "Email",
		handle: "serenax8@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/sereenaa",
		label: "Github",
		handle: "sereenaa",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/serena-xu/",
		label: "LinkedIn",
		handle: "serena-xu",
	},
	{
		icon: <Wallet size={20} />,
		href: "https://debank.com/profile/0x2c606a9ab697d6b8fc870317087f8db1acaeb7d4?chain=arb",
		label: "DeBank",
		handle: "notnotsez.eth",
	},
	{
		icon: <Image
				src="/telegram.png"
				alt="Telegram Icon"
				width={20}
				height={20}
				className="mix-blend-difference"
			/>,
		href: "https://t.me/sez98",
		label: "Telegram",
		handle: "@sez98",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-pink-500 via-zinc-500/50 to-orange-300"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
