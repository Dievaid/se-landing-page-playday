import { usePostHog } from 'posthog-js/react';
import React, { useEffect, useState } from 'react';
import Modal from './modal';

import { firestore } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

export const Navbar: React.FC = () => {
    const posthog = usePostHog();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorText, setErrorText] = useState('');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const mailRef = React.createRef<HTMLInputElement>();

    useEffect(() => {
        posthog.capture('page_visit');
    }, []);

    const handleClick = () => {
        posthog.capture('get_started_clicked');
        openModal();
    }

    const handleSubscribe = async () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const email = mailRef.current?.value;

        if (!email || email.trim() === '' || !emailRegex.test(email)) {
            setErrorText('Please enter a valid email address');
            setTimeout(() => setErrorText(''), 3000);
            return;
        }

        await addDoc(collection(firestore, 'subscribers'), { email });
        posthog.capture('email_subscribed', { email });
        closeModal();
    }

    const onCloseModal = () => {
        posthog.capture('close_button_clicked');
        closeModal();
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-teal-800">
            <div className="container flex h-16 items-center px-8 w-full">
                <a className="flex items-center justify-center gap-2" href="#">
                    <img src='/playDay.png' className='w-[60px]' alt='logo' />
                    <p className='text-2xl text-gray-50 font-semibold'>PlayDay</p>
                </a>
                <nav className="flex gap-6 w-full items-center place-content-end">
                    <a className="text-sm font-medium text-white hover:text-gray-200" href="#">
                        Home
                    </a>
                    <a className="text-sm font-medium text-white hover:text-gray-200" href="#">
                        About Us
                    </a>
                    <a className="text-sm font-medium text-white hover:text-gray-200" href="#">
                        Fields
                    </a>
                    <a className="text-sm font-medium text-white hover:text-gray-200" href="#">
                        Games
                    </a>
                    <button className="bg-teal-100 text-teal-900 hover:bg-teal-200 font-bold p-2 rounded" onClick={handleClick}>
                        Get Started
                    </button>

                    <Modal isOpen={isModalOpen} onClose={onCloseModal}>
                        <h2 className="text-2xl font-semibold mb-4">Ready to make every day a PlayDay?</h2>
                        <p>
                            Subscribe now to stay in the loop and be among the first to try PlayDay when we launch.
                        </p>

                        <input ref={mailRef} type="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" placeholder="email@example.com"></input>
                        <p className='text-lg text-red-500'>{errorText}</p>

                        <button
                            onClick={handleSubscribe}
                            className="mt-4 bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-600 font-semibold"
                        >
                            Subscribe
                        </button>
                    </Modal>
                </nav>
            </div>
        </header>
    )
}