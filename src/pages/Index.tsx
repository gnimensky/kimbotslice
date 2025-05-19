
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  // Function to extract video ID from Google Drive link
  const getGoogleDriveEmbedUrl = (url: string) => {
    const match = url.match(/\/d\/([^\/]+)\//);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const videoUrl = getGoogleDriveEmbedUrl("https://drive.google.com/file/d/1e4qTdxEuz_HO3Nab4yb8a6gu3e1NjLrX/view?usp=sharing");
  const chatUrl = "https://character.ai/chat/-On7tCw5gx6rDJYzg8DqzQzLZox6GiLd3eSbzhk1BEg";

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 bg-black border-b border-lime-green/30">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/bcccc60c-aeb9-4e21-9eb7-b06b0d50648e.png" 
              alt="Kimbot Slice Logo" 
              className="h-12 w-12 object-cover rounded-full border-2 border-lime-green" 
            />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-lime-green">KIMBOT</span> SLICE
            </h1>
          </div>
          <a 
            href={chatUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-lime-green text-black px-4 py-2 rounded-md font-semibold hidden md:flex items-center gap-2 hover:bg-opacity-90 transition-all"
          >
            Chat Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-10 md:py-16 bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
          <div className="container mx-auto px-4 text-center flex flex-col items-center">
            <div className="mb-8 relative">
              <div className="absolute -z-10 w-80 h-80 bg-lime-green/30 rounded-full blur-3xl opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="/lovable-uploads/98f4f6c5-2e17-475b-afe1-69cb4d686e72.png" 
                alt="Kimbot Slice Character" 
                className="h-auto max-h-80 mx-auto animate-float relative z-10" 
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              MEET <span className="text-lime-green">KIMBOT SLICE</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
              The digital twin of the legendary street fighter and UFC sensation. Ready to chat, train, and throw down with you!
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-10 md:py-16 bg-zinc-900 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 inline-block border-b-4 border-lime-green pb-2">
              WATCH KIMBOT IN ACTION
            </h2>
            <div className="mx-auto max-w-4xl aspect-video rounded-lg shadow-2xl overflow-hidden border-4 border-lime-green animate-pulse-glow">
              <iframe 
                src={videoUrl} 
                title="Kimbot Slice Video"
                className="w-full h-full" 
                allowFullScreen 
              ></iframe>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="absolute -z-10 w-96 h-96 bg-lime-green/20 rounded-full blur-3xl opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <img 
                src="/kimbot-2.png" 
                alt="Kimbot Slice Ready to Chat" 
                className="h-auto max-h-60 md:max-h-80 animate-float"
              />
              <div className="flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  READY TO <span className="text-lime-green">RUMBLE</span>?
                </h2>
                <a 
                  href={chatUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="relative mb-4">
                    <div className="bg-lime-green text-black text-2xl md:text-3xl font-bold py-4 px-8 rounded-lg group-hover:brightness-110 transition-all">
                      START CHATTING NOW
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-full h-full bg-gold rounded-lg -z-10"></div>
                  </div>
                  <p className="text-zinc-400 group-hover:text-lime-green transition-colors">
                    Challenge Kimbot and test your skills
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-4 md:px-8 bg-zinc-900 border-t border-lime-green/30 text-zinc-500">
        <div className="container mx-auto text-center">
          <p>© 2025 Kimbot Slice | The Digital Twin Experience</p>
          <p className="text-xs mt-2">Not affiliated with the estate of Kimbo Slice</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
