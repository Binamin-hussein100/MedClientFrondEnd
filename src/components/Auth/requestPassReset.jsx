import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

const ResetPassRequest = () => {
    const { isOpen: isSuccessOpen, onOpen: onSuccessOpen, onOpenChange: onSuccessOpenChange } = useDisclosure();
    const { isOpen: isFailureOpen, onOpen: onFailureOpen, onOpenChange: onFailureOpenChange } = useDisclosure();
    const navigate = useNavigate();

    const [message, setMessage] = useState([]);
    const [formData, setFormData] = useState({
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/auth/request-password-reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to send reset password request');
            }

            const data = await response.json();
            setMessage([...message, data.message]);
            setFormData({ email: '' });
            onSuccessOpen(); // Open success modal
        } catch (error) {
            console.error(error);
            setMessage([...message, 'Failed to send reset password request']);
            onFailureOpen(); // Open failure modal
        }
    };

    const handleSuccessModalClose = () => {
        onSuccessOpenChange(false); // Close the modal
        navigate('/signin'); // Redirect to sign-in
    };

    const handleFailureModalClose = () => {
        onFailureOpenChange(false); // Close the failure modal
    };

    return (
        <div className="antialiased text-gray-900 font-sans">
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-32 pointer-events-none" aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="-10%" x2="50%" y2="100%" id="illustration-01">
                            <stop stopColor="#d8e1f0" offset="0%" />
                            <stop stopColor="#bacfde" offset="77.402%" />
                            <stop stopColor="#87CEEB" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1251" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>

            <div className="bg-white rounded-lg hover:border border-sky-400 shadow-md p-8 w-full mx-auto my-16 max-w-md">
                <h2 className="text-2xl font-semibold text-blue-600 mb-6">
                    Forgot your password? <br />
                    <small>Please enter your email below</small>
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md text-gray-800"
                            required
                        />
                    </div>

                    <Button type="submit" color="primary" variant="ghost">
                        Reset Password
                    </Button>
                </form>
            </div>

            {/* Success Modal */}
            <Modal
                backdrop="blur"
                isOpen={isSuccessOpen}
                onOpenChange={onSuccessOpenChange}
                radius="lg"
                classNames={{
                    body: "py-6",
                    backdrop: "bg-[##7dd3fc]/50 backdrop-opacity-40",
                    base: "border-[#292f46] bg-[#19172c] dark:bg-[#86efac] text-[##030712]",
                    header: "border-b-[1px] border-[#292f46]",
                    footer: "border-t-[1px] border-[#292f46]",
                }}
                onClose={() => {}} // Prevent closing on backdrop click
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Reset Link Sent</ModalHeader>
                            <ModalBody>
                                <p>
                                    🎉 Success! A password reset link has been sent to your email. Please check your inbox (and spam folder just in case) for further instructions. 😊
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={handleSuccessModalClose}>To signin</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            {/* Failure Modal */}
            <Modal
                backdrop="blur"
                isOpen={isFailureOpen}
                onOpenChange={onFailureOpenChange}
                radius="lg"
                classNames={{
                    body: "py-6",
                    backdrop: "bg-[#7dd3fc]/50 backdrop-opacity-40",
                    base: "border-[#292f46] bg-[#19172c] dark:bg-[#fca5a5] text-[#0c0a09]",
                    header: "border-b-[1px] border-[#292f46]",
                    footer: "border-t-[1px] border-[#292f46]",
                }}
                onClose={() => {}} // Prevent closing on backdrop click
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Email Not Found</ModalHeader>
                            <ModalBody>
                                <p>
                                    😕 Oops! We couldn't find an account with that email address. Double-check your spelling or try signing up if you don’t have an account yet! ✨
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={handleFailureModalClose}>Retry</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default ResetPassRequest;