"use client";
import React from "react";
import Image from "next/image";
import Emblem from "../app/assets/Images/Emblem.jpg";
import Boy from "../app/assets/Images//boy.jpg";
import Article14 from "../app/assets/Images/article 14.jpg"
import Article15 from "../app/assets/Images/article15.jpeg"
import Article16 from "../app/assets/Images/article16.jpg"
import Article17 from "../app/assets/Images/article17.jpeg"
import Article18 from "../app/assets/Images/article18.png"
import Article19 from "../app/assets/Images/article19.png"
import Article20 from "../app/assets/Images/article20.png"
import Article21 from "../app/assets/Images/article21a.jpg"
import Article22 from "../app/assets/Images/article22.jpg"
import Article23 from "../app/assets/Images/article23.jpg"
import Article24 from "../app/assets/Images/article24.jpg"
import Article25 from "../app/assets/Images/article25.jpg"
import Article26 from "../app/assets/Images/article26.jpg"
import Article27 from "../app/assets/Images/article28.jpg"
import Article28 from "../app/assets/Images/article28.jpg"
import Article29 from "../app/assets/Images/article29.jpg"
import Article30 from "../app/assets/Images/article30.jpg"
import Article31 from "../app/assets/Images/article32.jpg"
import Article32 from "../app/assets/Images/article32.jpg"

