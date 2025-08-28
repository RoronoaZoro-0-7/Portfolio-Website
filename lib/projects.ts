// Shared project data for web and AI projects
export const webProjects = [
  {
    id: "skill-share-micro-economy",
    title: "Skill Share Micro Economy",
    description:
      "Built a credit-based learning platform with Clerk + JWT authentication, Razorpay payments, and real-time messaging. Implemented credits economy to promote high-quality content — posting costs credits, while upvotes earn rewards and enable media-rich posts/comments. The platform features a robust moderation system, user profiles. Designed scalable backend APIs and optimized database queries for high concurrency.",
    images: [
      "/projects/skill-share-micro-economy/1.png",
      "/projects/skill-share-micro-economy/2.png",
      "/projects/skill-share-micro-economy/3.png",
      "/projects/skill-share-micro-economy/4.png",
      "/projects/skill-share-micro-economy/5.png",
      "/projects/skill-share-micro-economy/6.png",
      "/projects/skill-share-micro-economy/7.png",
      "/projects/skill-share-micro-economy/8.png",
      "/projects/skill-share-micro-economy/9.png",
      "/projects/skill-share-micro-economy/10.png"
    ],
    technologies: ["TypeScript", "Node.js", "Express", "Prisma", "Next.js", "Razorpay", "Clerk"],
  // liveUrl removed
    githubUrl: "https://github.com/RoronoaZoro-0-7/Skill-Share-Micro-Economy",
    featured: true,
    date: "2025",
    status: "Completed",
  },
  {
    id: "real-time-social-media-app",
    title: "Real-Time Social Media App",
    description:
      "Designed a real-time social platform with secure authentication and live messaging using Socket.IO. Developed a responsive frontend with efficient database queries and modular service design for scalability. Includes user profiles, post reactions, comments, likes and included a search option. Integrated cloud storage for media uploads and implemented advanced security best practices.",
    images: [
      "/projects/real-time-social-media-app/1.png",
      "/projects/real-time-social-media-app/2.png",
      "/projects/real-time-social-media-app/3.png",
      "/projects/real-time-social-media-app/4.png",
      "/projects/real-time-social-media-app/5.png",
      "/projects/real-time-social-media-app/6.png"
    ],
    technologies: ["MERN Stack", "Socket.IO", "JWT", "Tailwind CSS"],
  // liveUrl removed
    githubUrl: "https://github.com/RoronoaZoro-0-7/Social-Media",
    featured: true,
    date: "2025",
    status: "Completed",
  },
  {
    id: "learning-management-system",
    title: "Learning Management System",
    description:
      "Developed a full-stack LMS with modular architecture, real-time messaging, and JWT-based authentication. Integrated Stripe payment processing and optimized database performance through indexing and Redis caching. Features include course management. Built RESTful APIs and implemented role-based access control for students and teachers.",
    images: [
      "/projects/learning-management-system/1.png",
      "/projects/learning-management-system/2.png",
      "/projects/learning-management-system/3.png"
    ],
    technologies: ["TypeScript", "Node.js", "Express", "MongoDB", "Redis", "Next.js", "Stripe"],
  // liveUrl removed
    githubUrl: "https://github.com/RoronoaZoro-0-7/Learning-Management-Sytem",
    featured: false,
    date: "2024",
    status: "Completed",
  },
  {
    id: "hostel-registration-system",
    title: "Hostel Registration System",
    description:
      "Students can book their desired hostel blocks. Built with EJS, Node.js, HTML, CSS, PostgreSQL.",
    images: [
      "/projects/hostel-registration-system/1.png",
      "/projects/hostel-registration-system/2.png",
      "/projects/hostel-registration-system/3.png",
      "/projects/hostel-registration-system/4.png",
      "/projects/hostel-registration-system/5.png",
      "/projects/hostel-registration-system/6.png",
      "/projects/hostel-registration-system/7.png"
    ],
    technologies: ["EJS", "Node.js", "HTML", "CSS", "PostgreSQL"],
  // liveUrl removed
    githubUrl: "https://github.com/RoronoaZoro-0-7/Hostel-Management",
    featured: false,
    date: "2023",
    status: "Completed",
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description:
      "Single page application built with the MERN stack. Allows users to create, update, and delete tasks with drag-and-drop functionality.Designed for productivity and ease of use with a clean, modern UI.",
  images: ["/projects/task-manager/1.png"],
    technologies: ["MERN Stack"],
  // liveUrl removed
    githubUrl: "https://github.com/RoronoaZoro-0-7/Task-Manager",
    featured: false,
    date: "2023",
    status: "Completed",
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    description:
      "Frontend single page application built with HTML, CSS, JS.",
  images: ["/projects/spotify-clone/1.png"],
    technologies: ["HTML", "CSS", "JavaScript"],
  // liveUrl removed
    githubUrl: "https://github.com/RoronoaZoro-0-7/Spotify",
    featured: false,
    date: "2023",
    status: "Completed",
  },
  {
    id: "weather-application",
    title: "Weather Application",
    description:
      "Weather dashboard built with EJS, Node.js, MySQL, and OpenWeather API. Provides real-time weather updates, forecasts, and historical data visualization. Features location search, favorite cities, and customizable themes. Backend includes scheduled data refresh and caching for performance.",
    images: [
      "/projects/weather-application/1.png",
      "/projects/weather-application/2.png"
    ],
    technologies: ["EJS", "Node.js", "MySQL", "OpenWeather API"],
  // liveUrl removed
    githubUrl: "https://github.com/RoronoaZoro-0-7/Weather-Application",
    featured: false,
    date: "2023",
    status: "Completed",
  },
]

