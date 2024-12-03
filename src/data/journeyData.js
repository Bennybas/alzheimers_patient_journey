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
          content: "Cognitive testing like MMSE (Mini-Mental State Examination) MMSE (Mini-Mental State Examination) ,MoCA (Montreal Cognitive Assessment) are performed by the PCP" 
        },
        { 
          name: "Referral Decision", 
          content: "PCP refers to a neurologist for further evaluation if Alzheimer's is suspected." 
        }
      ],
      metrics: [
        { value: "85%", label: "Initial PCP Diagnoses" },
        { value: "10%", label: "Prevalence of Subjective Cognitive Decline (SCD)" },
        { value: "8%", label: "Early MCI Detection" },
        { value: "50%", label: "Diagnosis Delay Rate" },
        { value: "54%", label: "Underuse of Diagnostic Services" }
      ],
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
                text: "Limited specialist referral networks, with many states experiencing shortages, hinder access to specialized care.",
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
        { value: "6.9 million Americans", label: "Prevalence of Alzheimer's Dementia" },
        { value: "50%", label: "PCP referral Delays" },
        { value: "8%", label: "Leqembi Eligibility" },
        { value: "910,000 people aged 65+", label: "Incidence" },
        { value: "$7,264", label: "Annual Medicare Cost Increase for Specialist Diagnosis" }

      ],
      barriers: {
        physician: [
          {
            subpoints: [
              
              {
                text: "15-30% of those meeting Alzheimer's criteria don’t have Alzheimer's brain changes, complicating diagnosis.",
              },
              {
                text: "85% of dementia diagnoses are made by non-specialists, leading to variability in accuracy due to limited specialized training.",
              },
              {
                text: "Limited access to biomarker testing and overlap of dementia types hinder precise diagnosis and staging.",
              },
            ]
          }
            
        ],
        system:[ { subpoints: [
          {
            text: "High costs and limited insurance coverage for diagnostic tools like PET scans and biomarker tests hinder timely diagnosis.",
          },
          {
            text: "44% to 71% of PCPs report a lack of specialists, especially in rural and suburban areas, impacting patient access to care.",
          },
          {
            text: "Complex authorization processes and limited Medicare coverage delay diagnosis and access to necessary treatments.",
          },
        ]}
      ],
        
        patient: [
          {
            subpoints: [
              {
                text: "The high financial burden of testing and transportation challenges limit patient access to diagnostic services.",
              },
              {
                text: "Patients and caregivers face difficulties understanding complex diagnostic procedures, impacting adherence.",
              },
              {
                text: "The emotional impact of diagnosis adds to the challenges of managing the condition effectively.",
              },
            ]
            
          }
        ]
      },
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
        { value: "$43,644", label: "Annual Cost of Care" },
        { value: "$26,500", label: "Annual cost of Leqembi per patient" },
        { value: "31 hrs", label: "Monthly Caregiver Time" },
        { value: "36 deaths per 100,000 people", label: "Death Rate" },
        { value: "61%", label: "Life Expectancy Impact" },
        { value: "69.20%", label: "Non-Adherence Percentage" },
        { value: "76%", label: "Agitation" }

      ],
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
                text: "The high costs associated with Alzheimer's care, including expensive medications like Lecanemab, create financial barriers for patients and the healthcare system.",
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
                text: "The high financial burden of testing and transportation challenges limit patient access to diagnostic services.",
              },
              {
                text: "Patients and caregivers face difficulties understanding complex diagnostic procedures, impacting adherence.",
              },
              {
                text: "The emotional impact of diagnosis adds to the challenges of managing the condition effectively.",
              },
            ],
          },
        ],
      },      
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
  