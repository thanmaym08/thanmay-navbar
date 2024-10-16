// components/faq.jsx

const faqData = [
    {
        question: "What is Next.js?",
        answer: "Next.js is a React framework for building web applications.",
        id: 1,
    },
    {
        question: "How does Tailwind CSS work?",
        answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
        id: 2,
    },
    {
        question: "What is the purpose of getStaticProps?",
        answer: "getStaticProps is used to fetch data at build time in Next.js.",
        id: 3,
    },
];

const FAQ = () => {
    return (
        <div>
            <hr className="w-full lg:mt-5 md:mt-6 md:mb-8 my-8 border-gray-400" />
            {faqData.map((item) => (
                <div key={item.id}>
                    <div className="w-full md:px-6">
                        <details className="rounded group">
                            <summary className="list-none flex flex-wrap items-center cursor-pointer">
                                <div id="mainHeading" className="flex justify-between items-center w-full">
                                    <div>
                                        <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
                                            <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                                                Q{item.id}.
                                            </span>
                                            {item.question}
                                        </p>
                                    </div>
                                    <div className="flex w-10 items-center justify-center">
                                        <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left"></div>
                                    </div>
                                </div>
                            </summary>
                            <div className="mt-6 w-full">
                                <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                                    {item.answer}
                                </p>
                            </div>
                        </details>
                    </div>
                    <hr className="w-full lg:mt-5 my-8 border-gray-400" />
                </div>
            ))}
        </div>
    );
};

export default FAQ;
