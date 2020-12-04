import Head from "next/head";

// Layouts
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main>WELCOME TO INTERCLEAN</main>
            <Footer />
        </div>
    );
}
