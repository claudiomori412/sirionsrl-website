import Title from "../ui/components/title";
import Image from "next/image";
import imageUrl from "../../img/default/map.jpg"
import Link from "next/link";


export default function Page() {
  
   
    return (
        <>
            <Title title={'Whistleblowing'} />
            <div className="bg-customWhite p-10 md:p-20">
               
                
                    <p className="text-customBlack font-extrabold mb-4">Sistemi di segnalazione delle violazioni whistleblowing</p>
                    <p className="text-customBlack mb-4">La società Sirion S.r.l., in attuazione della disciplina introdotta dal D. Lgs. n. 24/2023 (c.d. Decreto Whistleblowing), ha aggiornato la “Procedura riguardante la protezione delle persone che segnalano violazioni di diritto” (consultabile cliccando il seguente <Link  target="_blank"style={{textDecoration:'underline', color:'#004F92'}} href={'PROCEDURA DI SEGNALAZIONE SIRION.docx'}>link</Link> ), avente la finalità di permettere la rivelazione spontanea, da parte del segnalante, di condotte illecite rilevanti a fini della normativa in materia di whistleblowing di cui sia venuto a conoscenza nel contesto lavorativo della Società.</p>
                    <p className="text-customBlack mb-4">La procedura identifica le tipologie di violazioni e comportamenti illeciti e/o inopportuni che possono essere segnalate attraverso il canale Whistleblowing, nonché la piattaforma informatica a disposizione per effettuare la segnalazione raggiungibile al seguente <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'https://areariservata.mygovernance.it/#!/WB/Sirion'}>link</Link></p>
                    <p className="text-customBlack b-4">Per consultare l’informativa Privacy relativamente al Whistleblowing cliccare il <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'Sirion-informativa-privacy.pdf'}>link</Link></p>
                    <p className="text-customBlack mb-4">Tutorial per effettuare segnalazione scritta <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'https://www.deltats.eu/wp-content/uploads/2024/04/effettuare-segnalazione-scritta.mp4'}>link</Link></p>
                    <p className="text-customBlack ">Tutorial per effettuare segnalazione vocale <Link target="_blank" style={{textDecoration:'underline', color:'#004F92'}} href={'https://www.deltats.eu/wp-content/uploads/2024/04/segnalazione-vocale.mp4'}>link</Link></p>
            </div>
        </>
    );
}