export const aiProjects = [
  {
    id: "rag-llm",
    title: "RAG-LLM Question Answering System",
    description:
      "A Retrieval Augmented Generation (RAG) system for question answering over PDF documents. Users can upload a PDF, which is split into semantic chunks and embedded using sentence-transformers. A FAISS vector store enables fast similarity search, and relevant chunks are retrieved for each query. The DeepSeek LLM generates answers using both the user's question and the retrieved context, providing accurate, context-aware responses. Built with LangChain, Hugging Face Transformers, ChromaDB, and FAISS.",
    images: [
      "/projects/RAG-LLM/1.png",
      "/projects/RAG-LLM/2.png"
    ],
    technologies: ["LangChain", "Hugging Face Transformers", "ChromaDB", "FAISS", "PyPDF", "sentence-transformers", "DeepSeek LLM"],
    githubUrl: "#",
    featured: false,
    date: "2025",
    status: "Completed",
  },
  {
    id: "movie-recommendation-system",
    title: "Movie Recommendation System",
      description:
        "Content-based filtering for personalized movie recommendations. Utilizes user ratings and movie metadata to generate tailored suggestions. Implemented both TF-IDF and Count Vectorization methods for feature extraction and similarity scoring. Built with Python, Pandas, and Scikit-learn, and supports scalable batch processing.",
    images: [
      "/projects/movie-recommendation-system/1.png",
      "/projects/movie-recommendation-system/2.png"
    ],
    technologies: ["Python", "Pandas", "Scikit-learn"],
  // liveUrl removed
    githubUrl: "https://github.com/RoronoaZoro-0-7/Movie-Recommendation-System",
    featured: false,
    date: "2024",
    status: "Completed",
  },
  {
    id: "spam-detection",
    title: "Spam Detection",
    description:
      "Spam detection using machine learning algorithms. Trained on large datasets with feature extraction using NLTK and Scikit-learn. Implements multiple classification models, including logistic regression and random forest, with cross-validation for accuracy. Includes a web interface for testing and visualizing results.",
    images: [
      "/projects/spam-detection/1.png",
      "/projects/spam-detection/2.png"
    ],
    technologies: ["Python", "Scikit-learn", "NLTK"],
  // liveUrl removed
    githubUrl: "https://github.com/RoronoaZoro-0-7/Email-Spam-Classfier",
    featured: false,
    date: "2024",
    status: "Completed",
  },
  {
    id: "custom-gpt-implementation",
    title: "Custom GPT Implementation",
    description:
      "Developed a miniature GPT model implementing custom tokenization, self-attention, and transformer blocks. Designed neural architecture with positional embeddings, achieving coherent autoregressive text generation. Includes training pipeline, evaluation metrics, and sample generation scripts. Compared performance with open-source transformer models and visualized attention weights for interpretability.",
  images: ["/projects/custom-gpt-implementation/1.png"],
    technologies: ["PyTorch", "Python", "NumPy", "Transformers"],
  // liveUrl removed
    githubUrl: "#",
    featured: true,
    date: "2025",
    status: "Completed",
  },
  {
    id: "advanced-sentiment-analysis-tool",
    title: "Advanced Sentiment Analysis Tool",
    description:
      "Developed an emotion classifier for 27 emotions using the GoEmotions dataset with separate transformer and LSTM models. Fine-tuned DistilBERT model achieving 88% accuracy and implemented LSTM baseline for comparative analysis. Includes data preprocessing, model evaluation, and confusion matrix visualization. Explored transfer learning and ensemble methods for further accuracy improvements.",
  images: ["/projects/advanced-sentiment-analysis-tool/1.png"],
    technologies: ["DistilBERT", "TensorFlow", "PyTorch", "NLTK", "Python"],
  // liveUrl removed
    githubUrl: "https://github.com/RoronoaZoro-0-7/Text-Classification---Transformers",
    featured: true,
    date: "2025",
    status: "Completed",
  },
]
