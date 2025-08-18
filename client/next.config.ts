import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'utfs.io',
				pathname: '**', // '*' emas, '**' ishlatish yaxshiroq
			},
		],
	},
};

export default nextConfig;
