
// pages/about.js
import Image from 'next/image';
const About = () => {
    return (
        <div className="container mx-auto p-4">
            <br />
            <br />
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="mb-4">
                Welcome to Health One, where we believe that everyone deserves access to quality healthcare. Our mission is to provide comprehensive health services that cater to the needs of our diverse community. With a team of dedicated professionals and state-of-the-art facilities, we strive to deliver exceptional care and support to our patients at every stage of their journey.
            </p>
            <p className="mb-4">
                At Health One, we prioritize preventative care and health education, empowering individuals to take charge of their health. Our wide range of services includes primary care, specialist consultations, wellness programs, and mental health support, all designed to ensure holistic well-being. We are committed to fostering a compassionate environment that encourages open communication and collaboration between our patients and healthcare providers.
            </p>
            <p>
                Thank you for choosing Health One. We look forward to partnering with you on your path to better health and well-being.
            </p>

            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.avxBDkQAX_O4iJPTt_skRAHaE8%26pid%3DApi&f=1&ipt=d7a1d69e5e014570a2c8ac35219a8055bd8547dfd2ebd4b6530893c07355e6c2&ipo=images"
                alt="Description of image"
                width={500} // specify width
                height={300} // specify height
                className="rounded-lg" // optional styling
            />

        </div>
    );
};

export default About;
