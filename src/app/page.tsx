'use client'
import styles from "@/styles/Home.module.css";
import Footer from '@/components/Footer';

const Home = () => {
    return (
        <>
            <div>
                <main className={styles.main}>
                <img
                    className={styles.logo}
                    src="https://nextjs.org/icons/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                />
                <ol>
                    <li>
                    Get started by editing <code>src/pages/index.tsx</code>.
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>
        
                <div className={styles.ctas}>
                    <a
                    className={styles.primary}
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img
                        className={styles.logo}
                        src="https://nextjs.org/icons/vercel.svg"
                        alt="Vercel logomark"
                        width={20}
                        height={20}
                    />
                    Deploy now
                    </a>
                    <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondary}
                    >
                    Read our docs
                    </a>
                </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Home;