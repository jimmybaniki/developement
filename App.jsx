import React, { useState, useEffect } from 'react';
import { Play, Info, Plus, Search, Bell, Menu, X, ChevronRight, ChevronLeft, Volume2, VolumeX } from 'lucide-react';

const BflexApp = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Gestion du scroll pour la barre de navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      title: "Tendances à Kinshasa",
      movies: [
        { id: 1, title: "Rumba King", img: "https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=400", type: "Documentaire" },
        { id: 2, title: "Kinshasa Mboka Te", img: "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&q=80&w=400", type: "Drame" },
        { id: 3, title: "The Voice Afrique", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400", type: "Show TV" },
        { id: 4, title: "Matonge Nights", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400", type: "Musical" },
        { id: 5, title: "Congo River Mysteries", img: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=400", type: "Aventure" },
        { id: 11, title: "Gombe Lifestyle", img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=400", type: "Série" },
        { id: 12, title: "Sapeurs Forever", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400", type: "Mode" },
        { id: 13, title: "Le Grand Marché", img: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=400", type: "Réalité" },
        { id: 14, title: "Boxing Bandal", img: "https://images.unsplash.com/photo-1509190159455-6ed21797e54a?auto=format&fit=crop&q=80&w=400", type: "Sport" },
        { id: 15, title: "Ndombolo Dance Off", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=400", type: "Compétition" },
      ]
    },
    {
      title: "Humour Congolais",
      movies: [
        { id: 6, title: "L'Inspecteur", img: "https://images.unsplash.com/photo-1527224857853-e3df217f98c7?auto=format&fit=crop&q=80&w=400", type: "Comédie" },
        { id: 7, title: "Mariage Forcé", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400", type: "Romance" },
        { id: 8, title: "Kin Vibe", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400", type: "Comédie" },
        { id: 9, title: "Les Oncles de Matonge", img: "https://images.unsplash.com/photo-1485872299829-c673f5194813?auto=format&fit=crop&q=80&w=400", type: "Série" },
        { id: 10, title: "Gombo Story", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400", type: "Cuisine" },
        { id: 16, title: "Le Voisin Gênant", img: "https://images.unsplash.com/photo-1543584730-05ec4104d642?auto=format&fit=crop&q=80&w=400", type: "Sketch" },
        { id: 17, title: "Kilo de Rire", img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=400", type: "Stand-up" },
        { id: 18, title: "Visa Refusé", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400", type: "Comédie" },
        { id: 19, title: "Maman Kin", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400", type: "Famille" },
        { id: 20, title: "Chauffeur de Taxi", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=400", type: "Aventure" },
      ]
    }
  ];

  const MovieCard = ({ movie }) => (
    <div 
      className="relative flex-none w-40 md:w-64 h-28 md:h-36 bg-gray-900 rounded-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:z-20 group border-b-2 border-transparent hover:border-yellow-500 shadow-lg"
      onClick={() => setSelectedMovie(movie)}
    >
      <img src={movie.img} alt={movie.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
      <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black via-black/60 to-transparent w-full">
        <p className="text-white text-[10px] md:text-xs font-bold truncate">{movie.title}</p>
        <span className="text-[8px] md:text-[10px] text-yellow-500 font-bold uppercase tracking-wider">{movie.type}</span>
      </div>
    </div>
  );

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-yellow-500 selection:text-black">
      {/* Barre de navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-12 py-3 flex items-center justify-between ${isScrolled ? 'bg-black shadow-lg border-b border-yellow-500/20' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
        <div className="flex items-center gap-6 md:gap-10">
          <h1 className="text-2xl md:text-3xl font-black text-yellow-500 tracking-tighter drop-shadow-md">BFLEX</h1>
          <div className="hidden lg:flex gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-yellow-500 transition-colors">Accueil</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Séries</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Films</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Nouveautés</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Ma Liste</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-yellow-500 transition-colors" />
          <span className="hidden sm:inline text-xs font-black border-x border-gray-800 px-4 tracking-tighter">KIN PRO</span>
          <Bell className="w-5 h-5 cursor-pointer hover:text-yellow-500 transition-colors" />
          <div className="w-8 h-8 bg-yellow-600 rounded-sm cursor-pointer border border-yellow-400/50 flex items-center justify-center text-[10px] font-bold text-black">K</div>
        </div>
      </nav>

      {/* Section Hero */}
      <section className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
          alt="Kinshasa en arrière-plan"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute bottom-[15%] md:bottom-[20%] left-4 md:left-12 max-w-2xl px-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-yellow-500 text-black text-[10px] font-black px-2 py-0.5 rounded">EXCLUSIVITÉ BFLEX</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-4 drop-shadow-xl uppercase tracking-tighter text-white italic">
            KINOIS DE <span className="text-yellow-500 drop-shadow-none">CŒUR</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-300 mb-6 font-medium line-clamp-3 leading-relaxed max-w-lg">
            De la Gombe à Victoire, suivez le destin croisé de trois jeunes artistes prêts à tout pour conquérir la scène internationale du Ndombolo.
          </p>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-yellow-500 text-black px-6 md:px-10 py-2 md:py-3 rounded-sm font-black hover:bg-yellow-400 transition-all shadow-xl">
              <Play className="fill-black w-5 h-5" /> Lecture
            </button>
            <button className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 md:px-10 py-2 md:py-3 rounded-sm font-bold hover:bg-white/20 transition backdrop-blur-md">
              <Info className="w-5 h-5" /> Infos
            </button>
          </div>
        </div>
      </section>

      {/* Lignes de catégories */}
      <main className="relative z-10 -mt-20 md:-mt-32 pb-20">
        {categories.map((cat, idx) => (
          <div key={idx} className="mb-10 md:mb-16 px-4 md:px-12">
            <div className="flex justify-between items-end mb-4 pr-4">
              <h3 className="text-lg md:text-2xl font-black hover:text-yellow-500 transition cursor-pointer inline-flex items-center group uppercase tracking-tighter">
                {cat.title} 
                <ChevronRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500" />
              </h3>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Voir tout</span>
            </div>
            <div className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-6 px-1">
              {cat.movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Fenêtre modale des détails */}
      {selectedMovie && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="bg-[#111] w-full max-w-4xl rounded-sm overflow-hidden relative animate-in fade-in zoom-in duration-300 border border-yellow-500/20">
            <button 
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-4 z-10 p-1 bg-black/80 border border-yellow-500/50 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="h-64 md:h-96 w-full relative">
              <img src={selectedMovie.img} alt={selectedMovie.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <h4 className="text-3xl md:text-5xl font-black mb-4 text-white drop-shadow-md italic uppercase">{selectedMovie.title}</h4>
                <div className="flex gap-3">
                  <button className="bg-yellow-500 text-black px-6 md:px-10 py-2 rounded-sm font-black hover:bg-yellow-400 transition shadow-lg text-sm">Lecture</button>
                  <button className="bg-transparent border-2 border-yellow-500/50 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition text-yellow-500">
                    <Plus className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 text-yellow-500 font-black text-xs">
                  <span className="bg-yellow-500/10 px-2 py-0.5 rounded italic">98% Pertinence</span>
                  <span className="text-gray-400 border border-gray-700 px-1">4K ULTRA HD</span>
                  <span className="text-gray-400">2025</span>
                </div>
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed font-medium">
                  Une immersion totale au cœur de Kinshasa. Découvrez {selectedMovie.title}, une production exclusive <span className="text-yellow-500 font-black">BFLEX</span> qui repousse les limites de la narration congolaise.
                </p>
              </div>
              <div className="w-full md:w-64 text-xs space-y-3 text-gray-400 border-l border-yellow-500/10 pl-6">
                <div><span className="text-gray-600 font-black uppercase text-[9px] block mb-1">Casting</span> Fally Ipupa, Innoss'B, Rebo</div>
                <div><span className="text-gray-600 font-black uppercase text-[9px] block mb-1">Genres</span> {selectedMovie.type}, Kin Culture, Drame</div>
                <div><span className="text-gray-600 font-black uppercase text-[9px] block mb-1">Vibe</span> Intense, Rythmé, Authentique</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pied de page */}
      <footer className="px-6 md:px-12 py-16 bg-black text-gray-500 text-[11px] border-t border-yellow-500/10 font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2 mb-10 text-yellow-500/40">
          <h2 className="text-2xl font-black tracking-tighter">BFLEX</h2>
          <span className="text-[8px] border border-yellow-500/20 px-1 py-0.5">RDC VERSION</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <ul className="space-y-3">
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Audio et sous-titres</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Presse</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Confidentialité</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Contact</li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Description audio</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Investisseurs</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Légal</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Bons d'achat</li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Centre d'aide</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Carrières</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Cookies</li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Cartes cadeaux</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Conditions</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Siège Kinshasa</li>
          </ul>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px]">&copy; 2025 BFLEX - LA PLATEFORME N°1 DE LA RDC.</p>
          <div className="flex gap-6 opacity-30">
             <div className="w-5 h-5 bg-white rounded-full"></div>
             <div className="w-5 h-5 bg-white rounded-full"></div>
             <div className="w-5 h-5 bg-white rounded-full"></div>
          </div>
        </div>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        main > div {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BflexApp;
