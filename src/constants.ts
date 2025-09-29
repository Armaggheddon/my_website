import { Project, NavLink } from './types';


export const MY_NAME = "Alessandro Brunello";
export const MY_TAGLINE = "Crafting elegant solutions, embracing new challenges.";
export const MY_EMAIL = "alebrum97@gmail.com";
export const MY_GITHUB_USERNAME = "Armaggheddon";
export const MY_HUGGINGFACE_USERNAME = "Armaggheddon";

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Me', href: '#about' },
  { id: 'projects', label: 'My Work', href: '#projects' },
  { id: 'contact', label: 'Get in Touch', href: '#contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    "id": "proj_yolo11_doc_layout",
    "title": "YOLOv11 Document Layout Analysis",
    "description": "This project offers a suite of production-ready YOLOv11 models 🚀 for automated document layout analysis. It's built to instantly deconstruct documents by accurately identifying key elements like text blocks, tables, figures, and titles. 📄➡️🧠 The goal is to provide a lightweight yet powerful tool that can be easily integrated into any document AI pipeline. ⚡",
    "technologies": ["Python", "Ultralytics", "YOLOv11", "Hugging Face Hub", "Hugging Face Spaces"],
    "githubUrl": "https://github.com/Armaggheddon/yolo11_doc_layout",
    "liveDemoUrl": "https://huggingface.co/spaces/Armaggheddon/yolo11-document-layout",
    "logoUrl": "https://github.com/Armaggheddon/yolo11_doc_layout/raw/main/plots/logo.png",
    "isTextLikeLogo": false,
    "displayPopupTextTitle": true,
    "images": [
      "https://github.com/Armaggheddon/yolo11_doc_layout/raw/main/plots/logo.png",
      "https://github.com/Armaggheddon/yolo11_doc_layout/raw/main/plots/n_s_m_comparison/map50_95_per_label.png",
      "https://github.com/Armaggheddon/yolo11_doc_layout/raw/main/plots/n_s_m_comparison/box_precision_per_label.png",
      "https://github.com/Armaggheddon/yolo11_doc_layout/raw/main/plots/yolo11n_best/box_precision_percentage_improvement_per_label.png",
      "https://github.com/Armaggheddon/yolo11_doc_layout/raw/main/runs/train4/confusion_matrix_normalized.png"
    ],
    "keyFeatures": [
      "Provides ready-to-use nano, small, and medium models, fine-tuned for high performance.",
      "High-accuracy detection of 11 distinct layout types from the challenging DocLayNet dataset.",
      "The lightweight nano model is optimized to provide an excellent balance of speed and accuracy.",
      "Models are easily accessible and deployable via the Hugging Face Hub.",
      "Includes a comprehensive analysis of model performance to guide real-world deployment choices."
    ],
    "impact": "This project makes advanced document layout analysis accessible to developers. By providing reliable, pre-trained models, it simplifies a critical first step in document AI pipelines, enabling more robust data extraction, content categorization, and automated document processing workflows."
  },
  {
    "id": "proj_retinanet_demystified",
    "title": "RetinaNet Demystified",
    "description": "A simple and deeply commented PyTorch implementation of the RetinaNet paper, built as an educational resource. 📚 Demystify the core concepts of object detection with code that sticks closely to the original paper. 💡",
    "technologies": ["Python", "PyTorch", "Jupyter Notebook", "Google Colab", "ResNet"],
    "githubUrl": "https://github.com/Armaggheddon/retinanet_demystified",
    "liveDemoUrl": "https://colab.research.google.com/github/Armaggheddon/retinanet_demystified/blob/main/run_in_colab.ipynb",
    "logoUrl": "https://github.com/Armaggheddon/retinanet_demystified/raw/main/.github/cover_image.png",
    "isTextLikeLogo": false,
    "displayPopupTextTitle": true,
    "images": [
      "https://github.com/Armaggheddon/retinanet_demystified/raw/main/.github/cover_image.png",
      "https://github.com/Armaggheddon/retinanet_demystified/raw/main/plots/train_eval_avg_loss.png",
      "https://github.com/Armaggheddon/retinanet_demystified/raw/main/plots/training_metrics.png",
      "https://github.com/Armaggheddon/retinanet_demystified/raw/main/plots/evaluation_loss_metrics.png",
      "https://github.com/Armaggheddon/retinanet_demystified/raw/main/model_detections.jpg"
    ],
    "keyFeatures": [
      "The implementation sticks closely to the concepts described in the original paper.",
      "Code blocks are linked back to the specific sections of the paper they implement.",
      "Supports ResNet-18, ResNet-34, ResNet-50, ResNet-101, and ResNet-152 backbones out of the box.",
      "Intentionally omits features like custom BatchNorm layers in the heads to keep the focus on the fundamental architecture."
    ],
    "impact": "This project serves as an educational resource for anyone looking to understand how RetinaNet works under the hood. By stripping away production-level optimizations, it allows a clear focus on the core concepts and makes the original paper more accessible.",
    "role": "The project was developed as an educational resource to provide a clear and simple implementation of the RetinaNet paper."
  },
  {
    "id": "proj_voiceflow",
    "title": "VoiceFlow",
    "description": "Meet VoiceFlow 🎙️🔊, your production-ready microservices platform for all things AI speech! It's designed to make high-performance voice processing a breeze, letting you effortlessly transcribe audio to text and convert text into natural-sounding speech. 🚀",
    "technologies": ["Python", "FastAPI", "Docker", "NVIDIA Triton", "Celery", "Redis", "MinIO", "Gradio", "Whisper"],
    "githubUrl": "https://github.com/Armaggheddon/VoiceFlow",
    "logoUrl": "https://github.com/Armaggheddon/VoiceFlow/raw/main/.github/images/voiceflow.png",
    "isTextLikeLogo": false,
    "displayPopupTextTitle": false,
    "images": [
      "https://github.com/Armaggheddon/VoiceFlow/raw/main/.github/images/demoui_aichat.png",
      "https://github.com/Armaggheddon/VoiceFlow/raw/main/.github/images/demoui_v2t.png",
      "https://github.com/Armaggheddon/VoiceFlow/raw/main/.github/images/demoui_t2v.png",
      "https://github.com/Armaggheddon/VoiceFlow/raw/main/.github/images/demoui_setup.png"
    ],
    "keyFeatures": [
      "High-accuracy audio transcription using Whisper.",
      "Natural-sounding text-to-speech conversion.",
      "Scalable, containerized microservices architecture.",
      "High-performance AI model serving with NVIDIA Triton.",
      "Feature-rich Python client with sync and async support.",
      "Built-in web interface for live recording and demos."
    ],
    "impact": "VoiceFlow provides a scalable, cloud-native platform that makes powerful AI speech services accessible to developers. By simplifying the deployment of complex voice-to-text and text-to-speech models, it enables the integration of advanced voice features into a wide range of applications with ease."
  },
  {
    "id": "proj_gstgeminivision",
    "title": "GstGeminiVision",
    "description": "gstGemini is a GStreamer plugin that brings Gemini AI's analytical power directly into video processing pipelines. 🚀 It's designed for real-time analysis of video streams, enabling capabilities like on-the-fly object detection and scene understanding. The core idea is to embed AI intelligence within the video data flow, making streams inherently 'smarter' as they pass through the system.",
    "technologies": ["Python", "C", "Docker", "Gemini API", "Gstreamer"],
    "githubUrl": "https://github.com/Armaggheddon/GstGeminiVision",
    "logoUrl": "https://github.com/Armaggheddon/GstGeminiVision/raw/main/docs/images/gstgeminivision_logo.png",
    "isTextLikeLogo": true,
    "displayPopupTextTitle": false,
    "images": [
      "https://github.com/Armaggheddon/GstGeminiVision/blob/main/docs/images/examplec_screen.png?raw=true",
      "https://github.com/Armaggheddon/GstGeminiVision/blob/main/docs/images/examplec2_screen.png?raw=true"
    ],
    "keyFeatures": [
      "Effective real-time video analysis through Gemini AI integration.",
      "Broad compatibility with various video formats and resolutions.",
      "Flexible, modular architecture for straightforward incorporation of future AI models.",
      "Comprehensive documentation and practical examples to support developers."
    ],
    "impact": "By embedding AI directly into the video stream, this plugin can significantly enhance video processing. This opens up possibilities for more advanced applications in fields like intelligent surveillance, dynamic media content analysis, and interactive entertainment."
  },
  {
    "id": "proj_bricksfinder",
    "title": "BricksFinder",
    "displayPopupTextTitle": false,
    "description": "For LEGO enthusiasts who've ever spent ages searching for a specific minifigure or brick, BricksFinder offers a smarter way to hunt. 🧱 This AI-powered search engine allows users to find LEGO pieces using either natural text descriptions (like 'knight with a blue shield') or by simply uploading an image of the part. The aim is to provide an intuitive, encyclopedia-like tool that quickly helps you locate exactly what you're looking for in your collection or for your next build. ✨",
    "technologies": ["Transformers", "Python", "LEGO", "Datasets", "Gradio", "Finetuning", "Faiss", "OpenAI CLIP"],
    "githubUrl": "https://github.com/Armaggheddon/BricksFinder",
    "liveDemoUrl": "https://colab.research.google.com/github/Armaggheddon/BricksFinder/blob/main/live_demo/live_demo.ipynb",
    "logoUrl": "https://github.com/Armaggheddon/BricksFinder/raw/main/.github/images/bricksfinder.png",
    "images": [
      "https://github.com/Armaggheddon/BricksFinder/raw/main/.github/images/webui_demo.webp"
    ],
    "keyFeatures": [
      "Development of custom datasets specifically for LEGO minifigures, with another for bricks in progress.",
      "AI-driven search capabilities leveraging fine-tuned CLIP models for intuitive text and image queries.",
      "A user-friendly web interface for easy searching, including links to Rebrickable for further part details.",
      "An interactive Google Colab demo for immediate testing and showcasing of the technology."
    ],
    "impact": "BricksFinder aims to significantly simplify the often time-consuming search for specific LEGO pieces. By making identification easier and faster, it can make the LEGO building experience smoother and more enjoyable for hobbyists and serious builders alike."
  },
    {
    "id": "proj_gemdigest",
    "title": "GemDigest",
    "description": "Ever feel like you're swimming in article links with no time to actually read them? GemDigest is a smart Telegram bot designed to tackle that. 📰 Simply share an article link in a chat, and GemDigest quickly delivers a concise, easy-to-digest summary. Think of it as a helpful reading assistant that gives you the main points on demand, making it easier to stay informed without getting bogged down by lengthy texts. ⚡",
    "technologies": ["Python", "Google Gemini API", "Crawl4AI", "Telegram API (pyTelegramBotAPI)"],
    "githubUrl": "https://github.com/Armaggheddon/GemDigest",
    "logoUrl": "https://github.com/Armaggheddon/GemDigest/raw/main/.github/images/logo.png",
    "images": [
      "https://github.com/Armaggheddon/GemDigest/raw/main/.github/images/cover.png"
    ],
    "keyFeatures": [
      "Leverages the Google Gemini API to generate insightful article summaries.",
      "Seamlessly provides automatic summaries when links are shared in Telegram chats.",
      "Intelligently ignores non-link messages, ensuring chats remain uncluttered.",
      "Designed for flexibility, functioning smoothly in both private and group chat environments."
    ],
    "impact": "GemDigest aims to streamline how users engage with online articles by offering quick, clear summaries. This helps save valuable time and allows people to stay updated on important topics more efficiently, directly within their familiar Telegram interface."
  },
    {
    "id": "proj_clipserve",
    "title": "ClipServe",
    "description": "ClipServe offers a straightforward API solution for developers looking to leverage OpenAI's CLIP model for multimodal tasks. 🖼️ It simplifies the process of generating powerful embeddings from both text and images, and also supports zero-shot image classification. Think of it as a ready-to-use toolkit for bridging the gap between visual and textual data in AI applications. ✨",
    "technologies": ["Docker Compose", "Redis", "Transformers", "Python", "FastAPI", "OpenAI CLIP", "CUDA"],
    "githubUrl": "https://github.com/Armaggheddon/ClipServe",
    "logoUrl": "https://github.com/Armaggheddon/ClipServe/raw/main/docs/images/clip_serve_logo.svg",
    "isTextLikeLogo": false,
    "keyFeatures": [
      "Provides REST APIs for generating text and image embeddings via OpenAI CLIP.",
      "Includes zero-shot image classification capabilities using custom text labels.",
      "Supports efficient batch processing for both text and image inputs.",
      "Designed for ease of deployment with Docker Compose (CPU/GPU) and includes OpenAPI documentation with client examples."
    ],
    "impact": "By offering a user-friendly API for CLIP embeddings and zero-shot classification, ClipServe aims to streamline multimodal AI development. This allows developers to more easily and quickly integrate sophisticated vision-language understanding into their applications."
  },
    {
    "id": "proj_paperllama",
    "title": "PaperLlama",
    "description": "PaperLlama is designed to help users interact intelligently with their documents, especially useful when facing dense research papers or lengthy texts. 📄 Simply upload a PDF or text document, and PaperLlama enables a conversational Q&A experience. Users can ask specific questions, request summaries, or explore topics within the document as if chatting directly with a knowledgeable assistant. 💬",
    "technologies": ["Docker Compose", "Python", "Sqlite3", "Faiss", "Streamlit", "Ollama", "RAG", "Docling"],
    "githubUrl": "https://github.com/Armaggheddon/PaperLlama",
    "logoUrl": "https://github.com/Armaggheddon/PaperLlama/raw/main/.github/images/paper_llama_nobg_border.png",
    "images": [
      "https://github.com/Armaggheddon/PaperLlama/raw/main/.github/images/global_chat_ui.png",
      "https://github.com/Armaggheddon/PaperLlama/raw/main/.github/images/document_chat_ui.png"
    ],
    "keyFeatures": [
      "Implementation of a RAG (Retrieval-Augmented Generation) system for effective document-based question answering.",
      "Support for multiple document formats, primarily PDFs and standard text files.",
      "Efficient model serving and inference leveraging Ollama.",
      "An intuitive, user-friendly interface built with Streamlit for seamless interaction.",
      "Capability to handle batch processing, useful for larger collections of documents."
    ],
    "impact": "The goal of PaperLlama is to make extracting insights from complex documents much more efficient. By allowing users to quickly pinpoint relevant information and get answers without exhaustive reading, it can significantly speed up research and information discovery."
  },
  {
    "id": "proj_whisper2me",
    "title": "Whisper2Me",
    "description": "Whisper2Me is a Telegram bot created to simplify how users handle voice messages. 🎧 Instead of needing to listen to lengthy audio, users can forward any voice note to the bot, which then quickly transcribes it into clear, readable text using OpenAI's Whisper model. It's particularly handy for situations where listening isn't practical, or for those who simply prefer reading. ✨",
    "technologies": ["Python", "Docker", "OpenAI Whisper", "pyTelegramBotAPI"],
    "githubUrl": "https://github.com/Armaggheddon/whisper2me",
    "logoUrl": "https://github.com/Armaggheddon/whisper2me/raw/main/doc/images/shushing_emojy.png",
    "images": [
      "https://github.com/Armaggheddon/whisper2me/raw/main/doc/images/test_message.png"
    ],
    "keyFeatures": [
      "Accurate speech-to-text transcription of Telegram voice messages powered by OpenAI Whisper.",
      "Support for various Whisper model sizes, allowing users to balance speed and accuracy.",
      "Straightforward deployment facilitated by Docker and Docker Compose.",
      "Includes admin features for user management, language settings, and task selection (transcribe/translate).",
      "Offers translation capabilities for voice messages into different languages.",
      "Designed for cross-platform compatibility, running on both ARM-64 and X64 systems.",
      "Incorporates admin notifications for unauthorized command usage."
    ],
    "impact": "This bot offers a convenient solution for Telegram users who frequently receive voice messages, making voice-based communication more accessible and manageable. By providing quick transcriptions, Whisper2Me helps save time and ensures messages can be understood even when listening to audio isn't an option."
  },
  {
    "id": "proj_plainnn",
    "title": "PlainNN.cpp",
    "description": "PlainNN.cpp is an educational project designed to reveal the fundamental workings of neural networks, implemented in clear, straightforward C++. 🧠 It deliberately avoids complex frameworks to offer a 'look under the hood' at the core mechanics. The focus is on understanding the essential mathematics and logic, like how gradients flow backward, all with minimal dependencies and no unnecessary bloat. It’s built for those curious about learning neural networks from the ground up. ✨",
    "technologies": ["C++", "Neural Networks", "Machine Learning"],
    "githubUrl": "https://github.com/Armaggheddon/PlainNN.cpp",
    "logoUrl": "https://github.com/Armaggheddon/PlainNN.cpp/raw/main/docs/images/plain_nn_logo.png",
    "liveDemoUrl": "https://colab.research.google.com/github/Armaggheddon/PlainNN.cpp/blob/main/live_demo/PlainNN_live_demo_colab.ipynb",
    "images": [
      "https://github.com/Armaggheddon/PlainNN.cpp/raw/main/docs/images/live_demo_image.png"
    ],
    "keyFeatures": [
      "A header-only C++ implementation for straightforward integration and study.",
      "Support for common neural network architectures, built from scratch.",
      "Designed for a minimal memory footprint and efficient operations.",
      "Includes comprehensive examples that clearly demonstrate core neural network concepts.",
      "Clean, well-documented C++ code specifically tailored for educational purposes."
    ],
    "impact": "This project serves as an accessible learning tool, helping users grasp the intricate details of neural network implementation without the abstractions of larger libraries. It aims to provide a solid foundation for anyone looking to truly understand what goes on inside a neural network."
  },
  {
    "id": "proj_terminal_viewer",
    "title": "Terminal Viewer",
    "description": "Terminal Viewer brings a touch of retro visual flair to command-line environments. 💻 This tool renders images, videos, and GIFs as character-based art directly within the terminal. It's a fun solution for quickly viewing media on headless servers, or for anyone who appreciates the distinct aesthetic of terminal graphics and ASCII art. ✨",
    "technologies": ["Python", "OpenCV", "ncurses", "Terminal Graphics"],
    "githubUrl": "https://github.com/Armaggheddon/terminal_viewer",
    "images": [
      "https://github.com/Armaggheddon/terminal_viewer/raw/main/docs/terminal_viewer_anim_op.gif"
    ],
    "keyFeatures": [
      "Real-time ASCII art rendering for both static images and animated videos/GIFs.",
      "Support for color output, enhancing the visual experience in compatible terminals.",
      "Adjustable image parameters, including contrast and brightness, for finer control.",
      "Intuitive keyboard controls for managing display settings and playback."
    ],
    "impact": "This project offers a unique way to interact with media in text-based environments. It's particularly useful for developers working on servers without graphical interfaces, or for terminal enthusiasts looking for a novel way to view images and simple animations."
  },
  {
    "id": "proj_tensorrt_yolov8",
    "title": "TensorRT YOLOv8",
    "description": "TensorRT YOLOv8 is a library focused on boosting the inference speed of YOLOv8 models. 🚀 It leverages NVIDIA's TensorRT to optimize these models, significantly accelerating performance for tasks like object detection, segmentation, and pose estimation. The goal is to provide a straightforward way to achieve faster, more efficient real-time image processing with just a few lines of code. ⚡",
    "technologies": ["Python", "TensorRT", "NVIDIA", "YOLOv8", "PyCUDA", "Computer Vision", "ONNX", "Docker"],
    "githubUrl": "https://github.com/Armaggheddon/tensorrt_yolov8",
    "displayPopupTextTitle": true,
    "images": [
      "https://github.com/Armaggheddon/tensorrt_yolov8/raw/main/examples/example_results.png",
      "https://github.com/Armaggheddon/tensorrt_yolov8/raw/main/examples/example_mask_results.png",
      "https://github.com/Armaggheddon/tensorrt_yolov8/raw/main/examples/example_obb_result.png"
    ],
    "keyFeatures": [
      "High-performance YOLOv8 inference achieved through NVIDIA TensorRT engine optimization.",
      "Comprehensive support for various YOLOv8 model types, including detection, segmentation, pose, and classification.",
      "Streamlined ONNX to TensorRT engine conversion using integrated utilities.",
      "An intuitive Pipeline API designed for easy inference and result visualization.",
      "Docker support, utilizing NVIDIA TensorRT base images for simplified deployment.",
      "Automatic drawing of result overlays, making it quick to visualize outputs."
    ],
    "impact": "This library aims to dramatically reduce inference times for YOLOv8, making it a valuable tool for developing high-performance, real-time computer vision applications. By optimizing models with TensorRT, developers can achieve superior speed and efficiency in their deployments."
  }
];

export const SOCIAL_LINKS = {
  github: `https://github.com/${MY_GITHUB_USERNAME}`,
  linkedin: `https://www.linkedin.com/in/brunelloalessandro/`,
  email: `mailto:${MY_EMAIL}`,
  huggingface: `https://huggingface.co/${MY_HUGGINGFACE_USERNAME}`
};