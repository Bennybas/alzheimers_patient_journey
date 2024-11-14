export const journeyData = [
    {
      number: 1,
      title: "Initial Assessment",

      
      description: "Critical period where primary care physicians play a key role in initial detection and assessment.",
    //   actions: [
    //     "Symptom Recognition",
    //     "Primary Care Visit",
    //     "Cognitive Assessment",
    //     "Referral Decision"
    //   ],
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
            description: "Diagnostic uncertainty in early stages",
            subpoints: [
              "Only 8% of MCI cases are diagnosed.",
              "Nearly 40% of PCPs are uncomfortable making a diagnosis"
            ]
          },
          { description: "Limited time for comprehensive assessment" },
          {
            description: "Lack of standardized screening protocols",
            subpoints: [
              "Only 0.1% of over 200,000 clinicians and practices have diagnosis rates within the expected range"
            ]
          },
          { description: "Complexity of differential diagnosis" }
        ],
        system: [
          { description: "Inadequate cognitive assessment tools" },
          {
            description: "Limited specialist referral networks",
            subpoints: [
              "20 U.S. states are 'Dementia Neurology Deserts",
              "55% of PCPs report a shortage of specialists."
            ]
          },
          { description: "Insufficient diagnostic support" }
        ],
        patient: [
          { description: "Delayed symptom reporting" },
          { description: "Fear and stigma associated with diagnosis" },
          {
            description: "Limited awareness of early signs",
            subpoints: ["54% of individuals with SCD haven't seen a healthcare provider."]
          },
          { description: "Access to healthcare barriers" }
        ]
      },
      findings: [
        "High rate of missed diagnoses in primary care",
        "Critical need for early detection tools",
        "Significant impact of delayed diagnosis",
        "Importance of standardized assessment"
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
            description: "Complex diagnostic criteria",
            subpoints: [
              "15-30% of those meeting Alzheimer's criteria don’t have Alzheimer's brain changes.",
              "5-10% have vascular dementia alone, but it’s usually mixed.",
              "5% of older adults with dementia have only Lewy body dementia, but most also have Alzheimer's changes.",
              "The overlap of dementia types complicates diagnosis, even with established criteria."
            ]
          },
          { description: "Limited biomarker testing access" },
          {
            description: "Varied expertise in AD diagnosis",
            subpoints: [
              "85% of dementia diagnoses are made by non-specialists",
              "Only 0.1% of clinicians/practices meet expected diagnosis rates",
              "Less than 1% of advanced practice clinicians have gerontology certification.",
              "Most initial diagnoses are made by providers without specialized dementia training, leading to variability in diagnostic accuracy."
            ]
          },
          { description: "Challenges in disease staging" }
        ],
        system: [
          { description: "High diagnostic testing costs",
            subpoints: ["Medicare reimburses $268 for cognitive assessments, but broader tests like PET scans are expensive and not always covered."]
          },
          {
            description: "Limited specialist availability",
            subpoints: [
              "44% of PCPs in large cities and 54% in suburban areas report a lack of specialists.s",
              "63% of PCPs in small cities/towns and 71% in rural areas report the same."
            ]
          },
          {
            description: "Insurance coverage restrictions",
            subpoints: [
              "Medicare does not cover long-term nursing home care",
              "Coverage for biomarker tests and diagnostic tools varies by plan."
            ]
          },
          { description: "Complex authorization processes",
            subpoints: ["Prior authorization is required for some tests and medications, leading to delays in diagnosis and treatment."]
          }
        ],
        patient: [
          { description: "Financial burden of testing" },
          { description: "Transportation challenges" },
          { description: "Understanding complex procedures" },
          { description: "Emotional impact of diagnosis" }
        ]
      },
      findings: [
        "Low access to affordable diagnostic resources",
        "Significant disparity in specialist availability",
        "Complex diagnostic criteria impact accuracy",
        "Insurance limitations affect diagnostic access"
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
            description: "Complex Treatment Protocols",
            subpoints: [
              "90% of Medicare beneficiaries with Alzheimer's also have at least one other chronic condition.",
              "Over 60% of Alzheimer's patients take multiple medications for dementia, highlighting the complexity of treatment."
            ]
          },
          {
            description: "ARIA Monitoring Requirements",
            subpoints: [
              "ARIA occurs in 20-40% of patients treated with anti-amyloid drugs like Aducanumab and Lecanemab, with ARIA-E affecting 10-30% and ARIA-H affecting 5-10%."
            ]
          },
          { description: "Limited Treatment Experience" },
          { description: "Care Coordination Challenges" }
        ],
        system: [
          { description: "High Treatment Costs",
            subpoints: [
                "Total cost of Alzheimer's care in 2024 is $360 billion (excluding unpaid caregiving",
                "Lecanemab costs $26,500 annually per patient, raising affordability concerns."]
          },
          {
            description: "Complex Reimbursement",
            subpoints: [
              "Medicare/Medicaid cover 64% of Alzheimer's-related costs",
              "Medicare doesn’t cover long-term nursing home care beyond 90 days"
            ]
          },
          { description: "Limited Access to Treatment Centers" },
          { description: "Resource-Intensive Monitoring",
            subpoints: ["Cognitive assessments are reimbursed at $246 to $266 per assessment"]
          }
        ],
        patient: [
          {
            description: "Significant Financial Burden",
            subpoints: [
              "Alzheimer's patients face $91 billion in out-of-pocket costs, 25% of total payments.",
              "Many seniors have limited savings, with 50% of Medicare beneficiaries age 65+ having $92,188 or less."
            ]
          },
          { description: "Treatment Adherence Challenges" },
          { description: "Side Effect Management" },
          {
            description: "Caregiver Burden",
            subpoints: [
              "Over 11 million Americans provide unpaid care, contributing 18.4 billion hours valued at $346.6 billion in 2023."
            ]
          }
        ]
      },
      findings: [
        "High financial burden on families and caregivers",
        "Complexity of treatment plans with multiple chronic conditions",
        "Limited accessibility to specialized treatment centers",
        "Significant reliance on unpaid caregivers"
      ]
    }
  ];
  
  export default journeyData;
  