import { ChildProps } from '@/types';
import './globals.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import React, { FC } from 'react';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/shared/navbar';
import SessionProvider from '@/components/providers/session.provider';

const montserrat = Montserrat({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-montserrat',
});

export const metadata: Metadata = {
	title: 'Seleor e-commerce',
	description: 'Seleor e-commerce website built with Next.js',
	icons: { icon: '/favicon.png' },
};

const RootLayout: FC<ChildProps> = ({ children }) => {
	return (
		<SessionProvider>
			<html lang='en'>
				<body className={`${montserrat.className} antialiased`}>
					<Navbar />
					<main className='container max-w-6xl mt-24'>{children}</main>
					<Toaster />
				</body>
			</html>
		</SessionProvider>
	);
};

export default RootLayout;
