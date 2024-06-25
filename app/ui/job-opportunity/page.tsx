"use client"
import { useRef } from "react";
import Button from "../components/button";
import Title from "../components/title";

export default function Page() {

    const inputNameRef: any = useRef(null);
    const inputSurnameRef: any = useRef(null);
    const inputBusinessRef: any = useRef(null);
    const inputEmailRef: any = useRef(null);
    const inputMessageRef: any = useRef(null);
    const checkboxref: any = useRef(null);

    const handleSubmit = async () => {
        if (checkboxref.current.checked) {
            // Crea un oggetto FormData
            const formData = new FormData();
            formData.append('name', inputNameRef.current.value);
            formData.append('surname', inputSurnameRef.current.value);
            formData.append('business', inputBusinessRef.current.value);
            formData.append('email', inputEmailRef.current.value);
            if (inputMessageRef.current.files[0]) { // Controlla se c'è un file selezionato e lo aggiunge
                formData.append('file', inputMessageRef.current.files[0]);
            }

            console.warn('current',inputMessageRef.current.files[0])

            // Opzioni per la richiesta fetch senza headers Content-Type per lasciare che il browser li imposti
            const requestOptions = {
                method: 'POST',
                body: formData,
            };

            try {
                const response = await fetch('/api/post-job-opportunity', requestOptions);
                const result = await response.json();

                if (response.ok) {
                    alert("Email inviata con successo!");
                    // Qui puoi gestire ulteriormente la risposta positiva, ad esempio resettare il form
                } else {
                    throw new Error(result.error || "Qualcosa è andato storto nell'invio dell'email");
                }
            } catch (error: any) {
                alert(error.message);
                // Gestisci l'errore come preferisci
            }
        } else {
            alert("Compilare acconsento al trattamento dei dati personali");
        }
    };

    return (
        <>
            <Title title={'Job Opportunity'} />

            <div className="md:flex bg-customWhite pl-0 pr-0 lg:pl-60 lg:pr-60">
                
                <div className=" w-[100%] md:w-[50%] flex justify-center flex-col" style={{paddingTop: '48px', paddingRight: '30px', paddingBottom: '70px', paddingLeft: '30px'}}>
                <p className="text-customBlack font-extrabold text-2xl pb-5">Vuoi lavorare con noi?</p>
                    <p className="text-customBlack font-extrabold">Siamo alla ricerca di un ADDETTO OFFICINA STAMPI.</p>
                    <p className="text-customBlack font-extrabold pt-5">Job Description</p>
                    <p className="text-customBlack underline">La risorsa si occuperà di:</p>
                    <div className="flex">
                        <p className="text-customBlack">- Movimentare correttamente gli stampi e le parti di cui sono costituiti;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Assemblare e smontare le varie parti degli stampi;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Consultare la Distinta Base dello stampo da realizzare;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Consultare i disegni costruttivi su sistema CAD;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Combinare le varie parti di uno stampo nuovo eseguendo lavorazioni di aggiustaggio per garantire le tolleranze dimensionali necessarie al corretto assemblaggio e funzionamento;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Eseguire lavorazioni meccaniche di piccola entità a banco e su macchine utensili tradizionali e CNC;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Cablare elettricamente gli iniettori degli stampi;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Cablare circuiti idraulici, oleodinamici e pneumatici su stampi e attrezzature necessarie al reparto produttivo;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Individuare i problemi di funzionamento di uno stampo o attrezzatura in manutenzione;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Collaborare con i colleghi della produzione per problematiche e malfunzionamenti ;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Intervenire quando possibile con stampo in pressa per il ripristino di rotture di lieve entità;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Eseguire il collaudo a freddo degli stampi pronti per il collaudo;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Mantenimento ordine e pulizia dell’area di lavoro di competenza e delle aree comuni;</p>
                    </div>
                    <div className="flex">
                        <p className="text-customBlack">- Utilizzare il sistema gestionale per registrare le ore di lavoro sulle commesse specifiche.</p>
                    </div>
                    <p className="text-customBlack font-extrabold pt-5">Requisiti fondamentali</p>
                    <p className="text-customBlack">Desideriamo entrare in contatto con candidati in possesso di diploma indirizzo tecnico oppure corsi di studio specifici per Tecnici CNC e con un’esperienza di almeno 3/5 anni nel ruolo. E’ richiesta la capacità di lettura disegno tecnico, utilizzo strumenti di misura, conoscenza di base di sistemi CAD/CAM, utilizzo di macchine utensili tradizionali e CNC. Costituisce titolo preferenziale la conoscenza degli stampi per materie plastiche e delle attrezzature specifiche. E’ gradita la conoscenza base dell’inglese tecnico. Completano il profilo dinamicità, flessibilità, puntualità, precisione, doti comunicative e di organizzazione del tempo, capacità di analisi e problem solving, disponibilità ad eventuali straordinari (all’occorrenza anche di sabato in funzione del carico di lavoro). Inquadramento e retribuzione saranno commisurati all’effettiva esperienza maturata.</p>
                </div>

                <div className=" w-[100%] md:w-[50%] flex justify-center  bg-customDarkGrey4" style={{paddingTop: '48px'}}>
                    <div style={{border: '2px solid #E5E7EB', paddingTop: '48px', paddingRight: '46px', paddingBottom: '70px', paddingLeft: '46px', height: 'fit-content'}}>
                        <h3 className="text-customBlack font-extrabold text-center text-3xl">Richiesta informazioni</h3>
                        <p className="text-customBlack text-center">Per ricevere ulteriori informazioni utilizzate la form qui sotto.</p>
                        <p className="text-customBlack text-center">Tutti i campi sono obbligatori.</p>
                        <div className="w-[100%] flex justify-between" style={{marginBottom: '10px', paddingTop: '34px'}}>
                            <input type="text" className="w-[49%]" ref={inputNameRef} placeholder="Nome*" style={{border: '2px solid #E5E7EB', paddingTop: '6px', paddingRight: '10px', paddingBottom: '6px', paddingLeft: '10px', color: 'black'}}/>
                            <input type="text" className="w-[49%]" ref={inputSurnameRef} placeholder="Cognome*" style={{border: '2px solid #E5E7EB', paddingTop: '6px', paddingRight: '10px', paddingBottom: '6px', paddingLeft: '10px', color: 'black'}}/>
                        </div>
                        <div className="w-[100%] flex justify-between" style={{marginBottom: '10px'}}>
                            <input type="text" className="w-[49%]" ref={inputEmailRef} placeholder="Email*" style={{border: '2px solid #E5E7EB', paddingTop: '6px', paddingRight: '10px', paddingBottom: '6px', paddingLeft: '10px', color: 'black'}}/>
                            <input type="text" className="w-[49%]" ref={inputBusinessRef} placeholder="Telefono*" style={{border: '2px solid #E5E7EB', paddingTop: '6px', paddingRight: '10px', paddingBottom: '6px', paddingLeft: '10px', color: 'black'}}/>
                        </div>
                        <div className="w-[100%]">
                            <input type="file" placeholder="Messaggio*" ref={inputMessageRef} style={{border: '2px solid #E5E7EB', paddingTop: '6px', paddingRight: '10px', paddingBottom: '6px', paddingLeft: '10px', width: '100%'}}/>
                        </div>
                
                        <div className="flex w-[100%]" style={{marginBottom: '20px', marginTop: '20px'}}>
                            <input type="checkbox" ref={checkboxref} style={{marginRight: '5px'}}/> 
                            <p className="text-customBlack">acconsento al trattamento dei dati personali*</p>
                        </div>
                        <div className="flex justify-center" onClick={() => handleSubmit()}>
                            <Button text="Invia Curriculum" onClick={() => handleSubmit()}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
