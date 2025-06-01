// --- CARD DATA ---
// IMPORTANT: You need to populate this with ALL your 78 cards.
// I'm providing a few examples for each type.
const cardsData = [
    // --- Archetypes (22 - As previously defined, assuming these are complete) ---
    {
        id: "arch01", type: "archetype", title: "THE PIONEER", traditionalReference: "The Fool",
        coreEssence: "The embodiment of fearless exploration, embracing new beginnings with optimism and an open heart.",
        strengths: ["Embraces new ventures and uncharted territory.", "Radiates an optimistic and hopeful outlook.", "Naturally adaptable and spontaneous in response to change.", "Unafraid to take calculated risks for potential growth."],
        shadows: ["Can overlook practical details or potential pitfalls (naivety).", "Impulsiveness may lead to recklessness if not tempered with foresight.", "May struggle with sustained focus or long-term follow-through."]
    },
    {
        id: "arch02", type: "archetype", title: "THE ALCHEMIST", traditionalReference: "The Magician",
        coreEssence: "The skillful transformer of ideas into reality, wielding resources with confidence and creativity.",
        strengths: ["Skillful execution, bringing ideas to tangible form.", "Resourceful problem-solver, finding solutions with available tools.", "Transforms abstract concepts into practical reality.", "Confident in abilities and capacity to manifest."],
        shadows: ["Can appear manipulative or overly controlling of processes.", "Over-reliance on own skills, potentially neglecting collaboration.", "Risk of superficiality if depth of understanding is lacking."]
    },
    {
        id: "arch03", type: "archetype", title: "THE SAGE", traditionalReference: "The High Priestess",
        coreEssence: "The guardian of inner wisdom, perceiving underlying currents and unspoken truths with profound insight.",
        strengths: ["Deeply insightful, often seeing what others miss.", "Trusts inner wisdom and intuition implicitly.", "Excellent listener, capable of hearing subtle nuances.", "Understands unspoken needs and hidden dynamics."],
        shadows: ["Can be overly passive or withdrawn, hesitant to share insights.", "May appear mysterious or unapproachable to others.", "Risk of becoming lost in introspection without action."]
    },
    {
        id: "arch04", type: "archetype", title: "THE VISIONARY", traditionalReference: "The Empress",
        coreEssence: "The nurturer of growth and abundance, fostering creativity and creating harmonious, supportive environments.",
        strengths: ["Nurturing and supportive of others' potential.", "Fosters growth, creativity, and new life in projects/teams.", "Abundant in ideas, resources, and generative energy.", "Creates harmonious and aesthetically pleasing environments."],
        shadows: ["Can become overbearing or smothering if not balanced.", "May struggle with setting firm boundaries.", "Potential for possessiveness over creations or relationships."]
    },
    {
        id: "arch05", type: "archetype", title: "THE ARCHITECT", traditionalReference: "The Emperor",
        coreEssence: "The master of structure and order, establishing clear foundations and systems for stability and achievement.",
        strengths: ["Establishes clear structures and effective systems.", "Decisive and authoritative in a grounded way.", "Creates order, stability, and predictability.", "Protects and provides for the system or endeavor."],
        shadows: ["Can become rigid or overly controlling, resistant to new methods.", "May stifle creativity through excessive adherence to rules.", "Authoritarian tendencies if power is unchecked."]
    },
    {
        id: "arch06", type: "archetype", title: "THE MENTOR", traditionalReference: "The Hierophant",
        coreEssence: "The keeper of wisdom and tradition, guiding others through established knowledge and shared values.",
        strengths: ["Shares wisdom, knowledge, and valuable experience.", "Upholds important traditions, processes, or ethical standards.", "Guides others effectively through teaching and counsel.", "Provides trusted advice and acts as a moral compass."],
        shadows: ["Can be dogmatic or inflexible, resistant to unconventional ideas.", "May prioritize tradition over necessary innovation or adaptation.", "Risk of becoming preachy or overly prescriptive."]
    },
    {
        id: "arch07", type: "archetype", title: "THE HARMONIZER", traditionalReference: "The Lovers",
        coreEssence: "The builder of authentic connections and aligned choices, valuing collaboration and relational integrity.",
        strengths: ["Builds strong, authentic partnerships and alliances.", "Values collaboration and seeks win-win outcomes.", "Makes choices aligned with core values and principles.", "Excellent communicator in fostering understanding."],
        shadows: ["Indecisiveness when faced with conflicting values or choices.", "Potential for people-pleasing to avoid difficult conversations.", "May struggle with necessary conflict or tough decisions impacting relationships."]
    },
    {
        id: "arch08", type: "archetype", title: "THE DRIVER", traditionalReference: "The Chariot",
        coreEssence: "The focused force of will and determination, overcoming obstacles to achieve ambitious goals with directness.",
        strengths: ["Highly focused and determined in pursuit of goals.", "Overcomes obstacles with willpower and assertive action.", "Achieves ambitious objectives through direct effort.", "Strong sense of direction and ability to mobilize energy."],
        shadows: ["Can be aggressive, overly forceful, or impatient.", "Prone to tunnel vision, neglecting other important factors.", "May run over others or burn out from relentless drive."]
    },
    {
        id: "arch09", type: "archetype", title: "THE WARRIOR", traditionalReference: "Strength",
        coreEssence: "The embodiment of courage, resilience, and compassionate influence, taming challenges with inner fortitude.",
        strengths: ["Exhibits courage, resilience, and inner strength.", "Manages challenges with patience and calm persistence.", "Persuades and influences with compassion rather than force.", "Possesses deep inner fortitude and self-control."],
        shadows: ["Can misapply strength as brute force if not balanced with wisdom.", "Impatience with perceived weakness in self or others.", "May underestimate the power of subtle approaches."]
    },
    {
        id: "arch10", type: "archetype", title: "THE THINKER", traditionalReference: "The Hermit",
        coreEssence: "The seeker of knowledge and profound understanding, offering insights gleaned from introspection and analysis.",
        strengths: ["Analytical and introspective, capable of deep thought.", "Seeks knowledge, truth, and understanding diligently.", "Offers profound insights and well-considered advice.", "Works effectively independently, valuing solitude for reflection."],
        shadows: ["Can become isolated, detached, or socially withdrawn.", "Prone to overthinking, leading to inaction or analysis paralysis.", "May appear aloof, critical, or disconnected from practical matters."]
    },
    {
        id: "arch11", type: "archetype", title: "THE CATALYST", traditionalReference: "Wheel of Fortune",
        coreEssence: "The agent of change and adaptation, recognizing and embracing life's cycles and turning points.",
        strengths: ["Adapts to change readily and sees opportunity in flux.", "Understands cycles, patterns, and the nature of impermanence.", "Embraces new directions and can pivot effectively.", "Often brings a sense of timely intervention or luck."],
        shadows: ["Can feel at the mercy of external forces if not proactive.", "May resist stability or struggle with routine.", "Difficulty grounding during turbulent times if not mindful."]
    },
    {
        id: "arch12", type: "archetype", title: "THE ADVOCATE", traditionalReference: "Justice",
        coreEssence: "The champion of fairness, truth, and accountability, making balanced decisions based on ethical principles.",
        strengths: ["Upholds fairness, ethics, and moral principles.", "Seeks truth and clarity with impartiality.", "Makes balanced, well-reasoned decisions.", "Champions accountability and responsibility."],
        shadows: ["Can be overly critical, judgmental, or legalistic.", "Rigidity in applying rules, potentially lacking compassion or nuance.", "Difficulty with forgiveness or accepting ambiguity."]
    },
    {
        id: "arch13", type: "archetype", title: "THE TRANSFORMER", traditionalReference: "The Hanged Man",
        coreEssence: "The embracer of new perspectives through surrender and pause, willing to see things differently for deeper learning.",
        strengths: ["Gains new perspectives by pausing and shifting viewpoint.", "Willing to make sacrifices for greater understanding or a higher cause.", "Embraces surrender to learn and grow.", "Capacity for innovative thinking and seeing unconventional solutions."],
        shadows: ["Can get stuck in passivity, indecision, or a martyr complex.", "Prone to feeling like a victim if perspective isn't empowering.", "Resisting necessary action by over-contemplating."]
    },
    {
        id: "arch14", type: "archetype", title: "THE LIBERATOR", traditionalReference: "Death",
        coreEssence: "The facilitator of necessary endings and profound transformations, clearing the way for new beginnings.",
        strengths: ["Facilitates necessary endings and transitions effectively.", "Clears the way for new beginnings by letting go of the old.", "Embraces transformation and the cycle of renewal.", "Helps release what no longer serves individual or system health."],
        shadows: ["Can be abrupt or insensitive during transitions if not mindful.", "Resistance to the grieving process (own or others').", "Fear of the unknown that follows significant endings."]
    },
    {
        id: "arch15", type: "archetype", title: "THE SYNERGIST", traditionalReference: "Temperance",
        coreEssence: "The masterful blender of diverse elements, fostering balance, integration, and harmonious solutions.",
        strengths: ["Blends diverse elements, ideas, or people effectively.", "Fosters balance, moderation, and integration.", "Patient and adaptable in finding harmonious solutions.", "Creates synergy where the whole is greater than the sum of parts."],
        shadows: ["Can be slow to commit to one path, seeking perfect balance.", "Risk of diluting impact if too many elements are over-managed.", "Avoidance of necessary extremes or bold actions."]
    },
    {
        id: "arch16", type: "archetype", title: "THE REVEALER", traditionalReference: "The Devil",
        coreEssence: "The courageous confronter of limiting beliefs and shadow patterns, empowering through radical honesty.",
        strengths: ["Confronts limiting beliefs, illusions, or unhealthy patterns.", "Exposes hidden dynamics, addictions, or unacknowledged truths.", "Understands deep motivations and the power of shadow work.", "Empowers by facing and integrating challenging aspects."],
        shadows: ["Can become cynical, fixated on negativity, or overly provocative.", "Risk of misusing insights if not guided by compassion.", "Getting stuck in the problem without moving towards resolution."]
    },
    {
        id: "arch17", type: "archetype", title: "THE DISRUPTOR", traditionalReference: "The Tower",
        coreEssence: "The catalyst for sudden, necessary upheaval, clearing away false structures to reveal truth and enable rebuilding.",
        strengths: ["Shakes up complacent or dysfunctional structures.", "Reveals foundational flaws, forcing a reassessment for authentic rebuilding.", "Catalyzes sudden, necessary change and breakthroughs.", "Brings liberating clarity after a period of illusion."],
        shadows: ["Can create chaos or destruction without a clear plan for rebuilding.", "Insensitivity to the impact of disruption on others.", "Change for change's sake, without true systemic need."]
    },
    {
        id: "arch18", type: "archetype", title: "THE INSPIRER", traditionalReference: "The Star",
        coreEssence: "The beacon of hope, authenticity, and higher purpose, radiating optimism and promoting healing.",
        strengths: ["Radiates hope, optimism, and a sense of possibility.", "Connects to a higher purpose, vision, or guiding ideals.", "Inspires others with authenticity and genuine belief.", "Promotes healing, renewal, and faith in the future."],
        shadows: ["Can be unrealistic or overly idealistic, detached from practical realities.", "Vulnerability if hope isn't grounded in actionable steps.", "May struggle with disillusionment when faced with harsh truths."]
    },
    {
        id: "arch19", type: "archetype", title: "THE NAVIGATOR", traditionalReference: "The Moon",
        coreEssence: "The intuitive guide through uncertainty and the subconscious, understanding complex emotions and hidden paths.",
        strengths: ["Navigates uncertainty, ambiguity, and the unknown with intuition.", "Trusts subconscious cues, dreams, and subtle energies.", "Understands complex emotions in self and others.", "Creative, imaginative, and attuned to deeper currents."],
        shadows: ["Prone to anxiety, fear, or confusion in unclear situations.", "Can be misled by illusions, projections, or ungrounded fears.", "Difficulty with clear, rational assessment when emotions are high."]
    },
    {
        id: "arch20", type: "archetype", title: "THE ILLUMINATOR", traditionalReference: "The Sun",
        coreEssence: "The bringer of clarity, joy, and vital energy, radiating confidence and fostering success and understanding.",
        strengths: ["Brings clarity, joy, vitality, and vibrant energy.", "Achieves success and recognition through authentic expression.", "Radiates confidence, enthusiasm, and warmth.", "Fosters understanding, enlightenment, and a positive outlook."],
        shadows: ["Can be overwhelming or blinding in intensity if not modulated.", "Potential for ego inflation or overconfidence.", "Lack of awareness of shadows (own or others') due to constant brightness."]
    },
    {
        id: "arch21", type: "archetype", title: "THE ASSESSOR", traditionalReference: "Judgement",
        coreEssence: "The agent of clear evaluation and renewal, learning from the past to embrace a higher calling and new purpose.",
        strengths: ["Makes clear evaluations, discerning judgments, and sound decisions.", "Learns from past experiences to inform future choices.", "Embraces accountability, atonement, and self-renewal.", "Rises to a higher calling or a new level of purpose."],
        shadows: ["Can be overly self-critical or harshly judgmental of others.", "Difficulty letting go of the past or past mistakes.", "Fear of making the 'wrong' final decision, leading to paralysis."]
    },
    {
        id: "arch22", type: "archetype", title: "THE INTEGRATOR", traditionalReference: "The World",
        coreEssence: "The embodiment of completion, fulfillment, and successful integration, celebrating wholeness and accomplishment.",
        strengths: ["Achieves completion, fulfillment, and a sense of wholeness.", "Successfully integrates diverse parts into a cohesive unity.", "Celebrates accomplishments and the culmination of efforts.", "Operates with a sense of interconnectedness and worldly wisdom."],
        shadows: ["Can become stagnant or complacent after major completion.", "Reluctance to start new cycles or embrace new challenges.", "Difficulty recognizing when a new journey or learning is needed."]
    },

    // --- Actions (Full Set - 10 per suit) ---
    // Fire (Continuing from previous 3)
    {
        id: "fire01", type: "action", suit: "fire", number: "ace", title: "SPARKING IDEAS",
        iAm: "The initial burst of inspiration, the courage to begin something new, the raw spark of creative potential.",
        underplayed: "The system experiences stagnation; innovative ideas are missed or unvoiced. Enthusiasm for new directions is low, missing crucial 'Signals' for emergence.",
        overplayed: "Too many initiatives start without adequate resources or follow-through, leading to system burnout. Impulsive action without broader system 'Alignment' can create confusion."
    },
    {
        id: "fire02", type: "action", suit: "fire", number: "2", title: "BOLD PLANNING",
        iAm: "I confidently map out the initial steps of a new venture or direction, leaning into the system's desire for change.",
        underplayed: "Hesitation, lack of clear direction despite ideas, fear of commitment. System remains 'stuck'.",
        overplayed: "Overconfidence in early plans, ignoring potential obstacles, rushing the planning phase which can trigger 'Defensiveness'."
    },
    {
        id: "fire03", type: "action", suit: "fire", number: "3", title: "PIONEERING ACTION",
        iAm: "I take the first tangible steps, exploring new territory and anticipating growth for the system.",
        underplayed: "Ideas remain theoretical, fear of the unknown halts progress, system inertia prevails.",
        overplayed: "Expanding too quickly without securing foundations, neglecting current system needs, impatience for results."
    },
    {
        id: "fire04", type: "action", suit: "fire", number: "4", title: "CELEBRATING MILESTONES",
        iAm: "I acknowledge and celebrate initial successes, building team spirit and stabilizing system morale.",
        underplayed: "Lack of recognition leads to demotivation. Burnout from constant push without pause for positive reinforcement.",
        overplayed: "Complacency after minor wins. Resting on laurels too soon, losing forward momentum for the system."
    },
    {
        id: "fire05", type: "action", suit: "fire", number: "5", title: "NAVIGATING CREATIVE TENSION",
        iAm: "I engage with diverse perspectives and constructive conflict to refine ideas and strengthen system outcomes.",
        underplayed: "Avoidance of necessary debate leads to groupthink. Suppressed innovation and unresolved 'Relationship Edges'.",
        overplayed: "Constant arguments and unproductive conflict. System energy drained, leading to 'Blaming' or 'Contempt'."
    },
    {
        id: "fire06", type: "action", suit: "fire", number: "6", title: "LEADING WITH VISION",
        iAm: "I inspire and lead others towards a shared goal, celebrating collective achievement and system success.",
        underplayed: "Lack of clear leadership or direction. Demotivated team, unrecognized efforts, system feels adrift.",
        overplayed: "Taking all the credit, overshadowing team contributions. Becoming dictatorial, stifling 'Deep Democracy'."
    },
    {
        id: "fire07", type: "action", suit: "fire", number: "7", title: "DEFENDING A POSITION",
        iAm: "I stand firm for my convictions or a system's necessary stance, even amidst challenges or competition.",
        underplayed: "Giving up too easily on important system values. Easily swayed, lack of resilience, system integrity compromised.",
        overplayed: "Stubbornness and inability to compromise. Fighting unnecessary battles, system becomes overly rigid."
    },
    {
        id: "fire08", type: "action", suit: "fire", number: "8", title: "RAPID EXECUTION",
        iAm: "I move quickly and decisively, bringing projects to a swift conclusion or propelling the system to its next phase.",
        underplayed: "Sluggish progress, missed deadlines. Loss of momentum, system opportunities are lost.",
        overplayed: "Rushing, overlooking details, potential for errors. System burnout from unsustainable pace."
    },
    {
        id: "fire09", type: "action", suit: "fire", number: "9", title: "RESILIENT PERSEVERANCE",
        iAm: "I maintain strength and determination even when the system is weary, guarding past achievements and pushing through.",
        underplayed: "Giving up before the final push. System succumbs to fatigue or doubt, goals unachieved.",
        overplayed: "System burnout, paranoia about threats. Inability to delegate or ask for help, resistance to necessary change."
    },
    {
        id: "fire10", type: "action", suit: "fire", number: "10", title: "CARRYING THE LOAD",
        iAm: "I take on significant responsibility, often completing a major cycle of effort for the system.",
        underplayed: "Shying away from system responsibility. Leaving tasks unfinished, burdening others, system falters.",
        overplayed: "Taking on too much individually, leading to burnout. Inability to delegate, becoming a system bottleneck."
    },

    // Water (Continuing from previous 3)
    {
        id: "water01", type: "action", suit: "water", number: "ace", title: "EMOTIONAL CONNECTION",
        iAm: "I am the wellspring of empathy, intuition, and authentic relationship, sensing the 'Emotional Field'.",
        underplayed: "Detachment, lack of empathy, impersonal interactions. 'Ghost Roles' of unmet needs may appear.",
        overplayed: "Overly emotional, porous boundaries, taking on others' feelings, losing 'Self-Management'."
    },
    {
        id: "water02", type: "action", suit: "water", number: "2", title: "BUILDING RAPPORT",
        iAm: "I focus on creating strong, respectful one-on-one connections and partnerships within the system.",
        underplayed: "Isolation, weak alliances, transactional rather than relational approach, poor 'Team Alliance'.",
        overplayed: "Over-reliance on one person, exclusivity, neglecting broader team dynamics or 'Deep Democracy'."
    },
    {
        id: "water03", type: "action", suit: "water", number: "3", title: "COLLABORATIVE CELEBRATION",
        iAm: "I foster joy and camaraderie within a group, celebrating shared successes and support for the '3rd Entity'.",
        underplayed: "Lack of team cohesion, poor morale, unacknowledged contributions, weak system 'Heart'.",
        overplayed: "Prioritizing socializing over work, avoiding difficult conversations ('Team Toxins') for harmony's sake."
    },
    {
        id: "water04", type: "action", suit: "water", number: "4", title: "REFLECTIVE RE-EVALUATION",
        iAm: "I encourage pausing to consider feelings and current offerings, discerning what is truly valuable for the system.",
        underplayed: "Missing opportunities for improvement by not reviewing 'Emotional Field'. Emotional burnout, taking relationships for granted.",
        overplayed: "Apathy, withdrawal from system engagement. Becoming stuck in contemplation and missing new relational chances."
    },
    {
        id: "water05", type: "action", suit: "water", number: "5", title: "PROCESSING DISAPPOINTMENT",
        iAm: "I acknowledge and learn from relational setbacks or emotional losses, seeking what remains valuable for system healing.",
        underplayed: "Suppressing emotions, repeating mistakes in relationships. Inability to move on, 'Ghost Roles' of past hurts linger.",
        overplayed: "Dwelling on negativity, system adopts victim mentality. Overlooking positive aspects or opportunities for repair."
    },
    {
        id: "water06", type: "action", suit: "water", number: "6", title: "SUPPORTIVE NOSTALGIA",
        iAm: "I draw on positive past experiences and simple kindness to build trust and goodwill within the system.",
        underplayed: "Forgetting lessons learned from past system interactions. Lack of warmth or appreciation for relationship history.",
        overplayed: "System living in the past, resistance to new ways of relating. Idealizing what was, hindering 'Myth Change'."
    },
    {
        id: "water07", type: "action", suit: "water", number: "7", title: "DISCERNING CHOICES",
        iAm: "I navigate multiple emotional options or imaginative ideas for the system, seeking clarity before committing.",
        underplayed: "Impulsive emotional decisions impacting the system. Lack of foresight in relational commitments.",
        overplayed: "System indecision due to too many options. Wishful thinking, lack of practical action in relationships."
    },
    {
        id: "water08", type: "action", suit: "water", number: "8", title: "MOVING ON EMOTIONALLY",
        iAm: "I recognize when it's time for the system to leave a situation or emotional state that no longer serves, seeking deeper fulfillment.",
        underplayed: "System staying stuck in unsatisfying situations. Fear of change, avoiding necessary 'Relationship Edges'.",
        overplayed: "Restlessness within the system, inability to commit. Constantly seeking something 'better' without appreciating the present relational state."
    },
    {
        id: "water09", type: "action", suit: "water", number: "9", title: "CONTENTED FULFILLMENT",
        iAm: "I appreciate and enjoy the emotional and relational abundance the system has achieved; a sense of collective well-being.",
        underplayed: "System never feeling satisfied, constant striving without appreciation for current connections.",
        overplayed: "Smugness or complacency within the system. Taking good relational fortune for granted, ignoring 'Signals' for growth."
    },
    {
        id: "water10", type: "action", suit: "water", number: "10", title: "SUSTAINED HARMONY",
        iAm: "I cultivate lasting emotional well-being, strong team bonds, and overall fulfillment within the system.",
        underplayed: "Unstable relationships within the system. Lack of deep connection, collective emotional dissatisfaction.",
        overplayed: "Resistance to any change that might disrupt system harmony. Potentially ignoring individual needs for group peace, stifling 'Deep Democracy'."
    },

    // Air (Continuing from previous 3)
    {
        id: "air01", type: "action", suit: "air", number: "ace", title: "BREAKTHROUGH INSIGHT",
        iAm: "I am the moment of pure clarity, the new idea, the truth revealed, encouraging open 'Ventilation'.",
        underplayed: "Confusion, lack of clear thought, inability to see the core issue. 'Marginalized Voices' remain unheard.",
        overplayed: "Overly intellectualizing, harsh truths delivered without tact (triggering 'Contempt'), analysis paralysis."
    },
    {
        id: "air02", type: "action", suit: "air", number: "2", title: "BALANCED DECISION-MAKING",
        iAm: "I carefully weigh options, seeking a balanced perspective before making a difficult choice for the system.",
        underplayed: "Impulsive decisions, avoiding choices, emotional bias in decision-making, lack of 'Inquiry/Awareness'.",
        overplayed: "Indecision, paralysis by analysis, avoiding commitment by staying 'neutral' when action is needed."
    },
    {
        id: "air03", type: "action", suit: "air", number: "3", title: "FACING DIFFICULT TRUTHS",
        iAm: "I confront painful realities or necessary feedback to enable clarity and healing within the system.",
        underplayed: "Avoiding conflict, allowing misunderstandings to fester, lack of honest communication, 'Stonewalling' occurs.",
        overplayed: "Brutal honesty without compassion, dwelling on negative communication, creating unnecessary pain or 'Relationship Edges'."
    },
    {
        id: "air04", type: "action", suit: "air", number: "4", title: "STRATEGIC PAUSE",
        iAm: "I advocate for rest and mental recuperation to regain clarity and strategic perspective for the system.",
        underplayed: "System mental burnout, reactive thinking. Poor decision-making due to collective fatigue.",
        overplayed: "Procrastination disguised as rest for the system. Avoidance of necessary action or difficult 'Alignment Work'.",
    },
    {
        id: "air05", type: "action", suit: "air", number: "5", title: "LEARNING FROM CONFLICT",
        iAm: "I analyze system conflict to understand different viewpoints, even if it means acknowledging a 'loss' to gain insight.",
        underplayed: "System adopts win-at-all-costs mentality. Inability to see other perspectives, repeating conflict patterns.",
        overplayed: "System focuses on being 'right' over resolution. Creating discord, self-sabotage through intellectual battles."
    },
    {
        id: "air06", type: "action", suit: "air", number: "6", title: "STRATEGIC TRANSITION",
        iAm: "I guide system movement from a difficult mental space or situation towards a clearer, more promising future.",
        underplayed: "System staying stuck in negative thinking patterns or difficult situations. Inability to envision new 'Myths'.",
        overplayed: "System escapism, avoiding dealing with the root cause. Moving on superficially without true 'Myth Change'."
    },
    {
        id: "air07", type: "action", suit: "air", number: "7", title: "CUNNING STRATEGY",
        iAm: "I employ clever thinking and sometimes indirect approaches to navigate complex system situations or achieve goals.",
        underplayed: "System naivety, being easily outmaneuvered. Lack of strategic thinking in achieving system objectives.",
        overplayed: "Deception or manipulation within the system. Lack of transparency, fostering untrustworthiness and 'Team Toxins'."
    },
    {
        id: "air08", type: "action", suit: "air", number: "8", title: "BREAKING FREE FROM LIMITATIONS",
        iAm: "I identify and challenge self-imposed mental restrictions or limiting beliefs within the system.",
        underplayed: "System feeling trapped by its own narratives. Victim mentality, inability to see options or cross 'Edges'.",
        overplayed: "Reckless challenging of all system boundaries without discernment. Creating instability or unnecessary disruption."
    },
    {
        id: "air09", type: "action", suit: "air", number: "9", title: "OVERCOMING ANXIETY",
        iAm: "I confront and process system anxieties and worries, seeking collective mental peace and resilience.",
        underplayed: "System suppresses fears, allowing anxiety to dictate actions. Lack of self-awareness regarding collective 'Emotional Field'.",
        overplayed: "System becomes overwhelmed by anxiety. Catastrophizing, collective mental anguish impacting productivity."
    },
    {
        id: "air10", type: "action", suit: "air", number: "10", title: "FINALITY AND NEW AWARENESS",
        iAm: "I represent the definitive end of a system's thought process or difficult situation, bringing painful but necessary clarity for a new start.",
        underplayed: "System's inability to let go of old ideas. Repeating painful cycles, avoiding closure or 'Myth Change'.",
        overplayed: "Excessive drama around system endings. Focusing on ruin rather than rebirth, destructive finality hindering 'Emergence'."
    },

    // Earth (Continuing from previous 3)
    {
        id: "earth01", type: "action", suit: "earth", number: "ace", title: "TANGIBLE OPPORTUNITY",
        iAm: "I am the seed of a practical venture, a new resource, or a grounded opportunity for system growth.",
        underplayed: "Missed practical opportunities, ideas without grounding, lack of material support or 'Execution'.",
        overplayed: "Over-emphasis on material gain, neglecting other aspects (e.g., 'Heart') for purely practical pursuits."
    },
    {
        id: "earth02", type: "action", suit: "earth", number: "2", title: "AGILE RESOURCE MANAGEMENT",
        iAm: "I skillfully juggle multiple priorities or resources, adapting to changing demands for system efficiency.",
        underplayed: "Overwhelm, dropping tasks, poor time/resource management, system becomes unstable.",
        overplayed: "Constant busyness without progress, lack of focus, spreading system resources too thin."
    },
    {
        id: "earth03", type: "action", suit: "earth", number: "3", title: "SKILLED CRAFTSMANSHIP",
        iAm: "I focus on quality work, collaboration with other skilled individuals, and building a strong reputation for the system.",
        underplayed: "Shoddy work, lack of attention to detail, working in isolation when collaboration is needed, weak 'Role' performance.",
        overplayed: "Perfectionism leading to delays, inability to delegate, micromanagement, stifling system 'Playfulness'."
    },
    {
        id: "earth04", type: "action", suit: "earth", number: "4", title: "RESOURCE STEWARDSHIP",
        iAm: "I prudently manage and conserve system resources, ensuring stability and security for its future.",
        underplayed: "Wastefulness, financial instability within the system. Lack of foresight in resource use, no 'Ground Conditions' for success.",
        overplayed: "Hoarding resources, fear of scarcity pervades the system. Resistance to investing or sharing, hindering growth."
    },
    {
        id: "earth05", type: "action", suit: "earth", number: "5", title: "NAVIGATING SCARCITY",
        iAm: "I help the system face periods of material lack or exclusion, seeking support and opportunities for recovery.",
        underplayed: "System ignoring warning signs of scarcity. Isolation when support is needed, 'Team Toxins' may arise.",
        overplayed: "System adopts victim mentality around lack. Inability to see available resources, fear-driven decisions."
    },
    {
        id: "earth06", type: "action", suit: "earth", number: "6", title: "GENEROUS EXCHANGE",
        iAm: "I facilitate fair and balanced giving and receiving of resources, mentorship, or support within the system.",
        underplayed: "System takes without giving back. Inability to ask for or receive help graciously, weak 'Collaboration'.",
        overplayed: "System gives to the point of depletion. Creating dependency, using generosity to control rather than empower."
    },
    {
        id: "earth07", type: "action", suit: "earth", number: "7", title: "PATIENT CULTIVATION",
        iAm: "I assess progress on long-term system investments of time or resources, patiently awaiting results.",
        underplayed: "Impatience within the system, abandoning projects too soon. Lack of perseverance for long-term goals or 'Myths'.",
        overplayed: "Procrastination disguised as patience in the system. Fear of harvesting results, endless tweaking without 'Execution'."
    },
    {
        id: "earth08", type: "action", suit: "earth", number: "8", title: "DEDICATED MASTERY",
        iAm: "I commit to diligent work, honing skills, and taking pride in detailed craftsmanship for system excellence.",
        underplayed: "Lack of skill development within the system. Mediocre output, avoiding effort, poor 'Role' fulfillment.",
        overplayed: "Obsessive focus on one skill to the detriment of system needs. Workaholism, losing sight of the bigger picture/ '3rd Entity'."
    },
    {
        id: "earth09", type: "action", suit: "earth", number: "9", title: "EARNED INDEPENDENCE",
        iAm: "I encourage the system to enjoy the fruits of its labor, self-reliance, and disciplined effort, appreciating material comfort and security.",
        underplayed: "Lack of system self-sufficiency. Inability to appreciate collective achievements, financial dependence.",
        overplayed: "System isolation, excessive materialism. Reluctance to share success or collaborate, hindering 'Emergence'."
    },
    {
        id: "earth10", type: "action", suit: "earth", number: "10", title: "ENDURING LEGACY",
        iAm: "I help build and maintain lasting structures, wealth, or traditions that provide security and continuity for the system's future.",
        underplayed: "System engages in short-term thinking. Lack of succession planning, unstable foundations, weak 'Myths'.",
        overplayed: "Resistance to change for the sake of tradition. Burdening future generations, focus on material legacy alone, ignoring 'Heart'."
    },

    // --- Heroes (Full Set - 16 cards) ---
    // Fire
    {
        id: "hero01", type: "hero", suit: "fire", number: "page", title: "ALIGNMENT",
        corePrinciple: "Bringing parts of a system into proper relative position to serve a common goal, even without full agreement. Fosters movement from 'Interests in Common'.",
        howItHelps: ["Enables 'Bold Planning' (Fire) by unifying disparate energies.", "Supports 'Collaborative Celebration' (Water) by finding shared purpose."],
        whenToDeploy: ["When factions or disagreements exist within a team.", "To move forward on a project despite differing opinions.", "To build initial 'Team Alliance' around a core purpose."]
    },
    {
        id: "hero05", type: "hero", suit: "fire", number: "knight", title: "EMERGENCE",
        corePrinciple: "Trusting and amplifying subtle system 'Signals' (both verbal and non-verbal) to reveal 'what is trying to happen' and unlock generative potential.",
        howItHelps: ["Encourages 'Pioneering Action' (Fire) by following nascent energy.", "Provides data for 'Discerning Choices' (Water) based on system readiness."],
        whenToDeploy: ["When a system feels stuck or uninspired.", "When there's unspoken tension or undiscussables.", "To tap into a system's natural intelligence and creativity."]
    },
    {
        id: "hero06", type: "hero", suit: "fire", number: "queen", title: "PLAYFUL EXPERIMENTATION",
        corePrinciple: "Adopting a light, curious, and experimental approach ('Playfulness') to try new behaviors or solutions without fear of failure, fostering learning and adaptability.",
        howItHelps: ["Reduces fear around 'Pioneering Action' (Fire).", "Makes 'Navigating Creative Tension' (Fire) less threatening and more generative."],
        whenToDeploy: ["When a system is overly rigid or risk-averse.", "To encourage innovation and trying new things.", "To lower the stakes when exploring difficult 'Edges'."] ,
    },
    {
        id: "hero07", type: "hero", suit: "fire", number: "king", title: "PURPOSE BEACON",
        corePrinciple: "Clearly articulating and consistently communicating a compelling shared purpose or vision that energizes and aligns system efforts towards a 'High Dream'.",
        howItHelps: ["Strengthens 'Leading with Vision' (Fire).", "Fuels 'Resilient Perseverance' (Fire) by connecting actions to meaning."],
        whenToDeploy: ["During times of system change or uncertainty.", "When team motivation or engagement is low.", "To align diverse efforts towards a common '3rd Entity' goal."]
    },
    // Water
    {
        id: "hero02", type: "hero", suit: "water", number: "page", title: "ALLIANCE DESIGN",
        corePrinciple: "Co-creating the culture, atmosphere, and ground rules for how a relationship system (team, partnership) will consciously function and interact.",
        howItHelps: ["Strengthens 'Emotional Connection' (Water) by defining safe interaction.", "Provides a container for 'Truthful Dialogue' (Air) by setting expectations."],
        whenToDeploy: ["At the start of new teams, projects, or partnerships.", "To address recurring conflicts or misunderstandings.", "To proactively build 'Psychological Safety' and trust."]
    },
    {
        id: "hero08", type: "hero", suit: "water", number: "knight", title: "THE LANDS",
        corePrinciple: "Exploring and appreciating diverse perspectives and experiences ('My Land, Your Land, Our Land') within a system to bridge differences and build shared understanding.",
        howItHelps: ["Deepens 'Building Rapport' (Water).", "Essential for navigating 'Relationship System Edges' with respect."],
        whenToDeploy: ["In diversity and inclusion initiatives.", "To resolve inter-departmental or interpersonal misunderstandings.", "When integrating different team cultures or perspectives."]
    },
     {
        id: "hero09", type: "hero", suit: "water", number: "queen", title: "PSYCHOLOGICAL SAFETY",
        corePrinciple: "Cultivating an environment where individuals feel safe to take interpersonal risks, speak up, admit mistakes, and be vulnerable without fear of negative consequences.",
        howItHelps: ["Underpins authentic 'Emotional Connection' (Water).", "Allows 'Collaborative Celebration' (Water) to be genuine and inclusive."],
        whenToDeploy: ["To foster innovation and creative problem-solving.", "To improve team communication and reduce 'Team Toxins'.", "To build resilient and high-trust systems."]
    },
    {
        id: "hero10", type: "hero", suit: "water", number: "king", title: "APPRECIATION LOOP",
        corePrinciple: "A simple, powerful process of sharing and receiving appreciation to increase positivity, fill the 'emotional bank account,' and soften the 'Emotional Field'.",
        howItHelps: ["Boosts 'Contented Fulfillment' (Water).","Strengthens the 'Heart' MetaSkill within the system."],
        whenToDeploy: ["After intense or difficult system work.", "To build positive team morale.", "As a regular practice to foster a culture of gratitude."]
    },
    // Air
    {
        id: "hero03", type: "hero", suit: "air", number: "page", title: "DEEP DEMOCRACY",
        corePrinciple: "Ensuring all voices within a system, especially marginalized or unpopular ones, are heard and considered to gain a fuller, more accurate picture of reality.",
        howItHelps: ["Facilitates 'Breakthrough Insight' (Air) by incorporating diverse perspectives.", "Helps navigate 'Creative Tension' (Fire) constructively."],
        whenToDeploy: ["During important decision-making processes.", "When conflict or unspoken dissent is present in a group.", "To uncover 'Ghost Roles' or 'Time Spirits' influencing the system."]
    },
    {
        id: "hero11", type: "hero", suit: "air", number: "knight", title: "CONSTELLATION MAPPING",
        corePrinciple: "Visually mapping system dynamics, roles, and relationships ('Informal Constellations') to gain a 'snapshot,' reveal hidden patterns, and make the invisible visible.",
        howItHelps: ["Aids 'Balanced Decision-Making' (Air) by showing systemic impacts.", "Helps in 'Breaking Free from Limitations' (Air) by revealing unseen structures."],
        whenToDeploy: ["To understand complex system structures or team dynamics.", "When exploring the impact of potential changes or new 'Roles'.", "To help a system see itself more objectively."]
    },
    {
        id: "hero12", type: "hero", suit: "air", number: "queen", title: "THE THIRD ENTITY FOCUS",
        corePrinciple: "Shifting the focus from individual blaming or issues to the '3rd Entity' – the relationship or system itself – as the client, fostering shared responsibility and solutions.",
        howItHelps: ["Supports 'Learning from Conflict' (Air) by depersonalizing issues.", "Essential for 'Finality and New Awareness' (Air) concerning the system's state."],
        whenToDeploy: ["When interpersonal conflict is high and blame is prevalent.", "To help a team take collective ownership of its challenges and successes.", "In any relationship systems coaching engagement."]
    },
     {
        id: "hero13", type: "hero", suit: "air", number: "king", title: "STRATEGIC INQUIRY",
        corePrinciple: "Utilizing powerful, open-ended questions and 'Inquiry/Awareness' to 'peel the onion,' uncover underlying assumptions, and stimulate strategic thinking within the system.",
        howItHelps: ["Drives 'Breakthrough Insight' (Air).","Supports 'Strategic Transition' (Air) by clarifying desired outcomes and paths."],
        whenToDeploy: ["During strategic planning sessions.", "When a system needs to challenge its current paradigms.", "To encourage critical thinking and deeper understanding of complex issues."]
    },
    // Earth
    {
        id: "hero04", type: "hero", suit: "earth", number: "page", title: "THE TOXIN GRID",
        corePrinciple: "Identifying and addressing toxic communication patterns (Blaming, Defensiveness, Contempt, Stonewalling) and co-creating antidotes or 'Conflict Protocols'.",
        howItHelps: ["Supports 'Skilled Craftsmanship' (Earth) in communication.", "Helps process 'Facing Difficult Truths' (Air) in a structured way."],
        whenToDeploy: ["When team communication is dysfunctional or consistently negative.", "When morale is low due to unresolved interpersonal conflicts.", "To build healthier, more respectful interaction norms within the system."]
    },
    {
        id: "hero14", type: "hero", suit: "earth", number: "knight", title: "MYTH WEAVING",
        corePrinciple: "Uncovering, honoring, and consciously working with the foundational stories, guiding narratives ('Original Myth'), and 'High Dreams' of a relationship or system.",
        howItHelps: ["Grounds 'Enduring Legacy' (Earth) in shared meaning.", "Facilitates 'Patient Cultivation' (Earth) of long-term vision."],
        whenToDeploy: ["To build system cohesion and shared identity.", "During times of significant change or 'Myth Change' crisis.", "To connect a system to its deeper purpose and inspiration."]
    },
    {
        id: "hero15", type: "hero", suit: "earth", number: "queen", title: "ROLE CLARITY",
        corePrinciple: "Facilitating the clear definition, understanding, and effective population of 'Roles' within a system to ensure functions are met and 'Role Nausea/Confusion' is minimized.",
        howItHelps: ["Supports 'Skilled Craftsmanship' (Earth) in task execution.", "Essential for 'Agile Resource Management' (Earth) through defined responsibilities."],
        whenToDeploy: ["When there is confusion about responsibilities or tasks.", "During team formation or restructuring.", "To address issues of accountability or underperformance linked to unclear roles."]
    },
    {
        id: "hero16", type: "hero", suit: "earth", number: "king", title: "GROUND CONDITIONS",
        corePrinciple: "Establishing the necessary practical and relational foundations ('Ground Conditions for Successful Change') for any system initiative to thrive and achieve sustainable results.",
        howItHelps: ["Ensures 'Tangible Opportunity' (Earth) has a solid base.", "Supports effective 'Resource Stewardship' (Earth) by planning for needs."],
        whenToDeploy: ["Before launching any significant system change or project.", "When previous initiatives have failed due to lack of preparation.", "To ensure buy-in and practical support for new directions."]
    }
];
