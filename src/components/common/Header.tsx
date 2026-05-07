// src/components/common/Header.tsx

import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <h1>لوگوی سایت</h1>
            <nav>
                <ul style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <li><Link href="/">خانه</Link></li>
                    <li><Link href="/about">درباره</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
