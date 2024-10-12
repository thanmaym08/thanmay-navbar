import React from 'react'
import Image from 'next/image';

const Home = () => (
    <>
        <h1>Hello!!!!</h1>
        <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.avxBDkQAX_O4iJPTt_skRAHaE8%26pid%3DApi&f=1&ipt=d7a1d69e5e014570a2c8ac35219a8055bd8547dfd2ebd4b6530893c07355e6c2&ipo=images" // Directly from the public folder
            alt="Description of the image"
            width={500}
            height={300}
        />
    </>
);



export default home
