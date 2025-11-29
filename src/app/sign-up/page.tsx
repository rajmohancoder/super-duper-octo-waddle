import SignUp from '@/components/SignUp';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Sign Up - EduPlatform',
    description: 'Create your parent account to manage your student\'s progress',
};

export default function SignUpPage() {
    return (
        <>
            <Header />
            <main>
                <SignUp />
            </main>
            <Footer />
        </>
    );
}
