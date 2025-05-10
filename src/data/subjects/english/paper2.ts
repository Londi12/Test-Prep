import { Quiz } from "@/types/quiz";

export const englishPaper2Quiz1: Quiz = {
  id: "english-paper2-quiz1",
  title: "English HL Paper 2 - Quiz 1: Poetry Analysis",
  description: "Test your understanding of poetic devices and interpretation",
  timeLimit: 1800,
  questions: [
    {
      id: 1,
      context: `Read the following extract from "The Highwayman" by Alfred Noyes:

The wind was a torrent of darkness among the gusty trees,
The moon was a ghostly galleon tossed upon cloudy seas,
The road was a ribbon of moonlight over the purple moor,
And the highwayman came riding—
         Riding—riding—
The highwayman came riding, up to the old inn-door.`,
      question: "Which literary device is used in 'The moon was a ghostly galleon tossed upon cloudy seas'?",
      options: ["Metaphor", "Simile", "Alliteration", "Onomatopoeia"],
      correctAnswer: 0,
      explanation: "This is a metaphor as it directly compares the moon to a galleon (ship) without using 'like' or 'as'."
    },
    {
      id: 2,
      context: `Consider this line from "Night Sky" by Sarah Matthews:

"The soft silver stars shone silently in the sapphire sky"`,
      question: "What is the effect of alliteration in this line?",
      options: [
        "Creates a harsh sound",
        "Emphasizes movement",
        "Creates a gentle, soothing sound",
        "Adds humor"
      ],
      correctAnswer: 2,
      explanation: "The repetition of the 's' sound creates a soft, soothing effect that mirrors the meaning of the line."
    },
    {
      id: 3,
      context: `Study this stanza:

The autumn leaves are falling,
Like raindrops from the sky,
The wind whispers softly,
As birds begin to fly.`,
      question: "What type of rhyme scheme is used in this stanza?",
      options: [
        "Alternate rhyme (ABAB)",
        "Enclosed rhyme (ABBA)",
        "Monorhyme (AAAA)",
        "Free verse (no pattern)"
      ],
      correctAnswer: 0,
      explanation: "The stanza follows an ABAB pattern where 'falling/softly' and 'sky/fly' create alternate rhymes."
    },
    {
      id: 4,
      context: `Read these lines from a contemporary poem:

The morning light creeps slowly
across the wooden floor, touching
each dust mote with gold, transforming
the ordinary into something sacred.`,
      question: "What is the purpose of enjambment in these lines?",
      options: [
        "To create perfect rhymes",
        "To continue thoughts across line breaks for effect",
        "To end each line with punctuation",
        "To create regular meter"
      ],
      correctAnswer: 1,
      explanation: "The enjambment creates a flowing movement that mirrors the creeping light, carrying thoughts across lines without forced breaks."
    },
    {
      id: 5,
      context: `Consider this line from "The Raven" by Edgar Allan Poe:

Once upon a midnight dreary, || while I pondered, weak and weary`,
      question: "What is the function of the caesura (marked by ||) in this line?",
      options: [
        "To create rhyme",
        "To create a strong pause that divides the line",
        "To compare two things",
        "To end the poem"
      ],
      correctAnswer: 1,
      explanation: "The caesura creates a dramatic pause in the middle of the line, enhancing the rhythmic structure and allowing for emphasis."
    }
  ]
};

export const englishPaper2Quiz2: Quiz = {
  id: "english-paper2-quiz2",
  title: "English HL Paper 2 - Quiz 2: Drama Analysis",
  description: "Test your understanding of dramatic techniques and theatrical elements",
  timeLimit: 1800,
  questions: [
    {
      id: 1,
      type: "multiple-select",
      context: `Read the following extract from the play:
      
JOHN: [aside] If only they knew what I've done. The guilt eats away at me like a cancer.
MARY: [approaching] You seem troubled, John. Is everything alright?
JOHN: [forcing a smile] Just tired from work, that's all.
MARY: [unconvinced] You've been "tired" for weeks now.`,
      question: "Which dramatic techniques are used in this extract? Select all that apply:",
      options: [
        "Aside to reveal inner thoughts",
        "Stage directions for actions",
        "Dramatic irony",
        "Foreshadowing",
        "Direct confrontation"
      ],
      correctAnswers: [0, 1, 2],
      explanation: "The extract uses an aside (John's private thoughts), stage directions ([aside], [approaching], [forcing a smile]), and dramatic irony (Mary and audience know John is lying)."
    }
    // ... rest of the questions
  ]
};

