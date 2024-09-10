import React from 'react'

const DogSelection = () => {

    const data = [
        {
          symptoms: [
            "Animal trying to bite / जानवर काटने की कोशिश करता है",
            "Avoid drinking water / पानी पीने से बचता है",
            "Paralysis of lower jaw / निचले जबड़े का पक्षाघात",
          ],
          problem: "Rabies / रेबीज",
          treatment: [
            "Till date there is no treatment / अब तक कोई इलाज नहीं है",
            "Only vaccination is pre required step / केवल टीकाकरण पूर्व आवश्यक कदम है",
            "Contact doctor / डॉक्टर से संपर्क करें",
          ],
        },
        {
          symptoms: [
            "Fever/High body temperature / बुखार/उच्च शरीर का तापमान",
            "Loss of appetite(not eating food properly) /भूख कम होना (ठीक से भोजन नहीं खाना) ",
            "Nasal Discharge(runny nose) / नाक से पानी बहना",
          ],
          problem: "Distemper(infectious viral disease) / डिस्टेंपर (संक्रामक वायरल रोग)",
          treatment: [
            "Antibiotics / एंटीबायोटिक्स",
            "Fluid diet / तरल आहार",
            "Vaccination / टीकाकरण",
            "Contact doctor / डॉक्टर से संपर्क करें",
          ],
        },
        {
          symptoms: [
            "Vomiting / उल्टी",
            "Diarrhoea with blood(Diarrhoea - loose motion) / खून के साथ दस्त (दस्त - ढीला मल)",
            "Anorexia(eating less food) / अनोरेक्सिया (कम भोजन खाना)",
          ],
          problem: "Parvo Virus / पार्वो वायरस",
          treatment: [
            "Fluid diet / तरल आहार",
            "Antibiotics / एंटीबायोटिक्स",
            "Haemostat / हीमोस्टैट",
            "Pre pro biotics / प्री प्रो बायोटिक्स",
            "Contact doctor / डॉक्टर से संपर्क करें",
          ],
        },
        {
          symptoms: [
            "Fever / बुखार",
            "Lethargy (lack of energy or tired) / सुस्ती (ऊर्जा की कमी या थका हुआ)",
            "Jaundice (yellow color in eyes or body) / पीलिया (आंखों या शरीर में पीला रंग)",
            "Constipation / कब्ज",
          ],
          problem: "Hepatitis / हेपेटाइटिस",
          treatment: [
            "Liver / लीवर",
            "Multivitamin / मल्टीविटामिन",
            "Vaccination / टीकाकरण",
            "Contact doctor / डॉक्टर से संपर्क करें",
          ],
        },
        {
          symptoms: [
            "Abdominal swelling (stomach swelling) / पेट की सूजन",
            "Weakness / कमजोरी",
            "Appears to look skinny / दुबला दिखाई देता है",
          ],
          problem: "Ascites / एस्साइट्स",
          treatment: [
            "Paracentesis / पैरासेन्टेसिस",
            "Fluid therapy / तरल थेरेपी",
            "Avoid protein diet / प्रोटीन आहार से बचें",
          ],
        },
        {
          symptoms: [
            "Small insects or dots on the outside the body of animal /जानवर के शरीर के बाहर छोटे कीड़े या डॉट्स",
            "Plaar, lice, mites, ticks / प्लायर, जूँ, निदा, टिक्स",
          ],
          problem: "Ectoparasites / एक्टोपैरासाइट्स",
          treatment: [
            "Malathion (apply on body) / मालाथियन (शरीर पर लगाएं)",
            "Sumithion / सुमिथियन",
            "Deltamethrion / डेल्टामेथ्रियन",
          ],
        },
        {
          symptoms: [
            "Worms or insects present inside the body and suck blood / शरीर के अंदर मौजूद कीड़े या कीड़े जो खून चूसते हैं",
            "Example= jape worm, hook worm, whip worm",
          ],
          problem: "Endo-parasides / एंडो-पैरासाइट्स",
          treatment: [
            "Oral or injection / ओरल या इंजेक्शन",
            "Albendazole / अल्बेंडाज़ोल",
            "Fenbendazole / फेनबेंडाज़ोल",
            "Moxidectin / मोक्साइडैक्टिन",
          ],
        },
      ];

      const DiseaseCard  = ({ symptoms, problem, treatment }) => {
        return (
          <div className="flex flex-col md:flex-row bg-slate-300 rounded-lg shadow-md p-4 mb-8">
            <div className="md:w-1/2 p-10">
              <h3 className="text-2xl font-bold mb-2">Symptoms</h3>
              <ul className="list-disc p-4">
                {symptoms.map((symptom, index) => (
                  <li key={index} className='mb-2'>{symptom}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 p-10">
              <h3 className="text-2xl font-bold mb-2">Problem</h3>
              <p className="text-2xl font-semibold">{problem}</p>
              <h3 className="text-xl font-bold mt-4">Treatment</h3>
              <ul className="list-disc pl-4">
                {treatment.map((treatmentItem, index) => (
                  <li key={index} className='mb-2'>{treatmentItem}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      };

  
    return (
        <div className="container mx-auto p-4">
          {data.map((disease, index) => (
            <DiseaseCard key={index} {...disease} />
          ))}
        </div>
      );

}

export default DogSelection;
