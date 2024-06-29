import Footer from "@/app/ui/dashboard-en/footer";
import Title from "../../ui/components/title";
import Link from "next/link";
import Navbar from "@/app/ui/dashboard-en/navbar";

export default function Page() {
  
   
    return (
        <>
            <Navbar/>
            <Title title={'Whistleblowing'} />
            <div className="bg-customWhite p-10 md:p-20">
                <p className="text-customBlack font-extrabold mb-4">Whistleblowing Violation Reporting Systems</p>
                <p className="text-customBlack mb-4">Sirion S.r.l., in compliance with the regulations introduced by Legislative Decree no. 24/2023 (so-called Whistleblowing Decree), has updated the "Procedure concerning the protection of persons who report violations of law" (available for consultation by clicking the following <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'PROCEDURA DI SEGNALAZIONE SIRION.docx'}>link</Link>), with the aim of allowing the spontaneous disclosure, by the reporting person, of unlawful conduct relevant for whistleblowing legislation that they have become aware of in the Company’s work environment.</p>
                <p className="text-customBlack mb-4">The procedure identifies the types of violations and illicit and/or inappropriate behaviors that can be reported through the Whistleblowing channel, as well as the IT platform available for making reports accessible at the following <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'https://areariservata.mygovernance.it/#!/WB/Sirion'}>link</Link>.</p>
                <p className="text-customBlack mb-4">To consult the Privacy Notice related to Whistleblowing, click the <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'Sirion-informativa-privacy-Whistleblowing.pdf'}>link</Link>.</p>
                <p className="text-customBlack mb-4">Tutorial for making a written report <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'https://www.deltats.eu/wp-content/uploads/2024/04/effettuare-segnalazione-scritta.mp4'}>link</Link>.</p>
                <p className="text-customBlack">Tutorial for making a voice report <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'https://www.deltats.eu/wp-content/uploads/2024/04/segnalazione-vocale.mp4'}>link</Link>.</p>
            </div>
            <Footer></Footer>
        </>
    );
}
