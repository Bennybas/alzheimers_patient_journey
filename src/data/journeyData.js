import { lab, link } from "d3";

export const journeyData = [
    {
      number: 1,
      title: "Initial Assessment",

      
      description: "Critical period where primary care physicians play a key role in initial detection and assessment.",
    actions: [
        { 
          name: "Symptom Recognition", 
          content: "Family or patient notices memory lapses, confusion, or behavioral changes." 
        },
        { 
          name: "Primary Care Visit", 
          content: "Discussion of memory and cognitive symptoms, physical exam, and basic screening with PCP." 
        },
        { 
          name: "Cognitive Assessment", 
          content: "Cognitive testing like MMSE (Mini-Mental State Examination) ,MoCA (Montreal Cognitive Assessment) are performed by the PCP" 
        },
        { 
          name: "Referral Decision", 
          content: "PCP refers Patients to a Neurologist for further evaluation if Alzheimer's is suspected." 
        }
      ],
      metrics:[
        { value: "85%", label: "Initial PCP Diagnoses", link:{ url:"https://www.alz.org/media/Documents/alzheimers-facts-and-figures.pdf#page=63", name:"Reference" }},
        { value: "18 Months", label: "Time to Referral", link:{ url:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6745869/", name:"Reference" }},
        { value: "13%", label: "Misdiagnosis Rate", link:{ url:"https://pubmed.ncbi.nlm.nih.gov/33136176/", name:"Reference" }},
        { value: "10%", label: "Prevalence of Subjective Cognitive Decline (SCD)", link:{ url:"https://www.alz.org/media/Documents/alzheimers-facts-and-figures.pdf#page=25", name:"Reference" }},
        { value: "8%", label: "Early MCI Detection", link:{ url:"https://pubmed.ncbi.nlm.nih.gov/31905546/", name:"Reference" }}
      ]
      ,
      barriers: {
        physician: [
          {
            subpoints: [
              {
                text: "Early-stage diagnostic uncertainty and a lack of standardized screening protocols lead to underdiagnosis and delayed care.",
              },
              {
                text: "Limited time for comprehensive assessment and discomfort in making a diagnosis reduce diagnostic accuracy.",
              },
              {
                text: "Complexity of differential diagnosis increases challenges for physicians in providing timely and accurate diagnoses.",
              },
            ],
          },
        ],
        system: [
          {
            subpoints: [
              {
                text: "Inadequate cognitive assessment tools and insufficient diagnostic support contribute to misdiagnosis and delays.",
              },
              {
                text: "Limited specialist referral networks, with many states experiencing shortages, hinder access to specialized care. 44% to 71% of PCPs report a lack of specialists, especially in rural and suburban areas",
              },
              {
                text: "Cognitive assessment and diagnosis remain fragmented, with gaps in support and coverage for patients.",
              },
            ],
          },
        ],
        patient: [
          {
            subpoints: [
              {
                text: "Delayed symptom reporting and limited awareness of early signs contribute to later-stage diagnoses.",
              },
              {
                text: "Fear and stigma associated with diagnosis prevent many patients from seeking timely help.",
              },
              {
                text: "Access to healthcare barriers, including geographic and financial challenges, further complicate diagnosis and care.",
              },
            ],
          },
        ],
      },
      
      findings: [
        {
          description: "Missed Diagnoses in Primary Care",
          subpoints: [
            "High rate of missed diagnoses in primary care."
          ]
        },
        {
          description: "Early Detection Tools",
          subpoints: [
            "Critical need for early detection tools."
          ]
        },
        {
          description: "Impact of Delayed Diagnosis",
          subpoints: [
            "Significant impact of delayed diagnosis."
          ]
        },
        {
          description: "Standardized Assessment",
          subpoints: [
            "Importance of standardized assessment."
          ]
        }
      ]      
    },
    {
      number: 2,
      title: "Diagnosis and Assessment",
      description: "Detailed diagnostic process including the use of biomarkers and differential diagnosis methods.",
      actions: [
        { 
          name: "Specialist Consultation", 
          content: "Neurologist or geriatric specialist reviews cognitive symptoms and medical history." 
        },
        { 
          name: "Comprehensive Testing", 
          content: "Neurologist also performs cognitive tests like MMSE, MoCA and neuropsychological evaluations." 
        },
        { 
          name: "Biomarker Analysis", 
          content: "Brain imaging (MRI, CT, or PET) and CSF(Cerebrospinal Fluid) or blood tests to detect Alzheimer's-related proteins (beta-amyloid, tau)." 
        },
        { 
          name: "Diagnosis & Staging", 
          content: "Confirmation of Alzheimer’s type, with staging to assess disease severity." 
        }
      ],
      metrics: [
        { value: "22 weeks", label: "Average waiting time from referral to  diagnosis", link: { url: "https://www.alzheimers.org.uk/news/2024-08-08/national-audit-dementia-memory-services-spotlight-audit-2023-24", name: "Reference" }},
        { value: "53%", label: "Rate of Follow-Up After Initial Screening", link: { url: "https://agsjournals.onlinelibrary.wiley.com/doi/10.1111/jgs.19302?af=R", name: "Reference" }},
        { value: "5.5 years", label: "Average time from onset of symptoms to correct diagnosis", link:{ url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC8461696/", name:"Reference" }},
        {value:'2',label:"Average number of visits required for diagnosis",link:{url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC10357118/",name: "Reference" }},
        {value:'79%',label:"MMSE Cognitive Screening Usage Rate",link:{url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC10357118/",name: "Reference" }}
      ]
      ,
      barriers: {
        physician: [
          {
            subpoints: [
              {
                text: "15-30% of those meeting Alzheimer's criteria don’t have Alzheimer's brain changes, complicating diagnosis.",
              },
              {
                text: "The significant overlap in symptoms and characteristics among different types of dementia poses challenges in achieving an accurate diagnosis and proper staging of Alzheimer's disease",
              },
            ]
          }
        ],
        system: [
          {
            subpoints: [
              {
                text: "High costs and limited insurance coverage for diagnostic tools like PET scans and biomarker tests hinder timely diagnosis.",
              },
              {
                text: "Complex authorization processes and limited Medicare coverage delay diagnosis and access to necessary treatments.",
              },
              {
                text: "Access to amyloid tracer manufacturing facilities (cyclotrons) is not uniform across the US. This can limit access to PET scans for patients in these areas.",
              },
            ]
          }
        ],
        patient: [
          {
            subpoints: [
              {
                text: "The high financial burden of testing and transportation challenges limit patient access to diagnostic services.",
              },
              {
                text: "The emotional impact of diagnosis adds to the challenges of managing the condition effectively.",
              },
            ]
          }
        ]
      }
      ,
      findings: [
        {
          description: "Access to Diagnostic Resources",
          subpoints: [
            "Low access to affordable diagnostic resources."
          ]
        },
        {
          description: "Specialist Availability Disparity",
          subpoints: [
            "Significant disparity in specialist availability."
          ]
        },
        {
          description: "Diagnostic Criteria Complexity",
          subpoints: [
            "Complex diagnostic criteria impact accuracy."
          ]
        },
        {
          description: "Insurance Limitations",
          subpoints: [
            "Insurance limitations affect diagnostic access."
          ]
        }
      ]      
    },
    {
      number: 3,
      title: "Treatment and Ongoing Management",
      description: "Long-term treatment, monitoring, and management of Alzheimer's disease and other dementias.",
      actions: [
        { 
          name: "Treatment Planning", 
          content: "Develop a care plan that includes FDA-approved medications like cholinesterase inhibitors (e.g., leqembi,donepezil, rivastigmine, galantamine) for mild to moderate stages, and memantine for moderate to severe stages. Incorporate lifestyle recommendations, such as regular physical activity and brain-healthy nutrition." 
        },
        { 
          name: "Implementation", 
          content: "Start prescribed medications, establish consistent routines, and introduce targeted cognitive activities (e.g., memory exercises, social interactions) tailored to the patient's cognitive level." 
        },
        { 
          name: "Monitoring Protocol", 
          content: "Conduct regular assessments (e.g., MMSE or MoCA) every 6-12 months, monitor for medication side effects, and adjust treatment if symptoms progress or new side effects emerge." 
        },
        { 
          name: "Care Coordination", 
          content: "Facilitate coordination among neurologists, primary care, family caregivers, and Alzheimer's support services to manage ongoing needs, home safety, and caregiver education and support." 
        }
      ],
      metrics: [
        { value: "18.6 months", label: "Average Time to start Treatment after Diagnosis", link: { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8359937/", name: "Reference" }},
        { value: "76%", label: "Agitation", link: { url: "https://www.alz.org/media/Documents/alzheimers-facts-and-figures.pdf#page=15", name: "Reference" }},
        { value: "Donepezil", label: "Most Prescribed Drug", link: { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4163299", name: "Reference" }},
        { value: "51.8%", label: "Avg Hospitalization Rate", link: { url: "https://www.alz.org/media/Documents/alzheimers-facts-and-figures.pdf#page=63", name: "Reference" }},
        { value: "15.94%", label: "Average Non Adherence %", link: { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11573516", name: "Reference" }},
      ]
      ,
      barriers: {
        physician: [
          {
            subpoints: [
              {
                text: "The complexity of treatment protocols, with many Alzheimer's patients having multiple chronic conditions, challenges diagnosis and management.",
              },
              {
                text: "Monitoring requirements for treatments like anti-amyloid drugs create additional challenges for physicians, with ARIA occurring in a significant percentage of patients.",
              },
              {
                text: "Limited treatment experience among healthcare providers affects the ability to manage complex cases effectively.",
              },
            ],
          },
        ],
        system: [
          {
            subpoints: [
              {
                text: "The limited capacity of infusion centers to deliver the treatment contribute to long treatment initiation times.",
              },
              {
                text: "Medicare/Medicaid coverage is limited, and long-term care costs are not adequately covered by Medicare, creating resource strain.",
              },
              {
                text: "The lack of access to treatment centers, along with resource-intensive monitoring requirements, complicates timely and effective care.",
              },
            ],
          },
        ],
        patient: [
          {
            subpoints: [
              {
                text: "The high costs associated with Alzheimer's care, including expensive medications create financial barriers for patients and the healthcare system.",
              },
              {
                text: "Patients and caregivers face difficulties understanding complex diagnostic procedures, impacting adherence.",
              },
              {
                text: "Medications can cause adverse effects like nausea, dizziness, gastrointestinal issues, Insomnia leading to discontinuation.",
              },
            ],
          },
        ],
      }
      ,      
      findings: [
        {
          description: "Financial Burden",
          subpoints: [
            "High financial burden on families and caregivers."
          ]
        },
        {
          description: "Treatment Complexity",
          subpoints: [
            "Complexity of treatment plans with multiple chronic conditions."
          ]
        },
        {
          description: "Limited Access to Treatment",
          subpoints: [
            "Limited accessibility to specialized treatment centers."
          ]
        },
        {
          description: "Caregiver Dependency",
          subpoints: [
            "Significant reliance on unpaid caregivers."
          ]
        }
      ]
      
    }
  ];
  
  export default journeyData;
  