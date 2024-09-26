"use client";
import React, { useState } from 'react';
import { AiTwotoneMessage } from "react-icons/ai";

import ChatBoatDesign from '@/components/ChatBoatDesign';
interface TranslatedText {
    articleDescription: string;
    PreambleHeading: string;
    PreambleDescription: string;
    FundamentalRightsHeading: string;
    FundamentalRightsDescription: string;
    DirectivePrincipleHeading: string;
    DirectivePrincipleDescription: string;
    FundamentalDutiesHeading: string;
    FundamentalDutiesDescription: string;
}

const TranslationApp: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');
    const [translatedText, setTranslatedText] = useState<TranslatedText | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [showChatbox, setShowChatbox] = useState(false); // State to manage chatbox visibility


    const toggleChatbox = () => {
        setShowChatbox(!showChatbox); // Toggle the visibility of the chatbox
      };


    const textToTranslate: TranslatedText = {
        articleDescription: `Article 15 of the Indian Constitution prohibits discrimination by the State against any citizen on the grounds of religion, race, caste, sex, or place of birth. It ensures equal access to public places and facilities, and empowers the State to make special provisions for women, children, socially and educationally backward classes, Scheduled Castes, Scheduled Tribes, and economically weaker sections (EWS).`,
        PreambleHeading: "Preamble",
        PreambleDescription: "The Preamble of the Indian Constitution serves as an introduction, outlining the guiding principles of the document. It declares India to be a sovereign, socialist, secular, and democratic republic, committed to securing justice, liberty, equality, and fraternity for all its citizens, reflecting the nation’s core values.",
        FundamentalRightsHeading: "Fundamental Rights",
        FundamentalRightsDescription: "Fundamental Rights in the Indian Constitution guarantee civil liberties to all citizens, ensuring equality, freedom of speech, and protection from discrimination. These rights, outlined in Articles 12-35, include the right to equality, freedom, protection against exploitation, religious freedom, cultural and educational rights, and constitutional remedies.",
        DirectivePrincipleHeading: "Directive Principles of State Policy",
        DirectivePrincipleDescription: "The Directive Principles of State Policy in the Indian Constitution are guidelines for the government to create social and economic conditions promoting justice, equality, and welfare. Though non-justiciable (not enforceable by courts), they aim to shape laws ensuring a fair society, focusing on education, health, and livelihood for all citizens.",
        FundamentalDutiesHeading: "Fundamental Duties",
        FundamentalDutiesDescription: "Fundamental Duties in the Indian Constitution, added by the 42nd Amendment in 1976, outline the moral obligations of citizens to promote patriotism and uphold the unity of India. These 11 duties include respecting national symbols, protecting the environment, and fostering harmony among all citizens. They are listed in Article 51A."
    };

    const translateText = async (text: string, language: string): Promise<string> => {
        const prompt = `Translate this text into ${language}: "${text}" avoid unnecessary special characters at start and end`;
        try {
            const response = await fetch('/api/translation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [{ role: 'user', content: prompt }],
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch translation');
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let result = '';

            while (reader) {
                const { done, value } = await reader.read();
                if (done) break;
                result += decoder.decode(value);
            }

            return result;
        } catch (error) {
            console.error('Error fetching translation:', error);
            return text;
        }
    };

    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const language = e.target.value;
        setSelectedLanguage(language);

        if (language) {
            setLoading(true);
            try {
                const translatedArticleDescription = await translateText(textToTranslate.articleDescription, language);
                const translatedPreambleHeading = await translateText(textToTranslate.PreambleHeading, language);
                const translatedPreambleDescription = await translateText(textToTranslate.PreambleDescription, language);
                const translatedFundamentalRightsHeading = await translateText(textToTranslate.FundamentalRightsHeading, language);
                const translatedFundamentalRightsDescription = await translateText(textToTranslate.FundamentalRightsDescription, language);
                const translatedDirectivePrincipleHeading = await translateText(textToTranslate.DirectivePrincipleHeading, language);
                const translatedDirectivePrincipleDescription = await translateText(textToTranslate.DirectivePrincipleDescription, language);
                const translatedFundamentalDutiesHeading = await translateText(textToTranslate.FundamentalDutiesHeading, language);
                const translatedFundamentalDutiesDescription = await translateText(textToTranslate.FundamentalDutiesDescription, language);

                setTranslatedText({
                    articleDescription: translatedArticleDescription,
                    PreambleHeading: translatedPreambleHeading,
                    PreambleDescription: translatedPreambleDescription,
                    FundamentalRightsHeading: translatedFundamentalRightsHeading,
                    FundamentalRightsDescription: translatedFundamentalRightsDescription,
                    DirectivePrincipleHeading: translatedDirectivePrincipleHeading,
                    DirectivePrincipleDescription: translatedDirectivePrincipleDescription,
                    FundamentalDutiesHeading: translatedFundamentalDutiesHeading,
                    FundamentalDutiesDescription: translatedFundamentalDutiesDescription,
                });
            } catch (error) {
                console.error('Error during translation process:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className='text-bold text-xl p-4'>
            <h1 className='flex justify-center items-center text-3xl font-semibold mb-10'>Indian Constitution</h1>
    
            <select className='mb-6 p-2 border rounded' onChange={handleChange} value={selectedLanguage}>
                <option value="">Select a language</option>
                <option value="hindi">Hindi</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Marathi">Marathi</option>
                <option value="Tamil">Tamil</option>
                <option value="kannada">Kannada</option>
                <option value="Bengali">Bengali</option>
            </select>
    
            {loading ? (
                <h1 className='flex justify-center items-center text-lg'>Loading...</h1>
            ) : (
                <>
                    <div className='flex flex-col sm:flex-row justify-center items-center w-full sm:w-[70%] mx-auto border border-black rounded-2xl mb-6 p-4 bg-gradient-to-r from-yellow-200 via-gray-100 to-green-200'>
                        <div className='w-full sm:w-1/2'>
                            <h1>{translatedText?.PreambleHeading || textToTranslate.PreambleHeading}:</h1>
                            <p>{translatedText?.PreambleDescription || textToTranslate.PreambleDescription}</p>
                        </div>
                    </div>
    
                    <div className='flex flex-col sm:flex-row justify-center items-center w-full sm:w-[70%] mx-auto border border-black rounded-2xl mb-6 p-4 bg-gradient-to-r from-yellow-200 via-gray-100 to-green-200'>
                        <div className='w-full sm:w-1/2'>
                            <h1>{translatedText?.FundamentalRightsHeading || textToTranslate.FundamentalRightsHeading}</h1>
                            <p>{translatedText?.FundamentalRightsDescription || textToTranslate.FundamentalRightsDescription}</p>
                        </div>
                    </div>
    
                    <div className='flex flex-col sm:flex-row justify-center items-center w-full sm:w-[70%] mx-auto border border-black rounded-2xl mb-6 p-4 bg-gradient-to-r from-yellow-200 via-gray-100 to-green-200'>
                        <div className='w-full sm:w-1/2'>
                            <h1>{translatedText?.DirectivePrincipleHeading || textToTranslate.DirectivePrincipleHeading}</h1>
                            <p>{translatedText?.DirectivePrincipleDescription || textToTranslate.DirectivePrincipleDescription}</p>
                        </div>
                    </div>
    
                    <div className='flex flex-col sm:flex-row justify-center items-center w-full sm:w-[70%] mx-auto border border-black rounded-2xl mb-6 p-4 bg-gradient-to-r from-yellow-200 via-gray-100 to-green-200'>
                        <div className='w-full sm:w-1/2'>
                            <h1>{translatedText?.FundamentalDutiesHeading || textToTranslate.FundamentalDutiesHeading}</h1>
                            <p>{translatedText?.FundamentalDutiesDescription || textToTranslate.FundamentalDutiesDescription}</p>
                        </div>
                    </div>
    
                    <div className="fixed bottom-10 right-10 flex justify-center items-center p-4 border-black border-2 w-30 h-30 pl-5 bg-yellow-300 rounded-md">
                        <button onClick={toggleChatbox}><AiTwotoneMessage className='w-25 h-25' /></button>
                    </div>
    
                    {/* Chatbox logic */}
                    {showChatbox && <ChatBoatDesign />}
                </>
            )}
        </div>
    );
    
};

export default TranslationApp;
