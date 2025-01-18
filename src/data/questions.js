import { QuizDomain } from '../constants/quizDomains';

export const questions = [
  {
    id: 1,
    domain: QuizDomain.Disabilities,
    text: "Which of the following is a characteristic of dyslexia?",
    options: [
      "Difficulty with motor control",
      "Challenges with reading and word recognition",
      "Complete inability to read",
      "Problems with hearing"
    ],
    correctAnswer: 1,
    explanation: "Dyslexia primarily affects reading and word recognition, making it challenging to process written information efficiently.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
  },
  {
    id: 3,
    domain: QuizDomain.Standards,
    text: "What does WCAG stand for?",
    options: [
      "World Computer Access Guidelines",
      "Web Content Accessibility Guidelines",
      "Web Compliance Access Group",
      "World Content Accessibility Group"
    ],
    correctAnswer: 1,
    explanation: "WCAG stands for Web Content Accessibility Guidelines, which provide technical specifications for making web content accessible.",
    sourceLink: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    id: 4,
    domain: QuizDomain.Disabilities,
    text: "What is the difference between temporary and permanent disabilities?",
    options: [
      "Temporary disabilities never require accommodations",
      "Permanent disabilities cannot be accommodated",
      "Temporary disabilities have a limited duration while permanent ones are long-term",
      "There is no difference in terms of accessibility needs"
    ],
    correctAnswer: 2,
    explanation: "Temporary disabilities have a limited duration but may require similar accommodations as permanent disabilities during that time.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
  },
  {
    id: 5,
    domain: QuizDomain.Accessibility,
    text: "What is the role of ARIA labels?",
    options: [
      "To make websites look better",
      "To provide additional styling",
      "To provide context to assistive technologies",
      "To improve website performance"
    ],
    correctAnswer: 2,
    explanation: "ARIA labels provide additional context and information to assistive technologies, helping users understand the purpose and function of elements.",
    sourceLink: "https://www.w3.org/WAI/ARIA/apg/"
  },
  {
    id: 6,
    domain: QuizDomain.Standards,
    text: "Which level of WCAG compliance is legally required for most government websites?",
    options: [
      "Level A",
      "Level AA",
      "Level AAA",
      "No specific level"
    ],
    correctAnswer: 1,
    explanation: "Level AA is typically the required level of WCAG compliance for government websites and many organizations.",
    sourceLink: "https://www.w3.org/WAI/WCAG2AA-Conformance"
  },
  {
    id: 7,
    domain: QuizDomain.Disabilities,
    text: "What is color blindness?",
    options: [
      "Complete inability to see any colors",
      "Difficulty distinguishing between certain colors",
      "Temporary loss of color vision",
      "Inability to see bright colors"
    ],
    correctAnswer: 1,
    explanation: "Color blindness typically involves difficulty distinguishing between certain colors, not a complete inability to see color.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
  },
  {
    id: 9,
    domain: QuizDomain.Standards,
    text: "What is the purpose of an Accessibility Statement?",
    options: [
      "To list all accessibility features",
      "To comply with legal requirements only",
      "To provide information about accessibility measures and contact methods",
      "To showcase technical implementations"
    ],
    correctAnswer: 2,
    explanation: "An Accessibility Statement provides information about a website's accessibility features and how users can get help with accessibility issues.",
    sourceLink: "https://www.w3.org/WAI/planning/statements/"
  },
  {
    id: 10,
    domain: QuizDomain.Disabilities,
    text: "What is the social model of disability?",
    options: [
      "A medical approach to treating disabilities",
      "A view that society creates barriers for people with impairments",
      "A classification system for disabilities",
      "A rehabilitation program"
    ],
    correctAnswer: 1,
    explanation: "The social model of disability views disability as the result of society's barriers rather than individual impairments.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
  },
  {
    id: 11,
    domain: QuizDomain.Disabilities,
    text: "What is cognitive accessibility?",
    options: [
      "Making content visually appealing",
      "Making content easy to understand and navigate",
      "Making content load faster",
      "Making content printable"
    ],
    correctAnswer: 1,
    explanation: "Cognitive accessibility focuses on making content understandable and navigable for people with different cognitive abilities.",
    sourceLink: "https://www.w3.org/WAI/cognitive/"
  },
  {
    id: 12,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of keyboard navigation?",
    options: [
      "To save mouse battery life",
      "To provide alternative input methods for users who can't use a mouse",
      "To make websites faster",
      "To improve typing skills"
    ],
    correctAnswer: 1,
    explanation: "Keyboard navigation is essential for users who cannot use a mouse, including those with motor disabilities or who use screen readers.",
    sourceLink: "https://www.w3.org/WAI/perspective-videos/keyboard/"
  },
  {
    id: 13,
    domain: QuizDomain.Standards,
    text: "What is Section 508?",
    options: [
      "A web browser plugin",
      "A federal law requiring accessibility for electronic and information technology",
      "A coding standard",
      "A type of assistive technology"
    ],
    correctAnswer: 1,
    explanation: "Section 508 is a U.S. federal law that requires federal agencies to make their electronic and information technology accessible.",
    sourceLink: "https://www.section508.gov/"
  },
  {
    id: 14,
    domain: QuizDomain.Disabilities,
    text: "What is assistive technology?",
    options: [
      "Any technology that helps with daily tasks",
      "Software that blocks ads",
      "Technology that specifically helps people with disabilities",
      "High-speed internet connections"
    ],
    correctAnswer: 2,
    explanation: "Assistive technology refers to devices, software, and tools specifically designed to help people with disabilities use computers and access content.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
  },
  {
    id: 15,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of sufficient color contrast?",
    options: [
      "To make websites more attractive",
      "To save printer ink",
      "To ensure text is readable for users with visual impairments",
      "To reduce eye strain only"
    ],
    correctAnswer: 2,
    explanation: "Sufficient color contrast ensures that text and images are readable for users with various visual conditions, including color blindness.",
    sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
  },
  {
    id: 16,
    domain: QuizDomain.Standards,
    text: "What is the ADA?",
    options: [
      "American Digital Association",
      "Americans with Disabilities Act",
      "Accessible Design Alliance",
      "Application Development Association"
    ],
    correctAnswer: 1,
    explanation: "The Americans with Disabilities Act (ADA) is a civil rights law that prohibits discrimination against individuals with disabilities.",
    sourceLink: "https://www.ada.gov/"
  },
  {
    id: 17,
    domain: QuizDomain.Disabilities,
    text: "What is motor impairment?",
    options: [
      "Difficulty with memory",
      "Problems with vision",
      "Challenges with physical movement and control",
      "Issues with hearing"
    ],
    correctAnswer: 2,
    explanation: "Motor impairment affects physical movement and control, which can impact how someone uses computers and mobile devices.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
  },
  {
    id: 18,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of captions in videos?",
    options: [
      "To improve video quality",
      "To provide text alternatives for audio content",
      "To reduce file size",
      "To add visual effects"
    ],
    correctAnswer: 1,
    explanation: "Captions provide text alternatives for audio content, making videos accessible to deaf or hard of hearing users.",
    sourceLink: "https://www.w3.org/WAI/media/av/"
  },
  {
    id: 19,
    domain: QuizDomain.Standards,
    text: "What is an accessibility audit?",
    options: [
      "A financial review",
      "A security check",
      "An evaluation of accessibility compliance",
      "A performance test"
    ],
    correctAnswer: 2,
    explanation: "An accessibility audit evaluates how well a website or application meets accessibility standards and guidelines.",
    sourceLink: "https://www.w3.org/WAI/test-evaluate/"
  },
  {
    id: 20,
    domain: QuizDomain.Disabilities,
    text: "What is neurodiversity?",
    options: [
      "A medical condition",
      "Variations in how brains function and process information",
      "A type of therapy",
      "A learning style"
    ],
    correctAnswer: 1,
    explanation: "Neurodiversity recognizes that neurological differences are natural variations in human brain function rather than deficits.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
  },
  {
    id: 21,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of ARIA landmarks?",
    options: [
      "To make websites look better",
      "To help screen readers navigate page structure",
      "To improve page loading speed",
      "To add visual effects"
    ],
    correctAnswer: 1,
    explanation: "ARIA landmarks help screen reader users understand and navigate the structure of web pages by defining different regions of content.",
    sourceLink: "https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/"
  },
  {
    id: 22,
    domain: QuizDomain.Standards,
    text: "What is WCAG?",
    options: [
      "Web Content Accessibility Guidelines",
      "World Computer Access Group",
      "Web Coding Advisory Group",
      "Website Content Analysis Guide"
    ],
    correctAnswer: 0,
    explanation: "WCAG (Web Content Accessibility Guidelines) provides technical specifications for making web content accessible.",
    sourceLink: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },

  {
    id: 24,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of alt text?",
    options: [
      "To improve SEO rankings",
      "To make images load faster",
      "To provide text descriptions of images",
      "To reduce file size"
    ],
    correctAnswer: 2,
    explanation: "Alt text provides text alternatives for images, making visual content accessible to screen reader users and when images fail to load.",
    sourceLink: "https://www.w3.org/WAI/tutorials/images/"
  },
  {
    id: 25,
    domain: QuizDomain.Standards,
    text: "What is EN 301 549?",
    options: [
      "A U.S. accessibility law",
      "A European accessibility standard",
      "A web development framework",
      "An assistive technology protocol"
    ],
    correctAnswer: 1,
    explanation: "EN 301 549 is the European standard for digital accessibility requirements in public procurement.",
    sourceLink: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
  },

  {
    id: 27,
    domain: QuizDomain.Accessibility,
    text: "What is responsive design?",
    options: [
      "Making websites load quickly",
      "Adapting layout to different screen sizes and devices",
      "Adding animations to websites",
      "Using bright colors"
    ],
    correctAnswer: 1,
    explanation: "Responsive design ensures content is accessible and usable across different devices and screen sizes.",
    sourceLink: "https://www.w3.org/WAI/perspective-videos/responsive/"
  },
  {
    id: 29,
    domain: QuizDomain.Disabilities,
    text: "What is ADHD?",
    options: [
      "A visual impairment",
      "A hearing disorder",
      "A neurodevelopmental condition affecting attention and behavior",
      "A mobility impairment"
    ],
    correctAnswer: 2,
    explanation: "ADHD (Attention Deficit Hyperactivity Disorder) affects attention, impulse control, and activity levels, which can impact how people interact with content.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
  },
  {
    id: 30,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of semantic HTML?",
    options: [
      "To make websites look better",
      "To improve SEO only",
      "To provide meaning and structure to content",
      "To make websites load faster"
    ],
    correctAnswer: 2,
    explanation: "Semantic HTML provides meaning and structure to web content, making it more accessible to assistive technologies and easier to understand.",
    sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
  },
  {
    id: 31,
    domain: QuizDomain.Standards,
    text: "What is ATAG?",
    options: [
      "Authoring Tool Accessibility Guidelines",
      "Advanced Technology Access Group",
      "Assistive Technology Advisory Guide",
      "Accessible Testing and Guidance"
    ],
    correctAnswer: 0,
    explanation: "ATAG provides guidelines for making web authoring tools accessible and helping them produce accessible content.",
    sourceLink: "https://www.w3.org/WAI/standards-guidelines/atag/"
  },
  {
    id: 32,
    domain: QuizDomain.Disabilities,
    text: "What is RSI?",
    options: [
      "A software program",
      "A type of computer virus",
      "Repetitive Strain Injury",
      "Remote System Interface"
    ],
    correctAnswer: 2,
    explanation: "Repetitive Strain Injury (RSI) is a condition that can affect computer users, requiring alternative input methods or assistive technologies.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
  },
  {
    id: 33,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of skip links?",
    options: [
      "To improve page speed",
      "To bypass repeated content and navigate to main content",
      "To skip advertisements",
      "To improve SEO"
    ],
    correctAnswer: 1,
    explanation: "Skip links allow keyboard users to bypass repeated navigation elements and quickly access the main content of a page.",
    sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
  },
  {
    id: 34,
    domain: QuizDomain.Standards,
    text: "What is Section 255?",
    options: [
      "A web security standard",
      "A telecommunications accessibility law",
      "A coding convention",
      "A privacy regulation"
    ],
    correctAnswer: 1,
    explanation: "Section 255 requires telecommunications products and services to be accessible to people with disabilities.",
    sourceLink: "https://www.fcc.gov/section-255"
  },
  {
    id: 35,
    domain: QuizDomain.Disabilities,
    text: "What is photosensitive epilepsy?",
    options: [
      "Sensitivity to bright lights",
      "A condition triggered by flashing lights or patterns",
      "Color blindness",
      "Light sensitivity"
    ],
    correctAnswer: 1,
    explanation: "Photosensitive epilepsy is a condition where seizures can be triggered by flashing lights or certain visual patterns.",
    sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html"
  },
  {
    id: 36,
    domain: QuizDomain.Accessibility,
    text: "What is the role of focus indicators?",
    options: [
      "To make websites look better",
      "To show which element has keyboard focus",
      "To improve performance",
      "To track mouse movement"
    ],
    correctAnswer: 1,
    explanation: "Focus indicators help keyboard users understand which element currently has focus and can be interacted with.",
    sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
  },
  {
    id: 37,
    domain: QuizDomain.Standards,
    text: "What is an ICT Accessibility Plan?",
    options: [
      "A website design template",
      "A strategic document for implementing accessibility",
      "A coding standard",
      "A marketing plan"
    ],
    correctAnswer: 1,
    explanation: "An ICT Accessibility Plan outlines an organization's strategy for implementing and maintaining digital accessibility.",
    sourceLink: "https://www.w3.org/WAI/planning-and-managing/"
  },
  {
    id: 38,
    domain: QuizDomain.Disabilities,
    text: "What is aphasia?",
    options: [
      "A visual impairment",
      "A mobility issue",
      "A language processing disorder",
      "A hearing impairment"
    ],
    correctAnswer: 2,
    explanation: "Aphasia is a condition that affects how a person processes and uses language, impacting reading, writing, speaking, or understanding.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
  },
  {
    id: 39,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of form labels?",
    options: [
      "To make forms look better",
      "To provide visual decoration",
      "To identify form controls for all users",
      "To improve form submission speed"
    ],
    correctAnswer: 2,
    explanation: "Form labels provide clear identification of form controls for all users, including those using screen readers.",
    sourceLink: "https://www.w3.org/WAI/tutorials/forms/labels/"
  },
  {
    id: 40,
    domain: QuizDomain.Standards,
    text: "What is VPAT?",
    options: [
      "Virtual Private Access Terminal",
      "Voluntary Product Accessibility Template",
      "Visual Page Analysis Tool",
      "Video Player Accessibility Test"
    ],
    correctAnswer: 1,
    explanation: "VPAT is a document format used to report how a product or service meets accessibility standards.",
    sourceLink: "https://www.section508.gov/sell/vpat/"
  },
  {
    id: 41,
    domain: QuizDomain.Disabilities,
    text: "What is prosopagnosia?",
    options: [
      "Face blindness",
      "Color blindness",
      "Motion blindness",
      "Night blindness"
    ],
    correctAnswer: 0,
    explanation: "Prosopagnosia, or face blindness, is a condition where people have difficulty recognizing faces, which can affect how they interact with visual content.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
  },
  {
    id: 42,
    domain: QuizDomain.Standards,
    text: "What is Section 504?",
    options: [
      "A web development standard",
      "A civil rights law protecting against discrimination",
      "A technical specification",
      "A coding requirement"
    ],
    correctAnswer: 1,
    explanation: "Section 504 is a civil rights law that prohibits discrimination against individuals with disabilities in programs that receive federal funding.",
    sourceLink: "https://www.hhs.gov/sites/default/files/ocr/civilrights/resources/factsheets/504.pdf"
  },
  {
    id: 43,
    domain: QuizDomain.Accessibility,
    text: "What is color contrast ratio?",
    options: [
      "The brightness of colors on a screen",
      "The mathematical relationship between text and background colors",
      "The number of colors used in a design",
      "The saturation of colors"
    ],
    correctAnswer: 1,
    explanation: "Color contrast ratio is a measure of the difference in perceived brightness between two colors, ensuring text is readable for all users.",
    sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
  },
  {
    id: 44,
    domain: QuizDomain.Disabilities,
    text: "What is dyscalculia?",
    options: [
      "Difficulty with reading",
      "Difficulty with numbers and mathematics",
      "Difficulty with writing",
      "Difficulty with speech"
    ],
    correctAnswer: 1,
    explanation: "Dyscalculia is a learning difference that affects a person's ability to understand and work with numbers and mathematical concepts.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
  },
  {
    id: 45,
    domain: QuizDomain.Standards,
    text: "What is the Rehabilitation Act?",
    options: [
      "A medical treatment guideline",
      "A federal law protecting disability rights",
      "A web development framework",
      "A healthcare policy"
    ],
    correctAnswer: 1,
    explanation: "The Rehabilitation Act is a federal law that prohibits discrimination against people with disabilities in federal programs and activities.",
    sourceLink: "https://www.dol.gov/agencies/oasam/centers-offices/civil-rights-center/statutes/section-504-rehabilitation-act-of-1973"
  },
  {
    id: 46,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of captions?",
    options: [
      "To make videos look better",
      "To provide text alternatives for audio content",
      "To improve video quality",
      "To reduce file size"
    ],
    correctAnswer: 1,
    explanation: "Captions provide text alternatives for audio content in videos, making them accessible to deaf or hard of hearing users.",
    sourceLink: "https://www.w3.org/WAI/media/av/captions/"
  },
  {
    id: 47,
    domain: QuizDomain.Disabilities,
    text: "What is vestibular disorder?",
    options: [
      "A visual impairment",
      "A balance and spatial orientation condition",
      "A hearing impairment",
      "A cognitive disability"
    ],
    correctAnswer: 1,
    explanation: "Vestibular disorders affect balance and spatial orientation, which can make certain types of motion or animation on screens problematic.",
    sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions"
  },
  {
    id: 48,
    domain: QuizDomain.Standards,
    text: "What is ISO/IEC 40500?",
    options: [
      "A privacy standard",
      "The ISO standard version of WCAG 2.0",
      "A security protocol",
      "A coding convention"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 40500 is the International Organization for Standardization's adoption of WCAG 2.0 as an ISO standard.",
    sourceLink: "https://www.iso.org/standard/58625.html"
  },
  {
    id: 49,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of landmarks in web accessibility?",
    options: [
      "To improve website aesthetics",
      "To define regions of a page for navigation and structure",
      "To increase loading speed",
      "To add visual effects"
    ],
    correctAnswer: 1,
    explanation: "Landmarks define distinct regions of a web page, helping users with assistive technologies understand and navigate the page structure.",
    sourceLink: "https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/"
  },
  {
    id: 50,
    domain: QuizDomain.Disabilities,
    text: "What is auditory processing disorder?",
    options: [
      "Complete hearing loss",
      "Difficulty processing and interpreting auditory information",
      "Physical ear damage",
      "Sound sensitivity"
    ],
    correctAnswer: 1,
    explanation: "Auditory processing disorder affects how the brain processes auditory information, making it difficult to understand and interpret sounds and speech.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
  },
  {
    id: 51,
    domain: QuizDomain.Disabilities,
    text: "Cerebral palsy can create multiple disabilities such as visual, learning, hearing, speech, epilepsy, and intellectual disabilities. It is caused by:",
    options: [
      "A preventable and curable disease",
      "A communicable disease",
      "A degenerative condition",
      "Injury to the developing brain"
    ],
    correctAnswer: 3,
    explanation: "Cerebral palsy is caused by injury to the developing brain, which is the clinical definition of how one acquires the condition.",
    sourceLink: "https://www.cerebralpalsy.org/about-cerebral-palsy"
  },
  {
    id: 52,
    domain: QuizDomain.Accessibility,
    text: "What type of dog assists people with psychiatric disabilities by performing specific tasks such as interrupting harmful behaviors?",
    options: [
      "Psychiatric service dog",
      "Seeing eye dog",
      "Mobility assistance dog",
      "Emotional support animal"
    ],
    correctAnswer: 0,
    explanation: "Psychiatric service dogs are specially trained to assist people with psychiatric disabilities, like interrupting harmful behaviors.",
    sourceLink: "https://www.akc.org/expert-advice/training/service-dog-training/"
  },
  {
    id: 53,
    domain: QuizDomain.Accessibility,
    text: "A person with which disability type would benefit most from haptic alerts (e.g., buzzing, flashing lights) on a smartphone?",
    options: [
      "Visual",
      "Cognitive",
      "Auditory",
      "Seizure"
    ],
    correctAnswer: 2,
    explanation: "Haptic alerts provide an alternative to sound, making them especially useful for individuals with auditory disabilities.",
    sourceLink: "https://webaim.org/articles/auditory/"
  },
  {
    id: 54,
    domain: QuizDomain.Disabilities,
    text: "Why are the poorest and most vulnerable people in developing countries more likely to become disabled?",
    options: [
      "They face discrimination due to negative stereotypes",
      "They lack access to good nutrition, health care, and sanitation",
      "They face barriers to education and employment",
      "They lack access to technical standards"
    ],
    correctAnswer: 1,
    explanation: "Poverty-related factors like lack of nutrition, health care, and sanitation increase the likelihood of disability in vulnerable populations.",
    sourceLink: "https://www.who.int/news-room/fact-sheets/detail/disability-and-health"
  },
  {
    id: 55,
    domain: QuizDomain.Standards,
    text: "According to the World Health Organization, cataracts are the leading cause of blindness globally. The second leading cause is:",
    options: [
      "Glaucoma",
      "Diabetic retinopathy",
      "Age-related macular degeneration",
      "Corneal opacities"
    ],
    correctAnswer: 0,
    explanation: "Glaucoma accounts for approximately 12.3% of blindness worldwide, making it the second leading cause after cataracts.",
    sourceLink: "https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment"
  },
  {
    id: 56,
    domain: QuizDomain.Disabilities,
    text: "While around 15% of the global population has some type of disability, the percentage of adults with disabilities in the United States is approximately:",
    options: [
      "31%",
      "26%",
      "13%",
      "8%"
    ],
    correctAnswer: 1,
    explanation: "The overall percentage of American adults with disabilities is 26%, according to CDC data.",
    sourceLink: "https://www.cdc.gov/ncbddd/disabilityandhealth/features/key-findings-community-prevalence.html"
  },
  {
    id: 57,
    domain: QuizDomain.Accessibility,
    text: "Which concept refers to providing practical measures in the workplace that create access and is required when barriers have not or cannot be removed?",
    options: [
      "Accessibility conformance",
      "Inclusive design",
      "Individual accommodation",
      "Universal design"
    ],
    correctAnswer: 2,
    explanation: "Individual accommodations provide practical measures to create access for individuals when universal or inclusive design alone is insufficient.",
    sourceLink: "https://askjan.org/topics/accommodations.cfm"
  },
  {
    id: 58,
    domain: QuizDomain.Accessibility,
    text: "What is a reasonable accommodation for someone taking a test?",
    options: [
      "Allow unrestricted website access during the test",
      "Provide a draft of items prior to the test",
      "Tape record responses for later transcription by another person",
      "Allow a scribe to clue-in on correct responses"
    ],
    correctAnswer: 2,
    explanation: "Tape recording responses for later transcription is an established testing accommodation that does not alter the nature of the test.",
    sourceLink: "https://adata.org/factsheet/testing-accommodations"
  },
  {
    id: 59,
    domain: QuizDomain.Standards,
    text: "Which guideline of the Universal Design for Learning principle 'Multiple Means of Representation' recommends providing learners with various ways of acquiring information and knowledge?",
    options: [
      "Provide options for perception",
      "Provide options for language and symbols",
      "Develop activities that will help learners tackle challenges",
      "Provide options for comprehension"
    ],
    correctAnswer: 0,
    explanation: "Providing options for perception ensures key information is accessible to all learners through multiple modalities like text, audio, or touch.",
    sourceLink: "https://udlguidelines.cast.org/representation/perception"
  },
  {
    id: 60,
    domain: QuizDomain.Accessibility,
    text: "Which UDL principle relates to a learner's strategic neural network, or the 'how' of learning?",
    options: [
      "Multiple means of engagement",
      "Multiple means of perception",
      "Multiple means of representation",
      "Multiple means of action and expression"
    ],
    correctAnswer: 3,
    explanation: "The principle of 'Multiple Means of Action and Expression' focuses on helping learners develop strategies to plan and organize their learning.",
    sourceLink: "https://udlguidelines.cast.org/action-expression"
  }, 
    {
      id: 61,
      domain: QuizDomain.Standards,
      text: "Which section of the Rehabilitation Act requires federal agencies to make their electronic and information technology accessible to people with disabilities?",
      options: [
        "Section 501",
        "Section 503",
        "Section 504",
        "Section 508"
      ],
      correctAnswer: 3,
      explanation: "Section 508 of the Rehabilitation Act mandates federal agencies to ensure their electronic and information technology is accessible to individuals with disabilities.",
      sourceLink: "https://www.section508.gov/"
    },
    {
      id: 62,
      domain: QuizDomain.Standards,
      text: "What is the primary purpose of the Americans with Disabilities Act (ADA)?",
      options: [
        "To provide accessibility standards for public websites",
        "To prevent discrimination against people with disabilities in all areas of public life",
        "To ensure accessible education in public schools",
        "To establish accessibility guidelines for federal agencies"
      ],
      correctAnswer: 1,
      explanation: "The ADA prohibits discrimination against individuals with disabilities and ensures equal opportunities in public life, including employment, transportation, and public accommodations.",
      sourceLink: "https://www.ada.gov/"
    },
    {
      id: 63,
      domain: QuizDomain.Standards,
      text: "What does the European Accessibility Act primarily focus on?",
      options: [
        "Creating accessible guidelines for ICT products",
        "Providing accessibility for public transportation",
        "Ensuring accessibility of key products and services",
        "Developing inclusive educational standards"
      ],
      correctAnswer: 2,
      explanation: "The European Accessibility Act focuses on the accessibility of key products and services most important for people with disabilities, such as banking, transportation, and e-commerce.",
      sourceLink: "https://ec.europa.eu/social/main.jsp?catId=1202"
    },
    {
      id: 64,
      domain: QuizDomain.Standards,
      text: "Which Japanese accessibility standard applies to national and local government agencies but is not legally required?",
      options: [
        "JIS Standards for Accessible Design",
        "JIS X 8341",
        "Section 508",
        "Web Content Accessibility Guidelines (WCAG)"
      ],
      correctAnswer: 1,
      explanation: "JIS X 8341 outlines accessibility standards for Japan's government agencies but does not have legislative backing.",
      sourceLink: "https://www.w3.org/WAI/policies/"
    },
    {
      id: 65,
      domain: QuizDomain.Standards,
      text: "What is the equivalent of Section 508 in European legislation?",
      options: [
        "EN 301 549",
        "ISO 45001",
        "WCAG 2.1",
        "EU Accessibility Directive"
      ],
      correctAnswer: 0,
      explanation: "EN 301 549 is a European standard that outlines accessibility requirements for ICT products and services, equivalent to the US Section 508.",
      sourceLink: "https://www.w3.org/WAI/standards-guidelines/en301549/"
    },
    {
      id: 66,
      domain: QuizDomain.Standards,
      text: "Which global agreement recognizes the rights of persons with disabilities and aims to ensure their full participation in society?",
      options: [
        "The Marrakesh Treaty",
        "The UN Convention on the Rights of Persons with Disabilities (CRPD)",
        "The European Accessibility Act",
        "The Rehabilitation Act"
      ],
      correctAnswer: 1,
      explanation: "The CRPD is a landmark international treaty that promotes, protects, and ensures the full and equal participation of people with disabilities in society.",
      sourceLink: "https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities.html"
    },
    {
      id: 67,
      domain: QuizDomain.Standards,
      text: "Which law requires public sector websites in the European Union to conform to accessibility standards?",
      options: [
        "The European Accessibility Act",
        "Web Accessibility Directive (EU 2016/2102)",
        "EN 301 549",
        "CRPD"
      ],
      correctAnswer: 1,
      explanation: "The Web Accessibility Directive requires public sector websites and apps in the EU to meet accessibility standards.",
      sourceLink: "https://digital-strategy.ec.europa.eu/en/policies/web-accessibility"
    },
    {
      id: 68,
      domain: QuizDomain.Standards,
      text: "What does the Marrakesh Treaty aim to address?",
      options: [
        "Improving accessibility in ICT",
        "Facilitating access to published works for people who are blind or visually impaired",
        "Promoting inclusive design in public spaces",
        "Establishing global accessibility certification"
      ],
      correctAnswer: 1,
      explanation: "The Marrakesh Treaty facilitates access to published works for people who are blind, visually impaired, or otherwise print disabled by providing exceptions to copyright laws.",
      sourceLink: "https://www.wipo.int/treaties/en/ip/marrakesh/"
    },
    {
      id: 69,
      domain: QuizDomain.Standards,
      text: "Which US law requires educational institutions receiving federal funding to provide equal access to programs and services for students with disabilities?",
      options: [
        "Americans with Disabilities Act (ADA)",
        "Individuals with Disabilities Education Act (IDEA)",
        "Section 504 of the Rehabilitation Act",
        "Section 508 of the Rehabilitation Act"
      ],
      correctAnswer: 2,
      explanation: "Section 504 of the Rehabilitation Act ensures that educational institutions provide equal access and reasonable accommodations for students with disabilities.",
      sourceLink: "https://www2.ed.gov/about/offices/list/ocr/504faq.html"
    },
    {
      id: 70,
      domain: QuizDomain.Standards,
      text: "Which principle does WCAG rely on to ensure accessibility of web content for all users?",
      options: [
        "Universal Design",
        "POUR principles (Perceivable, Operable, Understandable, Robust)",
        "Inclusive Design",
        "Global Accessibility Standards"
      ],
      correctAnswer: 1,
      explanation: "WCAG is based on the POUR principles to ensure web content is accessible and usable by all, including people with disabilities.",
      sourceLink: "https://www.w3.org/WAI/standards-guidelines/wcag/"
    }, 
      {
        id: 71,
        domain: QuizDomain.Standards,
        text: "What is the primary purpose of the Individuals with Disabilities Education Act (IDEA)?",
        options: [
          "To provide free and appropriate public education for children with disabilities",
          "To ensure accessibility in federal government websites",
          "To provide job accommodations for individuals with disabilities",
          "To regulate workplace discrimination"
        ],
        correctAnswer: 0,
        explanation: "IDEA ensures that children with disabilities receive a free and appropriate public education tailored to their unique needs.",
        sourceLink: "https://sites.ed.gov/idea/"
      },
      {
        id: 72,
        domain: QuizDomain.Standards,
        text: "What does Section 501 of the Rehabilitation Act address?",
        options: [
          "Accessibility in public transportation",
          "Non-discrimination in federal employment",
          "Accessibility standards for ICT",
          "Equal access in educational institutions"
        ],
        correctAnswer: 1,
        explanation: "Section 501 prohibits discrimination against individuals with disabilities in federal employment.",
        sourceLink: "https://www.eeoc.gov/statutes/rehabilitation-act-1973"
      },
      {
        id: 73,
        domain: QuizDomain.Standards,
        text: "Which legislation provides the legal framework for the creation of workplace accommodations in the United States?",
        options: [
          "Rehabilitation Act",
          "ADA Title I",
          "CRPD",
          "IDEA"
        ],
        correctAnswer: 1,
        explanation: "ADA Title I ensures that employers provide reasonable accommodations to qualified employees with disabilities to ensure they can perform essential job functions.",
        sourceLink: "https://www.ada.gov/"
      },
      {
        id: 74,
        domain: QuizDomain.Standards,
        text: "Which accessibility principle is the foundation of the European Accessibility Act?",
        options: [
          "Perceivable",
          "Operable",
          "Harmonized accessibility requirements across EU Member States",
          "Providing technical solutions for ICT"
        ],
        correctAnswer: 2,
        explanation: "The European Accessibility Act focuses on harmonized accessibility requirements across Member States to ensure products and services are accessible to all.",
        sourceLink: "https://ec.europa.eu/social/main.jsp?catId=1202"
      },
      {
        id: 75,
        domain: QuizDomain.Standards,
        text: "The Web Accessibility Directive (EU 2016/2102) requires public sector websites to:",
        options: [
          "Use WCAG 2.0 Level AA as a minimum standard",
          "Offer alternative versions of inaccessible content",
          "Eliminate all multimedia content",
          "Provide resources for people with cognitive disabilities only"
        ],
        correctAnswer: 0,
        explanation: "The directive mandates that public sector websites and apps meet WCAG 2.0 Level AA accessibility standards as a baseline.",
        sourceLink: "https://digital-strategy.ec.europa.eu/en/policies/web-accessibility"
      },
      {
        id: 76,
        domain: QuizDomain.Standards,
        text: "Which legislation is specifically focused on accessible telecommunications in the United States?",
        options: [
          "ADA Title II",
          "Telecommunications Act of 1996 (Section 255)",
          "Rehabilitation Act Section 504",
          "Web Accessibility Directive"
        ],
        correctAnswer: 1,
        explanation: "Section 255 of the Telecommunications Act ensures telecommunications products and services are accessible to individuals with disabilities.",
        sourceLink: "https://transition.fcc.gov/cgb/dro/section255.html"
      },
      {
        id: 77,
        domain: QuizDomain.Standards,
        text: "What is the significance of EN 301 549?",
        options: [
          "It defines accessibility standards for built environments in Europe",
          "It establishes a framework for accessible ICT products and services in Europe",
          "It is a universal guide for accessibility in education",
          "It focuses on accessibility in public transportation"
        ],
        correctAnswer: 1,
        explanation: "EN 301 549 provides a framework for accessible ICT products and services, ensuring harmonization with European accessibility directives.",
        sourceLink: "https://www.w3.org/WAI/standards-guidelines/en301549/"
      },
      {
        id: 78,
        domain: QuizDomain.Standards,
        text: "Which section of the ADA focuses on accessibility in public transportation?",
        options: [
          "ADA Title I",
          "ADA Title II",
          "Section 508",
          "Section 504"
        ],
        correctAnswer: 1,
        explanation: "ADA Title II covers public entities, including public transportation systems, ensuring they are accessible to individuals with disabilities.",
        sourceLink: "https://www.ada.gov/"
      },
      {
        id: 79,
        domain: QuizDomain.Standards,
        text: "What is the primary purpose of the Equality Act 2010 in the UK?",
        options: [
          "To provide a global framework for accessibility",
          "To ensure equal opportunities and prevent discrimination against people with disabilities",
          "To establish accessibility standards for ICT in Europe",
          "To focus on employment opportunities for disabled individuals only"
        ],
        correctAnswer: 1,
        explanation: "The Equality Act 2010 is designed to protect individuals from discrimination and promote equality for all, including those with disabilities.",
        sourceLink: "https://www.gov.uk/guidance/equality-act-2010-guidance"
      },
      {
        id: 80,
        domain: QuizDomain.Standards,
        text: "Which law ensures that students with disabilities are provided equal opportunities in federally funded educational programs?",
        options: [
          "Americans with Disabilities Act",
          "Rehabilitation Act Section 504",
          "Individuals with Disabilities Education Act",
          "Telecommunications Act"
        ],
        correctAnswer: 1,
        explanation: "Section 504 of the Rehabilitation Act ensures students with disabilities have equal access to education and services in programs receiving federal funding.",
        sourceLink: "https://www2.ed.gov/about/offices/list/ocr/504faq.html"
      }, 
        {
          id: 81,
          domain: QuizDomain.Disabilities,
          text: "What is the most common characteristic of dyslexia?",
          options: [
            "Difficulty with motor coordination",
            "Challenges in reading and processing written language",
            "Impaired auditory processing",
            "Inability to recognize colors"
          ],
          correctAnswer: 1,
          explanation: "Dyslexia is a learning disability characterized by difficulties in reading, processing written language, and sometimes spelling.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
        },
        {
          id: 82,
          domain: QuizDomain.Accessibility,
          text: "Which of the following is an example of a 'reasonable accommodation' in the workplace?",
          options: [
            "Offering employees free meals",
            "Providing a screen reader for a blind employee",
            "Eliminating performance reviews",
            "Reducing work hours for all employees"
          ],
          correctAnswer: 1,
          explanation: "Providing a screen reader is an example of a reasonable accommodation that enables blind employees to perform essential job functions.",
          sourceLink: "https://askjan.org/"
        },
        {
          id: 83,
          domain: QuizDomain.Accessibility,
          text: "What is the primary purpose of the 'Robust' principle in WCAG?",
          options: [
            "Ensure content is compatible with assistive technologies",
            "Make content easy to navigate",
            "Provide alternative text for images",
            "Improve website performance"
          ],
          correctAnswer: 0,
          explanation: "The 'Robust' principle ensures web content is compatible with various assistive technologies, both current and future.",
          sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/robust.html"
        },
        {
          id: 84,
          domain: QuizDomain.Standards,
          text: "What is the primary focus of the CRPD?",
          options: [
            "To mandate accessibility standards in Europe",
            "To protect the rights and dignity of people with disabilities globally",
            "To establish universal healthcare for people with disabilities",
            "To provide funding for assistive technologies"
          ],
          correctAnswer: 1,
          explanation: "The CRPD is an international treaty that aims to protect the rights and dignity of people with disabilities worldwide.",
          sourceLink: "https://www.un.org/disabilities/documents/convention/convoptprot-e.pdf"
        },
        {
          id: 85,
          domain: QuizDomain.Accessibility,
          text: "What does the principle of 'Universal Design' aim to achieve?",
          options: [
            "Designing for the average user",
            "Creating separate solutions for different disabilities",
            "Making products usable by the widest range of people without the need for adaptation",
            "Focusing only on physical accessibility"
          ],
          correctAnswer: 2,
          explanation: "Universal Design aims to make products usable by the widest range of people, regardless of age, ability, or status, without requiring specialized adaptations.",
          sourceLink: "https://www.w3.org/WAI/fundamentals/accessibility-principles/"
        },
        {
          id: 86,
          domain: QuizDomain.Standards,
          text: "Which principle of Universal Design emphasizes minimizing hazards and adverse consequences?",
          options: [
            "Equitable Use",
            "Flexibility in Use",
            "Tolerance for Error",
            "Perceptible Information"
          ],
          correctAnswer: 2,
          explanation: "Tolerance for Error emphasizes minimizing hazards and ensuring safety through design.",
          sourceLink: "https://projects.ncsu.edu/design/cud/about_ud/udprinciples.htm"
        },
        {
          id: 87,
          domain: QuizDomain.Disabilities,
          text: "Which type of disability is most likely to benefit from closed captioning?",
          options: [
            "Auditory disabilities",
            "Cognitive disabilities",
            "Visual disabilities",
            "Mobility disabilities"
          ],
          correctAnswer: 0,
          explanation: "Closed captioning provides text alternatives for spoken content, benefiting individuals with auditory disabilities.",
          sourceLink: "https://www.w3.org/WAI/media/av/captions/"
        },
        {
          id: 88,
          domain: QuizDomain.Accessibility,
          text: "What does the term 'Assistive Technology' refer to?",
          options: [
            "Technology designed exclusively for educational purposes",
            "Devices or software that assist people with disabilities in performing tasks",
            "General accessibility standards for all technology",
            "Devices that replace traditional tools for all users"
          ],
          correctAnswer: 1,
          explanation: "Assistive Technology includes devices or software like screen readers, hearing aids, and alternative input devices that enable people with disabilities to perform tasks they otherwise might not be able to do.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
        },
        {
          id: 89,
          domain: QuizDomain.Standards,
          text: "Which guideline of WCAG focuses on making content easier to see and hear?",
          options: [
            "Perceivable",
            "Operable",
            "Understandable",
            "Robust"
          ],
          correctAnswer: 0,
          explanation: "The 'Perceivable' principle focuses on ensuring content can be presented in ways users can see and hear, such as providing text alternatives for images.",
          sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/perceivable.html"
        },
        {
          id: 90,
          domain: QuizDomain.Accessibility,
          text: "Which feature ensures screen readers can accurately describe images to users?",
          options: [
            "High color contrast",
            "Alt text descriptions",
            "Dynamic navigation menus",
            "Keyboard shortcuts"
          ],
          correctAnswer: 1,
          explanation: "Alt text descriptions provide essential information about images, allowing screen readers to describe them to visually impaired users.",
          sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
        }, 
        {
          id: 91,
          domain: QuizDomain.Disabilities,
          text: "What is the primary characteristic of autism spectrum disorder (ASD)?",
          options: [
            "Difficulties with motor coordination",
            "Challenges with social interaction and communication",
            "Inability to process auditory information",
            "Complete loss of vision"
          ],
          correctAnswer: 1,
          explanation: "Autism spectrum disorder primarily affects social interaction, communication, and may include repetitive behaviors or focused interests.",
          sourceLink: "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders"
        },
        {
          id: 92,
          domain: QuizDomain.Disabilities,
          text: "What is a key characteristic of cerebral palsy?",
          options: [
            "Progressive loss of hearing",
            "Motor impairments caused by brain damage during development",
            "Complete inability to see colors",
            "Difficulty processing text"
          ],
          correctAnswer: 1,
          explanation: "Cerebral palsy is a group of disorders that affect movement and posture, caused by injury to the developing brain.",
          sourceLink: "https://www.cerebralpalsy.org/about-cerebral-palsy"
        },
        {
          id: 93,
          domain: QuizDomain.Disabilities,
          text: "Which disability is characterized by challenges with numbers and mathematical reasoning?",
          options: [
            "Dyslexia",
            "Dyscalculia",
            "Dyspraxia",
            "Dysgraphia"
          ],
          correctAnswer: 1,
          explanation: "Dyscalculia is a specific learning disability that affects a person’s ability to understand numbers and mathematical concepts.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
        },
        {
          id: 94,
          domain: QuizDomain.Disabilities,
          text: "What is the main symptom of attention deficit hyperactivity disorder (ADHD)?",
          options: [
            "Motor impairments",
            "Difficulty with sustained attention and impulse control",
            "Complete loss of hearing",
            "Inability to process visual information"
          ],
          correctAnswer: 1,
          explanation: "ADHD is characterized by difficulty with attention, hyperactivity, and impulsiveness, which can affect focus and task management.",
          sourceLink: "https://www.who.int/news-room/fact-sheets/detail/attention-deficit-hyperactivity-disorder-(adhd)"
        },
        {
          id: 95,
          domain: QuizDomain.Disabilities,
          text: "Which condition is associated with difficulty coordinating motor tasks?",
          options: [
            "Dyslexia",
            "Dyspraxia",
            "Dysgraphia",
            "Dyscalculia"
          ],
          correctAnswer: 1,
          explanation: "Dyspraxia affects motor coordination, making physical tasks like writing or tying shoelaces challenging.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
        },
        {
          id: 96,
          domain: QuizDomain.Disabilities,
          text: "What is a common challenge for individuals with auditory processing disorder (APD)?",
          options: [
            "Difficulty distinguishing and interpreting sounds",
            "Inability to read text",
            "Loss of fine motor skills",
            "Difficulty recognizing colors"
          ],
          correctAnswer: 0,
          explanation: "APD affects how the brain processes auditory information, making it difficult to distinguish and interpret sounds, especially in noisy environments.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
        },
        {
          id: 97,
          domain: QuizDomain.Disabilities,
          text: "Which disability is characterized by difficulties in writing, such as forming letters or organizing thoughts on paper?",
          options: [
            "Dyslexia",
            "Dysgraphia",
            "Dyspraxia",
            "Dyscalculia"
          ],
          correctAnswer: 1,
          explanation: "Dysgraphia affects writing abilities, including spelling, handwriting, and organizing ideas in written form.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
        },
        {
          id: 98,
          domain: QuizDomain.Disabilities,
          text: "What is a key characteristic of low vision?",
          options: [
            "Complete loss of sight",
            "Some usable vision that may require assistive tools for everyday tasks",
            "Sensitivity to bright lights",
            "Temporary loss of color perception"
          ],
          correctAnswer: 1,
          explanation: "Low vision means an individual has some usable sight but may require assistive tools like magnifiers or screen readers.",
          sourceLink: "https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment"
        },
        {
          id: 99,
          domain: QuizDomain.Disabilities,
          text: "What is a defining feature of intellectual disabilities?",
          options: [
            "Motor impairments",
            "Limitations in intellectual functioning and adaptive behavior",
            "Challenges with auditory processing",
            "Loss of color vision"
          ],
          correctAnswer: 1,
          explanation: "Intellectual disabilities involve significant limitations in intellectual functioning and adaptive behavior, affecting daily life and problem-solving abilities.",
          sourceLink: "https://www.who.int/news-room/fact-sheets/detail/intellectual-disabilities"
        },
        {
          id: 100,
          domain: QuizDomain.Disabilities,
          text: "What is prosopagnosia commonly referred to as?",
          options: [
            "Face blindness",
            "Color blindness",
            "Motion blindness",
            "Night blindness"
          ],
          correctAnswer: 0,
          explanation: "Prosopagnosia, or face blindness, is a condition that impairs a person’s ability to recognize faces.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
        }, 
        {
          id: 101,
          domain: QuizDomain.Disabilities,
          text: "What is the primary challenge faced by individuals with visual impairments when using digital interfaces?",
          options: [
            "Difficulty distinguishing between colors",
            "Inability to interpret text-based content",
            "Limited ability to use audio-based features",
            "Navigation challenges without screen readers"
          ],
          correctAnswer: 3,
          explanation: "Individuals with visual impairments often rely on screen readers to navigate digital interfaces effectively.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
        },
        {
          id: 102,
          domain: QuizDomain.Disabilities,
          text: "Which assistive technology is commonly used by individuals with motor impairments?",
          options: [
            "Screen readers",
            "Voice recognition software",
            "Hearing aids",
            "Braille displays"
          ],
          correctAnswer: 1,
          explanation: "Voice recognition software enables individuals with motor impairments to interact with devices through speech commands.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
        },
        {
          id: 103,
          domain: QuizDomain.Disabilities,
          text: "What is a common challenge faced by people with cognitive disabilities?",
          options: [
            "Difficulty understanding complex navigation",
            "Inability to perceive colors",
            "Limited ability to use voice recognition",
            "Difficulty distinguishing between audio cues"
          ],
          correctAnswer: 0,
          explanation: "Complex navigation structures can be overwhelming for individuals with cognitive disabilities, requiring simplified interfaces.",
          sourceLink: "https://www.w3.org/WAI/cognitive/"
        },
        {
          id: 104,
          domain: QuizDomain.Disabilities,
          text: "Which assistive technology helps individuals with hearing impairments access auditory content?",
          options: [
            "Screen magnifiers",
            "Closed captions",
            "Switch access devices",
            "Speech-to-text software"
          ],
          correctAnswer: 1,
          explanation: "Closed captions provide a text-based alternative to auditory content, making it accessible for individuals with hearing impairments.",
          sourceLink: "https://www.w3.org/WAI/media/av/captions/"
        },
        {
          id: 105,
          domain: QuizDomain.Disabilities,
          text: "What is the main challenge for individuals with speech disabilities when using voice-based systems?",
          options: [
            "Understanding system instructions",
            "Inability to access tactile feedback",
            "Difficulty being accurately recognized by the system",
            "Limited ability to interpret visual elements"
          ],
          correctAnswer: 2,
          explanation: "Voice-based systems often struggle to recognize speech patterns of individuals with speech disabilities, reducing their usability.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
        },
        {
          id: 106,
          domain: QuizDomain.Disabilities,
          text: "What assistive device is commonly used by individuals with severe mobility impairments for navigation?",
          options: [
            "Braille keyboards",
            "Eye-tracking systems",
            "Hearing loops",
            "Screen readers"
          ],
          correctAnswer: 1,
          explanation: "Eye-tracking systems allow individuals with severe mobility impairments to control devices and navigate interfaces using their eyes.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
        },
        {
          id: 107,
          domain: QuizDomain.Disabilities,
          text: "Which assistive technology converts text content into speech for individuals with visual impairments?",
          options: [
            "Text-to-speech software",
            "Screen magnifiers",
            "Speech-to-text software",
            "Switch access devices"
          ],
          correctAnswer: 0,
          explanation: "Text-to-speech software enables individuals with visual impairments to access written content by converting it into spoken words.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
        },
        {
          id: 108,
          domain: QuizDomain.Disabilities,
          text: "What is a significant barrier for individuals with auditory processing disorders?",
          options: [
            "Difficulty understanding written text",
            "Challenges with distinguishing and interpreting sounds",
            "Inability to interact with visual interfaces",
            "Motor impairments impacting input"
          ],
          correctAnswer: 1,
          explanation: "Auditory processing disorders affect the brain’s ability to distinguish and interpret sounds, especially in noisy environments.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
        },
        {
          id: 109,
          domain: QuizDomain.Disabilities,
          text: "Which assistive technology benefits individuals with low vision?",
          options: [
            "Braille displays",
            "Screen magnifiers",
            "Hearing aids",
            "Speech-to-text software"
          ],
          correctAnswer: 1,
          explanation: "Screen magnifiers enlarge content, making it easier for individuals with low vision to read and interact with digital interfaces.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
        },
        {
          id: 110,
          domain: QuizDomain.Disabilities,
          text: "What is the purpose of switch access devices?",
          options: [
            "To allow individuals with motor impairments to control devices",
            "To convert text into speech",
            "To magnify screen content",
            "To enhance color contrast"
          ],
          correctAnswer: 0,
          explanation: "Switch access devices provide alternative input methods for individuals with motor impairments, enabling them to interact with technology.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
        },
        {
          id: 111,
          domain: QuizDomain.Accessibility,
          text: "What is the primary goal of Universal Design?",
          options: [
            "To design products for people with disabilities only",
            "To create products usable by the widest range of people without the need for adaptation",
            "To reduce production costs for accessibility features",
            "To ensure compliance with accessibility laws"
          ],
          correctAnswer: 1,
          explanation: "Universal Design aims to create products that are usable by everyone, without the need for adaptation or specialized design.",
          sourceLink: "https://www.w3.org/WAI/fundamentals/accessibility-principles/"
        },
        {
          id: 112,
          domain: QuizDomain.Accessibility,
          text: "Which principle of Universal Design focuses on accommodating a wide range of individual preferences and abilities?",
          options: [
            "Equitable Use",
            "Flexibility in Use",
            "Simple and Intuitive Use",
            "Tolerance for Error"
          ],
          correctAnswer: 1,
          explanation: "Flexibility in Use ensures that designs accommodate diverse preferences and abilities, such as providing multiple ways to interact with a product.",
          sourceLink: "https://projects.ncsu.edu/design/cud/about_ud/udprinciples.htm"
        },
        {
          id: 113,
          domain: QuizDomain.Accessibility,
          text: "What is the purpose of accessibility standards like WCAG?",
          options: [
            "To improve website performance",
            "To provide a global framework for creating accessible web content",
            "To enhance visual appeal of websites",
            "To standardize coding practices for developers"
          ],
          correctAnswer: 1,
          explanation: "WCAG provides guidelines to ensure web content is accessible to all users, including those with disabilities.",
          sourceLink: "https://www.w3.org/WAI/standards-guidelines/wcag/"
        },
        {
          id: 114,
          domain: QuizDomain.Accessibility,
          text: "Which Universal Design principle focuses on making information easy to understand regardless of the user's sensory abilities?",
          options: [
            "Perceptible Information",
            "Low Physical Effort",
            "Equitable Use",
            "Tolerance for Error"
          ],
          correctAnswer: 0,
          explanation: "Perceptible Information ensures that information is presented in ways that all users can perceive, regardless of sensory abilities.",
          sourceLink: "https://projects.ncsu.edu/design/cud/about_ud/udprinciples.htm"
        },
        {
          id: 115,
          domain: QuizDomain.Accessibility,
          text: "What is the POUR model in accessibility?",
          options: [
            "A design method for reducing costs",
            "A framework of principles: Perceivable, Operable, Understandable, Robust",
            "A strategy for improving website navigation",
            "A guide for creating universal color palettes"
          ],
          correctAnswer: 1,
          explanation: "The POUR model ensures web content is accessible by being Perceivable, Operable, Understandable, and Robust.",
          sourceLink: "https://www.w3.org/WAI/WCAG21/quickref/"
        },
        {
          id: 116,
          domain: QuizDomain.Accessibility,
          text: "Which accessibility principle ensures that content can be used by people with a variety of assistive technologies?",
          options: [
            "Perceivable",
            "Operable",
            "Understandable",
            "Robust"
          ],
          correctAnswer: 3,
          explanation: "The Robust principle ensures that web content can be interpreted reliably by a wide range of assistive technologies.",
          sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/robust.html"
        },
        {
          id: 117,
          domain: QuizDomain.Accessibility,
          text: "What is the key focus of the Universal Design principle 'Simple and Intuitive Use'?",
          options: [
            "Reducing the need for complex instructions",
            "Accommodating diverse preferences",
            "Improving physical accessibility",
            "Creating aesthetically pleasing designs"
          ],
          correctAnswer: 0,
          explanation: "'Simple and Intuitive Use' ensures that products are easy to understand and use, regardless of the user's experience or knowledge.",
          sourceLink: "https://projects.ncsu.edu/design/cud/about_ud/udprinciples.htm"
        },
        {
          id: 118,
          domain: QuizDomain.Accessibility,
          text: "What does 'Equitable Use' mean in Universal Design?",
          options: [
            "Providing the same means of use for all users",
            "Creating separate designs for different user groups",
            "Ensuring accessibility for people with specific disabilities",
            "Reducing costs for inclusive features"
          ],
          correctAnswer: 0,
          explanation: "Equitable Use ensures that designs provide the same means of use for all users, without segregating or stigmatizing individuals.",
          sourceLink: "https://projects.ncsu.edu/design/cud/about_ud/udprinciples.htm"
        },
        {
          id: 119,
          domain: QuizDomain.Accessibility,
          text: "Which principle of WCAG focuses on ensuring that users can interact with and navigate content easily?",
          options: [
            "Perceivable",
            "Operable",
            "Understandable",
            "Robust"
          ],
          correctAnswer: 1,
          explanation: "The Operable principle ensures that users can interact with and navigate web content easily, including through keyboard navigation and other assistive tools.",
          sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/operable.html"
        },
        {
          id: 120,
          domain: QuizDomain.Accessibility,
          text: "What is the main goal of the Universal Design principle 'Low Physical Effort'?",
          options: [
            "To reduce the amount of physical effort required to use a product",
            "To simplify complex designs",
            "To improve visual aesthetics",
            "To ensure compatibility with assistive technologies"
          ],
          correctAnswer: 0,
          explanation: "The 'Low Physical Effort' principle ensures that products can be used efficiently and comfortably with minimal fatigue.",
          sourceLink: "https://projects.ncsu.edu/design/cud/about_ud/udprinciples.htm"
        }, 
        {
          id: 121,
          domain: QuizDomain.Disabilities,
          text: "What is the main characteristic of auditory processing disorder (APD)?",
          options: [
            "Difficulty with motor coordination",
            "Challenges in processing and interpreting auditory information",
            "Loss of fine motor skills",
            "Complete inability to hear sounds"
          ],
          correctAnswer: 1,
          explanation: "APD affects how the brain processes auditory information, making it difficult to distinguish and interpret sounds, especially in noisy environments.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
        },
        {
          id: 122,
          domain: QuizDomain.Accessibility,
          text: "Which WCAG principle ensures that content can be used by assistive technologies reliably?",
          options: [
            "Perceivable",
            "Operable",
            "Understandable",
            "Robust"
          ],
          correctAnswer: 3,
          explanation: "The Robust principle ensures that content is compatible with current and future assistive technologies, providing reliable access.",
          sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/robust.html"
        },
        {
          id: 123,
          domain: QuizDomain.Standards,
          text: "What does Section 508 of the Rehabilitation Act mandate?",
          options: [
            "Accessibility in public spaces",
            "Accessibility for federally funded educational programs",
            "Accessibility of federal electronic and information technology",
            "Accessibility in telecommunications systems"
          ],
          correctAnswer: 2,
          explanation: "Section 508 requires federal agencies to make their electronic and information technology accessible to individuals with disabilities.",
          sourceLink: "https://www.section508.gov/"
        },
        {
          id: 124,
          domain: QuizDomain.Disabilities,
          text: "Which assistive technology is commonly used by individuals with severe mobility impairments?",
          options: [
            "Braille displays",
            "Eye-tracking systems",
            "Screen readers",
            "Closed captions"
          ],
          correctAnswer: 1,
          explanation: "Eye-tracking systems allow individuals with severe mobility impairments to interact with devices by tracking eye movements.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
        },
        {
          id: 125,
          domain: QuizDomain.Accessibility,
          text: "What is the key focus of the Universal Design principle 'Equitable Use'?",
          options: [
            "Minimizing physical effort for all users",
            "Providing the same means of use for all users without stigmatization",
            "Improving performance for users with advanced technologies",
            "Creating separate designs for different user groups"
          ],
          correctAnswer: 1,
          explanation: "'Equitable Use' ensures that designs provide the same means of use for all users, avoiding stigmatization or segregation.",
          sourceLink: "https://projects.ncsu.edu/design/cud/about_ud/udprinciples.htm"
        },
        {
          id: 126,
          domain: QuizDomain.Standards,
          text: "Which international treaty promotes access to published works for individuals with print disabilities?",
          options: [
            "The Marrakesh Treaty",
            "The CRPD",
            "The European Accessibility Act",
            "Section 508"
          ],
          correctAnswer: 0,
          explanation: "The Marrakesh Treaty provides legal frameworks to improve access to published works for individuals with print disabilities.",
          sourceLink: "https://www.wipo.int/treaties/en/ip/marrakesh/"
        },
        {
          id: 127,
          domain: QuizDomain.Disabilities,
          text: "What challenge does dysgraphia primarily cause?",
          options: [
            "Difficulty with motor coordination",
            "Difficulty organizing thoughts and writing legibly",
            "Inability to process mathematical concepts",
            "Impaired color perception"
          ],
          correctAnswer: 1,
          explanation: "Dysgraphia affects writing abilities, including handwriting, spelling, and organizing ideas on paper.",
          sourceLink: "https://www.w3.org/WAI/people-use-web/abilities-barriers/"
        },
        {
          id: 128,
          domain: QuizDomain.Accessibility,
          text: "What is the purpose of alt text in images?",
          options: [
            "To enhance website design",
            "To describe images for screen reader users",
            "To improve website performance",
            "To reduce image file sizes"
          ],
          correctAnswer: 1,
          explanation: "Alt text provides a description of images for screen reader users, ensuring accessibility for those who cannot see the images.",
          sourceLink: "https://www.w3.org/WAI/tutorials/images/"
        },
        {
          id: 129,
          domain: QuizDomain.Accessibility,
          text: "Which Universal Design principle ensures that designs minimize hazards and adverse consequences?",
          options: [
            "Tolerance for Error",
            "Flexibility in Use",
            "Low Physical Effort",
            "Equitable Use"
          ],
          correctAnswer: 0,
          explanation: "Tolerance for Error focuses on minimizing risks and adverse consequences from accidental or unintended actions.",
          sourceLink: "https://projects.ncsu.edu/design/cud/about_ud/udprinciples.htm"
        },
        {
          id: 130,
          domain: QuizDomain.Standards,
          text: "What is the main purpose of the WCAG standards?",
          options: [
            "To enforce accessibility laws",
            "To provide technical guidelines for creating accessible web content",
            "To enhance website aesthetics",
            "To standardize user interfaces"
          ],
          correctAnswer: 1,
          explanation: "WCAG standards provide detailed technical guidelines to ensure web content is accessible to all users, including those with disabilities.",
          sourceLink: "https://www.w3.org/WAI/standards-guidelines/wcag/"
        }, {
          id: 131,
          domain: QuizDomain.Standards,
          text: "What is the role of the Authoring Tool Accessibility Guidelines (ATAG)?",
          options: [
            "To improve website speed",
            "To ensure authoring tools are accessible and help create accessible content",
            "To standardize user interface design",
            "To enforce compliance with privacy regulations"
          ],
          correctAnswer: 1,
          explanation: "ATAG ensures that authoring tools are accessible to creators with disabilities and that they produce content conforming to accessibility standards.",
          sourceLink: "https://www.w3.org/WAI/standards-guidelines/atag/"
        },
        {
          id: 132,
          domain: QuizDomain.Standards,
          text: "Which international standard adopted WCAG 2.0 as a framework for web accessibility?",
          options: [
            "ISO/IEC 40500",
            "EN 301 549",
            "CRPD",
            "Marrakesh Treaty"
          ],
          correctAnswer: 0,
          explanation: "ISO/IEC 40500 is the ISO standard for WCAG 2.0, making it an internationally recognized framework for web accessibility.",
          sourceLink: "https://www.iso.org/standard/58625.html"
        },
        {
          id: 133,
          domain: QuizDomain.Standards,
          text: "What does the Equality Act 2010 in the UK enforce regarding accessibility?",
          options: [
            "Accessibility is optional for private organizations",
            "All services and goods must be accessible to people with disabilities",
            "Public transportation systems must meet accessibility requirements",
            "Web accessibility is mandatory for educational institutions only"
          ],
          correctAnswer: 1,
          explanation: "The Equality Act 2010 mandates that services and goods must be accessible to people with disabilities to prevent discrimination.",
          sourceLink: "https://www.gov.uk/guidance/equality-act-2010-guidance"
        },
        {
          id: 134,
          domain: QuizDomain.Standards,
          text: "What is the primary purpose of the Accessible Canada Act?",
          options: [
            "To establish a federal accessibility fund",
            "To ensure a barrier-free Canada by identifying, removing, and preventing accessibility barriers",
            "To enforce accessibility in private companies only",
            "To fund assistive technology for individuals"
          ],
          correctAnswer: 1,
          explanation: "The Accessible Canada Act aims to achieve a barrier-free Canada by identifying, removing, and preventing accessibility barriers in federal jurisdictions.",
          sourceLink: "https://www.canada.ca/en/employment-social-development/programs/accessible-people-disabilities/act-summary.html"
        },
        {
          id: 135,
          domain: QuizDomain.Standards,
          text: "What is the primary function of ARIA (Accessible Rich Internet Applications)?",
          options: [
            "To reduce web page loading times",
            "To enhance web interactivity and usability for assistive technologies",
            "To provide visual enhancements for interactive content",
            "To simplify coding practices for developers"
          ],
          correctAnswer: 1,
          explanation: "ARIA defines ways to make web content and applications more accessible to users who rely on assistive technologies.",
          sourceLink: "https://www.w3.org/WAI/standards-guidelines/aria/"
        },
        {
          id: 136,
          domain: QuizDomain.Standards,
          text: "Which principle is central to the Web Accessibility Directive (EU 2016/2102)?",
          options: [
            "Web content must use Level AAA compliance of WCAG",
            "Public sector websites and mobile apps must meet WCAG 2.1 Level AA standards",
            "Accessibility is limited to visual impairments",
            "Only private sector entities are included"
          ],
          correctAnswer: 2,
          explanation: "The Web Accessibility Directive requires public sector websites and mobile apps in the EU to meet WCAG 2.1 Level AA standards as a minimum.",
          sourceLink: "https://digital-strategy.ec.europa.eu/en/policies/web-accessibility"
        },
        {
          id: 137,
          domain: QuizDomain.Standards,
          text: "How does the Americans with Disabilities Act (ADA) apply to digital accessibility?",
          options: [
            "It mandates digital accessibility only for websites built after 2020",
            "It requires public accommodations to provide accessible digital content",
            "It excludes digital services from accessibility requirements",
            "It only applies to physical spaces"
          ],
          correctAnswer: 3,
          explanation: "The ADA requires entities providing public accommodations, like websites and mobile apps, to ensure their digital content is accessible to people with disabilities.",
          sourceLink: "https://www.ada.gov/"
        },
        {
          id: 138,
          domain: QuizDomain.Standards,
          text: "What is a key requirement of the Telecommunications Act Section 255?",
          options: [
            "All telecommunications companies must provide free assistive technologies",
            "Telecommunications equipment and services must be accessible to people with disabilities",
            "Web accessibility is mandatory for telecommunications providers",
            "Only video communications need to meet accessibility standards"
          ],
          correctAnswer: 1,
          explanation: "Section 255 ensures telecommunications equipment and services are accessible to individuals with disabilities.",
          sourceLink: "https://transition.fcc.gov/cgb/dro/section255.html"
        },
        {
          id: 139,
          domain: QuizDomain.Standards,
          text: "What does the UN Convention on the Rights of Persons with Disabilities (CRPD) require of its signatories?",
          options: [
            "To establish assistive technology programs",
            "To promote, protect, and ensure full rights and freedoms for people with disabilities",
            "To fund private organizations for accessibility improvements",
            "To provide free education for individuals with disabilities"
          ],
          correctAnswer: 3,
          explanation: "The CRPD is a legally binding international treaty requiring countries to protect and promote the rights of individuals with disabilities.",
          sourceLink: "https://www.un.org/disabilities/documents/convention/convoptprot-e.pdf"
        },
        {
          id: 140,
          domain: QuizDomain.Standards,
          text: "What does the Accessibility for Ontarians with Disabilities Act (AODA) aim to achieve by 2025?",
          options: [
            "Mandatory closed captioning on all media",
            "An accessible Ontario with barrier-free environments",
            "Accessible public transportation for all provinces",
            "Free assistive technologies for Ontarians"
          ],
          correctAnswer: 1,
          explanation: "The AODA aims to make Ontario fully accessible by identifying, removing, and preventing barriers for people with disabilities by 2025.",
          sourceLink: "https://www.ontario.ca/page/accessibility-laws"
        }, 
        {
            id: 141,
            domain: QuizDomain.Standards,
            text: "What is JIS X 8341 in Japan's accessibility standards?",
            options: [
              "A guideline for public spaces",
              "A standard for ICT accessibility applicable to public and private sectors",
              "A policy for education accessibility only",
              "A law requiring all websites to be universally designed"
            ],
            correctAnswer: 1,
            explanation: "JIS X 8341 is Japan’s standard for accessibility in ICT, focusing on ensuring digital content is accessible to all users.",
            sourceLink: "https://www.w3.org/WAI/policies/"
          },
          {
            id: 142,
            domain: QuizDomain.Standards,
            text: "Which country’s accessibility standards are considered one of the most comprehensive, covering everything from transportation to technology?",
            options: [
              "United States",
              "United Kingdom",
              "Canada",
              "Australia"
            ],
            correctAnswer: 3,
            explanation: "Australia's accessibility standards are comprehensive, including WCAG-based digital guidelines and regulations for transportation and public services.",
            sourceLink: "https://www.w3.org/WAI/policies/"
          },
          {
            id: 143,
            domain: QuizDomain.Standards,
            text: "What is the primary purpose of the CRPD (Convention on the Rights of Persons with Disabilities)?",
            options: [
              "To ensure economic opportunities for individuals with disabilities",
              "To enforce accessibility standards for public spaces",
              "To promote inclusion, equality, and human rights for people with disabilities",
              "To provide funding for assistive technologies globally"
            ],
            correctAnswer: 2,
            explanation: "The CRPD is a global treaty focusing on ensuring equality, inclusion, and the protection of human rights for individuals with disabilities.",
            sourceLink: "https://www.un.org/disabilities/documents/convention/convoptprot-e.pdf"
          },
          {
            id: 144,
            domain: QuizDomain.Standards,
            text: "What is the Marrakesh Treaty focused on?",
            options: [
              "Making public transportation accessible",
              "Creating exceptions to copyright laws for accessible books",
              "Standardizing assistive technology design",
              "Enforcing employment rights for people with disabilities"
            ],
            correctAnswer: 1,
            explanation: "The Marrakesh Treaty facilitates access to published works for people who are blind, visually impaired, or otherwise print-disabled.",
            sourceLink: "https://www.wipo.int/treaties/en/ip/marrakesh/"
          },
          {
            id: 145,
            domain: QuizDomain.Standards,
            text: "Which section of the ADA applies to telecommunications?",
            options: [
              "ADA Title I",
              "ADA Title II",
              "ADA Title III",
              "ADA Title IV"
            ],
            correctAnswer: 3,
            explanation: "ADA Title IV addresses telecommunications, requiring relay services for individuals with hearing or speech disabilities.",
            sourceLink: "https://www.ada.gov/"
          },
          {
            id: 146,
            domain: QuizDomain.Standards,
            text: "What does the European Accessibility Act (EAA) aim to achieve?",
            options: [
              "Mandatory assistive technology in all workplaces",
              "Harmonized accessibility requirements for key products and services across the EU",
              "Accessibility exclusively for public sector websites",
              "Universal compliance with WCAG 2.1 AAA"
            ],
            correctAnswer: 1,
            explanation: "The EAA establishes harmonized accessibility requirements for products and services such as banking, e-commerce, and ICT in the EU.",
            sourceLink: "https://ec.europa.eu/social/main.jsp?catId=1202"
          },
          {
            id: 147,
            domain: QuizDomain.Standards,
            text: "What is the primary focus of EN 301 549?",
            options: [
              "Physical accessibility standards",
              "Accessible ICT requirements in Europe",
              "Education accessibility guidelines",
              "Healthcare accessibility protocols"
            ],
            correctAnswer: 1,
            explanation: "EN 301 549 provides comprehensive guidelines for accessibility in ICT products and services across the EU.",
            sourceLink: "https://www.w3.org/WAI/standards-guidelines/en301549/"
          },
          {
            id: 148,
            domain: QuizDomain.Standards,
            text: "What is a key difference between JIS X 8341 and WCAG?",
            options: [
              "JIS X 8341 focuses only on public sector websites, while WCAG applies to all websites",
              "WCAG includes guidelines for mobile apps, while JIS X 8341 does not",
              "JIS X 8341 is a broader ICT standard covering accessibility beyond web content",
              "WCAG does not address user agents, while JIS X 8341 does"
            ],
            correctAnswer: 2,
            explanation: "JIS X 8341 applies to ICT accessibility beyond web content, whereas WCAG focuses specifically on web accessibility.",
            sourceLink: "https://www.w3.org/WAI/policies/"
          },
          {
            id: 149,
            domain: QuizDomain.Standards,
            text: "What is the main focus of Canada's Accessible Transportation for Persons with Disabilities Regulations?",
            options: [
              "Ensuring accessibility in digital content",
              "Establishing accessible transportation standards for federally regulated travel",
              "Funding assistive devices for private transportation",
              "Creating universally designed vehicles"
            ],
            correctAnswer: 1,
            explanation: "Canada’s regulations ensure federally regulated transportation is accessible to persons with disabilities.",
            sourceLink: "https://www.otc-cta.gc.ca/eng/accessible-transportation-persons-disabilities-regulations"
          },
          {
            id: 150,
            domain: QuizDomain.Standards,
            text: "Which global accessibility standard focuses on the rights and dignity of people with disabilities?",
            options: [
              "ISO/IEC 40500",
              "CRPD",
              "EN 301 549",
              "WCAG 2.1"
            ],
            correctAnswer: 1,
            explanation: "The CRPD emphasizes the importance of inclusion, equality, and dignity for individuals with disabilities worldwide.",
            sourceLink: "https://www.un.org/disabilities/documents/convention/convoptprot-e.pdf"
          },  {
    id: 151,
    domain: QuizDomain.Disabilities,
    text: "What is the primary characteristic of Down syndrome?",
    options: [
      "An inherited cognitive disability",
      "A genetic condition caused by the presence of an extra chromosome",
      "A mobility impairment affecting motor skills",
      "A neurodegenerative condition"
    ],
    correctAnswer: 1,
    explanation: "Down syndrome is a genetic condition caused by an extra copy of chromosome 21, leading to developmental and cognitive delays.",
    sourceLink: "https://www.cdc.gov/ncbddd/birthdefects/downsyndrome.html"
  },
  {
    id: 152,
    domain: QuizDomain.Accessibility,
    text: "What does 'keyboard operability' mean in web accessibility?",
    options: [
      "Ensuring content can be navigated and interacted with using a keyboard",
      "Creating shortcuts for every webpage element",
      "Making websites load faster on keyboard-enabled devices",
      "Providing alternative layouts for keyboard users"
    ],
    correctAnswer: 0,
    explanation: "Keyboard operability ensures that users who rely on keyboards can navigate and interact with all webpage elements.",
    sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible.html"
  },
  {
    id: 153,
    domain: QuizDomain.Standards,
    text: "Which law protects individuals with disabilities from discrimination in federally funded education programs in the United States?",
    options: [
      "The Americans with Disabilities Act (ADA)",
      "Section 504 of the Rehabilitation Act",
      "The Individuals with Disabilities Education Act (IDEA)",
      "The Equality Act 2010"
    ],
    correctAnswer: 1,
    explanation: "Section 504 of the Rehabilitation Act ensures that individuals with disabilities have equal access to federally funded education programs.",
    sourceLink: "https://www2.ed.gov/about/offices/list/ocr/504faq.html"
  },
  {
    id: 154,
    domain: QuizDomain.Accessibility,
    text: "What is the main purpose of captions in video content?",
    options: [
      "To improve video quality",
      "To provide text alternatives for spoken content",
      "To reduce bandwidth usage",
      "To enhance SEO rankings"
    ],
    correctAnswer: 1,
    explanation: "Captions provide text alternatives for spoken content, making videos accessible to users who are deaf or hard of hearing.",
    sourceLink: "https://www.w3.org/WAI/media/av/captions/"
  },
  {
    id: 155,
    domain: QuizDomain.Disabilities,
    text: "What is the primary impact of cerebral palsy on individuals?",
    options: [
      "Difficulty processing auditory information",
      "Challenges with physical movement and motor skills",
      "Loss of cognitive function over time",
      "Complete inability to communicate"
    ],
    correctAnswer: 1,
    explanation: "Cerebral palsy primarily affects motor function, including movement and coordination, due to damage to the developing brain.",
    sourceLink: "https://www.cdc.gov/ncbddd/cp/facts.html"
  },
  {
    id: 156,
    domain: QuizDomain.Standards,
    text: "What is the primary focus of the Web Content Accessibility Guidelines (WCAG) Principle 'Understandable'?",
    options: [
      "Ensuring content is readable and predictable",
      "Making sure content is operable with a keyboard",
      "Providing robust compatibility with assistive technologies",
      "Ensuring content is perceivable by all users"
    ],
    correctAnswer: 0,
    explanation: "The 'Understandable' principle ensures that users can read, comprehend, and predict how to interact with content.",
    sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/understandable.html"
  },
  {
    id: 157,
    domain: QuizDomain.Accessibility,
    text: "What is the benefit of providing skip links on a webpage?",
    options: [
      "Improves SEO rankings",
      "Allows users to bypass repetitive content and navigate to the main content",
      "Increases website speed",
      "Provides a better layout for mobile users"
    ],
    correctAnswer: 1,
    explanation: "Skip links allow users, especially those using assistive technologies, to bypass repetitive navigation elements and quickly access the main content.",
    sourceLink: "https://webaim.org/techniques/skipnav/"
  },
  {
    id: 158,
    domain: QuizDomain.Standards,
    text: "What is a VPAT (Voluntary Product Accessibility Template)?",
    options: [
      "A tool to evaluate website performance",
      "A document detailing a product's compliance with accessibility standards",
      "A standard for creating accessible web content",
      "A guide for making public spaces accessible"
    ],
    correctAnswer: 1,
    explanation: "A VPAT is a document used to report how a product or service conforms to accessibility standards.",
    sourceLink: "https://www.section508.gov/sell/vpat/"
  },
  {
    id: 159,
    domain: QuizDomain.Disabilities,
    text: "What is the primary function of a cochlear implant?",
    options: [
      "To improve visual processing",
      "To provide electrical stimulation to the auditory nerve, aiding hearing",
      "To assist with balance issues",
      "To amplify sound for people with mild hearing loss"
    ],
    correctAnswer: 1,
    explanation: "Cochlear implants electrically stimulate the auditory nerve, enabling individuals with profound hearing loss to perceive sound.",
    sourceLink: "https://www.nidcd.nih.gov/health/cochlear-implants"
  },
  {
    id: 160,
    domain: QuizDomain.Accessibility,
    text: "Which WCAG guideline focuses on making content easier to see and hear?",
    options: [
      "Perceivable",
      "Operable",
      "Understandable",
      "Robust"
    ],
    correctAnswer: 0,
    explanation: "The 'Perceivable' guideline ensures that content is presented in ways that can be perceived by all users, including text alternatives for non-text content.",
    sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/perceivable.html"
  }, 
   {
    id: 161,
    domain: QuizDomain.Disabilities,
    text: "What is the primary characteristic of muscular dystrophy?",
    options: [
      "A genetic condition causing progressive muscle weakness",
      "A condition affecting cognitive function",
      "A sensory impairment that impacts balance",
      "A condition causing chronic pain"
    ],
    correctAnswer: 0,
    explanation: "Muscular dystrophy is a group of genetic diseases that cause progressive weakness and loss of muscle mass.",
    sourceLink: "https://www.mda.org/disease/muscular-dystrophy"
  },
  {
    id: 162,
    domain: QuizDomain.Standards,
    text: "What is the purpose of Section 501 of the Rehabilitation Act?",
    options: [
      "Ensuring accessibility of public transportation",
      "Preventing discrimination in federal employment",
      "Establishing accessibility standards for websites",
      "Providing funding for assistive technologies"
    ],
    correctAnswer: 1,
    explanation: "Section 501 prohibits discrimination against individuals with disabilities in federal employment.",
    sourceLink: "https://www.eeoc.gov/statutes/rehabilitation-act-1973"
  },
  {
    id: 163,
    domain: QuizDomain.Accessibility,
    text: "What is the main function of screen readers?",
    options: [
      "To magnify text on a screen",
      "To convert text and other content into speech or Braille output",
      "To enhance the contrast of web content",
      "To block ads on web pages"
    ],
    correctAnswer: 1,
    explanation: "Screen readers are assistive technologies that convert text and other digital content into speech or Braille, helping visually impaired users.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
  },
  {
    id: 164,
    domain: QuizDomain.Disabilities,
    text: "What is a common assistive technology for individuals with limited fine motor skills?",
    options: [
      "Braille displays",
      "Eye-tracking systems",
      "Closed captions",
      "Voice recognition software"
    ],
    correctAnswer: 3,
    explanation: "Voice recognition software allows individuals with limited fine motor skills to interact with devices through spoken commands.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
  },
  {
    id: 165,
    domain: QuizDomain.Standards,
    text: "What does the Individuals with Disabilities Education Act (IDEA) ensure?",
    options: [
      "Universal healthcare for individuals with disabilities",
      "Access to public transportation for all students",
      "Free and appropriate public education for children with disabilities",
      "Accessibility standards for online learning platforms"
    ],
    correctAnswer: 2,
    explanation: "IDEA ensures children with disabilities receive free and appropriate public education tailored to their needs.",
    sourceLink: "https://sites.ed.gov/idea/"
  },
  {
    id: 166,
    domain: QuizDomain.Accessibility,
    text: "Why is providing text alternatives for images important?",
    options: [
      "It improves page load speed",
      "It makes content accessible to screen reader users",
      "It reduces file sizes",
      "It enhances visual appeal for users"
    ],
    correctAnswer: 1,
    explanation: "Text alternatives make images accessible to users who rely on screen readers, ensuring content is perceivable.",
    sourceLink: "https://www.w3.org/WAI/tutorials/images/"
  },
  {
    id: 167,
    domain: QuizDomain.Disabilities,
    text: "What is the primary focus of augmentative and alternative communication (AAC) devices?",
    options: [
      "Improving motor function",
      "Enhancing hearing abilities",
      "Supporting communication for individuals with speech impairments",
      "Providing visual aids for learning"
    ],
    correctAnswer: 2,
    explanation: "AAC devices help individuals with speech impairments communicate by providing alternative means of expression, such as symbols, text, or speech output.",
    sourceLink: "https://www.asha.org/public/speech/disorders/aac/"
  },
  {
    id: 168,
    domain: QuizDomain.Standards,
    text: "What is the significance of the UN Sustainable Development Goal (SDG) 10 for accessibility?",
    options: [
      "It focuses on reducing inequalities, including for people with disabilities",
      "It mandates the use of assistive technologies worldwide",
      "It enforces accessibility in education systems globally",
      "It funds research for universal design implementation"
    ],
    correctAnswer: 0,
    explanation: "SDG 10 emphasizes reducing inequalities, ensuring people with disabilities have equal access to opportunities and resources.",
    sourceLink: "https://sdgs.un.org/goals/goal10"
  },
  {
    id: 169,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of the 'Operable' principle in WCAG?",
    options: [
      "To ensure content is easy to navigate and interact with",
      "To make text alternatives available for images",
      "To provide error-free interactive elements",
      "To enhance page loading speed"
    ],
    correctAnswer: 0,
    explanation: "The 'Operable' principle ensures users can navigate and interact with content using various input methods, like keyboards or touch.",
    sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/operable.html"
  },
  {
    id: 170,
    domain: QuizDomain.Disabilities,
    text: "Which type of disability is most likely to benefit from tactile graphics?",
    options: [
      "Cognitive disabilities",
      "Visual disabilities",
      "Mobility disabilities",
      "Auditory disabilities"
    ],
    correctAnswer: 1,
    explanation: "Tactile graphics provide spatial and visual information in a tactile format, benefiting individuals with visual impairments.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
  }, 
    {
    id: 171,
    domain: QuizDomain.Accessibility,
    text: "What is the primary goal of Universal Design?",
    options: [
      "To create designs exclusively for people with disabilities",
      "To eliminate the need for assistive technologies",
      "To make products and environments usable by all people without the need for adaptation",
      "To reduce production costs for accessible products"
    ],
    correctAnswer: 2,
    explanation: "Universal Design aims to create products and environments usable by everyone, regardless of ability, without the need for special adaptations.",
    sourceLink: "https://www.w3.org/WAI/fundamentals/accessibility-principles/"
  },
  {
    id: 172,
    domain: QuizDomain.Accessibility,
    text: "Which Universal Design principle focuses on making the design easy to use and understand for all users?",
    options: [
      "Tolerance for Error",
      "Flexibility in Use",
      "Equitable Use",
      "Simple and Intuitive Use"
    ],
    correctAnswer: 3,
    explanation: "The 'Simple and Intuitive Use' principle ensures that the design is easy to understand and use, regardless of the user’s experience, knowledge, or language skills.",
    sourceLink: "https://projects.ncsu.edu/design/cud/about_ud/udprinciples.htm"
  },
  {
    id: 173,
    domain: QuizDomain.Accessibility,
    text: "Which guideline of the Universal Design for Learning (UDL) principle 'Multiple Means of Engagement' helps learners stay motivated?",
    options: [
      "Provide options for sustaining effort and persistence",
      "Provide options for representation",
      "Provide options for comprehension",
      "Provide options for executive function"
    ],
    correctAnswer: 0,
    explanation: "Providing options for sustaining effort and persistence keeps learners motivated by supporting engagement and goal setting.",
    sourceLink: "https://udlguidelines.cast.org/engagement/effort-persistence"
  },
  {
    id: 174,
    domain: QuizDomain.Accessibility,
    text: "How does Universal Design benefit educational environments?",
    options: [
      "By tailoring materials for individual students",
      "By providing multiple means of representation, engagement, and action for all learners",
      "By eliminating the need for teacher intervention",
      "By standardizing learning for all students"
    ],
    correctAnswer: 1,
    explanation: "Universal Design in education ensures materials are accessible and usable by providing multiple means of representation, engagement, and action.",
    sourceLink: "https://udlguidelines.cast.org/"
  },
  {
    id: 175,
    domain: QuizDomain.Accessibility,
    text: "What is the key focus of the Universal Design principle 'Equitable Use'?",
    options: [
      "Ensuring designs are cost-effective",
      "Providing the same means of use for all users without segregation or stigma",
      "Creating specialized products for disabled users",
      "Improving user satisfaction through personalization"
    ],
    correctAnswer: 1,
    explanation: "Equitable Use ensures designs are accessible and usable for everyone, regardless of ability, without segregation or stigma.",
    sourceLink: "https://projects.ncsu.edu/design/cud/about_ud/udprinciples.htm"
  },
  {
    id: 176,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of accessible educational materials (AEM)?",
    options: [
      "To improve print quality",
      "To provide learning materials in formats usable by all learners, including those with disabilities",
      "To simplify complex topics",
      "To reduce the cost of educational content"
    ],
    correctAnswer: 1,
    explanation: "AEM ensures all learners, including those with disabilities, can access and use educational materials in appropriate formats, such as Braille, audio, or digital text.",
    sourceLink: "https://aem.cast.org/"
  },
  {
    id: 177,
    domain: QuizDomain.Accessibility,
    text: "What is the relationship between Universal Design and assistive technology?",
    options: [
      "Universal Design eliminates the need for assistive technology",
      "Universal Design complements assistive technology by reducing the need for individual accommodations",
      "Assistive technology replaces Universal Design in accessible environments",
      "Universal Design focuses solely on assistive technology"
    ],
    correctAnswer: 1,
    explanation: "Universal Design complements assistive technology by creating environments that minimize the need for individualized accommodations while still supporting diverse needs.",
    sourceLink: "https://www.w3.org/WAI/fundamentals/accessibility-intro/"
  },
  {
    id: 178,
    domain: QuizDomain.Accessibility,
    text: "Which Universal Design principle addresses minimizing hazards and adverse consequences in the design?",
    options: [
      "Flexibility in Use",
      "Tolerance for Error",
      "Equitable Use",
      "Simple and Intuitive Use"
    ],
    correctAnswer: 1,
    explanation: "The 'Tolerance for Error' principle focuses on minimizing hazards and adverse consequences from accidental or unintended actions.",
    sourceLink: "https://projects.ncsu.edu/design/cud/about_ud/udprinciples.htm"
  },
  {
    id: 179,
    domain: QuizDomain.Accessibility,
    text: "How does Universal Design for Learning (UDL) help reduce barriers in education?",
    options: [
      "By simplifying lesson plans",
      "By providing one-size-fits-all solutions",
      "By offering multiple ways to access and engage with content",
      "By eliminating the need for accommodations"
    ],
    correctAnswer: 2,
    explanation: "UDL reduces barriers in education by offering multiple ways to represent content, engage learners, and express knowledge.",
    sourceLink: "https://udlguidelines.cast.org/"
  },
  {
    id: 180,
    domain: QuizDomain.Accessibility,
    text: "Which Universal Design principle emphasizes flexibility in accommodating diverse preferences and abilities?",
    options: [
      "Equitable Use",
      "Flexibility in Use",
      "Tolerance for Error",
      "Perceptible Information"
    ],
    correctAnswer: 1,
    explanation: "The 'Flexibility in Use' principle accommodates a wide range of preferences and abilities, allowing users to interact with the design in multiple ways.",
    sourceLink: "https://projects.ncsu.edu/design/cud/about_ud/udprinciples.htm"
  },
    {
    id: 181,
    domain: QuizDomain.Disabilities,
    text: "What is the primary characteristic of spina bifida?",
    options: [
      "A neurodegenerative condition affecting memory",
      "A birth defect that affects the spinal cord and backbone",
      "A condition causing progressive muscle weakness",
      "A visual impairment caused by nerve damage"
    ],
    correctAnswer: 1,
    explanation: "Spina bifida is a neural tube defect that occurs during development and can lead to mobility and bladder control challenges.",
    sourceLink: "https://www.cdc.gov/ncbddd/spinabifida/facts.html"
  },
  {
    id: 182,
    domain: QuizDomain.Standards,
    text: "What is the purpose of the Web Accessibility Initiative (WAI) ARIA specification?",
    options: [
      "To provide visual styling for websites",
      "To improve web navigation for users without disabilities",
      "To enhance the accessibility of dynamic web content for assistive technologies",
      "To standardize web design across all browsers"
    ],
    correctAnswer: 2,
    explanation: "WAI-ARIA (Accessible Rich Internet Applications) provides specifications for improving the accessibility of dynamic web content for assistive technologies.",
    sourceLink: "https://www.w3.org/WAI/ARIA/"
  },
  {
    id: 183,
    domain: QuizDomain.Accessibility,
    text: "Which accessibility feature is most beneficial for individuals with low vision?",
    options: [
      "Voice recognition software",
      "Text-to-speech technology",
      "Screen magnifiers",
      "Tactile graphics"
    ],
    correctAnswer: 2,
    explanation: "Screen magnifiers enlarge content on screens, making it easier for individuals with low vision to see and interact with digital content.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
  },
  {
    id: 184,
    domain: QuizDomain.Standards,
    text: "Which global accessibility standard focuses on ICT procurement in Europe?",
    options: [
      "ISO/IEC 40500",
      "EN 301 549",
      "WCAG 2.1",
      "CRPD"
    ],
    correctAnswer: 1,
    explanation: "EN 301 549 outlines accessibility requirements for ICT products and services across Europe, supporting harmonization in procurement.",
    sourceLink: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
  },
  {
    id: 185,
    domain: QuizDomain.Disabilities,
    text: "What is the most common assistive technology for individuals with hearing impairments?",
    options: [
      "Braille displays",
      "Hearing aids",
      "Voice recognition software",
      "Screen readers"
    ],
    correctAnswer: 1,
    explanation: "Hearing aids amplify sound and are a common assistive technology for individuals with hearing impairments.",
    sourceLink: "https://www.w3.org/WAI/people-use-web/tools-techniques/"
  },
  {
    id: 186,
    domain: QuizDomain.Accessibility,
    text: "What does 'operable' mean in the context of WCAG principles?",
    options: [
      "Content must be easy to perceive visually and audibly",
      "Content must work seamlessly with all assistive technologies",
      "Users must be able to navigate and interact with content using different input methods",
      "Content must provide text alternatives for non-text elements"
    ],
    correctAnswer: 2,
    explanation: "The 'Operable' principle ensures that users can navigate and interact with content using various input methods, such as keyboards or touch.",
    sourceLink: "https://www.w3.org/WAI/WCAG21/Understanding/operable.html"
  },
  {
    id: 187,
    domain: QuizDomain.Disabilities,
    text: "Which condition is associated with difficulty processing sensory input?",
    options: [
      "Hearing loss",
      "Sensory processing disorder",
      "Cognitive disability",
      "Dysgraphia"
    ],
    correctAnswer: 1,
    explanation: "Sensory processing disorder affects how the brain processes sensory input, leading to challenges with sensory integration.",
    sourceLink: "https://www.spdstar.org/"
  },
  {
    id: 188,
    domain: QuizDomain.Standards,
    text: "What is the primary goal of the Marrakesh Treaty?",
    options: [
      "To promote web accessibility worldwide",
      "To facilitate access to published works for individuals who are blind or visually impaired",
      "To mandate universal design in education",
      "To fund assistive technology research"
    ],
    correctAnswer: 1,
    explanation: "The Marrakesh Treaty allows for exceptions to copyright laws, making published works accessible to individuals with print disabilities.",
    sourceLink: "https://www.wipo.int/treaties/en/ip/marrakesh/"
  },
  {
    id: 189,
    domain: QuizDomain.Accessibility,
    text: "What is the purpose of providing audio descriptions in videos?",
    options: [
      "To improve sound quality",
      "To provide descriptions of visual elements for users with visual impairments",
      "To add captions for spoken content",
      "To translate content into multiple languages"
    ],
    correctAnswer: 1,
    explanation: "Audio descriptions provide descriptions of visual elements in videos, helping users with visual impairments understand the content.",
    sourceLink: "https://www.w3.org/WAI/media/av/description/"
  },
  {
    id: 190,
    domain: QuizDomain.Disabilities,
    text: "What is dyspraxia?",
    options: [
      "A condition affecting motor coordination and planning",
      "A language processing disorder",
      "A sensory impairment affecting hearing",
      "A visual impairment caused by nerve damage"
    ],
    correctAnswer: 0,
    explanation: "Dyspraxia, also known as developmental coordination disorder (DCD), affects motor coordination and planning, impacting everyday tasks.",
    sourceLink: "https://www.nhs.uk/conditions/developmental-coordination-disorder-dyspraxia/"
  }
];