function LearningLayout() {
  return (
    <>
      {/* top most div of fundamental rights start of that div */}
      <div className="bg-gray-200">
        <div className="flex justify-center items-center gap-6 bg-gray-200">
          <Image src={Emblem} alt="emblem image" height={50} width={50} />
          <h1 className="text-3xl font-semibold">Fundamental Rights </h1>
        </div>
        <div className="h-100% w-100% bg-pink-100">
          {/* sanket start copy from this div */}
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>
          {/* copy till this div sanket */}
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3 "
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 13 – Laws That Violate Fundamental Rights Are Invalid"
              </h1>  {/* Article 13 */}
              <p className=" pt-2 font-serif">
              Article 13 of the Indian Constitution states that any law that violates or contradicts 
              the fundamental rights mentioned in Part III of the Constitution is considered void. 
              It ensures that no laws, whether created before or after the Constitution came into
               effect, can undermine these basic rights. The judiciary has the power to strike down 
               such laws. This article strengthens the protection of citizens' rights by making it 
               clear that fundamental rights are supreme over other laws.
              </p>
            </div>
          </div>
          {/* paste here */}
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article14}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 14 – Equality Before Law
              </h1>   {/* Articles 14 */}
              <p className=" pt-2 font-serif">
              Article 14 of the Indian Constitution guarantees equality before the law and 
              equal protection of the laws to all individuals. It ensures that no person is
               discriminated against on grounds of religion, race, caste, sex, or place of 
               birth. This means that everyone, regardless of their background, is treated 
               equally by the law. However, the law allows reasonable classification, which 
               means treating people differently if there is a valid reason. For instance, 
               special laws for children or women may be considered fair, as they aim to 
               protect vulnerable groups.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article15}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 15 –  Prohibition of discrimination
              </h1>    {/*Article 15 */}
              <p className=" pt-2 font-serif">
              Article 15 of the Indian Constitution ensures that no person is discriminated against 
              based on religion, race, caste, sex, or place of birth. It protects citizens' rights 
              by prohibiting discrimination in public spaces and services like parks, schools, or 
              shops. Additionally, the Article allows the government to make special provisions for 
              women, children, and socially disadvantaged groups like Scheduled Castes (SC) and 
              Scheduled Tribes (ST) to promote equality. This helps in building a society where 
              everyone is treated fairly and equally, regardless of their background.
              </p>
            </div>
          </div>

          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3 "
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article16}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 16 – Equal Opportunity in Government Jobs
              </h1>    {/* Article 16 */}
              <p className=" pt-2 font-serif">
              Article 16 of the Indian Constitution ensures equality of opportunity in matters related 
              to government jobs. It prohibits discrimination based on religion, race, caste, sex,
               or place of birth. Everyone has the right to apply for public employment if they meet
                the required qualifications. The government may, however, make special provisions for 
                backward classes, Scheduled Castes (SC), and Scheduled Tribes (ST) to ensure equal 
                opportunities for all. This article promotes fairness and inclusiveness in public
                 employment, ensuring no one is unfairly denied the chance to work in the government.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article17}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 17 – Abolishing Untouchability in India
              </h1>
                                     {/* article 17 */}
              <p className=" pt-2 font-serif">
              Article 17 of the Indian Constitution completely abolishes "untouchability" in any form. 
              It makes the practice of untouchability illegal and prohibits discrimination against 
              anyone based on their caste. The article ensures that no one is denied access to public 
              places, services, or rights simply because of their caste background. Anyone found 
              practicing or promoting untouchability can be punished by law. This article is a vital 
              step in promoting equality and ensuring dignity for all citizens of India, regardless
               of their social or cultural background.
              </p>
            </div>
          </div>

          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article18}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 18 – Abolition of titles
              </h1>
                                     {/* article 18 */}
              <p className=" pt-2 font-serif">
              Article 18 of the Indian Constitution states that no citizen of India can be given or 
              accept any titles from the government. Titles like "Sir" or "Lord" were used during
               colonial rule and are not allowed anymore. However, military or academic honors, 
               such as awards given for bravery or educational achievements, are exceptions. 
               This article ensures equality by preventing any special privileges or distinctions 
               based on titles, keeping all citizens equal before the law. It is part of the efforts
               to create a more democratic and fair society by ending practices from the colonial past.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article19}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 19 – Freedom of Speech and Expression
              </h1>
                                     {/* article 19 */}
              <p className=" pt-2 font-serif">
              Article 19 guarantees citizens of India certain fundamental freedoms. These include the 
              right to freedom of speech and expression, the right to assemble peacefully without arms,
               the right to form associations, the right to move freely throughout the country, the right
                to reside anywhere in India, and the right to practice any profession or carry out any 
                occupation. However, these rights are subject to reasonable restrictions imposed by the 
                government in the interest of national security, public order, decency, and morality.
                 This ensures that while individuals have freedoms, they must also respect the rights 
                 and safety of others.
              </p>
            </div>
          </div> <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article20}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 20 – Protection in respect of conviction for offenses
              </h1>
                                     {/* article 20 */}
              <p className=" pt-2 font-serif">
              Article 20 of the Indian Constitution provides important protections for individuals 
              accused of crimes. It states that no person can be convicted of an offence unless it was
               a crime at the time it was committed. It also prohibits double jeopardy, meaning no one
                can be tried again for the same crime after being acquitted. Additionally, Article 20 
                ensures that no one can be forced to testify against themselves. These protections help
                 uphold justice and safeguard individual rights in the legal system.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article21}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 21 – Protection of life and personal liberty
              </h1>
                                     {/* article 21 */}
              <p className=" pt-2 font-serif">
              Article 21 of the Indian Constitution guarantees the right to life and personal liberty to
               every individual. It states that no person shall be deprived of their life or personal 
               liberty except according to the procedure established by law. This means that everyone 
               has the right to live freely and safely, and any action that affects this right must 
               follow fair legal processes. Article 21 emphasizes the importance of human dignity and 
               protects individuals from arbitrary actions by the 
              state, ensuring that everyone has access to justice and a fair hearing.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article21}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 21A –  Right to Education
              </h1>
                                     {/* article 21A */}
              <p className=" pt-2 font-serif">
              Article 21A of the Indian Constitution guarantees the right to free and compulsory 
              education for children aged 6 to 14 years. This means every child has the right to 
              receive an education without having to pay for it. The government is responsible for 
              ensuring that schools are available and that children can attend them. This article 
              aims to promote literacy and improve the overall quality of education in India, helping 
              to empower future generations and reduce inequality in society. By making 
              education accessible, Article 21A supports the development of every child's potential.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article22}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 22 – Protection Against Arrest and Detention
              </h1>
                                     {/* article 22 */}
              <p className=" pt-2 font-serif">
              Article 22 of the Indian Constitution provides protection to individuals against arbitrary
               arrest and detention. It ensures that no person can be arrested without being informed of
                the reasons for their arrest. Additionally, individuals have the right to consult a 
                lawyer and be represented by them. If a person is detained, they must be produced before
                 a magistrate within 24 hours. The article also protects against preventive detention,
                  which means a person cannot be held without trial for longer than three months unless 
                  an advisory board approves it.
               These rights safeguard personal freedom and ensure fair treatment under the law.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article23}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 23 – Prohibition of Traffic in Human Beings
              </h1>
                                     {/* article 23 */}
              <p className=" pt-2 font-serif">
              Article 23 of the Indian Constitution prohibits human trafficking and forced labor. It 
              states that no one can be bought or sold, and everyone has the right to be free from 
              exploitation. This means that any form of slavery, forced work, or trafficking for any 
              purpose is illegal. The law protects vulnerable groups, especially women and children, 
              from being exploited. Violators of this article can face severe penalties. The government 
              is also encouraged to take steps to prevent such practices and ensure that every individual can live with dignity and freedom.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article24}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 24 – Prohibition of Employment of Children in Factories
              </h1>
                                     {/* article 24 */}
              <p className=" pt-2 font-serif">
              Article 24 of the Indian Constitution prohibits the employment of children below the age
               of 14 in factories, mines, and hazardous occupations. This law aims to protect children 
               from exploitation and ensures they are not forced to work in dangerous environments. It 
               recognizes that children have the right to a safe and healthy upbringing, allowing them 
               to grow, learn, and enjoy their childhood. The government is responsible for enforcing 
               this article to safeguard children's rights and promote their well-being,ensuring they 
               have access to education and opportunities for a better future.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article25}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 25 –  Freedom of Religion
              </h1>
                                     {/* article 25 */}
              <p className=" pt-2 font-serif">
              Article 25 of the Indian Constitution guarantees the right to freedom of religion. It 
              allows every individual to freely practice, profess, and propagate their religion. This 
              means people can follow their faith, celebrate religious festivals, and spread their 
              beliefs without interference. However, this freedom is not absolute; the state can impose 
              restrictions for reasons like public order, morality, and health. This article aims to
               promote religious harmony and protect individual rights while ensuring that one person's 
               religion does not harm others or disturb society.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article26}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 26 – Freedom to Manage Religious Affairs
              </h1>
                                     {/* article 26 */}
              <p className=" pt-2 font-serif">
              Article 26 of the Indian Constitution gives individuals the right to manage their own 
              religious affairs. This means that every religious group can establish its own places of 
              worship, manage their own religious institutions, and make decisions about their rituals 
              and ceremonies. It ensures that people can practice their religion freely without
               interference from the government, as long as it does not harm public order, health, or
                morals. This article protects the rights of all religious communities, promoting respect
                 and understanding among different faiths in India.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article27}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 27 – Freedom from Taxation for Religious Institutions
              </h1>
                                     {/* article 27 */}
              <p className=" pt-2 font-serif">
              Article 27 of the Indian Constitution ensures that no one can be forced to pay taxes for 
              any religious institution. This means that the government cannot impose taxes to support 
              religious activities or organizations. It protects the rights of individuals to practice
               their religion freely without financial burden from the state. This provision is important
                for maintaining the separation of religion and state, allowing people to support their 
                faith voluntarily. Overall, Article 27 
              promotes religious freedom and prevents the misuse of tax money for religious purposes.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article28}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 28 –  Freedom from Religious Instruction in Educational Institutions
              </h1>
                                     {/* article 28 */}
              <p className=" pt-2 font-serif">
              Article 28 of the Indian Constitution ensures that no person can be forced to receive 
              religious instruction in schools or colleges funded by the government. It states that 
              educational institutions run by the government should remain secular, meaning they cannot 
              promote any religion. However, private educational institutions can provide religious 
              instruction if they choose. This article protects individuals from being compelled to 
              learn any religion and supports the right to freedom of religion,promoting an environment
               where students of all backgrounds feel comfortable and respected.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article29}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 29 – Definition of "State"
              </h1>
                                     {/* article 29 */}
              <p className=" pt-2 font-serif">
              Article 29 of the Indian Constitution protects the interests of minorities. It states that
               any group of people who share a distinct language, culture, or script has the right to 
               conserve and promote their identity. It ensures that no citizen shall be denied the right 
               to reside in any part of India or to speak their language. This article is crucial for 
               preserving the diversity of cultures and languages in India, allowing minorities to 
               maintain their heritage and participate fully in society without fear of discrimination 
               or loss of identity.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article30}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 30 –  Rights of Minorities
              </h1>
                                     {/* article 30 */}
              <p className=" pt-2 font-serif">
              Article 30 of the Indian Constitution grants minorities the right to establish and 
              administer their educational institutions. This means that communities with distinct 
              languages, religions, or cultures can create schools and colleges to preserve their 
              identity. It ensures that these institutions receive government support and are free
               from interference in their management. The article protects the interests of minority 
               groups, allowing them to provide education according to their 
              values and beliefs, promoting diversity and inclusivity in India's educational landscape.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article31}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 31 –  Right to Property
              </h1>
                                     {/* article 31 */}
              <p className=" pt-2 font-serif">
              Article 31 of the Indian Constitution protected the right to property. It stated that no 
              one could be deprived of their property except by law and only after paying compensation.
               This article ensured that if the government took someone’s property for public use, the 
               owner would receive fair payment. However, in 1978, this article was removed from the 
               fundamental rights section and made a legal right instead. This change allowed the
                government to acquire land more easily but also raised concerns about property rights 
                for individuals. Now, the right to property is governed by laws rather than the Constitution.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article32}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 32 –  Right to Constitutional Remedies
              </h1>
                                     {/* article 32 */}
              <p className=" pt-2 font-serif">
              Article 32 of the Indian Constitution grants individuals the right to approach the Supreme 
              Court for the enforcement of their fundamental rights. This means that if someone feels 
              their rights are violated, they can directly petition the Supreme Court. It is a crucial
               provision because it provides a legal way for people to seek justice and ensures that the
                government respects their rights. The Supreme Court can issue orders to protect these 
                rights, making Article 32 an essential part of safeguarding democracy and individual freedoms in India.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Article16}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 sm:px-4 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 sm:p-3"
            style={{
              background:
                "linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)",
              boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.2)", // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
                                     {/* article 12 */}
              <p className=" pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the
                central and state governments, but also Parliament, state
                legislatures, local authorities (like municipalities and
                panchayats), and any bodies or authorities (such as public
                enterprises or institutions) that perform governmental functions
                or are controlled by the government. This broad definition
                ensures that Fundamental Rights can be enforced not only against
                traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further
                expanded its scope to include bodies that are financially or
                functionally dependent on the government, ensuring comprehensive
                protection of individual rights from state actions.
              </p>
            </div>
          </div>



           {/* paste here */}
        </div>
      </div>
    </>
  );
}

export default LearningLayout;