export const englishPaper2Quiz3: Quiz = {
  id: "english-paper2-quiz3",
  title: "English HL Paper 2 - Quiz 3: Prose Analysis",
  description: "Test your understanding of narrative techniques and prose elements",
  timeLimit: 1800,
  questions: [
    {
      id: 1,
      context: `Read this dialogue from the short story:

"I've never seen anything like it," Sarah whispered, her voice trembling. "The way it moved... it wasn't natural."
"You're imagining things again," Tom replied with a dismissive laugh, but his eyes darted nervously to the shadows. "There's a logical explanation for everything."
"Is there?" Sarah's voice hardened. "Like there was for the footprints in the snow last week? The ones that started in the middle of the lake and just... disappeared?"`,
      question: "How does this dialogue contribute to characterization?",
      options: [
        "Only describes characters' appearances",
        "Only sets the physical scene",
        "Reveals personalities and beliefs",
        "Only indicates the time period"
      ],
      correctAnswer: 2,
      explanation: "The dialogue reveals Sarah's intuitive, believing nature and Tom's skeptical personality through their contrasting responses to the mysterious events."
    },
    {
      id: 2,
      context: `Consider this excerpt:

The old clock in the hallway struck midnight, its deep chimes echoing through the empty house. Maria paused in her packing, her hand hovering over the dusty photograph. Something about the shadows in the corner of her eye seemed wrong, like they were moving against the light. Later, she would remember this moment as the last normal one before everything changed.`,
      question: "How does the author use foreshadowing in this passage?",
      options: [
        "Through flashbacks",
        "Through hints of future events",
        "Through setting description only",
        "Through character descriptions"
      ],
      correctAnswer: 1,
      explanation: "The passage hints at future events through the ominous description of moving shadows and the reference to this being the 'last normal moment'."
    },
    {
      id: 3,
      context: `Compare these two narrative styles:

Passage A: I watched the sun set behind the mountains, feeling the day's warmth fade from my skin. The letter in my pocket seemed to burn with its secret, and I wondered how I would ever face tomorrow.

Passage B: John watched the sun set behind the mountains. The warmth of the day was fading, and he could feel the weight of the letter in his pocket. Tomorrow loomed ahead of him like a mountain he wasn't sure he could climb.`,
      question: "What is the key difference between these narrative perspectives?",
      options: [
        "The length of the passages",
        "The number of characters",
        "The point of view and use of pronouns",
        "The time period described"
      ],
      correctAnswer: 2,
      explanation: "Passage A uses first-person narration ('I watched') while Passage B uses third-person ('John watched'), demonstrating different narrative perspectives."
    },
    {
      id: 4,
      context: `Read this opening paragraph:

The lighthouse stood alone on the rocky peninsula, its white walls stained grey by decades of salt spray and storm. Below, angry waves crashed against the cliffs, sending plumes of icy water into the steel-colored sky. Even the seabirds seemed to avoid this desolate spot, their cries carried away by the relentless wind that howled around the tower's peak.`,
      question: "How does the setting contribute to the story?",
      options: [
        "Simply describes the location",
        "Creates atmosphere and suggests conflict",
        "Only lists physical features",
        "Just explains the title"
      ],
      correctAnswer: 1,
      explanation: "The setting creates a dark, isolated atmosphere that suggests conflict and builds tension through descriptions of hostile natural elements."
    },
    {
      id: 5,
      context: `Study this first-person narration:

Of course, I remember everything exactly as it happened. I'm known for my perfect memory, after all. The fact that my brother tells a different story just shows how jealousy can cloud someone's recollection. I've always been the more reliable one in the family, just ask anyone. Well, anyone except my parents, but they've always favored him anyway.`,
      question: "What makes this narrator unreliable?",
      options: [
        "The narrator tells only truth",
        "The narrator shows clear bias and contradictions",
        "The narrator is a third person",
        "The narrator addresses the reader"
      ],
      correctAnswer: 1,
      explanation: "The narrator demonstrates unreliability through obvious bias ('I'm known for my perfect memory'), contradictions, and defensive justifications that suggest a distorted perspective."
    }
  ]
};

export const englishPaper2: Quiz = {
  id: "english-paper2",
  title: "English HL Paper 2 - Literature",
  description: "Tests understanding of prescribed literary works. Total marks: 80",
  timeLimit: 10800, // 3 hours
  questions: [
    // Section A: Poetry (40 marks)
    {
      id: 1,
      type: "essay",
      context: `"Funeral Blues" by W.H. Auden

Stop all the clocks, cut off the telephone,
Prevent the dog from barking with a juicy bone,
Silence the pianos and with muffled drum
Bring out the coffin, let the mourners come.

Let aeroplanes circle moaning overhead
Scribbling on the sky the message 'He is Dead'.
Put crepe bows round the white necks of the public doves,
Let the traffic policemen wear black cotton gloves.

He was my North, my South, my East and West,
My working week and my Sunday rest,
My noon, my midnight, my talk, my song;
I thought that love would last forever: I was wrong.

The stars are not wanted now; put out every one,
Pack up the moon and dismantle the sun,
Pour away the ocean and sweep up the wood;
For nothing now can ever come to any good.`,
      question: "Discuss how the poet uses imagery and structure to convey the depth of grief in this poem. In your response, consider:\n1. The progression of imagery from public to personal loss\n2. The use of imperatives and their effect\n3. The significance of cosmic imagery in the final stanza\n4. How form and structure reinforce meaning",
      markingCriteria: [
        "Detailed analysis of poetic devices",
        "Understanding of structure",
        "Reference to specific examples",
        "Coherent argument",
        "Language use and structure"
      ],
      marks: 20,
      explanation: "A strong response will analyze both technical aspects and emotional impact, showing how form and content work together."
    },
    
    // Section B: Novel (40 marks)
    {
      id: 2,
      type: "essay",
      context: `"Pride and Prejudice" by Jane Austen

Consider this extract:

"In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you."

Elizabeth's astonishment was beyond expression. She stared, coloured, doubted, and was silent. This he considered sufficient encouragement; and the avowal of all that he felt, and had long felt for her, immediately followed. He spoke well; but there were feelings besides those of the heart to be detailed; and he was not more eloquent on the subject of tenderness than of pride. His sense of her inferiority—of its being a degradation—of the family obstacles which had always opposed to inclination, were dwelt on with a warmth which seemed due to the consequence he was wounding, but was very unlikely to recommend his suit.`,
      question: "Analyze how Austen uses this scene to explore themes of pride and social expectations. Consider:\n1. Character presentation\n2. Narrative technique\n3. Social context",
      markingCriteria: [
        "Analysis of characterization",
        "Discussion of narrative methods",
        "Understanding of social context",
        "Relevant textual references",
        "Coherent argument structure"
      ],
      marks: 20,
      explanation: "Response should demonstrate understanding of both literary techniques and historical context."
    }
  ]
};