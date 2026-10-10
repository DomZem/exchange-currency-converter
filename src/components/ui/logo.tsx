'use client';

import { useIsMobile } from '@/hooks/use-is-mobile';
import Image from 'next/image';

export function Logo() {
	const isMobile = useIsMobile();

	return <Image src='/logo.svg' width={isMobile ? 107 : 139} height={isMobile ? 20 : 26} alt='fx checker logo' />;
}
